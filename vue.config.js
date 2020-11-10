module.exports = {
  devServer: {
    proxy: {
      '/api/': {
        target: 'http://localhost/backecore/index.php',
        changeOrigin: true, // so CORS doesn't bite us. 
        timeout: 6000,
        secure: false,
      }
    }
  },
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