document.addEventListener("DOMContentLoaded", () => {
  const clientId = 'cfe47a4030b64c0a87cbdabe9edffa84';
  const redirectUri = window.location.origin; 
  const scopes = [
    'user-read-playback-state',
    'user-modify-playback-state',
    'user-read-currently-playing',
    'streaming',
    'user-read-email',
    'user-read-private'
  ];
  const tracks = [
  //Pop -> The Weeknd, Lady Gaga
      {
        title: "Save Your Tears 'remix'",
        artist: "The Weeknd, Ariana Grande",
        cover: "https://i.pinimg.com/1200x/eb/a9/4d/eba94d482871731324e2730d5ff963a7.jpg",
        album: "Starboy",
        url: "https://open.spotify.com/embed/track/37BZB0z9T8Xu7U3e65qxFy"
      },
      {
        title: "One Of The Girls",
        artist: "The Weeknd, JENNIE, Lily Rose Deep",
        cover: "https://i.pinimg.com/736x/87/40/d9/8740d9f0b7ef38c601bad32025cf1ad1.jpg",
        album: "The Idol: Episode 4",
        url: "https://open.spotify.com/embed/track/7CyPwkp0oE8Ro9Dd5CUDjW"
      },
      {
        title: "The Hills",
        artist: "The Weeknd",
        cover: "https://i.pinimg.com/736x/46/89/20/468920a4837519e3efbd8f9e77eafa65.jpg",
        album: "Beauty Behind The Madness",
        url: "https://open.spotify.com/embed/track/7fBv7CLKzipRk6EC6TWHOB"
      },
      {
        title: "Heartless",
        artist: "The Weeknd",
        cover: "https://i.pinimg.com/736x/f8/96/0f/f8960f78dbce7483b9d99f53b95d16ce.jpg",
        album: "After Hours",
        url: "https://open.spotify.com/embed/track/6bnF93Rx87YqUBLSgjiMU8"
      },
      {
        title: "Prisoner",
        artist: "The Weeknd, Lana Del Rey",
        cover: "https://i.pinimg.com/736x/46/89/20/468920a4837519e3efbd8f9e77eafa65.jpg",
        album: "Beauty Behind The Madness",
        url: "https://open.spotify.com/embed/track/1gZADNt16Oh23jWyMYRk4p"
      },
      {
        title: "Rain On Me",
        artist: "Lady Gaga, Ariana Grande",
        cover: "https://i.pinimg.com/736x/1b/8f/0d/1b8f0d8a0ca7223d775931f612e27fa1.jpg",
        album: "Chromatica",
        url: "https://open.spotify.com/embed/track/7ju97lgwC2rKQ6wwsf9no9"
      },
      {
        title: "Just Dance",
        artist: "Lady Gaga, Colby O´Donys",
        cover: "https://i.pinimg.com/736x/ee/35/3e/ee353e024bce6071c14854e2401330c0.jpg",
        album: "The Fame",
        url: "https://open.spotify.com/embed/track/1dzQoRqT5ucxXVaAhTcT0J"
      },
      {
        title: "Bad Romance",
        artist: "Lady Gaga",
        cover: "https://i.pinimg.com/736x/c0/4e/ca/c04eca39b8110e7a26d71e93df6c6afd.jpg",
        album: "The Fame Monster",
        url: "https://open.spotify.com/embed/track/0SiywuOBRcynK0uKGWdCnn"
      },
      {
        title: "Paparazzi",
        artist: "Lady Gaga",
        cover: "https://i.pinimg.com/736x/ee/35/3e/ee353e024bce6071c14854e2401330c0.jpg",
        album: "The Fame",
        url: "https://open.spotify.com/embed/track/02XnQdf7sipaKBBHixz3Zp"
      },
      {
        title: "Garden Of Eden",
        artist: "Lady Gaga",
        cover: "https://i.pinimg.com/736x/8a/02/8a/8a028aac5d825ab40008c734ada94979.jpg",
        album: "MAYHEM",
        url: "https://open.spotify.com/embed/track/4mUR5Tv0CvJtpmnUtzeIgd"
      },

      //Rock -> Queen, Pink Floyd
      {
        title: "Bohemian Rhapsody",
        artist: "Queen",
        cover: "https://i.pinimg.com/1200x/b1/cb/b8/b1cbb8e36d3354ea7155ee74db5c9ea4.jpg",
        album: "A Night At The Opera (Remaster 2011)",
        url: "https://open.spotify.com/embed/track/2OBofMJx94NryV2SK8p8Zf"
      },
      {
        title: "Don´t Stop Me Now",
        artist: "Queen",
        cover: "https://i.pinimg.com/736x/d6/60/2b/d6602bc4b8641e2d93f118a4dd520bca.jpg",
        album: "JAZZ (Remaster 2011)",
        url: "https://open.spotify.com/embed/track/5T8EDUDqKcs6OSOwEsfqG7"
      },
      {
        title: "We Are The Champions",
        artist: "Queen",
        cover: "https://i.pinimg.com/736x/b2/b3/d5/b2b3d557ba6ffa549d263a6b7708b551.jpg",
        album: "News Of The World (Remaster 2011)",
        url: "https://open.spotify.com/embed/track/1lCRw5FEZ1gPDNPzy1K4zW"
      },
      {
        title: "Will We Rock You",
        artist: "Queen",
        cover: "https://i.pinimg.com/736x/b2/b3/d5/b2b3d557ba6ffa549d263a6b7708b551.jpg",
        album: "News Of The World (Remaster 2011)",
        url: "https://open.spotify.com/embed/track/4pbJqGIASGPr0ZpGpnWkDn"
      },
      {
        title: "Under Pressure",
        artist: "Queen, David Bowie",
        cover: "https://i.pinimg.com/736x/90/e0/be/90e0be8438fbd88a2d8d222cd240919e.jpg",
        album: "Hot Space (Remaster 2011)",
        url: "https://open.spotify.com/embed/track/2fuCquhmrzHpu5xcA1ci9x"
      },
      {
        title: "Money",
        artist: "Pink Floyd",
        cover: "https://i.pinimg.com/736x/10/4c/05/104c05dd8d95ed8350fb1940f1cd508f.jpg",
        album: "The Dark Side Of The Moon",
        url: "https://open.spotify.com/embed/track/0vFOzaXqZHahrZp6enQwQb"
      },
      {
        title: "Another Brick In The Wall",
        artist: "Pink Floyd",
        cover: "https://i.pinimg.com/1200x/80/37/30/803730f1c8dedebfb1822dc95f1c1532.jpg",
        album: "The Wall",
        url: "https://open.spotify.com/embed/track/4gMgiXfqyzZLMhsksGmbQV"
      },
      {
        title: "Time",
        artist: "Pink Floyd",
        cover: "https://i.pinimg.com/736x/10/4c/05/104c05dd8d95ed8350fb1940f1cd508f.jpg",
        album: "The Dark Side Of The Moon",
        url: "https://open.spotify.com/embed/track/3TO7bbrUKrOSPGRTB5MeCz"
      },
      {
        title: "Monther",
        artist: "Pink Floyd",
        cover: "https://i.pinimg.com/1200x/80/37/30/803730f1c8dedebfb1822dc95f1c1532.jpg",
        album: "The Wall",
        url: "https://open.spotify.com/embed/track/1GEOSS415bZVHNuXWlCT6b"
      },
      {
        title: "High Hopes",
        artist: "Pink Floyd",
        cover: "https://i.pinimg.com/736x/bc/53/3a/bc533a3080fcafc1e47cb1db74cf986a.jpg",
        album: "The Division Bell",
        url: "https://open.spotify.com/embed/track/5a4MgIUSf9K8wXLSm6xPEx"
      },

      //Eletronico -> david guetta, marshmellow 
      {
        title: "Hey Brother",
        artist: "Avcii",
        cover: "https://i.pinimg.com/1200x/a2/32/e3/a232e31c104fc2dcc249a8e629e28e41.jpg",
        album: "TRUE",
        url: ""
      },
      {
        title: "We Found Love",
        artist: "Calvin Harris, Rihanna",
        cover: "https://i.pinimg.com/1200x/6e/6a/eb/6e6aeb65c5cbaeb13bb7919efd27b56a.jpg",
        album: "Talk That Talk",
        url: ""
      },
      {
        title: "Titanium",
        artist: "David Guetta, Sia",
        cover: "https://i.pinimg.com/736x/35/d4/04/35d404ba6122672d68b168959f1e7e67.jpg",
        album: "Nothining But the Beat",
        url: ""
      },
      {
        title: "I Remember",
        artist: "Deadmau5, Kaskade",
        cover: "https://i.pinimg.com/736x/07/9c/55/079c55f49e674837cb230a07695e1b0a.jpg",
        album: "Strobelite Seduction",
        url: ""
      },
      {
        title: "Alone",
        artist: "Marshmellow",
        cover: "https://i.pinimg.com/1200x/68/0e/67/680e6737c306df709f2994e0aaffd786.jpg",
        album: "JOYTIME",
        url: ""
      },
      //Mpb -> 
      {
        title: "Desde Que o Samba É Samba",
        artist: "Caetano Veloso, Gilberto Gil",
        cover: "https://i.pinimg.com/1200x/2f/4a/00/2f4a00f96458b1af15d1a8eb96f670ec.jpg",
        album: "Tropicália 2",
        url: ""
      },
      {
        title: "Apesar De Você",
        artist: "Chico Buarque",
        cover: "https://i.pinimg.com/736x/00/2e/47/002e47ecc10c540f80866b2bc456b57f.jpg",
        album: "Chico Buarque",
        url: ""
      },
      {
        title: "Alô Alô Marciano",
        artist: "Elis Regina",
        cover: "https://cdn-images.dzcdn.net/images/cover/ffa1b60e3c99c5e5e152f367d5c13d45/0x1900-000000-80-0-0.jpg",
        album: "2 É Demais",
        url: ""
      },
      {
        title: "Cheiro De Amor",
        artist: "Maria Bethânia",
        cover: "https://i.pinimg.com/736x/e5/d1/1e/e5d11ee38fef6a7427e0c02235f1205d.jpg",
        album: "Mel",
        url: ""
      },
      
      //Sertanejo -> Luan Santana, Jorge & Matheus
      {
        title: "Chuva de Arroz",
        artist: "Luan Santana",
        cover: "https://i.pinimg.com/736x/7a/37/09/7a3709c29797cffd52b6eb75a041b745.jpg",
        album: "Acústico (Ao Vivo)",
        url: "https://open.spotify.com/embed/track/66rhnZizvTv2ufYpyHoWoW"
      },
      {
        title: "Acordando O Prédio",
        artist: "Luan Santana",
        cover: "https://i.pinimg.com/736x/f9/d4/f8/f9d4f85df61672281a8ab10352589670.jpg",
        album: "Acordando O Prédio",
        url: "https://open.spotify.com/embed/track/40bK2uosUmAS92c17n98xd"
      },
      {
        title: "Tudo Que Você Quiser",
        artist: "Luan Santana",
        cover: "https://i.pinimg.com/736x/bf/7e/9e/bf7e9e2bcbd81be33cb6536cd55408de.jpg",
        album: "O Nosso Tempo É Hoje",
        url: "https://open.spotify.com/embed/track/4JSROzfWqKccwZ68DX1aJe"
      },
      {
        title: "Eu Você, O Mar E Ela",
        artist: "Luan Santana",
        cover: "https://i.pinimg.com/736x/15/a9/4b/15a94bdb04acf4d1db2821a57d6349b2.jpg",
        album: "1977",
        url: "https://open.spotify.com/embed/track/000xYdQfIZ4pDmBGzQalKU"
      },
      {
        title: "Te Esperando",
        artist: "Luan Santana",
        cover: "https://i.pinimg.com/736x/b2/07/17/b20717a396478016555556a3dc5f5ff4.jpg",
        album: "As Melhores... Até Aqui",
        url: "https://open.spotify.com/embed/track/4KpBTyXsTZ3RibnYntdnEY"
      },
      {
        title: "Ai Se Eu Te Pego",
        artist: "Michel Teló",
        cover: "https://i.pinimg.com/736x/27/23/65/272365359c14ada75c648c0d8101a3c2.jpg",
        album: "Na Balada",
        url: "https://open.spotify.com/embed/track/29vem0DsWK4224LQyxcmA5"
      },
      {
        title: "Fugidinha",
        artist: "Michel Teló",
        cover: "https://i.pinimg.com/736x/14/3a/25/143a258535463ca4ece90b1e941fafac.jpg",
        album: "Ao Vivo",
        url: "https://open.spotify.com/embed/track/0C8AukgPKKwZjSKH9kEWK3"
      },
      {
        title: "Ei, Psiu, Beijo, Me Liga",
        artist: "Michel Teló, João Bosco & Vinicius",
        cover: "https://i.pinimg.com/736x/a2/45/db/a245db3b559ed65973ea4359a65299a2.jpg",
        album: "Balada Sertaneja",
        url: "https://open.spotify.com/embed/track/6LO4o9IeCJTDlAImFWszXD"
      }, 
      {
        title: "Amiga Da Minha Irmã",
        artist: "Michel Teló",
        cover: "https://i.pinimg.com/736x/e9/01/0e/e9010ef111993ace962caecbe8b2ab95.jpg",
        album: "Sunset (Ao Vivo)",
        url: "https://open.spotify.com/embed/track/1DHaPJg7o8ko4e7S1F5Khf"
      },
      {
        title: "Hulmide Residencia",
        artist: "Michel Teló",
        cover: "https://i.pinimg.com/736x/27/23/65/272365359c14ada75c648c0d8101a3c2.jpg",
        album: "Na Balada",
        url: "https://open.spotify.com/embed/track/7iXN1pwx70l9NXsUt55AGS"
      },
      
    ];

    let currentTrack = 0;
    let isPlaying = true;

    const nextBtn = document.getElementById("nextBtn");
    const prevBtn = document.getElementById("prevBtn");
    const likeBtn = document.getElementById("likeBtn");
    const apiSpotify = document.getElementById("apiSpotify");
    const songTitle = document.getElementById("songTitle");
    const artistName = document.getElementById("artistName");
    const album = document.getElementById("album");
    const albumCover = document.getElementById("albumCover");
    let logado = JSON.parse(localStorage.getItem('logado')) || "";
    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || []

    function loadTrack(index) {
    const track = tracks[index];
    apiSpotify.src = ""; // força reload
    setTimeout(() => {
      apiSpotify.src = track.url;
    }, 50);

    songTitle.textContent = track.title;
    artistName.textContent = track.artist;
    album.textContent = track.album;
    albumCover.src = track.cover;
  }

    nextBtn.addEventListener("click", () => {
      currentTrack = (currentTrack + 1) % tracks.length;
      loadTrack(currentTrack);
    });

    prevBtn.addEventListener("click", () => {
      currentTrack = (currentTrack - 1 + tracks.length) % tracks.length;
      loadTrack(currentTrack);
    });

    likeBtn.addEventListener("click", () => {
      usuarios.forEach(item => {
        if(item.email == logado.email){
          if (!item.favoritos.includes(songTitle.textContent)) {
            item.favoritos.push(songTitle.textContent);
            logado.favoritos.push(songTitle.textContent);

            localStorage.setItem('logado', JSON.stringify(logado));
            localStorage.setItem('usuarios', JSON.stringify(usuarios));
            likeBtn.classList.toggle("liked");
          }
        }
      })
    });

    // Inicia com primeira faixa
    loadTrack(currentTrack);
});