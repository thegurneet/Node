const WebSocketServer = require('ws').Server;
const socket = new WebSocketServer({port:3232});

socket.on('connection', (ws)=>{
  console.log('We are connected');
})
