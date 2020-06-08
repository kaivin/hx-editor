/*
 * @Author: your name
 * @Date: 2019-12-30 12:29:20
 * @LastEditTime: 2020-06-08 18:09:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \hx-editor\src\components\editorData\articleData\modules\nyb026.js
 */ 
export function getHtmlData (){
    return {
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'绿色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        fileName:'nyb026.js', // 该文件的文件名
        class:'smalltxt026',// 用来给js使用添加页面内样式使用
        styleWebCode:'.smalltxt026{position:relative;border-radius:10px;border:1px dashed #a4e2c6;z-index:10;padding:10px 15px !important;}.smalltxt026:before{content:"";border-radius:10px;position:absolute;left:5px;right:5px;bottom:5px;top:5px;background:#a4e2c6;z-index:-1;}', // PC端样式
        styleWapCode:'.smalltxt026{position:relative;padding:0.2rem 0.26667rem;border-radius:0.13333rem;border:1px dashed #a4e2c6;z-index:10;margin:0.53333rem 0rem 0.53333rem 0rem;}.smalltxt026:before{content:"";border-radius:0.13333rem;position:absolute;left:0.06667rem;right:0.06667rem;bottom:0.06667rem;top:0.06667rem;background:#a4e2c6;z-index:-1;}', // 移动端样式
        htmlString:'<p class="smalltxt026">正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文</p>'
    };
}