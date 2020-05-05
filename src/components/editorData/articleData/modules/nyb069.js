export function getHtmlData (){
    return {
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'蓝色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        fileName:'nyb069.js', // 该文件的文件名
        styleWebCode:'.smalltxt069 p{padding: 0 0 0 32px;margin:0;position:relative;} .smalltxt069 p:before{content:"";width: 22px;height: 22px;background:#97c7f7;border: 6px solid #e4f2ff;border-radius:50%;display:block;position:absolute;left:0;top: 7px;} .smalltxt069 p:after{content:"";width: 2px;background:#97c7f7;position:absolute;left: 10px;top: 15px;bottom: -40px;} .smalltxt069 p:last-child{padding-bottom:0} .smalltxt069 p:last-child:after{display:none}', // PC端样式
        styleWapCode:'.smalltxt069{margin:.4rem 0} .smalltxt069 p{padding:0 0 .2rem .5333125rem;margin:0;position:relative} .smalltxt069 p:before{content:"";width:.29375rem;height:.29375rem;background:#97c7f7;border:.08rem solid #e4f2ff;border-radius:50%;display:block;position:absolute;left:0;top:.29375rem} .smalltxt069 p:after{content:"";width:.0266875rem;background:#97c7f7;position:absolute;left:.1333125rem;top:.4rem;bottom:-.48rem} .smalltxt069 p:last-child{padding-bottom:0} .smalltxt069 p:last-child:after{display:none}', // 移动端样式
        htmlString:'<div class="smalltxt069"><p>型号：SC750</p><p>进料粒度：≤370mm</p><p>生产能力：185-2181t/h</p><p>性能特点：该款设备从外观上来看</p></div>'
    };
}