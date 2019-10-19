
export function getHtmlData (){
    return {
        type:"wap", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'蓝色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        fileName:'njh32.js', // 该文件的文件名
        styleWebCode:'', // PC端样式
        styleWapCode:'.special53{background:#e9f6ff;border:.0266875rem solid #97c7f7;margin:.8rem 0 0 0;padding:.6rem .4rem .2rem;text-align:center;position:relative;z-index:1}.special53 p{margin:0}.special53 .p1{background:url(../images/special53-bg.png) no-repeat;background-size:100% 100%;display:inline-block;border-radius:50px;padding:0 .6rem;position:absolute;top:-.48rem;left:26.5%}.special53 .p1:before{content:"";background:#e9f6ff;border-radius:50px;position:absolute;left:-.12rem;right:-.12rem;top:-.12rem;bottom:-.12rem;z-index:-1}.special54 .p1{background:#e1f1ff;padding:.1333125rem .32rem;box-shadow:.16rem .16rem 0 #87c1f3}', // 移动端样式
        htmlString:'<div class="special53"><p class="p1"><span>标题标题标题标题</span></p><p class="p2">正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文</p></div>'
    };
}