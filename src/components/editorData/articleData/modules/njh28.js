
export function getHtmlData (){
    return {
        type:"wap", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'蓝色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        fileName:'njh28.js', // 该文件的文件名
        styleWebCode:'', // PC端样式
        styleWapCode:'.special60 p{background:url(../images/special60-bg.jpg) no-repeat;background-size:100% 100%;padding:0 .4rem .24rem;position:relative;z-index:1}.special60 p i{font-size:.8rem;color:#3662aa;font-style:normal;font-weight:700;line-height:normal;padding-right:.4rem;display:inline-block;position:relative}.special60 p i:before{content:"";width:.68125rem;height:.68125rem;background:#fff;border-radius:50%;display:block;position:absolute;left:-.025rem;top:.3466875rem;z-index:-1}', // 移动端样式
        htmlString:'<div class="special60"><p><i>1</i>正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文</p></div>'
    };
}