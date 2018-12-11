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
var c1=document.getElementById("slide-box");
var c2=c1.getElementsByClassName("active");
var c3=document.getElementById("img-box");
var c4=c3.getElementsByClassName("selected");
for(var i=0;i<c4.length;i++)
{
     c4[i].index=i;
     c4[i].onmouseover=function(){
     for(var j=0;j<c4.length;j++)
     {
      c2[j].className="";
      c4[j].className="";
     }
     this.className="active";
     c4[this.index].className="selected";
     }
}