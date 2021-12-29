global.DeveloperMode = 'false' //true Or false
global.owner = ['919633687665','919633687665', '919633687665'] // Put your number here
global.mods = ['919633687665','919633687665','919633687665']  // Want some help?
global.prems = ['919633687665','919633687665','919633687665','919633687665','919633687665','919633687665'] // Premium user has unlimited limit
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'belilah'
}

// Sticker WM
global.packname = 'KRIZSER '
global.author ='919633687665'

global.multiplier = 69 // The higher, The harder levelup

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
