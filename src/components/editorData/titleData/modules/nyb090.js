
export function getHtmlData (){
    return {
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'蓝色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        align:'center', // left(左对齐)|center(居中对齐)|right(右对齐)        
        style:'other', // icon(图标)|number(数字)|other(其他)
        fileName:'nyb090.js', // 该文件的文件名
        styleWebCode:'.smalltit090{text-align:center;}.smalltit090 strong{background:#217dc8;display:inline-block;border-radius:26px;-webkit-box-shadow:0 4px 0 #217dc8;box-shadow:0 4px 0 #217dc8;position:relative;margin-bottom:30px;font-size:18px;}.smalltit090 strong:after{content:"";width:36px;height:32px;background:url(../images/insidestyle/small028.png) no-repeat center;background-size:36px;display:block;bottom:-22px;position:absolute;left:50%;margin-left:-16px;}.smalltit090 strong span{background:#217dc8;display:block;color:#fff;padding:10px 20px;line-height:30px;border-radius:26px;box-shadow:0 2px 0 #fff;}', // PC端样式
        styleWapCode:'.smalltit090{text-align:center;}.smalltit090 strong{background:#217dc8;display:inline-block;border-radius:50px;-webkit-box-shadow:0 0.0666875rem 0 #217dc8;box-shadow:0 0.0666875rem 0 #217dc8;position:relative;margin-bottom:0.46667rem;}.smalltit090 strong span{background:#217dc8;display:block;color:#fff;padding:0.16rem 0.26667rem;line-height:0.4rem;border-radius:50px;-webkit-box-shadow:0 0.05333125rem 0 #fff;box-shadow:0 0.05333125rem 0 #fff;}.smalltit090 strong:after{content:"";width:0.53333rem;height:0.41333rem;background:url(../images/insidestyle/small028.png) no-repeat center;background-size:0.53333rem;display:block;bottom:-0.30667rem;position:absolute;left:50%;margin-left:-0.26667rem;}', // 移动端样式
        htmlString:'<p class="smalltit090"><strong><span>标题标题标题标题标题标题</span></strong></p>'
    };
}