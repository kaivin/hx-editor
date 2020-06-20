
export function getHtmlData (){
    return{
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        align:'center', // left(左对齐)|center(居中对齐)|right(右对齐)        
        style:'other', // icon(图标)|number(数字)|other(其他)
        class:'smalltit023',// 用来给js使用添加页面内样式使用
        fileName:'nyb23.js', // 该文件的文件名
        styleWebCode:'.smalltit023{text-align:center;font-size: 20px!important;margin-top:30px!important;}.smalltit023 strong{display:inline-block;position:relative;background:rgb(1,102,155)!important;border-radius:3px;color:#fff;padding: 6px 15px;} @media (max-width:1440px){.smalltit023{font-size:18px!important;}.smalltit023 strong{padding: 9px 15px;}} @media (max-width:1280px){.smalltit023 strong{padding: 10px 15px;}}', // PC端样式
        styleWapCode:'.smalltit023{text-align:center;}.smalltit023 strong{display:inline-block;position:relative;background:rgb(1,102,155)!important;border-radius:0.04rem;color:#fff;font-weight:normal;padding:0rem 0.2rem;position:relative;}.smalltit023 strong:after{content:"";position:absolute;left:0.06667rem;bottom:0.06667rem;right:0.06667rem;height:1px;background:#fff;}', // 移动端样式
        htmlString:'<p class="smalltit023"><strong>标题标题标题标题标题标题</strong></p>'
    };
}