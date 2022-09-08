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
