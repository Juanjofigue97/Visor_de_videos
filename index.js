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
        }
    }
});

let myvideo = document.getElementById('prueba');
myvideo.onclick = () =>{
    console.log("Hola");
}

function liveViews(response) {
    document.getElementById('visits').innerText = response.value;
}

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


function get_viewrs_ip(json){
    viwers_ip = json.ip;
    count_view(viwers_ip);
}

function count_view(viwers_ip){
    var views;
    var ip_to_string = viwers_ip.toString();

    for(var i, i = 0; i < ip_to_string.length; i++){
        ip_to_string =ip_to_string.replace(".","-")
    }
    firebase.database().ref().child("pages_views/" + ip_to_string).set({
        viwers_ip: viwers_ip
    });

    firebase.database().ref().child("page_views").once("value", function(snapshot){
        views = snapshot.numChildren();
        // document.getElementById("view_count_text").innerHTML = 
    })
}

// var startDate;
// function PlayVideo(video) {
//     console.log(video + " is playing");
//     startDate = new Date();
// }

// function PlayVideoCount() {
//     console.log("stooped video");
//     var diff = (new Date() - startDate);

//     var minutes = Math.floor((diff / 1000) / 60);
//     var second = Math.floor((diff / 1000));
//     console.log("watched video " + minutes + " minutes");
//     console.log("watched video " + second + " seconds");
// }
