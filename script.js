const songs = [
    { title: "Song 1", artist: "Artist 1", url: "honeySingh.mp3" },
    { title: "Song 2", artist: "Artist 2", url: "khalibali.mp3" },
    { title: "Song 3", artist: "Artist 3", url: "On My Way.mp3" },
    { title: "Song 4", artist: "Artist 4", url: "Srivalli.mp3" },
    { title: "Song 5", artist: "Artist 5", url: "faded.mp3" },
    { title: "Song 3", artist: "Artist 3", url: "pedestrians.mp3" },
    { title: "Song 4", artist: "Artist 4", url: "rainbow.mp3" },
    { title: "Song 5", artist: "Artist 5", url: "thehallofearth.mp3" }
];

let currentSongIndex = 0;
let isPlaying = false;

const audioPlayer = document.getElementById('audio-player');
const playPauseBtn = document.getElementById('play-pause');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

function loadSong(index) {
    audioPlayer.src = songs[index].url;
}

function playSong() {
    audioPlayer.play();
    isPlaying = true;
    playPauseBtn.classList.remove('fa-circle-play');
    playPauseBtn.classList.add('fa-circle-pause');
}

function pauseSong() {
    audioPlayer.pause();
    isPlaying = false;
    playPauseBtn.classList.remove('fa-circle-pause');
    playPauseBtn.classList.add('fa-circle-play');
}

function togglePlayPause() {
    if (isPlaying) {
        pauseSong();
    } else {
        playSong();
    }
}

function playNext() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(currentSongIndex);
    playSong();
}

function playPrev() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(currentSongIndex);
    playSong();
}

loadSong(currentSongIndex);

playPauseBtn.addEventListener('click', togglePlayPause);
nextBtn.addEventListener('click', playNext);
prevBtn.addEventListener('click', playPrev);
audioPlayer.addEventListener('ended', playNext);
