
export function getHtmlData (){
    return {
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'蓝色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        fileName:'njh16.js', // 该文件的文件名
        styleWebCode:'.special85{position:relative;}.special85:before{content:"";background:#a9d9f6;border-radius:5px;position:absolute;left:0;top:0;right:0;bottom:0;transform:rotate(3deg);-ms-transform:rotate(3deg);-moz-transform:rotate(3deg);-webkit-transform:rotate(3deg);-o-transform:rotate(3deg)}.special85:after{content:"";width:25px;height:25px;background:url(../assets/images/njhimg/special85-zs.png) center no-repeat;background-size:100%;display:block;position:absolute;left:15px;top:15px}.special85 p{background:#eaf7ff;border-radius:5px;padding:35px 42px;position:relative}', // PC端样式
        styleWapCode:'.special85{position:relative}.special85:before{content:"";background:#a9d9f6;border-radius:0.08rem;position:absolute;left:0;top:0;right:0;bottom:0;transform:rotate(3deg);-ms-transform:rotate(3deg);-moz-transform:rotate(3deg);-webkit-transform:rotate(3deg);-o-transform:rotate(3deg)}.special85:after{content:"";width:.3333125rem;height:.3333125rem;background:url(../images/special85-zs.png) center no-repeat;background-size:100%;display:block;position:absolute;left:.32rem;top:.2rem}.special85 p{background:#eaf7ff;border-radius:0.08rem;padding:0.4rem 0.6666875rem;position:relative;}', // 移动端样式
        htmlString:'<div class="special85"><p>正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文</p></div>'
    };
}