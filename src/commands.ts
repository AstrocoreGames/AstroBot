import fs from 'fs'

const Help = require('./help')
const Config = require('./config')

var commands = []

const commandFiles = fs
  .readdirSync("./dist/cmds")
  .filter((file) => file.endsWith(".js"))

for (const file of commandFiles) {
  commands[file.slice(0, -3).toLowerCase()] = require(`./cmds/${file}`)
}

//Command Processing
var CMDS = function(msg : any) {
    let fullCommand = msg.content.substr(Config.prefix.length)
    let splitCommand = fullCommand.split(" ")
    let primaryCommand = splitCommand[0].toLowerCase()
    let args = splitCommand.splice(1)
    if (commands[primaryCommand]) {
        commands[primaryCommand].cmd(msg, args)
    }
    if (primaryCommand == "help") {
      Help(msg, args)
    }
}

//Export To Main File
module.exports = CMDS;