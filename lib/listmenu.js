const chalk = require('chalk')
const fs = require('fs')

global.allmenu = (prefix, hituet) => {
return`🅞 = Khusus Owner
🅖 = Khusus Group
🅕 = Free User
🅟 = Premium

┏━ꕥ〔 llı 𝙾𝚆𝙽𝙴𝚁 𝙼𝙴𝙽𝚄 ıll 〕ꕥ━⬣
┃✾ .bc 🅞
┃✾ .join 🅞
┃✾ .shutdown 🅞
┃✾ .autodltt 🅞
┃✾ .autosticker 🅞
┃✾ .setppbot 🅞
┃✾ .addprem 🅞
┃✾ .delprem 🅞
┃✾ .addowner 🅞
┃✾ .delowner 🅞
┃✾ .addlist 🅞
┃✾ .dellist 🅞
┃✾ .updatelist 🅞
┃✾ .listnya 🅞
┃✾ .addvn 🅞
┃✾ .delvn 🅞
┃✾ .listvn 🅞
┃✾ .ban add 🅞
┃✾ .ban del 🅞
┗━ꕥ
┏━ꕥ〔 llı 𝙾𝚃𝙷𝙴𝚁 𝙼𝙴𝙽𝚄 ıll 〕ꕥ━⬣
┃✾ .owner 🅕
┃✾ .jadibot 🅟
┃✾ .listjadibot 🅟
┃✾ .donasi 🅕
┃✾ .listpremium 🅕
┃✾ .buypremium 🅕
┃✾ .jadiowner 🅕
┃✾ .sewabot 🅕
┃✾ .cekme 🅕
┃✾ .obfus 🅕
┃✾ .styletext 🅕
┃✾ .gttees 🅕
┃✾ .tourl 🅕
┃✾ .tovn 🅕
┃✾ .toaudio 🅕
┃✾ .tomp3 🅕
┃✾ .toimg 🅕
┃✾ .toonce 🅕
┃✾ .sticker 🅕
┃✾ .smeme 🅕
┃✾ .snobg 🅕
┃✾ .menfes 🅕
┃✾ .leave 🅕
┃✾ .ebinary 🅕
┃✾ .dbinary 🅕
┃✾ .cariresep 🅕
┃✾ .bacaresep 🅕
┃✾ .ssweb 🅕
┃✾ .wasted 🅕
┃✾ .comrade 🅕
┃✾ .horny 🅕
┃✾ .blur 🅕
┃✾ .pixelate 🅕
┃✾ .simpcard 🅕
┃✾ .lolice 🅕
┃✾ .gay 🅕
┃✾ .jail 🅕
┃✾ .quoted 🅕
┃✾ .caridoi 🅟
┃✾ .cariteman 🅟
┗━ꕥ
┏━ꕥ〔 llı 𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳 𝙼𝙴𝙽𝚄 ıll 〕ꕥ━⬣
┃✾ .tiktokvideo 🅕
┃✾ .tiktokaudio 🅕
┃✾ .ytsearch 🅕
┃✾ .play 🅕
┃✾ .mp3 🅕
┃✾ .mp4 🅕
┃✾ .googles 🅕
┃✾ .happymod 🅕
┗━ꕥ
┏━ꕥ〔 llı 𝙶𝚁𝙾𝚄𝙿 𝙼𝙴𝙽𝚄 ıll 〕ꕥ━⬣
┃✾ .antilink 🅖
┃✾ .antiwame 🅖
┃✾ .add 🅖
┃✾ .kick 🅖
┃✾ .promote 🅖
┃✾ .demote 🅖
┃✾ .hidetag 🅖
┃✾ .tagall 🅖
┃✾ .opentime 🅖
┃✾ .closetime 🅖
┗━ꕥ
┏━ꕥ〔 llı 𝙵𝚄𝙽 𝙶𝚁𝙾𝚄𝙿 ıll 〕ꕥ━⬣
┃✾ .memek 🅖
┃✾ .bego 🅖
┃✾ .goblok 🅖
┃✾ .janda 🅖
┃✾ .perawan 🅖
┃✾ .babi 🅖
┃✾ .tolol 🅖
┃✾ .pinter 🅖
┃✾ .pintar 🅖
┃✾ .asu 🅖
┃✾ .bodoh 🅖
┃✾ .gay 🅖
┃✾ .lesby 🅖
┃✾ .bajingan 🅖
┃✾ .jancok 🅖
┃✾ .anjing 🅖
┃✾ .ngentod 🅖
┃✾ .ngentot 🅖
┃✾ .monyet 🅖
┃✾ .mastah 🅖
┃✾ .newbie 🅖
┃✾ .bangsat 🅖
┃✾ .bangke 🅖
┃✾ .sange 🅖
┃✾ .sangean 🅖
┃✾ .dakjal 🅖
┃✾ .horny 🅖
┃✾ .wibu 🅖
┃✾ .puki 🅖
┃✾ .peak 🅖
┃✾ .pantex 🅖
┃✾ .pantek 🅖
┃✾ .setan 🅖
┃✾ .iblis 🅖
┃✾ .cacat 🅖
┃✾ .yatim 🅖
┃✾ .piatu 🅖
┃✾ .goblokcek 🅖
┃✾ .jelekcek 🅖
┃✾ .gaycek 🅖
┃✾ .rate 🅖
┃✾ .lesbicek 🅖
┃✾ .gantengcek 🅖
┃✾ .cantikcek 🅖
┃✾ .begocek 🅖
┃✾ .suhucek 🅖
┃✾ .pintercek 🅖
┃✾ .jagocek 🅖
┃✾ .nolepcek 🅖
┃✾ .babicek 🅖
┃✾ .bebancek 🅖
┃✾ .baikcek 🅖
┃✾ .jahatcek 🅖
┃✾ .anjingcek 🅖
┃✾ .haramcek 🅖
┃✾ .pakboycek 🅖
┃✾ .pakgirlcek 🅖
┃✾ .sangecek 🅖
┃✾ .bapercek 🅖
┃✾ .fakboycek 🅖
┃✾ .alimcek 🅖
┃✾ .suhucek 🅖
┃✾ .fakgirlcek 🅖
┃✾ .kerencek 🅖
┃✾ .wibucek 🅖
┃✾ .pasarkascek 🅖
┃✾ .kulcek 🅖                
┃✾ .cekgoblok 🅖
┃✾ .cekjelek 🅖
┃✾ .cekgay 🅖                
┃✾ .ceklesbi 🅖
┃✾ .cekganteng 🅖
┃✾ .cekcantik 🅖
┃✾ .cekbego 🅖
┃✾ .ceksuhu 🅖
┃✾ .cekpinter 🅖
┃✾ .cekjago 🅖
┃✾ .ceknolep 🅖
┃✾ .cekbabi 🅖
┃✾ .cekbeban 🅖
┃✾ .cekbaik 🅖
┃✾ .cekjahat 🅖
┃✾ .cekanjing 🅖
┃✾ .cekharam 🅖
┃✾ .cekpakboy 🅖
┃✾ .cekpakgirl 🅖
┃✾ .ceksange 🅖
┃✾ .cekbaper 🅖
┃✾ .cekfakboy 🅖
┃✾ .cekalim 🅖
┃✾ .ceksuhu 🅖
┃✾ .cekfakgirl 🅖
┃✾ .cekkeren 🅖
┃✾ .cekwibu 🅖
┃✾ .cekpasarkas 🅖
┃✾ .cekkul 🅖
┃✾ .cekbapak 🅖
┗━ꕥ
`}

