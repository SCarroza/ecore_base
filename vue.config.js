module.exports = {
  "transpileDependencies": [
    "vuetify",
    'vuex-module-decorators'
  ],
  chainWebpack: config => {
    config.plugins.delete('pwa');
    config.plugins.delete('workbox');
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/dist'
    : '/'
}