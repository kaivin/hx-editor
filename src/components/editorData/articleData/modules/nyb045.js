/*
 * @Author: your name
 * @Date: 2019-12-30 12:29:20
 * @LastEditTime: 2020-06-08 18:13:54
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \hx-editor\src\components\editorData\articleData\modules\nyb045.js
 */ 
export function getHtmlData (){
    return {
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        align:'left', // left(左对齐)|center(居中对齐)|right(右对齐)        
        style:'icon', // icon(图标)|number(数字)|other(其他)
        fileName:'nyb045.js', // 该文件的文件名
        class:'smalltxt045',// 用来给js使用添加页面内样式使用
        styleWebCode:'.smalltxt045{position:relative;margin-bottom: 25px!important;margin-top: 25px!important;padding: 20px 10px 10px 10px;}.smalltxt045:before{content:"";background:rgb(127,207,237)!important;border-radius:5px;position:absolute;left:0;top:0;right:0;bottom:0;}.smalltxt045:after{content:"";width: 20px;height: 20px;background:url(../images/insidestyle/small031.png) center no-repeat;background-size:100%;display:block;position:absolute;left: 8px;top: 8px;}.smalltxt045 p{background:rgb(199,237,251)!important;border-radius:5px;padding: 25px 30px 15px 30px;position:relative;}', // PC端样式
        styleWapCode:'.smalltxt045{position:relative;margin:0.53333rem 0rem !important;}.smalltxt045:before{content:"";background:rgb(127,207,237)!important;border-radius:0.06667rem;position:absolute;left:0;top:0;right:0;bottom:0;transform:rotate(2deg);-ms-transform:rotate(2deg);-moz-transform:rotate(2deg);-webkit-transform:rotate(2deg);-o-transform:rotate(2deg);}.smalltxt045:after{content:"";width:0.33333rem;height:0.33333rem;background:url(../images/insidestyle/small031.png) center no-repeat;background-size:100%;display:block;position:absolute;left:0.2rem;top:0.2rem;}.smalltxt045 p{background:rgb(199,237,251)!important;border-radius:0.06667rem;padding:0.46667rem 0.56rem;position:relative;}', // 移动端样式
        htmlString:'<div class="smalltxt045"><p>正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文</p></div>'
    };
}