/*
 * @Author: your name
 * @Date: 2019-12-30 12:29:20
 * @LastEditTime: 2020-06-08 17:46:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \hx-editor\src\components\editorData\articleData\modules\nyb001.js
 */ 
export function getHtmlData (){
    return {
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        align:'left', // left(左对齐)|center(居中对齐)|right(右对齐)        
        style:'icon', // icon(图标)|number(数字)|other(其他)
        class:'smalltxt001',// 用来给js使用添加页面内样式使用
        fileName:'nyb001.js', // 该文件的文件名
        styleWebCode:'.smalltxt001{border:1px solid rgb(2,143,199)!important;box-shadow:0px 0px 6px rgb(199,237,251)!important inset, 0px 0px 6px rgb(199,237,251)!important;padding:15px;}', // PC端样式
        styleWapCode:'.smalltxt001{border:1px solid rgb(2,143,199)!important;margin:0.53333rem 0rem;box-shadow:0rem 0rem 0.06667rem rgb(199,237,251)!important inset, 0rem 0rem 0.06667rem rgb(199,237,251)!important;padding:0.26667rem;}', // 移动端样式
        htmlString:'<p class="smalltxt001">正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文</p>'
    };
}