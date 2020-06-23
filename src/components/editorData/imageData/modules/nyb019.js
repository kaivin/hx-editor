/*
 * @Author: your name
 * @Date: 2019-12-30 12:29:20
 * @LastEditTime: 2020-06-08 18:49:40
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \hx-editor\src\components\editorData\imageData\modules\nyb019.js
 */ 
export function getHtmlData (){
    return {
        type:"",// web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'',// 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static',// dynamic(动态)|static(静态)
        align:'left',// left(左对齐)|center(居中对齐)|right(右对齐)        
        style:'icon',// icon(图标)|number(数字)|other(其他)
        fileName:'nyb019.js',// 该文件的文件名
        class:'smalltext019',// 用来给js使用添加页面内样式使用
        styleWebCode:'.smalltext019{ padding: 0px 30px 20px 30px; position: relative; max-width: 800px; margin-left: auto; margin-right: auto; margin-top: 50px; }.smalltext019:before{ content: ""; border: 5px solid rgb(199,237,251); border-radius: 10px; position: absolute; left: 0; right: 0; top: 20px; bottom: 0; z-index: 1; }.smalltext019:after{ content: ""; background: -o-linear-gradient(right,transparent,#fff 22%); background: -webkit-gradient(linear,left top,right top,from(transparent),color-stop(22%,#fff)); background: -o-linear-gradient(left,transparent,#fff 22%); background: linear-gradient(90deg,transparent,#fff 22%); position: absolute; left: 0; right: 0; top: 15px; bottom: 0; z-index: 2; }.smalltext019 strong{ background: rgb(1,102,155); color: #fff !important; border-radius: 10px; margin: 0; font-size: 18px; position: relative; z-index: 3; padding: 10px 20px; line-height: 30px; display: table; }.smalltext019 p{ margin: 15px 0px 0px 0px; position: relative; z-index: 4; }',// PC端样式
        styleWapCode:'.smalltext019{ padding: 0rem 0.4rem 0.26667rem 0.4rem; position: relative; margin-top: 0.66667rem; }.smalltext019:before{ content: ""; border: 0.06667rem solid rgb(199,237,251); border-radius: 0.13333rem; position: absolute; left: 0; right: 0; top: 0.45rem; bottom: 0; z-index: 1; }.smalltext019:after{ content: ""; background: -o-linear-gradient(right,transparent,#fff 22%); background: -webkit-gradient(linear,left top,right top,from(transparent),color-stop(22%,#fff)); background: -o-linear-gradient(left,transparent,#fff 22%); background: linear-gradient(90deg,transparent,#fff 22%); position: absolute; left: 0; right: 0; top: 0.2rem; bottom: 0; z-index: 2; }.smalltext019 strong{ background: rgb(1,102,155); color: #fff !important; border-radius: 0.2rem; margin: 0; font-size: 0.42667rem; position: relative; z-index: 3; padding: 0.3rem 0.36rem; line-height: 0.4rem; display: table; }.smalltext019 p{ margin: 0.2rem 0rem 0rem 0rem; position: relative; z-index: 4; }',// 移动端样式
        htmlString:'<div class="smalltext019"><strong>标题标题标题</strong><p>正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文</p><p>正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文</p></div>'
    };
}