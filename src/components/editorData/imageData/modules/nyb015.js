export function getHtmlData (){
    return {
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'红色,紫色,粉色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        fileName:'nyb015.js', // 该文件的文件名
        styleWebCode:'.smalltext015{position:relative;padding:20px 40px 50px 40px;background:#dba6ac;background:linear-gradient(to right, #c69fae, #e4a9ac);background:-webkit-linear-gradient(left, #c69fae, #e4a9ac);max-width:800px;margin-left:auto;margin-right:auto;}.smalltext015:after{content:"";position:absolute;left:15px;right:15px;bottom:15px;top:15px;border:2px solid #701034;background:#fff;}.smalltext015 p{position:relative;z-index:2;}.smalltext015 .smalltext015tit{clear:both;text-align:center;color:#b82730;font-weight:bold;line-height:1;margin:40px 0px 20px 0px !important;font-size:22px;padding:0px 0px 30px 0px;background:url(../images/insidestyle/n2552icon01.jpg) no-repeat center bottom;background-size:220px;}.smalltext015 .smalltext015txt{font-size:16px;line-height:30px;text-align:left;margin:0px 0px 5px 0px !important;color:#5a5a5a;}.smalltext015 .smalltext015pic{box-shadow:0px 0px 10px rgba(80, 0, 5, 0.5);border-radius:15px;overflow:hidden;margin-top:20px;margin-bottom:0px !important;}.smalltext015 .smalltext015pic img{width:100%;}', // PC端样式
        styleWapCode:'.smalltext015{position:relative;padding:0.4rem 0.53333rem 0.66667rem 0.53333rem;background:#dba6ac;background:linear-gradient(to right, #c69fae, #e4a9ac);background:-webkit-linear-gradient(left, #c69fae, #e4a9ac);}.smalltext015:after{content:"";position:absolute;left:0.2rem;right:0.2rem;bottom:0.2rem;top:0.2rem;border:2px solid #701034;background:#fff;}.smalltext015 p{position:relative;z-index:2;}.smalltext015 .smalltext015tit{clear:both;text-align:center;color:#b82730;font-weight:bold;line-height:1;margin:0.4rem 0rem 0.26667rem 0rem;font-size:0.4rem;padding:0rem 0rem 0.46667rem 0rem;background:url(../images/insidestyle/n2552icon01.jpg) no-repeat center bottom;background-size:3.73333rem;}.smalltext015 .smalltext015txt{font-size:0.38667rem;line-height:0.8rem;text-align:left;margin-bottom:0.4rem;color:#5a5a5a;}.smalltext015 .smalltext015pic{box-shadow:0px 0px 0.13333rem rgba(80, 0, 5, 0.5);border-radius:0.2rem;overflow:hidden;}.smalltext015 .smalltext015pic img{width:100%;}', // 移动端样式
        htmlString:'<div class="smalltext015"><p class="smalltext015tit">颚破机反击破组合</p><p class="smalltext015txt">特点：中低硬度石头破碎，成品率高、成品粒型好，在市场上能卖个好价钱。</p><p class="smalltext015pic"><img src="https://www.hxjq.cn/images/nopicture01.jpg" alt=""></p></div>'
    };
}