export function getHtmlData (){
    return {
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'蓝色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        fileName:'nyb018.js', // 该文件的文件名
        styleWebCode:'.smalltext018{padding:0px 20px 20px 20px;border-radius:10px;position:relative;margin-top:58px;font-size:16px;max-width:800px;margin-left:auto;margin-right:auto;background:#e9f6ff;border:1px solid #97c7f7;}.smalltext018 strong{width:fit-content;display:block;text-align:center;border-radius:30px;padding:10px 20px;background:#fd9001;color:#333;font-weight:normal;line-height:1.4;font-size:18px;background:url(../images/insidestyle/small043.jpg) repeat left top;border:3px solid #96c7f7;margin:-24px auto 0px;}.smalltext018 p{margin:15px 0px 0px 0px;}', // PC端样式
        styleWapCode:'.smalltext018{padding:0rem 0.26667rem 0.26667rem 0.26667rem;border-radius:0.13333rem;position:relative;margin-top:0.77333rem;font-size:0.24rem;background:#e9f6ff;border:1px solid #97c7f7;}.smalltext018 strong{width:fit-content;display:block;text-align:center;border-radius:0.4rem;padding:0.13333rem 0.26667rem;background:#fd9001;color:#333;font-weight:normal;line-height:1.4;font-size:0.42667rem;background:url(../images/insidestyle/small043.jpg) repeat left top;border:3px solid #96c7f7;margin:-0.32rem auto 0rem;}.smalltext018 p{margin:0.2rem 0rem 0rem 0rem;}', // 移动端样式
        htmlString:'<div class="smalltext018"><strong>标题标题标题</strong><p>正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文</p></div>'
    };
}