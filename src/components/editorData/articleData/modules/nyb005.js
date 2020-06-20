/*
 * @Author: your name
 * @Date: 2019-12-30 12:29:20
 * @LastEditTime: 2020-06-08 18:05:22
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \hx-editor\src\components\editorData\articleData\modules\nyb005.js
 */ 
export function getHtmlData (){
    return {
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        align:'left', // left(左对齐)|center(居中对齐)|right(右对齐)        
        style:'icon', // icon(图标)|number(数字)|other(其他)
        fileName:'nyb005.js', // 该文件的文件名
        class:'smalltxt005',// 用来给js使用添加页面内样式使用
        styleWebCode:'.smalltxt005{border:1px solid rgb(2,143,199)!important;border-radius:5px;position:relative;padding:25px 15px 15px 15px !important;}.smalltxt005:after{content:"";position:absolute;left:50%;transform:translateX(-50%);top:0px;width:0px;height:0px;border-bottom:0px;border-top:15px solid rgb(2,143,199)!important;border-left:10px solid transparent;border-right:10px solid transparent;}', // PC端样式
        styleWapCode:'.smalltxt005{border:1px solid rgb(2,143,199)!important;border-radius:0.13333rem;position:relative;padding:0.53333rem 0.26667rem 0.26667rem 0.26667rem;margin:0.53333rem 0rem;}.smalltxt005:after{content:"";position:absolute;left:50%;transform:translateX(-50%);top:0rem;width:0rem;height:0rem;border-bottom:0rem;border-top:0.4rem solid rgb(2,143,199)!important;border-left:0.26667rem solid transparent;border-right:0.26667rem solid transparent;}', // 移动端样式
        htmlString:'<p class="smalltxt005">正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文</p>'
    };
}