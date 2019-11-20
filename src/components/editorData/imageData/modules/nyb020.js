export function getHtmlData (){
    return {
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'蓝色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        fileName:'nyb020.js', // 该文件的文件名
        styleWebCode:'.smalltext020{background:#fff;border-radius:20px;padding:0px 24px 25px;-webkit-box-shadow:0 -10px 0 #3f79b5, 0 0 12px #bedbf5 inset;box-shadow:0 -10px 0 #3f79b5, inset 0 0 12px #bedbf5;position:relative;max-width:800px;margin-left:auto;margin-right:auto;margin-top:50px;}.smalltext020 strong{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;border-radius:0px 0px 10px 10px;margin:0px auto 0px;font-size:18px;background:#3f79b5;color:#fff;display:block;padding:2px 20px 10px 20px;line-height:30px;}.smalltext020 p{margin:15px 0px 0px 0px;}', // PC端样式
        styleWapCode:'.smalltext020{background:#fff;border-radius:0.26667rem;padding:0rem 0.32rem 0.33333rem;-webkit-box-shadow:0 -0.13333rem 0 #3f79b5, 0 0 0.16rem #bedbf5 inset;box-shadow:0 -0.13333rem 0 #3f79b5, inset 0 0 0.16rem #bedbf5;position:relative;margin-top:0.66667rem;}.smalltext020 strong{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;border-radius:0rem 0rem 0.13333rem 0.13333rem;margin:0rem auto 0rem;font-size:0.42667rem;background:#3f79b5;color:#fff;display:block;padding:0.02667rem 0.26667rem 0.2rem 0.26667rem;line-height:0.4rem;}.smalltext020 p{margin:0.2rem 0rem 0rem 0rem;}', // 移动端样式
        htmlString:'<div class="smalltext020"><strong>标题标题标题</strong><p>正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文</p><p>正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文</p></div>'
    };
}