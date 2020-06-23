/*
 * @Author: your name
 * @Date: 2020-06-01 16:09:29
 * @LastEditTime: 2020-06-08 18:46:44
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \hx-editor\src\components\editorData\imageData\modules\nyb032.js
 */ 
export function getHtmlData (){
    return {
        type:"",// web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'',// 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static',// dynamic(动态)|static(静态)
        align:'left',// left(左对齐)|center(居中对齐)|right(右对齐)        
        style:'icon',// icon(图标)|number(数字)|other(其他)
        fileName:'nyb032.js',// 该文件的文件名
        class:'smalltext032',// 用来给js使用添加页面内样式使用
        styleWebCode:'.smalltext032{background: #fff;border: 2px solid rgb(2,143,199)!important;border-radius: 10px;padding: 70px 5% 35px;margin: 50px 0 24px;position: relative;box-shadow: 0 17px 20px rgba(199,237,251,0.34);}.smalltext032::before{ content: ""; border: 2px dotted rgb(199,237,251)!important; border-radius: 10px; position: absolute; left: 16px; right: 16px; bottom: 16px; top: 50px; }.smalltext032 p{margin: 10px 0!important;color: rgb(199,237,251)rgb(2,143,199)!important;}.smalltext032 .tit{ font-size: 22px!important; line-height: 36px!important; color: #fff!important; text-align: center; background:rgb(2,143,199)!important; padding: 12px 15px; margin: 0!important; position: absolute; right: 38px; top: -28px;}.smalltext032 .tit::before,.smalltext032 .tit::after{ content: ""; height: 60px; background-size: 100%; position: absolute; top: 0; }.smalltext032 .tit::before{left: -15px;border-top: 30px solid transparent;border-right: 15px solid rgb(2,143,199)!important;border-bottom: 30px solid rgb(2,143,199)!important;}.smalltext032 .tit::after{right: -15px;border-top: 30px solid rgb(2,143,199)!important;border-left: 15px solid rgb(2,143,199)!important;border-bottom: 30px solid transparent;}',// PC端样式
        styleWapCode:'.smalltext032{ background: #fff; border: 0.02667rem solid rgb(2,143,199) !important; border-radius: 0.2rem; padding: 0.96rem 6% 0.4rem; margin: 1.04rem 0 0.4rem; position: relative; box-shadow: 0 0.2rem 0.26667rem rgba(199,237,251,0.34); }.smalltext032::before{ content: ""; border: 0.02667rem dotted rgb(199,237,251) !important; border-radius: 0.2rem; position: absolute; left: 0.24rem; right: 0.24rem; bottom: 0.24rem; top: 0.88rem; }.smalltext032 p{ margin: 0.2rem 0 !important; }.smalltext032 .tit{ font-size: .4rem !important; color: #fff !important; line-height: 1 !important; text-align: center; background: rgb(2,143,199) !important; padding: 0.3rem 0.2rem; margin: 0 !important; position: absolute; right: 0.72rem; top: -0.56rem; }.smalltext032 .tit::before,.smalltext032 .tit::after{ content: ""; height: 0rem; position: absolute; top: 0; }.smalltext032 .tit::before{ left: -0.4rem; border-top: 0.5rem solid transparent; border-right: 0.4rem solid rgb(2,143,199) !important; border-bottom: 0.5rem solid rgb(2,143,199) !important; }.smalltext032 .tit::after{ right: -0.4rem; border-top: 0.5rem solid rgb(2,143,199) !important; border-left: 0.4rem solid rgb(2,143,199) !important; border-bottom: 0.5rem solid transparent; }',// 移动端样式
        htmlString:'<div class="smalltext032"> <p class="tit">标题标题标题</p> <p>正文正文正文正文正文正文正文正文</p> </div>'
    };
}