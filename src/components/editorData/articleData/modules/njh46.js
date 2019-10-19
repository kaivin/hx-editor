
export function getHtmlData (){
    return {
        type:"wap", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'蓝色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        fileName:'njh46.js', // 该文件的文件名
        styleWebCode:'', // PC端样式
        styleWapCode:'.special02{background:#f2faff;padding:.4rem .32rem 1px;margin:1.3333125rem 0;position:relative}.special02 .tit{width:5.5191375rem;background:#fff;border:2px solid #4d96d8;color:#4d96d8;font-weight:700;line-height:2.4;text-align:center;display:block;position:absolute;left:50%;top:-.5333125rem;-webkit-transform:translateX(-50%);-moz-transform:translateX(-50%);-ms-transform:translateX(-50%);-o-transform:translateX(-50%);transform:translateX(-50%);margin:0;}.special02 .tit span{width:.5866875rem;background:#fff;font-size:.5333125rem;font-weight:400;line-height:1;position:absolute;left:.2rem;top:-.32rem}.special02 .tit span:before{content:"";width:.16rem;height:.16rem;background:#4d96d8;display:block;position:absolute;right:-.16rem;top:.2133125rem}.special02 P{margin: 0.4rem 0;}', // 移动端样式
        htmlString:'<div class="special02"><p class="tit"><span>1</span>标题标题标题标题</p><p>正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文</p><p>正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文</p></div>'
    };
}