require("./system/module.js")

// >~~~~~~ Setting Bot & Owner  ~~~~~~~< //
global.owner = "6285187063723"
global.namabot = "H Y D R O - Q U E E N" 
global.namaowner = "H Y - Q U E E N"
global.packname = "H Y D R O"
global.author = "Q U E E N"

// >~~~~~~~~ Setting Api Panel ~~~~~~~~< //
global.egg = "15" // Isi id egg
global.nestid = "5" // Isi id nest
global.loc = "1" // Isi id location
global.domain = "https://www.zans.my.id"
global.apikey = "ptla_1jHm3aWmhALIf515d7CpFd9vSw4tsHkepHxCowoiIAi" //ptla
global.capikey = "ptlc_TVQmFiAH0YGiFHww3IWbx24PgHZ2OSaTNluVdvsz2Mw" //ptlc


// >~~~~~~~~ Setting Message ~~~~~~~~~< //
global.msg = {
wait: "Memproses . . .", 
owner: "Fitur ini khusus untuk owner!", 
group: "Fitur ini untuk dalam grup!", 
admin: "Fitur ini untuk admin grup!", 
botadmin: "Fitur ini hanya untuk bot menjadi admin"
}


let file = require.resolve(__filename) 
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.cyan("File Update => "), chalk.cyan.bgBlue.bold(`${__filename}`))
delete require.cache[file]
require(file)
})