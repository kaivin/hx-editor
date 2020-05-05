
import image from '@/assets/images/insidestyle/smallbtn006-pic01.png';
export function getHtmlData (){
    return {
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'黄色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        align:'center', // left(左对齐)|center(居中对齐)|right(右对齐)        
        style:'other', // icon(图标)|number(数字)|other(其他)
        fileName:'nyb006.js', // 该文件的文件名
        styleWebCode:'.smallbtn006{text-align: center;}', // PC端样式
        styleWapCode:'.smallbtn006{text-align: center;}', // 移动端样式
        htmlString:'<p class="smallbtn006"><a href="#" rel="nofollow"><img src="'+image+'" alt=""></a></p>'
    };
}