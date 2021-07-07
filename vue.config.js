module.exports = {
    publicPath:'/CatQuizz/',
    css: {
      loaderOptions: {
        sass: {
          prependData: `
            @import "@/scss/_variables.scss";
          `
        }
      }
    }
  };