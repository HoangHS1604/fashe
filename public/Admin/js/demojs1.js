// document.writeln("<h1>Bon jour Cat Hitler</h1>");
// var: keyword dung de khai bao 1 bien
// var x=document.getElementById("d");
// x.innerText="Bon jour Cat Hitler";
//su dung ham log cua console de hien thi
//console.log("Bonjour Cat Hitler")
// var a=10;//khai bao 1 bien a  co gia tri la 10
// console.log(typeof(a));
// document.writeln(typeof(a));
// var b="Hitler";
// console.log(typeof(b));
// b=5.5;
// console.log(typeof(b));
// a=10;
// b=4;
// c=a+b;
// console.log("a + b = " + c);
// d=0;
// e=1024;
// console.log("a/d = " + a/d);
// console.log("Infinity/Infinity = " +(a/d/(a/d)));
let z = document.getElementById("d");
// let m = document.createElement("h2");
// let n = document.createElement("h2");
// m.innerText="Van minh như đất nước Nga"
// n.innerText="Người ta cũng phải đi ra đi vào "
// let o = document.createElement("h2");
// o.innerText="Lạc hậu như đất nước Lào "
// let p = document.createElement("h2");
// p.innerText="Người ta cũng phải đi vào đi ra"
// let br1 = document.createElement("br")
// let br2 = document.createElement("br")
// let br3 = document.createElement("br")
// z.append(m)
// z.append(br1)
// z.append(n)
// z.append(o)
// z.append(p)

// z.style.color="red"
// "red"
// z.style.fontSize="12px"
// z.onmouseover=changeBlue;
// z.onmouseout=changeBack;
// function changeBlue(){
//     document.getElementById("d").style.color="blue"
// }
// function changeBack(){
//     document.getElementById("d").style.color="red"
// }

// function showmsg(nd) {
//     console.log(nd);
// }
// showmsg("hello");
// showmsg("huy");


function cong(n1,n2){
   var n = n1+n2;
    return n;
}
var a=30,b=6;
c=cong(a,b);
console.log(c);

function tru(n1,n2){
    var n = n1-n2;
    return n;
}
c=tru(a,b);
console.log(c);
function nhan(n1,n2){
    var n = n1*n2;
    return n;
}
c=nhan(a,b);
console.log(c);
function chia(n1,n2){
    if(n2==0){
        return "Divided by 0";
    }
    var n=n1/n2;
    return n;
}
c=chia(a,b);
console.log(c);
function tinhtong(){
    var s1=document.getElementById("InputSo1");
    var s2=document.getElementById("InputSo2");
    gt1=parseFloat(s1.value);
    gt2=parseFloat(s2.value);

    
    var rs=document.getElementById("lblKetQua");
    rs.innerText=cong(gt1,gt2);

}

function tinhtru(){
    var s1=document.getElementById("InputSo1");
    var s2=document.getElementById("InputSo2");
    gt1=parseFloat(s1.value);
    gt2=parseFloat(s2.value);

    
    var rs=document.getElementById("lblKetQua");
    rs.innerText=tru(gt1,gt2);
}
function tinhnhan(){
    var s1=document.getElementById("InputSo1");
    var s2=document.getElementById("InputSo2");
    gt1=parseFloat(s1.value);
    gt2=parseFloat(s2.value);

    
    var rs=document.getElementById("lblKetQua");
    rs.innerText=nhan(gt1,gt2);
}
function tinhchia(){
    var s1=document.getElementById("InputSo1");
    var s2=document.getElementById("InputSo2");
    gt1=parseFloat(s1.value);
    gt2=parseFloat(s2.value);

    
    var rs=document.getElementById("lblKetQua");
    rs.innerText=chia(gt1,gt2);
}

function hienthi(){
    var txt1=document.getElementById("txtNoiDung");
    var txt2=document.getElementById("kq");
    
    txt2.innerText=txt.value;
}

