let butt = document.getElementById('test');

let w=innerWidth;
let h=innerHeight;
let bh=document.getElementById('test').offsetHeight;
let bw=document.getElementById('test').offsetWidth;

butt.style.top=(h/2)-(bh/2)+'px';
butt.style.left=(w/2)-(bw/2)+'px';

window.addEventListener('resize',() => {
    let w=innerWidth;
    let h=innerHeight;
    let bh=document.getElementById('test').offsetHeight;
    let bw=document.getElementById('test').offsetWidth;

    butt.style.top=(h/2)-(bh/2)+'px';
    butt.style.left=(w/2)-(bw/2)+'px';

})