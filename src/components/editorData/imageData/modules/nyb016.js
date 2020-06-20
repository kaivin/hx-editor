/*
 * @Author: your name
 * @Date: 2019-12-30 12:29:20
 * @LastEditTime: 2020-06-08 18:49:49
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \hx-editor\src\components\editorData\imageData\modules\nyb016.js
 */ 
export function getHtmlData (){
    return {
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        align:'left', // left(左对齐)|center(居中对齐)|right(右对齐)        
        style:'icon', // icon(图标)|number(数字)|other(其他)
        fileName:'nyb016.js', // 该文件的文件名
        class:'smalltext016',// 用来给js使用添加页面内样式使用
        styleWebCode:'.smalltext016{background:#fff;padding:0 18px 12px;border-radius:15px;box-shadow:0 2px 2px rgb(127,207,237);position:relative;max-width:800px;margin-left:auto;margin-right:auto;}.smalltext016:before{content:"";width:100%;height:15px;background:rgb(2,143,199);display:block;border-radius:15px 15px 0 0;position:absolute;left:0;top:0px;}.smalltext016 span{width:fit-content;background:rgb(2,143,199);display:block;text-align:center;color:#fff;line-height:3;text-indent:0;margin:0 auto 12px auto;padding:0 20px;border-radius:0 0 15px 15px;position:relative;font-weight:bold;}', // PC端样式
        styleWapCode:'.smalltext016{background:#fff;padding:0rem 0.4rem 0.26667rem;border-radius:0.2rem;box-shadow:0 2px 2px rgb(127,207,237);position:relative;}.smalltext016:before{content:"";width:100%;height:0.2rem;background:rgb(2,143,199);display:block;border-radius:0.2rem 0.2rem 0 0;position:absolute;left:0;top:0px;}.smalltext016 span{width:fit-content;background:rgb(2,143,199);display:block;text-align:center;color:#fff;line-height:2;text-indent:0;margin:0 auto 0.16rem auto;padding:0rem 0.4rem;border-radius:0rem 0rem 0.2rem 0.2rem;position:relative;}', // 移动端样式
        htmlString:'<p class="smalltext016"><span>标题标题标题标题标题</span>正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文</p>'
    };
}