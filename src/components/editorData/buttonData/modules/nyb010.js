/*
 * @Author: your name
 * @Date: 2020-06-01 16:09:29
 * @LastEditTime: 2020-06-08 18:21:23
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \hx-editor\src\components\editorData\buttonData\modules\nyb010.js
 */ 

export function getHtmlData (){
    return{
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'橙色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        align:'center', // left(左对齐)|center(居中对齐)|right(右对齐)        
        style:'other', // icon(图标)|number(数字)|other(其他)
        fileName:'nyb010.js', // 该文件的文件名
        class:'smallbtn010',// 用来给js使用添加页面内样式使用
        styleWebCode:'.smallbtn010{width: 722px; height: 165px; background: url(../images/insidestyle/smallbtn010-pic.png) center no-repeat!important; background-size: 100%!important; margin: 0 auto; padding: 33px 55px 0 215px; text-align: center; display:block; }.smallbtn010 strong{ font-size: 30px; line-height: 1; color: #f05f08; display: block; margin-bottom: 16px; }.smallbtn010 span{ font-size: 24px; color: #f04832; line-height: 33px; background: #feebdf; border-radius: 10px; padding: 0 14px; display: inline-block; } @media (max-width: 1600px){ .smallbtn010{ width: 555px; padding: 42px 50px 0 170px; }.smallbtn010 strong{ font-size: 22px; margin-bottom: 12px; }.smallbtn010 span{ font-size: 18px; line-height: 30px; } }', // PC端样式
        styleWapCode:'.smallbtn010{width: 100%;height: 2.08rem;background: url(../images/insidestyle/smallbtn010-pic.png) center no-repeat!important;background-size: 100%!important;margin: 0 auto;padding: 0.44rem 0.48rem 0 2.64rem;text-align: center; display:block;}.smallbtn010 strong{font-size: 0.37333rem; line-height: 1; color: #f05f08;display: block;margin-bottom: 0.15rem;}.smallbtn010 span{font-size: 0.32rem;color: #f04832;line-height: 0.48rem;background: #feebdf;border-radius: 0.12rem;padding: 0 0.2rem;display: inline-block;}', // 移动端样式
        htmlString:'<a class="smallbtn010"><strong>现在拨打电话：0371-67772626</strong> <span>获取千元到万元不等优惠报价</span> </a>'
    };
}