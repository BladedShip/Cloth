const divass = document.getElementById('para');
const low = document.getElementById('lower');
const shp =document.getElementById('shhp');
const glay =document.getElementById('sm');
const rf = document.getElementById('rfb');
const burgmen = document.getElementById("burmnu");
const togb = document.getElementById("toggb");
var flag = false;
let x = window.matchMedia("(min-width: 500px)");

window.addEventListener('scroll',() =>{
    let ass = window.scrollY;
    divass.style.top = -1.5*ass + 'px'; 

});
window.addEventListener('scroll',() =>{

    if (x.matches)
    {
    if(window.pageYOffset>500)
    {   
        shp.style.fontSize='4rem';
        shp.style.transition="1s";
        rf.style.transition="1s";
        shp.style.marginLeft="2rem";
    }
}
else
{
    if(window.pageYOffset>300)
    {   
        shp.style.fontSize='2rem';
        shp.style.transition="1s";
        rf.style.transition="1s";
        shp.style.marginLeft="2rem";
    }
}
});
window.addEventListener('scroll',() =>{
    if (x.matches)
    {
        if(window.pageYOffset<500)
    {
        shp.style.fontSize="2rem";
        shp.style.marginLeft="1rem";
        shp.style.transition="1s";
        rf.style.transition="1s";
    }
}
    else
    {
        if(window.pageYOffset<300)
        {
            shp.style.fontSize="1rem";
            shp.style.marginLeft="1rem";
            shp.style.transition="1s";
            rf.style.transition="1s";
        }
    }
});

togb.addEventListener('click',() =>{
    burgmen.classList.toggle('active');
}
)