
export function getHtmlData (){
    return {
        type:"wap", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'蓝色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        fileName:'njh40.js', // 该文件的文件名
        styleWebCode:'', // PC端样式
        styleWapCode:'.special21{border-left:.0266875rem solid #97c7f7;border-bottom:.0266875rem solid #97c7f7;position:relative;margin:.4rem 0;}.special21:before{content:"";width:.5333125rem;height:.16rem;background:#97c7f7;display:block;position:absolute;right:0;bottom:-.16rem}.special21 p{padding:0 4%;margin: 0.2rem 0;}.special21 .p1{width:fit-content;background:#97c7f7;display:block;color:#fff;margin:0;padding:0 3%;position:relative}.special21 .p1:before{content:"";width:.1333125rem;background:#97c7f7;display:block;position:absolute;left:-.2rem;top:0;bottom:0}', // 移动端样式
        htmlString:'<div class="special21"><p class="p1"><strong>标题标题标题</strong></p><p class="p2">正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文</p></div>'
    };
}