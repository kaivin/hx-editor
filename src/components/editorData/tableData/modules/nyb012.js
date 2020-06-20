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
        class:'smalltable012',// 用来给js使用添加页面内样式使用
        fileName:'nyb012.js', // 该文件的文件名
        styleWebCode:'.smalltable012{ clear: both; display: block; margin:30px 0px;}.smalltable012 table{width: 100%;border-collapse: collapse;border: 0px;background: #fff;}.smalltable012 table td{padding: 10px 0px;border:1px solid rgba(0,86,133,0.2)!important;text-align: center;word-break: break-all; font-size: 16px;}.smalltable012 table tr:nth-child(odd) td{background:rgba(199,237,251,0.2);}.smalltable012 table tr td:first-child{background: rgb(1,102,155);background: -o-linear-gradient(left, rgb(1,102,155), rgb(2,143,199));background: -webkit-gradient(linear, left top, right top, from(rgb(1,102,155)), to(rgb(2,143,199)));background: linear-gradient(to right, rgb(1,102,155), rgb(2,143,199)); color: #fff; border-bottom:1px solid rgba(0,86,133,0.2)!important;}.smalltable012 table tr:last-child td:first-child{border-bottom:1px solid rgba(0,86,133,0.2)!important;}@media screen and (max-width: 1600px){.smalltable012{clear:both; margin:26px 0px;}.smalltable012 table td{font-size:15px !important;padding: 14px 15px !important;}}@media screen and (max-width: 1440px){.smalltable012{clear:both; margin:24px 0px;}.smalltable012 table td{padding: 12px 15px !important;}}@media screen and (max-width: 1280px){.smalltable012{clear:both; margin:20px 0px;}.smalltable012 table td{font-size:14px !important;padding: 10px 15px !important;}}', // PC端样式
        styleWapCode:'.smalltable012{ clear: both; display: block; margin: .33333rem 0rem;}.smalltable012 table{width: 100%;border-collapse: collapse;border: 0px;background: #fff;}.smalltable012 table td{padding:0.133333rem 0.13333rem;border:1px solid rgba(0,86,133,0.2)!important;text-align: center;word-break: break-all;font-size: .37333rem; line-height:0.64rem;}.smalltable012 table tr:nth-child(odd) td{background:rgba(199,237,251,0.2);}.smalltable012 table tr td:first-child{background: rgb(1,102,155);background: -o-linear-gradient(left, rgb(1,102,155), rgb(2,143,199));background: -webkit-gradient(linear, left top, right top, from(rgb(1,102,155)), to(rgb(2,143,199)));background: linear-gradient(to right, rgb(1,102,155), rgb(2,143,199)); color: #fff; border-bottom:1px solid rgba(0,86,133,0.2)!important;}.smalltable012 table tr:last-child td:first-child{border-bottom:1px solid rgba(0,86,133,0.2)!important;} ', // 移动端样式
        htmlString:'<div class="smalltable012"><table><tr><td>型号</td><td>HX938F1210</td><td>HX938F1210</td><td>HX938F1210</td><td>HX938F1210</td></tr><tr><td>运输长度（mm）</td><td>12000</td><td>12000</td><td>12000</td><td>12000</td></tr><tr><td>运输宽度（mm）</td><td>2550</td><td>2550</td><td>2550</td><td>2550</td></tr><tr><td>运输高度（mm）</td><td>3900</td><td>3900</td><td>3900</td><td>3900</td></tr><tr><td>最大长度（mm）</td><td>12500</td><td>12500</td><td>12500</td><td>12500</td></tr><tr><td>处理量（t/h）</td><td>ZSW950×3800</td><td>ZSW950×3800</td><td>ZSW950×3800</td><td>ZSW950×3800</td></tr></table></div>'
    };
}