
export function getHtmlData (){
    return {
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'红色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        align:'left', // left(左对齐)|center(居中对齐)|right(右对齐)        
        style:'number', // icon(图标)|number(数字)|other(其他)
        fileName:'nyb32.js', // 该文件的文件名
        styleWebCode:'.smalltit032{font-size: 20px!important;margin-top: 30px !important;margin-bottom: 25px !important;} .smalltit032 strong{display:inline-block;position:relative;padding-left:76px;box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);padding: 6px 20px 6px 48px;color:#dc2d07!important;border-radius: 5px;overflow: hidden;} .smalltit032 strong span{position:absolute;top:0px;bottom:0px;background:#b55553;color:#ffffff;font-style:normal;left:0px;width:40px;z-index:5;border-radius:0% 50% 50% 0%;line-height: 48px;font-size:24px;text-align:center;padding-right: 2px;} @media (max-width:1600px) {.smalltit032 strong{padding: 6px 20px 6px 48px;} .smalltit032 strong span{line-height: 44px;}} @media (max-width:1440px) {.smalltit032 strong{padding: 9px 20px 9px 48px;} .smalltit032 strong span{line-height: 44px;width: 36px;font-size: 20px;}} @media (max-width:1280px) {.smalltit032 strong{padding: 10px 20px 10px 48px;}}', // PC端样式
        styleWapCode:'.smalltit032 strong{display:inline-block;position:relative;padding-left:76px;box-shadow:3px 3px 2px rgba(0, 0, 0, 0.1);padding:0rem 0.26667rem 0rem 0.8rem;color:#dc2d07!important;font-weight:normal;}.smalltit032 strong span{position:absolute;top:0px;bottom:0px;background:#b55553;color:#ffffff;font-style:normal;left:0px;width:0.66667rem;z-index:5;border-radius:0% 50% 50% 0%;line-height:0.72rem;font-size:0.38667rem;text-align:center;padding-right:0.05333rem;font-weight:bold;}', // 移动端样式
        htmlString:'<p class="smalltit032"><strong><span>1</span>标题标题标题标题标题标题</strong></p>'
    };
}