export function getHtmlData (){
    return{
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        align:'center', // left(左对齐)|center(居中对齐)|right(右对齐)        
        style:'other', // icon(图标)|number(数字)|other(其他)
        fileName:'nyb014.js', // 该文件的文件名
        class:'smallbtn014',// 用来给js使用添加页面内样式使用
        styleWebCode:'.smallbtn014{display: inline-block;vertical-align: top;padding-left: 70px;height: 80px;width: 240px;background: url(../images/insidestyle/smallbtn014.png) left top no-repeat;background-size: 100% auto;padding-right: 6px;}.smallbtn014 span{display: block;text-align: center;color: #ffffff;font-size: 26px;line-height: 80px;}', // PC端样式
        styleWapCode:'.smallbtn014{display:inline-block;vertical-align:top;padding-left:1.2rem;height:1.41333rem;width:4.26667rem;background:url(../images/insidestyle/smallbtn014.png) left top no-repeat;background-size:100% auto;padding-right:.08rem}.smallbtn014 span{display:block;text-align:center;line-height:1.44rem;color:#ffffff;font-size:.48rem}', // 移动端样式
        htmlString:'<a href="javascript:;" class="smallbtn014"><span>立即咨询</span></a>'
    };
}