/*
 * @Author: your name
 * @Date: 2019-12-30 12:29:20
 * @LastEditTime: 2020-06-08 18:14:32
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \hx-editor\src\components\editorData\articleData\modules\nyb048.js
 */ 
export function getHtmlData (){
    return {
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        align:'left', // left(左对齐)|center(居中对齐)|right(右对齐)        
        style:'icon', // icon(图标)|number(数字)|other(其他)
        fileName:'nyb048.js', // 该文件的文件名
        class:'smalltxt048',// 用来给js使用添加页面内样式使用
        styleWebCode:'.smalltxt048{clear:both;display:block;padding: 15px 20px;position:relative;border: 2px solid rgb(199,237,251)!important;margin-bottom: 25px!important;margin-top: 35px!important;}.smalltxt048:before{content:"";width:100px;height: 10px;display:block;position:absolute;top: -17px;border:0px;border-left: 10px solid rgb(127,207,237)!important;border-right:10px solid rgb(199,237,251)!important;left:50%;margin-left:-50px;}.smalltxt048 p{margin:5px 0px!important;}', // PC端样式
        styleWapCode:'.smalltxt048{clear:both;display:block;padding:0.26667rem;position:relative;margin:0.53333rem 0rem 0.53333rem 0rem !important;}.smalltxt048:after{content:"";border:2px solid rgb(199,237,251)!important;position:absolute;top:0.13333rem;bottom:0.13333rem;left:0.13333rem;right:0.13333rem;}.smalltxt048:before{content:"";width:1.33333rem;height:0.13333rem;display:block;position:absolute;top:0;border:0px;border-left:0.13333rem solid rgb(127,207,237)!important;border-right:0.13333rem solid rgb(199,237,251)!important;left:50%;margin-left:-0.66667rem;}', // 移动端样式
        htmlString:'<div class="smalltxt048"><p>正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文</p></div>'
    };
}