function checkNumber(){
    var tnumber=document.getElementById("txtNumber").value;
    var kqua=document.getElementById("kq");
    nnumber=parseInt(tnumber);
    if(nnumber==0){
        return kqua.innerText="Số nhập vào là số 0";
    }if(nnumber>0){
        return kqua.innerText="Số nhập vào là số dương";
    }if(nnumber<0){
        return kqua.innerText="Số nhập vào là số âm";
    }
    else return kqua.innerText="Nhập vào không phải là số";
}
