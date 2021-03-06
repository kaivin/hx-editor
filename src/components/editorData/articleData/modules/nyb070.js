/*
 * @Author: your name
 * @Date: 2020-05-12 15:44:59
 * @LastEditTime: 2020-06-08 18:18:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \hx-editor\src\components\editorData\articleData\modules\nyb070.js
 */
export function getHtmlData (){
    return {
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        align:'left', // left(左对齐)|center(居中对齐)|right(右对齐)        
        style:'icon', // icon(图标)|number(数字)|other(其他)
        fileName:'nyb070.js', // 该文件的文件名
        class:'smalltxt070',// 用来给js使用添加页面内样式使用
        styleWebCode:'.smalltxt070{background: rgb(199,237,251)!important;border: 1px dashed rgb(1,102,155)!important;display: block;border-radius: 8px;padding:15px 3%;margin: 20px 10px 30px 0!important;position:relative;}.smalltxt070:after{content:"";background:#fff;border: 1px solid rgb(1,102,155)!important;border-radius: 8px;position:absolute;left: 10px;right: -10px;top: 10px;bottom: -10px;z-index:-1;}.smalltxt070 p{margin: 0!important;}', // PC端样式
        styleWapCode:'.smalltxt070{background: rgb(199,237,251)!important;border: 1px dashed rgb(1,102,155)!important;display: block;border-radius: 0.192rem;padding: 0.3rem 3%;margin: 0.4rem 0.2rem 0.6rem 0!important;position:relative;}.smalltxt070:after{content:"";background:#fff;border: 1px solid rgb(1,102,155)!important;border-radius: 0.192rem;position:absolute;left: 0.2rem;right: -0.2rem;top: 0.2rem;bottom: -0.2rem;z-index:-1;}.smalltxt070 p{margin: 0!important;}', // 移动端样式
        htmlString:'<div class="smalltxt070"><p>正文正文</p></div>'
    };
}