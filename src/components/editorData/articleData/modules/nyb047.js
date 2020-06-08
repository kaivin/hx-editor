/*
 * @Author: your name
 * @Date: 2019-12-30 12:29:20
 * @LastEditTime: 2020-06-08 18:14:24
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \hx-editor\src\components\editorData\articleData\modules\nyb047.js
 */ 
export function getHtmlData (){
    return {
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'蓝色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        fileName:'nyb047.js', // 该文件的文件名
        class:'smalltxt047',// 用来给js使用添加页面内样式使用
        styleWebCode:'.smalltxt047{background:#fafdff;padding:20px 15px 15px 15px;position:relative;border:1px dashed #e6e6e6;color:#101010;margin-left:auto;margin-right:auto;}.smalltxt047:before, .smalltxt047:after{content:"";position:absolute;}.smalltxt047:before{width:15px;height:15px;background:url(../images/insidestyle/small032.png) no-repeat center center;background-size:15px;left:20%;top:-8px;}.smalltxt047:after{width:25px;height:20px;background:url(../images/insidestyle/small033.png) no-repeat center center;background-size:25px;right:20%;top:-10px;}', // PC端样式
        styleWapCode:'.smalltxt047{background:#fafdff;padding:0.26667rem 0.2rem 0.2rem 0.2rem;position:relative;border:1px dashed #e6e6e6;color:#101010;margin:0.53333rem 0rem !important;}.smalltxt047:before, .smalltxt047:after{content:"";position:absolute;}.smalltxt047:before{width:0.2rem;height:0.2rem;background:url(../images/insidestyle/small032.png) no-repeat center center;background-size:0.2rem;left:20%;top:-0.10667rem;}.smalltxt047:after{width:0.33333rem;height:0.26667rem;background:url(../images/insidestyle/small033.png) no-repeat center center;background-size:0.33333rem;right:20%;top:-0.13333rem;}', // 移动端样式
        htmlString:'<p class="smalltxt047">正文正文正文正文正文正文正文正文正文正文正文</p>'
    };
}