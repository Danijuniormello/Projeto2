const musicPlayer = document.getElementById('music-player');
const playButton = document.getElementById('play-button');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');

const songs = ['musica1.mp3', 'musica2.mp3', 'musica3.mp3']; // Coloque o nome das suas músicas aqui
let currentSongIndex = 0;

function playPause() {
    if (musicPlayer.paused) {
        musicPlayer.play();
        playButton.textContent = 'Pausar';
    } else {
        musicPlayer.pause();
        playButton.textContent = 'Play';
    }
}

function playNext() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    musicPlayer.src = `radiomp3/${songs[currentSongIndex]}`;
    musicPlayer.play();
}

function playPrev() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    musicPlayer.src = `radiomp3/${songs[currentSongIndex]}`;
    musicPlayer.play();
}

playButton.addEventListener('click', playPause);
nextButton.addEventListener('click', playNext);
prevButton.addEventListener('click', playPrev);
