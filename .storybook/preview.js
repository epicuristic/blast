import '../public/main.css';
import { themes } from '@storybook/theming';
import theme from './theme';

let setDocsTheme = (configDocsTheme) => {
  if (configDocsTheme === 'dark') {
    return themes.dark;
  } else if (configDocsTheme === 'custom') {
    return theme;
  } else {
    return themes.normal;
  }
};

const customViewports = JSON.parse(process.env.STORYBOOK_VIEWPORTS);

const preview = {
  parameters: {
    viewport: {
      viewports: customViewports
    },
    controls: {
      expanded: JSON.parse(process.env.STORYBOOK_EXPANDED_CONTROLS)
    },
    server: {
      url: process.env.STORYBOOK_SERVER_URL
    },
    layout: 'centered',
    status: {
      statuses: JSON.parse(process.env.STORYBOOK_STATUSES)
    },
    docs: {
      extractComponentDescription: (component, { notes }) => {
        if (notes) {
          return typeof notes === 'string'
            ? notes
            : notes.markdown || notes.text;
        }
        return null;
      },
      theme: setDocsTheme(JSON.parse(process.env.STORYBOOK_DOCS_THEME))
    },
    options: {
      storySort: (previous, next) => {
        const customSort = JSON.parse(process.env.STORYBOOK_SORT_ORDER);
        const previousIndex = customSort.indexOf(previous.title) !== -1 ? customSort.indexOf(previous.title) : 999;
        const nextIndex = customSort.indexOf(next.title) !== -1 ? customSort.indexOf(next.title) : 999;
        return previousIndex === 999 && nextIndex === 999 ? 0 : previousIndex - nextIndex;
      }
    }
  },
  globalTypes: JSON.parse(process.env.STORYBOOK_GLOBAL_TYPES)
};

export default preview;
