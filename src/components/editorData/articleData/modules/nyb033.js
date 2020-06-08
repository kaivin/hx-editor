/*
 * @Author: your name
 * @Date: 2019-12-30 12:29:20
 * @LastEditTime: 2020-06-08 18:11:08
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \hx-editor\src\components\editorData\articleData\modules\nyb033.js
 */ 
export function getHtmlData (){
    return {
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'蓝色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        fileName:'nyb033.js', // 该文件的文件名
        class:'smalltxt033',// 用来给js使用添加页面内样式使用
        styleWebCode:'.smalltxt033{color:#3a4f9f !important;border:1px solid #bcd0f5;border-radius:10px;padding: 20px 10px;position:relative;z-index:2;margin-left: 10px!important;margin-right: 10px!important;}.smalltxt033:before{content:"";background:#bcd0f5;border-radius:10px;position:absolute;left: -10px;top:10px;right: -10px;bottom:10px;z-index:-1;}', // PC端样式
        styleWapCode:'.smalltxt033{color:#3a4f9f !important;border: 1px solid #bcd0f5;border-radius:0.13333rem;padding: 1px 0.54rem;margin: 0.2rem 0!important;position:relative;}.smalltxt033:before{content:"";border:1px solid #bcd0f5;border-radius:0.13333rem;position:absolute;left:0.2rem;top: -0.2rem;right:0.2rem;bottom: -0.2rem;}', // 移动端样式
        htmlString:'<p class="smalltxt033">正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文</p>'
    };
}