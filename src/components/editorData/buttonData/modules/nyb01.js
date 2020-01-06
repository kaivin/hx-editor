
import image from '@/assets/images/insidestyle/smallbtn001.png';
export function getHtmlData (){
    return {
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'红色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        align:'center', // left(左对齐)|center(居中对齐)|right(右对齐)        
        style:'other', // icon(图标)|number(数字)|other(其他)
        fileName:'nyb01.js', // 该文件的文件名
        styleWebCode:'.smallbtn001{clear:both;display:block;text-align:center;}.smallbtn001 a{clear:both;display:inline-block;width:400px;}.smallbtn001 a img{max-width:100%;width:100%;}', // PC端样式
        styleWapCode:'.smallbtn001{width:9.2rem;margin:0.4rem auto;}.smallbtn001 a{clear:both;display:block;}', // 移动端样式
        htmlString:'<p class="smallbtn001"><a rel="nofollow" href="#"><img src="'+image+'" alt=""></a></p>'
    };
}