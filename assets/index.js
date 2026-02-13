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
const songname = document.querySelector(".musicname");
const artist = document.querySelector(".artistname");
const musicButtons = document.querySelectorAll(".music");

const audio = new Audio();

function play(obj) {
  if (obj.currentSong === null) {
    audio.src = obj.allSongs[0].src;
    audio.play();
    obj.currentTime = audio.currentTime;
    obj.id = 0;
    obj.artist = obj.allSongs[obj.id].artist;
    obj.currentSong = obj.allSongs[obj.id].src;
    songname.textContent = obj.allSongs[obj.id].songTitle;
    artist.textContent = obj.artist;
  }
  songname.textContent = obj.allSongs[obj.id].songTitle;
  artist.textContent = obj.artist;
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
    userData.artist = nextSong.artist;
    artist.textContent = userData.artist;
    songname.textContent = nextSong.songTitle;
  }
}

function previous() {
  if (userData.id > 0) {
    const previousSong = userData.allSongs[userData.id - 1];
    audio.src = previousSong.src;
    userData.currentSong = previousSong.src;
    userData.id = previousSong.id;
    audio.play();
    userData.artist = previousSong.artist;
    artist.textContent = userData.artist;
    songname.textContent = previousSong.songTitle;
  }
}

// Events

playButton.addEventListener("click", () => {
  play(userData);
  colorNowPlaying(userData.id);
});

pauseButton.addEventListener("click", pause);
nextButton.addEventListener("click", () => {
  next();
  colorNowPlaying(userData.id);
});

previousButton.addEventListener("click", () => {
  previous();
  colorNowPlaying(userData.id);
});

musicButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const musicElement = button.querySelector("audio");

    userData.currentSong = `assets/audio/${musicElement.getAttribute("src")}`;
    const music = userData.allSongs.find(
      (item) => item.src === userData.currentSong,
    );
    userData.id = music.id;
    userData.artist = music.artist;
    audio.src = userData.currentSong;
    audio.play();
    songname.textContent = music.songTitle;
    artist.textContent = music.artist;
    colorNowPlaying(userData.id);
  });
});

function colorNowPlaying(currentSongId) {
  const allLi = document.querySelectorAll("li");

  allLi.forEach((item) => {
    item
      .querySelectorAll("span")
      .forEach((span) => span.classList.remove("playing"));

    if (Number(item.id) === currentSongId) {
      item
        .querySelectorAll("span")
        .forEach((span) => span.classList.add("playing"));
    }
  });
}
