/*
 * @Author: your name
 * @Date: 2019-12-30 12:29:20
 * @LastEditTime: 2020-06-08 18:50:51
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \hx-editor\src\components\editorData\imageData\modules\nyb006.js
 */ 
export function getHtmlData (){
    return {
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'红色,粉色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        fileName:'nyb006.js', // 该文件的文件名
        class:'smalltext006',// 用来给js使用添加页面内样式使用
        styleWebCode:'.smalltext006{background:#fff0f1;padding:20px 20px 10px 20px;box-sizing:border-box;font-size:16px;max-width:800px;margin-left:auto;margin-right:auto;}.smalltext006 p.smalltext006tit{font-weight:normal;position:relative;text-align:center;padding:0px;margin:10px 0px 0px 0px;}.smalltext006 p.smalltext006tit span{background:linear-gradient(to bottom, #b72630, #741134);color:#fff;font-size:20px;font-weight:bold;padding:10px 10px 0px 10px;border-radius:50%;z-index:2;position:relative;display:inline-block;width:40px;height:40px;line-height:1;margin:0px 5px;}.smalltext006 strong{font-weight:normal;display:block;text-align:center;font-size:14px;color:#b02330!important;position:relative;margin-top:20px;line-height:1;}.smalltext006 p{margin-bottom:10px;margin-top:10px;}', // PC端样式
        styleWapCode:'.smalltext006{background:#fff0f1;padding:0.26667rem;box-sizing:border-box;font-size:0.38667rem;}.smalltext006 p.smalltext006tit{font-weight:normal;position:relative;text-align:center;padding:0px;}.smalltext006 p.smalltext006tit span{background:linear-gradient(to bottom, #b72630, #741134);color:#fff;font-size:0.42667rem;padding:0.12rem 0.12rem 0rem 0.12rem;border-radius:50%;z-index:2;position:relative;display:inline-block;width:0.66667rem;height:0.66667rem;line-height:1;margin:0rem 0.06667rem;}.smalltext006 strong{font-weight:normal;display:block;text-align:center;font-size:0.32rem;color:#b02330!important;position:relative;margin-bottom:0.06667rem;margin-top:0.13333rem;}.smalltext006 p{margin: 0rem 0rem 0.1rem 0rem;}', // 移动端样式
        htmlString:'<div class="smalltext006"><p class="smalltext006tit"><span>应</span><span>用</span><span>原</span><span>理</span></p><strong>配件设计独特,使用寿命长</strong><p>正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文</p></div>'
    };
}