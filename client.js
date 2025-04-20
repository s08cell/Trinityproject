const socket=io()

const form=document.querySelector('#form');
        const input=document.querySelector('#input');
        const messages=document.querySelector('#message')
        form.addEventListener('submit',(e) =>{
            e.preventDefault();
            if(input.value){
                socket.emit('chat message',input.value);
                input.value=''
            }
        })

        socket.on('chat message',(msg)=>{
            const item =document .createElement('li')
            item.textContent=msg;
            messages.appendChild(item);
            window.scrollTo(0,document.body.scrollHeight)
        })
