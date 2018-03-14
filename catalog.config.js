const path = require('path');

module.exports = {
  webpack: (catalogWebpackConfig) => {
    return {
      ...catalogWebpackConfig,
      // output: {
      //   path: path.join(__dirname, 'docs/build'),
      //   pathinfo: false,
      //   filename: 'static/[name].[hash:8].js',
      //   chunkFilename: 'static/[name].[hash:8].chunk.js',
      //   publicPath: './'
      // }
    };
  }
};
