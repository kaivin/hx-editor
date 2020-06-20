/*
 * @Author: your name
 * @Date: 2019-12-30 12:29:20
 * @LastEditTime: 2020-06-08 18:16:42
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \hx-editor\src\components\editorData\articleData\modules\nyb058.js
 */ 
export function getHtmlData (){
    return {
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        align:'left', // left(左对齐)|center(居中对齐)|right(右对齐)        
        style:'icon', // icon(图标)|number(数字)|other(其他)
        fileName:'nyb058.js', // 该文件的文件名
        class:'smalltxt058',// 用来给js使用添加页面内样式使用
        styleWebCode:'.smalltxt058{background:rgb(199,237,251)!important;border:2px solid rgb(1,102,155)!important;padding:15px;text-align:left;position:relative;z-index:1;margin-left:auto;margin-right:auto;}', // PC端样式
        styleWapCode:'.smalltxt058{background:rgb(199,237,251)!important;border:0.02667rem solid rgb(1,102,155)!important;padding:0.2rem;text-align:left;position:relative;z-index:1;margin:0.53333rem 0rem !important;}', // 移动端样式
        htmlString:'<p class="smalltxt058">正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文</p>'
    };
}