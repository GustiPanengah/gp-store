const chalk = require('chalk')
const fs = require('fs')

global.allmenu = (prefix, hituet) => {
return `𝑵𝒂𝒎𝒂 : ${itsMebaymax ? 'Owner' : 'User'} : ${pushname}
𝑵𝒐𝒎𝒐𝒓 : ${itsMebaymax ? 'Owner' : 'User'} : ${sender.split("@")[0]}
𝑺𝒕𝒂𝒕𝒖𝒔 𝑷𝒓𝒆𝒎𝒊𝒖𝒎 : ${isPrem ? 'Premium User' : 'Free User'}
𝑹𝒖𝒏𝒕𝒊𝒎𝒆 : ${runtime(process.uptime())}

┏━ꕥ〔 llı 𝙾𝚆𝙽𝙴𝚁 𝙼𝙴𝙽𝚄 ıll 〕ꕥ━⬣
┃✾〔 1 〕.bc 
┃✾〔 2 〕.join 
┃✾〔 3 〕.shutdown 
┃✾〔 4 〕.autodltt 
┃✾〔 5 〕.autosticker 
┃✾〔 6 〕.setppbot 
┃✾〔 7 〕.addprem
┃✾〔 8 〕.delprem 
┃✾〔 9 〕.addowner 
┃✾〔 10 〕.delowner 
┃✾〔 11 〕.addlist 
┃✾〔 12 〕.dellist
┃✾〔 13 〕.updatelist 
┃✾〔 14 〕.listnya 
┃✾〔 15 〕.addvn 
┃✾〔 16 〕.delvn 
┃✾〔 17 〕.listvn 
┃✾〔 18 〕.ban add 
┃✾〔 19 〕.ban del 
┗━ꕥ
┏━ꕥ〔 llı 𝙶𝚁𝙾𝚄𝙿 𝙼𝙴𝙽𝚄 ıll 〕ꕥ━⬣
┃✾〔 20 〕.antilink on/of
┃✾〔 21 〕.welcome on/of
┃✾〔 22 〕.add 62852
┃✾〔 23 〕.kick @tags
┃✾〔 24 〕.promote
┃✾〔 25 〕.opentime
┃✾〔 26 〕.tagall
┃✾〔 27 〕.closetime
┃✾〔 28 〕.antiwame
┗━ꕥ
┏━ꕥ〔 llı 𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳 𝙼𝙴𝙽𝚄  ıll 〕
┃✾〔 29 〕.tiktokvideo
┃✾〔 30 〕.tiktokaudio
┃✾〔 31 〕.ytsearch
┃✾〔 32 〕.play
┃✾〔 33 〕.ytmp3
┃✾〔 34 〕.ytmp4
┃✾〔 35 〕.googles
┃✾〔 36 〕.happymod
┗━ꕥ
┏━ꕥ〔 llı 𝙾𝚃𝙷𝙴𝚁 𝙼𝙴𝙽𝚄 ıll 〕ꕥ━⬣
┃✾〔 37 〕.owner
┃✾〔 38 〕.jadibot
┃✾〔 39 〕.donasi
┃✾〔 40 〕.sewabot
┃✾〔 41 〕.cekme
┃✾〔 42 〕.obfus
┃✾〔 43 〕.sticker
┃✾〔 44 〕.tovn
┃✾〔 45 〕.tourl
┃✾〔 46 〕.tomp3
┃✾〔 47 〕.toimg
┃✾〔 48 〕.toonce
┃✾〔 49 〕.smeme
┃✾〔 50 〕.snobg
┃✾〔 51 〕.menfes
┃✾〔 52 〕.leave
┃✾〔 53 〕.ebinary
┃✾〔 54 〕.dbinary
┃✾〔 55 〕.jadiowner
┃✾〔 56 〕.buypremium
┃✾〔 57 〕.ssweb
┃✾〔 58 〕.wasted
┃✾〔 59 〕.caridoi
┃✾〔 60 〕.gay
┃✾〔 61 〕.jail
┃✾〔 62 〕.caritemen
┃✾〔 63 〕.pixelate
┃✾〔 64 〕.gittes
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
┃✾ 𝟭.𝟬𝟬𝟬 𝙵𝚘𝚕𝚕𝚘𝚠𝚎𝚛𝚜 𝙸𝙶 𝟰5.𝟬𝟬𝟬
┃✾ 𝟭.𝟬𝟬𝟬 𝙵𝚘𝚕𝚕𝚘𝚠𝚎𝚛𝚜 𝚃𝚒𝚔𝚃𝚘𝚔 𝟰𝟮.𝟬𝟬𝟬
┃✾ 𝟭.𝟬𝟬𝟬 𝙻𝚒𝚔𝚎 𝙸𝙶 𝟴.𝟬𝟬𝟬
┃✾ 𝟭.𝟬𝟬𝟬 𝙻𝚒𝚔𝚎 𝚃𝚒𝚔𝚃𝚘𝚔 𝟴.𝟬𝟬𝟬
┃✾ 𝟭.𝟬𝟬𝟬 𝚅𝚒𝚎𝚠𝚜 𝙸𝙶 𝟯.𝟬𝟬𝟬
┃✾ 𝟭.𝟬𝟬𝟬 𝚅𝚒𝚎𝚠𝚜 𝚃𝚒𝚔𝚃𝚘𝚔 𝟯.𝟬𝟬𝟬
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

global.smartunlimited = (prefix) => {
return `🅝︎ = Harga Paket Unlimited Harian

- 𝗦𝗠𝗔𝗥 𝗗𝗔𝗧𝗔 𝗨𝗡𝗟𝗜𝗠𝗜𝗧𝗘𝗗
  • 𝙎𝙢𝙖𝙧𝙩 𝙐𝙣𝙡𝙞𝙢𝙞𝙩𝙚𝙙 𝙁𝙐𝙋 1𝙂𝘽 7 𝙃𝙖𝙧𝙞 = 23.000
  • 𝙎𝙢𝙖𝙧𝙩 𝙐𝙣𝙡𝙞𝙢𝙞𝙩𝙚𝙙 𝙁𝙐𝙋 1𝙂𝘽 14 𝙃𝙖𝙧𝙞 = 40.000
  • 𝙎𝙢𝙖𝙧𝙩 𝙐𝙣𝙡𝙞𝙢𝙞𝙩𝙚𝙙 𝙁𝙐𝙋 500𝗠𝗕 28 𝙃𝙖𝙧𝙞 = 57.000
  • 𝙎𝙢𝙖𝙧𝙩 𝙐𝙣𝙡𝙞𝙢𝙞𝙩𝙚𝙙 𝙁𝙐𝙋 700𝗠𝗕 28 𝙃𝙖𝙧𝙞 = 62.000
  • 𝙎𝙢𝙖𝙧𝙩 𝙐𝙣𝙡𝙞𝙢𝙞𝙩𝙚𝙙 𝙁𝙐𝙋 2𝙂𝘽 28 𝙃𝙖𝙧𝙞 = 78.000
  • 𝙎𝙢𝙖𝙧𝙩 𝙐𝙣𝙡𝙞𝙢𝙞𝙩𝙚𝙙 𝙁𝙐𝙋 3𝙂𝘽 28 𝙃𝙖𝙧𝙞 = 100.000
`}

global.smartnonstop = (prefix) => {
return `🅝︎ = Harga Paket Unlimited Nonstop

- Unlimited Nonstop 2 GB (masa aktif 10 hari): Rp 10.000
- Unlimited Nonstop 3 GB (masa aktif 14 hari): Rp 15.000
- Unlimited Nonstop 6 GB (masa aktif 30 hari): Rp 30.000
- Unlimited Nonstop 12 GB (masa aktif 30 hari): Rp 45.000
- Unlimited Nonstop 30 GB (masa aktif 30 hari): Rp 70.000
- Unlimited Nonstop 45 GB (masa aktif 30 hari): Rp 100.000
- Unlimited Nonstop 60 GB (masa aktif 30 hari): Rp 125.000
`}

global.smartpaketkuota = (prefix) => {
return `🅝︎ = Harga Paket Kuota

- Kuota 2,5 GB (masa aktif 3 hari): Rp 5.000
- Kuota 3 GB (masa aktif 14 hari): Rp 15.000
- Kuota 4 GB (masa aktif 7 hari): Rp 10.000
- Kuota 6 GB (masa aktif 30 hari): Rp 20.000
- Kuota 9 GB (masa aktif 30 hari): Rp 15.000
- Kuota 10 GB (masa aktif 30 hari): Rp 30.000
- Kuota 16 GB (masa aktif 30 hari): Rp 40.000
- Kuota 18 GB (masa aktif 30 hari): Rp 22.500
- Kuota 30 GB (masa aktif 30 hari): Rp 60.000
- Kuota 60 GB (masa aktif 30 hari): Rp 100.000
- Kuota 90 GB (masa aktif 30 hari): Rp 150.000
- Kuota 120 GB (masa aktif 30 hari): Rp 200.000
- Kuota 100 GB (masa aktif 90 hari): Rp 300.000
- Kuota 200 GB (masa aktif 180 hari): Rp 500.000
- Kuota 420 GB (masa aktif 360 hari): Rp 1.000.000
`}

global.xlxtracombo = (prefix) => {
return `🅝︎ = Harga Paket xtra combo viv Masa Aktif 30Hari

- Xtra Combo Plus VIP 10 GB: Rp 71.500
- Xtra Combo Plus VIP 20 GB: Rp 101.000
- Xtra Combo Plus VIP 30 GB: Rp 141.000
- Xtra Combo Plus VIP 52 GB: Rp 192.000
- Xtra Combo Plus VIP 72 GB: Rp 252.500
`}

global.xlxtramini = (prefix) => {
return `🅝︎ = Harga Paket xtra combo Kuota Utama Dan Youtube

- Xtra Combo Mini 1,5 GB: Rp 9.600
- Xtra Combo Mini 2,5 GB: Rp 13.650
- Xtra Combo Mini 4 GB: Rp 17.500
- Xtra Combo Mini 6 GB: Rp 22.250
`}

global.indosatfreedomu = (prefix) => {
return `🅝︎ =harga paket Internet Indosat Freedom U

- Freedom U 1.5 GB/2 hari Rp 5.500
- Freedom U 3 GB/6 hari Rp 16.000
- Freedom U 5.5 GB/30 hari Rp 31.000
- Freedom U 10 GB/30 hari Rp 52.000
- Freedom U 20 GB/30 hari Rp 74.000
- Freedom U 35 GB/30 hari Rp 96.000
- Freedom U 45 GB/30 hari Rp 107.000
- Freedom U Jumbo 90 GB/30 hari Rp 162.000
`}

global.indosatyelow = (prefix) => {
return `🅝︎ =harga paket Internet Indosat Yelow

- Yellow 700 MB/1 hari Rp 3.250
- Yellow 1 GB/1 hari Rp 4.250
- Yellow 1 GB/2 hari Rp 5.500
- Yellow 1 GB/7 hari Rp 11.000
`}

global.indosatharian = (prefix) => {
return `🅝︎ =harga paket Internet Indosat Yelow

- Freedom Kuota Harian 1 GB/hari (7GB) Rp 27.500
- Freedom Kuota Harian 1 GB/hari (14 GB) Rp 50.500
- Freedom Kuota Harian 1 GB/hari (28 GB) Rp 88.500
`}

global.indosatfreedomcombo = (prefix) => {
return `🅝︎ =harga paket Internet Indosat Yelow

- Freedom Combo 4 GB, nelpon 5 menit, nelpon Ke IM3 dan Tri Sepuasnya (5,000 menit) Rp 27.500
- Freedom Combo 6 GB, nelpon 5 menit, nelpon Ke IM3 dan Tri Sepuasnya (5,000 menit) Rp 31.000
- Freedom Combo 10 GB, nelpon 10 menit, nelpon Ke IM3 dan Tri Sepuasnya (5,000 menit) Rp 42.000
- Freedom Combo 16 GB, nelpon 15 menit, nelpon Ke IM3 dan Tri Sepuasnya (5,000 menit) Rp 55.000
- Freedom Combo 20 GB, nelpon 15 menit, nelpon Ke IM3 dan Tri Sepuasnya (5,000 menit) Rp 64.000
- Freedom Combo 30 GB, nelpon 20 menit, nelpon Ke IM3 dan Tri Sepuasnya (5,000 menit) Rp 86.000
- Freedom Combo 40 GB, nelpon 30 menit, nelpon Ke IM3 dan Tri Sepuasnya (5,000 menit) Rp 108.000
- Freedom Combo 60 GB, nelpon 30 menit, nelpon Ke IM3 dan Tri Sepuasnya (5,000 menit) Rp 164.000
`}

global.indosatfreedominternet = (prefix) => {
return `🅝︎ =harga Paket Internet Indosat Freedom Internet

- Freedom Internet 2 GB/hari Rp 7.500
- Freedom Internet 1.5 GB/ 4 hari Rp 9.500
- Freedom Internet 2.5 GB/ 5 hari Rp 11.000
- Freedom Internet 5 GB/ 3 hari Rp 14.500
- Freedom Internet 4 GB/ 5 hari Rp 16.000
- Freedom Internet 7 GB/ 5 hari Rp 20.500
`}

global.axisdatabronet = (prefix) => {
return `🅝︎ =harga Paket Internet axis bronet

- Kuota 500MB = Rp 4.000 perhari
- Kuota 1GB = Rp 6.000 perhari
- Kuota 2GB = Rp 7.900 perhari
- Kuota 3GB = Rp 8.900 perhari
- Kuota 1.5GB = Rp 10.900 perminggu
- Kuota 2GB = Rp 13.500 perminggu
- Kuota 3GB = Rp 15.900 perminggu
- Kuota 4.5GB = Rp 17.900 perminggu
- Kuota 8GB = Rp 20.000 perminggu
- Kuota 12GB = Rp 25.900 perminggu
- Kuota 1.5GB = Rp 19.900 perbulan
- Kuota 3GB = Rp 29.900 perbulan
- Kuota 5GB = Rp 39.900 perbulan
- Kuota 8GB = Rp 59.900 perbulan
- Kuota 12GB = Rp 82.900 perbulan
- Kuota 10GB = Rp 97.900 perbulan
- Kuota 12GB = Rp 110.900 perbulan
- Kuota 16GB = Rp 139.900 perbulan
`}

global.axisdatawarnet = (prefix) => {
return `🅝︎ =harga Paket Internet axis warnet

- Kuota 1GB = Rp 590 selama 1 jam
- Kuota 2GB = Rp 1.390 selama 2 jam
- Kuota 3GB = Rp 2.190 selama 3 jam
- Kuota 3GB = Rp 2.990 selama 6 jam
`}

global.axisdataobor = (prefix) => {
return `🅝︎ =harga Paket Internet axis warnet

- Kuota 2GB = Rp 5.000 berlaku 3 hari
- Kuota 8GB = Rp 18.900 berlaku 7 hari
- Kuota 5GB = Rp 19.900 berlaku 30 hari
- Kuota 14GB = Rp 25.900 berlaku 10 hari
- Kuota 10GB = Rp 39.900 berlaku 30 hari
- Kuota 15GB = Rp 54.900 berlaku 30 hari
`}

global.axisdataowsem = (prefix) => {
return `🅝︎ =harga Paket Internet Indosat Freedom Internet

- Kuota 16GB = Rp43.900 / 30 hari
- Kuota 24GB = Rp53.900 / 30 hari
- Kuota 40GB = Rp65.900 / 30 hari
- Kuota 64GB = Rp83.900 / 30 hari
- Kuota 120GB = Rp104.900 / 30 hari
`}

global.axisdataboostr = (prefix) => {
return `🅝︎ =harga Paket Internet Indosat Freedom Internet

- Kuota 500MB = Rp700 selama 1 hari
- Kuota 1GB = Rp1.000 selama 1 hari
- Kuota 2GB = Rp1.500 selama 1 hari
- Kuota 1GB = Rp3.500 selama 7 hari
- Kuota 2GB = Rp5.500 selama 7 hari
- Kuota 3GB = Rp7.500 selama 7 hari
- Kuota 1GB = Rp4.500 selama 30 hari
- Kuota 2GB = Rp7.500 selama 30 hari
- Kuota 5GB = Rp15.000 selama 30 hari
`}

global.threedatahappy = (prefix) => {
return `🅝︎ =Harga paket three Happy (kuota utama dan kuota lokal)

- Happy 1,5 GB (masa aktif 1 hari): Rp 4.000
- Happy 2,5 GB (masa aktif 1 hari): Rp 5.500
- Happy 5 GB (masa aktif 1 hari): Rp 10.000
- Happy 3 GB (masa aktif 3 hari): Rp 11.000
- Happy 5 GB (masa aktif 3 hari): Rp 15.000
- Happy 3,5 GB (masa aktif 5 hari): Rp 16.000
- Happy 5 GB (masa aktif 5 hari): Rp 21.000
- Happy 1,5 GB (masa aktif 7 hari): Rp 9.000
- Happy 5 GB (masa aktif 7 hari): Rp 20.000
- Happy 9 GB (masa aktif 10 hari): Rp 31.000
- Happy 3 GB (masa aktif 30 hari): Rp 15.000
- Happy 7 GB (masa aktif 30 hari): Rp 30.000
- Happy 11 GB (masa aktif 30 hari): Rp 45.000
- Happy 14 GB (masa aktif 30 hari): Rp 55.000
- Happy 18 GB (masa aktif 30 hari): Rp 60.000
- Happy 30 GB (masa aktif 30 hari): Rp 70.000
- Happy 42 GB (masa aktif 30 hari): Rp 85.000
- Happy 55 GB (masa aktif 30 hari): Rp 110.000
- Happy 100 GB (masa aktif 30 hari): Rp 135.000
`}

global.threedataaon = (prefix) => {
return `🅝︎ = Harga paket AON (kuota utama dan kuota lokal)

- AON 2,5 GB: Rp 15.500
- AON 3,5 GB: Rp 21.000
- AON 6 GB: Rp 31.000
- AON 9 GB: Rp 45.000
- AON 12 GB: Rp 55.000
- AON 40 GB: Rp 99.000
`}

global.threedatakompak = (prefix) => {
return `🅝︎ = Harga paket Kompak (masa aktif 30 hari)
- Kompak 25 GB: Rp 60.000
- Kompak 50 GB: Rp 115.000
- Kompak 85 GB: Rp 190.000
- Kompak 160 GB: Rp 299.000
- Kompak 280 GB: Rp 499.000
`}

global.threedatah3pro = (prefix) => {
return `🅝︎ = Harga paket H3RO (kuota utama dan kuota unlimited aplikasi game)

- H3RO 1 GB (masa aktif 7 hari): Rp 15.000
- H3RO 2 GB (masa aktif 30 hari): Rp 35.000
- H3RO 3 GB (masa aktif 30 hari): Rp 50.000
`}

global.pulsaindosat = (prefix) => {
return `🅝︎ =harga Pulsa Indosat

- INDOSAT REGULER	5.000 =	7.000		
- INDOSAT REGULER	10.000 = 12.000		
- INDOSAT REGULER	12.000 = 14.000		
- INDOSAT REGULER	15.000 = 17.000		
- INDOSAT REGULER	20.000 = 22.000		
- INDOSAT REGULER	25.000 = 27.000	
- INDOSAT REGULER	30.000 = 32.000	
- INDOSAT REGULER	50.000 = 52.000		
- INDOSAT REGULER	100.000 = 100.000	
- INDOSAT REGULER	150.000 = 150.000
`}

global.pulsathree = (prefix) => {
return `🅝︎ =harga Pulsa three

- THREE	1000 = 1.700		
- THREE	2000 = 3.000		
- THREE	3000 = 4.000		
- THREE	4000 = 5.000		
- THREE	5.000 = 7.000		
- THREE	10.000 = 12.000		
- THREE	20.000 = 22.000		
- THREE	25.000 = 27.000		
- THREE	30.000 = 32.000		
- THREE	50.000 = 52.000	
`}

global.pulsasmartfren = (prefix) => {
return `🅝︎ =harga Pulsa smartfren

- SMARTFREN	5.000 = 7.000	
- SMARTFREN	10.000 = 12.000		
- SMARTFREN	20.000 = 22.000		
- SMARTFREN	25.000 = 26.000		
- SMARTFREN	30.000 = 32.000		
- SMARTFREN	50.000 = 51.000		
- SMARTFREN	60.000 = 61.000		
- SMARTFREN	100.000 = 100.000		
- SMARTFREN	150.000 = 150.000		
- SMARTFREN	200.000 = 200.000		
- SMARTFREN	300.000 = 300.000		
- SMARTFREN	500.000 = 500.000
`}

global.pulsatelkomsel = (prefix) => {
return `🅝︎ =harga Pulsa telkomsel

- TELKOMSEL REGULER	Telkomsel 5rb	7.000
- TELKOMSEL REGULER	Telkomsel 10rb	12.000
- TELKOMSEL REGULER	Telkomsel 20rb	22.000
- TELKOMSEL REGULER	Telkomsel 25rb	27.000
- TELKOMSEL REGULER	Telkomsel 35rb	37.000
- TELKOMSEL REGULER	Telkomsel 40rb	42.000
- TELKOMSEL REGULER	Telkomsel 45rb	47.000
- TELKOMSEL REGULER	Telkomsel 50rb  51.000
- TELKOMSEL REGULER	Telkomsel 60rb	62.000
- TELKOMSEL REGULER	Telkomsel 65rb	67.000
- TELKOMSEL REGULER	Telkomsel 80rb	82.000
- TELKOMSEL REGULER	Telkomsel 90rb	92.000
- TELKOMSEL REGULER	Telkomsel 100rb	100.000
- TELKOMSEL REGULER	Telkomsel 150rb	150.000
- TELKOMSEL REGULER	Telkomsel 200rb	200.000
`}

global.pulsaaxis = (prefix) => {
return `🅝︎ =harga Pulsa axis

- AXIS	Axis 5rb	7.000		
- AXIS	Axis 10rb	12.000		
- AXIS	Axis 15rb	17.000		
- AXIS	Axis 25rb	27.000		
- AXIS	Axis 30rb	32.000		
- AXIS	Axis 50rb	52.000		
- AXIS	Axis 100rb	100.000		
- AXIS	Pulsa 150.000
- AXIS	Axis 200rb	200.000	
- AXIS	Axis 300rb	300.000
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
