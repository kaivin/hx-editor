/*
 * @Author: your name
 * @Date: 2020-05-12 15:44:59
 * @LastEditTime: 2020-06-08 18:48:49
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \hx-editor\src\components\editorData\imageData\modules\nyb028.js
 */ 
export function getHtmlData (){
    return {
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        align:'left', // left(左对齐)|center(居中对齐)|right(右对齐)        
        style:'icon', // icon(图标)|number(数字)|other(其他)
        fileName:'nyb028.js', // 该文件的文件名
        class:'smalltext028',// 用来给js使用添加页面内样式使用
        styleWebCode:'.smalltext028{max-width:800px;margin-left:auto;margin-right:auto;}.smalltext028 li{background:rgb(199,237,251)!important;-webkit-box-shadow:0 0 0.8625rem rgba(127,207,237, 0.64) inset;box-shadow:inset 0 0 0.8625rem rgba(127,207,237, 0.64);position:relative;padding:25px 25px 25px 25px!important;border-radius:30px;margin:20px 0!important;}.smalltext028 li strong{clear:both;display:block;text-align:left;color:rgb(0,86,133)!important;font-size:20px;}.smalltext028 li p{margin:10px 0px 0px 0px!important;}', // PC端样式
        styleWapCode:'.smalltext028 li{background:rgb(199,237,251)!important;-webkit-box-shadow:0 0 0.8625rem rgba(127,207,237, 0.64) inset;box-shadow:inset 0 0 0.8625rem rgba(127,207,237, 0.64);position:relative;padding:0.4rem 0.33333rem 0.4rem 0.4rem!important;border-radius:0.4rem;margin:0.26667rem 0!important;}.smalltext028 li strong{clear:both;color:rgb(0,86,133)!important;display:block;text-align:left;line-height:0.53333rem;font-size:0.42667rem;}.smalltext028 li p{margin:0.13333rem 0rem 0rem 0rem;}', // 移动端样式
        htmlString:'<ul class="smalltext028"><li><strong>标题标题标题</strong><p>正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文</p></li><li><strong>标题标题标题</strong><p>正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文</p></li></ul>'
    };
}