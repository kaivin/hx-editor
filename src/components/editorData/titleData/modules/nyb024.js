
export function getHtmlData (){
    return{
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        align:'center', // left(左对齐)|center(居中对齐)|right(右对齐)        
        style:'other', // icon(图标)|number(数字)|other(其他)
        class:'smalltit024',// 用来给js使用添加页面内样式使用
        fileName:'nyb24.js', // 该文件的文件名
        styleWebCode:'.smalltit024{text-align:center;font-size: 20px!important;margin-top:30px!important;margin-bottom: 25px!important;}.smalltit024 strong{border-bottom:1px solid rgb(1,102,155)!important;color:rgb(2,143,199)!important;display:inline-block;padding: 5px 15px;border-top:1px solid rgb(1,102,155)!important;position:relative;}.smalltit024 strong:after,.smalltit024 strong:before{content:"";position:absolute;width:7px;height:7px;background:rgb(0,86,133)!important;}.smalltit024 strong:after{left:0px;top:-4px;}.smalltit024 strong:before{right:0px;bottom:-4px;} @media (max-width:1440px){.smalltit024{font-size:18px!important;margin-top: 20px!important;margin-bottom: 20px!important;}.smalltit024 strong{padding: 8px 15px;}} @media (max-width:1280px){.smalltit024 strong{padding: 9px 15px;}}', // PC端样式
        styleWapCode:'.smalltit024{text-align:center;}.smalltit024 strong{border-bottom:1px solid rgb(1,102,155)!important;color:rgb(2,143,199)!important;display:inline-block;padding:0rem 0.2rem;border-top:1px solid rgb(1,102,155)!important;position:relative;font-weight:normal;}.smalltit024 strong:after,.smalltit024 strong:before{content:"";position:absolute;width:0.12rem;height:0.12rem;background:rgb(0,86,133)!important;}.smalltit024 strong:after{left:0px;top:-0.06667rem;}.smalltit024 strong:before{right:0px;bottom:-0.06667rem;}', // 移动端样式
        htmlString:'<p class="smalltit024"><strong>标题标题标题标题标题标题</strong></p>'
    };
}