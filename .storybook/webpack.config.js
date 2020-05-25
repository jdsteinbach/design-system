const vueConfig = require("@vue/cli-service/webpack.config.js");

module.exports = async ({ config, mode }) => {
  // Use Sass
  config.module.rules.push({
    test: /\.scss$/,
    use: [
      'style-loader',
      'css-loader',
      {
        loader: 'sass-loader',
        options: {
          data: `@import "src/assets/scss/_mixins.scss";`
        }
      }
    ],
  });

  // Vue Info
  config.module.rules.push({
    test: /\.vue$/,
    loader: 'vue-docgen-loader',
    enforce: 'post'
  });

  // @ Alias
  config.resolve = {
    ...vueConfig.resolve,
    alias: {
      ...vueConfig.resolve.alias,
      vue$: config.resolve.alias.vue$
    }
  };

  return config;
};
