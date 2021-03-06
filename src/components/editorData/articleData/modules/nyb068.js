/*
 * @Author: your name
 * @Date: 2020-05-12 15:44:59
 * @LastEditTime: 2020-06-08 18:18:26
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \hx-editor\src\components\editorData\articleData\modules\nyb068.js
 */ 
export function getHtmlData (){
    return {
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        align:'left', // left(左对齐)|center(居中对齐)|right(右对齐)        
        style:'icon', // icon(图标)|number(数字)|other(其他)
        fileName:'nyb068.js', // 该文件的文件名
        class:'smalltxt068',// 用来给js使用添加页面内样式使用
        styleWebCode:'.smalltxt068 p{position:relative;padding-left: 45px;}.smalltxt068 p:before{content:"";width: 1px;border:1px dashed rgb(127,207,237)!important;position:absolute;left: 16px;top: 0;bottom: -40px;}.smalltxt068 p:last-child:before{display:none}.smalltxt068 p span{width: 36px;height: 36px;background:rgb(0,86,133)!important;border-radius:50%;display:block;font-size: 22px;font-weight: normal;line-height: 36px;color: rgb(0,86,133)!important;padding-left: 8px;position:absolute;left:0;top: 0;z-index:1;}.smalltxt068 p span:before{content:"";width: 28px;height: 28px;background:#fff;border-radius:50%;display:block;position:absolute;left:0;top: 50%;margin-top: -14px;z-index: -1;}', // PC端样式
        styleWapCode:'.smalltxt068 p{position:relative;padding-left:.83986875rem}.smalltxt068 p:before{content:"";width:.0266875rem;border:1px dashed rgb(127,207,237)!important;position:absolute;left:.3125rem;top: 0.44rem;bottom: -0.84rem;}.smalltxt068 p:last-child:before{display:none}.smalltxt068 p span{width:.6rem;height:.6rem;background:rgb(0,86,133)!important;border-radius:50%;display:block;font-weight: normal;line-height: 0.6rem;color: rgb(0,86,133)!important;padding-left: 0.12rem;position:absolute;left:0;top:.12rem;z-index:1;}.smalltxt068 p span:before{content:"";width:.48rem;height:.48rem;background:#fff;border-radius:50%;font-size:.4rem;color:rgb(0,86,133)!important;font-weight:400;text-align:center;line-height:.48rem;display:block;position:absolute;left:0;top: 50%;margin-top: -0.24rem;z-index: -1;}', // 移动端样式
        htmlString:'<div class="smalltxt068"><p><strong><span>1</span>从生产能力来说：</strong>颚式破碎机采用深V腔型型结构，扩大进料口</p><p><strong><span>2</span>从生产能力来说：</strong>深腔双面构成的颚式破碎机，零悬挂、负支撑</p></div>'
    };
}