const fs = require('fs')
const YAML = require('yaml')

let Settings = YAML.parse(fs.readFileSync("Config.yml", 'utf8'))

if (fs.existsSync("token.txt")) {
    Settings.token = fs.readFileSync("token.txt", 'utf8')
}

module.exports = Settings