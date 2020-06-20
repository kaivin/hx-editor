/*
 * @Author: your name
 * @Date: 2019-12-30 12:29:20
 * @LastEditTime: 2020-06-08 18:22:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \hx-editor\src\components\editorData\imageData\modules\nyb009.js
 */ 
export function getHtmlData (){
    return {
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        align:'left', // left(左对齐)|center(居中对齐)|right(右对齐)        
        style:'icon', // icon(图标)|number(数字)|other(其他)
        fileName:'nyb009.js', // 该文件的文件名
        class:'smalltext009',// 用来给js使用添加页面内样式使用
        styleWebCode:'.smalltext009{clear:both;display:block;border:1px solid rgb(2,143,199)!important;position:relative;border-radius:10px;padding:20px 20px 10px 20px;max-width:800px;margin-left:auto;margin-right:auto;}.smalltext009 .smalltext009tit{display:inline-block;font-size:18px;font-weight:bold;color:rgb(1,102,155)!important;padding-bottom:15px;margin:0px !important;}.smalltext009 .smalltext009pic{margin:0px !important;}.smalltext009 .smalltext009pic img{width:100%;margin:0px;padding:0px;}.smalltext009 .smalltext009icon{clear:both;display:block;overflow:hidden;text-align:left;padding:15px 0px;margin:0px !important;}.smalltext009 .smalltext009icon span{float:left;margin-right:10px;padding:5px 10px;border-radius:5px;font-size:16px;line-height:20px;background:rgb(199,237,251)!important;}.smalltext009 .smalltext009txt{background:url(../images/insidestyle/newicon04.png) no-repeat left 5px;background-size:20px;padding-left:30px;font-size:16px;line-height:30px;padding-bottom:8px;margin:0px !important;}', // PC端样式
        styleWapCode:'.smalltext009{clear: both;display: block;border: 1px solid rgb(2,143,199)!important;position: relative;border-radius: 0.13333rem;padding: 0.26667rem;}.smalltext009 .smalltext009tit{display: inline-block;font-size: 0.42667rem;font-weight: bold;color: rgb(1,102,155)!important;border-bottom: 0px;padding-bottom: 0.2rem;margin: 0rem;}.smalltext009 .smalltext009pic{margin: 0rem;}.smalltext009 .smalltext009pic img{width:100%; margin:0rem; padding:0rem; }.smalltext009 .smalltext009icon{clear:both; display:block; overflow:hidden; text-align:left; padding:.2rem 0rem;margin: 0rem;}.smalltext009 .smalltext009icon span{float: left;margin-right: 0.13333rem;padding: 0.04rem 0.13333rem;line-height: 0.4rem;border-radius: 0.06667rem;font-size: 0.32rem;background:rgb(199,237,251)!important;}.smalltext009 .smalltext009txt{background:url(../images/insidestyle/newicon04.png) no-repeat left 0.18667rem;background-size: 0.4rem;padding-left: 0.53333rem;font-size: 0.38667rem;line-height: 0.8rem;margin: 0rem;}', // 移动端样式
        htmlString:'<div class="smalltext009"><p class="smalltext009tit">颚式破碎机</p><p class="smalltext009pic"><img src="https://www.hxjq.cn/images/nybnewpic01.jpg" alt=""></p><p class="smalltext009icon"><span>高效</span><span>节能</span><span>环保</span><span>便捷</span></p><p class="smalltext009txt">正文正文正文正文正文正文</p><p class="smalltext009txt">正文正文正文正文正文正文</p><p class="smalltext009txt">正文正文正文正文正文正文</p><p class="smalltext009txt">正文正文正文正文正文正文</p></div>'
    };
}