const config = {
  stories: ['../stories/**/*.stories.json'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@storybook/addon-designs',
    '@epicuristic/storybook-source-view',
    '@etchteam/storybook-addon-status'
  ],
  docs: {
    autodocs: 'tag',
    defaultName: 'Docs'
  },
  features: {
    storyStoreV7: false
  },
  framework: {
    name: '@storybook/server-webpack5',
    options: {
      quiet: true
    }
  },
  staticDirs: [process.env.STORYBOOK_STATIC_PATH]
};

export default config;
