
export function getHtmlData (){
    return {
        type:"wap", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'蓝色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        fileName:'njh21.js', // 该文件的文件名
        styleWebCode:'', // PC端样式
        styleWapCode:'.special37{background:#97c7f7;border-radius:.1333125rem;color:#fff;padding:.48rem 3% .2rem;position:relative;margin-top:.8rem!important}.special37:before{content:"";width:1.02650625rem;height:1.02650625rem;background:url(../images/special37-zs.png) center no-repeat #fff;border-radius:50%;background-size:.4rem;display:block;position:absolute;left:.4rem;top:-.48rem}', // 移动端样式
        htmlString:'<p class="special37">正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文</p>'
    };
}