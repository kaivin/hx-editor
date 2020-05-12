/*
 * @Author: your name
 * @Date: 2020-05-12 15:44:59
 * @LastEditTime: 2020-05-12 15:47:49
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \hx-editor\src\components\editorData\buttonData\modules\nyb008.js
 */

export function getHtmlData (){
    return {
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'蓝色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        align:'center', // left(左对齐)|center(居中对齐)|right(右对齐)        
        style:'other', // icon(图标)|number(数字)|other(其他)
        fileName:'nyb008.js', // 该文件的文件名
        styleWebCode:'.smallbtn008{width: fit-content;background-color: #195a9c;background-image: linear-gradient(to right, #227bb7 , #195a9c);border-radius: 50px;margin: 30px auto!important;position: relative;} .smallbtn008 a{font-size: 22px;line-height: 60px;color: #fff!important;padding: 0 30px 0 100px;display: block;} .smallbtn008 a::before{content: "";border: 2px dashed #2381bc;border-radius: 50px;position: absolute;left: -6px;right: -6px;top: -6px;bottom: -6px;} .smallbtn008 a::after{content: "";width: 120px;height: 120px;background: url(../images/insidestyle/smallbtn008-zs.png) center no-repeat;background-size: 100%;display: block;position: absolute;left: -35px;top: 50%;margin-top: -60px;} ', // PC端样式
        styleWapCode:'.smallbtn008{width: fit-content;background-color: #195a9c;background-image: linear-gradient(to right, #227bb7 , #195a9c);border-radius: 0.53333rem;margin: 0.4rem auto!important;position: relative;} .smallbtn008 a{ font-size: 0.4rem; line-height: 1rem; color: #fff; padding: 0 0.53333rem 0 1.36rem; display: block; } .smallbtn008 a::before{ content: ""; border: 0.026667rem dashed #2381bc; border-radius: 0.6rem; position: absolute; left: -0.10667rem; right: -0.10667rem; top: -0.10667rem; bottom: -0.10667rem; } .smallbtn008 a::after{ content: ""; width: 1.8rem; height: 1.8rem; background: url(../images/insidestyle/smallbtn008-zs.png) center no-repeat; background-size: 100%; display: block; position: absolute; left: -0.64rem; top: 50%; margin-top: -0.9rem; } ', // 移动端样式
        htmlString:'<p class="smallbtn008"><a href="#" rel="nofollow">点此咨询红星工程师</a></p>'
    };
}