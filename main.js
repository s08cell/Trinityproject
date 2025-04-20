const navicon=document.querySelector('#nav_icon')
const sidebar=document.querySelector('.sidebar')

navicon.addEventListener("click",()=>{
    sidebar.style.display='flex'
})

const closeicon=document.querySelector('#close_icon')
closeicon.addEventListener("click",()=>{
    sidebar.style.display='none'
})

window.addEventListener('load', () => {
    registerSW();
  });

  // Register the Service Worker
  async function registerSW() {
    if ('serviceWorker' in navigator) {
      try {
        await navigator
              .serviceWorker
              .register('serviceworker.js');
      }
      catch (e) {
        console.log('SW registration failed');
      }
    }
  }
