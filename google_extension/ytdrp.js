const socket = new WebSocket("ws://localhost:8080");

const client_sender = document.getElementById('client_sender');
const client_text = document.getElementById('client_text')

client_sender.addEventListener('click',()=>{
   
    socket.send(JSON.stringify({
            type: "client_id",
            value: client_text.value
        }));
});
