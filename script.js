const file = document.querySelector(".file");
const audio = document.querySelector(".audio");

file.addEventListener("change",function(e){
    const music = e.target.files[0]
    if(!music) return;
    audio.src = URL.createObjectURL(music);
})


const play = document.querySelector(".play");

play.addEventListener("click",function(){
    audio.play();
});