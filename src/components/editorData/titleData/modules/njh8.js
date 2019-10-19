
export function getHtmlData (){
    return {
        type:"wap", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'蓝色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        align:'center', // left(左对齐)|center(居中对齐)|right(右对齐)        
        style:'other', // icon(图标)|number(数字)|other(其他)
        fileName:'njh8.js', // 该文件的文件名
        styleWebCode:'', // PC端样式
        styleWapCode:'  .special105{text-align:center;position:relative;z-index: 1;}.special105 b{background:#5785d2;background:-webkit-linear-gradient(left,#5785d2,#6697e4);background:-o-linear-gradient(right,#5785d2,#6697e4);background:-moz-linear-gradient(right,#5785d2,#6697e4);background:linear-gradient(to right,#5785d2,#6697e4);display:inline-block;color:#fff;border-radius:50px;padding:0 6%}.special105:before{content:"";width:90%;height:.04rem;background: -webkit-linear-gradient(left,transparent,#5785d2,transparent);background: -o-linear-gradient(right,transparent,#5785d2,transparent);background: -moz-linear-gradient(right,transparent,#5785d2,transparent);background: linear-gradient(to right,transparent,#5785d2,transparent);position:absolute;left:5%;top:.375rem;z-index:-1}', // 移动端样式
        htmlString:'<p class="special105"><b>标题标题标题</b></p>'
    };
}