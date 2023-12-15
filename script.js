console.log('Welcome to Spotify')

let songIndex = 0;
let audioElement = new Audio('AssestsCopy/songs/1.mp3');
let masterPlay = document.getElementById('play');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let bgOpac = document.getElementById('Default');


let songs = [
    { songName: 'song1', filePath: 'AssestsCopy/songs/1.mp3', coverPath: 'AssestsCopy/covers/1.jpg' },
    { songName: 'song2', filePath: 'AssestsCopy/songs/2.mp3', coverPath: 'AssestsCopy/covers/2.jpg' },
    { songName: 'song3', filePath: 'AssestsCopy/songs/3.mp3', coverPath: 'AssestsCopy/covers/3.jpg' },
    { songName: 'song4', filePath: 'AssestsCopy/songs/4.mp3', coverPath: 'AssestsCopy/covers/4.jpg' },
    { songName: 'song5', filePath: 'AssestsCopy/songs/5.mp3', coverPath: 'AssestsCopy/covers/5.jpg' },
    { songName: 'song6', filePath: 'AssestsCopy/songs/6.mp3', coverPath: 'AssestsCopy/covers/6.jpg' },
    { songName: 'song7', filePath: 'AssestsCopy/songs/7.mp3', coverPath: 'AssestsCopy/covers/7.jpg' },
    { songName: 'song8', filePath: 'AssestsCopy/songs/8.mp3', coverPath: 'AssestsCopy/covers/8.jpg' },
    { songName: 'song9', filePath: 'AssestsCopy/songs/9.mp3', coverPath: 'AssestsCopy/covers/9.jpg' },
    { songName: 'song10', filePath: 'AssestsCopy/songs/10.mp3', coverPath: 'AssestsCopy/covers/10.jpg' },
]

songItems.forEach((element, i) => {
    let tempaudio = new Audio(songs[i].filePath);
    tempaudio.addEventListener('loadedmetadata', () => {
        element.getElementsByClassName('timeStamp')[0].innerText = `${Math.floor(tempaudio.duration / 60)}:${Math.floor(tempaudio.duration % 60)}`;
    })
}
)


songItems.forEach((element, i) => {
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText = songs[i].songName;
    // element.getElementsByClassName('timeStamp')[0].innerText = "3:00";
}
)

//current song name
const updateSongName = (songIndex) => {
    let songObj = songs[songIndex];
    masterSongName.innerText = `${songObj.songName}`;
}




const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        // element.classList.remove('fa-pause-circle');
        if (element.classList.contains('fa-pause-circle')) {
            element.classList.remove('fa-pause-circle');
            element.classList.add('fa-play-circle');
        }
    }
    )
}




Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        // console.log(e.target);
        if (e.target.classList.contains('fa-pause-circle')) {
            e.target.classList.remove('fa-pause-circle');
            e.target.classList.add('fa-play-circle');
            audioElement.pause();
            masterSongName.innerText = `${songs[songIndex].songName} Paused`;
            masterPlay.classList.remove('fa-pause-circle');
            masterPlay.classList.add('fa-play-circle');
            gif.style.opacity = 0;
            bgOpac.style.opacity = 0.8;
        }
        else {
            makeAllPlays();
            songIndex = parseInt(e.target.id);
            updateSongName(songIndex);
            e.target.classList.remove('fa-play-circle');
            e.target.classList.add('fa-pause-circle');
            masterPlay.classList.remove('fa-play-circle');
            masterPlay.classList.add('fa-pause-circle');

            audioElement.src = `AssestsCopy/songs/${songIndex + 1}.mp3`;
            audioElement.currentTime = 0;
            audioElement.play();
            gif.style.opacity = 1;
            bgOpac.style.opacity = 0.3;
        }
        changeOpacity();
    })
})




// master play/pause
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        updateSongName(songIndex);
        makeAllPlays();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        document.getElementById(`${songIndex}`).classList.remove('fa-play-circle');
        document.getElementById(`${songIndex}`).classList.add('fa-pause-circle');
        gif.style.opacity = 1;
        bgOpac.style.opacity = 0.3;
    }
    else {
        audioElement.pause();
        makeAllPlays();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        document.getElementById(`${songIndex}`).classList.remove('fa-pause-circle');
        document.getElementById(`${songIndex}`).classList.add('fa-play-circle');
        masterSongName.innerText = `${songs[songIndex].songName} Paused`;
        gif.style.opacity = 0;
        bgOpac.style.opacity = 0.8;
    }
})


//dynamic seekbar
audioElement.addEventListener('timeupdate', () => {
    //update seekbar
    // console.log('timeupdate');
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100.0);
    myProgressBar.value = progress;

    if (progress == 100) {
        if (songIndex >= 9) {
            songIndex = 0;
        }
        else {
            songIndex += 1;
        }
        audioElement.src = `AssestsCopy/songs/${songIndex + 1}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        updateSongName(songIndex);
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
        makeAllPlays();
        document.getElementById(`${songIndex}`).classList.remove('fa-play-circle');
        document.getElementById(`${songIndex}`).classList.add('fa-pause-circle');
    }

})
//Seek at time
myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100.0;
})


//play next
document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 9) {
        songIndex = 0;
    }
    else {
        songIndex += 1;
    }
    audioElement.src = `AssestsCopy/songs/${songIndex + 1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    updateSongName(songIndex);
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    gif.style.opacity = 1;
    makeAllPlays();
    document.getElementById(`${songIndex}`).classList.remove('fa-play-circle');
    document.getElementById(`${songIndex}`).classList.add('fa-pause-circle');
})

//play previous
document.getElementById('prev').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 9;
    }
    else {
        songIndex -= 1;
    }
    audioElement.src = `AssestsCopy/songs/${songIndex + 1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    updateSongName(songIndex);
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    gif.style.opacity = 1;
    makeAllPlays();
    document.getElementById(`${songIndex}`).classList.remove('fa-play-circle');
    document.getElementById(`${songIndex}`).classList.add('fa-pause-circle');
})

