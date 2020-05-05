
export function getHtmlData (){
    return {
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'橙色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        align:'center', // left(左对齐)|center(居中对齐)|right(右对齐)        
        style:'other', // icon(图标)|number(数字)|other(其他)
        fileName:'nyb003.js', // 该文件的文件名
        styleWebCode:'.smallvideo003{max-width: 800px; position: relative; margin: 18px auto!important; } .smallvideo003 video{ border-top: 3px solid #ff5f4a; display: block;} .smallvideo003 .span-swt{width: 103.7%;height: 190px;background: url(../images/insidestyle/smallvideo003-swtzs.png) center top no-repeat;background-size: 100%;margin: 0 auto;position: relative;left: -3.6%;top: -5px;display: block;font-size: 0;} @media screen and (max-width: 1280px){ .smallvideo003 .span-swt{height: 170px;} }', // PC端样式
        styleWapCode:'.smallvideo003 video{border-top: 0.04rem solid #ff5f4a;display: block;margin: 0!important;} .smallvideo003 .span-swt{width: 109.5%;height: 2.84rem;background: url(../images/insidestyle/msmallvideo003-swtzs.png) center top no-repeat;background-size: 100%;margin: 0 0 0 -.4rem;display: block;font-size: 0;} ', // 移动端样式
        htmlString:'<p class="smallvideo003"><img src="https://www.hxjq.cn/images/nopicture01.jpg" alt="" /><span class="span-swt">在线咨询</span></p>'
    };
}