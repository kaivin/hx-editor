/*
 * @Author: your name
 * @Date: 2019-12-30 12:29:20
 * @LastEditTime: 2020-06-08 18:23:37
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \hx-editor\src\components\editorData\imageData\modules\nyb023.js
 */ 
export function getHtmlData (){
    return {
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'dynamic', // dynamic(动态)|static(静态)
        align:'left', // left(左对齐)|center(居中对齐)|right(右对齐)        
        style:'icon', // icon(图标)|number(数字)|other(其他)
        fileName:'nyb023.js', // 该文件的文件名
        class:'smalltext023',// 用来给js使用添加页面内样式使用
        styleWebCode:'.smalltext023{background:rgb(199,237,251)!important;border:1px solid rgb(127,207,237)!important;border-radius:0 .8rem 0 0;padding:30px 30px 15px 30px;margin:.8rem 0 .4rem;position:relative;max-width:800px;margin-left:auto;margin-right:auto;}.smalltext023:before{content:"";width:52px;height:66px;background:url(../images/insidestyle/small045.gif) no-repeat center center;background-size:100%;position:absolute;left:-10px;top:-16px;}.smalltext023 .smalltext023tit{text-align:center;margin:0px;}.smalltext023 .smalltext023tit strong{color:rgb(1,102,155)!important;display:inline-block;position:relative;z-index:1;font-size:20px;line-height:30px;padding:5px 10px;}.smalltext023 .smalltext023tit strong:before,.smalltext023 .smalltext023tit strong:after{content:"";width:30px;height:30px;border-radius:50%;display:block;position:absolute;z-index:-1;}.smalltext023 .smalltext023tit strong:before{background:#aadafe;left:-15px;top:0;}.smalltext023 .smalltext023tit strong:after{border:2px dashed #aadafe;right:-15px;bottom:0;}.smalltext023 p{margin:15px 0px 0px 0px;}', // PC端样式
        styleWapCode:'.smalltext023{background:rgb(199,237,251)!important;border:1px solid rgb(127,207,237)!important;border-radius:0 .8rem 0 0;padding:0.4rem 0.4rem 0.2rem 0.4rem;position:relative;}.smalltext023:before{content:"";width:0.69333rem;height:0.88rem;background:url(../images/insidestyle/small045.gif) no-repeat center center;background-size:100%;position:absolute;left:-0.13333rem;top:-0.21333rem;}.smalltext023 .smalltext023tit{text-align:center;margin:0px;}.smalltext023 .smalltext023tit strong{color:rgb(1,102,155)!important;display:inline-block;position:relative;z-index:1;font-size:0.42667rem;line-height:0.53333rem;padding:0.06667rem 0.13333rem;}.smalltext023 .smalltext023tit strong:before,.smalltext023 .smalltext023tit strong:after{content:"";width:0.4rem;height:0.4rem;border-radius:50%;display:block;position:absolute;z-index:-1;}.smalltext023 .smalltext023tit strong:before{background:#aadafe;left:-0.2rem;top:0;}.smalltext023 .smalltext023tit strong:after{border:2px dashed #aadafe;right:-0.2rem;bottom:0;}.smalltext023 p{margin:0.2rem 0rem 0rem 0rem;}', // 移动端样式
        htmlString:'<div class="smalltext023"><p class="smalltext023tit"><strong>标题标题标题</strong></p><p>正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文</p></div>'
    };
}