/*
 * @Author: your name
 * @Date: 2019-12-30 12:29:20
 * @LastEditTime: 2020-06-08 18:13:44
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \hx-editor\src\components\editorData\articleData\modules\nyb044.js
 */ 
export function getHtmlData (){
    return {
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        align:'left', // left(左对齐)|center(居中对齐)|right(右对齐)        
        style:'icon', // icon(图标)|number(数字)|other(其他)
        fileName:'nyb044.js', // 该文件的文件名
        class:'smalltxt044',// 用来给js使用添加页面内样式使用
        styleWebCode:'.smalltxt044{border:1px solid rgb(127,207,237)!important;padding:10px 15px;display:block;text-indent:0 !important;position:relative;margin-left: 5px!important;margin-right: 5px!important;margin-bottom: 25px!important;margin-top: 25px!important;}.smalltxt044:before,.smalltxt044:after,.smalltxt044 span:before,.smalltxt044 span:after{content:"";height:20px;width:20px;display:block;position:absolute;}.smalltxt044:before{border-left:6px solid rgb(127,207,237)!important;border-top:6px solid rgb(127,207,237)!important;left: -5px;top: -5px;}.smalltxt044:after{border-right:6px solid rgb(127,207,237)!important;border-top:6px solid rgb(127,207,237)!important;right: -5px;top: -5px;}.smalltxt044 span:before{border-left:6px solid rgb(127,207,237)!important;border-bottom:6px solid rgb(127,207,237)!important;left: -5px;bottom: -5px;}.smalltxt044 span:after{border-right:6px solid rgb(127,207,237)!important;border-bottom:6px solid rgb(127,207,237)!important;right: -5px;bottom: -5px;}', // PC端样式
        styleWapCode:'.smalltxt044{border:1px solid rgb(127,207,237)!important;padding:0.13333rem 0.2rem;display:block;margin:0.53333rem 0.06667rem !important;position:relative;}.smalltxt044 span:after,.smalltxt044 span:before,.smalltxt044:after,.smalltxt044:before{content:"";height:0.26667rem;width:0.26667rem;display:block;position:absolute;}.smalltxt044:before{border-left:0.06667rem solid rgb(127,207,237)!important;border-top:0.06667rem solid rgb(127,207,237)!important;left:-0.05333rem;top:-0.05333rem;}.smalltxt044:after{border-right:0.06667rem solid rgb(127,207,237)!important;border-top:0.06667rem solid rgb(127,207,237)!important;right:-0.05333rem;top:-0.05333rem;}.smalltxt044 span:before{border-left:0.06667rem solid rgb(127,207,237)!important;border-bottom:0.06667rem solid rgb(127,207,237)!important;left:-0.05333rem;bottom:-0.05333rem;}.smalltxt044 span:after{border-right:0.06667rem solid rgb(127,207,237)!important;border-bottom:0.06667rem solid rgb(127,207,237)!important;right:-0.05333rem;bottom:-0.05333rem;}', // 移动端样式
        htmlString:'<p class="smalltxt044"><span>正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文</span></p>'
    };
}