var modal =document.getElementById("mode");
var bttn = document.getElementById("bttn");

// span element that closes the mode
var span = document.getElementsByClassName("close")[0];

// user clicks, the mode opens
bttn.onclick = function(){
    modal.style.display = "block";
    // alert("working")
}

// user clicks on <span> (x), close the mode
span.onclick = function(){
    modal.style.display = "none";
}

// user clicks anywhere outside the mode, it closes
window.onclick = function(event){
    if (event.target == modal) {
        modal.style.display = "none";
    }
}