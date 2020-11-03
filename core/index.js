require('./bot')

const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const Config = require('./config')
const port = 45720

app.use(express.static('./core/site'));

http.listen(port, '0.0.0.0', () => {
    console.log(`Running dasboard on http://localhost:${port}/`);
});

io.on('connection', function(socket) {
    socket.emit('init', Config.name, Config.prefix, Config.token, Config.embed_settings.icon, Config.embed_settings.color)
    socket.on('save', function(name, prefix, token, icon, color) {
        Config.name = name
        Config.prefix = prefix
        Config.token = token
        Config.embed_settings.color = color
        Config.embed_settings.icon = icon
        Config.save()
    })
})