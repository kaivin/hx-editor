
export function getHtmlData (){
    return {
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'粉色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        align:'center', // left(左对齐)|center(居中对齐)|right(右对齐)        
        style:'other', // icon(图标)|number(数字)|other(其他)
        fileName:'nyb48.js', // 该文件的文件名
        styleWebCode:'.smalltit048{text-align:center;}.smalltit048 strong{display:inline-block;position:relative;border-radius:20px;background:#ffc0cb;padding:0px 0px 6px 0px;}.smalltit048 strong span{clear:both;display:block;background:#ffc0cb;color:#fff;padding:10px 15px;border-radius:20px;box-shadow:0 2px 0 #fff;font-size:18px;line-height:1.5;}', // PC端样式
        styleWapCode:'.smalltit048{text-align:center;}.smalltit048 strong{display:inline-block;position:relative;border-radius:0.42667rem;background:#ffc0cb;padding:0rem 0rem 0.10667rem 0rem;}.smalltit048 strong span{clear:both;display:block;background:#ffc0cb;color:#fff;padding:0.06667rem 0.26667rem;border-radius:50px;box-shadow:0 .05333125rem 0 #fff;font-size:0.4rem;line-height:1.5;}', // 移动端样式
        htmlString:'<p class="smalltit048"><strong><span>标题标题标题标题标题标题</span></strong></p>'
    };
}