const playListSongs = [
  {
    id: 0,
    artist: "Chike",
    songTitle: "Egwu",
    src: "assets/audio/music1.mp3",
    duration: "2:16",
  },
  {
    id: 1,
    artist: "Conor Maynard",
    songTitle: "Someone You Loved",
    src: "assets/audio/music2.mp3",
    duration: "2:24",
  },
  {
    id: 2,
    artist: "Diamond Platnumz",
    songTitle: "My Baby (Remix)",
    src: "assets/audio/music3.mp3",
    duration: "3:32",
  },
  {
    id: 3,
    artist: "Dido",
    songTitle: "Life For Rent",
    src: "assets/audio/music4.mp3",
    duration: "3:40",
  },
  {
    id: 4,
    artist: "Don Moen",
    songTitle: "I Will Sing",
    src: "assets/audio/music5.mp3",
    duration: "3:47",
  },
  {
    id: 5,
    artist: "Ed Sheeran",
    songTitle: "Salt Water",
    src: "assets/audio/music6.mp3",
    duration: "3:59",
  },
];

const userData = {
  allSongs: playListSongs,
  currentSong: null,
  artist: null,
  id: -1,
  currentTime: 0,
};

const playButton = document.querySelector(".play");
const pauseButton = document.querySelector(".pause");
const nextButton = document.querySelector(".next");
const previousButton = document.querySelector(".previous");

const audio = new Audio();

function play(obj) {
  if (obj.currentSong === null) {
    audio.src = obj.allSongs[0].src;
    audio.play();
    obj.currentSong = audio.src;
    obj.currentTime = audio.currentTime;
    obj.id = 0;
  }
  audio.play(obj.currentSong);
}

function pause() {
  if (userData.currentSong !== null) {
    userData.currentTime = audio.currentTime;
    audio.pause();
  }
}

function next() {
  if (userData.currentSong !== null) {
    audio.play(userData.allSongs[userData.id + 1].src);
    return (userData.id += 1);
  }
}

playButton.addEventListener("click", () => {
  play(userData);
});

pauseButton.addEventListener("click", pause);
nextButton.addEventListener("click", next);
