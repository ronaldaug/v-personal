module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/scss/_theme.scss";
        @import "@/scss/_mixin.scss";
        @import "@/scss/_global.scss";
        @import "@/scss/_ripple-effect.scss";
        @import "@/scss/_spinner.scss";
        @import "@/scss/_overwrite.scss";`
      }
    }
  }
};