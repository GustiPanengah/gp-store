const { modul } = require('./module');
const { baileys, boom, chalk, fs, figlet, FileType, path, process, PhoneNumber } = modul;
const { default: makeWaSocket, useMultiFileAuthState, DisconnectReason, fetchLatestBaileysVersion, generateForwardMessageContent, generateWAMessage, prepareWAMessageMedia, generateWAMessageFromContent, generateMessageID, downloadContentFromMessage, makeInMemoryStore, jidDecode, proto } = baileys
const { color, bgcolor } = require('./lib/color')
const log = (pino = require("pino"));
const qrcode = require('qrcode')
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./lib/exif')
const { smsg, isUrl, generateMessageTag, getBuffer, getSizeMedia, fetchJson, await, sleep, reSize } = require('./lib/myfunc')
const owner = JSON.parse(fs.readFileSync('./database/owner.json').toString())
const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })

if (global.conns instanceof Array) console.log()
else global.conns = []

const jadibot = async (kris, m, from) => {
const { sendImage, sendMessage } = kris;
const { reply, sender } = m;
const { state, saveCreds } = await useMultiFileAuthState(path.join(__dirname, `./database/jadibot/session-${sender.split("@")[0]}`), log({ level: "silent" }));
try {
async function start() {
let { version, isLatest } = await fetchLatestBaileysVersion();
const kris = await makeWaSocket({
auth: state,
browser: [`Jadibot Md By (kris Bot)`, "Chrome", "1.0.0"],
logger: log({ level: "silent" }),
version,
})

kris.ev.on('messages.upsert', async chatUpdate => {
try {
kay = chatUpdate.messages[0]
if (!kay.message) return
kay.message = (Object.keys(kay.message)[0] === 'ephemeralMessage') ? kay.message.ephemeralMessage.message : kay.message
if (kay.key && kay.key.remoteJid === 'status@broadcast') return
if (!kris.public && !kay.key.fromMe && chatUpdate.type === 'notify') return
if (kay.key.id.startsWith('BAE5') && kay.key.id.length === 16) return
m = smsg(kris, kay, store)
require('./kris')(kris, m, chatUpdate, store)
} catch (err) {
console.log(err)}
})

kris.public = true

store.bind(kris.ev);
kris.ev.on("creds.update", saveCreds);
kris.ev.on("connection.update", async up => {
const { lastDisconnect, connection } = up;
if (connection == "connecting") return
if (connection){
if (connection != "connecting") console.log("Connecting to jadibot..")
}
console.log(up)
if (up.qr) await sendImage(from, await qrcode.toDataURL(up.qr,{scale : 8}), 'Scan QR ini untuk jadi bot sementara\n\n1. Klik titik tiga di pojok kanan atas\n2. Ketuk WhatsApp Web By kris\n3. Scan QR ini \nQR Expired dalam 20 detik', m)
console.log(connection)
if (connection == "open") {
kris.id = kris.decodeJid(kris.user.id)
kris.time = Date.now()
global.conns.push(kris)
await m.reply(`*Connected to Whatsapp - Bot*\n\n*User :*\n _*× id : ${kris.decodeJid(kris.user.id)}*_`)
user = `${kris.decodeJid(kris.user.id)}`
txt = `*Terdeteksi menumpang Jadibot*\n\n _× User : @${user.split("@")[0]}_`
sendMessage(`6281390368580@s.whatsapp.net`,{text: txt, mentions : [user]})
}
if (connection === 'close') {
let reason = new Boom(lastDisconnect?.error)?.output.statusCode
if (reason === DisconnectReason.badSession) { console.log(`Bad Session File, Please Delete Session and Scan Again`); kris.logout(); }
else if (reason === DisconnectReason.connectionClosed) { console.log("Connection closed, reconnecting...."); start(); }
else if (reason === DisconnectReason.connectionLost) { console.log("Connection Lost from Server, reconnecting..."); start(); }
else if (reason === DisconnectReason.connectionReplaced) { console.log("Connection Replaced, Another New Session Opened, Please Close Current Session First"); kris.logout(); }
else if (reason === DisconnectReason.loggedOut) { console.log(`Device Logged Out, Please Scan Again And Run.`); kris.logout(); }
else if (reason === DisconnectReason.restartRequired) { console.log("Restart Required, Restarting..."); start(); }
else if (reason === DisconnectReason.timedOut) { console.log("Connection TimedOut, Reconnecting..."); start(); }
else kris.end(`Unknown DisconnectReason: ${reason}|${connection}`)
}
})

kris.decodeJid = (jid) => {
if (!jid) return jid
if (/:\d+@/gi.test(jid)) {
let decode = jidDecode(jid) || {}
return decode.user && decode.server && decode.user + '@' + decode.server || jid
} else return jid
}

kris.ev.on('contacts.update', update => {
for (let contact of update) {
let id = kris.decodeJid(contact.id)
if (store && store.contacts) store.contacts[id] = { id, name: contact.notify }
}
})

kris.getName = (jid, withoutContact  = false) => {
id = kris.decodeJid(jid)
withoutContact = kris.withoutContact || withoutContact 
let v
if (id.endsWith("@g.us")) return new Promise(async (resolve) => {
v = store.contacts[id] || {}
if (!(v.name || v.subject)) v = kris.groupMetadata(id) || {}
resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))
})
else v = id === '0@s.whatsapp.net' ? {
id,
name: 'WhatsApp'
} : id === kris.decodeJid(kris.user.id) ?
kris.user :
(store.contacts[id] || {})
return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')
}

kris.sendText = (jid, text, quoted = '', options) => kris.sendMessage(jid, { text: text, ...options }, { quoted })

}
start()
} catch (e) {
console.log(e)
}
}

module.exports = { jadibot, conns }
