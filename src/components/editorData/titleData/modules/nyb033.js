
export function getHtmlData (){
    return{
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        align:'center', // left(左对齐)|center(居中对齐)|right(右对齐)        
        style:'number', // icon(图标)|number(数字)|other(其他)
        class:'smalltit033',// 用来给js使用添加页面内样式使用
        fileName:'nyb33.js', // 该文件的文件名
        styleWebCode:'.smalltit033{clear:both;text-align:center;font-size: 20px!important;margin-top: 30px !important;margin-bottom: 25px !important;}.smalltit033 strong{display:inline-block;position:relative;border-top:1px solid rgb(1,102,155)!important;border-bottom:1px solid rgb(1,102,155)!important;padding: 5px 0px 5px 0px;}.smalltit033 strong span{position:absolute;left:50%;background:#fff;color:rgb(1,102,155)!important;font-style:normal;width:26px;z-index:5;line-height:15px;font-size:18px;top:-7px;text-align:center;margin-left:-13px;} @media (max-width:1600px){.smalltit033 strong{padding: 12px 0px 10px 0px;}}', // PC端样式
        styleWapCode:'.smalltit033{clear:both;text-align:center;}.smalltit033 strong{display:inline-block;position:relative;border-top:1px solid rgb(1,102,155)!important;border-bottom:1px solid rgb(1,102,155)!important;padding:0.10667rem 0rem 0rem 0rem;}.smalltit033 strong span{position:absolute;left:50%;background:#fff;color:rgb(1,102,155)!important;font-style:normal;width:0.4rem;z-index:5;line-height:0.2rem;font-size:0.32rem;top:-0.12rem;text-align:center;margin-left:-0.17333rem;}', // 移动端样式
        htmlString:'<p class="smalltit033"><strong><span>1</span>标题标题标题标题标题标题</strong></p>'
    };
}