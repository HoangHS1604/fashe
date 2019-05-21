function changecolor(st){
    if(st.style.backgroundColor=="red"){
        return st.style.backgroundColor="blue";
    } if(st.style.backgroundColor=="blue"){
        return st.style.backgroundColor="green";
    }if(st.style.backgroundColor=="green"){
        return st.style.backgroundColor="white";
    }
    return st.style.backgroundColor="red";
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