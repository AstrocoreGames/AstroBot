const fs = require('fs')

let Config = []

let Settings = JSON.parse(fs.readFileSync("Config.json", 'utf8'))

if (fs.existsSync("token.txt")) {
    Config.token = fs.readFileSync("token.txt", 'utf8')
} else {
    Config.token = Settings.token
}

Config.prefix = Settings.prefix

module.exports = Config