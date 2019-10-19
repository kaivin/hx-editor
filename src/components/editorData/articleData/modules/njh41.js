
export function getHtmlData (){
    return {
        type:"wap", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'蓝色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        fileName:'njh41.js', // 该文件的文件名
        styleWebCode:'', // PC端样式
        styleWapCode:'.special65{background:url(../images/special65-zs.png) center bottom no-repeat;padding:1px .4rem;margin:.4rem 0;box-shadow:0 0 .46875rem rgba(111,164,218,.7) inset}.special65 .tit{text-align:center;position:relative;z-index: 1;}.special65 .tit:after,.special65 .tit:before{content:"";height:1px;background:#82b3e7;position:absolute;left:0;right:0;z-index:-1}.special65 .tit:before{top:.346875rem}.special65 .tit:after{bottom:.346875rem}.special65 .tit strong{background:#82b3e7;display:inline-block;padding:0 .4rem;color:#fff}.special65 p{margin: 0.4rem 0;}', // 移动端样式
        htmlString:'<div class="special65"><p class="tit"><strong>标题标题标题</strong></p><p>正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文</p></div>'
    };
}