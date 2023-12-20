const music = new Audio('Assets/songs/1.mp3');
// music.play(); Autoplay is off by default

const songs = [
    {
        id: 1,
        name: `Perfect<br>
        <div class="subtitle">Ed_Sheeran</div>` ,
        path: 'Assets/songs/1.mp3',
        coverPath: 'Assets/Cover/1.jpg',
        bgPath: 'Assets/Bg/1.jpg',
    },
    {
        id: 2,
        name: `See You Again<br>
        <div class="subtitle">Charlie Puth- Wiz_Khalifa</div>` ,
        path: 'Assets/songs/2.mp3',
        coverPath: 'Assets/Cover/2.jpg',
        bgPath: 'Assets/Bg/2.jpg',
    },
    {
        id: 3,
        name: `Until I Found You<br>
        <div class="subtitle">Stephen Sanchez- Em_Beihold</div>` ,
        path: 'Assets/songs/3.mp3',
        coverPath: 'Assets/Cover/3.jpg',
        bgPath: 'Assets/Bg/3.jpg',
    },
    {
        id: 4,
        name: `Lover<br>
        <div class="subtitle">Taylor Swift</div>` ,
        path: 'Assets/songs/4.mp3',
        coverPath: 'Assets/Cover/4.jpg',
        bgPath: 'Assets/Bg/4.jpg',
    },
    {
        id: 5,
        name: `Paris<br>
        <div class="subtitle">The Chainsmokers</div>` ,
        path: 'Assets/songs/5.mp3',
        coverPath: 'Assets/Cover/5.jpg',
        bgPath: 'Assets/Bg/5.jpg',
    },
    {
        id: 6,
        name: `What makes you Beautiful !<br>
        <div class="subtitle">One Direction</div>` ,
        path: 'Assets/songs/6.mp3',
        coverPath: 'Assets/Cover/6.jpg',
        bgPath: 'Assets/Bg/6.jpg',
    },
    {
        id: 7,
        name: `iPad<br>
        <div class="subtitle">The Chainsmokers</div>` ,
        path: 'Assets/songs/7.mp3',
        coverPath: 'Assets/Cover/7.jpg',
        bgPath: 'Assets/Bg/7.jpg',
    },
    {
        id: 8,
        name: `Photograph<br>
        <div class="subtitle">Ed Sheeran</div>` ,
        path: 'Assets/songs/8.mp3',
        coverPath: 'Assets/Cover/8.jpg',
        bgPath: 'Assets/Bg/8.jpg',
    },
    {
        id: 9,
        name: `We don't talk anymore<br>
        <div class="subtitle">Charlie Puth- Selena_Gomez</div>` ,
        path: 'Assets/songs/9.mp3',
        coverPath: 'Assets/Cover/9.jpeg',
        bgPath: 'Assets/Bg/9.jpg',
    },
    {
        id: 10,
        name: `Stiches<br>
        <div class="subtitle">Shawn Mendes</div>` ,
        path: 'Assets/songs/10.mp3',
        coverPath: 'Assets/Cover/10.jpg',
        bgPath: 'Assets/Bg/10.jpeg',
    },
]


Array.from(document.getElementsByClassName('pop_item')).forEach((e, i) => {
    e.getElementsByTagName('img')[0].src = songs[i].coverPath;
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].name;
})


let masterPlay = document.getElementById('masterPlay');
let gif = document.getElementById('gif');

