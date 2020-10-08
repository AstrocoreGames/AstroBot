const Embed = require('../util/Embed')
const fetch = require('node-fetch')

var cmd = []

cmd.cmd = function(msg, args) {
    fetch('https://meme-api.herokuapp.com/gimme')
        .then(res => res.text())
        .then(body => {
            body = JSON.parse(body)
            msg.channel.send(body.url)
        });
}

cmd.desc = "Gives you a random meme"

module.exports = cmd;