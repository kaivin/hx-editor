/*
 * @Author: your name
 * @Date: 2019-12-30 12:29:20
 * @LastEditTime: 2020-06-08 18:10:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \hx-editor\src\components\editorData\articleData\modules\nyb030.js
 */ 
export function getHtmlData (){
    return {
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        align:'left', // left(左对齐)|center(居中对齐)|right(右对齐)        
        style:'icon', // icon(图标)|number(数字)|other(其他)
        fileName:'nyb030.js', // 该文件的文件名
        class:'smalltxt030',// 用来给js使用添加页面内样式使用
        styleWebCode:'.smalltxt030{position:relative;border-radius:10px;border:1px dashed rgb(2,143,199)!important;z-index:10;padding:10px 15px !important;color:#fff !important;}.smalltxt030:before{content:"";border-radius:10px;position:absolute;left:5px;right:5px;bottom:5px;top:5px;background:rgb(2,143,199)!important;z-index:-1;}', // PC端样式
        styleWapCode:'.smalltxt030{position:relative;padding:0.2rem 0.26667rem;border-radius:0.13333rem;border:1px dashed rgb(2,143,199)!important;z-index:10;color:#fff !important;margin:0.53333rem 0rem 0.53333rem 0rem;}.smalltxt030:before{content:"";border-radius:0.13333rem;position:absolute;left:0.06667rem;right:0.06667rem;bottom:0.06667rem;top:0.06667rem;background:rgb(2,143,199)!important;z-index:-1;}', // 移动端样式
        htmlString:'<p class="smalltxt030">正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文</p>'
    };
}