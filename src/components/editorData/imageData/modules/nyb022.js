export function getHtmlData (){
    return {
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        align:'left', // left(左对齐)|center(居中对齐)|right(右对齐)        
        style:'icon', // icon(图标)|number(数字)|other(其他)
        fileName:'nyb022.js', // 该文件的文件名
        class:'smalltext022',// 用来给js使用添加页面内样式使用
        styleWebCode:'.smalltext022{background:url(../images/insidestyle/small045.png) bottom no-repeat;padding:30px 30px 30px 30px;-webkit-box-shadow:0 0 35px rgb(199,237,251) inset;box-shadow:inset 0 0 35px rgb(199,237,251);max-width:800px;margin-left:auto;margin-right:auto;}.smalltext022 .smalltext022tit{text-align:center;position:relative;margin:0px;z-index:1;}.smalltext022 .smalltext022tit:after,.smalltext022 .smalltext022tit:before{content:"";height:1px;background:rgb(1,102,155)!important;position:absolute;left:0;right:0;z-index:-1;}.smalltext022 .smalltext022tit:after{bottom:20px;}.smalltext022 .smalltext022tit:before{top:20px;}.smalltext022 .smalltext022tit strong{background:rgb(1,102,155)!important;display:inline-block;padding:10px 20px;font-size:18px;line-height:30px;color:#fff!important;}.smalltext022 p{margin-top:15px;margin-bottom:0px;}', // PC端样式
        styleWapCode:'.smalltext022{background:url(../images/insidestyle/small045.png) bottom no-repeat;padding:0.4rem;-webkit-box-shadow:0 0 0.46667rem rgb(199,237,251) inset;box-shadow:inset 0 0 0.46667rem rgb(199,237,251);}.smalltext022 .smalltext022tit{text-align:center;position:relative;margin:0rem;z-index:1;}.smalltext022 .smalltext022tit:after,.smalltext022 .smalltext022tit:before{content:"";height:1px;background:rgb(1,102,155)!important;position:absolute;left:0;right:0;z-index:-1;}.smalltext022 .smalltext022tit:after{bottom:0.33333rem;}.smalltext022 .smalltext022tit:before{top:0.33333rem;}.smalltext022 .smalltext022tit strong{background:rgb(1,102,155)!important;display:inline-block;padding:0.13333rem 0.26667rem;font-size:0.42667rem;line-height:0.53333rem;color:#fff!important;}.smalltext022 p{margin-top:0.2rem;margin-bottom:0rem;}', // 移动端样式
        htmlString:'<div class="smalltext022"><p class="smalltext022tit"><strong>标题标题标题</strong></p><p>正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文</p></div>'
    };
}