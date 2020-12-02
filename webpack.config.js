/*
 * @Author: jiazhiteng
 * @Date: 2020-12-02 16:57:15
 * @LastEditTime: 2020-12-02 17:00:30
 * @LastEditors: JiaZhiteng
 * @Description: 
 * @FilePath: /ztj-wbpck/webpack.config.js
 */

const path = require('path');

module.exports = {
  // JavaScript执行入口文件
  entry: './main.js',
  output:{
    // 将所有依赖的模块合并输出到一个bundle.js文件
    filename: 'bundle.js',
    // 将输出文件都放到dist目录下
    path: path.resolve(__dirname, './dist')
  }
}
