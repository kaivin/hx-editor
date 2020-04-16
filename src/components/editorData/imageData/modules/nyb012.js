/*
 * @Author: your name
 * @Date: 2019-12-30 12:29:20
 * @LastEditTime: 2020-04-16 09:39:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \hx-editor\src\components\editorData\imageData\modules\nyb012.js
 */
export function getHtmlData (){
    return {
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'棕色,黄色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        fileName:'nyb012.js', // 该文件的文件名
        styleWebCode:'.smalltext012{padding:0;max-width:800px;margin-left:auto;margin-right:auto;}.smalltext012 li{clear:both;margin:0;}.smalltext012 li+li{margin:20px 0 0;}.smalltext012 li .smalltext012top{color:#e3a14f;overflow:hidden;line-height:50px;margin-bottom:0px;margin-top:0px;}.smalltext012 li .smalltext012top span:nth-child(1){float:left;font-size:30px;font-weight:normal;}.smalltext012 li .smalltext012top span:nth-child(2){font-weight:600;margin-left:15px;line-height:50px;display:inline-block;font-size:26px;}.smalltext012 li .smalltext012bom{background:#fff1e5;border-radius:10px;padding:15px;margin-top:0px;margin-bottom:0px;}', // PC端样式
        styleWapCode:'.smalltext012{padding:0rem;}.smalltext012 li{clear:both;padding:0rem 0rem !important;background:none !important;background-size:.26667rem;margin:0rem;}.smalltext012 li+li{margin:.4rem 0rem 0;}.smalltext012 li .smalltext012top{color:#e3a14f;margin-bottom:0.13333rem;overflow:hidden;line-height:0.8rem; margin-top:0rem;}.smalltext012 li .smalltext012top span:nth-child(1){float:left;font-size:0.8rem;font-weight:normal;}.smalltext012 li .smalltext012top span:nth-child(2){font-weight:600;background:url(../images/insidestyle/sytlelist01.png) no-repeat left center;background-size:0.73333rem;padding-left:0.8rem;margin-left:0.2rem;line-height:0.66667rem;display:inline-block;font-size:0.42667rem;}.smalltext012 li .smalltext012bom{background:#fff1e5;border-radius:0.2rem;font-size:0.38667rem;line-height:0.8rem;padding:0.26667rem; margin:0rem;}', // 移动端样式
        htmlString:'<ul class="smalltext012"><li><p class="smalltext012top"><span>01</span><span>标题标题标题标题标题标题</span></p><p class="smalltext012bom">正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文</p></li><li><p class="smalltext012top"><span>02</span><span>标题标题标题标题标题标题</span></p><p class="smalltext012bom">正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文</p></li></ul>'
    };
}