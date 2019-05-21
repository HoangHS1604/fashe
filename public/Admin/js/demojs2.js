function hienthi(){
    var txt1=document.getElementById("txtNoiDung");
    var txt2=document.getElementById("kq");
    
    txt2.innerText=txt1.value;
}

function changesize(){
    let h1=document.getElementById("txtHeight").value;
    let w1=document.getElementById("txtWidth").value;

    let square1=document.getElementById("square");
    square1.style.width=w1+"px";
    square1.style.height=h1+"px";
}
function changeback(){
    let square1=document.getElementById("square");
    square1.style.width="600px";
    square1.style.height="600px";
}
function insertText(){
    var txt1=document.getElementById("txtText");
    let square1=document.getElementById("square");
    square1.innerText=txt1.value;
    square1.style.textAlign="center";
    square1.style.lineHeight="600px";

}