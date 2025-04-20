
const express=require('express');
const {createServer}=require('node:http');
const{join}=require('node:path');
const{Server}=require('socket.io');
const app=express();
const server=createServer(app);
const io=new Server(server);

app.use(express.static(__dirname)); 
app.get('/',(req,res) =>{
    res.sendFile(join(__dirname,'style.css'));
});

app.get('/',(req,res) =>{
    res.sendFile(join(__dirname,'chat.css'));
});

app.get('/',(req,res) =>{
    res.sendFile(join(__dirname,'carbon.css'));
});
app.get('/',(req,res) =>{
    res.sendFile(join(__dirname,'aichat.css'));
});

app.get('/',(req,res) =>{
    res.sendFile(join(__dirname,'index.html'));
});
app.get('/',(req,res) =>{
    res.sendFile(join(__dirname,'humanindex.html'));
});
app.get('/',(req,res) =>{
    res.sendFile(join(__dirname,'carbon.html'));
});

app.get('/',(req,res) =>{
    res.sendFile(join(__dirname,'aichat.html'));
});
io.emit('hello','world');
io.on('connection',(socket)=>{
    socket.broadcast.emit('hi');
    socket.on('chat message',(msg) =>{
        io.emit('chat message',msg)
    })
});
server.listen(5500,()=>{
    console.log('server running at http://localhost:5500');
})

