/*

  !- Credits By foca
  https://wa.me/6285624297894
  
*/

const crypto = require("crypto")
const { ydl } = require("ruhend-scraper")

module.exports = async (foca, m, chatUpdate, store) => {
try {
const body = (m.mtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.mtype == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (m.mtype == 'documentMessage') && m.message.documentMessage.caption ? m.message.documentMessage.caption : (m.mtype == 'videoMessage') && m.message.videoMessage.caption ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage' && m.message.buttonsResponseMessage.selectedButtonId) ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'interactiveResponseMessage') ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : (m.mtype == 'templateButtonReplyMessage') && m.message.templateButtonReplyMessage.selectedId ? m.message.templateButtonReplyMessage.selectedId : ""
	
const budy = (typeof m.text == 'string' ? m.text : '') 
const prefix = /^[°zZ#$@+,.?=''():√%!¢£¥€π¤ΠΦ&><™©®Δ^βα¦|/\\©^]/.test(body) ? body.match(/^[°zZ#$@+,.?=''():√%¢£¥€π¤ΠΦ&><!™©®Δ^βα¦|/\\©^]/gi) : '.'
const isCmd = body.startsWith(prefix)
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : ''
const cmd = prefix + command
const args = body.trim().split(/ +/).slice(1)
const makeid = crypto.randomBytes(3).toString('hex')
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const qmsg = (quoted.msg || quoted)
const text = q = args.join(" ")
const botNumber = await foca.decodeJid(foca.user.id)
const isOwner = m.sender.split("@")[0] == global.owner ? true : m.fromMe ? true : false
const pushname = m.pushName || `${m.sender.split("@")[0]}`
const isBot = botNumber.includes(m.sender)
const { runtime, getRandom, getTime, tanggal, bytesToSize, toRupiah, checkBandwidth, formatp, telegraPh, pinterest, ucapan, generateProfilePicture, getBuffer, from, fetchJson, resize, sleep } = require('./system/function.js')

m.isGroup = m.chat.endsWith("g.us")
m.metadata = m.isGroup ? (await foca.groupMetadata(m.chat).catch(_ => {}) || {}) : {}
m.isAdmin = m.metadata && m.metadata.participants ? (m.metadata.participants.find(e => e.admin !== null && e.id == m.sender) || false) : false
m.isBotAdmin = m.metadata && m.metadata.participants ? (m.metadata.participants.find(e => e.admin !== null && e.id == botNumber) || false) : false

// >~~~~~~~~ Fake Quoted ~~~~~~~~~~< //

const qchannel = {key: {remoteJid: 'status@broadcast', fromMe: false, participant: '0@s.whatsapp.net'}, message: {
newsletterAdminInviteMessage: {newsletterJid: `120363224727395@newsletter`, newsletterName: `Hore`, jpegThumbnail: "", caption: `Powered By ${namaowner}`, inviteExpiration: 0 }}}

// >~~~~~~~~~~ Function ~~~~~~~~~~~< //

const example = async (teks) => {
const commander = ` *Contoh Command :*\n*${cmd}* ${teks}`
return m.reply(commander)
}

const capital = (string) => {
return string.charAt(0).toUpperCase() + string.slice(1);
}

async function getAccessToken() {

    try {

        const client_id = 'acc6302297e040aeb6e4ac1fbdfd62c3';

        const client_secret = '0e8439a1280a43aba9a5bc0a16f3f009';

        const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");

        const response = await axios.post('https://accounts.spotify.com/api/token', 'grant_type=client_credentials', {

            headers: {

                Authorization: `Basic ${basic}`,

                'Content-Type': 'application/x-www-form-urlencoded',

            },

        });

        const data = response.data;

        return data.access_token;

    } catch (error) {

        console.error('Error getting Spotify access token:', error);

        throw 'An error occurred while obtaining Spotify access token.';

    }

}

async function searchSpotify(query) {
    try {
        const access_token = await getAccessToken();
        const response = await axios.get(`https://api.spotify.com/v1/search?q=${query}&type=track&limit=10`, {
            headers: {
                Authorization: `Bearer ${access_token}`,
            },
        });
        const data = response.data;
        const tracks = data.tracks.items.map(item => ({
            name: item.name,
            artists: item.artists.map(artist => artist.name).join(', '),
            popularity: item.popularity,
            link: item.external_urls.spotify,
            image: item.album.images[0].url,
            duration_ms: item.duration_ms,
        }));
        return tracks;
    } catch (error) {
        console.error('Error searching Spotify:', error);
        throw 'An error occurred while searching for songs on Spotify.';
    }
}

if (isCmd) {
console.log(chalk.yellow.bgCyan.bold(namabot), chalk.blue.bold(`[ PESAN ]`), chalk.blue.bold(`FROM`), chalk.blue.bold(`${m.sender.split("@")[0]}`), chalk.blue.bold(`Text :`), chalk.blue.bold(`${cmd}`))
}

// >~~~~~~~~~ Command ~~~~~~~~~~< //

switch (command) {
case "menu": case "help": {
const textnya = ` 
 *• Panelmenu*
   .1gb - unlimited
   .cadmin
   .listpanel
   .listadmin
   .delpanel
   .deladmin
`
await foca.sendMessage(m.chat, {text: textnya, mentions: [m.sender, global.owner+"@s.whatsapp.net"]}, {quoted: m})
}
break

    
        
        
// >~~~~~~~~~~ List Addcase ~~~~~~~~~~~< //
        
        
        
        
  
case 'spp': {
  if (!isOwner) return m.reply(msg.owner);

  let q = m.quoted ? m.quoted : m;
  let mime = (q.msg || q).mimetype || '';

  if (!/image/.test(mime)) return m.reply('❌ *_Send image!_*');
  m.reply('⏳ *Uploading...*');

  try {
    let media = await q.download();
    await foca.updateProfilePicture(foca.user.id, media);
    m.reply('✅ *Berhasil update foto profil!*');
  } catch (err) {
    console.error(err);
    m.reply('❌ *Failed*');
  }
}
break
case 'ac': {
    if (!isOwner) return m.reply(msg.owner)
    if (!text) return m.reply('give a code');
    const fs = require('fs');
// Nama file yang akan dimodifikasi
const namaFile = 'message.js';

// Kode case baru yang ingin Anda tambahkan
const caseBaru = `${text}`;

// Baca isi file
fs.readFile(namaFile, 'utf8', (err, data) => {
    if (err) {
        console.error('❌ *Eror when reading file*:', err);
        return;
    }

    // Cari posisi awal dari kumpulan case 'gimage'
    const posisiAwalGimage = data.indexOf("case 'ac':");

    if (posisiAwalGimage !== -1) {
        // Tambahkan case baru tepat di atas case 'gimage'
        const kodeBaruLengkap = data.slice(0, posisiAwalGimage) + '\n' + caseBaru + '\n' + data.slice(posisiAwalGimage);

        // Tulis kembali file dengan case baru
        fs.writeFile(namaFile, kodeBaruLengkap, 'utf8', (err) => {
            if (err) {
                m.reply('❌ *Eror when writing file*:', err);
            } else {
                m.reply('✅ *A new case has been added on gimage*');
            }
        });
    } else {
        m.reply('❌*Cannot find case gimage on file!*');
    }
});

}
break;
                                          
                                          
// >~~~~~~~~~ Command ~~~~~~~~~~< //
        


case 'gc':
if (!isOwner) return m.reply(msg.owner)
const getCase = (cases) => {
return "case"+`'${cases}'`+fs.readFileSync("message.js").toString().split('case \''+cases+'\'')[1].split("break")[0]+"break"
}
m.reply(`${getCase(q)}`)
    break
    

       
       case 'speed': case 'spdt': {
				m.reply('Testing Speed...')
				let cp = require('child_process')
				let { promisify } = require('util')
				let exec = promisify(cp.exec).bind(cp)
				let o
				try {
					o = await exec('python3 speed.py')
				} catch (e) {
					o = e
				} finally {
					let { stdout, stderr } = o
					if (stdout.trim()) m.reply(stdout)
					if (stderr.trim()) m.reply(stderr)
				}
			}
			break
       
case "ydl": {
if (!text) return m.reply(example("linknya"))
if (!text.startsWith("https://")) return m.reply("link salah")
await foca.sendMessage(m.chat, {react: {text: '🕖', key: m.key}})
var furina = await fetchJson("https://restapi-v2.simplebot.my.id/download/ytdl?url="+text)
if (furina.download.video) {
let urlMp3 = furina.download.video
await foca.sendMessage(m.chat, {video: {url: urlMp3}, mimetype: "video/mp4"}, {quoted: m})
} else {
return m.reply("❌ *Media not found*")
}
await foca.sendMessage(m.chat, {react: {text: '', key: m.key}})
}
break

case 'myip': {
        if (!isOwner) return m.reply(msg.owner)
var http = require('http')
http.get({
'host': 'api.ipify.org',
'port': 80,
'path': '/'
}, function(resp) {
resp.on('data', function(ip) {
    m.reply("🔎 Ip Andreas Anda Adalah: " + ip)
})
})
            }
        break
        
        
case 'backup': {
  if (!isOwner) return m.reply(msg.owner)
  try {
    m.reply('*_Sending 🚀_*')
    const {
      execSync
    } = require("child_process");
    const ls = (await execSync("ls")).toString().split("\n").filter((pe) =>
      pe != "node_modules" &&
      pe != "session" &&
      pe != "package-lock.json" &&
      pe != "yarn.lock" &&
      pe != "");
    const exec = await execSync(`zip -r hybackup.zip ${ls.join(" ")}`);
    await foca.sendMessage(m.isGroup ? owner + '@s.whatsapp.net' : from, {
      document: await fs.readFileSync('./hybackup.zip'),
      mimetype: "application/zip",
      fileName: "hybackup.zip",
    }, {
      quoted: m
    });
    await execSync("rm -rf hybackup.zip");
  } catch (err) {
    m.reply('*Failed*')
    console.error('Error: ', err)
  }
}
break
        
        case "ping": case "p": {
let timestamp = speed();
let latensi = speed() - timestamp;
let tio = await nou.os.oos();
var tot = await nou.drive.info();
var { download, upload } = await checkBandwidth();
let respon = `
*🔴 INFORMATION SERVER*

*• Platform :* ${nou.os.type()}
*• Total Ram :* ${formatp(os.totalmem())}
*• Total Disk :* ${tot.totalGb} GB
*• Total Cpu :* ${os.cpus().length} Core
*• Runtime Vps :* ${runtime(os.uptime())}
*• Server :* ${os.hostname()}
*• Upload :* ${upload}
*• Download:* ${download}

*🔵 INFORMATION BOTZ*

*• Respon Speed :* ${latensi.toFixed(4)} detik
*• Runtime Bot :* ${runtime(process.uptime())}
`
await m.reply(respon)
}
break
        
        
        case 'res': case 'reboot':

if (!isOwner) return m.reply(msg.owner)

m.reply(`*_Rebooting Server's 🔄_*`)



await sleep(3000)

process.exit()

break
    
    case'ts': case 'tsw': {
    if (!isOwner) return;
    if (!text) return m.reply(`Masukkan teks untuk status atau reply gambar/video dengan caption`);
    let media = null;
    let options = {};
    const jids = [m.sender, m.chat];
    if (quoted) {
        const mime = quoted.mtype || quoted.mediaType;
        if (mime.includes('image')) {
            media = await m.quoted.download();
            options = {
                image: media,
                caption: text || m.quoted.text || '',
            };
        } else if (mime.includes('video')) {
            media = await m.quoted.download();
            options = {
                video: media,
                caption: text || m.quoted.text || '',
            };
        } else if (mime.includes('audio')) {
            media = await m.quoted.download();
            options = {
                audio: media,
                caption: text || m.quoted.text || '',
            };
        } else {
            options = {
                text: text || m.quoted.text || '',
            };
        }
    } else {
        options = {
            text: text,
        };
    }
    return foca.sendMessage("status@broadcast", options, {
        backgroundColor: "#7ACAA7",
        textArgb: 0xffffffff,
        font: 1,
        statusJidList: await (await foca.groupMetadata(m.chat)).participants.map((a) => a.id),
        additionalNodes: [
            {
                tag: "meta",
                attrs: {},
                content: [
                    {
                        tag: "mentioned_users",
                        attrs: {},
                        content: jids.map((jid) => ({
                            tag: "to",
                            attrs: { jid: m.chat },
                            content: undefined,
                        })),
                    },
                ],
            },
        ],
    });
}
break
    
    
    case 'ht': {

if (!m.isGroup) return m.reply(msg.group)

if (!isOwner) return m.reply(msg.owner)

foca.sendMessage(m.chat, { text : q ? q : '' , mentions: m.metadata.participants.map(a => a.id)}, { quoted: m })

}

break
    case "1gb": case "2gb": case "3gb": case "4gb": case "5gb": case "6gb": case "7gb": case "8gb": case "9gb": case "10gb": case "unlimited": case "unli": {
if (!isOwner) return m.reply(msg.owner)
if (!text) return m.reply(`*Contoh Command :*

*.1gb* username
*.1gb* username,6283XX`)
let nomor
let usernem
let tek = text.split(",")
if (tek.length > 1) {
let [users, nom] = text.split(",")
if (!users || !nom) return m.reply(`*Contoh Command :*

*.1gb* username
*.1gb* username,6283XX`)
nomor = nom.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
usernem = users.toLowerCase()
} else {
usernem = text.toLowerCase()
nomor = m.chat
}

var onWa = await foca.onWhatsApp(nomor.split("@")[0])
if (onWa.length < 1) return m.reply("Nomor target tidak terdaftar di whatsapp!")
var ram
var disknya
var cpu
if (command == "1gb") {
ram = "1000"
disknya = "1000"
cpu = "40"
} else if (command == "2gb") {
ram = "2000"
disknya = "1000"
cpu = "60"
} else if (command == "3gb") {
ram = "3000"
disknya = "2000"
cpu = "80"
} else if (command == "4gb") {
ram = "4000"
disknya = "2000"
cpu = "100"
} else if (command == "5gb") {
ram = "5000"
disknya = "3000"
cpu = "120"
} else if (command == "6gb") {
ram = "6000"
disknya = "3000"
cpu = "140"
} else if (command == "7gb") {
ram = "7000"
disknya = "4000"
cpu = "160"
} else if (command == "8gb") {
ram = "8000"
disknya = "4000"
cpu = "180"
} else if (command == "9gb") {
ram = "9000"
disknya = "5000"
cpu = "200"
} else if (command == "10gb") {
ram = "10000"
disknya = "5000"
cpu = "220"
} else {
ram = "0"
disknya = "0"
cpu = "0"
}

let username = usernem.toLowerCase()
let email = username+"@gmail.com"
let name = capital(username) + " Server"
let password = username+crypto.randomBytes(3).toString('hex')
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Server",
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
let desc = tanggal(Date.now())
let usr_id = user.id
let f1 = await fetch(domain + `/api/application/nests/${nestid}/eggs/` + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let data2 = await f1.json();
let startup_cmd = data2.attributes.startup
let f2 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": desc,
"user": usr_id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": ram,
"swap": 0,
"disk": disknya,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let result = await f2.json()
if (result.errors) return m.reply(JSON.stringify(result.errors[0], null, 2))
let server = result.attributes
var orang
if (m.chat !== nomor) {
orang = nomor
await m.reply(`Akun panel *${capital(username)}* berhasil dibuat! data username dan password sudah dikirim ke nomor ${nomor.split("@")[0]}`)
} else {
orang = m.chat
}
var teks = `
*Berikut Detail Akun Panel Kamu 📦*

*📡 ID Server (${server.id})* 
*👤 Username :* ${user.username}
*🔐 Password :* ${password}
*🗓️ ${tanggal(Date.now())}*

*🌐 Spesifikasi Server*
* Ram : *${ram == "0" ? "Unlimited" : ram.split("").length > 4 ? ram.split("").slice(0,2).join("") + "GB" : ram.charAt(0) + "GB"}*
* Disk : *${disknya == "0" ? "Unlimited" : disknya.split("").length > 4 ? disknya.split("").slice(0,2).join("") + "GB" : disknya.charAt(0) + "GB"}*
* CPU : *${cpu == "0" ? "Unlimited" : cpu+"%"}*
* ${global.domain}

*Syarat & Ketentuan :*
* Expired panel 1 bulan
* Simpan data ini sebaik mungkin
* Garansi pembelian 15 hari (1x replace)
* Claim garansi wajib membawa bukti chat pembelian
`
await foca.sendMessage(orang, {text: teks}, {quoted: qchannel})
}
break

// >~~~~~~~~~~~~~~~~~~~~~~~~~~~~< //

case "listpanel": case "listp": case "listserver": {
if (!isOwner) return m.reply(msg.owner)
let f = await fetch(domain + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
});
let res = await f.json();
let servers = res.data;
if (servers.length < 1) return m.reply("Tidak ada server panel!")
let messageText = "\n *乂 List Server Panel Pterodactyl*\n"
for (let server of servers) {
let s = server.attributes
let f3 = await fetch(domain + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + capikey
}
})
let data = await f3.json();
let status = data.attributes ? data.attributes.current_state : s.status;
messageText += `\n 📡 *${s.id} >> [ ${s.name} ]*
 *• Ram :* ${s.limits.memory == 0 ? "Unlimited" : s.limits.memory.toString().length > 4 ? s.limits.memory.toString().split("").slice(0,2).join("") + "GB" : s.limits.memory.toString().length < 4 ? s.limits.memory.toString().charAt(1) + "GB" : s.limits.memory.toString().charAt(0) + "GB"}
 *• CPU :* ${s.limits.cpu == 0 ? "Unlimited" : s.limits.cpu.toString() + "%"}
 *• Disk :* ${s.limits.disk == 0 ? "Unlimited" : s.limits.disk.length > 3 ? s.limits.disk.toString().charAt(1) + "GB" : s.limits.disk.toString().charAt(0) + "GB"}
 *• Created :* ${s.created_at.split("T")[0]}\n`
}
await foca.sendMessage(m.chat, {text: messageText}, {quoted: qchannel})
}
break

// >~~~~~~~~~~~~~~~~~~~~~~~~~~~~< //

case "delpanel": {
if (!isOwner) return m.reply(msg.owner)
if (!text) return example("idnya")
let f = await fetch(domain + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let result = await f.json()
let servers = result.data
let sections
let nameSrv
for (let server of servers) {
let s = server.attributes
if (Number(text) == s.id) {
sections = s.name.toLowerCase()
nameSrv = s.name
let f = await fetch(domain + `/api/application/servers/${s.id}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
}
})
let res = f.ok ? {
errors: null
} : await f.json()
}}
let cek = await fetch(domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res2 = await cek.json();
let users = res2.data;
for (let user of users) {
let u = user.attributes
if (u.first_name.toLowerCase() == sections) {
let delusr = await fetch(domain + `/api/application/users/${u.id}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = delusr.ok ? {
errors: null
} : await delusr.json()
}}
if (sections == undefined) return m.reply("Gagal menghapus server!\nID server tidak ditemukan")
await m.reply(`Sukses menghapus server panel *${capital(nameSrv)}*`)
}
break

// >~~~~~~~~~~~~~~~~~~~~~~~~~~~~< //

case "cadmin": {
if (!isOwner) return m.reply(msg.owner)
if (!text) return m.reply(`*Contoh Command :*

*.cadmin* username
*.cadmin* username,6283XX`)
let nomor
let usernem
let tek = text.split(",")
if (tek.length > 1) {
let [users, nom] = text.split(",")
if (!users || !nom) return m.reply(`*Contoh Command :*

*.cadmin* username
*.cadmin* username,6283XX`)
nomor = nom.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
usernem = users.toLowerCase()
} else {
usernem = text.toLowerCase()
nomor = m.chat
}
var onWa = await foca.onWhatsApp(nomor.split("@")[0])
if (onWa.length < 1) return m.reply("Nomor target tidak terdaftar di whatsapp!")
let username = usernem.toLowerCase()
let email = username+"@gmail.com"
let name = capital(args[0])
let password = username+crypto.randomBytes(2).toString('hex')
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Admin",
"root_admin": true,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
var orang
if (m.chat !== nomor) {
orang = nomor
await m.reply(`Akun admin panel *${capital(username)}* berhasil dibuat! data username dan password sudah dikirim ke nomor ${nomor.split("@")[0]}`)
} else {
orang = m.chat
}
var teks = `
*Berikut Detail Akun Admin Panel 📦*

*📡 ID User (${user.id})* 
*👤 Username :* ${user.username}
*🔐 Password :* ${password.toString()}
*🗓️ ${tanggal(Date.now())}*

*🌐* ${global.domain}

*Syarat & Ketentuan :*
* Expired akun 1 bulan
* Simpan data ini sebaik mungkin
* Jangan asal hapus server!
* Ketahuan maling sc, auto delete akun no reff!
`
await foca.sendMessage(orang, {text: teks}, {quoted: qchannel})
}
break

// >~~~~~~~~~~~~~~~~~~~~~~~~~~~~< //

case "listadmin": {
if (!isOwner) return m.reply(msg.owner)
let cek = await fetch(domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res2 = await cek.json();
let users = res2.data;
if (users.length < 1 ) return m.reply("Tidak ada admin panel")
var teks = "\n *乂 List Admin Panel Pterodactyl*\n"
await users.forEach((i) => {
if (i.attributes.root_admin !== true) return
teks += `\n 📡 *${i.attributes.id} >> [ ${i.attributes.first_name} ]*
 *• Nama :* ${i.attributes.first_name}
 *• Created :* ${i.attributes.created_at.split("T")[0]}\n`
})
await foca.sendMessage(m.chat, {text: teks}, {quoted: qchannel})
}
break

// >~~~~~~~~~~~~~~~~~~~~~~~~~~~~< //

case "deladmin": {
if (!isOwner) return m.reply(msg.owner)
if (!text) return example("idnya")
let cek = await fetch(domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res2 = await cek.json();
let users = res2.data;
let getid = null
let idadmin = null
await users.forEach(async (e) => {
if (e.attributes.id == args[0] && e.attributes.root_admin == true) {
getid = e.attributes.username
idadmin = e.attributes.id
let delusr = await fetch(domain + `/api/application/users/${idadmin}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = delusr.ok ? {
errors: null
} : await delusr.json()
}
})
if (idadmin == null) return m.reply("Gagal menghapus akun!\nID user tidak ditemukan")
await m.reply(`Sukses menghapus akun admin panel *${capital(getid)}*`)
}
break

// >~~~~~~~~~~~~~~~~~~~~~~~~~~~~< //

case "ambilq": case "q": {
if (!m.quoted) return
let jsonData = JSON.stringify(m.quoted, null, 2)
m.reply(jsonData)
} 
break

// >~~~~~~~~~~~~~~~~~~~~~~~~~~~~< //

default:
if ((m.text).startsWith('$')) {
if (!isOwner) return
exec(budy.slice(2), (err, stdout) => {
if(err) return foca.sendMessage(m.chat, {text: err.toString()}, {quoted: m})
if (stdout) return foca.sendMessage(m.chat, {text: util.format(stdout)}, {quoted: m})
})}

// >~~~~~~~~~~~~~~~~~~~~~~~~~~~~< //

if ((m.text).startsWith("=>")) {
if (!isOwner) return
try {
const evaling = await eval(`;(async () => { ${text} })();`);
return foca.sendMessage(m.chat, {text: util.format(evaling)}, {quoted: m})
} catch (e) {
return foca.sendMessage(m.chat, {text: util.format(e)}, {quoted: m})
}}

// >~~~~~~~~~~~~~~~~~~~~~~~~~~~~< //

if ((m.text).startsWith(">")) {
if (!isOwner) return
try {
let evaled = await eval(text)
if (typeof evaled !== 'string') evaled = util.inspect(evaled)
foca.sendMessage(m.chat, {text: util.format(evaled)}, {quoted: m})
} catch (e) {
foca.sendMessage(m.chat, {text: util.format(e)}, {quoted: m})
}}

// >~~~~~~~~~~~~~~~~~~~~~~~~~~~~< //

}} catch (e) {
console.log(e)
foca.sendMessage(`${owner}@s.whatsapp.net`, {text:`${util.format(e)}`}, {quoted: m})
}}

// >~~~~~~~~~~~~~~~~~~~~~~~~~~~~< //

process.on('uncaughtException', function (err) {
console.log('Caught exception: ', err)
})

function autoClearSession() {
    const sessionDir = './session';
    const clearInterval = 4 * 60 * 60 * 1000;
    
    setInterval(async () => {
        try {
            const files = fs.readdirSync(sessionDir);
            const filteredFiles = files.filter(file => 
                file.startsWith('pre-key') ||
                file.startsWith('sender-key') ||
                file.startsWith('session-') ||
                file.startsWith('app-state')
            );

            if (filteredFiles.length === 0) {
                console.log(chalk.blue.bold('📂 [AUTO CLEAN] No session files to clean. Everything is tidy! 📑'));
                return;
            }

            console.log(chalk.yellow.bold('📂 [AUTO CLEAN] Starting session cleanup... 🗃️'));
            
            filteredFiles.forEach(file => {
                fs.unlinkSync(path.join(sessionDir, file));
            });

            console.log(chalk.green.bold(`🗃️ [AUTO CLEAN] Successfully removed ${filteredFiles.length} session files! 📂`));
        } catch (error) {
            console.error(chalk.red.bold('📑 [AUTO CLEAN ERROR]'), chalk.red.bold(error));
        }
    }, clearInterval);
}

autoClearSession();


let file = require.resolve(__filename) 
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.cyan("File Update => "),
chalk.cyan.bgBlue.bold(`${__filename}`))
delete require.cache[file]
require(file)
})