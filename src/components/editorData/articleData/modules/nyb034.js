/*
 * @Author: your name
 * @Date: 2019-12-30 12:29:20
 * @LastEditTime: 2020-06-08 18:11:15
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \hx-editor\src\components\editorData\articleData\modules\nyb034.js
 */ 
export function getHtmlData (){
    return {
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        align:'left', // left(左对齐)|center(居中对齐)|right(右对齐)        
        style:'icon', // icon(图标)|number(数字)|other(其他)
        fileName:'nyb034.js', // 该文件的文件名
        class:'smalltxt034',// 用来给js使用添加页面内样式使用
        styleWebCode:'.smalltxt034{border:1px solid rgb(199,237,251)!important;border-radius:10px;padding: 0px 25px;position:relative;z-index:2;margin-bottom: 30px!important;margin-top: 30px!important;}.smalltxt034:before{content:"";background:rgb(199,237,251)!important;border-radius:10px;position:absolute;left:10px;top:-10px;right:10px;bottom:-10px;z-index:-1;} @media (max-width: 1440px){ .smalltxt034{margin-bottom:25px!important;margin-top:25px!important;} }', // PC端样式
        styleWapCode:'.smalltxt034{background:rgb(199,237,251)!important;border-radius:0.13333rem;padding:0.13333rem 0.2rem;margin:0.53333rem 0.13333rem !important;position:relative;}.smalltxt034:before{content:"";border:1px solid rgb(199,237,251)!important;border-radius:0.13333rem;position:absolute;left:-0.13333rem;top:0.26667rem;right:-0.13333rem;bottom:0.26667rem;}', // 移动端样式
        htmlString:'<p class="smalltxt034">正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文</p>'
    };
}