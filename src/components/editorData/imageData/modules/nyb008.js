export function getHtmlData (){
    return {
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'棕色,黄色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        fileName:'nyb008.js', // 该文件的文件名
        styleWebCode:'.smalltext008{background:#fff4e2;padding:20px 20px 20px 20px;border-radius:10px;position:relative;max-width:800px;margin: 0 auto;}.smalltext008 strong{display:inline-block;text-align:center;border-radius:30px;padding:10px 20px;background:#cc5510;color:#fff!important;line-height:1.4;font-size:18px;margin-bottom: 15px;}.smalltext008 strong span{float:left;padding-right:10px;}.smalltext008 p{margin: 0!important;}', // PC端样式
        styleWapCode:'.smalltext008{background: #fff4e2;padding: 0.26667rem 0.26667rem 0.26667rem 0.26667rem;border-radius: 0.13333rem;position: relative;font-size: 0.38667rem;}.smalltext008 strong{display: inline-block;text-align: center;border-radius: 0.4rem;padding: 0.13333rem 0.26667rem;background: #cc5510;font-size: 0.4rem;color: #fff!important;line-height: 1.2;margin-bottom: 0.2rem;}.smalltext008 strong span{float: left;padding-right: 0.13333rem;}.smalltext008 p{margin: 0!important;}', // 移动端样式
        htmlString:'<div class="smalltext008"><strong><span>1</span>标题</strong><p>正文正文正文</p></div>'
    };
}