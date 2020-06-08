/*
 * @Author: your name
 * @Date: 2020-04-16 09:35:28
 * @LastEditTime: 2020-06-08 18:18:16
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \hx-editor\src\components\editorData\articleData\modules\nyb067.js
 */ 
export function getHtmlData (){
    return {
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'蓝色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        fileName:'nyb066.js', // 该文件的文件名
        class:'smalltxt067',// 用来给js使用添加页面内样式使用
        styleWebCode:'.smalltxt067{clear:both;margin: 20px 0px;}.smalltxt067 .smalltxt067even{color:#ccc!important;margin:0px 0px 0px 0px!important;}.smalltxt067 .smalltxt067odd{color:#003399!important;margin:0px 0px 20px 0px!important;}@media (max-width: 1440px){.smalltxt067{margin:15px 0px;}.smalltxt067 .smalltxt067odd{margin:0px 0px 15px 0px!important;}}@media (max-width: 1280px){.smalltxt067{margin:15px 0px;}.smalltxt067 .smalltxt067odd{margin:0px 0px 15px 0px!important;}}', // PC端样式
        styleWapCode:'.smalltxt067{clear:both; margin: .4rem 0rem;}.smalltxt067 .smalltxt067even{color:#ccc!important;margin:0rem 0rem 0rem 0rem!important;}.smalltxt067 .smalltxt067odd{color:#003399!important;margin:0rem 0px 0.4rem 0rem!important;}', // 移动端样式
        htmlString:'<div class="smalltxt067"><p class="smalltxt067even"><span>年产50万方混凝土，需砂石骨料约：</span></p><p class="smalltxt067odd"><span>1.8吨/立方米×50万立方米=90万吨</span></p><p class="smalltxt067even"><span>年产50万方混凝土，需砂石骨料约：</span></p><p class="smalltxt067odd"><span>1.8吨/立方米×50万立方米=90万吨</span></p><p class="smalltxt067even"><span>年产50万方混凝土，需砂石骨料约：</span></p><p class="smalltxt067odd"><span>1.8吨/立方米×50万立方米=90万吨</span></p></div>'
    };
}