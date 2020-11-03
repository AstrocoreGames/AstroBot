const fs = require('fs')

let Settings = JSON.parse(fs.readFileSync("Config.json", 'utf8'))

if (fs.existsSync("token.txt")) {
    Settings.token = fs.readFileSync("token.txt", 'utf8')
}

Settings.save =  function() {
    let Config = Settings
    if (fs.existsSync("token.txt")) {
        Config.token = ""
    }
    fs.writeFileSync("Config.json", JSON.stringify(Config))
} 

module.exports = Settings