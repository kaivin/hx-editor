/*
 * @Author: your name
 * @Date: 2019-12-30 12:29:20
 * @LastEditTime: 2020-06-08 18:14:42
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \hx-editor\src\components\editorData\articleData\modules\nyb049.js
 */ 
export function getHtmlData (){
    return {
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        align:'left', // left(左对齐)|center(居中对齐)|right(右对齐)        
        style:'icon', // icon(图标)|number(数字)|other(其他)
        fileName:'nyb049.js', // 该文件的文件名
        class:'smalltxt049',// 用来给js使用添加页面内样式使用
        styleWebCode:'.smalltxt049{background:rgb(199,237,251)!important;border-radius:10px;padding: 22px 20px 15px 20px;position:relative;margin-top: 45px!important;}.smalltxt049:before{content:"";width: 40px;height: 40px;background:url(../images/insidestyle/small034.png) center no-repeat #fff;border-radius:50%;background-size: 15px;display:block;position:absolute;left:25px;top:-25px;}', // PC端样式
        styleWapCode:'.smalltxt049{background:rgb(199,237,251)!important;border-radius:0.13333rem;padding:0.4rem 0.4rem 0.26667rem 0.4rem;position:relative;margin:0.66667rem 0rem 0.53333rem 0rem !important;}.smalltxt049:before{content:"";width:0.66667rem;height:0.66667rem;background:url(../images/insidestyle/small034.png) center no-repeat #fff;border-radius:50%;background-size:0.26667rem;display:block;position:absolute;left:0.33333rem;top:-0.33333rem;}', // 移动端样式
        htmlString:'<p class="smalltxt049">正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文</p>'
    };
}