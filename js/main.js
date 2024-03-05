const menuBtn = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn__burger');
let showMenu = false;
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.menu-nav__item');

menuBtn.addEventListener('click', toggleMenu)

function toggleMenu(){
    if(!showMenu){
        hamburger.classList.add('open');
        nav.classList.add('open');
        menuNav.classList.add('open');
        navItems.forEach(item => item.classList.add('open'));

        showMenu = true;
    } else {
        hamburger.classList.remove('open');
        nav.classList.remove('open');
        menuNav.classList.remove('open');
        navItems.forEach(item => item.classList.remove('open'));

        showMenu = false;
    }
}



const containerEl = document.querySelector('.container')

const careers = ['Web Developer','Designer','Programmer']
let characterIndex = 0

let careerIndex = 0
updatText()

function updatText(){
    characterIndex++
containerEl.innerHTML = `
    <h1>I am ${careers[careerIndex].slice(0,1) === 'I' ? 'an' : 'a'} ${careers[careerIndex].slice(0,characterIndex)}</h1>
`
    if(characterIndex === careers[careerIndex].length){
        careerIndex++
        characterIndex = 0
    }
    if(careerIndex === careers.length){
        careerIndex = 0
    }
    setTimeout(updatText, 400)
}