/*
 * @Author: your name
 * @Date: 2020-05-12 15:44:59
 * @LastEditTime: 2020-06-08 18:19:18
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \hx-editor\src\components\editorData\articleData\modules\nyb072.js
 */ 
export function getHtmlData (){
    return {
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'蓝色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        fileName:'nyb072.js', // 该文件的文件名
        class:'smalltxt072',// 用来给js使用添加页面内样式使用
        styleWebCode:'.smalltxt072{margin: 24px 0;padding: 8px 35px;position: relative;} .smalltxt072::before,.smalltxt072::after{ content: ""; height: 10px; background: #005685; position: absolute; left: 0; right: 0; } .smalltxt072::before{border-radius: 0 0 10px 10px;top: 0;} .smalltxt072::after{border-radius: 10px 10px 0 0;bottom: 0;} .smalltxt072 p{ border-bottom: 1px dashed #c0c1c2; padding: 0 0 5px; }', // PC端样式
        styleWapCode:'.smalltxt072{margin: .4rem 0;padding: 0.12rem 0.48rem;position: relative;} .smalltxt072::before,.smalltxt072::after{content: "";height: 0.2rem;background: #005685;position: absolute;left: 0;right: 0;} .smalltxt072::before{border-radius: 0 0 0.4rem 0.4rem;top: 0;} .smalltxt072::after{border-radius: 0.4rem 0.4rem 0 0;bottom: 0;} .smalltxt072 p{border-bottom: 1px dashed #c0c1c2;padding: 0 0 0.2rem;}', // 移动端样式
        htmlString:'<div class="smalltxt072"><p>正文正文正文正文正文</p><p>正文正文正文正文正文</p></div>'
    };
}