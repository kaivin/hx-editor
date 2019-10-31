
export function getHtmlData (){
    return {
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'蓝色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        fileName:'njh01.js', // 该文件的文件名
        styleWebCode:'.websitetext1{border: 1px solid #bcd0f5;padding: 5px;border-radius: 30px 0 30px 0;transition: all 0.5s;}.websitetext1 span{color: #4068ac;font-weight: bold;border: 1px dashed #bcd0f5;display: block;border-radius: 30px 0 30px 0;padding: 10px 20px;}', // PC端样式
        styleWapCode:'.websitetext1 {border: 1px solid #bcd0f5;padding: 0.16rem;border-radius: 0.799875rem 0 0.799875rem 0;}.websitetext1 span {color: #4068ac;border: 1px dashed #bcd0f5;display: block;border-radius: 0.799875rem 0 0.799875rem 0;padding: 0.16rem 0.32rem;}', // 移动端样式
        htmlString:'<p class="websitetext1"><span>正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文</span></p>'
    };
}