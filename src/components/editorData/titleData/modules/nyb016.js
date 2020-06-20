
export function getHtmlData (){
    return{
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        align:'center', // left(左对齐)|center(居中对齐)|right(右对齐)        
        style:'other', // icon(图标)|number(数字)|other(其他)
        class:'smalltit016',// 用来给js使用添加页面内样式使用
        fileName:'nyb16.js', // 该文件的文件名
        styleWebCode:'.smalltit016{text-align:center;position:relative;z-index:3;margin-bottom: 25px!important;font-size: 20px!important;margin-top:30px!important;}.smalltit016 strong{border:1px solid rgb(0,86,133)!important;border-radius:7px;display:inline-block;margin:0px;padding:5px 15px;background:#fff; position:relative;box-shadow:3px 3px 0px rgb(1,102,155)!important;} @media (max-width:1440px){.smalltit016{margin-bottom: 20px!important;font-size:18px!important;}.smalltit016 strong{padding: 7px 15px;}} @media (max-width:1280px){.smalltit016 strong{padding:8px 15px;}}', // PC端样式
        styleWapCode:'.smalltit016{text-align:center;position:relative;z-index:3;}.smalltit016 strong{border:1px solid rgb(0,86,133)!important;border-radius:0.13333rem;display:inline-block;margin:0rem;padding:0rem 0.2rem;background:#fff;font-weight:normal;position:relative;box-shadow:0.06667rem 0.06667rem 0rem rgb(1,102,155)!important;}', // 移动端样式
        htmlString:'<p class="smalltit016"><strong>标题标题标题标题标题标题</strong></p>'
    };
}