
export function getHtmlData (){
    return {
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'黄色,粉色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'dynamic', // dynamic(动态)|static(静态)
        align:'center', // left(左对齐)|center(居中对齐)|right(右对齐)        
        style:'other', // icon(图标)|number(数字)|other(其他)
        fileName:'nyb27.js', // 该文件的文件名
        styleWebCode:'.smalltit027 {text-align:center;}.smalltit027 strong {clear:both;display:inline-block;position:relative;padding:0px 20px;background:#eabcbc;background:-webkit-linear-gradient(left, #eabcbc, #ffd765);border-radius:10px;margin:10px;line-height:35px;height:35px;font-weight:normal;}        .smalltit027 strong:after, .smalltit027 strong:before {content:"";width:5px;height:5px;border-radius:50%;position:absolute;background:#ffd765;background:linear-gradient(to right, #eabcbc, #ffd765);background:-webkit-linear-gradient(left, #eabcbc, #ffd765);}.smalltit027 strong:after {top:40px;left:-10px;animation:mov03 10s linear infinite;}.smalltit027 strong:before {top:-10px;right:-10px;animation:mov04 10s linear infinite;}@keyframes mov03 {0%, 100% {top:40px;left:-10px;}  9% {top:-10px;left:-10px;}  50% {top:-10px;left:calc(100% + 5px);}  59% {top:40px;left:calc(100% + 5px);}}@-webkit-keyframes mov03 {0%, 100% {top:40px;left:-10px;}  9% {top:-10px;left:-10px;}  50% {top:-10px;left:calc(100% + 5px);}  59% {top:40px;left:calc(100% + 5px);}}@keyframes mov04 {0%, 100% {top:-10px;right:-10px;}  9% {top:40px;right:-10px;}  50% {top:40px;right:calc(100% + 5px);}  59% {top:-10px;right:calc(100% + 5px);}}@-webkit-keyframes mov04 {0%, 100% {top:-10px;right:-10px;}  9% {top:40px;right:-10px;}  50% {top:40px;right:calc(100% + 5px);}  59% {top:-10px;right:calc(100% + 5px);}}', // PC端样式
        styleWapCode:'.smalltit027{text-align:center;}.smalltit027 strong{clear:both; display:inline-block; position:relative; padding:0rem 0.2rem; background:#eabcbc; background:-webkit-linear-gradient(left, #eabcbc, #ffd765); border-radius:0.13333rem; margin:0.2rem; font-weight:normal;}.smalltit027 strong:after, .smalltit027 strong:before{content:""; width:0.10667rem; height:0.10667rem; border-radius:50%; position:absolute; background:linear-gradient(to right, #eabcbc, #ffd765); background:-webkit-linear-gradient(left, #eabcbc, #ffd765);}.smalltit027 strong:after{top:78px; left:-18px; animation:mov03 10s linear infinite;}.smalltit027 strong:before{top:-18px; right:-18px; animation:mov04 10s linear infinite;}@keyframes mov03{0%, 100%{top:70px;left:-18px;}9%{top:-18px;left:-18px;}50%{top:-18px;left:calc(100% + 10px);}59%{top:70px;left:calc(100% + 10px);}}@-webkit-keyframes mov03{0%, 100%{top:70px;left:-18px;}9%{top:-18px;left:-18px;}50%{top:-18px;left:calc(100% + 10px);}59%{top:70px;left:calc(100% + 10px);}}@keyframes mov04{0%, 100%{top:-18px;right:-18px;}9%{top:70px;right:-18px;}50%{top:70px;right:calc(100% + 10px);}59%{top:-18px;right:calc(100% + 10px);}}@-webkit-keyframes mov04{0%, 100%{top:-18px;right:-18px;}9%{top:70px;right:-18px;}50%{top:70px;right:calc(100% + 10px);}59%{top:-18px;right:calc(100% + 10px);}}', // 移动端样式
        htmlString:'<p class="smalltit027"><strong>标题标题标题标题标题标题</strong></p>'
    };
}