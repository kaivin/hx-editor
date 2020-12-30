export function getHtmlData (){
    return {
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        align:'center', // left(左对齐)|center(居中对齐)|right(右对齐)        
        style:'other', // icon(图标)|number(数字)|other(其他)
        fileName:'nyb086.js', // 该文件的文件名
        class:'smalltxt086',// 用来给js使用添加页面内样式使用
        styleWebCode:'.smalltxt086 {border-radius: 10px;border: 1px solid rgb(0,86,133);margin-top: 50px;margin-bottom: 30px;}.smalltxt086 .s086-title {margin: 0!important;}.smalltxt086 .s086-title strong {display: block;position: relative;background: rgb(0,86,133);color: #fff;text-align: center;border-radius: 6px 6px 0 0;font-size: 18px;line-height: 2;}.smalltxt086 .s086-title strong:before,.smalltxt086 .s086-title strong:after {content: "";display: block;width: 10px;height: 35px;border-radius: 5px;border: 1px solid #fff;background: rgb(0,86,133);position: absolute;top: -20px;}.smalltxt086 .s086-title strong:before {left: 40px}.smalltxt086 .s086-title strong:after {right: 40px}.smalltxt086 .s086-text {padding: 0px 20px}.smalltxt086 .s086-text p {margin-top: 20px;margin-bottom: 20px } ', // PC端样式
        styleWapCode:'.smalltxt086 {border-radius: .26667rem;border: .02667rem solid rgb(0,86,133);;margin-top: .53333rem;margin-bottom: .4rem}.smalltxt086 .s086-title {margin: 0!important;}.smalltxt086 .s086-title strong {display: block;position: relative;background: rgb(0,86,133);;color: #fff;text-align: center;border-radius: .16rem .16rem 0 0;font-size: .42667rem;line-height: 2}.smalltxt086 .s086-title strong:before,.smalltxt086 .s086-title strong:after {content: "";display: block;width: .21333rem;height: .66667rem;border-radius: .13333rem;border: .02667rem solid #fff;background: rgb(0,86,133);;position: absolute;top: -.4rem}.smalltxt086 .s086-title strong:before {left: 1.06667rem}.smalltxt086 .s086-title strong:after {right: 1.06667rem}.smalltxt086 .s086-text {padding: 0px .26667rem}.smalltxt086 .s086-text p {margin-top: .26667rem;margin-bottom: .26667rem } ', // 移动端样式
        htmlString:'<div class="smalltxt086"> <p class="s086-title"><strong>这是一个标题</strong></p> <div class="s086-text"> <p>最近做的事情都是我喜欢的</p> <p>最近做的事情都是我喜欢的</p> <p>最近做的事情都是我喜欢的</p> <p>最近做的事情都是我喜欢的</p> </div> </div>'
    };
}