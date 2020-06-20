
export function getHtmlData (){
    return{
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        align:'center', // left(左对齐)|center(居中对齐)|right(右对齐)        
        style:'other', // icon(图标)|number(数字)|other(其他)
        class:'smalltit020',// 用来给js使用添加页面内样式使用
        fileName:'nyb20.js', // 该文件的文件名
        styleWebCode:'.smalltit020{text-align:center; margin-bottom:25px!important;font-size: 20px!important;margin-top:30px!important;}.smalltit020 strong{position:relative;display:inline-block;border:1px solid rgb(0,86,133)!important;padding: 5px 15px;box-shadow:0px 3px 0px rgb(1,102,155)!important;} @media (max-width:1440px){.smalltit020{margin-bottom:20px!important;font-size:18px!important;}.smalltit020 strong{padding: 8px 15px;}} @media (max-width:1280px){.smalltit020 strong{padding:9px 15px;}}', // PC端样式
        styleWapCode:'.smalltit020{text-align:center;}.smalltit020 strong{position:relative;display:inline-block;border:1px solid rgb(0,86,133)!important;padding:0rem 0.2rem;box-shadow:0px 0.06667rem 0px rgb(1,102,155)!important;color:rgb(0,86,133)!important;font-weight:normal;}', // 移动端样式
        htmlString:'<p class="smalltit020"><strong>标题标题标题标题标题标题</strong></p>'
    };
}