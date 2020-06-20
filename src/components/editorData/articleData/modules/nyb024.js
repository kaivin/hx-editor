/*
 * @Author: your name
 * @Date: 2019-12-30 12:29:20
 * @LastEditTime: 2020-06-08 18:09:11
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \hx-editor\src\components\editorData\articleData\modules\nyb024.js
 */ 
export function getHtmlData (){
    return {
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        align:'left', // left(左对齐)|center(居中对齐)|right(右对齐)        
        style:'icon', // icon(图标)|number(数字)|other(其他)
        fileName:'nyb024.js', // 该文件的文件名
        class:'smalltxt024',// 用来给js使用添加页面内样式使用
        styleWebCode:'.smalltxt024{background:rgb(2,143,199)!important;border-radius:10px;padding:12px 15px;position:relative;margin-bottom: 30px!important;margin-top: 30px!important; color:#fff!important;}.smalltxt024:before{content:"";border:1px solid rgb(2,143,199)!important;border-radius:10px;position:absolute;left:10px;top:-10px;right:10px;bottom:-10px;} @media (max-width: 1440px){ .smalltxt024{margin-bottom:25px!important; margin-top:25px!important;} }', // PC端样式
        styleWapCode:'.smalltxt024{background:rgb(2,143,199)!important;border-radius:0.13333rem;padding:0.33333rem 0.4rem;margin:0.53333rem 0rem 0.53333rem 0rem;position:relative; color:#fff!important;}.smalltxt024:before{content:"";border:1px solid rgb(2,143,199)!important;border-radius:0.13333rem;position:absolute;left:0.2rem;top:-0.2rem;right:0.2rem;bottom:-0.2rem;}', // 移动端样式
        htmlString:'<p class="smalltxt024">正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文</p>'
    };
}