
export function getHtmlData (){
    return {
        type:"wap", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'蓝色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        fileName:'njh26.js', // 该文件的文件名
        styleWebCode:'', // PC端样式
        styleWapCode:'.special14{border:.04rem solid #e0f2ff;padding:0 4%;margin:.4rem 0 0 0;position:relative}.special14:before{content:"";width:100%;height:.16rem;background:url(../images/special14-zs.png) no-repeat;background-size:100%;display:block;position:absolute;left:0;top:-.2rem}.special14:after{content:"";height:1px;background:#e0f2ff;position:absolute;left:.09375rem;right:.09375rem;top:.16rem}', // 移动端样式
        htmlString:'<div class="special14"><p>正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文</p></div>'
    };
}