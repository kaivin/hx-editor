
export function getHtmlData (){
    return {
        type:"wap", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'蓝色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        align:'center', // left(左对齐)|center(居中对齐)|right(右对齐)        
        style:'other', // icon(图标)|number(数字)|other(其他)
        fileName:'njh07.js', // 该文件的文件名
        styleWebCode:'', // PC端样式
        styleWapCode:'.special103{text-align:center}.special103 b{background:#4772bb;background:-webkit-linear-gradient(#6091e5,#2f5595);background:-o-linear-gradient(#6091e5,#2f5595);background:-moz-linear-gradient(#6091e5,#2f5595);background:linear-gradient(#6091e5,#2f5595);display:inline-block;color:#fff;padding:0 8%;border-radius:50px;margin:0 5.5%;position:relative}.special103 b:after,.special103 b:before{content:"";width:.6666875rem;height:.2rem;background:url(../images/special103-zs.png) no-repeat;display:block;background-size:1.10625rem;position:absolute;top:.2933125rem}.special103 b:before{background-position:left center;left:-.8798625rem}.special103 b:after{background-position:right center;right:-.8798625rem}', // 移动端样式
        htmlString:'<p class="special103"><b>标题标题标题</b></p>'
    };
}