let nav_toggle = document.querySelector('.nav-toggle');


let links = document.querySelector('.links');

nav_toggle.addEventListener('click',()=>{
    //   console.log(links.classList);

    //   if(links.classList.contains("show-links")){
    //       links.classList.remove('show-links');
    //   }
    //   else{
    //       links.classList.add('show-links');
    //   }

    links.classList.toggle('show-links');
})