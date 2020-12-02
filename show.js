/*
 * @Author: jiazhiteng@lexue.com
 * @Date: 2020-12-02 16:57:04
 * @LastEditTime: 2020-12-02 16:58:47
 * @LastEditors: JiaZhiteng
 * @Description: 
 * @FilePath: /ztj-wbpck/show.js
 */

// 操作DOM元素，将content显示到页面上
function show(content){
  window.document.getElementById('app').innerHTML('hello'+content)
}

module.exports = show;
