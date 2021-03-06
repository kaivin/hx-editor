
export function getHtmlData (){
    return{
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        align:'center', // left(左对齐)|center(居中对齐)|right(右对齐)        
        style:'other', // icon(图标)|number(数字)|other(其他)
        class:'smalltit021',// 用来给js使用添加页面内样式使用
        fileName:'nyb21.js', // 该文件的文件名
        styleWebCode:'.smalltit021{text-align:center;font-size: 20px!important;margin-top:30px!important;}.smalltit021 strong{display:inline-block;color:#c21a20!important;position:relative;padding: 6px 0px;}.smalltit021 strong:after,.smalltit021 strong:before{content:"";position:absolute;width:14px;height:10px;transform:translateY(-50%);top:50%;}.smalltit021 strong:after{background:url(../images/insidestyle/small009.png) no-repeat left top;right:-30px;}.smalltit021 strong:before{background:url(../images/insidestyle/small010.png) no-repeat left top;left:-30px;} @media (max-width:1440px){.smalltit021{font-size:18px!important;}.smalltit021 strong{padding: 9px 0px;}} @media (max-width:1280px){.smalltit021 strong{padding: 10px 0px;}}', // PC端样式
        styleWapCode:'.smalltit021{text-align:center;}.smalltit021 strong{border-bottom:1px solid #c21a20;display:inline-block;color:#c21a20!important;position:relative;padding:0.04rem 0px;font-weight:normal;}.smalltit021 strong:after,.smalltit021 strong:before{content:"";position:absolute;width:0.18667rem;height:0.13333rem;transform:translateY(-50%);top:50%;}.smalltit021 strong:after{background:url(../images/insidestyle/small009.png) no-repeat left top;right:-0.4rem;}.smalltit021 strong:before{background:url(../images/insidestyle/small010.png) no-repeat left top;left:-0.4rem;}', // 移动端样式
        htmlString:'<p class="smalltit021"><strong>标题标题标题标题标题标题</strong></p>'
    };
}