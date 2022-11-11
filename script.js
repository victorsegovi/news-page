const body = document.getElementById('body')
const bars = document.getElementById('bars');
const nav = document.getElementById('nav');
const close = document.getElementById('close');
const shadow = document.getElementById('shadow')


bars.addEventListener('click', ()=>{
    nav.style.display = 'block';
    shadow.style.display = 'block';
    body.style.overflow = 'hidden';
})

close.addEventListener('click', ()=>{
    nav.style.display = 'none'
    shadow.style.display = 'none'
    body.style.overflow = 'auto';
})

shadow.addEventListener('click', ()=>{
    nav.style.display = 'none'
    shadow.style.display = 'none'
    body.style.overflow = 'auto';
})