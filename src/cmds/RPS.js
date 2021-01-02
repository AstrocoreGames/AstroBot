const Embed = require('../util/Embed')
const Random = require('../util/Random')

function GetOutcome(GameHand, Hand) {
    return GameHand == 1 && Hand == 3 || 
    GameHand == 2 && Hand == 1 || 
    GameHand == 3 && Hand == 2 ? "Loss" : 
    GameHand == 3 && Hand == 1 || 
    GameHand == 1 && Hand == 2 || 
    GameHand == 2 && Hand == 3 ? "Win" : 
    GameHand == Hand ? "Tie" : null;
}

function HandToNum(hand) {
    return hand == "rock" ? 1 : hand == "paper" ? 2 : hand == "scissors" ? 3 : null;
}

function NumToHand(num) {
    return num == 1 ? "rock" : num == 2 ? "paper" : num == 3 ? "scissors" : null;
}

function Game(msg, Hand) {
    const GameHand = Random(1, 3)
    Hand = HandToNum(Hand)
    const Outcome = GetOutcome(GameHand, Hand)
    const RPSEmbed = Embed('Rock Paper Scissors', '', [
        {name: 'Your Move', value: '`' + NumToHand(Hand) + '`'},
        {name: 'Bot Move', value: '`' + NumToHand(GameHand) + '`'},
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