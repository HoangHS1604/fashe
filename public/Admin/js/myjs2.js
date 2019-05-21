var content = document.getElementById("dcity");
var text = "<CityList><city>" +
        "<id>1</id>" +
        "<cName>Whiterun</cName>" +
        "</city>" +
        "<city>" +
        "<id>2</id>" +
        "<cName>Solitude</cName>" +
        "</city>" +
        "<city>" +
        "<id>3</id>" +
        "<cName>Winterhold</cName>" +
        "</city></CityList>";
        p = new DOMParser();
    doc = p.parseFromString(text, "text/xml");
    var temp = doc.childNodes[0].children.length;
window.onload = function () {
    var content = document.getElementById("dcity");
var text = "<CityList><city>" +
        "<id>1</id>" +
        "<cName>Whiterun</cName>" +
        "</city>" +
        "<city>" +
        "<id>2</id>" +
        "<cName>Solitude</cName>" +
        "</city>" +
        "<city>" +
        "<id>3</id>" +
        "<cName>Winterhold</cName>" +
        "</city></CityList>";
        p = new DOMParser();
    doc = p.parseFromString(text, "text/xml");
    var temp = doc.childNodes[0].children.length;
    
    // var temp = doc.childNodes[0].childElementCount;
    
    for (i = 0; i < parseInt(temp); i++) {
        var city = doc.childNodes[0].childNodes[i];
        var id = city.childNodes[0].innerHTML;
        var cName = city.childNodes[1].innerHTML;
        var itemCity = document.createElement("option");
        var itemCityName = document.createElement("span");
        itemCityName.innerHTML = cName;
        itemCity.value=id;
        itemCity.append(itemCityName);
        
        content.append(itemCity);
    }
    content.onchange=function(){
        var tid=document.getElementById("tid");
        var tname=document.getElementById("tname");
        
        var dvalue=content.value;
        for (i = 0; i < parseInt(temp); i++) {
            var city = doc.childNodes[0].childNodes[i];
            var id = city.childNodes[0].innerHTML;
            var cName = city.childNodes[1].innerHTML;
            if(dvalue==id){
                tid.innerHTML=id;
                tname.innerHTML=cName;
            }
        }
    
    }
    
}

