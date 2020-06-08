/*
 * @Author: your name
 * @Date: 2020-04-16 09:35:28
 * @LastEditTime: 2020-06-08 18:18:05
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \hx-editor\src\components\editorData\articleData\modules\nyb066.js
 */ 
export function getHtmlData (){
    return {
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'蓝色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        fileName:'nyb066.js', // 该文件的文件名
        class:'smalltxt066',// 用来给js使用添加页面内样式使用
        styleWebCode:' .smalltxt066tit{font-size:18px;font-weight: bold;}@media screen and (max-width: 1600px){.smalltxt066tit{font-size:16px;}}@media screen and (max-width: 1440px){.smalltxt066tit{font-size:16px;}}@media screen and (max-width: 1280px){.smalltxt066tit{font-size:15px;}}', // PC端样式
        styleWapCode:'.smalltxt066tit{font-size: 0.4667rem; font-weight:bold;}', // 移动端样式
        htmlString:'<p class="smalltxt066"><span class="smalltxt066tit">加粗加大</span>正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文</p>'
    };
}