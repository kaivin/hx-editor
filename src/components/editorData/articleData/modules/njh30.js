
export function getHtmlData (){
    return {
        type:"wap", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'蓝色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        fileName:'njh30.js', // 该文件的文件名
        styleWebCode:'', // PC端样式
        styleWapCode:'.special89{padding:0 .4rem 1px;position:relative}.special89:before{content:"";border:.04rem solid #d4e7fe;border-radius:.1333125rem;position:absolute;left:0;right:0;top:.32rem;bottom:0;z-index:-1}.special89:after{content:"";background:-webkit-linear-gradient(left,transparent,#fff 22%);background:-o-linear-gradient(right,transparent,#fff 22%);background:-moz-linear-gradient(right,transparent,#fff 22%);background:linear-gradient(to right,transparent,#fff 22%);position:absolute;left:0;right:0;top:.32rem;bottom:0;z-index:-1}.special89 .tit{width:fit-content;background:#306fbd;color:#fff;border-radius:.2rem;padding:0 .24rem}', // 移动端样式
        htmlString:'<div class="special89"><p class="tit"><b>标题标题标题</b></p><p>正文正文正文正文正文正文正文正文正文正文正文正文</p><p>正文正文正文正文正文正文正文正文正文正文正文正文正文正文</p><p>正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文</p><p>正文正文正文正文正文正文正文正文正文正文</p></div>'
    };
}