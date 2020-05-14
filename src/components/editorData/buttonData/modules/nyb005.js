/*
 * @Author: your name
 * @Date: 2020-05-12 15:44:59
 * @LastEditTime: 2020-05-14 09:16:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \hx-editor\src\components\editorData\buttonData\modules\nyb005.js
 */

export function getHtmlData (){
    return {
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'黑色,棕色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        align:'center', // left(左对齐)|center(居中对齐)|right(右对齐)        
        style:'other', // icon(图标)|number(数字)|other(其他)
        fileName:'nyb005.js', // 该文件的文件名
        styleWebCode:'.smallbtn005{text-align: center;}', // PC端样式
        styleWapCode:'.smallbtn005{text-align: center;}', // 移动端样式
        htmlString:'<p class="smallbtn005"><a href="#" rel="nofollow"><img src="/images/insidestyle/smallbtn005-pic01.png" alt=""></a></p>'
    };
}