const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');

//Play and Pause Video
//note that .play() and .paused() are methods in JS
function toggleVideoStatus() {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }

};

//update play and pause icon
function updatePlayIcon() {
    if(video.paused) {
        play.innerHTML = '<i class="fa fa-play fa-2x"></i>';
    } else {
        play.innerHTML = '<i class="fa fa-pause fa-2x"></i>';
    }
};

//stop video
function stopVideo() {
    video.currentTime = 0;
    video.pause();
};
//update progress and timestamp
function updateProgress() {
    progress.value = (video.currentTime / video.duration) * 100;

    //Above moves the video progress button. Below shows minutes/seconds played

    //To get minutes
    let mins = Math.floor(video.currentTime / 60);
    if (mins < 10) {
        mins = '0' + String(mins);
    }

    //To get seconds
    let secs = Math.floor(video.currentTime % 60);
    if (secs < 10) {
        secs = '0' + String(secs);
    }

    timestamp.innerHTML = `${mins}:${secs}`;
};


//set video time to progress
function setVideoProgress() {
    video.currentTime = (+progress.value * video.duration) / 100;
};



//Add Event listeners to make the video operational

video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);

play.addEventListener('click', toggleVideoStatus);

stop.addEventListener('click', stopVideo);

progress.addEventListener('change', setVideoProgress);