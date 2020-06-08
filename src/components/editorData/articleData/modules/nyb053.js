/*
 * @Author: your name
 * @Date: 2019-12-30 12:29:20
 * @LastEditTime: 2020-06-08 18:15:25
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \hx-editor\src\components\editorData\articleData\modules\nyb053.js
 */ 
export function getHtmlData (){
    return {
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'蓝色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        fileName:'nyb053.js', // 该文件的文件名
        class:'smalltxt053',// 用来给js使用添加页面内样式使用
        styleWebCode:'.smalltxt053{background:#e0f2ff;padding:25px;position:relative;margin-left:auto;margin-right:auto;}.smalltxt053:after, .smalltxt053:before{content:"";width: 65px;height: 35px;background:url(../images/insidestyle/small036.png) no-repeat;background-size:100%;display:block;position:absolute;}.smalltxt053:before{left: 0px;top: 0px;}.smalltxt053:after{right: 0px;bottom: 0px;transform:rotate(180deg);-ms-transform:rotate(180deg);-moz-transform:rotate(180deg);-webkit-transform:rotate(180deg);-o-transform:rotate(180deg);}', // PC端样式
        styleWapCode:'.smalltxt053{background:#e0f2ff;padding:0.13333rem 0.26667rem;position:relative;margin:0.66667rem 0.13333rem !important;}.smalltxt053:after, .smalltxt053:before{content:"";width:1.24rem;height:0.65333rem;background:url(../images/insidestyle/small036.png) no-repeat;background-size:100%;display:block;position:absolute;}.smalltxt053:before{left:-0.13333rem;top:-0.13333rem;}.smalltxt053:after{right:-0.13333rem;bottom:-0.13333rem;transform:rotate(180deg);-ms-transform:rotate(180deg);-moz-transform:rotate(180deg);-webkit-transform:rotate(180deg);-o-transform:rotate(180deg);}', // 移动端样式
        htmlString:'<p class="smalltxt053">正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文</p>'
    };
}