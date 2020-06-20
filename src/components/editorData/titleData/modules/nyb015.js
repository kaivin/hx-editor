
export function getHtmlData (){
    return{
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'蓝色,橙色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        align:'center', // left(左对齐)|center(居中对齐)|right(右对齐)        
        style:'other', // icon(图标)|number(数字)|other(其他)
        class:'smalltit015',// 用来给js使用添加页面内样式使用
        fileName:'nyb15.js', // 该文件的文件名
        styleWebCode:'.smalltit015{text-align:center;position:relative;z-index:3;margin-top:30px!important;margin-bottom: 25px!important;font-size: 20px!important;}.smalltit015 strong{border:1px solid rgb(0,86,133)!important;display:inline-block;margin:0px;padding: 5px 15px;background:#fff;position:relative;}.smalltit015 strong:after{content:"";z-index:-1;border:1px dashed rgb(1,102,155)!important;position:absolute;left:5px;bottom: -5px;top:5px;right:-5px;} @media (max-width:1440px){.smalltit015{margin-bottom: 20px!important;font-size:18px!important;}.smalltit015 strong{padding: 7px 15px;}} @media (max-width:1280px){.smalltit015 strong{padding:8px 15px;}}', // PC端样式
        styleWapCode:'.smalltit015{text-align:center;position:relative;z-index:10;}.smalltit015 strong{border:1px solid rgb(0,86,133)!important;display:inline-block;margin:0rem;padding:0rem 0.2rem;background:#fff;font-weight:normal;position:relative;}.smalltit015 strong:after{content:"";border:1px dashed rgb(1,102,155)!important;position:absolute;left:0.06667rem;bottom:-0.06667rem;top:0.06667rem;right:-0.06667rem;z-index:-1;}', // 移动端样式
        htmlString:'<p class="smalltit015"><strong>标题标题标题标题标题标题</strong></p>'
    };
}