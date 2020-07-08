/*
 * @Author: your name
 * @Date: 2020-06-01 16:09:29
 * @LastEditTime: 2020-06-08 18:24:17
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \hx-editor\src\components\editorData\imageData\modules\nyb031.js
 */ 
export function getHtmlData (){
    return {
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        align:'left', // left(左对齐)|center(居中对齐)|right(右对齐)        
        style:'icon', // icon(图标)|number(数字)|other(其他)
        fileName:'nyb031.js', // 该文件的文件名
        class:'smalltext031',// 用来给js使用添加页面内样式使用
        styleWebCode:'.smalltext031{border: 1px solid rgb(2,143,199)!important;padding-top: 38px;margin: 24px 0 24px 17px;}.smalltext031 p{padding: 0 3.4%;margin: 14px 0!important;}.smalltext031 .tit{background: rgb(2,143,199)!important;border-radius: 6px;font-size: 18px!important;color: #fff!important;padding: 0 20px;margin: 10px 0!important;display: inline-block;position: relative;left: -17px;}.smalltext031 .tit strong{color: #fff!important;}', // PC端样式
        styleWapCode:'.smalltext031{border: 1px solid rgb(2,143,199)!important;padding-top: 0.2rem;margin: 0.4rem 0 0.4rem 0.26667rem;}.smalltext031 p{padding: 0 4.4%;margin: 0.24rem 0!important;}.smalltext031 .tit{background: rgb(2,143,199)!important;border-radius: 0.08rem;font-size: 0.42667rem!important;color: #fff!important;padding: 0 0.32rem;margin: 0.2rem 0!important;display: inline-block;position: relative;left: -0.26667rem;}.smalltext031 .tit strong{color: #fff!important;} ', // 移动端样式
        htmlString:'<div class="smalltext031"> <p class="tit"><strong>标题标题标题</strong></p> <p>正文正文正文正文正文</p> <p class="tit"><strong>标题标题标题</strong></p> <p>正文正文正文正文正文</p> <p class="tit"><strong>标题标题标题</strong></p> <p>正文正文正文正文正文</p> </div>'
    };
}