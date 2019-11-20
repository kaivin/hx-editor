
export function getHtmlData (){
    return {
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'黄色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        align:'left', // left(左对齐)|center(居中对齐)|right(右对齐)        
        style:'number', // icon(图标)|number(数字)|other(其他)
        fileName:'nyb30.js', // 该文件的文件名
        styleWebCode:'.smalltit030 strong{display:inline-block;position:relative;padding-left:47px;background:#fff0dc;padding:8px 15px 8px 35px;margin-left:14px;border-radius:0px 20px 20px 0px;}.smalltit030 strong span{position:absolute;top:0px;background:#ffffff;color:#cb7600;font-style:normal;left:-14px;width:40px;height:40px;z-index:5;border-radius:50%;line-height:36px;border:2px solid #ffce8a;font-weight:bold;font-size:24px;text-align:center;}', // PC端样式
        styleWapCode:'.smalltit030 strong{display:inline-block;position:relative;padding-left:0.66667rem;background:#fff0dc;padding:0rem 0.33333rem 0rem 0.66667rem;margin-left:0.33333rem;border-radius:0rem 0.33333rem 0.33333rem 0rem;font-weight:normal;}.smalltit030 strong span{position:absolute;top:0px;background:#ffffff;color:#cb7600;font-style:normal;left:-0.33333rem;width:0.8rem;height:0.8rem;z-index:5;border-radius:50%;line-height:0.73333rem;border:0.02667rem solid #ffce8a;font-weight:bold;font-size:0.38667rem;text-align:center;}.smalltit031 strong{display:inline-block;position:relative;padding-left:47px;padding:0rem 0.33333rem 0rem 0.88rem;border:1px solid #000;border-radius:0.66667rem;font-weight:normal;}', // 移动端样式
        htmlString:'<p class="smalltit030"><strong><span>1</span>标题标题标题标题标题标题</strong></p>'
    };
}