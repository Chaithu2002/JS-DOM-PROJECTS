var cont = document.querySelectorAll("#container");


cont.forEach(function(val){

    val.addEventListener("mouseenter", function(){
        val.childNodes[3].style.opacity = "1";
    })

    val.addEventListener("mouseleave", function(){
        val.childNodes[3].style.opacity = "0";
    })
})
