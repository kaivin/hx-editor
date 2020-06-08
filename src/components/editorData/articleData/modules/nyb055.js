/*
 * @Author: your name
 * @Date: 2019-12-30 12:29:20
 * @LastEditTime: 2020-06-08 18:15:43
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \hx-editor\src\components\editorData\articleData\modules\nyb055.js
 */ 
export function getHtmlData (){
    return {
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'蓝色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        fileName:'nyb055.js', // 该文件的文件名
        class:'smalltxt055',// 用来给js使用添加页面内样式使用
        styleWebCode:'.smalltxt055{background:#e0f2ff;color: #4e79bf!important;padding:15px 25px;position:relative;}.smalltxt055:after, .smalltxt055:before{content:"";width:5px;background:#94c6f7;border-radius:3px;position:absolute;left:0;top:-3px;bottom:-3px;}.smalltxt055:after{left:auto;right:0;}', // PC端样式
        styleWapCode:'.smalltxt055{background:#e0f2ff;color:#4e79bf;padding:0.2rem 0.26667rem;position:relative;margin:0.57333rem 0.13333rem !important;}.smalltxt055:after, .smalltxt055:before{content:"";width:0.06667rem;background:#94c6f7;border-radius:0.04rem;position:absolute;left:0;top:-0.04rem;bottom:-0.04rem;}.smalltxt055:after{left:auto;right:0;}', // 移动端样式
        htmlString:'<p class="smalltxt055">正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文</p>'
    };
}