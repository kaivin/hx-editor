
export function getHtmlData (){
    return {
        type:"wap", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'蓝色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        fileName:'njh18.js', // 该文件的文件名
        styleWebCode:'', // PC端样式
        styleWapCode:'.special01{background:#fafdff;padding:1px 0;position:relative;margin-top:.5333125rem}.special01:before{content:"";border:1px dashed #e6e6e6;position:absolute;left:0;right:0;top:0;bottom:0}.special01:after{content:"";width:.2666875rem;height:.2666875rem;border:1px solid #e6e6e6;border-radius:50%;position:absolute;right:1.3333125rem;top:-.1333125rem}.special01 p{color:#101010;text-align:center}.special01 p:first-child:after,.special01 p:first-child:before{content:"";width:.1733125rem;height:.1733125rem;background:#4d96d8;border-radius:50%;display:block;position:absolute;top:-.08rem}.special01 p:first-child:before{left:1.23980625rem}.special01 p:first-child:after{right:1.23980625rem}', // 移动端样式
        htmlString:'<div class="special01"><p>正文正文正文</p><p>正文正文正文正文正文</p><p>正文正文正文</p></div>'
    };
}