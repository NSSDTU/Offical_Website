const navMenu = document.getElementById('nav-menu'),
toggleMenu = document.getElementById('toggle-menu'),
closeMenu = document.getElementById('close-menu');

toggleMenu.addEventListener('click',()=>{
    navMenu.classList.toggle('show')
})

closeMenu.addEventListener('click',()=>{
    navMenu.classList.remove('show')
})

window.addEventListener('scroll',()=>{
let value = window.scrollY;

if(value>=4){
    document.getElementById("navbar").style.backgroundColor="rgb(44, 44, 44)"
}else{
    document.getElementById("navbar").style.backgroundColor="transparent"

}
})
