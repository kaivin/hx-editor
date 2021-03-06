/*
 * @Author: your name
 * @Date: 2019-12-30 12:29:20
 * @LastEditTime: 2020-06-08 18:11:52
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \hx-editor\src\components\editorData\articleData\modules\nyb038.js
 */ 
export function getHtmlData (){
    return {
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        align:'left', // left(左对齐)|center(居中对齐)|right(右对齐)        
        style:'icon', // icon(图标)|number(数字)|other(其他)
        fileName:'nyb038.js', // 该文件的文件名
        class:'smalltxt038',// 用来给js使用添加页面内样式使用
        styleWebCode:'.smalltxt038{background:#fff;border:1px solid rgb(199,237,251)!important;border-radius:10px;padding:12px 15px;box-shadow:5px 5px 0 rgb(127,207,237)!important;margin-right: 5px!important;margin-bottom: 25px!important;}', // PC端样式
        styleWapCode:'.smalltxt038{background:#fff;border:1px solid rgb(199,237,251)!important;border-radius:0.13333rem;padding:0.13333rem 0.2rem;margin:0.53333rem 0.13333rem 0.66667rem 0rem !important;box-shadow:0.13333rem 0.13333rem 0 rgb(127,207,237)!important;}', // 移动端样式
        htmlString:'<p class="smalltxt038">正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文</p>'
    };
}