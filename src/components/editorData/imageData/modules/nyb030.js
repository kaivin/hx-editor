/*
 * @Author: your name
 * @Date: 2020-05-12 15:44:59
 * @LastEditTime: 2020-06-08 18:46:56
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \hx-editor\src\components\editorData\imageData\modules\nyb030.js
 */ 
export function getHtmlData (){
    return {
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        align:'left', // left(左对齐)|center(居中对齐)|right(右对齐)        
        style:'icon', // icon(图标)|number(数字)|other(其他)
        fileName:'nyb030.js', // 该文件的文件名
        class:'smalltext030',// 用来给js使用添加页面内样式使用
        styleWebCode:'.smalltext030{background:rgb(199,237,251)!important;position:relative;box-shadow:0px 0px 5px rgb(199,237,251)!important;border-radius:10px;padding: 20px 20px 10px 20px;width:100%;max-width:800px;margin: 40px auto 20px;}.smalltext030 i{background:rgb(0,86,133)!important;font-style:normal; position:absolute; right:30px; top:-15px; color:#fff; font-weight:bold; font-size:20px; width:60px; height:50px; line-height:53px; display:block; text-align:center; }.smalltext030 i:after,.smalltext030 i:before{content:""; position:absolute; width:0px; height:0px;}.smalltext030 i:after{border-top:15px solid rgb(0,86,133)!important; border-bottom:0px; border-left:30px solid transparent; border-right:30px solid transparent; bottom:-15px; left:0px;}.smalltext030 i:before{top:0px; right:-15px;border-bottom:15px solid rgb(0,86,133)!important; border-top:0px; border-left:0px; border-right:15px solid transparent;}.smalltext030 p.p1{color:rgb(1,102,155) !important;font-size: 18px!important;font-weight: bold;border-bottom: 1px dashed rgb(1,102,155) !important;padding-bottom: 10px;margin-top: 0px!important;margin-bottom: 20px !important;}.smalltext030 p{margin-top: 10px !important;margin-bottom:10px !important;}@media (max-width: 1600px){.smalltext030{max-width:700px;}}@media (max-width: 1440px){.smalltext030{max-width:650px;}.smalltext030 i{font-size:18px; width:50px; height:40px; line-height:35px; top:-10px;}.smalltext030 i:after{border-top:10px solid rgb(0,86,133)!important; border-left:25px solid transparent; border-right:25px solid transparent; bottom:-10px;}.smalltext030 i:before{right:-10px;border-bottom:10px solid rgb(0,86,133)!important; border-right:10px solid transparent;}.smalltext030 p.p1{font-size:16px !important;}}', // PC端样式
        styleWapCode:'.smalltext030{background:rgb(199,237,251)!important;position:relative;box-shadow:0rem 0rem .06667rem rgb(199,237,251)!important;border-radius:.13333rem;padding:.26667rem .26667rem .13333rem .26667rem;width:100%;margin:.4rem auto .4rem}.smalltext030 i{background:rgb(0,86,133)!important;font-style:normal;position:absolute;right:.4rem;top:-.2rem;color:#fff;font-weight:bold;font-size:.37333rem;width:.8rem;height:.66667rem;line-height:.66667rem;display:block;text-align:center}.smalltext030 i:after,.smalltext030 i:before{content:"";position:absolute;width:0rem;height:0rem}.smalltext030 i:after{border-top:.2rem solid rgb(0,86,133)!important;border-bottom:0rem;border-left:.4rem solid transparent;border-right:.4rem solid transparent;bottom:-.2rem;left:0rem}.smalltext030 i:before{top:0rem;right:-.2rem;border-bottom:.2rem solid rgb(0,86,133)!important;border-top:0rem;border-left:0rem;border-right:.2rem solid transparent}.smalltext030 p.p1{color:rgb(1,102,155) !important;font-size:.4rem !important;font-weight:bold;border-bottom:1px dashed rgb(1,102,155) !important;padding-bottom:.13333rem;margin-top:0rem !important;margin-bottom:.26667rem !important}.smalltext030 p{margin-top:.13333rem !important;margin-bottom:.13333rem !important}', // 移动端样式
        htmlString:'<div class="smalltext030"><i>01</i><p class="p1">标题标题标题标题标题标题标题标题</p><p>正文正文正文正文正文正文正文正文</p><p>正文正文正文正文正文正文正文正文</p></div>'
    };
}