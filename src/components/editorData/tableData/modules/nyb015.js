/*
 * @Author: your name
 * @Date: 2020-01-07 10:45:01
 * @LastEditTime: 2020-01-07 10:45:04
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \hx-editor\src\components\editorData\tableData\modules\nyb001.js
 */

export function getHtmlData (){
    return {
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        align:'left', // left(左对齐)|center(居中对齐)|right(右对齐)        
        style:'icon', // icon(图标)|number(数字)|other(其他)
        class:'smalltable015',// 用来给js使用添加页面内样式使用
        fileName:'nyb015.js', // 该文件的文件名
        styleWebCode:'.smalltable015{clear:both; margin:20px 0px;}.smalltable015 .smalltable015tit{clear: both; display: block;padding: 10px 10px !important; background:rgba(1,102,155,1)!important;color: #fff !important;font-size: 28px !important;line-height: 48px !important; text-align: center; margin: 0px!important;font-weight:bold;}.smalltable015 table{margin: 0 auto;width: 100%; background: #fff; border-collapse: collapse;}.smalltable015 table tr{border:1px solid rgba(0,86,133,0.2)!important;}.smalltable015 table td{padding:15px 15px;word-break: break-all; border:1px solid rgba(0,86,133,0.2)!important; text-align: center;  line-height:24px; font-size:16px; color: #333;}.smalltable015 table th{padding:15px 15px;word-break: break-all; border:1px solid rgba(0,86,133,0.2)!important; text-align: center;  line-height:24px; font-size:16px; background: rgba(199,237,251,1)!important; font-weight: bold; color: #333;}', // PC端样式
        styleWapCode:'.smalltable015{clear:both;margin:.26667rem 0rem}.smalltable015 .smalltable015tit{clear:both;display:block;background:rgba(1,102,155,1)!important;color:#fff;font-size:.37333rem;line-height:.4rem;padding:.26667rem .2rem;text-align:center;margin:0px !important;font-weight:bold}.smalltable015 table{margin:0 auto;width:100%;background:#fff;border-collapse:collapse}.smalltable015 table tr{border:1px solid rgba(0,86,133,0.2)!important}.smalltable015 table td{padding:.2rem .13333rem;word-break:break-all;border:1px solid rgba(0,86,133,0.2)!important;text-align:center;line-height:.66667rem;font-size:.32rem;color:#333}.smalltable015 table th{padding:.2rem .13333rem;word-break:break-all;border:1px solid rgba(0,86,133,0.2)!important;text-align:center;line-height:.66667rem;font-size:.34667rem;background:rgba(199,237,251,1)!important;font-weight:bold;color:#333}', // 移动端样式
        htmlString:'<div class="smalltable015"><p class="smalltable015tit">性能优势、设备报价，沙场设备大集合全在这儿！</p><table><tbody><tr><th>设备种类</th><th>型号</th></tr><tr><td>112元/吨</td><td>112元/吨</td></tr><tr><td>125元/吨</td><td>125元/吨</td></tr><tr><td>112元/吨</td><td>112元/吨</td></tr></tbody></table></div>'
    };
}