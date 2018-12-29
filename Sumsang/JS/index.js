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