module.exports = {
    publicPath:'/MrCatQuizz/',
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