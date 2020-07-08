/*
 * @Author: your name
 * @Date: 2020-06-23 08:33:34
 * @LastEditTime: 2020-06-23 08:46:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \hx-editor\src\components\editorData\buttonData\modules\nyb011.js
 */ 

export function getHtmlData (){
    return{
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        align:'center', // left(左对齐)|center(居中对齐)|right(右对齐)        
        style:'other', // icon(图标)|number(数字)|other(其他)
        fileName:'nyb012.js', // 该文件的文件名
        class:'smallbtn012',// 用来给js使用添加页面内样式使用
        styleWebCode:'.smallbtn012{clear:both; display:block; width:400px; height:146px; margin:0px auto;}.smallbtn012 img{clear: both;display: block; width:100%; }', // PC端样式
        styleWapCode:'.smallbtn012{clear: both;display: block; }.smallbtn012 img{clear: both;display: block; width:100%; }', // 移动端样式
        htmlString:'<a class="smallbtn012" href="#1"><img src="/images/insidestyle/smallbtn012.png" alt="电话"></a>'
    };
}