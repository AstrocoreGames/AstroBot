const Embed = require('../util/Embed')
const Random = require('../util/Random')

var cmd = []

cmd.cmd = function(msg, args) {
    const Num = Random(1, 6)
    const DiceEmbed = Embed.Create('Dice', '', [{name: 'Number', value: '`' + Num + '`'}])
    msg.channel.send(DiceEmbed)
}

cmd.desc = "Lets you roll a die"

module.exports = cmd;