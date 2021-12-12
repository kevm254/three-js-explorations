const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 3004;

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

io.on('connection', (socket) => {
    io.emit('chat message', 'welcome to cool chat!');

    socket.on('chat message', msg => {
        io.emit('chat message', msg);
    });
});

http.listen(port, () => {
    console.log(`Socket.IO server running at http://localhost:${port}/`);
});
