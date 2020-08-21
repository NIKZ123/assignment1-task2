const background = document.querySelector('#background');
const thumbnail = document.querySelector('#thumb1');  
const song = document.querySelector('#mySong1'); 

const songArtist = document.querySelector('.singer'); 
const songTitle = document.querySelector('.song-name'); 
const progressBar = document.querySelector('#progress-bar'); 
let pPause = document.querySelector('#play-pause'); 

songIndex = 0;
songs = ['./assets/songs/1.mp3', './assets/songs/2.mp3', './assets/songs/3.mp3', './assets/songs/4.mp3', './assets/songs/5.mp3', './assets/songs/6.mp3']; 
thumbnails = ['./assets/1.jpg', './assets/2.jpg', './assets/3.jpg', './assets/4.jpg', './assets/5.jpg', './assets/6.jpg'];
songArtists = ['Artist 1', 'Artist 2', 'Artist 3', 'Artist 4', 'Artist 5', 'Artist 6']; 
songTitles = ["Trending Songs", "Music", "K-Pop", "Mood Songs", "Party", "Local Hub"];


let play = true;
function playbutton() {
    if (play) {
        const song = document.querySelector('#mySong1'),
        thumbnail = document.querySelector('#thumb1');

        pPause.src = "./assets/pause.png"
        thumbnail.style.transform = "scale(1.15)";
        
        song.play();
        play = false;
    } else {
        pPause.src = "./assets/play.png"
        thumbnail.style.transform = "scale(1)"
        
        song.pause();
        play = true;
    }
}
song.addEventListener('ended', function(){
  nextSong();
});

 
function nextSong() {
  songIndex++;
  if (songIndex > 1) {
      songIndex = 0;
  };
  song.src = songs[songIndex];
  thumbnail.src = thumbnails[songIndex];
  background.src = thumbnails[songIndex];

  songArtist.innerHTML = songArtists[songIndex];
  songTitle.innerHTML = songTitles[songIndex];

  play = true;
  playbutton();
}

function previousSong() {
  songIndex--;
  if (songIndex < 0) {
      songIndex = 1;
  };
  song.src = songs[songIndex];
  thumbnail.src = thumbnails[songIndex];
  background.src = thumbnails[songIndex];

  songArtist.innerHTML = songArtists[songIndex];
  songTitle.innerHTML = songTitles[songIndex];

  playing = true;
  playPause();
}

function updateProgressValue() {
  progressBar.max = song.duration;
  progressBar.value = song.currentTime;
  document.querySelector('.currentTime').innerHTML = (formatTime(Math.floor(song.currentTime)));
  if (document.querySelector('.durationTime').innerHTML === "NaN:NaN") {
      document.querySelector('.durationTime').innerHTML = "0:00";
  } else {
      document.querySelector('.durationTime').innerHTML = (formatTime(Math.floor(song.duration)));
  }
};


function formatTime(seconds) {
  let min = Math.floor((seconds / 60));
  let sec = Math.floor(seconds - (min * 60));
  if (sec < 10){ 
      sec  = `0${sec}`;
  };
  return `${min}:${sec}`;
};


setInterval(updateProgressValue, 500);


function changeProgressBar() {
  song.currentTime = progressBar.value;
};