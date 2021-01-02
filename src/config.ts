import YAML from 'yaml'
import fs from 'fs'

let Settings = YAML.parse(fs.readFileSync("Config.yml", 'utf8'))

if (fs.existsSync("token.txt")) {
    Settings.token = fs.readFileSync("token.txt", 'utf8')
}

module.exports = Settings