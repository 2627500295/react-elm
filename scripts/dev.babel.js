// 路径处理
import { resolve } from './paths';

// webpack
import { HotModuleReplacementPlugin, NamedModulesPlugin } from 'webpack';

// 配置合并
import merge from 'webpack-merge';

// 基本配置
import baseConfig from './base';

// HTML
import HtmlPlugin from 'html-webpack-plugin';
import AddAssetHtmlPlugin from 'add-asset-html-webpack-plugin';

// 清理目录
import CleanPlugin from 'clean-webpack-plugin';

// 复制
import CopyPlugin from 'copy-webpack-plugin';

// CSS 抽取
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

// 开发配置
const devConfig = merge(baseConfig, {
  // 模式
  mode: 'development',

  // 开发用 Server
  devServer: {
    host: '127.0.0.1',
    port: process.env.PORT || 8000,

    // bundle目录
    publicPath: '/',

    // 静态目录
    contentBase: resolve('public'),

    // 不跳转
    historyApiFallback: true,

    // 热加载
    hot: true,

    // 内联样式
    inline: true,

    // 打开浏览器
    open: true,

    // 代理
    proxy: {
      '/posts': {
        target: 'https://jsonplaceholder.typicode.com',
        secure: false,
        changeOrigin: true,
      },
      '/api/*': {
        target: 'https://h5.ele.me/restapi',
        secure: false,
        changeOrigin: true,
        headers: {
          Host: 'h5.ele.me',
          Referer: 'https://h5.ele.me/'
        },
        pathRewrite: {
          '^/api/bgs/poi/reverse_geo_coding': '/bgs/poi/reverse_geo_coding',
          '^/api/bgs/weather/current': '/bgs/weather/current',
          '^/api/shopping/v2/entries': '/shopping/v2/entries'
        }
      }
    }
  },

  // 模块
  module: {
    // 规则
    rules: [
      // CSS / PostCSS
      {
        test: /\.(css|postcss)/,
        use: [
          { loader: 'style-loader', options: { sourceMap: true } },
          { loader: 'css-loader', options: { sourceMap: true } },
          { loader: 'postcss-loader', options: { sourceMap: true } }
        ]
      },

      // Sass
      {
        test: /\.(sass|scss)/,
        use: [
          { loader: 'style-loader', options: { sourceMap: true } },
          { loader: 'css-loader', options: { sourceMap: true } },
          { loader: 'postcss-loader', options: { sourceMap: true } },
          { loader: 'sass-loader', options: { sourceMap: true } }
        ]
      },

      // Stylus
      {
        test: /\.(styl|stylus)/,
        use: [
          { loader: 'style-loader', options: { sourceMap: true } },
          { loader: 'css-loader', options: { sourceMap: true } },
          { loader: 'postcss-loader', options: { sourceMap: true } },
          { loader: 'stylus-loader', options: { sourceMap: true } }
        ]
      },

      // Less
      {
        test: /\.less/,
        use: [
          { loader: 'style-loader', options: { sourceMap: true } },
          { loader: 'css-loader', options: { sourceMap: true } },
          { loader: 'postcss-loader', options: { sourceMap: true } },
          { loader: 'less-loader', options: { sourceMap: true } }
        ]
      }
    ]
  },

  // 插件
  plugins: [
    // HTML
    new HtmlPlugin({
      template: './public/index.html',
      favicon: './public/favicon.ico'
    }),

    // 更新组件时在控制台输出组件的路径而不是数字ID，用在开发模式
    new NamedModulesPlugin(),

    // 注入热替换插件
    new HotModuleReplacementPlugin()
  ]
});

// 导出默认
export default devConfig;
