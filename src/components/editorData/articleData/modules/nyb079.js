export function getHtmlData (){
    return {
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        align:'left', // left(左对齐)|center(居中对齐)|right(右对齐)        
        style:'icon', // icon(图标)|number(数字)|other(其他)
        fileName:'nyb079.js', // 该文件的文件名
        class:'smalltxt079',// 用来给js使用添加页面内样式使用
        styleWebCode:'.smalltxt079{clear:both;display:block;background:url(../images/insidestyle/smalltxt075_icon01.gif) repeat left top;border: 1px solid rgba(2,143,199);position: relative;background: #fff;border-radius: 15px;padding: 25px 20px 26px 20px;}.smalltxt079:after{content: "";position: absolute;left: -1px;right: -1px;bottom: 15px;border: 1px solid rgba(2,143,199);border-radius: 15px;display: block;top: -1px;}.smalltxt079:before{content: "";position: absolute;right: 40px;bottom: -1px;border: 1px solid rgba(2,143,199);border-radius: 50%;display: block;background: rgba(199,237,251);width: 18px;height: 18px;}.smalltxt079 strong{background: rgba(199,237,251);border: 1px solid rgba(2,143,199);padding: 8px 20px;color: rgba(0,86,133);display: inline-block;border-radius: 27px;font-size: 18px;}', // PC端样式
        styleWapCode:'.smalltxt079{clear:both;display:block;background:url(../images/insidestyle/smalltxt075_icon01.gif) repeat left top;border:1px solid rgba(2,143,199);position:relative;background:#fff;border-radius:0.2667rem;padding: 0.4rem 0.2667rem 0.3333rem 0.2667rem;}.smalltxt079:after{content: "";position: absolute;left: -1px;right: -1px;bottom: 0.2rem;border: 1px solid rgba(2,143,199);border-radius: 0.2667rem;display: block;top: -1px;}.smalltxt079:before{content: "";position: absolute;right: 0.5333rem;bottom: 0rem;border: 1px solid rgba(2,143,199);border-radius: 0.2667rem;display: block;background: rgba(199,237,251);width: 0.2267rem;height: 0.2267rem;}.smalltxt079 strong{background: rgba(199,237,251);border: 1px solid rgba(2,143,199);padding: 0.1333rem 0.2667rem;color: rgba(0,86,133);display: inline-block;border-radius: 0.5333rem;}', // 移动端样式
        htmlString:'<div class="smalltxt079"><strong>标题标题标题标题标题标题标题标题</strong><p>正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文</p></div>'
    };
}