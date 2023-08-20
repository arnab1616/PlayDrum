// document.querySelectorAll(".set .drum").addEventListener("click",handleclick);

// function handleclick(){
//     alert("I got clicked")
// }
for(var i=0; i<document.querySelectorAll(".set .drum").length; i++){
    document.querySelectorAll(".set .drum")[i].addEventListener("click",function(){
        var btnhtml = this.innerHTML;
        makesound(btnhtml);
        buttonAnimation(btnhtml);
    });
}
document.addEventListener("keypress", function(event){
    var btnpress= event.key;
   makesound(btnpress);
   buttonAnimation(btnpress);
});
function makesound(key){
    switch(key){
        case "w":
            var audio = new Audio("./sounds/tom-1.mp3");
            audio.play();
        break;
        case "a":
            var audio = new Audio("./sounds/tom-2.mp3");
            audio.play();
        break;
        case "s":
            var audio = new Audio("./sounds/tom-3.mp3");
            audio.play();
        break;
        case "d":
            var audio = new Audio("./sounds/tom-4.mp3");
            audio.play();
        break;
        case "j":
            var audio = new Audio("./sounds/kick-bass.mp3");
            audio.play();
        break;
        case "k":
            var audio = new Audio("./sounds/crash.mp3");
            audio.play();
        break;
        case "l":
            var audio = new Audio("./sounds/snare.mp3");
            audio.play();
        break;
    }
}
function buttonAnimation(curr){
    var activeButton = document.querySelector("."+curr);
    activeButton.classList.add("pressed");
    setTimeout(function(){activeButton.classList.remove("pressed")
},80);
}
