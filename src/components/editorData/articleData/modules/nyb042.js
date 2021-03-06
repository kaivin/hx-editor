/*
 * @Author: your name
 * @Date: 2019-12-30 12:29:20
 * @LastEditTime: 2020-06-08 18:13:26
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \hx-editor\src\components\editorData\articleData\modules\nyb042.js
 */ 
export function getHtmlData (){
    return {
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        align:'left', // left(左对齐)|center(居中对齐)|right(右对齐)        
        style:'icon', // icon(图标)|number(数字)|other(其他)
        fileName:'nyb042.js', // 该文件的文件名
        class:'smalltxt042',// 用来给js使用添加页面内样式使用
        styleWebCode:'.smalltxt042{padding:10px 15px;background:rgb(199,237,251)!important;border-radius:10px;position:relative;z-index:2;margin-left: 5px!important;margin-right: 5px!important;margin-bottom: 25px!important;margin-top: 25px!important;}.smalltxt042:before{content:"";border:1px dashed rgb(199,237,251)!important;border-radius:10px;left: -5px;right: -5px;top: -5px;bottom: -5px;position:absolute;z-index:-1;}', // PC端样式
        styleWapCode:'.smalltxt042{padding:0.13333rem 0.2rem;background:rgb(199,237,251)!important;border-radius:0.13333rem;position:relative;z-index:2;margin:0.66667rem 0.13333rem !important;}.smalltxt042::before{content:"";border:1px dashed rgb(199,237,251)!important;border-radius:0.13333rem;position:absolute;left:-0.13333rem;right:-0.13333rem;top:-0.13333rem;bottom:-0.13333rem;z-index:-1;}', // 移动端样式
        htmlString:'<p class="smalltxt042">正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文</p>'
    };
}