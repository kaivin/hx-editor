export function getHtmlData (){
    return {
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'蓝色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        fileName:'nyb056.js', // 该文件的文件名
        styleWebCode:'.smalltxt056{clear:both;padding: 10px 20px;background:#daf2fc;position:relative;margin-top: 25!important;margin-bottom: 25!important;}.smalltxt056 p{position:relative;z-index:1;margin: 10px 0px!important;padding-left: 45px;}.smalltxt056 p i{font-size: 18px;color:#6b9ed7;font-style:normal;font-weight:bold;line-height: 30px;display:inline-block;z-index:2;width: 30px;height: 30px;background:#ffffff;border-radius:50%;text-align:center;position:absolute;left: 0px;top: 3px;}', // PC端样式
        styleWapCode:'.smalltxt056{clear:both;padding:0.2rem;background:url(../images/insidestyle/small046.jpg) no-repeat center bottom #daf2fc;background-size:100%;position:relative;margin:0.53333rem 0rem !important;}.smalltxt056 p{position:relative;z-index:1;padding:0rem 0.2rem 0rem 0.86667rem;margin:0.2rem 0rem;}.smalltxt056 p i{font-size:0.53333rem;color:#3662aa;font-style:normal;font-weight:bold;line-height:0.66667rem;display:inline-block;z-index:2;width:0.66667rem;height:0.66667rem;background:#ffffff;border-radius:50%;text-align:center;position:absolute;left:0rem;top:0.06667rem;}', // 移动端样式
        htmlString:'<div class="smalltxt056"><p><i>1</i>正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文</p></div>'
    };
}