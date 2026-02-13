const playListSongs = [
  {
    id: 1,
    artist: "Chike",
    songTitle: "Egwu",
    src: "assets/audio/music1.mp3",
    duration: "2:16",
  },
  {
    id: 2,
    artist: "Conor Maynard",
    songTitle: "Someone You Loved",
    src: "assets/audio/music2.mp3",
    duration: "2:24",
  },
  {
    id: 3,
    artist: "Diamond Platnumz",
    songTitle: "My Baby (Remix)",
    src: "assets/audio/music3.mp3",
    duration: "3:32",
  },
  {
    id: 4,
    artist: "Dido",
    songTitle: "Life For Rent",
    src: "assets/audio/music4.mp3",
    duration: "3:40",
  },
  {
    id: 5,
    artist: "Don Moen",
    songTitle: "I Will Sing",
    src: "assets/audio/music5.mp3",
    duration: "3:47",
  },
  {
    id: 6,
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
  duration: 0,
};

const playButton = document.querySelector(".play");
const pauseButton = document.querySelector(".pause");
const nextButton = document.querySelector(".next");
const previousButton = document.querySelector(".previous");
