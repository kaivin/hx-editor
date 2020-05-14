/*
 * @Author: your name
 * @Date: 2020-04-16 09:35:28
 * @LastEditTime: 2020-05-14 09:15:57
 * @LastEditors: your name
 * @Description: In User Settings Edi
 * @FilePath: \hx-editor\src\components\editorData\buttonData\modules\nyb004.js
 */

export function getHtmlData (){
    return {
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'蓝色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        align:'center', // left(左对齐)|center(居中对齐)|right(右对齐)        
        style:'other', // icon(图标)|number(数字)|other(其他)
        fileName:'nyb004.js', // 该文件的文件名
        styleWebCode:'.smallbtn004{text-align: center;}.smallbtn004 a,.smallbtn004 span{display: inline-block; width:500px;}.smallbtn004 img{max-width: 100%;width: 100%;}', // PC端样式
        styleWapCode:'.smallbtn004{text-align:center;width:9.2rem;margin:0.4rem auto;}.smallbtn004 a,.smallbtn004 span{clear:both;display:block;}.smallbtn004 img{max-width:100%;width:100%;}', // 移动端样式
        htmlString:'<p class="smallbtn004"><a href="#" rel="nofollow"><img src="/images/insidestyle/smallbtn004.png" alt=""></a></p>'
    };
}