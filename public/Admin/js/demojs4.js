function DemSoFor(){
    var kqfor=document.getElementById("kqFor");
    var so=document.getElementById("txtSo");
    var valso=parseInt(so.value);
    kqfor.innerHTML="";
    for(i=1;i<=valso;i++){
        var divItem=document.createElement("div");
        divItem.innerText=i;
        divItem.style.width="200px";
        divItem.style.height="200px";
        divItem.style.float="left";
        divItem.style.margin="5px"
        // divItem.onclick=function changecolor(event){
        //     var target=event.target;
        //     if(target.style.backgroundColor=="red"){
        //         return target.style.backgroundColor="blue";
        //     } if(target.style.backgroundColor=="blue"){
        //         return target.style.backgroundColor="green";
        //     }if(target.style.backgroundColor=="green"){
        //         return target.style.backgroundColor="white";
        //     }
        //     return target.style.backgroundColor="red";
        // }
        divItem.onclick=function(){
            changecolorEvent(event);
        }

        kqfor.append(divItem);
    }
}
function changecolorEvent(event){
    var target=event.target;//get element have event called this
    if(target.style.backgroundColor=="red"){
        return target.style.backgroundColor="blue";
    } if(target.style.backgroundColor=="blue"){
        return target.style.backgroundColor="green";
    }if(target.style.backgroundColor=="green"){
        return target.style.backgroundColor="white";
    }
    return target.style.backgroundColor="red";
}