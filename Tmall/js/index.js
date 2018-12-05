var a1=document.getElementById("content1-ul1");
var a2=a1.getElementsByClassName("content1-li1");
var a3=document.getElementById("content1-bottom");
var a4=a3.getElementsByClassName("content1-inner");      
for(var i=0;i<a2.length;i++)
     { 
     a2[i].index=[i];
     a2[i].onmouseover=function(){
     for(var j=0;j<a2.length;j++)
     {
     a2[j].className="content1-li1";
     a4[j].className="content1-inner";
     }
     this.className="content1-li1 a1";
     a4[this.index].className="content1-inner b2";
     }
     }