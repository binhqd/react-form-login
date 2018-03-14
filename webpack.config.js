const webpack = require('webpack');
const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const nodeExternals = require('webpack-node-externals');

const sourcePath = path.join(__dirname, './');

const _module = {
  rules: [
    {
      test: /\.(ico|jpg|jpeg|png|eot|ttf|woff|svg)/,
      loader: 'file-loader'
    }, {
      test: /\.(js|jsx)$/,
      exclude: /(node_modules)/,
      loader: 'babel-loader',
      query: {
        presets: [['es2015', {
          modules: false
        }], 'react', 'stage-2'],
        plugins: ['transform-runtime', 'transform-decorators-legacy']
      }
    }, {
      test: /\.less$/,
      use: [
        'css-loader',
        'less-loader'
      ]
    }, {
      test: /\.(scss|css)$/,
      use: [
        {
          loader: 'css-loader',
          options: {
            modules: true,
            importLoaders: true,
            localIdentName: '[hash]-[local]'
          }
        },
        'sass-loader'
      ]
    }, {
      test: /\.(txt)$/,
      loader: 'raw-loader'
    }, {
      test: /\.(md)$/,
      use: [
        'html', 'highlight', 'markdown'
      ]
    }
  ]
};

module.exports = function () {
  const isProd = process.env.NODE_ENV === 'production';

  const plugins = [
    // new BundleAnalyzerPlugin()
  ];

  const appEntry = [
    // 'babel-polyfill',
    'src/index.js'
  ];

  const appResolver = {
    extensions: ['.webpack-loader.js', '.web-loader.js', '.loader.js', '.js', '.jsx'],
    alias: {
      node_modules: path.resolve(__dirname, './node_modules/'),
      base: path.resolve(__dirname, './'),
      src: path.resolve(__dirname, './src/')
    },
    modules: [
      path.resolve(__dirname, 'node_modules'),
      'node_modules',
      sourcePath
    ]
  };

  const commonConfig = {
    devtool: isProd ? 'source-map' : 'eval-source-map',
    context: sourcePath,
    entry: appEntry,
    output: {
      path: path.join(__dirname, 'build'),
      publicPath: isProd ? '/' : '/static',
      filename: isProd ? '[hash]-bundle.js' : 'bundle.js',
      libraryTarget: 'commonjs'
    },
    module: _module,
    resolve: appResolver,
    plugins,
    performance: isProd && {
      hints: 'warning'
    },
    stats: {
      colors: {
        green: '\u001b[32m'
      }
    },
    node: {
      fs: 'empty',
      child_process: 'empty',
      global: true,
      process: true,
      Buffer: true,
      __filename: true,
      __dirname: true,
      setImmediate: false
    },
    externals: [
      // nodeExternals()
    ]
  };

  return commonConfig;
};
