
export function getHtmlData (){
    return {
        type:"wap", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'蓝色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        align:'center', // left(左对齐)|center(居中对齐)|right(右对齐)        
        style:'other', // icon(图标)|number(数字)|other(其他)
        fileName:'njh05.js', // 该文件的文件名
        styleWebCode:'', // PC端样式
        styleWapCode:'.special57{width:fit-content;display:block;position:relative}.special57:after,.special57:before{content:"";height:.05333125rem;display:block;position:absolute;left:0}.special57:before{width:50%;background:#87c1f3;bottom:0}.special57:after{width:100%;background:#e1f1ff;bottom:-.1333125rem}', // 移动端样式
        htmlString:'<p class="special57"><strong>标题标题标题标题标题标题</strong></p>'
    };
}