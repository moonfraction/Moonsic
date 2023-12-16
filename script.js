console.log('Welcome to Moonsic')


let songIndex = 0;
let audioElement = new Audio('Assets/songs/1.mp3');
let masterPlay = document.getElementById('play');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let currSongImg = document.getElementById('Default');


let songs = [
    { songName: 'Perfect- Ed Sheeran', filePath: 'Assets/songs/1.mp3', coverPath: 'Assets/Cover/1.jpg', bgPath:'Assets/Bg/1.jpg' },
    { songName: 'See You Again- Charlie Puth', filePath: 'Assets/songs/2.mp3', coverPath: 'Assets/Cover/2.jpg', bgPath:'Assets/Bg/2.jpg' },
    { songName: 'Until I Found You', filePath: 'Assets/songs/3.mp3', coverPath: 'Assets/Cover/3.jpeg', bgPath:'Assets/Bg/3.jpg' },
    { songName: 'Lover- Taylor Swift', filePath: 'Assets/songs/4.mp3', coverPath: 'Assets/Cover/4.jpg', bgPath:'Assets/Bg/4.webp' },
    { songName: 'Paris- The Chainsmokers', filePath: 'Assets/songs/5.mp3', coverPath: 'Assets/Cover/5.jpg', bgPath:'Assets/Bg/5.jpg' },
    { songName: 'What makes you Beautiful- 1D', filePath: 'Assets/songs/6.mp3', coverPath: 'Assets/Cover/6.jpg', bgPath:'Assets/Bg/6.jpg' },
    { songName: 'iPad- The Chainsmokers', filePath: 'Assets/songs/7.mp3', coverPath: 'Assets/Cover/7.jpg', bgPath:'Assets/Bg/7.jpg' },
    { songName: 'Photograph- Ed Sheeran', filePath: 'Assets/songs/8.mp3', coverPath: 'Assets/Cover/8.jpg', bgPath:'Assets/Bg/8.jpg' },
    { songName: 'We don\'t talk anymore', filePath: 'Assets/songs/9.mp3', coverPath: 'Assets/Cover/9.jpeg', bgPath:'Assets/Bg/9.jpg' },
    { songName: 'Stiches- Shawn Mendes', filePath: 'Assets/songs/10.mp3', coverPath: 'Assets/Cover/10.jpg', bgPath:'Assets/Bg/10.jpeg' },
]

//added song duration, name, coverImg to the song list
songItems.forEach((element, i) => {
    let tempaudio = new Audio(songs[i].filePath);
    tempaudio.addEventListener('loadedmetadata', () => {
        element.getElementsByClassName('timeStamp')[0].innerText = `${Math.floor(tempaudio.duration / 60)}:${Math.floor(tempaudio.duration % 60)}`;
    })
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText = songs[i].songName;
}
)


//current song name in masterSongName and update bgImg
const updateSongName = (songIndex) => {
    let songObj = songs[songIndex];
    masterSongName.innerText = `${songObj.songName}`;
    document.querySelector('.songImg').style.backgroundImage = `url('${songObj.bgPath}')`;

}

//if any pause button present, make it play button
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

//play/pause particular song
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
            currSongImg.style.opacity = 0.8;
        }
        else {
            makeAllPlays();
            songIndex = parseInt(e.target.id);
            updateSongName(songIndex);
            e.target.classList.remove('fa-play-circle');
            e.target.classList.add('fa-pause-circle');
            masterPlay.classList.remove('fa-play-circle');
            masterPlay.classList.add('fa-pause-circle');

            audioElement.src = `Assets/songs/${songIndex + 1}.mp3`;
            audioElement.currentTime = 0;
            audioElement.play();
            gif.style.opacity = 1;
            currSongImg.style.opacity = 0.3;
        }
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
        currSongImg.style.opacity = 0.3;
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
        currSongImg.style.opacity = 0.8;
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
        audioElement.src = `Assets/songs/${songIndex + 1}.mp3`;
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
    audioElement.src = `Assets/songs/${songIndex + 1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    currSongImg.style.opacity = 0.3;
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
    audioElement.src = `Assets/songs/${songIndex + 1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    currSongImg.style.opacity = 0.3;
    updateSongName(songIndex);
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    gif.style.opacity = 1;
    makeAllPlays();
    document.getElementById(`${songIndex}`).classList.remove('fa-play-circle');
    document.getElementById(`${songIndex}`).classList.add('fa-pause-circle');
})
