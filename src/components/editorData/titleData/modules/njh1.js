
export function getHtmlData (){
    return {
        type:"wap", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'蓝色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        align:'center', // left(左对齐)|center(居中对齐)|right(右对齐)        
        style:'other', // icon(图标)|number(数字)|other(其他)
        fileName:'njh1.js', // 该文件的文件名
        styleWebCode:'', // PC端样式
        styleWapCode:'.special107{text-align:center}.special107:after{content:"";width:100%;height:.41875rem;background:url(../images/special107-zs.png) center no-repeat;background-size:.5333125rem;display:block;position:relative;top:-.1333125rem}.special107 b{background:#217dc8;display:inline-block;border-radius:50px;box-shadow:0 .0666875rem 0 #217dc8}.special107 span{background:#217dc8;display:block;color:#fff;padding:0 .4rem;border-radius:50px;box-shadow:0 .05333125rem 0 #fff}', // 移动端样式
        htmlString:'<p class="special107"><b><span>标题标题标题标题标题标题</span></b></p>'
    };
}