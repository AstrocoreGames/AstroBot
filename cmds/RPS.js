const Embed = require('../util/Embed')
const Random = require('../util/Random')

function DoesPlayerWin(GameHand, Hand) {
    if (GameHand === 'rock' && Hand === 'scissors') {
        return 0
    }
    if (GameHand === 'paper' && Hand === 'rock') {
        return 0
    }
    if (GameHand === 'scissors' && Hand === 'paper') {
        return 0
    }
    if (Hand === 'rock' && GameHand === 'scissors') {
        return 1
    }
    if (Hand === 'paper' && GameHand === 'rock') {
        return 1
    }
    if (Hand === 'scissors' && GameHand === 'paper') {
        return 1
    }
    if (Hand === GameHand) {
        return 2
    }
}

function Game(msg, Hand) {
    var GameHand = Random(1, 3)
    if (GameHand === 1) {
        GameHand = 'rock'
    }
    if (GameHand === 2) {
        GameHand = 'paper'
    }
    if (GameHand === 3) {
        GameHand = 'scissors'
    }
    const Win = DoesPlayerWin(GameHand, Hand)
    var Outcome
    if (Win === 0) {
        Outcome = "Loss"
    }
    if (Win === 1) {
        Outcome = "Win"
    }
    if (Win === 2) {
        Outcome = "Tie"
    }
    const RPSEmbed = Embed.Create('Rock Paper Scissors', '', [
        {name: 'Your Move', value: '`' + Hand + '`'},
        {name: 'Bot Move', value: '`' + GameHand + '`'},
        {name: 'Outcome', value: '`' + Outcome + '`'}
    ])
    msg.channel.send(RPSEmbed)
}

var cmd = []

cmd.cmd = function(msg, args) {
    if (args[0]) {
        const Hand = args[0].toLowerCase()
        if (Hand === 'rock' || Hand === 'paper' || Hand === 'scissors') {
            Game(msg, Hand)
        } else {
            msg.channel.send('Please choose either Rock Paper or Scissors')
        }
    } else {
        msg.channel.send('Please choose either Rock Paper or Scissors')
    }
}

cmd.desc = "Lets you play Rock Paper Scissors"

module.exports = cmd;