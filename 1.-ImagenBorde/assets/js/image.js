flag=false

function mark(add){
    if (flag==false){
        imageBorder=document.getElementById('add')
        imageBorder.style.border="2px solid red"
        flag=true
    }else{
        imageBorder=document.getElementById('add')
        imageBorder.style.border="0px"
        flag=false
    }
}