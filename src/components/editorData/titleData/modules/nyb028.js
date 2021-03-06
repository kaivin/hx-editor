
export function getHtmlData (){
    return{
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        align:'center', // left(左对齐)|center(居中对齐)|right(右对齐)        
        style:'other', // icon(图标)|number(数字)|other(其他)
        class:'smalltit028',// 用来给js使用添加页面内样式使用
        fileName:'nyb28.js', // 该文件的文件名
        styleWebCode:'.smalltit028{text-align:center;font-size: 20px!important;margin-top: 30px!important;}.smalltit028 strong{display:inline-block;position:relative;padding: 6px 15px;background:rgb(0,86,133)!important;color:#fff!important;}.smalltit028 strong:after,.smalltit028 strong:before{content:"";position:absolute;border-style:solid;border-color:transparent rgb(2,143,199) transparent rgb(2,143,199);top:50%;transform:translateY(-50%);}.smalltit028 strong:after{border-width:10px 0px 10px 10px;right:-14px;}.smalltit028 strong:before{border-width:10px 10px 10px 0px;left:-14px;} @media (max-width:1440px){.smalltit028{font-size:18px!important;}.smalltit028 strong{padding: 9px 15px;}} @media (max-width:1280px){.smalltit028 strong{padding: 10px 15px;}}', // PC端样式
        styleWapCode:'.smalltit028{text-align:center;}.smalltit028 strong{display:inline-block;position:relative;padding:0px 15px;background:rgb(0,86,133)!important;color:#fff!important;font-weight:normal;}.smalltit028 strong:after,.smalltit028 strong:before{content:"";position:absolute;border-style:solid;border-color:transparent rgb(2,143,199) transparent rgb(2,143,199);top:50%;transform:translateY(-50%);}.smalltit028 strong:after{border-width:10px 0px 10px 10px;right:-14px;}.smalltit028 strong:before{border-width:10px 10px 10px 0px;left:-14px;}', // 移动端样式
        htmlString:'<p class="smalltit028"><strong>标题标题标题标题标题标题</strong></p>'
    };
}