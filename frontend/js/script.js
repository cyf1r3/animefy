console.log("Welcome to Animefy");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('../../res/songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Naruto shippuden opening 14", filePath: "../res/songs/1.mp3", coverPath: "../res/covers/1.jpg"},

    {songName: "Itachi Uchiha-Theme song", filePath: "../res/songs/2.mp3", coverPath: "../res/covers/2.jpg"},

    {songName: "Naruto-Loneliness", filePath: "../res/songs/3.mp3", coverPath: "../res/covers/3.jpg"},

    {songName: "Naruto OST-Confrontment", filePath: "../res/songs/4.mp3", coverPath: "../res/covers/4.jpg"},

    {songName: "Naruto OST-Survival Examination", filePath: "../res/songs/5.mp3", coverPath: "../res/covers/5.jpg"},

    {songName: "Naruto Shippudden OST-Shisui's Theme ", filePath: "../res/songs/6.mp3", coverPath: "../res/covers/6.jpg"},

    {songName: "Naruto OST- Haku and Zabuza's Theme", filePath: "../res/songs/7.mp3", coverPath: "../res/covers/7.jpg"},

    {songName: "Naruto opening song 1", filePath: "../res/songs/8.mp3", coverPath: "../res/covers/8.jpg"},

    {songName: "Naruto Shippudden OST-Pein's Theme", filePath: "../res/songs/9.mp3", coverPath: "../res/covers/9.jpg"},

    {songName: "Naruto Shippudden OST-Sasuke's Theme", filePath: "../res/songs/10.mp3", coverPath: "../res/covers/10.jpg"},

    {songName: "Naruto Shippudden OST-Hebi and Taka", filePath: "../res/songs/11.mp3", coverPath: "../res/covers/1.jpg"},

    {songName: "Naruto OST-Sasuke's Theme", filePath: "../res/songs/12.mp3", coverPath: "../res/covers/2.jpg"},

    {songName: "Naruto Shippuden OST 3 Track 04", filePath: "../res/songs/13.mp3", coverPath: "../res/covers/3.jpg"},

    {songName: "Naruto Shippuden OST I-Man of the World", filePath: "../res/songs/14.mp3", coverPath: "../res/covers/4.jpg"},
]

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})
 

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `../res/songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

/*
document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=14){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `../../res/songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})
*/

document.getElementById('next').addEventListener('click', ()=>{
    //audioElement.src = `../res/songs/${songIndex}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime += 10;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `../res/songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})