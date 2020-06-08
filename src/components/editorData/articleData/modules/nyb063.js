/*
 * @Author: your name
 * @Date: 2019-12-30 12:29:20
 * @LastEditTime: 2020-06-08 18:17:38
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \hx-editor\src\components\editorData\articleData\modules\nyb063.js
 */ 
export function getHtmlData (){
    return {
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'蓝色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        fileName:'nyb063.js', // 该文件的文件名
        class:'smalltxt063',// 用来给js使用添加页面内样式使用
        styleWebCode:'.smalltxt063{border:1px solid #a7d5f8;padding:20px 15px 15px 15px;position:relative;margin-left:auto;margin-right:auto;}.smalltxt063:before{content:"";border-top:1px solid #a7d5f8;position:absolute;left:-1px;right:-1px;top:5px;height:0px;}.smalltxt063:after{content:"";width:10px;height:10px;background:#aadafe;border:1px solid #6da3dd;border-radius:50%;display:block;position:absolute;right:10px;bottom:10px;}', // PC端样式
        styleWapCode:'.smalltxt063{border:1px solid #a7d5f8;padding:0.26667rem 0.2rem 0.2rem 0.2rem;position:relative;margin:0.53333rem 0rem !important;}.smalltxt063:before{content:"";border-top:1px solid #a7d5f8;position:absolute;left:-1px;right:-1px;top:0.06667rem;height:0px;}.smalltxt063:after{content:"";width:0.13333rem;height:0.13333rem;background:#aadafe;border:1px solid #6da3dd;border-radius:50%;display:block;position:absolute;right:0.13333rem;bottom:0.13333rem;}', // 移动端样式
        htmlString:'<p class="smalltxt063">正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文</p>'
    };
}