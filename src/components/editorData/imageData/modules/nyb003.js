/*
 * @Author: your name
 * @Date: 2019-12-30 12:29:20
 * @LastEditTime: 2020-06-08 18:22:25
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \hx-editor\src\components\editorData\imageData\modules\nyb003.js
 */ 
export function getHtmlData (){
    return {
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        align:'left', // left(左对齐)|center(居中对齐)|right(右对齐)        
        style:'icon', // icon(图标)|number(数字)|other(其他)
        fileName:'nyb003.js', // 该文件的文件名
        class:'smalltext003',// 用来给js使用添加页面内样式使用
        styleWebCode:'.smalltext003{padding:0px 20px 20px 20px;border-radius:10px;border:1px solid rgb(1,102,155)!important;position:relative;max-width:800px;margin-left:auto;margin-right:auto;margin-top:50px;}.smalltext003 strong{display:table;text-align:center;border-radius:30px;padding:10px 20px;background:rgb(1,102,155)!important;font-size: 18px;color:#fff!important;line-height: 1.5;margin:-24px auto 15px;}.smalltext003 p{margin: 0!important;}', // PC端样式
        styleWapCode:'.smalltext003{padding:0rem 0.4rem 0.26667rem 0.4rem;border-radius:0.13333rem;border:1px solid rgb(1,102,155)!important;position:relative;margin-top:0.8rem;font-size:0.38667rem;}.smalltext003 strong{display:table;text-align:center;border-radius:0.4rem;padding:0.13333rem 0.26667rem;background:rgb(1,102,155)!important;font-size: 0.4rem;color:#fff!important;line-height:1.4;margin:-0.4rem auto 0.2rem;}.smalltext003 p{margin: 0!important;}', // 移动端样式
        htmlString:'<div class="smalltext003"><strong>标题标题标题标题标题</strong><p>正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文</p></div>'
    };
}