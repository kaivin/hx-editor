/*
 * @Author:your name
 * @Date:2019-12-30 12:29:20
 * @LastEditTime:2020-06-08 18:07:42
 * @LastEditors:your name
 * @Description:In User Settings Edit
 * @FilePath:\hx-editor\src\components\editorData\articleData\modules\nyb017.js
 */ 
export function getHtmlData (){
    return {
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        align:'left', // left(左对齐)|center(居中对齐)|right(右对齐)        
        style:'icon', // icon(图标)|number(数字)|other(其他)
        fileName:'nyb018.js', // 该文件的文件名
        class:'smalltxt018',// 用来给js使用添加页面内样式使用
        styleWebCode:'.smalltxt018{clear:both;padding:10px 20px;margin-top:30px;margin-bottom:30px;position:relative;z-index:5;}.smalltxt018:after{content:"";position:absolute;width:80%;height:10px;border-radius:50%;background:rgba(1,102,155,0.7);box-shadow:0px 0px 25px rgba(1,102,155,0.7);z-index:1;left:50%;margin-left:-40%;bottom:2px;}.smalltxt018:before{content:"";position:absolute;background:url(../images/insidestyle/n3620onebg.png) repeat left top rgba(199,237,251,1);background-size:28px;width:100%;height:100%;position:absolute;left:0px;top:0px;z-index:2}.smalltxt018 p{position:relative;padding-left:87px;margin:10px 0px !important;z-index:3;}.smalltxt018 p strong{position:absolute;left:0px;top:0px;}', // PC端样式
        styleWapCode:'.smalltxt018{clear:both;padding:.33333rem;margin-top:.30667rem;margin-bottom:.66667rem;position:relative;z-index:5}.smalltxt018:after{content:"";position:absolute;width:7.26667rem;height:1.09333rem;border-radius:50%;background:rgba(1,102,155,0.7);box-shadow:0rem 0rem 1rem rgba(1,102,155,0.7);z-index:1;left:50%;margin-left:-3.62667rem;bottom:0.1rem}.smalltxt018:before{content:"";position:absolute;background:url(../images/insidestyle/n3620onebg.png) repeat left top rgba(199,237,251,1);background-size:.37333rem;width:100%;height:100%;position:absolute;left:0rem;top:0rem;z-index:2}.smalltxt018 p{position:relative;padding-left:1.93333rem;font-size:.37333rem !important;line-height:.6rem !important;color:#666 !important;margin:.21333rem 0rem !important;z-index:3}.smalltxt018 p strong{position:absolute;left:0rem;top:0rem;color:#333 !important;font-size:.37333rem !important}', // 移动端样式
        htmlString:'<div class="smalltxt018"><p><strong>项目名称：</strong>洛阳河卵石碎石厂</p><p><strong>生产能力：</strong>100t/h</p><p><strong>设备配置：</strong>PE400*600鄂破*2+VSI-8518制砂机+2914型洗砂机+筛分机+输送机</p><p><strong>设备投资：</strong>87万左右。</p><p><strong>成品石料：</strong>0-5mm</p></div>'
    };
}