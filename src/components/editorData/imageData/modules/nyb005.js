/*
 * @Author: your name
 * @Date: 2019-12-30 12:29:20
 * @LastEditTime: 2020-06-08 18:22:33
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \hx-editor\src\components\editorData\imageData\modules\nyb005.js
 */ 
export function getHtmlData (){
    return {
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        align:'left', // left(左对齐)|center(居中对齐)|right(右对齐)        
        style:'icon', // icon(图标)|number(数字)|other(其他)
        fileName:'nyb005.js', // 该文件的文件名
        class:'smalltext005',// 用来给js使用添加页面内样式使用
        styleWebCode:'.smalltext005{padding:20px 20px 10px 20px;border-radius:10px;border:1px solid rgb(1,102,155)!important;position:relative;max-width:800px;margin-left:auto;margin-right:auto;}.smalltext005 strong{display:inline-block;padding:0px 0px 5px 0px;font-size: 18px;color:rgb(1,102,155)!important;line-height:1.4;border-bottom:2px solid rgb(1,102,155)!important;margin-bottom:15px;}.smalltext005 p{margin: 0!important;}', // PC端样式
        styleWapCode:'.smalltext005{padding: 0.3rem 0.4rem;border-radius:0.13333rem;border:1px solid rgb(1,102,155)!important;position:relative;font-size:0.38667rem;}.smalltext005 strong{display:inline-block;padding:0rem 0rem 0.06667rem 0rem;font-size: 0.4rem;color:rgb(1,102,155)!important;line-height:1.4;border-bottom:2px solid rgb(1,102,155)!important;margin-bottom:0.2rem;}.smalltext005 p{margin: 0!important;}', // 移动端样式
        htmlString:'<div class="smalltext005"><strong>标题标题标题标题标题</strong><p>正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文</p></div>'
    };
}