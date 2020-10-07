const Config = require('./config')
const fs = require('fs')
const Discord = require('discord.js')

const commandFiles = fs
    .readdirSync("./cmds")
    .filter((file) => file.endsWith(".js"))

const HelpEmbed = new Discord.MessageEmbed()
    .setColor('#002fff')
    .setTitle("Help")
    .setDescription("Prefix = " + Config.prefix)
    .setAuthor('Astro', 'https://www.astrocore.net/Images/astrocore.png')
    .setFooter('Astro by Astrocore');
    HelpEmbed.addField("`help`", 'Shows You All The Commmands You Can Use With Astro')
    for (const file of commandFiles) {
        HelpEmbed.addField('`' + file.slice(0, -3).toLowerCase() + '`', require(`./cmds/${file}`)['desc'])
    }

var cmd = function(msg, args) {
    msg.channel.send(HelpEmbed)
}

module.exports = cmd