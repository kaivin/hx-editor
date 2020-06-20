/*
 * @Author: your name
 * @Date: 2019-12-30 12:29:20
 * @LastEditTime: 2020-06-08 18:49:59
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \hx-editor\src\components\editorData\imageData\modules\nyb015.js
 */ 
export function getHtmlData (){
    return {
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        align:'left', // left(左对齐)|center(居中对齐)|right(右对齐)        
        style:'icon', // icon(图标)|number(数字)|other(其他)
        fileName:'nyb015.js', // 该文件的文件名
        class:'smalltext015',// 用来给js使用添加页面内样式使用
        styleWebCode:'.smalltext015{position:relative;padding:20px 40px 50px 40px;background:#dba6ac;background:linear-gradient(to right, rgb(127,207,237), rgb(199,237,251));background:-webkit-linear-gradient(left, rgb(127,207,237), rgb(199,237,251));max-width:800px; margin:20px auto;}.smalltext015:after{content:"";position:absolute;left:15px;right:15px;bottom:15px;top:15px;border:2px solid rgb(1,102,155)!important;background:#fff;}.smalltext015 p{position:relative;z-index:2;}.smalltext015 .smalltext015tit{clear:both;text-align:center;color:rgb(1,102,155)!important;font-weight:bold;line-height:1;margin:40px 0px 20px 0px !important;font-size:22px;}.smalltext015 .smalltext015txt{font-size:16px;line-height:30px;text-align:left;margin:0px 0px 5px 0px !important;color:#5a5a5a;}.smalltext015 .smalltext015pic{box-shadow:0px 0px 10px rgb(127,207,237)!important;border-radius:15px;overflow:hidden;margin-top:20px;margin-bottom:0px !important;}.smalltext015 .smalltext015pic img{width:100%;}', // PC端样式
        styleWapCode:'.smalltext015{position:relative;padding:0.4rem 0.53333rem 0.66667rem 0.53333rem;background:#dba6ac;background:linear-gradient(to right, rgb(127,207,237), rgb(199,237,251));background:-webkit-linear-gradient(left, rgb(127,207,237), rgb(199,237,251));margin: .66667rem 0rem;}.smalltext015:after{content:"";position:absolute;left:0.2rem;right:0.2rem;bottom:0.2rem;top:0.2rem;border:2px solid rgb(1,102,155)!important;background:#fff;}.smalltext015 p{position:relative;z-index:2;}.smalltext015 .smalltext015tit{clear:both;text-align:center;color:rgb(1,102,155)!important;font-weight:bold;line-height:1;margin:0.4rem 0rem 0.26667rem 0rem;font-size:0.4rem;}.smalltext015 .smalltext015txt{font-size:0.38667rem;line-height:0.8rem;text-align:left;margin-bottom:0.4rem;color:#5a5a5a;}.smalltext015 .smalltext015pic{box-shadow:0px 0px 0.13333rem rgb(127,207,237)!important;border-radius:0.2rem;overflow:hidden;}.smalltext015 .smalltext015pic img{width:100%;}', // 移动端样式
        htmlString:'<div class="smalltext015"><p class="smalltext015tit">颚破机反击破组合</p><p class="smalltext015txt">特点：中低硬度石头破碎，成品率高、成品粒型好，在市场上能卖个好价钱。</p><p class="smalltext015pic"><img src="https://www.hxjq.cn/images/nopicture01.jpg" alt=""></p></div>'
    };
}