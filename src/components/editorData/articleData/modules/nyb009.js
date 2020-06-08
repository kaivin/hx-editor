/*
 * @Author: your name
 * @Date: 2019-12-30 12:29:20
 * @LastEditTime: 2020-06-08 18:06:05
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \hx-editor\src\components\editorData\articleData\modules\nyb009.js
 */ 
export function getHtmlData (){
    return {
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'黑色,黄色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'dynamic', // dynamic(动态)|static(静态)
        fileName:'nyb009.js', // 该文件的文件名
        class:'smalltxt009',// 用来给js使用添加页面内样式使用
        styleWebCode:'.smalltxt009{position:relative;padding:15px !important;border:1px solid #333333;}.smalltxt009:after{content:"";position:absolute;left:50%;bottom:-11px;width:150px;height:22px;background:url(../images/insidestyle/small003.gif) no-repeat center center #fff;transform:translateX(-50%);background-size:contain;}', // PC端样式
        styleWapCode:'.smalltxt009{position:relative;padding:0.26667rem;border:1px solid #333333;margin:0.53333rem 0rem 0.53333rem 0rem;}.smalltxt009:after{content:"";position:absolute;left:50%;bottom:-0.14667rem;width:1.6rem;height:0.29333rem;background:url(../images/insidestyle/small003.gif) no-repeat center center #fff;transform:translateX(-50%);padding:0rem 0.26667rem;background-size:contain;}', // 移动端样式
        htmlString:'<p class="smalltxt009">正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文</p>'
    };
}