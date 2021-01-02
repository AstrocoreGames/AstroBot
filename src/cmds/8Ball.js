const Embed = require('../util/Embed')
const fetch = require('node-fetch')

var cmd = []

cmd.cmd = function(msg, args) {
    if (args[0]) {
        let params = encodeURIComponent(args);
        let uri = "https://8ball.delegator.com/magic/JSON/" + params;
        fetch(uri)
            .then(res => res.json())
            .then(body => {
                const AnswerEmbed = Embed('8Ball', '', [{name: 'Answer', value: '`' + body.magic.answer + '`'}])
                msg.channel.send(AnswerEmbed)
            });
    } else {
        msg.channel.send('Please make sure to ask a question')
    }
}

cmd.desc = "Gives you a random 8Ball saying"

module.exports = cmd;