
export function getHtmlData (){
    return {
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'蓝色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        align:'center', // left(左对齐)|center(居中对齐)|right(右对齐)        
        style:'other', // icon(图标)|number(数字)|other(其他)
        fileName:'nyb007.js', // 该文件的文件名
        class:'smallbtn007',// 用来给js使用添加页面内样式使用
        styleWebCode:'.smallbtn007{width: fit-content;background: url(../images/insidestyle/smallbtn007-bg.png) center no-repeat;border-radius: 50px;margin: 24px auto!important;}.smallbtn007 a{font-size: 22px;line-height: 60px;color: #1f76b1!important;text-align: center;padding: 0 24px;display: block;}.smallbtn007 a::after{content: "";width: 25px;height: 25px;background: url(../images/insidestyle/smallbtn007-zs.png) center no-repeat;background-size: 100%;display: inline-block;vertical-align: text-bottom;margin-left: 10px;} ', // PC端样式
        styleWapCode:'.smallbtn007{width: fit-content;background: url(../images/insidestyle/smallbtn007-bg.png) center no-repeat;border-radius: 0.53333rem;margin: 0.4rem auto!important;}.smallbtn007 a{ font-size: 0.4rem; line-height: 1.04rem; color: #1f76b1; text-align: center; padding: 0 0.32rem; display: block; }.smallbtn007 a::after{ content: ""; width: 0.4rem; height: 0.4rem; background: url(../images/insidestyle/smallbtn007-zs.png) center no-repeat; background-size: 100%; display: inline-block; vertical-align: middle; margin-left: 0.2rem; } ', // 移动端样式
        htmlString:'<p class="smallbtn007"><a href="#" rel="nofollow">点此为您免费设计一套人造沙生产方案</a></p>'
    };
}