var Now=0;
var Last=-1;
$(document).swipeUp(function(){
    Last=Now;
    Now++;
    $(".page").eq(Last).addClass("moveTotop");
    $(".page").eq(Now).removeClass("hide").addClass("moveFromBottom");
    setTimeout(function(){
        $(".page").eq(Now).find("img").removeClass("hide");
    },600)
     /*console.log("1111");*/
})
$(document).swipeDown(function(){
    Now--;
    Last=Now;
    /*$(".page").eq(Last).addClass(); */
    console.log("2222");
})