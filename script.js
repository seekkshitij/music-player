const file = document.querySelector(".file");
const audio = document.querySelector(".audio");
const musicList = [];

file.addEventListener("change", function (e) {
  const music = e.target.files[0];
  console.log(music)
  if (e.target.files[0].type !== "audio/mpeg") {
    alert("Please select mp3 files only !!!")
  };
  const musicUrl = URL.createObjectURL(music);
  musicList.push({ url: musicUrl, name: music.name });
});

const play = document.querySelector(".play");
const seek = document.querySelector(".seeker");
const name = document.querySelector(".name");
const albumArt = document.querySelector(".album-art");
const previous = document.querySelector(".previous");
const next = document.querySelector(".next");


let playCount = 0;
let listCount = 0; 

// PLAY PAUSE LOGIC
play.addEventListener("click", function () {
  if (playCount <= 0) {
    audio.src = musicList[listCount].url;
    name.innerText = musicList[listCount].name;
    albumArt.src = "/html__css_js/music-player/giphy.gif";
    audio.play();
    playCount++;
} else {
    albumArt.src =
      "https://images.unsplash.com/photo-1723924995430-b74c76bbcdfd?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    audio.pause();
    playCount = 0;
  }
  setInterval(() => {
    seek.value = Math.floor(audio.currentTime) * 1000;
  }, 100);
});

// PREVIOUS LOGIC
previous.addEventListener("click",function(){
    if(musicList.length !== 0 && musicList.length >0 ){
        listCount--;
        audio.src = musicList[listCount].url;
        name.innerText = musicList[listCount].name;
        audio.play();
    }else{
        return
    }
});

// NEXT LOGIC
next.addEventListener("click",function(){
    if(musicList.length !== 0 && musicList.length >0 ){
        listCount++;
        audio.src = musicList[listCount].url;
        name.innerText = musicList[listCount].name;
        audio.play();
    }else{
        return
    }
    
})
