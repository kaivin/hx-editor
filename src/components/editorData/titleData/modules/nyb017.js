
export function getHtmlData (){
    return{
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        align:'center', // left(左对齐)|center(居中对齐)|right(右对齐)        
        style:'other', // icon(图标)|number(数字)|other(其他)
        class:'smalltit017',// 用来给js使用添加页面内样式使用
        fileName:'nyb17.js', // 该文件的文件名
        styleWebCode:'.smalltit017{text-align:center;position:relative;z-index:3;margin-top:30px!important;margin-bottom:25px!important;font-size: 20px!important;}.smalltit017 strong{border:1px solid rgb(0,86,133)!important;display:inline-block;padding:5px 15px;background:#fff; position:relative;}.smalltit017 strong:after,.smalltit017 strong:before{content:"";position:absolute;width:10px;height:10px;}.smalltit017 strong:after{border-top:1px solid rgb(0,86,133)!important;border-left:1px solid rgb(0,86,133)!important;left:-5px;top:-5px;}.smalltit017 strong:before{border-bottom:1px solid rgb(0,86,133)!important;border-right:1px solid rgb(0,86,133)!important;right:-5px;bottom:-5px;} @media (max-width:1440px){.smalltit017{margin-top:22px!important;margin-bottom:20px!important;font-size:18px!important;}.smalltit017 strong{padding:7px 15px;}} @media (max-width:1280px){.smalltit017 strong{padding:8px 15px;}}', // PC端样式
        styleWapCode:'.smalltit017{text-align:center;position:relative;z-index:3;}.smalltit017 strong{border:1px solid rgb(0,86,133)!important;display:inline-block;padding:0rem 0.2rem;background:#fff;font-weight:normal;position:relative;}.smalltit017 strong:after,.smalltit017 strong:before{content:"";position:absolute;width:0.26667rem;height:0.26667rem;}.smalltit017 strong:after{border-top:1px solid rgb(0,86,133)!important;border-left:1px solid rgb(0,86,133)!important;left:-0.06667rem;top:-0.06667rem;}.smalltit017 strong:before{border-bottom:1px solid rgb(0,86,133)!important;border-right:1px solid rgb(0,86,133)!important;right:-0.06667rem;bottom:-0.06667rem;}', // 移动端样式
        htmlString:'<p class="smalltit017"><strong>标题标题标题标题标题标题</strong></p>'
    };
}