masterPlay.addEventListener('click', () => {
    if (music.paused || music.currentTime <= 0) {
        music.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else {
        music.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})

const makeAllBackgrounds = () => {
    Array.from(document.getElementsByClassName('pop_item')).forEach((element) => {
        element.style.background = "none";
    })
}
const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}



let index = 0;
let poster_master_play = document.getElementById('poster_master_play');
let masterSongName = document.getElementById('masterSongName');
Array.from(document.getElementsByClassName('songItemPlay')).forEach((e) => {
    e.addEventListener('click', (event) => {
        index = parseInt(event.target.id);
        music.src = songs[index].path;
        music.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        poster_master_play.src = songs[index].coverPath;
        gif.style.opacity = 1;

        let songTitles = songs.filter((els) => {
            return els.id == index + 1;
        });
        songTitles.forEach(elss => {
            // let {name} = elss;
            masterSongName.innerHTML = elss.name;
        });


        makeAllBackgrounds();
        Array.from(document.getElementsByClassName('pop_item'))[index].style.background = "rgba(105, 105, 170, 1)";
        makeAllPlays();
        event.target.classList.remove('fa-play-circle');
        event.target.classList.add('fa-pause-circle');

    })
});


let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];
music.addEventListener('timeupdate', () => {
    let music_curr = music.currentTime;
    let music_dur = music.duration;

    let min_curr = Math.floor(music_curr / 60);
    let sec_curr = Math.floor(music_curr % 60);
    if(sec_curr < 10) {
        sec_curr = `0${sec_curr}`;
    }
    if(min_curr < 10) {
        min_curr = `0${min_curr}`;
    }

    let min_dur = Math.floor(music_dur / 60);
    let sec_dur = Math.floor(music_dur % 60);
    if(sec_dur < 10) {
        sec_dur = `0${sec_dur}`;
    }
    if(min_dur < 10) {
        min_dur = `0${min_dur}`;
    }

    currentStart.innerHTML = `${min_curr}:${sec_curr}`;
    currentEnd.innerHTML = `${min_dur}:${sec_dur}`;


    let progressBar = ((music_curr / music_dur)* 100);
    seek.value = progressBar;
    let seekBar  = seek.value;
    bar2.style.width = `${seekBar}%`;
    dot.style.left = `${seekBar}%`;

});

seek.addEventListener('input', () => {
    let seekVal = seek.value;
    let music_dur = music.duration;
    let seekTime = (seekVal * music_dur) / 100;
    music.currentTime = seekTime;
});


let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_bar = document.getElementsByClassName('vol_bar')[0];
let vol_dot = document.getElementById('vol_dot');

vol.addEventListener('input', () => {
    let volVal = vol.value;
    music.volume = volVal / 100;
    vol_bar.style.width = `${volVal}%`;
    vol_dot.style.left = `${volVal}%`;

    if(vol.value == 0) {
        vol_icon.classList.remove('fa-volume-low');
        vol_icon.classList.remove('fa-volume-high');
        vol_icon.classList.add('fa-volume-mute');
    }
    if(vol.value > 0) {
        vol_icon.classList.remove('fa-volume-high');
        vol_icon.classList.remove('fa-volume-mute');
        vol_icon.classList.add('fa-volume-low');
    }
    if(vol.value > 50) {
        vol_icon.classList.remove('fa-volume-mute');
        vol_icon.classList.remove('fa-volume-low');
        vol_icon.classList.add('fa-volume-high');
    }
});

let back = document.getElementById('back');
let next = document.getElementById('next');

next.addEventListener('click', () => {
    index += 1;
    if(index > 9) {
        index = 0;
    }
    music.src = songs[index].path;
    music.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    poster_master_play.src = songs[index].coverPath;
    gif.style.opacity = 1;

    let songTitles = songs.filter((els) => {
        return els.id == index + 1;
    });
    songTitles.forEach(elss => {
        // let {name} = elss;
        masterSongName.innerHTML = elss.name;
    });
});

back.addEventListener('click', () => {
    index -= 1;
    if(index < 0) {
        index = 9;
    }
    music.src = songs[index].path;
    music.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    poster_master_play.src = songs[index].coverPath;
    gif.style.opacity = 1;

    let songTitles = songs.filter((els) => {
        return els.id == index + 1;
    });
    songTitles.forEach(elss => {
        // let {name} = elss;
        masterSongName.innerHTML = elss.name;
    });
});



let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName('pop_songs')[0];

let pop_art_left = document.getElementById('pop_art_left');
let pop_art_right = document.getElementById('pop_art_right');
let pop_art = document.getElementsByClassName('items')[0];

pop_song_left.addEventListener('click', () => {
    pop_song.scrollLeft -= 200;
});

pop_song_right.addEventListener('click', () => {
    pop_song.scrollLeft += 200;
});

pop_art_left.addEventListener('click', () => {
    pop_art.scrollLeft -= 200;
});

pop_art_right.addEventListener('click', () => {
    pop_art.scrollLeft += 200;
});