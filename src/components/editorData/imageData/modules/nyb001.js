/*
 * @Author: your name
 * @Date: 2019-12-30 12:29:20
 * @LastEditTime: 2020-06-08 18:22:07
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \hx-editor\src\components\editorData\imageData\modules\nyb001.js
 */ 
export function getHtmlData (){
    return {
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'棕色,黄色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        fileName:'nyb001.js', // 该文件的文件名
        class:'smalltext001',// 用来给js使用添加页面内样式使用
        styleWebCode:'.smalltext001 { background: #fff4e2; padding: 20px; border-radius: 10px; font-size: 16px; max-width: 800px; margin-left: auto; margin-right: auto; } .smalltext001 strong { display: inline-block; position: relative; border-radius: 10px; padding: 10px 20px; background: #cc5510; color: #fff !important; line-height: 1.3; overflow: hidden; font-size: 18px; margin-bottom: 10px; } .smalltext001 p { margin: 0!important; }', // PC端样式
        styleWapCode:'.smalltext001 { background: #fff4e2; padding: 0.3rem 0.3rem 0.2rem 0.3rem !important; border-radius: 0.13333rem; margin-bottom: 0.26667rem; } .smalltext001 strong {display: inline-block;position: relative;border-radius: 0.13333rem;padding: 0.06667rem 0.26667rem;background: #cc5510;color: #fff !important;line-height: 0.66667rem;overflow: hidden;font-size: 0.4rem;margin-bottom: 0.2rem;} .smalltext001 p { margin: 0!important; }', // 移动端样式
        htmlString:'<div class="smalltext001"><strong>标题标题标题标题标题</strong><p>正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文</p></div>'
    };
}