module.exports = {
  lintOnSave: false,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/ttInch/'
    : '/',
  css: {
    extract: false,
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/assets/scss/main.scss";

        `
      }
    }
  }
}
