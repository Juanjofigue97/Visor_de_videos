// CONTROL UBICACION DE VIDEOS 
let listVideo = document.querySelectorAll('.video-list .vid');
let mainVideo = document.querySelector('.main-video video')
let title = document.querySelector('.main-video .title')

listVideo.forEach(video => {
    video.onclick = () =>{
        listVideo.forEach(vid => vid.classList.remove('active'));
        video.classList.add('active');
        if(video.classList.contains('active')){
            let src = video.children[0].getAttribute('src');
            let type = video.children[0].getAttribute('type');
            mainVideo.src = src;
            let text = video.children[1].innerHTML;
            title.innerHTML =text;
            console.log(text,src,type);
            let iconPause = 'fa fa-solid fa-pause';
            icon.className = iconPause;
        }
    }
});

function liveViews(response) {
    document.getElementById('visits').innerText = response.value;
}
// FIN DE CONTROL UBICACION DE VIDEOS

//CONTADOR DE VISITAS
var counterContainer = document.querySelector(".website-counter");
var resetButton = document.querySelector("#reset");
var visitCount = localStorage.getItem("page_view");

// Check if page_view entry is present
if (visitCount) {
  visitCount = Number(visitCount) + 1;
  localStorage.setItem("page_view", visitCount);
} else {
  visitCount = 1;
  localStorage.setItem("page_view", 1);
}
counterContainer.innerHTML = visitCount;

// Adding onClick event listener
resetButton.addEventListener("click", () => {
  visitCount = 1;
  localStorage.setItem("page_view", 1);
  counterContainer.innerHTML = visitCount;
});


// CONTROLES DE VIDEO

var video = document.querySelector('#video-principal');
var juice = document.querySelector('.orange-juice');
var btn = document.querySelector('#play-pause');
var icon = document.getElementById('icon');
var volume = document.getElementById('volumen-bar');


function togglePlayPause(){
    if(video.paused){
        btn.className = 'pause';
        video.play();
        let iconPause = 'fa fa-solid fa-pause';
        icon.className = iconPause;
    }
    else
    {
        let iconStar= 'fa fa-solid fa-play';
        icon.className = iconStar;
        btn.className = 'play'
        video.pause();
    }
    console.log(icon.getAttribute('class'));
}

btn.onclick = function(){
    togglePlayPause();
}

// Menu principal

video.addEventListener('timeupdate', function(){
    var juicePos = video.currentTime / video.duration;
    juice.style.width = juicePos * 100 + "%";
    if (video.ended){
        let iconStar= 'fa fa-solid fa-play';
        icon.className = iconStar;
    }
})

volume.addEventListener('change', function(e){
    video.volume = e.currentTarget.value /100;
    console.log(video.volume,e)
    console.log(video.currentTime,video.duration);
})

// vol.onclick = function(){
//     sounds()
// }

// MENU DESPLEGABLE

function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("prin").style.marginLeft = "250px";
    document.getElementById("menu-prin").style.paddingLeft = "0";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("prin").style.marginLeft = "0";
    document.getElementById("menu-prin").style.paddingLeft = "70px";
}

// FIN DE MENU DESPLEGABLE

var timeStarted = -1;
var timePlayed = 0;
var duration = 0;
// If video metadata is laoded get duration
if(video.readyState > 0)
  getDuration.call(video);
//If metadata not loaded, use event to get it
else
{
  video.addEventListener('loadedmetadata', getDuration);
}
// remember time user started the video
function videoStartedPlaying() {
  timeStarted = new Date().getTime()/1000;
}
function videoStoppedPlaying(event) {
  // Start time less then zero means stop event was fired vidout start event
  if(timeStarted>0) {
    var playedFor = new Date().getTime()/1000 - timeStarted;
    timeStarted = -1;
    // add the new number of seconds played
    timePlayed+=playedFor;
  }
  document.getElementById("played").innerHTML = Math.round(timePlayed)+"";
  // Count as complete only if end of video was reached
  if(timePlayed>=duration && event.type=="ended") {
    document.getElementById("status").className="complete";
  }
}

function getDuration() {
  duration = video.duration;
  document.getElementById("duration").appendChild(new Text(Math.round(duration)+""));
  console.log("Duration: ", duration);
}

video.addEventListener("play", videoStartedPlaying);
video.addEventListener("playing", videoStartedPlaying);
video.addEventListener("ended", videoStoppedPlaying);
video.addEventListener("pause", videoStoppedPlaying);

let ip = document.getElementById('gfg');
console.log(ip);
let a = ip.textContent;
console.log(a)
var dict = {"1" : ip};
var dictstring = JSON.stringify(dict);
console.log(dictstring);

let ip_Adress = 'h';
console.log(ip_Adress)

import("https://api.ipify.org?format=jsonp&callback=getIP");
function getIP(json) { 
    console.log((`Your IP Address is ${json.ip}`))
    ip_Adress += json.ip;
}

function json(url) {
    return fetch(url).then(res => res.json());
}

let apiKey = 'cc49dc0d3bf75fcaa4f502e4f42e3c2b95d504972ad1dcc746128088';
json(`https://api.ipdata.co?api-key=${apiKey}`).then(data => {
    console.log(data.ip);
    console.log(data.city);
    console.log(data.country_code);
    // so many more properties
});

console.log(video.currentTime)
