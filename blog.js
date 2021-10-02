document.getElementById("demo").addEventListener("mouseover", mouseOver);
document.getElementById("demo").addEventListener("mouseout", mouseOut);

function mouseOver() {
  document.getElementById("demo").style.color = "white";
}

function mouseOut() {
  document.getElementById("demo").style.color = "black";
}


function upText(){
    var x = document.createElement("div");
    document.body.appendChild(x);
   
    var holder = document.getElementById("newTxt").value;
    x.innerText = holder

    
}
