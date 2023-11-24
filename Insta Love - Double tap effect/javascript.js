var cont = document.querySelector("#container");
var love = document.querySelector("i");

cont.addEventListener("dblclick", function(){
    love.style.transform = "translate(-50%, -50%) scale(1)";
    love.style.opacity = "1";
    love.style.color = "red";
    love.style.transition = "ease-in 0.3s";

    setTimeout(function(){
        love.style.opacity = "0";
    },1000);
})