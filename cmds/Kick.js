const Embed = require('../util/Embed')
const IsAdmin = require('../util/IsAdmin')

var cmd = []

cmd.cmd = function(msg, args) {
    if (IsAdmin(msg.member)) {

    } else {
    	msg.channel.send(Embed.Create("Moderation Request", "", [{name: "Failed", value: "You do not have admin permissions"}]))
    }
}

cmd.desc = "Allows you to kick a user from the server"

module.exports = cmd;