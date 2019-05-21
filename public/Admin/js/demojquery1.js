$(document).ready(function(){
    $("#btnShow").click(function(){
        var nd=$("#txtnoidung").val();//get value attribute of input tag
        $("#kq").html(nd);
    })
    $("#btnHienThi").click(function(){
        var w=$("#txtWidth").val();
        var h=$("#txtHeight").val();
        var c=$("#txtColor").val();
        // var item=document.createElement("div");
        // $("#kq").add(item).css({
        //     "width":w+"px",
        //     "height":h+"px",
        //     "background-color":c
        $("#kq").add("<div></div>").css({
            "width":w+"px",
            "height":h+"px",
            "background-color":c
        });
    });
});