global.ownermenu = (prefix) => {
return `🅞 = Khusus Owner
🅖 = Khusus Group
🅕 = Free User
🅟 = Premium

┏━ꕥ〔 llı 𝙾𝚆𝙽𝙴𝚁 𝙼𝙴𝙽𝚄 ıll 〕ꕥ━⬣
┃✾ .bc 🅞
┃✾ .join l
┃✾ .shutdown 🅞
┃✾ .autodltt 🅞
┃✾ .autosticker 🅞
┃✾ .setppbot 🅞
┃✾ .addprem 🅞
┃✾ .delprem 🅞
┃✾ .addowner 🅞
┃✾ .delowner 🅞
┃✾ .addlist 🅞
┃✾ .dellist 🅞
┃✾ .updatelist 🅞
┃✾ .listnya 🅞
┃✾ .addvn 🅞
┃✾ .delvn 🅞
┃✾ .listvn 🅞
┃✾ .ban add 🅞
┃✾ .ban del 🅞
┗━ꕥ
`}

global.fungroupmenu = (prefix) => {
return `🅞 = Khusus Owner
🅖 = Khusus Group
🅕 = Free User
🅟 = Premium

┏━ꕥ〔 llı 𝙵𝚄𝙽 𝙶𝚁𝙾𝚄𝙿 ıll 〕ꕥ━⬣
┃✾ .memek 🅖
┃✾ .bego 🅖
┃✾ .goblok 🅖
┃✾ .janda 🅖
┃✾ .perawan 🅖
┃✾ .babi 🅖
┃✾ .tolol 🅖
┃✾ .pinter 🅖
┃✾ .pintar 🅖
┃✾ .asu 🅖
┃✾ .bodoh 🅖
┃✾ .gay 🅖
┃✾ .lesby 🅖
┃✾ .bajingan 🅖
┃✾ .jancok 🅖
┃✾ .anjing 🅖
┃✾ .ngentod 🅖
┃✾ .ngentot 🅖
┃✾ .monyet 🅖
┃✾ .mastah 🅖
┃✾ .newbie 🅖
┃✾ .bangsat 🅖
┃✾ .bangke 🅖
┃✾ .sange 🅖
┃✾ .sangean 🅖
┃✾ .dakjal 🅖
┃✾ .horny 🅖
┃✾ .wibu 🅖
┃✾ .puki 🅖
┃✾ .peak 🅖
┃✾ .pantex 🅖
┃✾ .pantek 🅖
┃✾ .setan 🅖
┃✾ .iblis 🅖
┃✾ .cacat 🅖
┃✾ .yatim 🅖
┃✾ .piatu 🅖
┃✾ .goblokcek 🅖
┃✾ .jelekcek 🅖
┃✾ .gaycek 🅖
┃✾ .rate 🅖
┃✾ .lesbicek 🅖
┃✾ .gantengcek 🅖
┃✾ .cantikcek 🅖
┃✾ .begocek 🅖
┃✾ .suhucek 🅖
┃✾ .pintercek 🅖
┃✾ .jagocek 🅖
┃✾ .nolepcek 🅖
┃✾ .babicek 🅖
┃✾ .bebancek 🅖
┃✾ .baikcek 🅖
┃✾ .jahatcek 🅖
┃✾ .anjingcek 🅖
┃✾ .haramcek 🅖
┃✾ .pakboycek 🅖
┃✾ .pakgirlcek 🅖
┃✾ .sangecek 🅖
┃✾ .bapercek 🅖
┃✾ .fakboycek 🅖
┃✾ .alimcek 🅖
┃✾ .suhucek 🅖
┃✾ .fakgirlcek 🅖
┃✾ .kerencek 🅖
┃✾ .wibucek 🅖
┃✾ .pasarkascek 🅖
┃✾ .kulcek 🅖                
┃✾ .cekgoblok 🅖
┃✾ .cekjelek 🅖
┃✾ .cekgay 🅖                
┃✾ .ceklesbi 🅖
┃✾ .cekganteng 🅖
┃✾ .cekcantik 🅖
┃✾ .cekbego 🅖
┃✾ .ceksuhu 🅖
┃✾ .cekpinter 🅖
┃✾ .cekjago 🅖
┃✾ .ceknolep 🅖
┃✾ .cekbabi 🅖
┃✾ .cekbeban 🅖
┃✾ .cekbaik 🅖
┃✾ .cekjahat 🅖
┃✾ .cekanjing 🅖
┃✾ .cekharam 🅖
┃✾ .cekpakboy 🅖
┃✾ .cekpakgirl 🅖
┃✾ .ceksange 🅖
┃✾ .cekbaper 🅖
┃✾ .cekfakboy 🅖
┃✾ .cekalim 🅖
┃✾ .ceksuhu 🅖
┃✾ .cekfakgirl 🅖
┃✾ .cekkeren 🅖
┃✾ .cekwibu 🅖
┃✾ .cekpasarkas 🅖
┃✾ .cekkul 🅖
┃✾ .cekbapak 🅖
┗━ꕥ
`}

