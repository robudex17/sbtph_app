module.exports = {
  publicPath: '/sbtph_app', // use '/' if in development mode
  transpileDependencies: ['@vuepic/vue-datepicker'],

  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'SBTPH APP',
    },
  },
};
