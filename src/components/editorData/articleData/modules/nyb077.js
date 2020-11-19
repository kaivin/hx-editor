export function getHtmlData (){
    return {
        type:"",// web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'',// 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static',// dynamic(动态)|static(静态)
        align:'left',// left(左对齐)|center(居中对齐)|right(右对齐)        
        style:'icon',// icon(图标)|number(数字)|other(其他)
        fileName:'nyb077.js',// 该文件的文件名
        class:'smalltxt077',// 用来给js使用添加页面内样式使用
        styleWebCode:'.smalltxt077{clear:both;display:block;border:1px solid rgb(0,86,133);padding:30px 20px 10px 20px;border-radius:15px;}.smalltxt077 strong{clear:both;display:inline-block;padding: 5px 20px;border-radius: 24px; font-size:18px; background:rgb(127,207,237);border:1px solid rgb(0,86,133);color: #ffffff;letter-spacing: 2px;text-shadow: rgb(0,86,133) 1px 1px,rgb(0,86,133) 1px -1px,rgb(0,86,133) -1px 1px,rgb(0,86,133) -1px -1px,rgb(0,86,133) 0px 1.4px,rgb(0,86,133) 0px -1.4px,rgb(0,86,133) -1.4px 0px,rgb(0,86,133) 1.4px 0px,rgba(198,198,198,0) 0px -3px 20px;position:relative;margin-left:40px;}.smalltxt077 strong:before{content: "";position: absolute;width: 20px;height: 20px;left: -40px;top: 13px;border: 1px solid rgb(0,86,133);background: rgb(127,207,237);border-radius: 50%;}',// PC端样式
        styleWapCode:'.smalltxt077{clear:both;display:block;border:1px solid rgb(0,86,133);padding:0.4rem;border-radius:0.2667rem;}.smalltxt077 strong{clear:both;display:inline-block;padding:0.1333rem 0.4rem;border-radius:0.6rem;background:rgb(127,207,237);border:1px solid rgb(0,86,133);color: #ffffff;letter-spacing: 2px;text-shadow: rgb(0,86,133) 1px 1px,rgb(0,86,133) 1px -1px,rgb(0,86,133) -1px 1px,rgb(0,86,133) -1px -1px,rgb(0,86,133) 0px 1.4px,rgb(0,86,133) 0px -1.4px,rgb(0,86,133) -1.4px 0px,rgb(0,86,133) 1.4px 0px,rgba(198,198,198,0) 0px -3px 20px;position:relative;margin-left:0.5333rem;}.smalltxt077 strong:before{content:"";position:absolute;width:0.2667rem;height:0.2667rem;left:-0.5333rem;top:0.4rem;border:1px solid rgb(0,86,133);background:rgb(127,207,237);border-radius:50%;}',// 移动端样式
        htmlString:'<div class="smalltxt077"><strong>标题标题标题标题标题标题</strong><p>正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正</p><strong>标题标题标题标题标题标题</strong><p>正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文</p><strong>标题标题标题标题标题标题</strong><p>正文正文正文正文正文正文正文正文正文正文正文</p></div>'
    };
}