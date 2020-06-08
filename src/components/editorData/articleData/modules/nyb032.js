/*
 * @Author: your name
 * @Date: 2019-12-30 12:29:20
 * @LastEditTime: 2020-06-08 18:10:54
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \hx-editor\src\components\editorData\articleData\modules\nyb032.js
 */ 
export function getHtmlData (){
    return {
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'蓝色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        fileName:'nyb032.js', // 该文件的文件名
        class:'smalltxt032',// 用来给js使用添加页面内样式使用
        styleWebCode:'.smalltxt032{color:#3a4f9f !important;border:1px solid #bcd0f5;border-radius:10px;padding:20px;position:relative;z-index:2;}.smalltxt032:before{content:"";background:#bcd0f5;border-radius:10px;position:absolute;left:10px;top:10px;right:10px;bottom:10px;z-index:-1;}', // PC端样式
        styleWapCode:'.smalltxt032{background:#bcd0f5;border-radius:0.13333rem;padding:0.13333rem 0.2rem;color:#3a6ab8;position:relative;margin:0.69333rem 0.16rem 0.69333rem 0.16rem;}.smalltxt032:before{content:"";display:block;border:1px solid #bcd0f5;border-radius:0.13333rem;position:absolute;left:-0.16rem;right:-0.16rem;top:-0.16rem;bottom:-0.16rem;}', // 移动端样式
        htmlString:'<p class="smalltxt032">正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文</p>'
    };
}