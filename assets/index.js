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
    obj.currentTime = audio.currentTime;
    obj.id = 0;
    obj.currentSong = obj.allSongs[obj.id].src;
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
  const nextSong = userData.allSongs[userData.id + 1];
  if (nextSong) {
    userData.currentSong = nextSong.src;
    userData.id += 1;
    audio.src = nextSong.src;
    audio.play();
    console.log(userData.currentSong);
  }
}

function previous() {
  if (userData.id > 0) {
    const previousSong = userData.allSongs[userData.id - 1];
    audio.src = previousSong.src;
    userData.currentSong = previousSong.src;
    userData.id = previousSong.id;
    audio.play();
  }
}

// Events

playButton.addEventListener("click", () => {
  play(userData);
});

pauseButton.addEventListener("click", pause);
nextButton.addEventListener("click", next);

previousButton.addEventListener("click", previous);

console.log("Hello");
