/*
 * @Author: your name
 * @Date: 2019-12-30 12:29:20
 * @LastEditTime: 2020-06-08 18:17:10
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \hx-editor\src\components\editorData\articleData\modules\nyb060.js
 */ 
export function getHtmlData (){
    return {
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        align:'left', // left(左对齐)|center(居中对齐)|right(右对齐)        
        style:'icon', // icon(图标)|number(数字)|other(其他)
        fileName:'nyb060.js', // 该文件的文件名
        class:'smalltxt060',// 用来给js使用添加页面内样式使用
        styleWebCode:'.smalltxt060{border:1px solid rgb(0,86,133)!important;border-radius:10px;border-bottom:5px solid rgb(0,86,133)!important;padding: 10px 15px;}', // PC端样式
        styleWapCode:'.smalltxt060{border:1px solid rgb(0,86,133)!important;border-radius:0.13333rem;border-bottom:0.06667rem solid rgb(0,86,133)!important;padding:0.2rem;margin:0.53333rem 0rem !important;}', // 移动端样式
        htmlString:'<p class="smalltxt060">正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文</p>'
    };
}