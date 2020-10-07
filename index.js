const Discord = require('discord.js')
const client = new Discord.Client()

const Command = require('./commands')
const Config = require('./config')

//Bot Init
client.on('ready', () => {
    console.log("Connected as " + client.user.tag)
    client.user.setActivity("!help");
})

client.on('message', (msg) => {
    if (msg.author != client.user) {
        if (msg.content.startsWith(Config.prefix)) {
            Command(msg)
        }
    }
})

//Grab Token and Run Bot
client.login(Config.token)
