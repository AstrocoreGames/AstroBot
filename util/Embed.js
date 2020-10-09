const Discord = require('discord.js')
const Config = require('../core/config')

const Embed = []

Embed.Create = function(title, desc, fields) {
    const Emb = new Discord.MessageEmbed()
        .setColor(Config.embed_settings.color)
        .setTitle(title)
        .setDescription(desc)
        .setAuthor(Config.name, Config.embed_settings.icon)
        .setFooter('Created by Astrocore');
        var i;
        for (i = 0; i < fields.length; i++) {
            Emb.addFields(fields[i])
        }
    return Emb
}

module.exports = Embed;
