
export function getHtmlData (){
    return {
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'红色,粉色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        fileName:'nyb06.js', // 该文件的文件名
        styleWebCode:'.smalltext006 {background:#fff0f1;padding:15px 15px 5px 15px !important;box-sizing:border-box;margin-bottom:20px!important;}.smalltext006 p.smalltext006tit {font-weight:normal;position:relative;text-align:center;padding:0px;height:40px;}.smalltext006 p.smalltext006tit span {background:#b72630;background:linear-gradient(to bottom, #b72630, #741134);color:#fff;font-size:22px;padding:8px 9px 0px;border-radius:50%;z-index:2;position:relative;display:inline-block;width:40px;height:40px;line-height:1;margin:0px 5px;vertical-align:top;font-weight:bold;}.smalltext006 strong {font-weight:normal;display:block;text-align:center;color:#b02330;position:relative;margin-top:15px;line-height:1;font-size:14px;}', // PC端样式
        styleWapCode:'.smalltext006{background:#fff0f1; padding:0.26667rem 0.26667rem 0rem 0.26667rem !important; box-sizing:border-box; margin-bottom:0.26667rem;}.smalltext006 p.smalltext006tit{font-weight:normal; position:relative; text-align:center; padding:0px; height:0.66667rem;}.smalltext006 p.smalltext006tit span{background:linear-gradient(to bottom, #b72630, #741134); color:#fff; font-size:0.42667rem; padding:0.08rem 0.12rem 0rem 0.12rem; border-radius:50%; z-index:2; position:relative; display:inline-block; width:0.66667rem; height:0.66667rem; line-height:0.42667rem; margin:0rem 0.06667rem; vertical-align:top;}.smalltext006 strong{font-weight:normal; display:block; text-align:center; font-size:0.32rem; color:#b02330; position:relative; margin-top:0.13333rem; line-height:0.53333rem;}', // 移动端样式
        htmlString:'<div class="smalltext006"><p class="smalltext006tit"><span>应</span><span>用</span><span>原</span><span>理</span></p><strong>配件设计独特,使用寿命长</strong><p>正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文</p></div>'
    };
}