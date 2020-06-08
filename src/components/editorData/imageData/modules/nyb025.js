export function getHtmlData (){
    return {
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'蓝色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        fileName:'nyb025.js', // 该文件的文件名
        class:'smalltext025',// 用来给js使用添加页面内样式使用
        styleWebCode:'.smalltext025{border-left:3px solid #97c7f7;border-bottom:3px solid #97c7f7;position:relative;max-width:800px;margin-left:auto;margin-right:auto;padding:0px 0px 20px 30px;}.smalltext025:before{content:"";width:45px;height:12px;background:#97c7f7;display:block;position:absolute;right:0;bottom:-12px;}.smalltext025 strong{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;background:#97c7f7;display:block;color:#fff!important;padding:10px 20px;position:relative;margin-left:-30px;line-height:30px;font-size:20px;}.smalltext025 strong:before{content:"";width:.1333125rem;background:#97c7f7;display:block;position:absolute;left:-.2rem;top:0;bottom:0;}.smalltext025 p{margin:15px 0px 0px 0px;}', // PC端样式
        styleWapCode:'.smalltext025{border-left:3px solid #97c7f7;border-bottom:3px solid #97c7f7;position:relative;padding:0rem 0rem 0.26667rem 0.4rem;}.smalltext025:before{content:"";width:45px;height:12px;background:#878c92;display:block;position:absolute;right:0;bottom:-0.16rem;}.smalltext025 strong{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;background:#97c7f7;display:block;color:#fff!important;padding:0.13333rem 0.26667rem;position:relative;margin-left:-0.4rem;line-height:0.53333rem;font-size:0.42667rem;}.smalltext025 strong:before{content:"";width:.1333125rem;background:#97c7f7;display:block;position:absolute;left:-.2rem;top:0;bottom:0;}.smalltext025 p{margin:0.2rem 0rem 0rem 0rem;}', // 移动端样式
        htmlString:'<div class="smalltext025"><strong>标题标题标题</strong><p>正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文</p></div>'
    };
}