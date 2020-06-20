/*
 * @Author: your name
 * @Date: 2019-12-30 12:29:20
 * @LastEditTime: 2020-06-08 18:15:34
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \hx-editor\src\components\editorData\articleData\modules\nyb054.js
 */ 
export function getHtmlData (){
    return {
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        align:'left', // left(左对齐)|center(居中对齐)|right(右对齐)        
        style:'icon', // icon(图标)|number(数字)|other(其他)
        fileName:'nyb054.js', // 该文件的文件名
        class:'smalltxt054',// 用来给js使用添加页面内样式使用
        styleWebCode:'.smalltxt054{clear:both;border:2px solid rgb(1,102,155)!important;padding: 11px 15px 10px 15px;position:relative;margin-left:auto;margin-right:auto;margin-top: 30px!important;}.smalltxt054:after{content:"";height:1px;background:rgb(1,102,155)!important;position:absolute;left:15px;right:15px;top: 10px;}.smalltxt054 p{margin: 5px 0px!important;}', // PC端样式
        styleWapCode:'.smalltxt054{clear:both;border:0.02667rem solid rgb(1,102,155)!important;padding:0.33333rem 0.2rem 0.2rem 0.2rem;position:relative;margin:0.73333rem 0rem 0.53333rem 0rem !important;}.smalltxt054:after{content:"";height:1px;background:rgb(1,102,155)!important;position:absolute;left:0.2rem;right:0.2rem;top:0.2rem;}', // 移动端样式
        htmlString:'<div class="smalltxt054"><p>正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文</p></div>'
    };
}