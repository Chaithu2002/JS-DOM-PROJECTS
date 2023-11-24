var btn = document.querySelector("button");
var sta = document.querySelector("h5");

var flag = 0;

btn.addEventListener("click",function(){

    if(flag === 0){
        sta.innerHTML = "Friends";
        sta.style.color = "green";
        btn.style.backgroundColor = "white";
        btn.style.color = "red";
        btn.innerHTML = "Remove";
        flag = 1;
        
    }
    else{
        sta.innerHTML = "Stranger";
        sta.style.color = "red";
        btn.style.backgroundColor = "green";
        btn.style.color = "white";
        btn.innerHTML = "Add Friend";
        flag = 0;
    }


});