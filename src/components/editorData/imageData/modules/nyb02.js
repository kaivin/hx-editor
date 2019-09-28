
export function getHtmlData (){
    return {
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'棕色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        fileName:'nyb02.js', // 该文件的文件名
        styleWebCode:'.smalltext002 {padding:20px 15px 10px 15px !important;border-radius:10px;border:1px dashed #cc5510;position:relative;margin-top:20px!important;margin-bottom:20px!important;}.smalltext002 strong {display:block;border-radius:18px;padding:5px 15px;background:#ffffff;color:#cc5510;line-height:24px;border:1px dashed #cc5510;text-align:center;position:absolute;left:50%;transform:translateX(-50%);font-size:18px;top:-18px;}', // PC端样式
        styleWapCode:'.smalltext002{padding:0rem 0.4rem 0.26667rem 0.4rem !important; border-radius:0.13333rem; border:1px dashed #cc5510; position:relative; margin-top:0.53333rem; margin-bottom:0.26667rem;}.smalltext002 strong{display:block; border-radius:0.4rem; padding:0.06667rem 0.26667rem; background:#ffffff; color:#cc5510; line-height:0.64rem; top:50%; border:1px dashed #cc5510; text-align:center; margin-top:-0.4rem; margin-bottom:0.13333rem;}', // 移动端样式
        htmlString:'<p class="smalltext002"><strong>标题标题标题标题标题</strong>正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文</p>'
    };
}