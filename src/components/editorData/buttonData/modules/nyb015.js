export function getHtmlData (){
    return{
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        align:'center', // left(左对齐)|center(居中对齐)|right(右对齐)        
        style:'other', // icon(图标)|number(数字)|other(其他)
        fileName:'nyb015.js', // 该文件的文件名
        class:'smallbtn015',// 用来给js使用添加页面内样式使用
        styleWebCode:'.smallbtn015{display: inline-block;vertical-align: top;padding-left: 85px;width: 317px;height: 54px;background: url(../images/insidestyle/smallbtn015.png) left top no-repeat;background-size: 100% auto;}.smallbtn015 span{display: block;text-align:center;color: #fefefe;font-size: 26px;line-height: 54px;}', // PC端样式
        styleWapCode:'.smallbtn015{display:inline-block;vertical-align:top;padding-left:1.81333rem;width:6.76rem;height:1.16rem;background:url(../images/insidestyle/smallbtn015.png) left top no-repeat;background-size:100% auto}.smallbtn015 span{display:block;text-align:center;color:#fefefe;font-size:.53333rem;line-height:1.16rem}', // 移动端样式
        htmlString:'<a href="javascript:;" class="smallbtn015"><span>立即咨询</span></a>'
    };
}