let rotate = 0;

function rotateCircle(step){
    const rond = document.getElementById("circle");
    if (step === 0){
        rotate = 0;}
    else { 
        rotate += step;
    }
    rond.style.transform = "rotate" + "(" + rotate + "deg" + ")";
}

document.getElementById("rotate-add-90").addEventListener("click", function(){
    rotateCircle(90);
})

document.getElementById("rotate-add-45").addEventListener("click", function(){
    rotateCircle(45);
})

document.getElementById("rotate-reset").addEventListener("click", function(){
    rotateCircle(0);
})

document.getElementById("rotate-sub-45").addEventListener("click", function(){
    rotateCircle(-45);
})

document.getElementById("rotate-sub-90").addEventListener("click", function(){
    rotateCircle(-90);
})

