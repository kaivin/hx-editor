export function getHtmlData (){
    return {
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        align:'left', // left(左对齐)|center(居中对齐)|right(右对齐)        
        style:'icon', // icon(图标)|number(数字)|other(其他)
        fileName:'nyb078.js', // 该文件的文件名
        class:'smalltxt078',// 用来给js使用添加页面内样式使用
        styleWebCode:'.smalltxt078{border: solid 4px rgb(199,237,251);background:#fff;padding: 0px 15px 15px;border-bottom: solid 4px rgb(2,143,199);position:relative;}.smalltxt078 strong{background-color: rgb(2,143,199);border-radius: 50%;padding: 0px;display: inline-block;width: 50px;line-height: 50px;height: 50px;text-align: center;position: absolute;left: 50%;margin-left: -25px;top: -25px;color: #fff;font-size: 22px;}.smalltxt078 i{clear: both;display: block;margin-top: 40px;width: 100%;height: 1px;border-top: dashed 1px rgb(2,143,199);position: relative;margin-bottom: 35px;}.smalltxt078 i:after{content: "";width: 0px;border-top: 0.3rem solid rgb(2,143,199);border-bottom: 0px;color: inherit;border-left: 0.3rem solid transparent !important;border-right: 0.3rem solid transparent !important;box-sizing: border-box;z-index: 1;position: absolute;top: 0px;left: 50%;margin-left: -0.3rem;}.smalltxt078 i:before{content: "";width: 0px;margin-right: auto;border-top: 0.3rem solid #fefefe;border-bottom: 0;color: inherit;text-align: right;border-left: 0.3rem solid transparent !important;border-right: 0.3rem solid transparent !important;box-sizing: border-box;z-index: 1;position: absolute;top: -1px;left: 50%;margin-left: -0.3rem;z-index: 2;}', // PC端样式
        styleWapCode:'.smalltxt078{border: solid 4px rgb(199,237,251);background:#fff;padding: 0px 15px 15px;border-bottom: solid 4px rgb(2,143,199);position:relative;}.smalltxt078 strong{background-color: rgb(2,143,199);border-radius: 50%;padding: 0rem;display: inline-block;width: 0.8rem;line-height: 0.8rem;height: 0.8rem;text-align: center;position: absolute;left: 50%;margin-left: -0.4rem;top: -0.4rem;color: #fff;}.smalltxt078 i{clear: both;display: block;margin-top: 0.6rem;width: 100%;height: 1px;border-top: dashed 1px rgb(2,143,199);position: relative;}.smalltxt078 i:after{content: "";width: 0px;border-top: 0.3rem solid rgb(2,143,199);border-bottom: 0px;color: inherit;border-left: 0.3rem solid transparent !important;border-right: 0.3rem solid transparent !important;box-sizing: border-box;z-index: 1;position: absolute;top: 0px;left: 50%;margin-left: -0.3rem;}.smalltxt078 i:before{content: "";width: 0px;margin-right: auto;border-top: 0.3rem solid #fefefe;border-bottom: 0;color: inherit;text-align: right;border-left: 0.3rem solid transparent !important;border-right: 0.3rem solid transparent !important;box-sizing: border-box;z-index: 1;position: absolute;top: -1px;left: 50%;margin-left: -0.3rem;z-index: 2;}', // 移动端样式
        htmlString:'<div class="smalltxt078"><strong>01</strong><i></i><p>正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文</p><p>正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文</p></div>'
    };
}