export function getHtmlData (){
    return {
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        align:'center', // left(左对齐)|center(居中对齐)|right(右对齐)        
        style:'other', // icon(图标)|number(数字)|other(其他)
        fileName:'nyb085.js', // 该文件的文件名
        class:'smalltxt085',// 用来给js使用添加页面内样式使用
        styleWebCode:'.smalltxt085 {border-radius: 10px;background: #fff;position: relative;padding: 0px 10px;border: 5px solid rgb(199,237,251);margin-top: 30px;margin-bottom: 30px}.smalltxt085 .s085-title {margin-top: 20px;margin-bottom: 20px}.smalltxt085 .s085-title strong {display: inline-block;padding: 0 15px;position: relative;z-index: 1;font-size: 18px;line-height: 2;color: rgb(0,86,133);background: #fff;border-color: rgba(0,86,133,0.7);border-radius: 8px;border-style: solid;border-left-width: 2px;border-top-width: 3px;border-right-width: 2px;border-bottom-width: 1px}.smalltxt085 .s085-title strong:before {content: "";display: block;position: absolute;left: -16px;top: 16px;width: 16px;height: 2px;background: rgba(0,86,133,0.7);}.smalltxt085 p {margin-top: 20px;margin-bottom: 20px }', // PC端样式
        styleWapCode:'.smalltxt085 {border-radius: .26667rem;background: #fff;position: relative;padding: 0px .26667rem;border-color: rgb(199,237,251);border-radius: .21333rem;border-style: solid;border-left-width: .10667rem;border-top-width: .10667rem;border-right-width: .10667rem;border-bottom-width: .10667rem;margin-top: .4rem;margin-bottom: .4rem;}.smalltxt085 .s085-title {margin-top: .26667rem;margin-bottom: .26667rem}.smalltxt085 .s085-title strong {display: inline-block;padding: 0 .4rem;position: relative;z-index: 1;font-size: .42667rem;line-height: 1.8;color: rgb(0,86,133);background-color: #fff;border-color: rgba(0,86,133,0.7);border-radius: .21333rem;border-style: solid;border-left-width: .05333rem;border-top-width: .08rem;border-right-width: .05333rem;border-bottom-width: .02667rem}.smalltxt085 .s085-title strong:before {content: "";display: block;position: absolute;left: -.42rem;top: .42667rem;width: .4rem;height: .05333rem;background: rgba(0,86,133,0.7);}.smalltxt085 p {margin-top: .26667rem;margin-bottom: .26667rem }', // 移动端样式
        htmlString:'<div class="smalltxt085"> <p class="s085-title"><strong>这是一个标题</strong></p> <p>最近做的事情都是我喜欢的，每天很忙，但也很开心。人能充实起来的感觉，原来也挺好的想成为能让朋友觉得骄傲的那种人，想要有能力对重要的人好，也想在一些时刻觉得，原来我也还不错嘛。为这个目标努力着，虽然慢，但是想一直往前走。</p> </div>'
    };
}