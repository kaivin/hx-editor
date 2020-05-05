export function getHtmlData (){
    return {
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'蓝色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        fileName:'nyb070.js', // 该文件的文件名
        styleWebCode:'.smalltxt070{background: #dbe9f5;border: 1px dashed #adc6e7;display: block;color: #1b5cab;font-weight: 700;border-radius: 8px;padding: 22px 3% 15px;margin: 45px 0 35px!important;position:relative;} .smalltxt070:before{content:"";width:100%;height: 50px;background:url(../images/insidestyle/smalltxt070-zs.png) center no-repeat;background-size: 50px;display:block;position:absolute;left:0;top: -28px;} .smalltxt070:after{content:"";background:#fff;border: 1px solid #adc6e7;border-radius: 8px;position:absolute;left: 10px;right: -10px;top: 10px;bottom: -10px;z-index:-1;}', // PC端样式
        styleWapCode:'.smalltxt070{position:relative;z-index:1} .smalltxt070 span{background:#dbe9f5;border:.0266875rem dashed #adc6e7;display:block;padding:.2rem .4rem;color:#1b5cab;font-weight:700;border-radius:.1333125rem;position:relative} .smalltxt070 span:before{content:"";width:100%;height:.75rem;background:url(../images/insidestyle/smalltxt070-zs.png) center no-repeat;background-size:1.075rem;display:block;position:absolute;left:0;top:-.5333125rem} .smalltxt070 span:after{content:"";background:#fff;border:.0266875rem solid #adc6e7;border-radius:.1333125rem;position:absolute;left:.09375rem;right:-.1333125rem;top:.09375rem;bottom:-.1333125rem;z-index:-1} ', // 移动端样式
        htmlString:'<p class="smalltxt070"><span>正文正文</span></p>'
    };
}