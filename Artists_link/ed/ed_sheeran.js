const music = new Audio('../../Assets/Artist/ed/songs/1.mp3');
// music.play(); Autoplay is off by default
const playingArtist = 1;

const songs = [

    // pop_songs have ids 0 to 9
    {
        id: 0,
        name: `Pehle bhi mein<br>
        <div class="subtitle">Vishal Mishra, Raj Shekhar</div>` ,
        path: '../../Assets/pop_songs/songs/1.mp3',
        coverPath: '../../Assets/pop_songs/cover/1.jpg',
    },
    {
        id: 1,
        name: `Gerua<br>
        <div class="subtitle">Arijit Singh, Antara Mitra</div>` ,
        path: '../../Assets/pop_songs/songs/2.mp3',
        coverPath: '../../Assets/pop_songs/cover/2.jpg',
    },
    {
        id: 2,
        name: `Closer<br>
        <div class="subtitle">The Chainsmokers</div>` ,
        path: '../../Assets/pop_songs/songs/3.mp3',
        coverPath: '../../Assets/pop_songs/cover/3.jpg',
    },
    {
        id: 3,
        name: `Lover<br>
        <div class="subtitle">Taylor Swift</div>` ,
        path: '../../Assets/pop_songs/songs/4.mp3',
        coverPath: '../../Assets/pop_songs/cover/4.jpg',
    },
    {
        id: 4,
        name: `Tu Chahiye<br>
        <div class="subtitle">Pritam, Atif Aslam</div>` ,
        path: '../../Assets/pop_songs/songs/5.mp3',
        coverPath: '../../Assets/pop_songs/cover/5.jpg',
    },
    {
        id: 5,
        name: `Jeene Laga hu<br>
        <div class="subtitle">Atif Aslam, Shreya Ghosal</div>` ,
        path: '../../Assets/pop_songs/songs/6.mp3',
        coverPath: '../../Assets/pop_songs/cover/6.jpg',
    },
    {
        id: 6,
        name: `Night Changes<br>
        <div class="subtitle">One Direction-1D</div>` ,
        path: '../../Assets/pop_songs/songs/7.mp3',
        coverPath: '../../Assets/pop_songs/cover/7.jpg',
    },
    {
        id: 7,
        name: `Chaleya<br>
        <div class="subtitle">Arijit Singh, Shilpa Rao</div>` ,
        path: '../../Assets/pop_songs/songs/8.mp3',
        coverPath: '../../Assets/pop_songs/cover/8.jpg',
    },
    {
        id: 8,
        name: `Dil Meri Na Sune<br>
        <div class="subtitle">Atif Aslam</div>` ,
        path: '../../Assets/pop_songs/songs/9.mp3',
        coverPath: '../../Assets/pop_songs/cover/9.jpg',
    },
    {
        id: 9,
        name: `Stitches<br>
        <div class="subtitle">Shawn Mendes</div>` ,
        path: '../../Assets/pop_songs/songs/10.mp3',
        coverPath: '../../Assets/pop_songs/cover/10.jpg',
    },


    //list1 has ids 10- 19
    {
        id: 10,
        name: `Shape of You<br>
        <div class="subtitle">Ed Sheeran</div>` ,
        path: '../../Assets/Artist/ed/songs/1.mp3',
        coverPath: '../../Assets/Artist/ed/cover/1.png',
    },
    {
        id: 11,
        name: `Perfect<br>
        <div class="subtitle">Ed Sheeran</div>` ,
        path: '../../Assets/Artist/ed/songs/2.mp3',
        coverPath: '../../Assets/Artist/ed/cover/2.jpg',
    },
    {
        id: 12,
        name: `Thinking Out Load<br>
        <div class="subtitle">Ed Sheeran</div>` ,
        path: '../../Assets/Artist/ed/songs/3.mp3',
        coverPath: '../../Assets/Artist/ed/cover/3.jpg',
    },
    {
        id: 13,
        name: `Beautiful People<br>
        <div class="subtitle">Ed Sheeran ft. Khalid</div>` ,
        path: '../../Assets/Artist/ed/songs/4.mp3',
        coverPath: '../../Assets/Artist/ed/cover/4.jpeg',
    },
    {
        id: 14,
        name: `Castle  on The Hill<br>
        <div class="subtitle">Ed Sheeran</div>` ,
        path: '../../Assets/Artist/ed/songs/5.mp3',
        coverPath: '../../Assets/Artist/ed/cover/5.jpg',
    },
    {
        id: 15,
        name: `2 Steps<br>
        <div class="subtitle">Ed Sheeran</div>` ,
        path: '../../Assets/Artist/ed/songs/6.mp3',
        coverPath: '../../Assets/Artist/ed/cover/6.jpg',
    },
    {
        id: 16,
        name: `Supermarket Flowers<br>
        <div class="subtitle">Ed Sheeran</div>` ,
        path: '../../Assets/Artist/ed/songs/7.mp3',
        coverPath: '../../Assets/Artist/ed/cover/7.jpg',
    },
    {
        id: 17,
        name: `Photograph<br>
        <div class="subtitle">Ed Sheeran</div>` ,
        path: '../../Assets/Artist/ed/songs/8.mp3',
        coverPath: '../../Assets/Artist/ed/cover/8.jpg',
    },


]