global.downloadmenu = (prefix) => {
return `🅞 = Khusus Owner
🅖 = Khusus Group
🅕 = Free User
🅟 = Premium
┏━ꕥ〔 llı 𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳 𝙼𝙴𝙽𝚄 ıll 〕ꕥ━⬣
┃✾ .tiktokvideo 🅕
┃✾ .tiktokaudio 🅕
┃✾ .ytsearch 🅕
┃✾ .play 🅕
┃✾ .mp3 🅕
┃✾ .mp4 🅕
┃✾ .googles 🅕
┃✾ .happymod 🅕
┗━ꕥ
`}

global.pubg = (prefix) => {
return `🅞 = Khusus Owner
🅖 = Khusus Group
🅕 = Free User
🅟 = Premium

┏━ꕥ〔 llı 𝚃𝙾𝙿𝚄𝙿  𝙿𝚄𝙱𝙶 𝙼𝙾𝙱𝙸𝙻𝙴ıll 〕ꕥ━⬣
┃✾ 💸 𝟯𝟱 𝗨𝗖 = 𝟭𝟬.𝟬𝟬𝟬
┃✾ 💸 𝟱𝟬 𝗨𝗖 = 𝟭𝟮.𝟬𝟬𝟬
┃✾ 💸 𝟳𝟬 𝗨𝗖 = 𝟭𝟲.𝟬𝟬𝟬
┃✾ 💸 𝟭𝟬𝟬 𝗨𝗖 = 𝟮𝟭.𝟬𝟬𝟬
┃✾ 💸 𝟭𝟮𝟱 𝗨𝗖 = 𝟮𝟱.𝟬𝟬𝟬
┃✾ 💸 𝟭𝟱𝟬 𝗨𝗖 = 𝟯𝟮.𝟬𝟬𝟬
┃✾ 💸 𝟮𝟬𝟬 𝗨𝗖 = 𝟰𝟬.𝟬𝟬𝟬
┃✾ 💸 𝟮𝟱𝟬 𝗨𝗖 = 𝟰𝟴.𝟬𝟬𝟬
┃✾ 💸 𝟯𝟬𝟬 𝗨𝗖 = 𝟱𝟴.𝟬𝟬𝟬
┃✾ 💸 𝟯𝟱𝟬 𝗨𝗖 = 𝟲𝟲.𝟬𝟬𝟬
┃✾ 💸 𝟳𝟬𝟬 𝗨𝗖 = 𝟭𝟯𝟮.𝟬𝟬𝟬
┃✾ 💸 𝟳𝟱𝟬 𝗨𝗖 = 𝟭𝟰𝟬.𝟬𝟬𝟬
┃✾ 💸 𝟭𝟬𝟬𝟬 𝗨𝗖 =  𝟭𝟴𝟱.𝟬𝟬𝟬
┃✾ 💸 𝟭𝟮𝟱𝟬 𝗨𝗖 = 𝟮𝟰𝟱.𝟬𝟬𝟬
┗━ꕥ
`}

