const divass = document.getElementById('para');
const low = document.getElementById('lower');
const shp =document.getElementById('shhp');
const glay =document.getElementById('sm');
const rf = document.getElementById('rfb');
const burgmen = document.getElementById("burmnu");
const togb = document.getElementById("toggb");
const togas = document.getElementById("aso");
const togi = document.getElementById("op");
let x = window.matchMedia("(min-width: 500px)");
var i=1 ;

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
        shp.style.transition=".5s";
        rf.style.transition=".5s";
        shp.style.marginLeft="2rem";
    }
}
else
{
    if(window.pageYOffset>300)
    {   
        shp.style.fontSize='2rem';
        shp.style.transition=".5s";
        rf.style.transition=".5s";
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
        shp.style.transition=".5s";
        rf.style.transition=".5s";
    }
}
    else
    {
        if(window.pageYOffset<300)
        {
            shp.style.fontSize="1rem";
            shp.style.marginLeft="1rem";
            shp.style.transition=".5s";
            rf.style.transition=".5s";
        }
    }
});

togb.addEventListener('click',() =>{
    burgmen.classList.toggle('active');
}
)
change=()=>{
    i=i%5+1;
    togi.style.transition="300ms"
    togi.style.backgroundImage="url('RES/bg/mbg"+i+".jpg')";
    setTimeout(change, 3000);
    console.log("PUNDAE "+i);
    
};
change();