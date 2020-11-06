

export function getHtmlData (){
    return {
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        align:'left', // left(左对齐)|center(居中对齐)|right(右对齐)        
        style:'other', // icon(图标)|number(数字)|other(其他)
        class:'smalltit101',// 用来给js使用添加页面内样式使用
        fileName:'nyb101.js', // 该文件的文件名
        styleWebCode:'.smalltit101 strong{color: #272c38;font-size: 20px;position: relative;padding-bottom: 10px;padding-right: 6px;}.smalltit101 strong:before{content: "";display: block;width: 10px;height: 10px;background-color: rgb(1,102,155);border-radius: 50%;position: absolute;right: 0;bottom: 0;}.smalltit101 strong:after{content: "";display: block;width: 90%;height: 3px;position: absolute;right: 0;bottom: 3px;background-image: linear-gradient(90deg,rgb(255,255,255), rgb(1,102,155));}', // PC端样式
        styleWapCode:'.smalltit101 strong{color:#272c38;font-size:.45333rem;position:relative;padding-bottom:.21333rem;padding-right:.13333rem}.smalltit101 strong:before{content:"";display:block;width:.18667rem;height:.18667rem;background-color:#01669b;border-radius:50%;position:absolute;right:0;bottom:0}.smalltit101 strong:after{content:"";display:block;width:90%;height:.08rem;position:absolute;right:0;bottom:.05333rem;background-image:linear-gradient(90deg, #fff, #01669b)}', // 移动端样式
        htmlString:'<p class="smalltit101"><strong>标题标题标题标题</strong></p>'
    };
}