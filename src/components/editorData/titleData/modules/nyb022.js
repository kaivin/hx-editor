
export function getHtmlData (){
    return {
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'红色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        align:'center', // left(左对齐)|center(居中对齐)|right(右对齐)        
        style:'other', // icon(图标)|number(数字)|other(其他)
        fileName:'nyb22.js', // 该文件的文件名
        styleWebCode:'.smalltit022{text-align:center;margin-top:25px!important;margin-bottom:25px!important;font-size: 20px!important;margin-top:30px!important;} .smalltit022 strong{display:inline-block;border:1px solid #cd3522;color:#cd3522!important; padding:5px 15px 5px 15px;position:relative;} .smalltit022 strong:after, .smalltit022 strong:before{content:"";position:absolute;left:50%;transform:translateX(-50%);} .smalltit022 strong:after{background:#cd3522;width:140px;height:5px;bottom:-3px;border-radius:5px;} .smalltit022 strong:before{background:url(../images/insidestyle/smalltit022icon01.png) no-repeat center top;width:110px;height:10px;top:-5px;background-size:100%;} @media (max-width:1440px) {.smalltit022{text-align:center;margin-top:20px!important;margin-bottom:20px!important;font-size:18px!important;} .smalltit022 strong{padding:8px 15px 8px 15px;}} @media (max-width:1280px) {.smalltit022 strong{padding: 10px 15px 8px 15px;}}', // PC端样式
        styleWapCode:'.smalltit022{text-align:center;}.smalltit022 strong{display:inline-block;border:1px solid #cd3522;color:!important;padding:0rem 0.2rem;position:relative;}.smalltit022 strong:after, .smalltit022 strong:before{content:"";position:absolute;left:50%;transform:translateX(-50%);}.smalltit022 strong:after{background:#cd3522;width:1.86667rem;height:0.06667rem;bottom:-0.04rem;border-radius:0.06667rem;}.smalltit022 strong:before{background:url(../images/insidestyle/smalltit022icon01.png) no-repeat center top;width:1.46667rem;height:0.13333rem;top:-0.06667rem;background-size:100%;}', // 移动端样式
        htmlString:'<p class="smalltit022"><strong>标题标题标题标题标题标题</strong></p>'
    };
}