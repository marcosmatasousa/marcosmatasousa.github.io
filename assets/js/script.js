var audioPlayer = document.getElementById('audioPlayer');
var playPause = document.getElementById('play-pause');
playPause.src = "../html/static_music/icons/play.png";

playlist = document.getElementById('playlist');
currentSong = playlist.children[0].innerHTML;

// Events that updates the play/pause button display
audioPlayer.addEventListener('ended', forward);

audioPlayer.addEventListener('start', function(){
    playPause.src = '../html/static_music/icons/pause.png';
})

audioPlayer.addEventListener('ended', function(){
    playPause.src = '../html/static_music/icons/play.png';
})

audioPlayer.addEventListener('pause', function(){
    playPause.src = '../html/static_music/icons/play.png';
    console.log(`Song paused`);
})

audioPlayer.addEventListener('play', function(){
    playPause.src = '../html/static_music/icons/pause.png';
})

function playPauseButton(){
    if (!audioPlayer.paused){
        audioPlayer.pause();
    }
    else if (audioPlayer.currentTime === 0){
        playSong(`../html/static_music/songs/${currentSong}.mp3`);
    }
    else{
        resume()
    }
}

function updateSong(song){
    currentSong = song;
}

function forward(){
    console.log("Forward clicked")
    
    var playlist = document.getElementById('playlist');
    var itens = playlist.children;

    // Search for the current song on the playlist and updates it
    for(var i = 0; i < itens.length; i++){
        if(itens[i].innerHTML === currentSong && i !== (itens.length - 1)){
            next = i + 1;
            var musicSrc = `../html/static_music/songs/${itens[next].innerHTML}.mp3`
            updateSong(itens[next].innerHTML);
            playSong(musicSrc);
            break;
        }
    }
}

function backward(){
    console.log("Backward clicked")

    // Search for the current song on the playlist and updates it
    if (audioPlayer.currentTime <= 3){
        var playlist = document.getElementById('playlist');
        var itens = playlist.children;

        for(var i = 0; i < itens.length; i++){
            if(itens[i].innerHTML === currentSong && i !== 0){
                next = i - 1;
                var musicSrc = `../html/static_music/songs/${itens[next].innerHTML}.mp3`;
                updateSong(itens[next].innerHTML);
                playSong(musicSrc);
                break;
            }
        }
    }
    else{
        var musicSrc = `../html/static_music/songs/${currentSong}.mp3`
        playSong(musicSrc)
    }
}

function clickOnTitle(item){
    var musicSrc = `../html/static_music/songs/${item}.mp3`;
    updateSong(item)
    playSong(musicSrc);
};

function playSong(src){
    audioPlayer.src = src;
    audioPlayer.play(src);
    console.log("Now playing: " + src);
}

function resume(){
    audioPlayer.play();
    console.log('Song resumed');
}

// TODO: 
// ARRUMAR O FORWARD QUANDO ESTÁ NA PRIMEIRA E ULTIMA TRACK
// ARRUMAR O CURRENT SONG QUANDO A PLAYLIST CHEGAR AO FIM