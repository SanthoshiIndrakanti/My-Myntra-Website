const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close')

// checking if the navbar is already opened
if(bar){
    bar.addEventListener('click',()=>{
        nav.classList.add('active');
    })
}
if(close){
    close.addEventListener('click',()=>{
        nav.classList.remove('active');
    })
}