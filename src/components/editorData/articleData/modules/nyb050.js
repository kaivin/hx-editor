/*
 * @Author: your name
 * @Date: 2019-12-30 12:29:20
 * @LastEditTime: 2020-06-08 18:14:52
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \hx-editor\src\components\editorData\articleData\modules\nyb050.js
 */ 
export function getHtmlData (){
    return {
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'蓝色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        fileName:'nyb050.js', // 该文件的文件名
        class:'smalltxt050',// 用来给js使用添加页面内样式使用
        styleWebCode:'.smalltxt050{position:relative;padding: 10px 20px;margin-top: 30px;margin-bottom: 30px;}.smalltxt050:before{content:"";background:#c7e5ff;position:absolute;left:0;right:0;top:0;bottom:0;transform: rotate(-1deg);-ms-transform: rotate(-1deg);-moz-transform: rotate(-1deg);-webkit-transform: rotate(-1deg);-o-transform: rotate(-1deg);z-index:1;}.smalltxt050:after{content:"";background:#fff;border:2px solid #4a77ce;position:absolute;left:0;right:0;top:0;bottom:0;z-index:2;}.smalltxt050 p{clear:both;position:relative;z-index:3;margin: 10px 0px!important;}', // PC端样式
        styleWapCode:'.smalltxt050{position:relative;padding:0.13333rem 0.2rem;margin:0.66667rem 0rem !important;}.smalltxt050:before{content:"";background:#c7e5ff;position:absolute;left:0;right:0;top:0;bottom:0;transform:rotate(-2deg);-ms-transform:rotate(-2deg);-moz-transform:rotate(-2deg);-webkit-transform:rotate(-2deg);-o-transform:rotate(-2deg);z-index:1;}.smalltxt050:after{content:"";background:#fff;border:2px solid #4a77ce;position:absolute;left:0;right:0;top:0;bottom:0;z-index:2;}.smalltxt050 p{clear:both;padding:0.13333rem 0rem;position:relative;z-index:3;margin:0px;}', // 移动端样式
        htmlString:'<div class="smalltxt050"><p>正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文</p></div>'
    };
}