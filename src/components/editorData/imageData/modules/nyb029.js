/*
 * @Author: your name
 * @Date: 2020-05-12 15:44:59
 * @LastEditTime: 2020-06-08 18:24:08
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \hx-editor\src\components\editorData\imageData\modules\nyb029.js
 */ 
export function getHtmlData (){
    return {
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        align:'left', // left(左对齐)|center(居中对齐)|right(右对齐)        
        style:'icon', // icon(图标)|number(数字)|other(其他)
        fileName:'nyb029.js', // 该文件的文件名
        class:'smalltext029',// 用来给js使用添加页面内样式使用
        styleWebCode:'.smalltext029{background: rgb(199,237,251)!important;padding:.1333125rem 4%;margin: 24px 0;text-align:center;border-radius: 10px;position:relative;}.smalltext029:after,.smalltext029:before{content:"";width: 18px;height: 18px;background:#fff;border-radius:50%;box-shadow: -1px 1px 4px #9fb6dc inset;position:absolute;left: 20px;top: 20px;}.smalltext029:after{left:auto;right: 20px;}.smalltext029 p{text-align:left}.smalltext029 .p1{background:rgb(2,143,199)!important;display:inline-block;padding: 3px 3%;font-size: 18px;color:#fff!important;position:relative;}.smalltext029 .p1:before{content:"";width:100%;height: 3px;background:rgb(2,143,199)!important;display:block;position:absolute;left:0;bottom: -6px;}.smalltext029 .p2{text-align:center;}.smalltext029 .p1 strong{font-size: 20px;color:#fff!important;}', // PC端样式
        styleWapCode:'.smalltext029{background: rgb(199,237,251)!important;padding:.1333125rem 4%;margin:.4rem 0;text-align:center;border-radius:.16rem;position:relative;}.smalltext029:after,.smalltext029:before{content:"";width:.28125rem;height:.28125rem;background:#fff;border-radius:50%;box-shadow:-1px 1px .0666875rem #9fb6dc inset;position:absolute;left:.32rem;top:.4rem}.smalltext029:after{left:auto;right:.32rem}.smalltext029 p{text-align:left}.smalltext029 .p1{background:rgb(2,143,199)!important;display:inline-block;padding:0 5%;color:#fff!important;position:relative}.smalltext029 .p1:before{content:"";width:100%;height:.05333125rem;background:rgb(2,143,199)!important;display:block;position:absolute;left:0;bottom:-.09375rem}', // 移动端样式
        htmlString:'<div class="smalltext029"><p class="p1"><strong>标题标题</strong></p><p>正文正文</p></div>'
    };
}