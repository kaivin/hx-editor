
export function getHtmlData (){
    return {
        type:"wap", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'蓝色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        fileName:'njh47.js', // 该文件的文件名
        styleWebCode:'', // PC端样式
        styleWapCode:'.special96{position:relative;z-index:1}.special96 p{background:#fff;box-shadow:0 0 .8625rem rgba(136,191,242,.64) inset;color:#1b5cab;position:relative;padding:.12rem .32rem .12rem 1.53125rem;border-radius: .4rem;margin: 0.4rem 0;}.special96 p:before{content:"";background:#adc6e7;border-radius:.4rem;position:absolute;left:.1333125rem;right:-.1333125rem;top:.1333125rem;bottom:-.1333125rem;z-index:-1}.special96 p b{width:1.333125rem;font-size:.9625rem;text-align:center;display:flex;align-items:center;justify-content:center;border-right:1px dashed #adc6e7;position:absolute;left:0;top:.2666875rem;bottom:.2666875rem}.special96 p strong{display:block}', // 移动端样式
        htmlString:'<div class="special96"><p><b>1</b><strong>标题标题标题</strong>正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文</p><p><b>2</b><strong>标题标题标题</strong>正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文</p></div>'
    };
}