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
        color:'黄色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        align:'left', // left(左对齐)|center(居中对齐)|right(右对齐)        
        style:'icon', // icon(图标)|number(数字)|other(其他)
        class:'smalltable004',// 用来给js使用添加页面内样式使用
        fileName:'nyb004.js', // 该文件的文件名
        styleWebCode:'.smalltable004{clear:both; margin:20px 0px;}.smalltable004 table{margin: 0 auto;width: 100%; background: #fff; border-collapse: collapse;}.smalltable004 table tr:nth-child(odd) td{background: rgba(199,237,251,0.5)!important; font-size: 18px; color: #181412;}.smalltable004 table tr td{border:1px solid rgba(0,86,133,0.2)!important;padding: 15px 20px;font-size: 16px;color: #3c3733;line-height: 24px;}@media screen and (max-width: 1600px){.smalltable004{clear:both; margin:26px 0px;}.smalltable004 table tr:nth-child(odd) td{font-size:17px !important;}.smalltable004 table td{font-size:15px !important;padding: 14px 15px !important;}}@media screen and (max-width: 1440px){.smalltable004{clear:both; margin:24px 0px;}.smalltable004 table tr:nth-child(odd) td{font-size:16px !important;}.smalltable004 table td{padding: 12px 15px !important;}}@media screen and (max-width: 1280px){.smalltable004{clear:both; margin:20px 0px;}.smalltable004 table tr:nth-child(odd) td{font-size: 15px !important;}.smalltable004 table td{font-size:14px !important;padding: 10px 15px !important;}}', // PC端样式
        styleWapCode:'  .smalltable004{clear:both;margin: .26667rem 0rem;}.smalltable004 table{margin: 0 auto;width: 100%; background: #fff; border-collapse: collapse;}.smalltable004 table tr:nth-child(odd) td{background: rgba(199,237,251,0.5)!important;font-size: 0.37333rem;color: #181412;}.smalltable004 table tr td{border:1px solid rgba(0,86,133,0.2)!important;padding: 0.15rem 0.26667rem;font-size: 0.32rem;color: #3c3733;text-align: left;}', // 移动端样式
        htmlString:'<div class="smalltable004"><table><tbody><tr><td>给料机</td><td>报价：2000元起</td></tr><tr><td colspan="2">可将大小不同的原料进行简单的筛分，避免造成破碎机堵料，具有作业连续可靠、耐用易维护等特点。</td></tr><tr><td>给料机</td><td>报价：2000元起</td></tr><tr><td colspan="2">可将大小不同的原料进行简单的筛分，避免造成破碎机堵料，具有作业连续可靠、耐用易维护等特点。</td></tr><tr><td>给料机</td><td>报价：2000元起</td></tr><tr><td colspan="2">可将大小不同的原料进行简单的筛分，避免造成破碎机堵料，具有作业连续可靠、耐用易维护等特点。</td></tr></tbody></table></div>'
    };
}