let bgimg = document.getElementById("para");

window.addEventListener('scroll',() =>{

    let ass=window.scrollY;
    bgimg.style.top=0.5*ass+'px';
    
});