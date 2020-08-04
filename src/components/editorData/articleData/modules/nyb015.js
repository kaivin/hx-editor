/*
 * @Author: your name
 * @Date: 2019-12-30 12:29:20
 * @LastEditTime: 2020-06-08 18:07:17
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \hx-editor\src\components\editorData\articleData\modules\nyb015.js
 */ 
export function getHtmlData (){
    return {
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        align:'left', // left(左对齐)|center(居中对齐)|right(右对齐)        
        style:'icon', // icon(图标)|number(数字)|other(其他)
        fileName:'nyb015.js', // 该文件的文件名
        class:'smalltxt015',// 用来给js使用添加页面内样式使用
        styleWebCode:'.smalltxt015{position:relative;padding:15px 25px;background-size:100%;background:-webkit-linear-gradient(top, rgb(1,102,155), rgb(2,143,199));color:#fff !important;}.smalltxt015:before{content:"";position:absolute;left:5px;right:5px;top:5px;bottom:5px;border:1px solid #fff;}.smalltxt015-theme2 p{color: #fff;margin:10px 0;}', // PC端样式
        styleWapCode:'.smalltxt015{position:relative;padding:0.26667rem 0.33333rem;background:-webkit-linear-gradient(top, rgb(1,102,155), rgb(2,143,199));color:#fff !important;margin:0.26667rem 0.45rem;}.smalltxt015:before{content:"";position:absolute;left:0.06667rem;right:0.06667rem;top:0.06667rem;bottom:0.06667rem;border:1px solid #fff;}.smalltxt015-theme2 p{color: #fff; margin: .1333rem 0rem;}', // 移动端样式
        htmlString:'<p class="smalltxt015">正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文</p>'
    };
}