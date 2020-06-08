/*
 * @Author: your name
 * @Date: 2020-04-16 09:35:28
 * @LastEditTime: 2020-06-08 18:20:30
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \hx-editor\src\components\editorData\buttonData\modules\nyb003.js
 */ 
export function getHtmlData (){
    return {
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'橙色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        align:'center', // left(左对齐)|center(居中对齐)|right(右对齐)        
        style:'other', // icon(图标)|number(数字)|other(其他)
        fileName:'nyb003.js', // 该文件的文件名
        class:'smallbtn003',// 用来给js使用添加页面内样式使用
        styleWebCode:'.smallbtn003{width:500px;margin:30px auto 40px;position:relative;}.smallbtn003:before{content:"";background:#fef2ec;border-radius:10px;position:absolute;left:10px;right:10px;top:10px;bottom:-15px;-webkit-box-shadow:0 0 5px rgba(237, 88, 11, 0.27);box-shadow:0 0 5px rgba(237, 88, 11, 0.27);}.smallbtn003:after{content:"";background:#fff;border-radius:.1333125rem;position:absolute;left:5px;right:5px;top:5px;bottom:-7px;-webkit-box-shadow:0 0 5px rgba(237, 88, 11, 0.27);box-shadow:0 0 5px rgba(237, 88, 11, 0.27);}.smallbtn003 dl{width:100%;height:99px;background:#fff;border-radius:15px;-webkit-box-shadow:0 0 10px rgba(237, 88, 11, 0.27);box-shadow:0 0 10px rgba(237, 88, 11, 0.27);position:relative;z-index:1;}.smallbtn003 dd{width:70%;font-size:21px;color:#f68900;line-height:40px;font-weight:bold;float:left;margin:0;padding:10px 0px 0px 85px;}.smallbtn003 dd:before{content:"";width:100px;height:100px;background:url(../images/insidestyle/smallbtn003.png) no-repeat;background-size:100%;display:block;position:absolute;left:-30px;top:0px;}.smallbtn003 dt{width:22%;float:right;background:url(../images/insidestyle/smallbtn003-btnbg.jpg) no-repeat;background-size:100% 100%;padding:20px 0;border-radius:0 15px 15px 0;}.smallbtn003 dt a{font-size:18px;line-height:1;text-align:center;color:#fff;display:block;background:url(../images/insidestyle/smallbtn003-btn.png) center top no-repeat;background-size:40px;padding-top:41px;}', // PC端样式
        styleWapCode:'.smallbtn003{clear:both;display:block;position:relative;margin:0.4rem 0rem 0.4rem 0.4rem;}.smallbtn003:before{content:"";background:#fef2ec;border-radius:.1333125rem;position:absolute;left:.1875rem;right:.1875rem;top:.1875rem;bottom:-.1875rem;box-shadow:0 0 0.10669rem rgba(237, 88, 11, 0.27);}.smallbtn003:after{content:"";background:#fff;border-radius:.1333125rem;position:absolute;left:.09375rem;right:.09375rem;top:.1875rem;bottom:-.09375rem;box-shadow:0 0 0.10669rem rgba(237, 88, 11, 0.27);}.smallbtn003 dl{height:1.7875rem;background:#fff;border-radius:.1333125rem;box-shadow:0 0 0.10669rem rgba(237, 88, 11, 0.27);position:relative;z-index:1;}.smallbtn003 dd{width:75%;font-size:0.4rem;color:#f68900;line-height:0.66667rem;float:left;margin:0;padding:0.2rem 0 0 1.53333rem;}.smallbtn003 dd:before{content:"";width:1.73333rem;height:1.73333rem;background:url(../images/insidestyle/smallbtn003.png) no-repeat;background-size:100%;display:block;position:absolute;left:-0.4rem;top:0rem;}.smallbtn003 dt{width:22%;float:right;background:url(../images/insidestyle/smallbtn003-btnbg.jpg) no-repeat;background-size:100% 100%;padding:.2666875rem 0 .32rem 0;border-radius:0 .1333125rem .1333125rem 0;}.smallbtn003 dt a{font-size:.375rem;line-height:1;text-align:center;color:#fff;display:block;background:url(../images/insidestyle/smallbtn003-btn.png) center top no-repeat;background-size:.69375rem;padding-top:.8265375rem;}', // 移动端样式
        htmlString:'<div class="smallbtn003"><dl><dd>专业工程师为您量身打造设备生产线</dd><dt><a href="#" rel="nofollow">点击咨询</a></dt></dl></div>'
    };
}