import Discord from 'discord.js'
const Config = require('../config')

const Embed = function(title : string, desc : string, fields : any[]) {
    const Emb = new Discord.MessageEmbed()
        .setColor(Config.embed_settings.color)
        .setTitle(title)
        .setDescription(desc)
        .setAuthor(Config.name, Config.embed_settings.icon)
        .setFooter('Created by Astrocore');
        for (let field of fields) {
            Emb.addFields(field)
        }
    return Emb
}

module.exports = Embed;