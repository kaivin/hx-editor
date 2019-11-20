
export function getHtmlData (){
    return {
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'红色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        align:'left', // left(左对齐)|center(居中对齐)|right(右对齐)        
        style:'number', // icon(图标)|number(数字)|other(其他)
        fileName:'nyb32.js', // 该文件的文件名
        styleWebCode:'.smalltit032 strong{display:inline-block;position:relative;padding-left:76px;box-shadow:3px 3px 2px rgba(0, 0, 0, 0.1);padding:5px 20px 5px 48px;color:#dc2d07;font-size:18px;}.smalltit032 strong span{position:absolute;top:0px;bottom:0px;background:#b55553;color:#ffffff;font-style:normal;left:0px;width:40px;z-index:5;border-radius:0% 50% 50% 0%;line-height:40px;font-size:24px;text-align:center;}', // PC端样式
        styleWapCode:'.smalltit032 strong{display:inline-block;position:relative;padding-left:76px;box-shadow:3px 3px 2px rgba(0, 0, 0, 0.1);padding:0rem 0.26667rem 0rem 0.8rem;color:#dc2d07;font-weight:normal;}.smalltit032 strong span{position:absolute;top:0px;bottom:0px;background:#b55553;color:#ffffff;font-style:normal;left:0px;width:0.66667rem;z-index:5;border-radius:0% 50% 50% 0%;line-height:0.72rem;font-size:0.38667rem;text-align:center;padding-right:0.05333rem;font-weight:bold;}', // 移动端样式
        htmlString:'<p class="smalltit032"><strong><span>1</span>标题标题标题标题标题标题</strong></p>'
    };
}