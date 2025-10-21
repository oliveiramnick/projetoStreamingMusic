 const songs = [
      {title:"Música Relaxante", artist:"Kevin MacLeod", src:"https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Kevin_MacLeod/Jazz_Sampler/Kevin_MacLeod_-_05_-_Funkorama.mp3", image:"https://via.placeholder.com/50/836FFF/ffffff?text=1"},
      {title:"Som de Ondas", artist:"Scott Buckley", src:"https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Scott_Buckley/Chrysalis/Scott_Buckley_-_01_-_Life_Is.mp3", image:"https://via.placeholder.com/50/836FFF/ffffff?text=2"},
      {title:"Folk Acústico", artist:"Jason Shaw", src:"https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Jason_Shaw/Audionautix_Acoustic/Jason_Shaw_-_RUNNING_WATERS.mp3", image:"https://via.placeholder.com/50/836FFF/ffffff?text=3"},
      {title:"Música Meditativa", artist:"Chris Zabriskie", src:"https://files.freemusicarchive.org/storage-freemusicarchive-org/music/ccCommunity/Chris_Zabriskie/20170303184653743/Chris_Zabriskie_-_05_-_The_Temperature_of_the_Air_on_the_Bow_of_the_Kaleetan.mp3", image:"https://via.placeholder.com/50/836FFF/ffffff?text=4"},
      {title:"Guitarra Calma", artist:"Bensound", src:"https://www.bensound.com/bensound-music/bensound-acousticbreeze.mp3", image:"https://via.placeholder.com/50/836FFF/ffffff?text=5"},
      {title:"Vibes de Jazz", artist:"Benjamin Tissot", src:"https://www.bensound.com/bensound-music/bensound-jazzyfrenchy.mp3", image:"https://via.placeholder.com/50/836FFF/ffffff?text=6"},
      {title:"Épico Cinemático", artist:"Audio Library", src:"https://files.freemusicarchive.org/storage-freemusicarchive-org/music/ccCommunity/Chad_Crouch/Arps/Chad_Crouch_-_Aluminum_Moon.mp3", image:"https://via.placeholder.com/50/836FFF/ffffff?text=7"},
      {title:"Chill Lo-Fi", artist:"Lofi Records", src:"https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Meydan/Havor_6/Meydan_-_06_-_Murmuration.mp3", image:"https://via.placeholder.com/50/836FFF/ffffff?text=8"},
      {title:"Som da Natureza", artist:"Soundscape", src:"https://files.freemusicarchive.org/storage-freemusicarchive-org/music/ccCommunity/Chad_Crouch/Arps/Chad_Crouch_-_Aluminum_Moon.mp3", image:"https://via.placeholder.com/50/836FFF/ffffff?text=9"},
      {title:"Cordas Clássicas", artist:"Mozart Project", src:"https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Steven_O_Brien/Orchestral_epic_music/Steven_O_Brien_-_02_-_Epic_Orchestral_Music.mp3", image:"https://via.placeholder.com/50/836FFF/ffffff?text=10"},
      {title:"Batida Eletrônica", artist:"Synthwave", src:"https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Meydan/Havor_6/Meydan_-_06_-_Murmuration.mp3", image:"https://via.placeholder.com/50/836FFF/ffffff?text=11"},
      {title:"Sonhos Acústicos", artist:"Folk Collective", src:"https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Jason_Shaw/Audionautix_Acoustic/Jason_Shaw_-_RUNNING_WATERS.mp3", image:"https://via.placeholder.com/50/836FFF/ffffff?text=12"},
      {title:"Dia Ensoralado", artist:"Bensound", src:"https://www.bensound.com/bensound-music/bensound-sunny.mp3", image:"https://via.placeholder.com/50/836FFF/ffffff?text=13"},
      {title:"Energia", artist:"Bensound", src:"https://www.bensound.com/bensound-music/bensound-energy.mp3", image:"https://via.placeholder.com/50/836FFF/ffffff?text=14"},
      {title:"Mente Criativa", artist:"Bensound", src:"https://www.bensound.com/bensound-music/bensound-creativeminds.mp3", image:"https://via.placeholder.com/50/836FFF/ffffff?text=15"},
      {title:"Ternura", artist:"Bensound", src:"https://www.bensound.com/bensound-music/bensound-tenderness.mp3", image:"https://via.placeholder.com/50/836FFF/ffffff?text=16"},
      {title:"Piano Sereno", artist:"Kevin MacLeod", src:"https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Kevin_MacLeod/Piano/Piano_Sereno.mp3", image:"https://via.placeholder.com/50/836FFF/ffffff?text=17"},
      {title:"Som da Chuva", artist:"Scott Buckley", src:"https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Scott_Buckley/Rain/Scott_Buckley_-_Rainy_Day.mp3", image:"https://via.placeholder.com/50/836FFF/ffffff?text=18"},
      {title:"Trilha Ambiental", artist:"Chris Zabriskie", src:"https://files.freemusicarchive.org/storage-freemusicarchive-org/music/ccCommunity/Chris_Zabriskie/20170303184653743/Chris_Zabriskie_-_Ambient_Track.mp3", image:"https://via.placeholder.com/50/836FFF/ffffff?text=19"},
      {title:"Guitarra Suave", artist:"Bensound", src:"https://www.bensound.com/bensound-music/bensound-slowmotion.mp3", image:"https://via.placeholder.com/50/836FFF/ffffff?text=20"},
      {title:"Chill Piano", artist:"Kevin MacLeod", src:"https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Kevin_MacLeod/Piano/Chill_Piano.mp3", image:"https://via.placeholder.com/50/836FFF/ffffff?text=21"},
      {title:"Som de Floresta", artist:"Soundscape", src:"https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Soundscape/Forest/Soundscape_-_Forest.mp3", image:"https://via.placeholder.com/50/836FFF/ffffff?text=22"},
      {title:"Céu Noturno", artist:"Bensound", src:"https://www.bensound.com/bensound-music/bensound-darkness.mp3", image:"https://via.placeholder.com/50/836FFF/ffffff?text=23"},
      {title:"Paz Interior", artist:"Chris Zabriskie", src:"https://files.freemusicarchive.org/storage-freemusicarchive-org/music/ccCommunity/Chris_Zabriskie/20170303184653743/Chris_Zabriskie_-_Calm.mp3", image:"https://via.placeholder.com/50/836FFF/ffffff?text=24"},
    ];

    const cardsContainer = document.querySelector('.cards');
    const audioPlayer = new Audio();
    const playBtn = document.getElementById('play-btn');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const currentSongTitle = document.getElementById('current-song-title');
    const currentSongArtist = document.getElementById('current-song-artist');
    const currentSongImage = document.getElementById('current-song-image');
    const progressBar = document.getElementById('progress-bar');
    const progress = document.getElementById('progress');
    const currentTimeEl = document.getElementById('current-time');
    const durationEl = document.getElementById('duration');

    let currentSongIndex = 0;
    let isPlaying = false;

    function createCards() {
      songs.forEach((song, index) => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `<i class="fa-regular fa-star"></i><p>${song.title}</p>`;
        card.addEventListener('click', () => playSong(index));
        cardsContainer.appendChild(card);
      });
    }

    function playSong(index) {
      document.querySelectorAll('.card').forEach(card => card.classList.remove('active'));
      document.querySelectorAll('.card')[index].classList.add('active');

      currentSongIndex = index;
      const song = songs[currentSongIndex];

      audioPlayer.src = song.src;
      currentSongTitle.textContent = song.title;
      currentSongArtist.textContent = song.artist;
      currentSongImage.src = song.image;

      playAudio();
    }

    function playAudio() { audioPlayer.play(); isPlaying = true; playBtn.classList.replace('fa-play','fa-pause'); }
    function pauseAudio() { audioPlayer.pause(); isPlaying = false; playBtn.classList.replace('fa-pause','fa-play'); }
    function updateProgress(e) {
      const { duration, currentTime } = e.srcElement;
      const progressPercent = (currentTime / duration) * 100;
      progress.style.width = `${progressPercent}%`;
      currentTimeEl.textContent = formatTime(currentTime);
      durationEl.textContent = formatTime(duration);
    }
    function setProgress(e) {
      const width = this.clientWidth;
      const clickX = e.offsetX;
      const duration = audioPlayer.duration;
      audioPlayer.currentTime = (clickX / width) * duration;
    }
    function prevSong() { currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length; playSong(currentSongIndex); }
    function nextSong() { currentSongIndex = (currentSongIndex + 1) % songs.length; playSong(currentSongIndex); }
    function formatTime(time) {
      const minutes = Math.floor(time / 60);
      const seconds = Math.floor(time % 60);
      return `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
    }

    playBtn.addEventListener('click', () => isPlaying ? pauseAudio() : playAudio());
    prevBtn.addEventListener('click', prevSong);
    nextBtn.addEventListener('click', nextSong);
    audioPlayer.addEventListener('timeupdate', updateProgress);
    progressBar.addEventListener('click', setProgress);
    audioPlayer.addEventListener('ended', nextSong);

    createCards();
