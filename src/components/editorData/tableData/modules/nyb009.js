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
        color:'蓝色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        align:'left', // left(左对齐)|center(居中对齐)|right(右对齐)        
        style:'icon', // icon(图标)|number(数字)|other(其他)
        fileName:'nyb009.js', // 该文件的文件名
        styleWebCode:'.smalltable009{ clear: both; display: block; margin:30px 0px;}.smalltable009 table {width: 100%;border-collapse: collapse;border: 0px;background: #fff;}.smalltable009 table thead th,.smalltable009 table tbody td{padding: 10px 0px;border: 1px solid #dcdcdc;text-align: center;word-break: break-all; font-size: 16px;}.smalltable009 table thead th {background:#4b5482; color: #fff;border:1px solid #59649a;}.smalltable009 table tbody tr:nth-child(even) td{background: #e9ecf7;}@media screen and (max-width: 1600px){.smalltable009{clear:both; margin:26px 0px;}.smalltable009 table thead th,.smalltable009 table tbody td{font-size:15px !important;padding: 14px 15px !important;}}@media screen and (max-width: 1440px){.smalltable009{clear:both; margin:24px 0px;}.smalltable009 table thead th,.smalltable009 table tbody td{padding: 12px 15px !important;}}@media screen and (max-width: 1280px){.smalltable009{clear:both; margin:20px 0px;}.smalltable009 table thead th,.smalltable009 table tbody td{font-size:14px !important;padding: 10px 15px !important;}}', // PC端样式
        styleWapCode:'.smalltable009{ clear: both; display: block; margin: .33333rem 0rem;}.smalltable009 table {width: 100%;border-collapse: collapse;border: 0px;background: #fff;}.smalltable009 table thead th,.smalltable009 table tbody td{padding:0.133333rem 0.13333rem;border: 1px solid #dcdcdc;text-align: center;word-break: break-all;font-size: .37333rem; line-height:0.64rem;}.smalltable009 table thead th {background:#4b5482; color: #fff;border:1px solid #59649a;}.smalltable009 table tbody tr:nth-child(even) td{background: #e9ecf7;}', // 移动端样式
        htmlString:'<div class="smalltable009"><table><thead><tr><th>尾矿制砂厂</th><th>河南客户项目信息</th></tr></thead><tbody><tr><td>设计产量</td><td>200t/h</td></tr><tr><td>加工原料</td><td>400mm</td></tr><tr><td>成品规格</td><td>0-5、5-10mm</td></tr><tr><td>成品规格</td><td>0-5、5-10mm</td></tr><tr><td>成品规格</td><td>0-5、5-10mm</td></tr><tr><td>成品规格</td><td>0-5、5-10mm</td></tr></tbody></table></div>'
    };
}