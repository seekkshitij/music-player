const file = document.querySelector(".file");
const audio = document.querySelector(".audio");
const musicList =[];


file.addEventListener("change",function(e){
    const music = e.target.files[0]
    if(!music) return;
    const musicUrl = URL.createObjectURL(music); 
    musicList.push(musicUrl);
    audio.src = musicList[0];
})


const play = document.querySelector(".play");
const seek = document.querySelector(".seeker")
let playCount = 0;
play.addEventListener("click",function(){
    if(playCount<=0){
        audio.play();
        playCount++;
    }else{
        audio.pause();
        playCount=0;
    }
    setInterval(() => {
        seek.value = Math.floor(audio.currentTime)*1000; 
    }, 100);
});