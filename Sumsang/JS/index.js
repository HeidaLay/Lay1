var oLi=document.getElementsByClassName("normal");
var oDiv=document.getElementsByClassName("img-box");
for(var i=0;i<oLi.length;i++){
    oLi[i].index=i;
    oLi[i].onclick=function(){
        for(var j=0;j<oDiv.length;j++){
            oLi[j].className="normal";
            oDiv[j].className="img-box";
        }
        this.className="selected normal";
        oDiv[this.index].className="active img-box";
    }
}
// setInterval(function(){
//     for(var k=0;k<oLi.length;k++)
//     {
//         oLi[k].onclick();
//         if(k==oLi.length)
//         {
//             k=0;
//         }
//     }
// },3000)
var Hot_left=document.getElementById("left");
var Hot_right=document.getElementById("right");
var Hot_img_box=document.getElementById("hot-img-box");
var Oimg=Hot_img_box.getElementsByTagName("img");
var Ul_box=document.getElementById("ul-box");
var Hot_li=Ul_box.getElementsByTagName("li");
var iNow=0;
Hot_right.onclick=function(){
   Hot_img_box.style.left=-1220+"px"; 
    for(var k=0;k<Hot_li.length;k++)
    {
        Hot_li[k].className="common";
    }this.className="common changed";
   /* iNow++;
    if(iNow==Hot_li.length)
    {
        iNow==0;
    }
    change(iNow);*/ 
}
Hot_left.onclick=function(){
     Hot_img_box.style.left=0;
     for(var k=0;k<Hot_li.length;k++)
     {
         Hot_li[k].className="common";
     }this.className="changed common";
}
setInterval(function(){
    var i=0;
    Hot_right.onclick();
},5000);
function change(idx){
    for(var k=0;k<Hot_li.length;k++)
    {
        Hot_li[k].className="common";
    }Hot_li[idx].className="common changed";
}
