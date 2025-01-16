let ul = document.querySelector('ul')
let burger = document.querySelector('.burger')
let nav = document.querySelector('nav')

burger.addEventListener('click',()=>{
    ul.classList.toggle('toggle')
})

window.onload = () =>{
    nav.style.transform = "translateY(0px)"
    
}