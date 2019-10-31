
export function getHtmlData (){
    return {
        type:"wap", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'蓝色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        align:'center', // left(左对齐)|center(居中对齐)|right(右对齐)        
        style:'other', // icon(图标)|number(数字)|other(其他)
        fileName:'njh04.js', // 该文件的文件名
        styleWebCode:'', // PC端样式
        styleWapCode:'.special08{width:fit-content;background:#5885d0;color:#fff;padding:0 .32rem;display:block;margin:.4rem auto .9331875rem auto!important;position:relative}.special08 b:after,.special08 b:before,.special08:after,.special08:before{content:"";width:.09333125rem;height:.6rem;background:#5885d0;display:block;position:absolute;bottom:0}.special08:before{left:-.1733125rem}.special08 b:after,.special08:after{width:.04rem;height:.36rem;left:-.2933125rem}.special08 b:before{right:-.1733125rem}.special08 b:after{left:auto;right:-.2933125rem}.special08 i{width:.2933125rem;height:.3733125rem;background:url(../images/special08.gif) no-repeat;background-size:100%;display:block;position:absolute;left:50%;bottom:-.6rem;-webkit-transform:translateX(-50%);-moz-transform:translateX(-50%);-ms-transform:translateX(-50%);-o-transform:translateX(-50%);transform:translateX(-50%)}', // 移动端样式
        htmlString:'<p class="special08"><b>标题标题标题标题</b><i></i></p>'
    };
}