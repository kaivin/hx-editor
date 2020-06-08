/*
 * @Author: your name
 * @Date: 2019-12-30 12:29:20
 * @LastEditTime: 2020-06-08 18:23:30
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \hx-editor\src\components\editorData\imageData\modules\nyb021.js
 */ 
export function getHtmlData (){
    return {
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'蓝色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        fileName:'nyb021.js', // 该文件的文件名
        class:'smalltext021',// 用来给js使用添加页面内样式使用
        styleWebCode:'.smalltext021{border-radius:10px;-webkit-box-shadow:0 0 0.875rem rgba(136, 191, 242, 0.34) inset;box-shadow:inset 0 0 0.875rem rgba(136, 191, 242, 0.34);position:relative;max-width:800px;margin-left:auto;margin-right:auto;margin-top:50px;padding:1px 30px 20px 30px;}.smalltext021 strong{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;display:block;margin-top:20px;background:-o-linear-gradient(right, #84c8f3, #3d7bd0);background:-webkit-gradient(linear, left top, right top, from(#84c8f3), to(#3d7bd0));background:-o-linear-gradient(left, #84c8f3, #3d7bd0);background:linear-gradient(90deg, #84c8f3, #3d7bd0);color:#fff!important;font-weight:700;line-height:35px;padding:10px 35px;border-radius:0 50px 50px .24rem;margin-left:-45px;position:relative;font-size:20px;}.smalltext021 strong:before{content:"";width:0;border-bottom:10px solid #5ea1df;border-right:0 solid transparent;border-left:15px solid transparent;position:absolute;top:-10px;left:0;}.smalltext021 strong:after{content:"";width:54px;height:24px;background:url(../images/insidestyle/small044.png) no-repeat right 50%;background-size:100%;display:inline-block;vertical-align:middle;margin-left:15px;margin-top:0px;}.smalltext021 p{margin:10px 0px 0px 0px;}', // PC端样式
        styleWapCode:'.smalltext021{border-radius:0.13333rem;-webkit-box-shadow:0 0 0.875rem rgba(136, 191, 242, 0.34) inset;box-shadow:inset 0 0 0.875rem rgba(136, 191, 242, 0.34);position:relative;padding:1px 0.4rem 0.26667rem 0.4rem;}.smalltext021 strong{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;display:block;margin-top:0.26667rem;background:-o-linear-gradient(right, #84c8f3, #3d7bd0);background:-webkit-gradient(linear, left top, right top, from(#84c8f3), to(#3d7bd0));background:-o-linear-gradient(left, #84c8f3, #3d7bd0);background:linear-gradient(90deg, #84c8f3, #3d7bd0);color:#fff!important;font-weight:700;line-height:0.46667rem;padding:0.13333rem 0.46667rem;border-radius:0rem 0.66667rem 0.66667rem 0.24rem;margin-left:-0.6rem;position:relative;font-size:0.37333rem;}.smalltext021 strong:before{content:"";width:0;border-bottom:0.13333rem solid #5ea1df;border-right:0 solid transparent;border-left:0.2rem solid transparent;position:absolute;top:-0.13333rem;left:0;}.smalltext021 strong:after{content:"";width:0.72rem;height:0.32rem;background:url(../images/insidestyle/small044.png) no-repeat right 50%;background-size:100%;display:inline-block;vertical-align:middle;margin-left:0.2rem;margin-top:0rem;}.smalltext021 p{margin:0.13333rem 0rem 0rem 0rem;}', // 移动端样式
        htmlString:'<div class="smalltext021"><strong>标题标题标题</strong><p>正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文</p></div>'
    };
}