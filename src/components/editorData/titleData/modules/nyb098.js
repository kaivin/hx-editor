
export function getHtmlData (){
    return {
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'蓝色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        align:'left', // left(左对齐)|center(居中对齐)|right(右对齐)        
        style:'other', // icon(图标)|number(数字)|other(其他)
        fileName:'nyb098.js', // 该文件的文件名
        styleWebCode:'.smalltit098 { width: fit-content; background: #e0f1fe; border-radius: 5px 50px 50px 5px; padding: 8px 25px 8px 15px; text-indent: 0 !important; position: relative; } .smalltit098:before, .smalltit098:after { content: ""; width: 6px; background: #6aafdb; border-radius: 2px; position: absolute; left: -8px; top: 0; bottom: 0; } .smalltit098:after { width: 3px; background: #9cdef9; left: -13px; }', // PC端样式
        styleWapCode:'.smalltit098{width: fit-content;background:#e0f1fe;border-radius: 0.08rem 0.66667rem 0.66667rem 0.08rem;padding: 0.12rem 0.48rem 0.12rem 0.28rem;text-indent: 0!important;position:relative;left: 0.32rem;} .smalltit098:before,.smalltit098:after{content:"";width: 0.12rem;background:#6aafdb;border-radius: 0.04rem;position:absolute;left: -0.16rem;top:0;bottom:0;} .smalltit098:after{width: 0.08rem;background:#9cdef9;left: -0.28rem;}', // 移动端样式
        htmlString:'<p class="smalltit098"><strong>标题标题</strong></p>'
    };
}
    