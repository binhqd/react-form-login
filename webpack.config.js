const path = require('path');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const nodeExternals = require('webpack-node-externals');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const sourcePath = path.join(__dirname, './');
const isProd = process.env.NODE_ENV === 'production';

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
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: true,
              localIdentName: '[local]',
              minimize: !!isProd
            }
          },
          'sass-loader'
        ]
      })
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
  const plugins = [
    // new BundleAnalyzerPlugin(),
    new ExtractTextPlugin({ filename: (isProd ? 'style.min.css' : 'style.css'), allChunks: true })
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
    devtool: isProd ? 'source-map' : 'eval',
    context: sourcePath,
    entry: appEntry,
    output: {
      path: path.join(__dirname, 'dist'),
      publicPath: isProd ? '/' : '/static',
      filename: isProd ? 'react-form-login.min.js' : 'react-form-login.js',
      libraryTarget: 'commonjs'
    },
    module: _module,
    resolve: appResolver,
    plugins,
    optimization: {
      minimize: !!isProd,
      minimizer: !isProd ? [] : [
        new UglifyJsPlugin({
          uglifyOptions: {
            warning: 'verbose',
            ecma: 6,
            beautify: false,
            compress: false,
            comments: false,
            mangle: false,
            toplevel: false,
            keep_classnames: true,
            keep_fnames: true
          }
        })
      ]
    },
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
