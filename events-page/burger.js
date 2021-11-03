
 var count=0;
const toggle = () => {
    const nav = document.getElementById("topnav");
    nav.className === "topnav" ? nav.className += " responsive" : nav.className = "topnav";

    if(count%2!=0)
{
    document.querySelector("i").style.opacity="100%";
    count=1;
}

else{
    document.querySelector("i").style.opacity="0%";
    count=0;
    

}
   
};

