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

Config.embed_settings = []

Config.embed_settings.name = Settings.embed_settings.name

Config.embed_settings.icon = Settings.embed_settings.icon

Config.embed_settings.color = Settings.embed_settings.color

module.exports = Config