/*
 * @Author: your name
 * @Date: 2019-12-30 12:29:20
 * @LastEditTime: 2020-06-08 18:50:27
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \hx-editor\src\components\editorData\imageData\modules\nyb010.js
 */ 
export function getHtmlData (){
    return {
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        align:'left', // left(左对齐)|center(居中对齐)|right(右对齐)        
        style:'icon', // icon(图标)|number(数字)|other(其他)
        fileName:'nyb010.js', // 该文件的文件名
        class:'smalltext010',// 用来给js使用添加页面内样式使用
        styleWebCode:'.smalltext010{padding:0px 20px 20px 20px;border-radius:10px;border:1px solid rgb(1,102,155)!important;position:relative;margin-top: 50px;font-size:16px;max-width:800px;margin-left:auto;margin-right:auto;}.smalltext010 strong{display:table;text-align:center;border-radius:30px;padding:10px 20px;background:rgb(1,102,155)!important;color:#fff!important;line-height: 1.5;margin:-24px auto 15px;font-size:18px;}.smalltext010 p{margin: 0!important;}.smalltext010 p img{width:100%!important;}', // PC端样式
        styleWapCode:'.smalltext010{padding:0rem 0.4rem 0.26667rem 0.4rem;border-radius:0.13333rem;border:1px solid rgb(1,102,155)!important;position:relative;margin-top:0.8rem;font-size:0.38667rem;}.smalltext010 strong{display:table;text-align:center;border-radius: 0.45rem;padding:0.13333rem 0.26667rem;background:rgb(1,102,155)!important;font-size: 0.4rem;color:#fff!important;line-height: 1.5;margin:-0.4rem auto 0.2rem;}.smalltext010 p{margin: 0!important;}.smalltext010 p img{width:100%!important;}', // 移动端样式
        htmlString:'<div class="smalltext010"><strong>标题标题标题</strong><p>正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文</p></div>'
    };
}