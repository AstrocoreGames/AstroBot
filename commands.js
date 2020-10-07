const fs = require('fs')
const Discord = require('discord.js')
const Config = require('./config')
const Help = require('./help')

var commands = []

const commandFiles = fs
    .readdirSync("./cmds")
    .filter((file) => file.endsWith(".js"))

for (const file of commandFiles) {
    commands[file.slice(0, -3).toLowerCase()] = []
    commands[file.slice(0, -3).toLowerCase()].cmd = require(`./cmds/${file}`)['cmd']
    commands[file.slice(0, -3).toLowerCase()].name = file.slice(0, -3).toLowerCase()
    commands[file.slice(0, -3).toLowerCase()].desc = require(`./cmds/${file}`)['desc']
}

const HelpEmbed = new Discord.MessageEmbed()
    .setColor('#002fff')
    .setTitle("Help")
    .setDescription("Prefix = ")
    .setAuthor('Astro', 'https://www.astrocore.net/Images/astrocore.png')
    .setFooter('Astro by the Astrocore Team');
    HelpEmbed.addField("`help`", 'Shows You All The Commmands You Can Use With Astro')
    for (const file of commandFiles) {
        HelpEmbed.addField('`' + file.slice(0, -3).toLowerCase() + '`', require(`./cmds/${file}`)['desc'])
    }

//Command Processing
var CMDS = function(msg) {
    let fullCommand = msg.content.substr(Config.prefix.length)
    let splitCommand = fullCommand.split(" ")
    let primaryCommand = splitCommand[0].toLowerCase()
    let arguments = splitCommand.splice(1)
    if (commands[primaryCommand]) {
        commands[primaryCommand].cmd(msg, arguments)
    }
    if (primaryCommand == "help") {
      Help(msg, arguments)
    }
}

//Export To Main File
module.exports = CMDS;
