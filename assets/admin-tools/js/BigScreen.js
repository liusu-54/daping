//标题特效
/*var ph=document.getElementById("title");
var otime=null;
var num=-300;
function tomove(){

    otime=setInterval(function (){
        num+=10;
        if(num==1100)
        {
            num=-300;
            clearInterval(otime);
        }
        ph.style.backgroundPosition=num+"px 0px";

    },50)
}
tomove();
setInterval(function(){
    tomove();
},3000);*/

$(function () {
    var windowWidth = document.body.clientWidth;
    if (windowWidth <= 1920) {

    } else if (windowWidth <= 3850 && windowWidth > 1920) {

    } else if (windowWidth <= 7700 && windowWidth > 3840) {

    }
});

