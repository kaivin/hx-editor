/*
 * @Author: your name
 * @Date: 2020-06-23 08:33:34
 * @LastEditTime: 2020-06-23 08:46:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \hx-editor\src\components\editorData\buttonData\modules\nyb011.js
 */
export function getHtmlData (){
    return{
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        align:'center', // left(左对齐)|center(居中对齐)|right(右对齐)        
        style:'other', // icon(图标)|number(数字)|other(其他)
        fileName:'nyb011.js', // 该文件的文件名
        class:'smallbtn011',// 用来给js使用添加页面内样式使用
        styleWebCode:'.smallbtn011{width:100%;text-align:center;font-size:0;line-height:0}.smallbtn011:after{content:"";display:block;height:0;clear:both;width:100%}.smallbtn011 li{display:inline-block;text-align:center;width:20%;padding:15px 5px;font-weight:bold;clear:none !important}.smallbtn011 li a{clear:both;display:block;border:rgba(2,143,199,1) solid 1px;border-radius: 5px;line-height: 30px;text-align:center;padding:6px 0;box-shadow: 0px 5px 0px rgba(127,207,237,1);color:rgba(1,102,155,1);font-size: 16px;}.smallbtn011 li a:hover{background:rgba(199,237,251,0.2);border:rgba(127,207,237,1) solid 1px}', // PC端样式
        styleWapCode:'.smallbtn011{ width: 100%; text-align: center; font-size: 0; line-height: 0; overflow: hidden; }.smallbtn011:after { content: ""; display: block; height: 0; clear: both; width: 100%; }.smallbtn011 li { display: inline-block; text-align: center; width: 33%; padding: 0.2rem 0.06667rem; font-weight: bold; clear: none !important; overflow: hidden; }.smallbtn011 li a { clear: both; display: block; border: rgb(2,143,199) solid 1px; border-radius: 0.06667rem; line-height: 0.42667rem; text-align: center; padding: 0.16rem 0; box-shadow: 0px 0.06667rem 0px rgb(127,207,237); color: rgb(1,102,155); font-size: 0.37333rem; }.smallbtn011 li a:hover { background: rgba(199,237,251, 0.2); border: rgba(127,207,237, 1) solid 1px; }', // 移动端样式
        htmlString:'<ul class="smallbtn011"><li> <a href="#1"><span>价格因素分析</span></a> </li> <li> <a href="#2"><span>热卖类型介绍</span></a> </li> <li> <a href="#3"><span>易损件分析</span></a></li></ul>'
    };
}