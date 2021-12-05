//dom objects

const menuBtn=document.querySelector(".menu-btn");
const navItems=document.querySelector(".nav-links__burger");
let menuOpen=false;

const contactForm = document.querySelectorAll(".contact form .row input");
const cards = document.querySelectorAll(".info-cards .cards div");


//functions

const checkScreenWidth=()=>{
    var screenWidth=window.innerWidth;
    if(screenWidth<568){
        phoneFunctions();
    }
    else{
        notPhoneFunctions();
    }
}

const burgerMenu=()=>{
    menuBtn.addEventListener("click",()=>{
        if(!menuOpen){
            menuBtn.classList.add("open");
            menuOpen=true;
            navItems.classList.remove("closed")
        }
        else{
            menuBtn.classList.remove("open");
            menuOpen=false;
            navItems.classList.add("closed"); 
        }
    })
}




const phoneFunctions=()=>{
    cards.forEach(card=>{
        card.classList.add("col-11");
        card.classList.remove("col-6");
    })
    
}

const notPhoneFunctions=()=>{
    cards.forEach(card=>{
        card.classList.remove("col-11");
        card.classList.add("col-6");
    })
    
}

//event listeners

window.onresize=checkScreenWidth;

//function calling

checkScreenWidth();
burgerMenu();
