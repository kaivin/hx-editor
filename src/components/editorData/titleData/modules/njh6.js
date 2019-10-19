
export function getHtmlData (){
    return {
        type:"wap", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'蓝色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        align:'center', // left(左对齐)|center(居中对齐)|right(右对齐)        
        style:'other', // icon(图标)|number(数字)|other(其他)
        fileName:'njh6.js', // 该文件的文件名
        styleWebCode:'', // PC端样式
        styleWapCode:'.special79{margin:.75rem 0 .4rem!important;padding:.48rem 0 0;position:relative;z-index: 1;}.special79:before{content:"";width:100%;height:.1333125rem;background:#e7f3ff;border-top:.0266875rem solid #3876da;display:block;position:absolute;left:0;top:0}.special79 b{color:#1555b8;display:inline-block;background:#e7f3ff;border-radius:50px;padding:0 .4rem;line-height:.6666875rem;box-shadow:0 -.04rem 0 #3876da;position:relative}.special79 b:after,.special79 b:before{content:"";width:.1125rem;height:.48rem;background:#e7f3ff;border-left:1px solid #3876da;display:block;position:absolute;top:-.44rem;z-index:-1}.special79 b:before{left:.6rem}.special79 b:after{right:.6rem}', // 移动端样式
        htmlString:'<p class="special79"><b>标题标题标题标题标题标题</b></p>'
    };
}