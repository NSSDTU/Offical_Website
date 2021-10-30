var headpara = document.getElementById("head3");
function fade(){
    headpara.style.opacity="100%";
}
setTimeout(fade, 1000);

window.addEventListener('scroll',()=>{
let value = window.scrollY;

if(value>=4){
    document.getElementById("navbar").style.backgroundColor="rgb(44, 44, 44)"
}else{
    document.getElementById("navbar").style.backgroundColor="transparent"

}
})
