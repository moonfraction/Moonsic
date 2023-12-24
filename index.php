<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Moonsic</title>
    <link rel="icon" type="image/x-icon" href="Assets/moon.png">
    <link rel="stylesheet" href="style.css">
</head>

<body>

    <!-- NAVBAR -->
    <nav>
        <li class="brand"><img src="Assets/logo.png" alt="MoonSIC"></li>
        <ul>
            <li>Discover<span></span></li>
            <li>My Library</li>
            <li>Radio</li>
        </ul>
        <div class="search">
            <i class="fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder="Search Moonsic . . . ">
            <div class="search_results">
                <!-- <a href="" class = "card">
                    <img src="Assets/Cover/3.jpg" alt = "3">
                    <div class="search_content">Until I found you
                        <div class="search_subtitles">Stephen Sanchez Em Beihold</div>
                    </div>
                </a> -->
                <!-- <a href="" class = "card">
                    <img src="Assets/Cover/3.jpg" alt = "3">
                    <div class="search_content">Until I found you
                        <div class="search_subtitles">Stephen Sanchez Em Beihold</div>
                    </div>
                </a>
                <a href="" class = "card">
                    <img src="Assets/Cover/3.jpg" alt = "3">
                    <div class="search_content">Until I found you
                        <div class="search_subtitles">Stephen Sanchez Em Beihold</div>
                    </div>
                </a>
                <a href="" class = "card">
                    <img src="Assets/Cover/3.jpg" alt = "3">
                    <div class="search_content">Until I found you
                        <div class="search_subtitles">Stephen Sanchez Em Beihold</div>
                    </div>
                </a>
                <a href="" class = "card">
                    <img src="Assets/Cover/3.jpg" alt = "3">
                    <div class="search_content">Until I found you
                        <div class="search_subtitles">Stephen Sanchez Em Beihold</div>
                    </div>
                </a>
                <a href="" class = "card">
                    <img src="Assets/Cover/3.jpg" alt = "3">
                    <div class="search_content">Until I found you
                        <div class="search_subtitles">Stephen Sanchez Em Beihold</div>
                    </div>
                </a> -->
            </div>
        </div>
    </nav>


    <!-- Backgrounds -->
    <div id="Default" class="songImg"></div> <!-- to add Default background image-->

    <div class="dynamicColor"></div> <!-- to add dynamic changing color-->

    <!-- Main Content -->
    <div class="hero">

        <div class="container">
            <h1>the Voice![playlist]</h1>
            <div class="playlist">
                <h4 class="active"><span></span> <i class="fa-solid fa-music"></i> playlist_1</h4>
                <h4><span></span> <i class="fa-solid fa-music"></i> last_listening</h4>
                <h4><span></span> <i class="fa-solid fa-music"></i> recommend</h4>
            </div>


            <div class="songList">
                <div class="songItem">
                    <img alt="1">
                    <span class="songName">Song_1</span>
                    <span class="songListPlay">
                        <span class="timeStamp">Time_stamp</span>
                        <i class="fas songItemPlay fa-play-circle" id="0"></i>
                    </span>
                </div>
                <div class="songItem">
                    <img alt="2">
                    <span class="songName">Song_2</span>
                    <span class="songListPlay"><span class="timeStamp">Time_stamp</span> <i
                            class="fas songItemPlay fa-play-circle" id="1"></i></span>
                </div>
                <div class="songItem">
                    <img alt="3">
                    <span class="songName">Song_3</span>
                    <span class="songListPlay"><span class="timeStamp">Time_stamp</span> <i
                            class="fas songItemPlay fa-play-circle" id="2"></i></span>
                </div>
                <div class="songItem">
                    <img alt="4">
                    <span class="songName">Song_4</span>
                    <span class="songListPlay"><span class="timeStamp">Time_stamp</span> <i
                            class="fas songItemPlay fa-play-circle" id="3"></i></span>
                </div>
                <div class="songItem">
                    <img alt="5">
                    <span class="songName">Song_5</span>
                    <span class="songListPlay"><span class="timeStamp">Time_stamp</span> <i
                            class="fas songItemPlay fa-play-circle" id="4"></i></span>
                </div>
                <div class="songItem">
                    <img alt="6">
                    <span class="songName">Song_6</span>
                    <span class="songListPlay"><span class="timeStamp">Time_stamp</span> <i
                            class="fas songItemPlay fa-play-circle" id="5"></i></span>
                </div>
                <div class="songItem">
                    <img alt="7">
                    <span class="songName">Song_7</span>
                    <span class="songListPlay"><span class="timeStamp">Time_stamp</span> <i
                            class="fas songItemPlay fa-play-circle" id="6"></i></span>
                </div>
                <div class="songItem">
                    <img alt="8">
                    <span class="songName">Song_8</span>
                    <span class="songListPlay"><span class="timeStamp">Time_stamp</span> <i
                            class="fas songItemPlay fa-play-circle" id="7"></i></span>
                </div>
                <div class="songItem">
                    <img alt="9">
                    <span class="songName">Song_9</span>
                    <span class="songListPlay"><span class="timeStamp">Time_stamp</span> <i
                            class="fas songItemPlay fa-play-circle" id="8"></i></span>
                </div>
                <div class="songItem">
                    <img alt="10">
                    <span class="songName">Song_10</span>
                    <span class="songListPlay"><span class="timeStamp">Time_stamp</span> <i
                            class="fas songItemPlay fa-play-circle" id="9"></i></span>
                </div>
            </div>
        </div>

        <div class="player">
            <div class="content">
                <h1>Ed Sheeran- Perfect</h1>
                <p>I found a love... for me.... darling just dive right in and follow my lead</p>
                <div class="buttons">
                    <button>PLAY</button>
                    <button>FOLLOW</button>
                </div>
            </div>
            <div class="popular_songs">
                <div class="h4">
                    <h4>Popular songs</h4>
                    <div class="btn_s">
                        <i class="fa-solid fa-chevron-left" id="pop_song_left"></i>
                        <i class="fa-solid fa-chevron-right" id="pop_song_right"></i>
                    </div>
                </div>
                <div class="pop_songs">
                    <li class="pop_item">
                        <div class="img_play">
                            <img src="Assets/Cover/1.jpg" alt="1">
                            <i class="fas songItemPlay fa-play-circle" id="0"></i>
                        </div>
                        <h5>Perfect<br>
                            <div class="subtitle">Ed_Sheeran</div>
                        </h5>
                    </li>
                    <li class="pop_item">
                        <div class="img_play">
                            <img src="Assets/Cover/1.jpg" alt="1">
                            <i class="fas songItemPlay fa-play-circle" id="1"></i>
                        </div>
                        <h5>Perfect<br>
                            <div class="subtitle">Ed_Sheeran</div>
                        </h5>
                    </li>
                    <li class="pop_item">
                        <div class="img_play">
                            <img src="Assets/Cover/1.jpg" alt="1">
                            <i class="fas songItemPlay fa-play-circle" id="2"></i>
                        </div>
                        <h5>Perfect<br>
                            <div class="subtitle">Ed_Sheeran</div>
                        </h5>
                    </li>
                    <li class="pop_item">
                        <div class="img_play">
                            <img src="Assets/Cover/1.jpg" alt="1">
                            <i class="fas songItemPlay fa-play-circle" id="3"></i>
                        </div>
                        <h5>Perfect<br>
                            <div class="subtitle">Ed_Sheeran</div>
                        </h5>
                    </li>
                    <li class="pop_item">
                        <div class="img_play">
                            <img src="Assets/Cover/1.jpg" alt="1">
                            <i class="fas songItemPlay fa-play-circle" id="4"></i>
                        </div>
                        <h5>Perfect<br>
                            <div class="subtitle">Ed_Sheeran</div>
                        </h5>
                    </li>
                    <li class="pop_item">
                        <div class="img_play">
                            <img src="Assets/Cover/1.jpg" alt="1">
                            <i class="fas songItemPlay fa-play-circle" id="5"></i>
                        </div>
                        <h5>Perfect<br>
                            <div class="subtitle">Ed_Sheeran</div>
                        </h5>
                    </li>
                    <li class="pop_item">
                        <div class="img_play">
                            <img src="Assets/Cover/1.jpg" alt="1">
                            <i class="fas songItemPlay fa-play-circle" id="6"></i>
                        </div>
                        <h5>Perfect<br>
                            <div class="subtitle">Ed_Sheeran</div>
                        </h5>
                    </li>
                    <li class="pop_item">
                        <div class="img_play">
                            <img src="Assets/Cover/1.jpg" alt="1">
                            <i class="fas songItemPlay fa-play-circle" id="7"></i>
                        </div>
                        <h5>Perfect<br>
                            <div class="subtitle">Ed_Sheeran</div>
                        </h5>
                    </li>
                    <li class="pop_item">
                        <div class="img_play">
                            <img src="Assets/Cover/1.jpg" alt="1">
                            <i class="fas songItemPlay fa-play-circle" id="8"></i>
                        </div>
                        <h5>Perfect<br>
                            <div class="subtitle">Ed_Sheeran</div>
                        </h5>
                    </li>
                    <li class="pop_item">
                        <div class="img_play">
                            <img src="Assets/Cover/1.jpg" alt="1">
                            <i class="fas songItemPlay fa-play-circle" id="9"></i>
                        </div>
                        <h5>Perfect<br>
                            <div class="subtitle">Ed_Sheeran</div>
                        </h5>
                    </li>
                </div>
            </div>


            <div class="popular_artists">
                <div class="h4">
                    <h4>Popular songs</h4>
                    <div class="btn_s">
                        <i class="fa-solid fa-chevron-left" id="pop_art_left"></i>
                        <i class="fa-solid fa-chevron-right" id="pop_art_right"></i>
                    </div>
                </div>
                <div class="items">
                    <li class="art_item">
                        <img src="Assets/Cover/2.jpg" alt="2">
                        <!-- <i class="fas songItemPlay fa-play-circle" id="0"></i> -->
                        <h5>Charlie Puth</h5>
                    </li>
                    <li class="art_item">
                        <img src="Assets/Cover/2.jpg" alt="2">
                        <!-- <i class="fas songItemPlay fa-play-circle" id="0"></i> -->
                        <h5>Charlie Puth</h5>
                    </li>
                    <li class="art_item">
                        <img src="Assets/Cover/2.jpg" alt="2">
                        <!-- <i class="fas songItemPlay fa-play-circle" id="0"></i> -->
                        <h5>Charlie Puth</h5>
                    </li>
                    <li class="art_item">
                        <img src="Assets/Cover/2.jpg" alt="2">
                        <!-- <i class="fas songItemPlay fa-play-circle" id="0"></i> -->
                        <h5>Charlie Puth</h5>
                    </li>
                    <li class="art_item">
                        <img src="Assets/Cover/2.jpg" alt="2">
                        <!-- <i class="fas songItemPlay fa-play-circle" id="0"></i> -->
                        <h5>Charlie Puth</h5>
                    </li>
                    <li class="art_item">
                        <img src="Assets/Cover/2.jpg" alt="2">
                        <!-- <i class="fas songItemPlay fa-play-circle" id="0"></i> -->
                        <h5>Charlie Puth</h5>
                    </li>
                    <li class="art_item">
                        <img src="Assets/Cover/2.jpg" alt="2">
                        <!-- <i class="fas songItemPlay fa-play-circle" id="0"></i> -->
                        <h5>Charlie Puth</h5>
                    </li>
                    <li class="art_item">
                        <img src="Assets/Cover/2.jpg" alt="2">
                        <!-- <i class="fas songItemPlay fa-play-circle" id="0"></i> -->
                        <h5>Charlie Puth</h5>
                    </li>
                    <li class="art_item">
                        <img src="Assets/Cover/2.jpg" alt="2">
                        <!-- <i class="fas songItemPlay fa-play-circle" id="0"></i> -->
                        <h5>Charlie Puth</h5>
                    </li>
                </div>
            </div>
        </div>
    </div>

    <!-- Bottom Player -->
    <div class="bottom">
        <!-- <div class="progressBarBox">
                <input type="range" name="range" id="myProgressBar" min="0" max="100" value="0">
            </div> -->
        <div class="songInfo">
            <img src="Assets/Z23b.gif" alt="playing" height="30px" id="gif">
            <img src="Assets/def6.png" alt="" id="poster_master_play" height="40px" width="40px">
            <h5 id="masterSongName">masterSongName
                <div class="subtitle">Artist_name</div>
            </h5>
        </div>
        <div class="icons"> 
            <i class="fa-solid fa-music shuffle">next</i>
            <i class="fas  fa-step-backward" id="back"></i>
            <i class="fas fa-2x fa-play-circle" id="masterPlay"></i>
            <i class="fas  fa-step-forward" id="next"></i>
            <a href="" download id="downloadMusic"><i class="fa-solid fa-cloud-arrow-down"></i></a>
        </div>
        <span id="currentStart"></span>
        <div class="bar">
            <input type="range" id="seek" min="0" max="100" value="0">
            <div class="bar2" id="bar2"></div>
            <div class="dot"></div>
        </div>
        <span id="currentEnd"></span>
        <div class="vol">
            <i class="fa-solid fa-volume-high" id="vol_icon"></i>
            <input type="range" name="range" id="vol" min="0" max="100" value="100">
            <div class="dot" id="vol_dot"></div>
            <div class="vol_bar"></div>
        </div>
    </div>

    </div>



    <script src="app.js"></script>
    <script src="https://kit.fontawesome.com/54b6994b08.js" crossorigin="anonymous"></script>
</body>

</html>