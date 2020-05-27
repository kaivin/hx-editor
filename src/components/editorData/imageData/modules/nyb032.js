export function getHtmlData (){
    return {
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'蓝色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        fileName:'nyb032.js', // 该文件的文件名
        styleWebCode:'.smalltext032{background: #fff;border: 2px solid #105894;border-radius: 10px;padding: 70px 5% 35px;margin: 50px 0 24px;position: relative;box-shadow: 0 17px 20px rgba(16, 88, 148, 0.34);} .smalltext032::before{ content: ""; border: 2px dotted #b0d0eb; border-radius: 10px; position: absolute; left: 16px; right: 16px; bottom: 16px; top: 50px; } .smalltext032 p{margin: 10px 0!important;color: #105894!important;} .smalltext032 .tit{ font-size: 22px; line-height: 33px; color: #fff!important; text-align: center; background: #105894; padding: 12px 15px; margin: 0!important; position: absolute; right: 38px; top: -28px; box-shadow: 0 3px 0 #094475; } .smalltext032 .tit::before,.smalltext032 .tit::after{ content: ""; height: 60px; background-size: 100%; position: absolute; top: 0; } .smalltext032 .tit::before{ width: 31px; background: url(../images/insidestyle/smalltext032-zs.png) center no-repeat; left: -30px; } .smalltext032 .tit::after{ width: 25px; background: url(../images/insidestyle/smalltext032-zs2.png) center no-repeat; right: -24px; }', // PC端样式
        styleWapCode:'.smalltext032{background: #fff;border: 0.02667rem solid #105894;border-radius: 0.2rem;padding: 0.96rem 6% 0.4rem;margin: 1.04rem 0 0.4rem;position: relative;box-shadow: 0 0.2rem 0.26667rem rgba(16, 88, 148, 0.34);} .smalltext032::before{content: "";border: 0.02667rem dotted #b0d0eb;border-radius: 0.2rem;position: absolute;left: 0.24rem;right: 0.24rem;bottom: 0.24rem;top: 0.88rem;} .smalltext032 p{margin: 0.2rem 0!important;color: #105894!important;} .smalltext032 .tit{font-size: .4rem;color: #fff!important;line-height: 1;text-align: center;background: #105894;padding: 0.32rem 0.2rem;margin: 0!important;position: absolute;right: 0.72rem;top: -0.56rem;box-shadow: 0 0.04rem 0 #094475;} .smalltext032 .tit::before,.smalltext032 .tit::after{content: "";height: 1.08rem;background-size: 100% 101%!important;position: absolute;top: 0;} .smalltext032 .tit::before{width: 0.56rem;background: url(../images/insidestyle/smalltext032-zs.png) center no-repeat;left: -0.53333rem;} .smalltext032 .tit::after{width: 0.52rem;background: url(../images/insidestyle/smalltext032-zs2.png) center no-repeat;right: -0.51rem;}', // 移动端样式
        htmlString:'<div class="smalltext032"> <p class="tit">标题标题标题</p> <p>正文正文正文正文正文正文正文正文</p> </div>'
    };
}