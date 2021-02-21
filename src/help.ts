import fs from 'fs'
import Discord from 'discord.js'

const Config: any = require('./config')

const commandFiles: string[] = fs
    .readdirSync("./dist/cmds")
    .filter((file) => file.endsWith(".js"))

const HelpEmbed = new Discord.MessageEmbed()
    .setColor(Config.embed_settings.color)
    .setTitle("Help")
    .setDescription("Prefix = " + Config.prefix)
    .setAuthor(Config.name, Config.embed_settings.icon)
    .setFooter('Created by Astrocore');
    HelpEmbed.addField("`help`", 'Shows You All The Commands You Can Use')
    for (const file of commandFiles) {
        HelpEmbed.addField('`' + file.slice(0, -3).toLowerCase() + '`', require(`./cmds/${file}`)['desc'])
    }

const cmd = function (msg: any) {
    msg.channel.send(HelpEmbed)
};

module.exports = cmd