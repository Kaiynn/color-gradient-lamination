/*
 * @Author: kayinn许小强 79544105@qq.com
 * @Date: 2023-03-03 15:20:28
 * @LastEditors: kayinn许小强 79544105@qq.com
 * @LastEditTime: 2023-03-06 16:59:36
 * @FilePath: /color-gradient/webpack.common.js
 * @Description: webpack公共配置文件
 */
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode:'production',
    entry: {
      "index.cjs": {
        import: './src/index.ts',
        library: {
          type: 'commonjs2',
        },
  
      },
      "index.esm": {
        import: './src/index.ts',
        library: {
          type: 'module',
        },
      },
    },
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: "[name].js",
        clean: true,
    },
    module: {
        rules: [
          {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/
          }
        ]
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ]
    },
    plugins: [
      new CleanWebpackPlugin({
        dry: false,   						
        cleanOnceBeforeBuildPatterns:[
          '**/*',
        ]
      }),
    ],
    experiments: {
      outputModule: true
    }
}