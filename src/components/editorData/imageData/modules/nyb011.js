/*
 * @Author: your name
 * @Date: 2019-12-30 12:29:20
 * @LastEditTime: 2020-06-08 18:22:58
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \hx-editor\src\components\editorData\imageData\modules\nyb011.js
 */ 
export function getHtmlData (){
    return {
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'红色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        fileName:'nyb011.js', // 该文件的文件名
        class:'smalltext011',// 用来给js使用添加页面内样式使用
        styleWebCode:'.smalltext011{clear:both;display:block;width:100%;border:1px dotted #c62929;padding: 20px 20px 15px;border-radius:5px;overflow:hidden;max-width:800px;margin-left:auto;margin-right:auto;}.smalltext011 strong{clear:both;display:block;text-align:center;color:#c62929!important;font-size:18px;margin-bottom: 15px;}.smalltext011 p{margin: 0!important;}', // PC端样式
        styleWapCode:'.smalltext011{clear:both;display:block;width:100%;border:1px dotted #c62929;padding: 0.36rem 0.26667rem 0.26667rem;border-radius:0.13333rem;overflow:hidden;font-size:0.38667rem;}.smalltext011 strong{clear:both;display:block;text-align:center;color:#c62929!important;font-size: 0.4rem;margin-bottom: 0.24rem;}.smalltext011 p{margin: 0!important;}', // 移动端样式
        htmlString:'<div class="smalltext011"><strong>标题标题标题</strong><p>正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文<p></div>'
    };
}