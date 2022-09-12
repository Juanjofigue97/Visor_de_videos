// CONTROL UBICACION DE VIDEOS 
let listVideo = document.querySelectorAll('.video-list .vid');
let mainVideo = document.querySelector('.main-video video');
let title = document.querySelector('.main-video .title');

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
            sessionStorage.setItem('title1',src); // Guarda el Video que esta mirando
        }
    }
});

function liveViews(response) {
    document.getElementById('visits').innerText = response.value;
}
// FIN DE CONTROL UBICACION DE VIDEOS
let pruebas = mainVideo.scr;
console.log(`pruebas: ${pruebas}, ${video.getAttribute('src')}`);
localStorage.setItem('Prueba1',pruebas);
