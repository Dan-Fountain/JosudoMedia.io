const slidesContainer = document.querySelector(".slides-container");
const slides = document.querySelectorAll(".slide");

//Buttos 
const prevBtn = document.querySelector(".to-prev");
const nextBtn = document.querySelector(".to-next");

//Counter 
let counter = 1;
const size = slides[0].clientWidth;

// slidesContainer.style.transform = `translateX(` + (-size * counter) + `px)`;

//Button Listeners 
nextBtn.addEventListener('click', ()=> {
    if (counter >= slides.length - 1) return;
    slidesContainer.style.transition = `transform .4s ease-in-out`;
    counter++;
    slidesContainer.style.transform = `translateX(` + (-size * counter) + `px)`;
}); 

prevBtn.addEventListener('click', ()=> {
    if (counter <= 0) return;
    slidesContainer.style.transition = `transform .4s ease-in-out`;
    counter--;
    slidesContainer.style.transform = `translateX(` + (-size * counter) + `px)`;
});

slidesContainer.addEventListener('transitionend', ()=> {
    console.log(slides[counter]);
    console.log(counter)
    if (slides[counter].id === 'clone2') {
        slidesContainer.style.transition = `none`;
        counter = slides.length - 2;
        slidesContainer.style.transform = `translateX(` + (-size * counter) + `px)`;
    }  

    if (slides[counter].id === 'clone1') {
        slidesContainer.style.transition = `none`;
        counter = slides.length - counter;
        slidesContainer.style.transform = `translateX(` + (-size * counter) + `px)`;
    }  
});


// Hamburger Menu Scripts
const ham = document.getElementById("ham");
const navbar = document.getElementById("navbar");
const header = document.getElementById("nav-div");
const section = document.getElementsByClassName("section");

ham.onclick = function () {
    ham.classList.toggle("active");
    navbar.classList.toggle("active");
}

document.onclick = function(e) {
    if(e.target.id !== "header" && e.target.id !== "navbar" && e.target.id !== "ham") {
        ham.classList.remove("active");
        navbar.classList.remove("active");
    };
};