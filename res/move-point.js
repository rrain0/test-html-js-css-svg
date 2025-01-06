

const field = document.getElementById("field");
const point = document.getElementById("point");

point.onclick = ev => {
    // do smth if clicked on point

    ev.stopPropagation()
}

field.onclick = ev => {
    const mouseX = ev.offsetX
    const mouseY = ev.offsetY

    //console.log(mouseX)
    //console.log(mouseY)

    const pointSizeX = point.clientWidth
    const pointSizeY = point.clientHeight

    const ptX = mouseX - mouseX%pointSizeX
    const ptY = mouseY - mouseY%pointSizeY

    point.style.left = ptX+"px"
    point.style.top = ptY+"px"
}



/*
function getMouseXInElem(ev){
    return ev.pageX - ev.target.offsetLeft;
}
function getMouseYInElem(ev){
    return ev.pageY - ev.target.offsetTop;
}*/
