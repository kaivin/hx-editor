/*
 * @Author: your name
 * @Date: 2020-05-12 15:44:59
 * @LastEditTime: 2020-06-08 18:19:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \hx-editor\src\components\editorData\articleData\modules\nyb071.js
 */ 
export function getHtmlData (){
    return {
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'蓝色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        fileName:'nyb071.js', // 该文件的文件名
        class:'smalltxt071',// 用来给js使用添加页面内样式使用
        styleWebCode:'.smalltxt071{background: #f7fcff;border-radius: 20px;padding: 10px 84px;margin: 24px 0;box-shadow: 0 0 5px rgba(1, 86, 133, 0.2);} .smalltxt071 p{line-height: 30px!important;text-indent: 0!important;} .smalltxt071 p span{text-align: left;padding: 8px 16px;display: inline-block;position: relative;} .smalltxt071 .p_l{text-align: left;} .smalltxt071 .p_l span{color: #005685!important;background: #fff;border: 1px solid #005685;border-radius: 16px 16px 16px 2px;} .smalltxt071 .p_l span::before{ content: ""; width: 41px; height: 41px; background: url(../images/insidestyle/smalltxt071-tx01.png) center no-repeat; display: block; position: absolute; left: -55px; top: 2px; } .smalltxt071 .p_r{text-align: right;} .smalltxt071 .p_r span{color: #fff!important;background: #005685;border: 1px solid #005685;border-radius: 16px 16px 2px 16px;} .smalltxt071 .p_r span::before{ content: ""; width: 41px; height: 41px; background: url(../images/insidestyle/smalltxt071-tx02.png) center no-repeat; display: block; position: absolute; right: -55px; top: 2px; } ', // PC端样式
        styleWapCode:'.smalltxt071{background: #f7fcff;border-radius: 0.28rem;padding: 0.12rem 1.4rem;margin: .4rem 0;box-shadow: 0 0 0.08rem rgba(1, 86, 133, 0.2);} .smalltxt071 p{line-height: 1.8!important;text-indent: 0!important;} .smalltxt071 p span{text-align: left;padding: 0.10667rem 0.26667rem;display: inline-block;position: relative;} .smalltxt071 .p_l{text-align: left;} .smalltxt071 .p_l span{color: #005685!important;background: #fff;border: 1px solid #005685;border-radius: 0.24rem 0.24rem 0.24rem 0.12rem;} .smalltxt071 .p_l span::before{content: "";width: 0.8rem;height: 0.8rem;background: url(../images/insidestyle/smalltxt071-tx01.png) center no-repeat;background-size: 100%;display: block;position: absolute;left: -1.02667rem;top: 0.09333rem;} .smalltxt071 .p_r{text-align: right;} .smalltxt071 .p_r span{color: #fff!important;background: #005685;border: 1px solid #005685;border-radius: 0.24rem 0.24rem 0.08rem 0.24rem;} .smalltxt071 .p_r span::before{content: "";width: 0.8rem;height: 0.8rem;background: url(../images/insidestyle/smalltxt071-tx02.png) center no-repeat;background-size: 100%;display: block;position: absolute;right: -1.02667rem;top: 0.09333rem;} ', // 移动端样式
        htmlString:'<div class="smalltxt071"> <p class="p_l"><span>你好，我想买一台小型制砂机</span></p> <p class="p_r"><span>有的，请问您需要多大产量</span></p> <p class="p_l"><span>想要一台时产50吨的就行，给我报个价</span></p> <p class="p_r"><span>你好，时产量50吨的小型制砂机类型多</span></p> </div>'
    };
}