global.suntik = (prefix) => {
return `🅞 = Khusus Owner
🅖 = Khusus Group
🅕 = Free User
🅟 = Premium

┏━ꕥ〔 llı 𝙺𝙴ı𝙱𝚄𝚃𝚄𝙷𝙰𝙽 𝚂𝙾𝚂𝙸𝙰𝙻 𝙼𝙴𝙳𝙸𝙰 llı  〕ꕥ━⬣
┃✾ 🏷️/𝟭.𝟬𝟬𝟬 𝙵𝚘𝚕𝚕𝚘𝚠𝚎𝚛𝚜 𝙸𝙶 𝟰5.𝟬𝟬𝟬
┃✾ 🏷️/𝟭.𝟬𝟬𝟬 𝙵𝚘𝚕𝚕𝚘𝚠𝚎𝚛𝚜 𝚃𝚒𝚔𝚃𝚘𝚔 𝟰𝟮.𝟬𝟬𝟬
┃✾ 🏷️/𝟭.𝟬𝟬𝟬 𝙻𝚒𝚔𝚎 𝙸𝙶 𝟴.𝟬𝟬𝟬
┃✾ 🏷️/𝟭.𝟬𝟬𝟬 𝙻𝚒𝚔𝚎 𝚃𝚒𝚔𝚃𝚘𝚔 𝟴.𝟬𝟬𝟬
┃✾ 🏷️/𝟭.𝟬𝟬𝟬 𝚅𝚒𝚎𝚠𝚜 𝙸𝙶 𝟯.𝟬𝟬𝟬
┃✾ 🏷️/𝟭.𝟬𝟬𝟬 𝚅𝚒𝚎𝚠𝚜 𝚃𝚒𝚔𝚃𝚘𝚔 𝟯.𝟬𝟬𝟬
┗━ꕥ
`}