let contentSong = document.getElementsByClassName('content')[0].getElementsByTagName('button')[0];
contentSong.addEventListener('click', () => {
    index = 17;
    music.src = songs[index].path;
    music.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    masterSongInfoUpdate();
    stylePlayingTab();
    setDownload();
})


//add song name and cover image to each pop_item
Array.from(document.getElementsByClassName('pop_item')).forEach((e, i) => {
    e.getElementsByTagName('img')[0].src = songs[i].coverPath;
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].name;
})



//added song duration, name, coverImg to the song list
//start from 10 because 0-9 are pop_songs
Array.from(document.getElementsByClassName('songItem')).forEach((element, i) => {
    //add time duration to each song
    let tempaudio = new Audio(songs[i + 10].path);
    tempaudio.addEventListener('loadedmetadata', () => {
        let min = Math.floor(tempaudio.duration / 60);
        let sec = Math.floor(tempaudio.duration % 60);
        if (sec < 10) {
            sec = `0${sec}`;
        }
        if (min < 10) {
            min = `0${min}`;
        }
        element.getElementsByClassName('timeStamp')[0].innerText = `${min}:${sec}`;
    })
    //add song name and cover image to each song
    element.getElementsByTagName('h5')[0].innerHTML = songs[i + 10].name;
    element.getElementsByTagName('img')[0].src = songs[i + 10].coverPath;
})





//play/pause song on click
let masterPlay = document.getElementById('masterPlay');
let gif = document.getElementById('gif');
let index = 10;
let poster_master_play = document.getElementById('poster_master_play');
let masterSongName = document.getElementById('masterSongName');
let downloadMusic = document.getElementById('downloadMusic');





//make backgrounds of all pop_items/songItem none and subtitles gray
const makeAllBackgrounds = () => {
    Array.from(document.getElementsByClassName('pop_item')).forEach((element) => {
        element.style.background = "none";
        element.getElementsByClassName('subtitle')[0].style.color = "gray";
    })
    Array.from(document.getElementsByClassName('songItem')).forEach((element) => {
        element.style.backgroundColor = "rgba(0, 0, 0, 0.4)";
        element.getElementsByClassName('subtitle')[0].style.color = "gray";
    })
}
//make all play buttons play 
const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}


const stylePlayingTab = () => {
    makeAllBackgrounds();
    makeAllPlays();
    Array.from(document.getElementsByClassName('pop_item')).forEach((element) => {
        playIcon = element.getElementsByClassName('songItemPlay')[0];
        if (playIcon.id == index) {
            element.style.background = "rgba(105, 105, 170, 1)";
            element.getElementsByClassName('subtitle')[0].style.color = "black";
            playIcon.classList.remove('fa-play-circle');
            playIcon.classList.add('fa-pause-circle');
        }
    })
    Array.from(document.getElementsByClassName('songItem')).forEach((element) => {
        playIcon = element.getElementsByClassName('songItemPlay')[0];
        if (playIcon.id == index) {
            element.style.backgroundColor = "rgba(105, 105, 170, 1)";
            element.getElementsByClassName('subtitle')[0].style.color = "black";
            playIcon.classList.remove('fa-play-circle');
            playIcon.classList.add('fa-pause-circle');
        }
    })

}

const masterSongInfoUpdate = () => {
    let songTitles = songs.filter((els) => {
        return els.id == index;
    }
    );
    songTitles.forEach(elss => {
        masterSongName.innerHTML = elss.name;
        poster_master_play.src = elss.coverPath;
        poster_master_play.style.opacity = 1;
        gif.style.opacity = 1;
    }
    );
}

