const Embed = require('../util/Embed')

const CreditsEmbed = Embed('Credits', '', [{name: 'Creators', value: 'Astrocore'}, {name: 'Contributors', value: 'Anyone who contributed on our github at https://github.com/AstrocoreGames/AstroBot'}])

var cmd = []

cmd.cmd = function(msg, args) {
    msg.channel.send(CreditsEmbed)
}

cmd.desc = "Shows you the credits"

module.exports = cmd;