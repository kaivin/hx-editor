export function getHtmlData (){
    return {
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'蓝色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        fileName:'njh1.js', // 该文件的文件名
        styleWebCode:'.websitetext2{background: #fff;padding: 0 18px 12px;border-radius: 15px;box-shadow: 0 2px 2px #bfcad6;position:relative;}.websitetext2:before{content: "";width: 100%;height: 15px;background: #5a8ccf;display:block;border-radius: 15px 15px 0 0;position:absolute;left: 0;top: 0px;}.websitetext2 span{width:fit-content;background: #5a8ccf;display: block;text-align: center;color: #fff;line-height: 3;text-indent: 0;margin: 0 auto 12px auto;padding: 0 20px;border-radius: 0 0 15px 15px;position: relative;}', // PC端样式
        styleWapCode:'.websitetext2{background:#fff;padding:0 .32rem .13333125rem;border-radius:.4rem;box-shadow:0 .05333125rem .05333125rem #d9e1ea;position:relative}.websitetext2:before{content:"";width:100%;height:.6rem;background:#5a8ccf;display:block;border-radius: 0.4rem 0.4rem 0 0;position:absolute;left:0;top:-.2rem;z-index:-1}.websitetext2 span{width:fit-content;background:#5a8ccf;display:block;text-align:center;color:#fff;margin:0 auto .13333125rem auto;padding:0.1rerm 0.4rem;border-radius:0 0 .3rem .3rem}', // 移动端样式
        htmlString:'<p class="websitetext2"><span>标题标题标题标题标题</span>正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文</p>'
    };
}