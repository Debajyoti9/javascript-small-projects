console.log('Welcome to javascript');

 var menu_toggle= document.querySelector('#menu-toggle');
 var active_element = document.querySelectorAll('.active-element');

menu_toggle.addEventListener("click",()=>{
    for(activated=0;activated<active_element.length;activated++){
        active_element[activated].classList.toggle('active');
    }
})