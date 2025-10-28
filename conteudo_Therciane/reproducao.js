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
        title: "In The Name Of Love",
        artist: "Bebe Rexha, Martin Garrix",
        cover: "https://i.pinimg.com/736x/70/e4/3b/70e43bf90fe0ae8e8a8ff9cf64ca67fb.jpg",
        url: "https://open.spotify.com/embed/track/23L5CiUhw2jV1OIMwthR3S"
      },
      //Mpb -> 
      {
        title: "Exagerado",
        artist: "Cazuza",
        cover: "https://i.pinimg.com/736x/c8/d1/6a/c8d16aae8928b2f55f1b881aa399f83c.jpg",
        url: "https://open.spotify.com/embed/track/4d0DpU7Odiv0ztvX2GxJlk"
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
      {
        title: "Desde Que o Samba É Samba",
        artist: "Caetano Veloso",
        cover: "imagens/caetanoVeloso.jpg",
        album: "Caetano Veloso",
        url: "https://open.spotify.com/embed/track/628hP5ZZjXTz4AnIyDfDZ0?utm_source=generator"
      },
      {
        title: "Sonho Meu",
        artist: "Caetano Veloso",
        cover: "imagens/caetanoVeloso.jpg",
        album: "Caetano Veloso",
        url: "https://open.spotify.com/embed/track/4wUzJax4y4a6jIhbF28LoC?utm_source=generator"
      },
      {
        title: "Apesar de Você",
        artist: "Chico Buarque",
        cover: "imagens/chicoBuarque.jpg",
        album: "Chico Buarque",
        url: "https://open.spotify.com/embed/track/2GAFZG9Z7UGS1iMm4Idrnr?utm_source=generator"
      },
      {
        title: "Cotidiano",
        artist: "Chico Buarque",
        cover: "imagens/chico_construcao.png",
        album: "Construção",
        url: "https://open.spotify.com/embed/track/127twwy3iCo1xBRQHyWetU?utm_source=generator"
      },
      {
        title: "Alô Alô Marciano",
        artist: "Elis Regina",
        cover: "imagens/elisRegina.jpg",
        album: "Elis Regina",
        url: "https://open.spotify.com/embed/track/0wacj5AePmtFHt8mzdk6t4?utm_source=generator"
      },
      {
        title: "Águas de Março",
        artist: "Elis Regina",
        cover: "imagens/elisAndTom.jpg",
        album: "Elis & Tom",
        url: "https://open.spotify.com/embed/track/15ouqiBsgL12olEwP3COsH?utm_source=generator"
      },
      {
        title: "Coração Vagabundo",
        artist: "Gal Costa",
        cover: "imagens/gal_coracaoVagabundo.jpg",
        album: "Coração Vagabundo",
        url: "https://open.spotify.com/embed/track/60TftyBmMIL7wBdM37KuRj?utm_source=generator"
      },
      {
        title: "Baby",
        artist: "Gal Costa",
        cover: "imagens/galCosta.jpg",
        album: "Gal Costa",
        url: "https://open.spotify.com/embed/track/0C13P4IghHNFPjt4zIJ8vX?utm_source=generator"
      },
      {
        title: "Cheiro de Amor",
        artist: "Maria Bethania",
        cover: "imagens/maria_cancoes",
        album: "As Canções Que Você Fez Pra Mim",
        url: "https://open.spotify.com/embed/track/2dhV6VPKdqNg85vgv16xjo?utm_source=generator"
      },
      {
        title: "Reconvexo",
        artist: "Maria Bethania",
        cover: "imagens/maria_aoVivo",
        album: "Ao Vivo",
        url: "https://open.spotify.com/embed/track/1ddeP7G76wscmc0RH5sjVA?utm_source=generator"
      },
      {
        title: "Hey Brother",
        artist: "Avcii",
        cover: "imagens/avcii_true.jpg",
        album: "True",
        url: "https://open.spotify.com/embed/track/4lhqb6JvbHId48OUJGwymk?utm_source=generator"
      },
      {
        title: "Wake Me Up",
        artist: "Avcii",
        cover: "imagens/avcii_true.jpg",
        album: "True",
        url: "https://open.spotify.com/embed/track/0nrRP2bk19rLc0orkWPQk2?utm_source=generator"
      },
      {
        title: "We Found Love (feat. Rihanna)",
        artist: "Calvin Harris",
        cover: "imagens/calvin_talk.jpg",
        album: "Talk That Talk (Rihanna)",
        url: "https://open.spotify.com/embed/track/6qn9YLKt13AGvpq9jfO8py?utm_source=generator"
      },
      {
        title: "Summer",
        artist: "Calvin Harris",
        cover: "imagens/calvin_18Months.jpg",
        album: "18 Months",
        url: "https://open.spotify.com/embed/track/6YUTL4dYpB9xZO5qExPf05?utm_source=generator"
      },
      {
        title: "Titanium (feat. Sia)",
        artist: "David Guetta",
        cover: "imagens/david_nothing.jpg",
        album: "Nothing but the Beat",
        url: "https://open.spotify.com/embed/track/5072hCBK3Z15qRnTEzd8fy?utm_source=generator"
      },
      {
        title: "Without You (feat. Usher)",
        artist: "David Guetta",
        cover: "imagens/david_nothing.jpg",
        album: "Nothing but the Beat",
        url: "https://open.spotify.com/embed/track/3UN6cIn3VIyg0z1LCuFSum?utm_source=generator"
      },
      {
        title: "I Remember (with Kaskade)",
        artist: "Deadmau5",
        cover: "imagens/deadmau5_forLack.jpg",
        album: "For Lack of a Better Name",
        url: "https://open.spotify.com/embed/track/2edcAWwKM7SQajsFGP0edC?utm_source=generator"
      },
      {
        title: "The Veldt",
        artist: "Deadmau5",
        cover: "imagens/deadmau5_albumTitle.jpg",
        album: "album title goes here",
        url: "https://open.spotify.com/embed/track/5YaqbhEmoxSpIbdBTPG6KQ?utm_source=generator"
      },
      {
        title: "Alone",
        artist: "Marshmellow",
        cover: "imagens/marshmellow_joytime.jpg",
        album: "Joytime",
        url: "https://open.spotify.com/embed/track/3MEYFivt6bilQ9q9mFWZ4g?utm_source=generator"
      },
      {
        title: "Happier (feat. Bastille)",
        artist: "Marshmellow",
        cover: "imagens/marshmellow_joytimeII.jpg",
        album: "Joytime II",
        url: "https://open.spotify.com/embed/track/7BqHUALzNBTanL6OvsqmC1?utm_source=generator"
      },
    ];

    let currentTrack
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
    let musica = localStorage.getItem('musica') || "";

    function loadTrack(index = 0) {
      tracks.forEach((item, i) => {
        if(item.title === musica){
          index = i
        }
      })
      localStorage.removeItem('musica');
    currentTrack = index;
    const selectedTrack = tracks[index]
    apiSpotify.src = ""; // força reload
    setTimeout(() => {
      apiSpotify.src = selectedTrack.url;
    }, 50);

    songTitle.textContent = selectedTrack.title;
    artistName.textContent = selectedTrack.artist;
    album.textContent = selectedTrack.album;
    albumCover.src = selectedTrack.cover;
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
            likeBtn.classList.toggle("liked");
          } else {
            usuario.favoritos = usuario.favoritos.filter(fav => fav !== musicTitle);
            logado.favoritos = logado.favoritos.filter(fav => fav !== musicTitle);
            likeBtn.classList.remove("liked");
          }
          localStorage.setItem('logado', JSON.stringify(logado));
          localStorage.setItem('usuarios', JSON.stringify(usuarios));
        }
      })
    });

    // Inicia com primeira faixa
    loadTrack(currentTrack);

})
