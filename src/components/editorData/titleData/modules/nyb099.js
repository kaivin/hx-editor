/*
 * @Author: your name
 * @Date: 2020-05-12 15:44:59
 * @LastEditTime: 2020-06-08 17:46:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \hx-editor\src\components\editorData\titleData\modules\nyb099.js
 */ 

export function getHtmlData (){
    return {
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        align:'center', // left(左对齐)|center(居中对齐)|right(右对齐)        
        style:'number', // icon(图标)|number(数字)|other(其他)
        class:'smalltit099',// 用来给js使用添加页面内样式使用
        fileName:'nyb099.js', // 该文件的文件名
        styleWebCode:'.smalltit099{width:fit-content;font-size: 20px!important;color:rgba(1,102,155,1)!important;margin: 40px auto!important;padding: 3px 0 3px 55px;position:relative;}.smalltit099:before,.smalltit099:after{ content:""; height:1px; background:rgba(1,102,155,1); position:absolute; left:0; right:0; }.smalltit099:before{ right: -10px; top:0; }.smalltit099:after{ left: 14px; right: 20px; bottom:0; }.smalltit099 em{font-size: 40px!important;font-style: normal;background: #fff;position: absolute;left: 0;bottom: 7px;}', // PC端样式
        styleWapCode:'.smalltit099{width:fit-content;color:rgba(1,102,155,1)!important;margin: 0.4rem auto!important;padding-left: 0.96rem;position:relative;}.smalltit099:before,.smalltit099:after{content:"";height: 1px;background:rgba(1,102,155,1);position:absolute;left:0;right:0;}.smalltit099:before{right: -0.2rem;top:0;}.smalltit099:after{left: 0.2rem;right: 0.26667rem;bottom:0;}.smalltit099 em{font-size: 0.72rem;font-style: normal;line-height: 1;background: #fff;position: absolute;left: 0;bottom: 0.10667rem;}', // 移动端样式
        htmlString:'<p class="smalltit099"><em>01</em>标题标题</p>'
    };
}