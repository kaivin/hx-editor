/*
 * @Author: your name
 * @Date: 2019-12-30 12:29:20
 * @LastEditTime: 2020-06-08 18:06:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \hx-editor\src\components\editorData\articleData\modules\nyb010.js
 */ 
export function getHtmlData (){
    return {
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'灰色,黄色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        fileName:'nyb010.js', // 该文件的文件名
        class:'smalltxt010',// 用来给js使用添加页面内样式使用
        styleWebCode:'.smalltxt010{position:relative;padding:20px 20px !important;z-index:3;}.smalltxt010:after, .smalltxt010:before{content:"";position:absolute;background:url(../images/insidestyle/small004.png) no-repeat center center #fff;width:80px;height:65px;z-index:-1;background-size:80px;}.smalltxt010:after{right:0px;bottom:0px;}.smalltxt010:before{left:0px;top:0px;transform:rotate(180deg);}', // PC端样式
        styleWapCode:'.smalltxt010{position:relative;padding:0.2rem 0.26667rem;z-index:3;margin:0.53333rem 0rem 0.53333rem 0rem;}.smalltxt010:after,.smalltxt010:before{content:"";position:absolute;background:url(../images/insidestyle/small004.png) no-repeat center center #fff;width:1.06667rem;height:0.86667rem;z-index:-1;background-size:100%;}.smalltxt010:after{right:0rem;bottom:0rem;}.smalltxt010:before{left:0rem;top:0rem;transform:rotate(180deg);}', // 移动端样式
        htmlString:'<p class="smalltxt010">正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文</p>'
    };
}