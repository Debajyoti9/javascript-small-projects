const btn = document.querySelector('.switch_btn');
const video = document.querySelector('.video_container');
const preloader = document.querySelector(".preloader");
video.pause();
btn.addEventListener('click',()=>{
    if(!btn.classList.contains("slide")){
        btn.classList.add('slide');
        video.play();
    }
    else{
        btn.classList.remove('slide');
        video.pause();
    }
})

window.addEventListener('load',()=>{
    preloader.classList.add('hide-preloader')
})