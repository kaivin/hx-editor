/*
 * @Author: your name
 * @Date: 2019-12-30 12:29:20
 * @LastEditTime: 2020-06-08 18:05:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \hx-editor\src\components\editorData\articleData\modules\nyb003.js
 */ 
export function getHtmlData (){
    return {
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'橙色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        fileName:'nyb003.js', // 该文件的文件名
        class:'smalltxt003',// 用来给js使用添加页面内样式使用
        styleWebCode:'.smalltxt003{position:relative;padding:15px !important;border:1px solid #f6b37f;}.smalltxt003:before{content:"";position:absolute;border-width:1px;border-color:#f6b37f;border-style:dashed;left:5px;top:5px;right:5px;bottom:5px;}', // PC端样式
        styleWapCode:'.smalltxt003{position:relative;padding:0.26667rem 0.4rem;border:1px solid #f6b37f;margin:0.53333rem 0rem;}.smalltxt003:before{content:"";position:absolute;border:1px #f6b37f dashed;left:0.13333rem;top:0.13333rem;right:0.13333rem;bottom:0.13333rem;}', // 移动端样式
        htmlString:'<p class="smalltxt003">正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文</p>'
    };
}