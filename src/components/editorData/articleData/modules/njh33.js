
export function getHtmlData (){
    return {
        type:"wap", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'蓝色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        fileName:'njh33.js', // 该文件的文件名
        styleWebCode:'', // PC端样式
        styleWapCode:'.special54 .p1{background:#e1f1ff;padding:.1333125rem .32rem;box-shadow:.16rem .16rem 0 #87c1f3}.special54 .p2{color:#3466b0;text-align:center;border:.0266875rem solid #87c1f3;border-radius:.1333125rem;margin:.48rem 0;position:relative}.special54 .p2:after,.special54 .p2:before{content:"";width:.0266875rem;height:.48rem;background:#87c1f3;display:block;position:absolute;top:-.48rem;left:.32rem}.special54 .p2:after{left:auto;right:.32rem}', // 移动端样式
        htmlString:'<div class="special54"><p class="p1">正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文</p><p class="p2">正文正文正文正文正文正文正文正文正文正文正</p></div>'
    };
}