function addNum(){
    var tnumber=document.getElementById("txtNumber");
    var kq=document.getElementById("kqsl");
    
    var divItem=document.createElement("div");
        divItem.innerText=tnumber.value;
        divItem.style.width="auto";
        divItem.style.height="20px";
        divItem.style.float="left";
        divItem.style.margin="5px"
        divItem.style.border="2px solid black"
        divItem.style.cursor="pointer"
        divItem.onclick=function(){
            if(checkEven(event)){
                divItem.remove();
            }
        }
        kq.append(divItem);
        tnumber.value="";
}
function checkEven(event){
    var target=event.target;
    nnumber=parseInt(target.innerText);
    if(nnumber%2==0){
        return true;
    }else return false;
}