export function getHtmlData (){
    return {
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'蓝色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        fileName:'nyb017.js', // 该文件的文件名
        class:'smalltext017',// 用来给js使用添加页面内样式使用
        styleWebCode:'.smalltext017{background:#e6f2ff;border:10px solid #7bb1ec;border-radius:30px;padding:10px;margin-top:50px;position:relative;max-width:800px;margin-left:auto;margin-right:auto;}.smalltext017 strong{background:#e6f2ff;border-radius:20px 20px 0px 0px;text-align:center;color:#185db1!important;font-size:18px;padding:10px 0px;border-bottom:1px dashed #4070ac;clear:both;display:block;margin:-30px 5px 0px 5px;}.smalltext017 p{margin:0px !important;padding-top:15px;}', // PC端样式
        styleWapCode:'.smalltext017{background:#e6f2ff;border:0.13333rem solid #7bb1ec;border-radius:0.4rem;padding:0.13333rem 0.4rem;margin-top:0.66667rem;position:relative;}.smalltext017 strong{background:#e6f2ff;border-radius:0.26667rem 0.26667rem 0rem 0rem;text-align:center;color:#185db1!important;padding:0.13333rem 0rem;border-bottom:1px dashed #4070ac;clear:both;display:block;margin:-0.4rem -0.13333rem 0rem -0.13333rem;}.smalltext017 p{margin:0rem !important;padding-top:0.2rem;}', // 移动端样式
        htmlString:'<div class="smalltext017"><strong>1、标题</strong><p>正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文</p></div>'
    };
}