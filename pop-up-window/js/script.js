var parent = document.querySelector(".modal-parent"),
    btn = document.querySelector("button"),
    x = document.querySelector(".x"),
    sec = document.querySelector("section");

const visible = ()=>{
    parent.style.display = "block";
}

const disappear = ()=>{
    parent.style.display = "none";
    sec.style.filter = blur("25px");
}

const disappearAgain = ()=>{
    parent.style.display = "none";
    sec.style.filter = blur("0px")
}

btn.addEventListener("click",visible);

x.addEventListener("click",disappear);

parent.addEventListener("click",disappearAgain);