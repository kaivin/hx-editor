
export function getHtmlData (){
    return {
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'黄色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        align:'left', // left(左对齐)|center(居中对齐)|right(右对齐)        
        style:'number', // icon(图标)|number(数字)|other(其他)
        fileName:'nyb30.js', // 该文件的文件名
        styleWebCode:'.smalltit030 {padding-bottom:20px !important;}.smalltit030 strong {display:inline-block;position:relative;padding-left:47px;background:#fff0dc;padding:0px 20px 0px 50px;margin-left:0px;border-radius:18px;font-weight:normal;}.smalltit030 strong span {position:absolute;top:0px;background:#ffffff;color:#cb7600;font-style:normal;left:0px;width:35px;height:35px;z-index:5;border-radius:50%;line-height:31px;border:2px solid #ffce8a;font-weight:bold;text-align:center;}', // PC端样式
        styleWapCode:'.smalltit030 strong{display:inline-block; position:relative; padding-left:47px; background:#fff0dc; padding:0rem 0.33333rem 0rem 0.66667rem; margin-left:0.18667rem; border-radius:0rem 0.46667rem 0.46667rem 0rem; font-weight:normal;}.smalltit030 strong span{position:absolute; top:0px; background:#ffffff; color:#cb7600; font-style:normal; left:-0.2rem; width:0.8rem; height:0.8rem; z-index:5; border-radius:50%; line-height:0.74667rem; border:0.02667rem solid #ffce8a; font-weight:bold; text-align:center;}', // 移动端样式
        htmlString:'<p class="smalltit030"><strong><span>1</span>标题标题标题标题标题标题</strong></p>'
    };
}