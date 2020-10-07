const Discord = require('discord.js')

const Embed = {}

Embed.Create = function(title, desc, fields) {
    const Emb = new Discord.MessageEmbed()
        .setColor('#002fff')
        .setTitle(title)
        .setDescription(desc)
        .setAuthor('Astro', 'https://www.astrocore.net/Images/astrocore.png')
        .setFooter('Astro by Astrocore');
        var i;
        for (i = 0; i < fields.length; i++) {
            Emb.addFields(fields[i])
        }
    return Emb
}

module.exports = Embed;
