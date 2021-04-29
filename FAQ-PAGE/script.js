const questions = document.querySelectorAll('.question');

questions.forEach((question)=>{
    // console.log(question);

    const btn = question.querySelector('.question__btn');
     console.log(btn);
    
    btn.addEventListener('click',()=>{
        questions.forEach((item)=>{
            if(item !== question){
                item.classList.remove('show-text');
            }
        })
        question.classList.toggle('show-text');
    })
})