export function getHtmlData (){
    return {
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'橙色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        fileName:'nyb010.js', // 该文件的文件名
        styleWebCode:'.smalltext010{padding:0px 20px 20px 20px;border-radius:10px;border:1px solid #fd9001;position:relative;margin-top:58px;font-size:16px;max-width:800px;margin-left:auto;margin-right:auto;}.smalltext010 strong{display:block;text-align:center;border-radius:30px;padding:10px 20px;background:#fd9001;color:#fff!important;line-height:1.4;margin-top:-24px;font-size:18px;}.smalltext010 p{margin:15px 0px 0px 0px;}', // PC端样式
        styleWapCode:'.smalltext010{padding:0rem 0.4rem 0.26667rem 0.4rem;border-radius:0.13333rem;border:1px solid #fd9001;position:relative;margin-top:0.8rem;font-size:0.38667rem;}.smalltext010 strong{display:block;text-align:center;border-radius:0.4rem;padding:0.13333rem 0.26667rem;background:#fd9001;color:#fff!important;line-height:1.4;margin-top:-0.4rem;margin-bottom:0.2rem;}.smalltext010 p{margin: 0rem 0rem 0.1rem 0rem;}', // 移动端样式
        htmlString:'<div class="smalltext010"><strong>标题标题标题</strong><p>正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文</p></div>'
    };
}