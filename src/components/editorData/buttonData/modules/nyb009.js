/*
 * @Author: your name
 * @Date: 2020-05-12 15:44:59
 * @LastEditTime: 2020-06-08 18:21:14
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \hx-editor\src\components\editorData\buttonData\modules\nyb009.js
 */ 

export function getHtmlData (){
    return{
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'蓝色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        align:'center', // left(左对齐)|center(居中对齐)|right(右对齐)        
        style:'other', // icon(图标)|number(数字)|other(其他)
        fileName:'nyb009.js', // 该文件的文件名
        class:'smallbtn009',// 用来给js使用添加页面内样式使用
        styleWebCode:'.smallbtn009{ background-image: linear-gradient(to right, #2481bc, #fff 60%); border-radius: 50px; padding: 7px; margin: 24px auto !important; display: table; position: relative; }.smallbtn009::before{ content: ""; background: #fff; border-radius: 50px; position: absolute; left: 2px; right: 2px; top: 2px; bottom: 2px; }.smallbtn009 a{ font-size: 22px; color: #fff !important; line-height: 1; background-color: #195a9c; background-image: linear-gradient(to right, #227bb7, #195a9c); border-radius: 50px 0 0 50px; padding: 4px 7px; display: block; position: relative; box-shadow: 0 0 5px #123f77; }.smallbtn009 a::before{ content: ""; width: 70px; height: 70px; background: url(../images/insidestyle/smallbtn009-zs2.png) center no-repeat; background-size: 100%; display: inline-block; vertical-align: middle; margin-right: 12px; }.smallbtn009 a::after{ content: ""; width: 58px; height: 78px; background: url(../images/insidestyle/smallbtn009-zs3.jpg) center no-repeat; background-size: 100%; display: block; position: absolute; right: -58px; top: 0; }', // PC端样式
        styleWapCode:'.smallbtn009{ background-image: linear-gradient(to right, #2481bc, #fff 60%); border-radius: 0.66rem; padding: 0.1rem; margin: 0.4rem auto !important; display: table; position: relative; }.smallbtn009::before{ content: ""; background: #fff; border-radius: 0.66rem; position: absolute; left: 0.026667rem; right: 0.026667rem; top: 0.026667rem; bottom: 0.026667rem; }.smallbtn009 a{ font-size: 0.4rem; color: #fff !important; line-height: 1; background-color: #195a9c; background-image: linear-gradient(to right, #227bb7, #195a9c); border-radius: 0.6rem 0 0 0.6rem; padding: 0.06rem 0.1rem; display: block; position: relative; box-shadow: 0 0 0.06667rem #123f77; }.smallbtn009 a::before{ content: ""; width: 1.09333rem; height: 1.09333rem; background: url(../images/insidestyle/smallbtn009-zs2.png) center no-repeat; background-size: 100%; display: inline-block; vertical-align: middle; margin-right: 0.16rem; }.smallbtn009 a::after{ content: ""; width: 0.77333rem; height: 1.21333rem; background: url(../images/insidestyle/smallbtn009-zs3.jpg) center no-repeat; background-size: 100%; display: block; position: absolute; right: -0.77333rem; top: 0; }', // 移动端样式
        htmlString:'<p class="smallbtn009"><a href="#" rel="nofollow">点此咨询现场方案设计</a></p>'
    };
}