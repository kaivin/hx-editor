
export function getHtmlData (){
    return {
        type:"wap", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'蓝色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        fileName:'njh42.js', // 该文件的文件名
        styleWebCode:'', // PC端样式
        styleWapCode:'.special66 li{background:#deebf9;padding:.12rem;border-radius:.2666875rem;margin:.4rem 0;position:relative}.special66 li p{background:url(../images/special28-bg.jpg) repeat;background-size:.14664375rem;border:1px solid #82b3e7;border-radius:.2666875rem;color:#3e62a8;margin:0;padding:.2rem .4rem;position:relative;z-index:1}.special66 li p i{width:.9375rem;height:.9375rem;background:url(../images/special28-bg.jpg) repeat;background-size:.14664375rem;display:block;border:1px solid #82b3e7;border-radius:50%;font-size:.64rem;color:#3e62a8;text-align:center;line-height:.9375rem;font-weight:700;font-style:normal;position:absolute;left:-.5065875rem;top:-.4rem}.special66 li p i:before{content:"";background:#deebf9;position:absolute;left:-.06875rem;right:-.06875rem;top:-.06875rem;bottom:-.06875rem;border-radius:50%;z-index:-1}', // 移动端样式
        htmlString:'<ul class="special66"><li><p><i>1</i>正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文</p></li><li><p><i>2</i>正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文</p></li></ul>'
    };
}