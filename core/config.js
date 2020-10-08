const fs = require('fs')
const Yaml = require('yaml')

let Config = []

let Settings = Yaml.parse(fs.readFileSync("Config.yml", 'utf8'))

if (fs.existsSync("token.txt")) {
    Config.token = fs.readFileSync("token.txt", 'utf8')
} else {
    Config.token = Settings.token
}

Config.prefix = Settings.prefix

module.exports = Config