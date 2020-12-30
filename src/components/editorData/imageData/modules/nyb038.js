export function getHtmlData (){
    return{
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        align:'center', // left(左对齐)|center(居中对齐)|right(右对齐)        
        style:'other', // icon(图标)|number(数字)|other(其他)
        fileName:'nyb038.js', // 该文件的文件名
        class:'smalltext038',// 用来给js使用添加页面内样式使用
        styleWebCode:'.smalltext038{max-width: 800px;border: 2px solid  rgb(2,143,199);border-radius: 10px;padding: 1px 3.6%;margin: 60px auto 30px;position: relative;box-shadow: 5px 5px 0 rgb(2,143,199);}.smalltext038 .smalltext038sty1{padding: 3px 20px;font-size: 18px;color: #fff !important;font-weight: bold;background: rgba(1,102,155,1);border: 2px solid  rgb(2,143,199);border-radius: 5px;display: table;margin: -24px auto 0 !important;}.smalltext038 img{width: 100%;}', // PC端样式
        styleWapCode:'.smalltext038{border: 0.02667rem solid  rgb(2,143,199);border-radius: 0.13333rem;padding: 1px 3.6%;margin: 0.8rem auto 0.48rem;position: relative;box-shadow: 0.08rem 0.08rem 0 rgb(2,143,199);}.smalltext038 .smalltext038sty1{padding: 0.04rem 0.28rem;color: #fff !important;font-weight: bold;background: rgba(1,102,155,1);border: 0.02667rem solid  rgb(2,143,199);border-radius: 0.08rem;display: table;margin: -0.48rem auto 0 !important;}.smalltext038 img{width: 100%;}', // 移动端样式
        htmlString:'<div class="smalltext038"> <p class="smalltext038sty1">标题标题标题</p> <p><img src="https://www.hxjq.cn/images/nopicture01.jpg" alt=""></p> <p>正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文</p> </div>'
    };
}