const setDownload = () => {
    let songTitles = songs.filter((els) => {
        return els.id == index;
    });
    songTitles.forEach(elss => {
        masterSongName.innerHTML = elss.name;
        downloadMusic.href = elss.path;
        downloadMusic.setAttribute('download', elss.name);
    });
}

masterPlay.addEventListener('click', () => {
    if (music.paused || music.currentTime <= 0) {
        music.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        stylePlayingTab();
        masterSongInfoUpdate();
        setDownload();
    }
    else {
        music.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
        makeAllPlays();
        //also pause all pop_items
    }
})

Array.from(document.getElementsByClassName('songItemPlay')).forEach((e) => {
    e.addEventListener('click', (event) => {
        if (event.target.classList.contains('fa-pause-circle')) {
            music.pause();
            masterPlay.classList.remove('fa-pause-circle');
            masterPlay.classList.add('fa-play-circle');
            gif.style.opacity = 0;
            makeAllPlays();
        } else {
            index = parseInt(event.target.id);
            music.src = songs[index].path;
            music.play();
            masterPlay.classList.remove('fa-play-circle');
            masterPlay.classList.add('fa-pause-circle');
            masterSongInfoUpdate();
            stylePlayingTab();
            setDownload();
        }
    })
});


let back = document.getElementById('back');
let next = document.getElementById('next');

const playNext = () => {
    index += 1;
    if (index === 10) {
        index = 0;
    }
    if (index === songs.length) {
        index = 10;
    }

    music.src = songs[index].path;
    music.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

    masterSongInfoUpdate();
    stylePlayingTab();
    setDownload();
}
next.addEventListener('click', playNext);

back.addEventListener('click', () => {
    index -= 1;
    if (index === -1) {
        index = 9;
    }
    if (index === 9) {
        index = songs.length - 1;
    }

    music.src = songs[index].path;
    music.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    masterSongInfoUpdate();
    stylePlayingTab();
    setDownload();
});





//search data start
let search_results = document.getElementsByClassName('search_results')[0];

songs.forEach(element => {
    const { id, name, coverPath } = element;
    let card = document.createElement('a');
    card.classList.add('card');
    card.href = "#" + (id);
    card.innerHTML = `<img src="${coverPath}" alt=""> <div class="content">${name}</div>`;

    search_results.appendChild(card);

    card.addEventListener('click', () => {
        index = id;
        music.src = songs[index].path;
        music.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        masterSongInfoUpdate();
        stylePlayingTab();
        setDownload();

    });

})

let input = document.getElementsByTagName('input')[0];
input.addEventListener('input', () => {
    let results = document.getElementsByClassName('search_results')[0];
    results.style.display = "flex";
    results.style.flexDirection = "column";

    let val = input.value;
    Array.from(document.getElementsByClassName('card')).forEach((e) => {
        let content = e.getElementsByClassName('content')[0].innerText;
        if (content.toLowerCase().includes(val.toLowerCase())) {
            e.style.display = "flex";
        }
        else {
            e.style.display = "none";
        }
    })
    if (val == "") {
        results.style.display = "none";
        Array.from(document.getElementsByClassName('card')).forEach((e) => {
            e.style.display = "none";
        })
    }
});
//search data end


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
    if (sec_curr < 10) {
        sec_curr = `0${sec_curr}`;
    }
    if (min_curr < 10) {
        min_curr = `0${min_curr}`;
    }

    let min_dur = Math.floor(music_dur / 60);
    let sec_dur = Math.floor(music_dur % 60);
    if (sec_dur < 10) {
        sec_dur = `0${sec_dur}`;
    }
    if (min_dur < 10) {
        min_dur = `0${min_dur}`;
    }

    currentStart.innerHTML = `${min_curr}:${sec_curr}`;
    currentEnd.innerHTML = `${min_dur}:${sec_dur}`;


    let progressBar = ((music_curr / music_dur) * 100);
    seek.value = progressBar;
    let seekBar = seek.value;
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

    if (vol.value == 0) {
        vol_icon.classList.remove('fa-volume-low');
        vol_icon.classList.remove('fa-volume-high');
        vol_icon.classList.add('fa-volume-mute');
    }
    if (vol.value > 0) {
        vol_icon.classList.remove('fa-volume-high');
        vol_icon.classList.remove('fa-volume-mute');
        vol_icon.classList.add('fa-volume-low');
    }
    if (vol.value > 50) {
        vol_icon.classList.remove('fa-volume-mute');
        vol_icon.classList.remove('fa-volume-low');
        vol_icon.classList.add('fa-volume-high');
    }
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



