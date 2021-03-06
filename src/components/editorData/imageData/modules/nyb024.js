/*
 * @Author: your name
 * @Date: 2019-12-30 12:29:20
 * @LastEditTime: 2020-06-08 18:49:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \hx-editor\src\components\editorData\imageData\modules\nyb024.js
 */ 
export function getHtmlData (){
    return {
        type:"",// web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'',// 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static',// dynamic(动态)|static(静态)
        align:'left',// left(左对齐)|center(居中对齐)|right(右对齐)        
        style:'icon',// icon(图标)|number(数字)|other(其他)
        fileName:'nyb024.js',// 该文件的文件名
        class:'smalltext024',// 用来给js使用添加页面内样式使用
        styleWebCode:'.smalltext024{ background: rgb(199,237,251) !important; padding: 1px 30px 20px; position: relative; max-width: 800px; margin-left: auto; margin-right: auto; margin-top: 60px; }.smalltext024 strong{ display: table; background: #fff; border: 2px solid rgb(1,102,155) !important; color: rgb(1,102,155) !important; font-weight: 700; line-height: 30px; text-align: center; position: relative; margin: -30px auto 0px; font-size: 20px; padding: 10px 20px; }.smalltext024 strong span{ background: #fff; font-size: 25px; font-weight: bold; line-height: 1; position: absolute; left: 15px; top: -15px; text-align: center; padding: 2px 10px; }.smalltext024 strong span:before{ content: ""; width: 12px; height: 12px; background: rgb(1,102,155) !important; display: block; position: absolute; right: -12px; top: 50%; margin-top: -6px; }.smalltext024 p{ margin: 15px 0px 0px 0px !important; }',// PC端样式
        styleWapCode:'.smalltext024{ background: rgb(199,237,251) !important; padding: 0.01333rem 0.4rem 0.26667rem; position: relative; margin-top: 0.93333rem; }.smalltext024 strong{ display: table; background: #fff; border: 2px solid rgb(1,102,155) !important; color: rgb(1,102,155) !important; font-weight: 700; line-height: 0.53333rem; text-align: center; position: relative; margin: -0.4rem auto 0px; font-size: 0.42667rem; padding: 0.13333rem 0.26667rem; }.smalltext024 strong span{ background: #fff; font-size: 0.33333rem; font-weight: bold; line-height: 1; position: absolute; left: 0.2rem; top: -0.2rem; text-align: center; padding: 0.02667rem 0.13333rem; }.smalltext024 strong span:before{ content: ""; width: 0.16rem; height: 0.16rem; background: rgb(1,102,155) !important; display: block; position: absolute; right: -0.16rem; top: 50%; margin-top: -0.08rem; }.smalltext024 p{ margin: 0.2rem 0rem 0rem 0rem !important; }',// 移动端样式
        htmlString:'<div class="smalltext024"><strong><span>1</span>标题标题标题标题</strong><p>正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文</p><p>正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文</p></div>'
    };
}