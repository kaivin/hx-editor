/*
 * @Author: your name
 * @Date: 2020-04-16 09:35:28
 * @LastEditTime: 2020-06-08 18:20:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \hx-editor\src\components\editorData\buttonData\modules\nyb002.js
 */
export function getHtmlData (){
    return {
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'橙色,蓝色,黄色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        align:'center', // left(左对齐)|center(居中对齐)|right(右对齐)        
        style:'other', // icon(图标)|number(数字)|other(其他)
        fileName:'nyb002.js', // 该文件的文件名
        class:'smallbtn002',// 用来给js使用添加页面内样式使用
        styleWebCode:'.smallbtn002{text-align:center;}.smallbtn002 a{display:inline-block;width:400px;}.smallbtn002 a img{max-width:100%;width:100%;}', // PC端样式
        styleWapCode:'.smallbtn002{text-align:center;width:9.2rem;margin:0.4rem auto;}.smallbtn002 a{clear:both;display:block;}.smallbtn002 img{max-width:100%;width:100%;}', // 移动端样式
        htmlString:'<p class="smallbtn002"><a href="#" rel="nofollow"><img src="/images/insidestyle/smallbtn002.png" alt=""></a></p>'
    };
}