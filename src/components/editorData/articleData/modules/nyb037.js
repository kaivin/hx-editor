/*
 * @Author: your name
 * @Date: 2019-12-30 12:29:20
 * @LastEditTime: 2020-06-08 18:11:43
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \hx-editor\src\components\editorData\articleData\modules\nyb037.js
 */ 
export function getHtmlData (){
    return {
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        align:'left', // left(左对齐)|center(居中对齐)|right(右对齐)        
        style:'icon', // icon(图标)|number(数字)|other(其他)
        fileName:'nyb037.js', // 该文件的文件名
        class:'smalltxt037',// 用来给js使用添加页面内样式使用
        styleWebCode:'.smalltxt037{border:1px solid rgb(199,237,251)!important;border-radius:10px;padding:10px 15px 15px 20px;position:relative;z-index:2;margin-top: 25px!important;margin-right: 5px!important;}.smalltxt037:before{content:"";border:1px solid rgb(199,237,251)!important;border-radius:10px;position:absolute;left:5px;top:-5px;right:-5px;bottom:5px;z-index:-1;}', // PC端样式
        styleWapCode:'.smalltxt037{border:1px solid rgb(199,237,251)!important;padding:0.13333rem 0.2rem 0.26667rem 0.33333rem;margin:0.66667rem 0.13333rem 0.53333rem 0rem !important;border-radius:0.13333rem;position:relative;z-index:1;}.smalltxt037:before{content:"";border:1px solid rgb(199,237,251)!important;border-radius:0.13333rem;position:absolute;left:0.13333rem;top:-0.13333rem;right:-0.13333rem;bottom:0.13333rem;z-index:-1;}', // 移动端样式
        htmlString:'<p class="smalltxt037">正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文</p>'
    };
}