
export function getHtmlData (){
    return {
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'红色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        fileName:'nyb11.js', // 该文件的文件名
        styleWebCode:'.smalltext011 {clear:both;display:block;width:100%;border:1px dotted #c62929;padding:10px 20px 0px 20px;border-radius:10px;overflow:hidden;margin-bottom:20px!important;}.smalltext011 strong {clear:both;display:block;text-align:center;color:#c62929;padding-bottom:5px;font-size:18px;}.smalltext011 p {margin:0px;}', // PC端样式
        styleWapCode:'.smalltext011{clear:both; display:block; width:100%; border:1px dotted #c62929; padding:0.26667rem 0.26667rem 0rem 0.26667rem; border-radius:0.13333rem; overflow:hidden; margin-bottom:0.26667rem;}.smalltext011 strong{clear:both; display:block; text-align:center; color:#c62929; padding-bottom:0.06667rem; font-size:0.42667rem;}.smalltext011 p{margin:0px;}', // 移动端样式
        htmlString:'<div class="smalltext011"><strong>标题标题标题</strong><p>正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文<p></div>'
    };
}