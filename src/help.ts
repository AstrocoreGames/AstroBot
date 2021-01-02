import fs from 'fs'
import Discord from 'discord.js'

const Config = require('./config')

const commandFiles = fs
    .readdirSync("./dist/cmds")
    .filter((file) => file.endsWith(".js"))

const HelpEmbed = new Discord.MessageEmbed()
    .setColor(Config.embed_settings.color)
    .setTitle("Help")
    .setDescription("Prefix = " + Config.prefix)
    .setAuthor(Config.name, Config.embed_settings.icon)
    .setFooter('Created by Astrocore');
    HelpEmbed.addField("`help`", 'Shows You All The Commmands You Can Use')
    for (const file of commandFiles) {
        HelpEmbed.addField('`' + file.slice(0, -3).toLowerCase() + '`', require(`./cmds/${file}`)['desc'])
    }

var cmd = function(msg : any, args : string[]) {
    msg.channel.send(HelpEmbed)
}

module.exports = cmd