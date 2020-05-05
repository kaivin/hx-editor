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
        color:'蓝色,青色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        align:'left', // left(左对齐)|center(居中对齐)|right(右对齐)        
        style:'icon', // icon(图标)|number(数字)|other(其他)
        fileName:'nyb011.js', // 该文件的文件名
        styleWebCode:'.smalltable011{background:url(../images/insidestyle/smalltableicon007.jpg) repeat-y center top;background-size:100% auto;border-radius:32px;position: relative;box-shadow: 11px 11px 13px rgba(58,75,98,0.08);padding: 0px 50px 25px 50px;margin: 42px auto 30px;}.smalltable011:after{content:"";position: absolute;left:10px;top:10px;right:10px;bottom:10px;border:2px solid #fff;border-radius:32px;}.smalltable011 .smalltable011top{clear: both;text-align: center;position: relative;z-index: 2;margin: 0px!important;}.smalltable011 .smalltable011top span{font-size: 24px; color: #f7a837; background: #353e4d; line-height: 40px; padding:10px 30px; position: relative;border-radius:0px 0px 26px 26px; font-weight: bold; margin-top:-12px; display: inline-block;}.smalltable011 .smalltable011top span:after,.smalltable011 .smalltable011top span:before{content:"";width:0px;height:0px;position: absolute;border-top:0px; border-bottom:12px solid #686e7a; top:0px;}.smalltable011 .smalltable011top span:before{left:-7px;border-left:7px solid transparent;border-right:0px solid transparent;}.smalltable011 .smalltable011top span:after{right:-7px;border-right:7px solid transparent;border-left:0px solid transparent;}.smalltable011 .smalltable011mid{clear: both;margin-top: 25px;margin-bottom:5px;width: 100%;}.smalltable011 .smalltable011mid table{clear: both; width: 100%; border:0px;border-collapse: collapse;}.smalltable011 .smalltable011mid table thead tr{border-bottom:3px solid #353e4d;}.smalltable011 .smalltable011mid table thead tr th{color:#353e4d;font-size:20px;padding-bottom: 10px;text-align:left;}.smalltable011 .smalltable011mid table thead tr th:last-child{text-align:right;}.smalltable011 .smalltable011mid table thead tr th span{position: relative; margin-right:70px; display: inline-block; background: url(../images/insidestyle/smalltableicon007icon02.png) no-repeat center top; background-size: 100%; padding: 0px 15px 0px 55px; line-height: 30px;}.smalltable011 .smalltable011mid table thead tr th span i{position:absolute;right:-70px;bottom:0rem;background: url(../images/insidestyle/smalltableicon007icon01.png) no-repeat center top;width: 65px;height: 54px;background-size: 100%;}.smalltable011 .smalltable011mid table tbody{padding-top:10px;}.smalltable011 .smalltable011mid table tbody tr{border-bottom:1px solid #a3b5c9;}.smalltable011 .smalltable011mid table tbody tr:first-child td{padding-top:20px;}.smalltable011 .smalltable011mid table tbody tr td{padding:10px 10px 10px 10px;text-align:left;font-size: 18px;line-height: 30px;color: #5c6c89;word-break: break-word;}.smalltable011 .smalltable011mid table tbody tr td:last-child{text-align:center!important;}.smalltable011 .smalltable011bom{clear: both;color: #353e4d;}.smalltable011 .smalltable011bom p{font-size: 18px;line-height: 48px;color: #353e4d;margin: 20px 0px;}.smalltable011 .smalltable011bom p a{background: #f7a837; font-size: 20px; font-weight: bold; border-radius:15px; display: inline-block; margin:0px 10px; padding:0px 15px;}.smalltable011 .smalltable011bom p a:hover{background: #c00; color: #fff;}@media screen and (max-width: 1600px){.smalltable011{padding: 0px 40px 25px 40px;border-radius: 28px;margin: 38px 0px 26px 0px;}.smalltable011:after{border-radius: 26px;left: 8px;top: 8px;right: 8px;bottom: 8px;}.smalltable011 .smalltable011top span{font-size: 22px;line-height: 35px;padding:10px 30px;border-radius: 0px 0px 24px 24px;}.smalltable011 .smalltable011mid table thead tr th{font-size: 18px;padding-bottom: 5px;}.smalltable011 .smalltable011mid table thead tr th span{margin-right: 50px;padding: 0px 15px 0px 45px;}.smalltable011 .smalltable011mid table thead tr th span i{right: -55px;width: 50px;height: 41px;}.smalltable011 .smalltable011mid table tbody tr td{padding: 8px;font-size: 16px;line-height: 26px;}.smalltable011 .smalltable011mid table tbody tr:first-child td{padding-top:20px;}.smalltable011 .smalltable011bom p{font-size: 16px;line-height: 38px;margin: 15px 0px;}.smalltable011 .smalltable011bom p a{border-radius: 12px;font-size: 18px;padding: 0px 10px;}}@media screen and (max-width: 1440px){.smalltable011{padding: 0px 30px 15px 30px;border-radius: 24px;margin: 36px 0px 24px 0px;}.smalltable011:after{border-radius: 24px;left: 6px;top: 6px;right: 6px;bottom: 6px;}.smalltable011 .smalltable011top span{font-size: 20px;line-height: 30px;border-radius: 0px 0px 20px 20px;}.smalltable011 .smalltable011mid table thead tr th{font-size: 16px;padding-bottom: 5px;}.smalltable011 .smalltable011mid table thead tr th span{margin-right: 41px;padding: 0px 8px 0px 37px;}.smalltable011 .smalltable011mid table thead tr th span i{right: -44px;width: 45px;height: 38px;}.smalltable011 .smalltable011mid table tbody tr td{padding: 8px;font-size: 15px;}.smalltable011 .smalltable011mid table tbody tr:first-child td{padding-top:20px;}.smalltable011 .smalltable011bom p{line-height: 35px;font-size: 15px;}.smalltable011 .smalltable011bom p a{border-radius: 10px;padding: 0px 8px;font-size: 16px;}}@media screen and (max-width: 1280px){.smalltable011{padding: 0px 20px 15px 20px;border-radius: 20px;margin: 32px 0px 20px 0px;}.smalltable011:after{border-radius: 20px;left: 4px;top: 4px;right: 4px;bottom: 4px;}.smalltable011 .smalltable011top span{font-size: 18px;line-height: 26px;padding:10px 30px;border-radius: 0px 0px 16px 16px;}.smalltable011 .smalltable011mid table thead tr th{font-size: 15px;padding-bottom: 5px;}.smalltable011 .smalltable011mid table thead tr th span{margin-right: 40px;padding: 0px 9px 0px 37px;}.smalltable011 .smalltable011mid table thead tr th span i{right: -40px;width: 40px;height: 34px;}.smalltable011 .smalltable011mid table tbody tr td{padding: 5px;}.smalltable011 .smalltable011mid table tbody tr td:last-child{text-align:center!important;font-weight:bold; color: #d71f1f;}.smalltable011 .smalltable011mid table tbody tr:first-child td{padding-top: 10px;}.smalltable011 .smalltable011bom p{line-height: 30px;font-size: 14px;}.smalltable011 .smalltable011bom p a{border-radius: 5px;padding: 0px 5px;font-size: 14px;}}', // PC端样式
        styleWapCode:'.smalltable011{background:url(../images/insidestyle/smalltableicon007.jpg) repeat-y center top;background-size:100% auto;border-radius:.42667rem;position:relative;box-shadow:.14667rem .14667rem .17333rem rgba(58,75,98,0.08);padding:0rem .4rem .33333rem .4rem;margin:.56rem auto .4rem}.smalltable011:after{content:"";position:absolute;left:.13333rem;top:.13333rem;right:.13333rem;bottom:.13333rem;border:2px solid #fff;border-radius:.42667rem}.smalltable011 .smalltable011top{clear:both;text-align:center;position:relative;z-index:2;margin:0px !important}.smalltable011 .smalltable011top span{font-size:.4rem;color:#f7a837;background:#353e4d;line-height:.53333rem;padding:.2rem .26667rem;position:relative;border-radius:0rem 0rem .34667rem .34667rem;font-weight:bold;margin-top:-.16rem;display:inline-block}.smalltable011 .smalltable011top span:after,.smalltable011 .smalltable011top span:before{content:"";width:0px;height:0px;position:absolute;border-top:0px;border-bottom:.16rem solid #686e7a;top:0px}.smalltable011 .smalltable011top span:before{left:-.09333rem;border-left:.09333rem solid transparent;border-right:0px solid transparent}.smalltable011 .smalltable011top span:after{right:-.09333rem;border-right:.09333rem solid transparent;border-left:0px solid transparent}.smalltable011 .smalltable011mid{clear:both;margin-top:.4rem;width:100%}.smalltable011 .smalltable011mid table{clear:both;width:100%;border:0px;border-collapse:collapse}.smalltable011 .smalltable011mid table thead tr{border-bottom:3px solid #353e4d}.smalltable011 .smalltable011mid table thead tr th{color:#353e4d;font-size:.37333rem;padding-bottom:.13333rem;text-align:left}.smalltable011 .smalltable011mid table thead tr th:last-child{text-align:right}.smalltable011 .smalltable011mid table thead tr th span{position:relative;display:inline-block;line-height:.4rem}.smalltable011 .smalltable011mid table tbody{padding-top:.13333rem}.smalltable011 .smalltable011mid table tbody tr{border-bottom:1px solid #a3b5c9}.smalltable011 .smalltable011mid table tbody tr:first-child td{padding-top:.26667rem}.smalltable011 .smalltable011mid table tbody tr td{padding:.2rem .13333rem;text-align:left;font-size:.37333rem;line-height:.53333rem;color:#5c6c89;word-break:break-word}.smalltable011 .smalltable011mid table tbody tr td:last-child{text-align:center!important;font-weight:bold; color: #d71f1f;}.smalltable011 .smalltable011bom{clear:both;color:#353e4d}.smalltable011 .smalltable011bom p{color:#353e4d;margin:.4rem 0rem;font-size:.37333rem;line-height:.8rem}.smalltable011 .smalltable011bom p a{background:#f7a837;font-weight:bold;border-radius:.2rem;display:inline-block;margin:0rem .13333rem;padding:0rem .2rem}.smalltable011 .smalltable011bom p a:hover{background:#c00;color:#fff}', // 移动端样式
        htmlString:'<div class="smalltable011"><p class="smalltable011top"><span>300吨全套破石子机配制机器报价单</span></p><div class="smalltable011mid"><table><thead><tr><th>设备</th><th>进料粒度</th><th>处理能力</th><th><span>参考价格<i></i></span></th></tr></thead><tbody><tr><td>HX938F1210</td><td>HX938F1210</td><td>HX938F1210</td><td>HX938F1210</td></tr><tr><td>12000</td><td>12000</td><td>12000</td><td>12000</td></tr><tr><td>2550</td><td>2550</td><td>2550</td><td>2550</td></tr><tr><td>3900</td><td>3900</td><td>3900</td><td>3900</td></tr><tr><td>12500</td><td>12500</td><td>12500</td><td>12500</td></tr><tr><td>ZSW950×3800</td><td>ZSW950×3800</td><td>ZSW950×3800</td><td>ZSW950×3800</td></tr></tbody></table></div><div class="smalltable011bom"><p>具体日产300吨全套破石子机配制机器多少钱，还要看厂家给你的具体设备配置。如您想获取整套日产300吨破石子机生产线报价，请点击<a href="#">免费咨询获取！</a></p></div></div>'
    };
}