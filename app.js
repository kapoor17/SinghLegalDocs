const menuBtn=document.querySelector(".menu-btn");
const navItems=document.querySelector(".nav-links__burger");
const contactForm = document.querySelector(".contact form");


let menuOpen=false;
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

const updateValue=(value)=>{
    console.log(contactForm.value);
}