
let nav_toggle = document.querySelector('.nav-toggle');
let close_btn = document.querySelector('.close-btn');
let sidebar = document.querySelector('.sidebar');
nav_toggle.addEventListener('click',()=>{
    console.log('clicked');
    sidebar.classList.toggle('show-sidebar');
});

close_btn.addEventListener('click',()=>{
    sidebar.classList.remove('show-sidebar');
})