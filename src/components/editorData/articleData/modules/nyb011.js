/*
 * @Author: your name
 * @Date: 2019-12-30 12:29:20
 * @LastEditTime: 2020-06-08 18:06:31
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \hx-editor\src\components\editorData\articleData\modules\nyb011.js
 */ 
export function getHtmlData (){
    return {
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        align:'left', // left(左对齐)|center(居中对齐)|right(右对齐)        
        style:'icon', // icon(图标)|number(数字)|other(其他)
        fileName:'nyb011.js', // 该文件的文件名
        class:'smalltxt011',// 用来给js使用添加页面内样式使用
        styleWebCode:'.smalltxt011{position:relative;padding:15px !important;border:2px dashed rgb(127,207,237)!important;}.smalltxt011:after{content:"";position:absolute;left:50%;top:-15px;width:64px;height:24px;background:url(../images/insidestyle/small005.png) no-repeat center center #fff;padding:0px;background-size:64px;transform:translateX(-50%);}', // PC端样式
        styleWapCode:'.smalltxt011{position:relative;padding:0.4rem;border:2px dashed rgb(127,207,237)!important;margin-top:0.16rem;margin:0.53333rem 0rem 0.53333rem 0rem;}.smalltxt011:after{content:"";position:absolute;left:50%;top:-0.16rem;width:0.85333rem;height:0.32rem;background:url(../images/insidestyle/small005.png) no-repeat center center #fff;padding:0rem;background-size:0.85333rem;transform:translateX(-50%);}', // 移动端样式
        htmlString:'<p class="smalltxt011">正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文</p>'
    };
}