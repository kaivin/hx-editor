
export function getHtmlData (){
    return {
        type:"wap", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'蓝色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        fileName:'njh19.js', // 该文件的文件名
        styleWebCode:'', // PC端样式
        styleWapCode:'.special102 li{background:#7bb1ec;border-radius:.2666875rem;padding:.1333125rem;margin:.8rem 0;position:relative}.special102 li .tit{background:#e6f2ff;border-radius:20px;position:absolute;left:.32rem;right:.32rem;top:-0.32rem;text-align:center;color:#185db1;margin: 0;}.special102 li .tit:after{content:"";width:82%;border-bottom:1px dashed #4070ac;display:block;margin:.0666875rem auto 0}.special102 li p:last-child{background:#e6f2ff;border-radius:.2666875rem;margin:0;color:#185db1;padding:.64rem .32rem .32rem;box-shadow:0 3px 5px rgba(5,70,144,.58)}', // 移动端样式
        htmlString:'<ul class="special102"><li><p class="tit"><strong>1、标题</strong></p><p>正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文</p></li></ul>'
    };
}