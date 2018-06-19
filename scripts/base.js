// 路径处理
import { resolve } from './paths';

// 配置合并
import merge from 'webpack-merge';

// 压缩 JavaScript
import UglifyJS from 'uglifyjs-webpack-plugin';

// 压缩 CSS
import OptimizeCSS from 'optimize-css-assets-webpack-plugin';

// 基础配置
const baseConfig = merge(
  {},
  {
    // 模式
    mode: 'none',

    // 目标
    target: 'web',

    // 控制台错误提示
    devtool: 'source-map',

    // 上下文
    context: resolve(),

    // 插件
    plugins: [],

    // 优化
    optimization: {
      // 启用压缩
      minimize: false,

      // 压缩工具
      minimizer: [
        // JavaScript 压缩
        new UglifyJS({uglifyOptions: { output: { comments: false } }}),

        // CSS 压缩
        new OptimizeCSS({cssProcessorOptions: { autoprefixer: false, sourcemap: true, discardComments: true, safe: true }})
      ]
    },

    // 入口
    entry: {
      app: ['@babel/polyfill', './src']
    },

    // 出口
    output: {
      path: resolve('dist'),
      filename: 'assets/scripts/[name].[hash:5].js',
      chunkFilename: 'assets/scripts/[name].[chunkhash:5].js',
      publicPath: ''
    },

    // 解析
    resolve: {
      // webpack 解析模块时应该搜索的目录
      modules: ['node_modules'],

      // 自动解析确定的扩展
      extensions: ['.ts', '.tsx', '.js', '.jsx', '.mjs', '.json'],

      // 创建 import 或 require 的别名
      alias: {
        '@': resolve('src'),
        '@app': resolve('src')
      }
    },

    // 模块
    module: {
      rules: [
        // ESLint
        {
          test: /\.(js|jsx|mjs)$/,
          exclude: /^(node_modules|bower_components)$/,
          enforce: 'pre',
          loader: 'eslint-loader'
        },

        {
          oneOf: [
            // Babel
            {
              test: /\.(js|jsx|mjs)$/,
              loader: 'babel-loader',
              options: {},
              exclude: ['node_modules']
            },

            // 字体
            {
              test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
              loader: 'url-loader',
              options: {
                limit: 10000,
                name: 'assets/fonts/[name].[hash:7].[ext]'
              }
            },

            // 图片
            {
              test: /\.(png|jpe|jpeg|gif)(\?.*)?$/,
              loader: 'url-loader',
              options: { limit: 10000, name: 'assets/images/[name].[hash:7].[ext]' }
            },

            // 媒体
            {
              test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
              loader: 'url-loader',
              options: {
                limit: 10000,
                name: 'assets/media/[name].[hash:7].[ext]'
              }
            }
          ]
        }
      ]
    }
  }
);

export default baseConfig;