global.mobiledm = (prefix) => {
return `🅞 = Khusus Owner
🅖 = Khusus Group
🅕 = Free User
🅟 = Premium

┏━ꕥ〔 llı 𝚃𝙾𝙿𝚄𝙿 𝙼𝙻 ıll 〕ꕥ━⬣
┃✾ 💎𝟹𝟼 = 𝟭𝟯𝗞
┃✾ 💎𝟾𝟼 = 𝟮𝟯𝗞
┃✾ 💎𝟷𝟷𝟸 = 𝟯𝟬𝗞
┃✾ 💎𝟷𝟽𝟸 = 𝟰𝟬𝗞
┃✾ 💎𝟸𝟻𝟽 = 𝟲𝟬𝗞
┃✾ 💎𝟹𝟺𝟺 = 𝟴𝟬𝗞
┃✾ 💎𝟺𝟸𝟿 = 𝟵𝟴𝗞
┃✾ 💎𝟻𝟷𝟺 = 𝟭𝟭𝟴𝗞
┃✾ 💎𝟼𝟶𝟶 = 𝟭𝟰𝟭𝗞
┗━ꕥ
`}

global.calof = (prefix) => {
return `🅞 = Khusus Owner
🅖 = Khusus Group
🅕 = Free User
🅟 = Premium

┏━ꕥ〔 llı  𝙲𝙰𝙻𝙻 𝙾𝙵  𝙳𝚄𝚃𝚈 ıll 〕ꕥ━⬣
┃✾ 𝟱𝟯 + 𝟵 𝗖𝗣 = 𝟭𝟮.𝟬𝟬𝟬
┃✾ 𝟭𝟬𝟲 + 𝟮𝟭 𝗖𝗣 = 𝟮𝟮.𝟬𝟬𝟬
┃✾ 𝟮𝟲𝟰 + 𝟱𝟯 𝗖𝗣 = 𝟱𝟭.𝟬𝟬𝟬
┃✾ 𝟱𝟮𝟴 + 𝟭𝟬𝟲 𝗖𝗣 = 𝟭𝟬𝟬.𝟬𝟬𝟬
┃✾ 𝟭𝟬𝟱𝟲 + 𝟯𝟭𝟳 𝗖𝗣 = 𝟭𝟵𝟴.𝟬𝟬𝟬
┗━ꕥ
`}

global.saldo = (prefix) => {
return `🅞 = Khusus Owner
🅖 = Khusus Group
🅕 = Free User
🅟 = Premium

┏━ꕥ〔 llı 𝚃𝙾𝙿𝚄𝙿 𝙴-𝚆𝙰𝙻𝙻𝙴𝚃 llı 〕ꕥ━⬣
┃𝟷𝟶𝚔 = 𝟭𝟯𝗞
┃𝟷𝟻𝙺= 𝟭𝟴𝗞
┃𝟸𝟶𝙺 = 𝟮𝟯𝗞
┃𝟹𝟶𝙺 = 𝟯𝟯𝗞
┃𝟺𝟶𝙺 = 𝟰𝟯𝗞
┃𝟻𝟶𝙺 = 𝟱𝟯𝗞
┃𝟼𝟶𝙺 = 𝟲𝟯𝗞
┃𝟽𝟶𝙺 = 𝟳𝟯𝗞
┃𝟾𝟶𝙺 = 𝟴𝟯𝗞
┃𝟿𝟶𝙺 = 𝟵𝟯𝗞
┃𝟷𝟶𝟶𝙺 = 𝟭𝟬𝟯𝗞
┃𝟸𝟶𝟶𝙺 = 𝟮𝟬𝟬𝟱𝗞
┗━ꕥ
`}

global.freefiremenu = (prefix) => {
return `🅝︎ = Produk = Diamond Legal Murah
🅑︎ = Silahkan Di Pilih
🅟︎ = Minat? wa.me/62882007324217
🅘︎ = By Ghusti Panengah

┏━ꕥ〔 llı 𝚃𝙾𝙿𝚄𝙿 𝙵𝙵 ıll 〕ꕥ━⬣
┃✾ 💎50 = Rp10.000
┃✾ 💎70 = Rp13.000 
┃✾ 💎70 = Rp13.000
┃✾ 💎100 = Rp16.000
┃✾ 💎140 = Rp21.000
┃✾ 💎210 = Rp30.000
┃✾ 💎355 = Rp47.000
┃✾ 💎500 = Rp68.000
┃✾ 💎700 = Rp90.000
┃✾ 💎1.000 = Rp123.000
┗━ꕥ
`}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
