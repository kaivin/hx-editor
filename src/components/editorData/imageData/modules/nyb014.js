/*
 * @Author: your name
 * @Date: 2019-12-30 12:29:20
 * @LastEditTime: 2020-06-08 18:50:06
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \hx-editor\src\components\editorData\imageData\modules\nyb014.js
 */ 
export function getHtmlData (){
    return {
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        align:'left', // left(左对齐)|center(居中对齐)|right(右对齐)        
        style:'icon', // icon(图标)|number(数字)|other(其他)
        fileName:'nyb014.js', // 该文件的文件名
        class:'smalltext014',// 用来给js使用添加页面内样式使用
        styleWebCode:'.smalltext014{margin-bottom:30px;position:relative;padding-bottom:20px;max-width:800px;margin-left:auto;margin-right:auto;}.smalltext014:after{content:"";position:absolute;z-index:1;left:0px;right:0px;bottom:0px;top:168px;background:rgb(199,237,251)!important;}.smalltext014 .smalltext014tit{text-align:center;font-size:18px;color:#000;padding:15px 20px;line-height:1;margin-bottom:10px;margin-top:0px !important;}.smalltext014 .smalltext014tit strong{color:rgb(1,102,155)!important; padding-left:15px;margin-left:15px;border-left:1px solid rgb(1,102,155)!important;display:inline-block;text-indent:0px;}.smalltext014 p{position:relative;z-index:2;}.smalltext014 .smalltext014pic{clear:both;display:block;margin:0px 0px 15px 0px !important;padding:0px 20px;text-indent:0px;}.smalltext014 .smalltext014pic img{width:100%;margin-left:0px;}.smalltext014 .smalltext014txt{color:#5a3208;font-size:16px;line-height:30px;padding:5px 0px 5px 31px;background:url(../images/insidestyle/n2561icon01.png) no-repeat left 10px;background-size:20px;margin:0 20px !important;text-indent:0px;}.smalltext014 .smalltext014txt span{color:rgb(1,102,155)!important;}.smalltext014 .smalltext014txt i{color:#fff;font-style:normal;}', // PC端样式
        styleWapCode:'.smalltext014{position:relative;padding-bottom:0.4rem;}.smalltext014:after{content:"";position:absolute;z-index:1;left:0rem;right:0rem;bottom:0rem;top:2.66667rem;background:rgb(199,237,251)!important;}.smalltext014 p{position:relative;z-index:2;}.smalltext014 .smalltext014tit{text-align:center;font-size:0.48rem;color:#000;padding:0.4rem 0.13333rem;line-height:1;margin-bottom:0.13333rem;}.smalltext014 .smalltext014tit strong{color:rgb(1,102,155)!important; padding-left:0.4rem;margin-left:0.4rem;border-left:1px solid rgb(1,102,155)!important;display:inline-block;}.smalltext014 .smalltext014pic{clear:both;display:block;margin:0rem 0rem 0.4rem 0rem;padding:0rem 0.53333rem;}.smalltext014 .smalltext014pic img{width:100%;margin-left:0rem;}.smalltext014 .smalltext014txt{color:#5a3208;font-size:0.4rem;line-height:0.8rem;padding:0.06667rem 0rem 0.06667rem 0.6rem;background:url(../images/insidestyle/n2561icon01.png) no-repeat left 0.29333rem;background-size:0.38667rem;margin-left:0.53333rem!important;margin-right:0.53333rem!important;}.smalltext014 .smalltext014txt span{color:rgb(1,102,155)!important;}.smalltext014 .smalltext014txt i{color:#fff;font-style:normal;}', // 移动端样式
        htmlString:'<div class="smalltext014"><p class="smalltext014tit">VSI制砂机<strong>单独油站+润滑简单</strong></p><p class="smalltext014pic"><img src="https://www.hxjq.cn/images/nopicture01.jpg" alt="VSI制砂机"></p><p class="smalltext014txt"><span>推荐指数：</span>★★★★★</p><p class="smalltext014txt"><span>推荐型号：</span>VSI-7611（60-180t/h）、VSI8518（100-260t/h）</p><p class="smalltext014txt"><span>推荐理由：</span>通用型号，鹅卵石制沙+整形，出料均匀，绿色环保。</p></div>'
    };
}