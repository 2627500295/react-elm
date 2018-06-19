import { HashedModuleIdsPlugin } from 'webpack';
import merge from 'webpack-merge';

import baseConfig from './base';

import ExtractTextPlug from 'extract-text-webpack-plugin';

// 清理目录
import CleanPlugin from 'clean-webpack-plugin';

// 复制
import CopyPlugin from 'copy-webpack-plugin';

const cssExtract = new ExtractTextPlug({
  filename: 'css.css',
  allChunks: true
});

const sassExtract = new ExtractTextPlug({
  filename: 'css.css',
  allChunks: true
});

const buildConfig = merge(baseConfig, {
  mode: 'production',

  module: {
    rules: [
      {
        test: /\.(css|postcss)/,
        loader: cssExtract.extract({
          fallback: {
            loader: 'style-loader',
            options: {
              sourceMap: true
            }
          },
          use: [
            {
              loader: 'css-loader',
              options: { sourceMap: true }
            },
            {
              loader: 'postcss-loader',
              options: { sourceMap: true }
            }
          ]
        })
      },
      {
        test: /\.(sass|scss)/,
        use: sassExtract.extract({
          fallback: {
            loader: 'style-loader',
            options: {
              sourceMap: true
            }
          },
          use: [
            {
              loader: 'css-loader',
              options: { sourceMap: true }
            },
            {
              loader: 'postcss-loader',
              options: { sourceMap: true }
            },
            {
              loader: 'sass-loader',
              options: { sourceMap: true }
            }
          ]
        })
      }
    ]
  },

  plugins: [cssExtract, sassExtract, new HashedModuleIdsPlugin()],

  optimization: {
    splitChunks: {
      cacheGroups: {
        // 抽取所有样式文件到一个文件内
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          enforce: true
        }
      }
    }
  }
});

export default buildConfig;
