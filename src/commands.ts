import fs from 'fs'

const Help: any = require('./help')
const Config: any = require('./config')

const commands: any[] = [];

const commandFiles: string[] = fs
  .readdirSync("./dist/cmds")
  .filter((file) => file.endsWith(".js"))

for (const file of commandFiles) {
  commands[file.slice(0, -3).toLowerCase()] = require(`./cmds/${file}`)
}

//Command Processing
const CMDS = function (msg: any) {
    const fullCommand: string = msg.content.substr(Config.prefix.length)
    const splitCommand: string[] = fullCommand.split(" ")
    const primaryCommand: string = splitCommand[0].toLowerCase()
    const args: string[] = splitCommand.splice(1)
    if (commands[primaryCommand]) {
        commands[primaryCommand].cmd(msg, args)
    }
    if (primaryCommand == "help") {
        Help(msg)
    }
};

//Export To Main File
module.exports = CMDS;