
export function getHtmlData (){
    return {
        type:"wap", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'蓝色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        fileName:'njh43.js', // 该文件的文件名
        styleWebCode:'', // PC端样式
        styleWapCode:'.special67{background:#f5fbff;border:1px solid #a7d5f8;border-radius:0 .8rem 0 0;padding:1px .4rem;margin:.8rem 0 .4rem 0;position:relative}.special67:before{content:"";width:.69375rem;height:.8798625rem;background:url(../assets/images/njhimg/special67-zs.gif) center no-repeat;background-size:100%;position:absolute;left:-.2666875rem;top:-.4rem}.special67 .tit{text-align:center}.special67 .tit strong{color:#3c87d7;display:inline-block;position:relative;z-index:1}.special67 .tit strong:before{content:"";width:.64rem;height:.64rem;background:#aadafe;border-radius:50%;display:block;position:absolute;left:-.2399625rem;top:0;z-index:-1}.special67 .tit strong:after{content:"";width:.64rem;height:.64rem;border:.0264375rem dashed #aadafe;border-radius:50%;display:block;position:absolute;right:-.2rem;bottom:0;z-index:-1}.special67 p{margin: 0.4rem 0;}', // 移动端样式
        htmlString:'<div class="special67"><p class="tit"><strong>标题标题标题</strong></p><p>正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文</p></div>'
    };
}