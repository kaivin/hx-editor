/*
 * @Author: your name
 * @Date: 2019-12-30 12:29:20
 * @LastEditTime: 2020-06-08 18:13:11
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \hx-editor\src\components\editorData\articleData\modules\nyb041.js
 */ 
export function getHtmlData (){
    return {
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'蓝色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        fileName:'nyb041.js', // 该文件的文件名
        class:'smalltxt041',// 用来给js使用添加页面内样式使用
        styleWebCode:'.smalltxt041{position:relative;z-index:2;background:#fff;border:1px solid #bcd0f5;border-radius:10px;padding: 20px 10px;margin-left: 10px!important;margin-right: 10px!important;}.smalltxt041:before{content:"";background:#bcd0f5;border-radius:10px;position:absolute;left:-10px;right:-10px;top:10px;bottom:10px;z-index:-1;}', // PC端样式
        styleWapCode:'.smalltxt041{background:#fff;border:1px solid #bcd0f5;border-radius:0.13333rem;padding:0.2rem 0.13333rem;position:relative;z-index:1;margin:0.53333rem 0.13333rem !important;}.smalltxt041:before{content:"";background:#bcd0f5;border-radius:0.13333rem;position:absolute;left:-0.13333rem;right:-0.13333rem;top:0.13333rem;bottom:0.13333rem;z-index:-1;}', // 移动端样式
        htmlString:'<p class="smalltxt041">正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文</p>'
    };
}