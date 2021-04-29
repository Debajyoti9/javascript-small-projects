let modal_btn = document.querySelector('.modal-btn');
let modal_overplay = document.querySelector('.modal-overlay');
let close_btn = document.querySelector('.close-btn')
modal_btn.addEventListener('click',()=>{
      modal_overplay.classList.add('open-modal');
})

close_btn.addEventListener('click',()=>{
    modal_overplay.classList.remove('open-modal');
})
