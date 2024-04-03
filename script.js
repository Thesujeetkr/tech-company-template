const hamburgerMenu = document.querySelector('.menu');
let isOpen = false;

hamburgerMenu.addEventListener('click', function(){
    if(isOpen) {
        document.querySelector('nav').classList.remove('menuOpen');

    } else {
        document.querySelector('nav').classList.add('menuOpen');
    }
    isOpen = !isOpen;
});


let menu = document.querySelector('.menu');
menu.onclick = function(){
    menu.classList.toggle('openmenu');
}


// active link

let links = document.querySelectorAll('header nav a');
const removeActiveClass = ()=>{
   links.forEach((link)=>{
    link.classList.remove('activenav')
   })
}
const addActiveClass = (entries, observer) =>{

    entries.forEach(entry =>{
        if(entry.isIntersecting){
            const link =document.querySelector(`header nav a[href='#${entry.target.id}']`)
            removeActiveClass();
            link.classList.add('activenav');
        }
    })
}
const options = {
    threshold: 0.3,
};

const observer = new IntersectionObserver(addActiveClass , options)
const sections = document.querySelectorAll('section');

sections.forEach((section)=>{
    observer.observe(section);
});