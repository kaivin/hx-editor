
export function getHtmlData (){
    return{
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        align:'center', // left(左对齐)|center(居中对齐)|right(右对齐)        
        style:'other', // icon(图标)|number(数字)|other(其他)
        class:'smalltit041',// 用来给js使用添加页面内样式使用
        fileName:'nyb41.js', // 该文件的文件名
        styleWebCode:'.smalltit041{display: inline-block;position: relative;z-index: 2;font-weight: bold;font-size: 22px!important;line-height: 32px!important;}.smalltit041:after{content:"";position: absolute;left: 0px;right: 0px;height: 10px;background:rgba(1,102,155,1);background: -webkit-linear-gradient(left,rgba(1,102,155,1), rgba(1,102,155,0));background: -o-linear-gradient(left,rgba(1,102,155,1), rgba(1,102,155,0));background: linear-gradient(to right,rgba(1,102,155,1), rgba(1,102,155,0));border-radius: 10px;z-index: -1;bottom: 0px;}@media (max-width: 1366px){.smalltit041{font-size:16px!important;}}@media (max-width: 1440px){.smalltit041{font-size:18px!important;}}@media (max-width: 1800px){.smalltit041{font-size:20px!important;}}', // PC端样式
        styleWapCode:'.smalltit041{background: none !important;display: inline-block;position: relative;z-index: 2;font-weight: bold;padding-bottom: 0.07rem;}.smalltit041:after{content:"";position: absolute;left: 0px;right: 0rem;height: 0.3733rem;background:rgba(1,102,155,1);background: -webkit-linear-gradient(left,rgba(1,102,155,1), rgba(1,102,155,0));background: -o-linear-gradient(left,rgba(1,102,155,1), rgba(1,102,155,0));background: linear-gradient(to right,rgba(1,102,155,1), rgba(1,102,155,0));border-radius: 0.18665rem;z-index: -1;bottom: 0rem;}', // 移动端样式
        htmlString:'<p class="smalltit041">石粉洗砂机型号介绍</p>'
    };
}