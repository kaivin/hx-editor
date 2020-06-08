/*
 * @Author: your name
 * @Date: 2019-12-30 12:29:20
 * @LastEditTime: 2020-06-08 18:17:56
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \hx-editor\src\components\editorData\articleData\modules\nyb065.js
 */ 
export function getHtmlData (){
    return {
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'蓝色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        fileName:'nyb065.js', // 该文件的文件名
        class:'smalltxt065',// 用来给js使用添加页面内样式使用
        styleWebCode:'.smalltxt065{background:url(../images/insidestyle/small043.jpg) repeat;border:5px solid #deebf9;border-radius:20px;padding:15px 30px;position:relative;margin-top: 40px!important;z-index:1;}.smalltxt065 i{width: 40px;height: 40px;display:block;border-radius:50%;font-size: 20px;text-align:center;line-height:35px;font-weight:bold;font-style:normal;position:absolute;border: 2px solid #deebf9;left: -15px;top: -15px;background: #fff;color:#3e62a8;z-index:2;}.smalltxt065 i:after{content:"";position:absolute;left:0px;top:0px;right:0px;bottom:0px;border:1px solid #82b3e7;border-radius:50%;}', // PC端样式
        styleWapCode:'.smalltxt065{background:url(../images/insidestyle/small043.jpg) repeat;border:0.06667rem solid #deebf9;border-radius:0.26667rem;padding:0.2rem 0.26667rem 0.2rem 0.4rem;position:relative;z-index:1;margin:0.53333rem 0rem 0.53333rem 0.33333rem;}.smalltxt065:after{content:"";position:absolute;left:0rem;top:0rem;right:0rem;bottom:0rem;border:1px solid #82b3e7;border-radius:0.2rem;}.smalltxt065 i{width:0.8rem;height:0.8rem;display:block;border-radius:50%;font-size:0.46667rem;text-align:center;line-height:0.66667rem;font-weight:bold;font-style:normal;position:absolute;border:0.06667rem solid #deebf9;left:-0.33333rem;top:-0.26667rem;background:url(../images/insidestyle/small043.jpg) repeat;color:#3e62a8;z-index:2;}.smalltxt065 i:after{content:"";position:absolute;left:0px;top:0px;right:0px;bottom:0px;border:1px solid #82b3e7;border-radius:50%;}', // 移动端样式
        htmlString:'<p class="smalltxt065"><i>1</i>正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文</p>'
    };
}