let shuffle = document.getElementsByClassName('shuffle')[0];
shuffle.addEventListener('click', () => {
    let a = shuffle.innerHTML;
    switch (a) {
        case "next":
            shuffle.innerHTML = "repeat";
            shuffle.classList.remove('fa-music');
            shuffle.classList.remove('fa-shuffle');
            shuffle.classList.add('fa-repeat');
            break;
        case "repeat":
            shuffle.innerHTML = "random";
            shuffle.classList.remove('fa-music');
            shuffle.classList.remove('fa-repeat');
            shuffle.classList.add('fa-shuffle');
            break;
        case "random":
            shuffle.innerHTML = "next";
            shuffle.classList.remove('fa-shuffle');
            shuffle.classList.remove('fa-repeat');
            shuffle.classList.add('fa-music');
            break;
    }
});

music.addEventListener('ended', () => {
    let a = shuffle.innerHTML;
    switch (a) {
        case "next":
            playNext();
            break;

        case "repeat":
            music.play();
            break;

        case "random":
            if (index >= 0 && index <= 9)
                index = Math.floor(Math.random() * 10);
            else
                index = Math.floor(10 + Math.random() * (songs.length - 10));

            music.src = songs[index].path;
            music.play();
            masterPlay.classList.remove('fa-play-circle');
            masterPlay.classList.add('fa-pause-circle');
            masterSongInfoUpdate();
            stylePlayingTab();
            setDownload();
            break;
    }
});




let artists = [
    {
        id: 0,
        name: `Atif Aslam`,
        coverPath: '../../Assets/Artist/atif_aslam.jpg',
        path: '../../Artists_link/atif/atif_aslam.html',
    },
    {
        id: 1,
        name: `Ed Sheeran`,
        coverPath: '../../Assets/Artist/ed_sheeran.jpg',
        path: '../../Artists_link/ed/ed_sheeran.html',
    },
    {
        id: 2,
        name: `Charlie Puth`,
        coverPath: '../../Assets/Artist/charlie_puth.jpeg',
        path: '../../Artists_link/charlie/charlie_puth.html',
    },
    {
        id: 3,
        name: `Arijit Singh`,
        coverPath: '../../Assets/Artist/arjit_singh.jpeg',
        path: '../../Artists_link/arijit/arijit_singh.html',
    },
    {
        id: 4,
        name: `Taylor Swift`,
        coverPath: '../../Assets/Artist/taylor_swift.jpg',
        path: '../../Artists_link/taylor/taylor_swift.html',
    },
    {
        id: 5,
        name: `The Chainsmokers`,
        coverPath: '../../Assets/Artist/the_chainsmokers.jpg',
        path: '../../Artists_link/chainsmokers/the_chainsmokers.html',
    },

    {
        id: 6,
        name: `Shawn Mendes`,
        coverPath: '../../Assets/Artist/shawn_mendes.jpg',
        path: '../../Artists_link/shawn/shawn_mendes.html',
    },
    {
        id:7,
        name: `Camila Cabello`,
        coverPath: '../../Assets/Artist/Camila_Cabello.png',
        path: '../../Artists_link/camila/camila_cabello.html',
    },
    {
        id: 8,
        name: `One Direction`,
        coverPath: '../../Assets/Artist/one_direction.jpg',
        path: '../../Artists_link/one/one_direction.html',
    },
    {
        id: 9,
        name: `Pritam`,
        coverPath: '../../Assets/Artist/pritam.jpeg',
        path: '../../Artists_link/pritam/pritam.html',
    },
    

]
Array.from(document.getElementsByClassName('art_item')).forEach((element, i) => {
    element.getElementsByTagName('img')[0].src = artists[i].coverPath;
    element.getElementsByTagName('h5')[0].innerHTML = artists[i].name;
    element.getElementsByTagName('a')[0].href = artists[i].path;
})

Array.from(document.getElementsByClassName('art_item')).forEach((element) => {
    if(element.getElementsByTagName('h5')[0].innerHTML == artists[playingArtist].name){
        element.style.background = "rgba(105, 105, 170, 1)";
        element.getElementsByTagName('h5')[0].style.color = "black";
    }
});
