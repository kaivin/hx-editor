/*
 * @Author: your name
 * @Date: 2019-12-30 12:29:20
 * @LastEditTime: 2020-06-08 18:17:00
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \hx-editor\src\components\editorData\articleData\modules\nyb059.js
 */ 
export function getHtmlData (){
    return {
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'蓝色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        fileName:'nyb059.js', // 该文件的文件名
        class:'smalltxt059',// 用来给js使用添加页面内样式使用
        styleWebCode:'.smalltxt059{margin-top: 25px!important;margin-bottom: 25px!important;}.smalltxt059 .p1{background:#e1f1ff;padding: 10px 15px;-webkit-box-shadow:5px 5px 0 #87c1f3;box-shadow:5px 5px 0 #87c1f3;margin: 0px!important;}.smalltxt059 .p2{color: #3466b0!important;text-align:center;border:2px solid #87c1f3;border-radius:10px;padding:5px 10px;margin: 38px 0px 0px 0px!important;position:relative;}.smalltxt059 .p2:after, .smalltxt059 .p2:before{content:"";width:3px;height:38px;background:#87c1f3;display:block;position:absolute;top:-38px;left:50px;}.smalltxt059 .p2:after{left:auto;right:50px;}', // PC端样式
        styleWapCode:'.smalltxt059{margin:0.53333rem 0rem !important;}.smalltxt059 .p1{background:#e1f1ff;padding:0.2rem;-webkit-box-shadow:0.06667rem 0.06667rem 0 #87c1f3;box-shadow:0.06667rem 0.06667rem 0 #87c1f3;margin:0px;}.smalltxt059 .p2{color:#3466b0;text-align:center;border:0.02667rem solid #87c1f3;border-radius:0.13333rem;padding:0.06667rem 0.13333rem;margin:0.50667rem 0px 0px 0px;position:relative;}.smalltxt059 .p2:after, .smalltxt059 .p2:before{content:"";width:0.04rem;height:0.50667rem;background:#87c1f3;display:block;position:absolute;top:-0.50667rem;left:0.66667rem;}.smalltxt059 .p2:after{left:auto;right:0.66667rem;}', // 移动端样式
        htmlString:'<div class="smalltxt059"><p class="p1">正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文</p><p class="p2">正文正文正文正文正文正文正文正文正文正文正</p></div>'
    };
}