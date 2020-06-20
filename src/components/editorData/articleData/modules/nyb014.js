/*
 * @Author: your name
 * @Date: 2019-12-30 12:29:20
 * @LastEditTime: 2020-06-08 18:07:08
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \hx-editor\src\components\editorData\articleData\modules\nyb014.js
 */ 
export function getHtmlData (){
    return {
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        align:'left', // left(左对齐)|center(居中对齐)|right(右对齐)        
        style:'icon', // icon(图标)|number(数字)|other(其他)
        fileName:'nyb014.js', // 该文件的文件名
        class:'smalltxt014',// 用来给js使用添加页面内样式使用
        styleWebCode:'.smalltxt014{position:relative;padding:15px 18px !important;border:1px solid rgb(127,207,237)!important;}.smalltxt014:before{content:"";position:absolute;border-width:2px;border-color:rgb(127,207,237)!important;border-style:dashed;left:2px;top:2px;right:2px;bottom:2px;}.smalltxt014:after{content:"";position:absolute;border-width:1px;border-color:rgb(127,207,237)!important;border-style:solid;left:6px;top:6px;right:6px;bottom:6px;}', // PC端样式
        styleWapCode:'.smalltxt014{position:relative;padding:0.2rem 0.26667rem;border:1px solid rgb(127,207,237)!important;margin:0.53333rem 0rem 0.53333rem 0rem;}.smalltxt014:before{content:"";position:absolute;border-width:2px;border-color:rgb(127,207,237)!important;border-style:dashed;left:0.02667rem;top:0.02667rem;right:0.02667rem;bottom:0.02667rem;}.smalltxt014:after{content:"";position:absolute;border-width:1px;border-color:rgb(127,207,237)!important;border-style:solid;left:0.08rem;top:0.08rem;right:0.08rem;bottom:0.08rem;}', // 移动端样式
        htmlString:'<p class="smalltxt014">正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文</p>'
    };
}