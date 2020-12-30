export function getHtmlData (){
    return{
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        align:'center', // left(左对齐)|center(居中对齐)|right(右对齐)        
        style:'other', // icon(图标)|number(数字)|other(其他)
        fileName:'nyb037.js', // 该文件的文件名
        class:'smalltext037',// 用来给js使用添加页面内样式使用
        styleWebCode:'.smalltext037{max-width: 800px;padding: 1px 3.6%;margin: 60px auto;background: url(../images/insidestyle/smalltext037zs.png) center bottom no-repeat;position: relative;}.smalltext037:before,.smalltext037:after{content: "";background: rgb(2,143,199);display: block;position: absolute;}.smalltext037:before{width: 500px;height: 1px;left: -20px;top: 0;}.smalltext037:after{width: 1px;height: 500px;left: 0;top: -20px;}.smalltext037 img{width: 100%;} ', // PC端样式
        styleWapCode:'.smalltext037{padding: 1px 3.6%;margin: 0.8rem auto 0.48rem;background: url(../images/insidestyle/smalltext037zs.png) center bottom no-repeat;background-size: 6.64rem;position: relative;}.smalltext037:before,.smalltext037:after{content: "";background: rgb(2,143,199);display: block;position: absolute;}.smalltext037:before{width: 6.64rem;height: 1px;left: -0.28rem;top: 0;}.smalltext037:after{width: 1px;height: 6.64rem;left: 0;top: -0.28rem;}.smalltext037 img{width: 100%;}', // 移动端样式
        htmlString:'<div class="smalltext037"> <p>正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文</p> <p><img src="https://www.hxjq.cn/images/nopicture01.jpg" alt=""></p> </div>'
    };
}