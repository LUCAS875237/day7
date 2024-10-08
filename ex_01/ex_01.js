function reduce_Opacity(){
    document.getElementById("square").style.opacity = 0,5};

function reset_Opacity(){
    document.getElementById("square").style.opacity = 1};

document.getElementById("square").addEventListener("mouseenter", reduce_Opacity);
document.getElementById("square").addEventListener("mouseleave", reset_Opacity);