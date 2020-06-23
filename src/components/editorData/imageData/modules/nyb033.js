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
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        align:'left', // left(左对齐)|center(居中对齐)|right(右对齐)        
        style:'icon', // icon(图标)|number(数字)|other(其他)
        fileName:'nyb033.js', // 该文件的文件名
        class:'smalltext033',// 用来给js使用添加页面内样式使用
        styleWebCode:'.smalltext033{clear:both;position:relative;background:rgba(1,102,155,1)!important;background:-webkit-linear-gradient(top,rgba(1,102,155,0),rgba(1,102,155,1));background:-o-linear-gradient(top, rgba(1,102,155,0),rgba(1,102,155,1));background:linear-gradient(to bottom, rgba(1,102,155,0),rgba(1,102,155,1));border-radius: 14px;margin-top: 30px;margin-bottom: 30px;padding: 0px 25px 25px 25px;}.smalltext033:after{content:"";position:absolute;left:1px;right:1px;top:1px;bottom:1px;border-radius: 14px;background:#fff;}.smalltext033 strong{display:inline-block;position:relative;padding: 10px 20px;background:rgba(1,102,155,1)!important;color:#fff !important;line-height:1.4;overflow:hidden;z-index:2;border-radius: 14px 14px 14px 0px;margin-left: -25px;}.smalltext033 p{position:relative;z-index:2}', // PC端样式
        styleWapCode:'.smalltext033{clear:both;position:relative;background:rgba(1,102,155,1);background:-webkit-linear-gradient(top, rgba(1,102,155,0),rgba(1,102,155,1));background:-o-linear-gradient(top, rgba(1,102,155,0),rgba(1,102,155,1));background:linear-gradient(to bottom, rgba(1,102,155,0),rgba(1,102,155,1));border-radius:.18667rem;margin-top:.61333rem;margin-bottom:.61333rem;padding:0rem .32rem .32rem .32rem}.smalltext033:after{content:"";position:absolute;left:1px;right:1px;top:1px;bottom:1px;border-radius:.18667rem;background:#fff}.smalltext033 strong{display:inline-block;position:relative;border-radius:0rem 0.2rem 0.2rem 0rem;padding:0.13333rem 0.26667rem;background:rgba(1,102,155,1)!important;color:#fff !important;line-height:1.4;overflow:hidden;z-index:2;font-size:.42667rem;border-radius:.18667rem .18667rem .18667rem 0rem;margin-left:-.32rem}.smalltext033 p{position:relative;z-index:2}', // 移动端样式
        htmlString:'<div class="smalltext033"><strong>第三种：移动制砂机</strong><p style="text-align:center;"><img src="https://www.hxjq.cn/images/nopicture01.jpg" title="" alt=""></p><p style="text-align:center;color:#de861c;"><a href="https://m.chinahxjq.com/news/n2240.html" target="_blank">移动制砂机</a>，处理能力50-380t/h</p><p>移动制砂机，是在固定式制砂机基础上改良而来，通过将制砂机安装在一台移动破碎上，不受施工场地大小限制、完成远程作业模式、一人可操作、节省人工，出料可达到5mm以下</p></div>'
    };
}