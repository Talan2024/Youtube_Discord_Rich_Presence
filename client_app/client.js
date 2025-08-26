let total_time = "";    
let current_time = "";  
let video_title ="";
let thumb = "";
let client_id = "0";

const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 });





wss.on('connection', ws => {
  console.log('Client connected');

  ws.on('message', rawMsg => {
    try {
      const msg = JSON.parse(rawMsg); 

      if (msg.type == "client_id"){
        client_id = msg.value.trim();
        console.log("client:", client_id);
      
      
      
const RPC = require('discord-rpc');
const clientId = client_id;
RPC.register(clientId);
const rpc = new RPC.Client({ transport: 'ipc' });

wss.on('connection', ws => {
  console.log('Client connected');

  ws.on('message', rawMsg => {
    try {
      const msg = JSON.parse(rawMsg); 

      if (msg.type === "total_time") {
        total_time = msg.value.trim();
        console.log("Total time set to:", total_time);
      }
      else if (msg.type == "name_video"){
        video_title = msg.value.trim()
        console.log("video_title:", video_title);
      }
      else if (msg.type == "thumb"){
        thumb = msg.value.trim()
        console.log("thumb:", thumb);
      }
      else if (msg.type === "current_time") {
        current_time = msg.value.trim();
        console.log("Current time updated to:", current_time);
      }
      
    } catch (err) {
      console.error("Invalid message:", rawMsg);
    }
  });
});

rpc.on('ready', () => {
  console.log('Connected to Discord RPC');

  setInterval(() => { 
    if (total_time) {
      rpc.setActivity({
        details: `Watching: ${video_title}`,
        state: `Watching: ${current_time} / ${total_time}`,
        largeImageKey: thumb,
        instance: false,
        smallImageKey: 'https://www.citypng.com/public/uploads/preview/png-round-play-video-player-white-icon-735811696868317uzks7wvwis.png',
      });
    }
  }, 1000); 
});

rpc.login({ clientId }).catch(console.error);

      
      
      
      
      
      
      }
     
      
    } catch (err) {
      console.error("Invalid message:", rawMsg);
    }
  });
});



