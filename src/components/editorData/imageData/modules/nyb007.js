export function getHtmlData (){
    return {
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'红色,黄色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        fileName:'nyb007.js', // 该文件的文件名
        styleWebCode:'.smalltext007{clear:both;overflow:hidden;max-width:800px;margin-left:auto;margin-right:auto;}.smalltext007 li{position:relative; margin:0!important; float:left;width:100%;padding:0px 0px 10px 20px !important;background:none !important;color:#b9272f !important;font-size:18px;margin:0px !important;}.smalltext007 li:last-child{padding-bottom:0 !important;}.smalltext007 li:after{content:"";position:absolute;left:0;top:9px;width:11px;height:11px;border-radius:50%;background-color:#b9272f;}.smalltext007 li:before{content:"";position:absolute;top:10px;left:5px;width:1px;height:100%;background-color:#D8D8D8;}.smalltext007 li:last-child:before{display:none;}.smalltext007 li p{color:#5a5a5a !important;margin-bottom:0;margin-top:0px;}.smalltext007 li:nth-last-child(odd){color:#EFBD45!important;}.smalltext007 li:nth-last-child(odd):after{background-color:#EFBD45;}', // PC端样式
        styleWapCode:'.smalltext007{clear:both; overflow:hidden; }.smalltext007 li{position: relative;float: left;width: 100%;padding: 0rem 0rem 0.13333rem 0.4rem;background: none !important;color: #b9272f;padding-bottom: 0.26667rem !important;font-size: 0.38667rem;margin: 0px 0px !important;}.smalltext007 li:last-child{padding-bottom:0 !important; }.smalltext007 li:after{content: "";position: absolute;left: 0;top: 0.14667rem;width: 0.2rem;height: 0.2rem;border-radius: 50%;background-color: #b9272f;} .smalltext007 li:nth-last-child(odd){color:#EFBD45;}.smalltext007 li:nth-last-child(odd):after{background-color:#EFBD45;}.smalltext007 li:before{content: "";position: absolute;top: 0.18667rem;left: 0.09333rem;width: 1px;height: 100%;background-color: #D8D8D8;}.smalltext007 li p{color:#5a5a5a !important; margin-bottom:0; margin-top:0rem;}.smalltext007 li:nth-last-child(odd) p{color:#EFBD45; }', // 移动端样式
        htmlString:'<ul class="smalltext007"><li>标题标题<p>正文正文正文正文正文正文</p></li><li>标题标题<p>正文正文正文正文正文正文</p></li><li>标题标题<p>正文正文正文正文正文正文</p></li><li>标题标题<p>正文正文正文正文正文正文</p></li></ul>'
    };
}