/*
 * @Author: your name
 * @Date: 2020-01-07 10:45:01
 * @LastEditTime: 2020-01-07 10:45:04
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \hx-editor\src\components\editorData\tableData\modules\nyb001.js
 */

export function getHtmlData (){
    return{
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        align:'left', // left(左对齐)|center(居中对齐)|right(右对齐)        
        style:'icon', // icon(图标)|number(数字)|other(其他)
        class:'smalltable018',// 用来给js使用添加页面内样式使用
        fileName:'nyb018.js', // 该文件的文件名
        styleWebCode:'.smalltable018{ clear: both; display: block; margin:30px 0px;}.smalltable018 table{width: 100%;border-collapse: collapse;border: 0px;background: #fff;}.smalltable018 table thead th,.smalltable018 table tbody td{padding: 10px 0px;border: 1px solid rgba(0,86,133,0.2)!important;text-align: center;word-break: break-all; font-size: 16px;}.smalltable018 table thead th{background:rgba(1,102,155,1)!important; color: #fff;border:1px solid #59649a;}.smalltable018 table tbody tr:nth-child(even) td{background: rgba(199,237,251,0.2)!important;}@media screen and (max-width: 1600px){.smalltable018{clear:both; margin:26px 0px;}.smalltable018 table thead th,.smalltable018 table tbody td{font-size:15px !important;padding: 14px 15px !important;}}@media screen and (max-width: 1440px){.smalltable018{clear:both; margin:24px 0px;}.smalltable018 table thead th,.smalltable018 table tbody td{padding: 12px 15px !important;}}@media screen and (max-width: 1280px){.smalltable018{clear:both; margin:20px 0px;}.smalltable018 table thead th,.smalltable018 table tbody td{font-size:14px !important;padding: 10px 15px !important;}}', // PC端样式
        styleWapCode:'.smalltable018{ clear: both; display: block; margin: .33333rem 0rem;}.smalltable018 table{width: 100%;border-collapse: collapse;border: 0px;background: #fff;}.smalltable018 table thead th,.smalltable018 table tbody td{padding:0.133333rem 0.13333rem;border: 1px solid rgba(0,86,133,0.2)!important;text-align: center;word-break: break-all;font-size: .37333rem; line-height:0.64rem;}.smalltable018 table thead th{background:rgba(1,102,155,1)!important; color: #fff;border:1px solid #59649a;}.smalltable018 table tbody tr:nth-child(even) td{background: rgba(199,237,251,0.2)!important;}', // 移动端样式
        htmlString:'<div class="smalltable018"><table><thead><tr><th>尾矿制砂厂</th><th>河南客户项目信息</th></tr></thead><tbody><tr><td>设计产量</td><td>200t/h</td></tr><tr><td>加工原料</td><td>400mm</td></tr><tr><td>成品规格</td><td>0-5、5-10mm</td></tr><tr><td>成品规格</td><td>0-5、5-10mm</td></tr><tr><td>成品规格</td><td>0-5、5-10mm</td></tr><tr><td>成品规格</td><td>0-5、5-10mm</td></tr></tbody></table></div>'
    };
}