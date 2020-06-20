/*
 * @Author: your name
 * @Date: 2019-12-30 12:29:20
 * @LastEditTime: 2020-06-08 18:24:01
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \hx-editor\src\components\editorData\imageData\modules\nyb027.js
 */ 
export function getHtmlData (){
    return {
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        align:'left', // left(左对齐)|center(居中对齐)|right(右对齐)        
        style:'icon', // icon(图标)|number(数字)|other(其他)
        fileName:'nyb027.js', // 该文件的文件名
        class:'smalltext027',// 用来给js使用添加页面内样式使用
        styleWebCode:'.smalltext027{max-width:800px;margin-left:auto;margin-right:auto;}.smalltext027 li{background:rgb(199,237,251)!important;-webkit-box-shadow:0 0 0.8625rem rgba(127,207,237, 0.64) inset;box-shadow:inset 0 0 0.8625rem rgba(127,207,237, 0.64);position:relative;padding:25px 25px 25px 120px!important;border-radius:30px;margin:20px 0!important;}.smalltext027 li:before{content:"";position:absolute;border-right:1px dashed rgb(1,102,155)!important;width:0px;top:15px;bottom:15px;left:100px;}.smalltext027 li b{width:99px;color:rgb(0,86,133)!important;font-size:60px;text-align:center;display:block;position:absolute;left:0;top:50%;margin-top:-40px;line-height:80px;}.smalltext027 li strong{clear:both;display:block;text-align:left;color:rgb(0,86,133)!important;font-size:20px;}.smalltext027 li p{margin:10px 0px 0px 0px;}', // PC端样式
        styleWapCode:'.smalltext027 li{background:rgb(199,237,251)!important;-webkit-box-shadow:0 0 0.8625rem rgba(127,207,237, 0.64) inset;box-shadow:inset 0 0 0.8625rem rgba(127,207,237, 0.64);position:relative;padding:0.4rem 0.33333rem 0.4rem 1.6rem!important;border-radius:0.4rem;margin:0.26667rem 0!important;}.smalltext027 li:before{content:"";position:absolute;border-right:1px dashed rgb(1,102,155)!important;width:0px;top:0.2rem;bottom:0.2rem;left:1.33333rem;}.smalltext027 li b{width:1.32rem;font-size:0.8rem;color:rgb(0,86,133)!important;text-align:center;display:block;position:absolute;left:0;top:50%;margin-top:-0.53333rem;line-height:1.06667rem;}.smalltext027 li strong{clear:both;display:block;text-align:left;line-height:0.53333rem;font-size:0.42667rem;color:rgb(0,86,133)!important;}.smalltext027 li p{margin:0.13333rem 0rem 0rem 0rem;}', // 移动端样式
        htmlString:'<ul class="smalltext027"><li><b>1</b><strong>标题标题标题</strong><p>正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文</p></li><li><b>2</b><strong>标题标题标题</strong><p>正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文</p></li></ul>'
    };
}