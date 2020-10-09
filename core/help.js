const Config = require('./config')
const fs = require('fs')
const Discord = require('discord.js')

const commandFiles = fs
    .readdirSync("./cmds")
    .filter((file) => file.endsWith(".js"))

const HelpEmbed = new Discord.MessageEmbed()
    .setColor(Config.embed_settings.color)
    .setTitle("Help")
    .setDescription("Prefix = " + Config.prefix)
    .setAuthor(Config.embed_settings.name, Config.embed_settings.icon)
    .setFooter('Created by Astrocore');
    HelpEmbed.addField("`help`", 'Shows You All The Commmands You Can Use')
    for (const file of commandFiles) {
        HelpEmbed.addField('`' + file.slice(0, -3).toLowerCase() + '`', require(`../cmds/${file}`)['desc'])
    }

var cmd = function(msg, args) {
    msg.channel.send(HelpEmbed)
}

module.exports = cmd