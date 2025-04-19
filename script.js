
const navicon=document.querySelector('#nav_icon')
const sidebar=document.querySelector('.sidebar')

navicon.addEventListener("click",()=>{
    sidebar.style.display='flex'
})

const closeicon=document.querySelector('#close_icon')
closeicon.addEventListener("click",()=>{
    sidebar.style.display='none'
})
