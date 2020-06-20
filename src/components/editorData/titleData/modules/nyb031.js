
export function getHtmlData (){
    return{
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        align:'left', // left(左对齐)|center(居中对齐)|right(右对齐)        
        style:'number', // icon(图标)|number(数字)|other(其他)
        class:'smalltit031',// 用来给js使用添加页面内样式使用
        fileName:'nyb31.js', // 该文件的文件名
        styleWebCode:'.smalltit031{font-size: 20px!important;margin-top:30px !important;margin-bottom:25px !important;}.smalltit031 strong{display:inline-block;position:relative;padding-left:47px;padding: 5px 15px 5px 60px;border:1px solid #000;border-radius:45px;font-weight:bold;}.smalltit031 strong span{position:absolute;top:0px;background:rgb(1,102,155)!important;color:#ffffff;font-style:normal;left:0px;width: 46px;height: 46px;z-index:5;border-radius:50%;line-height: 46px;text-align:center;font-size:22px;} @media (max-width:1600px){.smalltit031 strong{padding: 5px 15px 5px 55px;}.smalltit031 strong span{width: 42px;height: 42px;line-height: 42px;}} @media (max-width:1440px){.smalltit031 strong{padding: 8px 15px 8px 55px;}.smalltit031 strong span{width: 44px;height: 44px;line-height: 44px;}} @media (max-width:1280px){.smalltit031 strong{padding: 9px 15px 9px 50px;}.smalltit031 strong span{width: 42px;height: 42px;line-height: 42px;}}', // PC端样式
        styleWapCode:'.smalltit031 strong span{position:absolute;top:0px;background:rgb(1,102,155)!important;color:#ffffff;font-style:normal;left:0px;width:0.8rem;height:0.8rem;z-index:5;border-radius:50%;line-height:0.73333rem;font-weight:bold;text-align:center;}', // 移动端样式
        htmlString:'<p class="smalltit031"><strong><span>1</span>标题标题标题标题标题标题</strong></p>'
    };
}