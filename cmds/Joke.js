const Embed = require('../util/Embed')
const fetch = require('node-fetch')

var cmd = []

cmd.cmd = function(msg, args) {
    fetch('https://sv443.net/jokeapi/v2/joke/Any?blacklistFlags=nsfw,religious,racist,sexist&format=txt')
        .then(res => res.text())
        .then(body => {
            const JokeEmbed = Embed.Create('Joke', '', [{name: 'Joke', value: '`' + body + '`'}])
            msg.channel.send(JokeEmbed)
        });
}

cmd.desc = "Gives you a random joke"

module.exports = cmd;