const chalk = require("chalk")
const fs = require("fs")

global.hituet = 0
global.gopayno = "0813-9036-8580"
global.danano = "0813-9036-8580"
global.shopeepayno = "0813-9036-8580"
global.creator = "62882007324217@s.whatsapp.net"
global.thumb = fs.readFileSync(`./image/thumb.png`)
global.qrisdonate = fs.readFileSync(`./image/qris.jpg`)
global.freefire = fs.readFileSync(`./image/freefire.jpg`)
global.ml = fs.readFileSync(`./image/ml.jpg`)
global.pubg = fs.readFileSync(`./image/pubg.jpg`)
global.saldo = fs.readFileSync(`./image/ml.jpg`)
global.fake = `📍𝑪𝒓𝒆𝒂𝒕𝒆𝒅 𝑩𝒚 𝑮𝒖𝒔𝒕𝒊 𝑷𝒂𝒏𝒆𝒏𝒈𝒂𝒉`
global.packname = ``
global.author = `×͜× ▭▬▭▬▭▬ 👑 ▭▬▭▬▭▬ ×͜×\nﾒ 𝗖𝗿𝗲𝗮𝘁𝗲𝗱 𝗕𝘆 𝗚𝘂𝘀𝘁𝗶 𝗣𝗮𝗻𝗲𝗻𝗴𝗮𝗵\nﾒ 𝗖𝗿𝗲𝗮𝘁𝗼𝗿 𝗚𝘂𝘀 𝗣𝗮𝗻𝗲𝗻𝗴𝗮𝗵 : 081390368580\nﾒ 𝗬𝗼𝘂𝘁𝘂𝗯𝗲 : 𝗞𝗿𝗶𝘀𝗛𝗼𝘀𝘁𝗶𝗻𝗴\n⊟————————⊟`
global.antilink = false
global.antiwame = false
global.autodltt = false
global.autosticker = false
global.ownerNomor = '62882007324217'
global.ownerName = '𝗚𝘂𝘀𝘁𝗶 𝗣𝗮𝗻𝗲𝗻𝗴𝗮𝗵'
global.ownerNumber = ["62882007324217@s.whatsapp.net"]
global.cek1 = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
global.mess = {
    wait: 'Wait Sis Please be patient',
    succes: 'Good Luck Sis ?',
    admin: 'Group Admin Special Features!!!',
    botAdmin: 'Bots Must Be Admins First!!!',
    owner: 'Ente Kadang-kadang Ente, Nih Khusus Owner Nih!!!',
    group: 'Features Used Only For Groups!!!',
    private: 'Features Used Only For Private Chat!!!',
    bot: 'Bot Number User Special Features!!!',
    error: 'Error Sis, Please Chat Owner...',
    premium: 'Maaf Sebelumya Kamu Belum Premium, Silahkan Pencet Di Bawah Untuk Beli Premium',
}

global.bapak = [
'Wah Mantap Lu Masih Punya Bapack\nPasti Bapack Nya Kuli :v\nAwowkwokwwok\n#CandabOs',
'Aowkwwo Disini Ada Yteam :v\nLu Yteam Bro? Awowkwowk\nSabar Bro Ga Punya Bapack\n#Camda',
'Bjir Bapack Mu Ternyata Sudah Cemrai\nSedih Bro Gua Liatnya\nTapi Nih Tapi :v\nTetep Ae Lu Yteam Aowkwowkw Ngakak :v',
'Jangan #cekbapak Mulu Broo :v\nKasian Yang Yteam\nNtar Tersinggung Kan\nYahahaha Hayyuk By : 𝗞𝗿𝗶𝘀 𝗛𝗼𝘀𝘁𝗶𝗻𝗴',
]

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
