const chalk = require('chalk')
const fs = require('fs')

global.allmenu = (prefix) => {
return `🅝︎ =Semua Command Bot

╔═══════✪「 OWNER 」	
╠ ${prefix}self
╠ ${prefix}public
╠ ${prefix}rentbot [add/del]
╠ ${prefix}rentlist
╠ ${prefix}ban [add/del]
╠ ${prefix}join [link]
╠ ${prefix}leavegc
╠ ${prefix}autodltt
╠ ${prefix}addowner [text]
╠ ${prefix}delowner [text]
╠ ${prefix}bcimage [image]
╠ ${prefix}addprem [video]
╠ ${prefix}updatelist
╠ ${prefix}setppbot [image]
╠ ${prefix}setexif
╠ ${prefix}autosticker
╠ ${prefix}listnya
╠ ${prefix}listvn
╠═══════✪「 GROUP 」	        
╠${prefix}grousetting
╠${prefix}grouplink
╠${prefix}ephemeral [option]
╠${prefix}setgcpp [image]
╠${prefix}setname [text]
╠${prefix}setdesc [text]
╠${prefix}group 
╠${prefix}resetgrouplink
╠${prefix}editinfo [option]
╠${prefix}add [user]
╠${prefix}kick [reply/tag]
╠${prefix}hidetag [text]
╠${prefix}tagall [text]
╠${prefix}antilinkgc [on/off]
╠${prefix}antilinktg [on/off]
╠${prefix}antilinktt [on/off]
╠${prefix}antilinkytch [on/off]
╠${prefix}antilinkytvid [on/off]
╠${prefix}antilinkig [on/off]
╠${prefix}antilinkfb [on/off]
╠${prefix}antilinktwit [on/off]
╠${prefix}antilinkall [on/off]
╠${prefix}antivirus [on/off]
╠${prefix}antitoxic [on/off]
╠${prefix}antiwame [on/off]
╠${prefix}autoreply [on/off]
╠${prefix}nsfw [on/off]
╠${prefix}promote [reply/tag]
╠${prefix}demote [reply/tag]
╠${prefix}react [reply emoji]
╠${prefix}vote
╠${prefix}devote
╠${prefix}upvote
╠${prefix}checkvote
╠${prefix}delvote
╠═══════✪「 MAKER 」
╠${prefix}candy
╠${prefix}blackpinkneon
╠${prefix}deepsea
╠${prefix}scifi
╠${prefix}fiction
╠${prefix}berry
╠${prefix}fruitjuice
╠${prefix}biscuit
╠${prefix}wood
╠${prefix}chocolate
╠${prefix}matrix
╠${prefix}blood
╠${prefix}halloween
╠${prefix}wicker
╠${prefix}darkgold
╠${prefix}firework
╠${prefix}skeleton
╠${prefix}sand
╠${prefix}glue
╠${prefix}leaves
╠${prefix}magma
╠${prefix}lava
╠${prefix}rock
╠${prefix}bloodglas
╠${prefix}underwater
╠${prefix}textmaker
╠${prefix}honey
╠${prefix}ice
╠${prefix}watercolor
╠${prefix}multicolor
╠${prefix}snow
╠${prefix}harrypot
╠${prefix}harrypotter
╠${prefix}brokenglass
╠${prefix}waterpipe
╠${prefix}spooky
╠${prefix}circuit
╠${prefix}metallic
╠${prefix}demon
╠${prefix}sparklechristmas
╠${prefix}christmas
╠${prefix}3dchristmas
╠${prefix}3dbox
╠${prefix}waterdrop
╠${prefix}lion2
╠${prefix}papercut
╠${prefix}transformer
╠${prefix}neondevil
╠${prefix}3davengers
╠${prefix}3dstone
╠${prefix}3dstone2
╠${prefix}summertime
╠${prefix}thunder
╠${prefix}window
╠${prefix}graffiti
╠${prefix}graffitibike
╠${prefix}pornhub
╠${prefix}glitch
╠${prefix}blackpink
╠${prefix}glitch2
╠${prefix}glitch3
╠${prefix}3dspace
╠${prefix}lion
╠${prefix}3dneon
╠${prefix}greenneon
╠${prefix}bokeh
╠${prefix}holographic
╠${prefix}bear
╠${prefix}wolf
╠${prefix}joker
╠${prefix}dropwater
╠${prefix}dropwater2
╠${prefix}thewall
╠${prefix}neonlight
╠${prefix}natural
╠${prefix}carbon
╠${prefix}pencil
╠${prefix}blackpink2
╠${prefix}neon
╠${prefix}neonlight2
╠${prefix}toxic
╠${prefix}strawberry
╠${prefix}discovery
╠${prefix}1917
╠ ${prefix}sci_fi
╠ ${prefix}ancient
╠ ${prefix}fabric
╠ ${prefix}hoorror
╠ ${prefix}whitebear
╠ ${prefix}juice
╠ ${prefix}batman
╠ ${prefix}multicolor
╠ ${prefix}collwall
╠ ${prefix}wonderful
╠ ${prefix}cool
╠ ${prefix}sketch
╠ ${prefix}marvel
╠ ${prefix}foggy
╠ ${prefix}writing
╠ ${prefix}halloweenfire
╠ ${prefix}halloween
╠ ${prefix}watercolor
╠ ${prefix}classic
╠═════✪「 DOWNLOAD 」	
╠${prefix}instagram [url]
╠${prefix}igtv [url]
╠${prefix}igstory [username]
╠${prefix}facebook [url]
╠${prefix}fbmp3 [url]
╠${prefix}twitter [url]
╠${prefix}twittermp3 [url]
╠${prefix}tiktok [url]
╠${prefix}tiktokaudio[url]
╠${prefix}tiktoknowm [url]
╠${prefix}mediafire [url]
╠${prefix}ytmp3 [url|quality]
╠${prefix}ytmp4 [url|quality]
╠${prefix}getmusic [yt link]
╠${prefix}getvideo [yt link]
╠${prefix}gitclone [repo link]
╠${prefix}soundcloud [url]
╠${prefix}zippyshare [url]
╠═══════✪「 SEARCH 」	
╠${prefix}play [query]
╠${prefix}song [query]
╠${prefix}yts [query]
╠${prefix}lyrics [query]
╠${prefix}google [query]
╠${prefix}playstore [query]
╠${prefix}gimage [query]
╠${prefix}pinterest [query]
╠${prefix}image [query]
╠${prefix}film [query]
╠${prefix}wallpaper [query]
╠${prefix}searchgc [query]
╠${prefix}happymod [query]
╠${prefix}servermc
╠${prefix}mcpedl [query]
╠${prefix}tvsearch [query]
╠${prefix}wikimedia [query]
╠${prefix}ytsearch [query]
╠${prefix}ringtone [query]
╠${prefix}webtoon [query]
╠${prefix}anime [query]
╠${prefix}animestory [query]
╠${prefix}manga [query]
╠${prefix}wattpad [query]
╠ ${prefix}mcserver [ip|port]
╠ ${prefix}drakor [query]
╠═══════✪「 CONVERT 」
╠ ${prefix}toimage [reply stick]
╠ ${prefix}sticker [reply img|gif]
╠ ${prefix}take [reply img|gif|stik]
╠ ${prefix}smeme [reply img]
╠ ${prefix}emoji [emoji]
╠ ${prefix}tovideo [reply img]
╠ ${prefix}togif [reply stick]
╠ ${prefix}tourl [reply img]
╠ ${prefix}tovn [reply aud]
╠ ${prefix}tomp3 [reply vn]
╠ ${prefix}toaudio [reply vid]
╠ ${prefix}ebinary [reply txt]
╠ ${prefix}dbinary [reply txt]
╠ ${prefix}tinyurl [link]
╠ ${prefix}styletext [text]
╠${prefix}volume [reply aud]
╠${prefix}tempo [reply aud]
╠${prefix}bass [reply aud]
╠${prefix}blown [reply aud]
╠${prefix}deep [reply aud]
╠${prefix}earrape [reply aud]
╠${prefix}fast [reply aud]
╠${prefix}fat [reply aud]
╠${prefix}nightcore [reply aud]
╠${prefix}reverse [reply aud]
╠${prefix}robot [reply aud]
╠${prefix}slow [reply aud]
╠${prefix}squirrel [reply aud]
╠═══════✪「 IMG EFFECT 」
╠${prefix}wanted
╠${prefix}blur
╠${prefix}framed
╠${prefix}gayeffect
╠${prefix}imagesketch
╠${prefix}invert
╠${prefix}burn
╠${prefix}triggeredwebp
╠${prefix}shit
╠${prefix}rip
╠${prefix}jail
╠${prefix}beautifuleffect
╠${prefix}deleteeffect
╠${prefix}pixelate
╠═══════✪「 RANDOM IMG 」
╠${prefix}coffee
╠${prefix}bts
╠${prefix}woof
╠${prefix}meow
╠${prefix}lizard
╠${prefix}wallneon
╠${prefix}wallpubg
╠${prefix}wallml
╠${prefix}wallrandom
╠${prefix}wallcode
╠${prefix}animewall [query]
╠${prefix}animewall2 [query]
╠═══════✪「 EMOTE 」
╠${prefix}instagramemoji
╠${prefix}facebookemoji
╠${prefix}iphoneemoji
╠${prefix}samsungemoji
╠${prefix}joyemoji
╠${prefix}skypeemoji
╠${prefix}twitteremoji
╠${prefix}whatsappemoji
╠${prefix}microsoftemoji
╠${prefix}googleemoji
╠${prefix}pediaemoji
╠${prefix}microsoftemoji
╠═══════✪「 ANIME 」
╠${prefix}naruto
╠${prefix}yaoi
╠${prefix}neko2
╠${prefix}waifu
╠${prefix}waifu2
╠${prefix}awoo2
╠${prefix}shinobu
╠${prefix}waifu3
╠${prefix}foxgirl
╠${prefix}megumin2
╠${prefix}loli
╠${prefix}8ball
╠${prefix}animenom
╠${prefix}goose
╠${prefix}avatar
╠${prefix}tickle
╠${prefix}gecg
╠${prefix}feed
╠${prefix}animeslap
╠${prefix}animespank
╠${prefix}animepat
╠${prefix}animeneko
╠${prefix}animekiss
╠${prefix}animewlp
╠${prefix}animecuddle
╠${prefix}animecry
╠${prefix}animekill
╠${prefix}animelick
╠${prefix}animebite
╠${prefix}animeyeet
╠${prefix}animebully
╠${prefix}animebonk
╠${prefix}animewink
╠${prefix}animepoke
╠${prefix}animesmile
╠${prefix}animewave
╠${prefix}animeawoo
╠${prefix}animeblush
╠${prefix}animesmug
╠${prefix}animeglomp
╠${prefix}animehappy
╠${prefix}animedance
╠${prefix}animecringe
╠${prefix}animehighfive
╠${prefix}animehandhold
╠${prefix}animemegumin
╠${prefix}smug2
╠${prefix}couplepp
╠══════✪「 STICKER 」
╠ ${prefix}patrick
╠ ${prefix}emoji
╠ ${prefix}emojimix
╠ ${prefix}attp
╠ ${prefix}ttp
╠ ${prefix}doge
╠ ${prefix}lovesticker
╠════✪「 ANIME STICKER 」
╠${prefix}loli
╠${prefix}bully
╠${prefix}cuddle
╠${prefix}cry
╠${prefix}hug
╠${prefix}awoo
╠${prefix}kiss
╠${prefix}lick
╠${prefix}pat
╠${prefix}smug
╠${prefix}bonk
╠${prefix}yeet
╠${prefix}blush
╠${prefix}smile
╠${prefix}wave
╠${prefix}highfive
╠${prefix}handhold
╠${prefix}nom
╠${prefix}glomp
╠${prefix}bite
╠${prefix}slap
╠${prefix}kill
╠${prefix}happy
╠${prefix}wink
╠${prefix}poke
╠${prefix}dance
╠${prefix}cringe
╠${prefix}neko
╠${prefix}gura
╠═══════✪「 NSFW 」
╠${prefix}hentaivideo
╠${prefix}yuri
╠${prefix}masturbation
╠${prefix}thighs
╠${prefix}pussy
╠${prefix}panties
╠${prefix}orgy
╠${prefix}ahegao
╠${prefix}ass
╠${prefix}bdsm
╠${prefix}blowjob
╠${prefix}cuckold
╠${prefix}ero
╠${prefix}gasm
╠${prefix}cum
╠${prefix}femdom
╠${prefix}foot
╠${prefix}gangbang
╠${prefix}glasses
╠${prefix}jahy
╠${prefix}trap
╠${prefix}blowjobgif
╠${prefix}spank
╠${prefix}hneko
╠${prefix}nwaifu
╠═══════✪「 FUN 」
╠ ${prefix}how [text
╠ ${prefix}when [text]
╠ ${prefix}where [text]
╠ ${prefix}is [text]
╠ ${prefix}what [text]
╠ ${prefix}can [text]
╠ ${prefix}rate [text]
╠ ${prefix}wangy [text]
╠ ${prefix}beautifulcheck [tag]
╠ ${prefix}awesomecheck [tag]
╠ ${prefix}prettycheck [tag]
╠ ${prefix}lesbiancheck [tag]
╠ ${prefix}gaycheck [tag]
╠ ${prefix}cutecheck [tag]
╠ ${prefix}uglycheck [tag]
╠ ${prefix}hornycheck [tag]
╠ ${prefix}charactercheck [tag]
╠ ${prefix}lovelycheck [tag]
╠ ${prefix}couple
╠ ${prefix}mysoulmate
╠ ${prefix}hot
╠ ${prefix}sexy
╠ ${prefix}kind
╠ ${prefix}idiot
╠ ${prefix}handsome
╠ ${prefix}beautiful
╠ ${prefix}cute
╠ ${prefix}pretty
╠ ${prefix}lesbian
╠ ${prefix}noob
╠ ${prefix}bastard
╠ ${prefix}foolish
╠ ${prefix}nerd
╠ ${prefix}asshole
╠ ${prefix}gay
╠ ${prefix}smart
╠ ${prefix}stubble
╠ ${prefix}dog
╠ ${prefix}horny
╠ ${prefix}cunt
╠ ${prefix}wibu
╠ ${prefix}noobra
╠ ${prefix}nibba
╠ ${prefix}nibbi
╠ ${prefix}comrade
╠ ${prefix}mumu
╠ ${prefix}rascal
╠ ${prefix}scumbag
╠ ${prefix}nuts
╠ ${prefix}fagot
╠ ${prefix}scoundrel
╠ ${prefix}ditch
╠ ${prefix}dope
╠ ${prefix}gucci
╠ ${prefix}lit
╠ ${prefix}dumbass
╠ ${prefix}crackhead
╠ ${prefix}mf
╠ ${prefix}motherfucker
╠ ${prefix}sucker
╠ ${prefix}fuckboy
╠ ${prefix}playboy
╠ ${prefix}fuckgirl
╠ ${prefix}playgirl
╠══════✪「 SOUND 」
╠ ${prefix}sound1
╠ ${prefix}sound2
╠ ${prefix}sound3
╠ ${prefix}sound4
╠ ${prefix}sound5
╠ ${prefix}sound6
╠ ${prefix}sound7
╠ ${prefix}sound8
╠ ${prefix}sound9
╠ ${prefix}sound10
╠ ${prefix}sound11
╠ ${prefix}sound12
╠ ${prefix}sound13
╠ ${prefix}sound14
╠ ${prefix}sound15
╠ ${prefix}sound16
╠ ${prefix}sound17
╠ ${prefix}sound18
╠ ${prefix}sound19
╠ ${prefix}sound20
╠ ${prefix}sound21
╠ ${prefix}sound22
╠ ${prefix}sound23
╠ ${prefix}sound24
╠ ${prefix}sound25
╠ ${prefix}sound26
╠ ${prefix}sound27
╠ ${prefix}sound28
╠ ${prefix}sound29
╠ ${prefix}sound30
╠ ${prefix}sound31
╠ ${prefix}sound32
╠ ${prefix}sound33
╠ ${prefix}sound34
╠ ${prefix}sound35
╠ ${prefix}sound36
╠ ${prefix}sound37
╠ ${prefix}sound38
╠ ${prefix}sound39
╠ ${prefix}sound40
╠ ${prefix}sound41
╠ ${prefix}sound42
╠ ${prefix}sound43
╠ ${prefix}sound44
╠ ${prefix}sound45
╠ ${prefix}sound46
╠ ${prefix}sound47
╠ ${prefix}sound48
╠ ${prefix}sound49
╠ ${prefix}sound50
╠ ${prefix}sound51
╠ ${prefix}sound52
╠ ${prefix}sound53
╠ ${prefix}sound54
╠ ${prefix}sound55
╠ ${prefix}sound56
╠ ${prefix}sound57
╠ ${prefix}sound58
╠ ${prefix}sound59
╠ ${prefix}sound60
╠ ${prefix}sound61
╠ ${prefix}sound62
╠ ${prefix}sound63
╠ ${prefix}sound64
╠ ${prefix}sound65
╠ ${prefix}sound66
╠ ${prefix}sound67
╠ ${prefix}sound68
╠ ${prefix}sound69
╠ ${prefix}sound70
╠ ${prefix}sound71
╠ ${prefix}sound72
╠ ${prefix}sound73
╠ ${prefix}sound74
╠ ${prefix}sound75
╠ ${prefix}sound76
╠ ${prefix}sound77
╠ ${prefix}sound78
╠ ${prefix}sound79
╠ ${prefix}sound80
╠ ${prefix}sound81
╠ ${prefix}sound82
╠ ${prefix}sound83
╠ ${prefix}sound84
╠ ${prefix}sound85
╠ ${prefix}sound86
╠ ${prefix}sound87
╠ ${prefix}sound88
╠ ${prefix}sound89
╠ ${prefix}sound90
╠ ${prefix}sound91
╠ ${prefix}sound92
╠ ${prefix}sound93
╠ ${prefix}sound94
╠ ${prefix}sound95
╠ ${prefix}sound96
╠ ${prefix}sound97
╠ ${prefix}sound98
╠ ${prefix}sound99
╠ ${prefix}sound100
╠ ${prefix}sound101
╠ ${prefix}sound102
╠ ${prefix}sound103
╠ ${prefix}sound104
╠ ${prefix}sound105
╠ ${prefix}sound106
╠ ${prefix}sound107
╠ ${prefix}sound108
╠ ${prefix}sound109
╠ ${prefix}sound110
╠ ${prefix}sound111
╠ ${prefix}sound112
╠ ${prefix}sound113
╠ ${prefix}sound114
╠ ${prefix}sound115
╠ ${prefix}sound116
╠ ${prefix}sound117
╠ ${prefix}sound118
╠ ${prefix}sound119
╠ ${prefix}sound120
╠ ${prefix}sound121
╠ ${prefix}sound122
╠ ${prefix}sound123
╠ ${prefix}sound124
╠ ${prefix}sound125
╠ ${prefix}sound126
╠ ${prefix}sound127
╠ ${prefix}sound128
╠ ${prefix}sound129
╠ ${prefix}sound130
╠ ${prefix}sound131
╠ ${prefix}sound132
╠ ${prefix}sound133
╠ ${prefix}sound134
╠ ${prefix}sound135
╠ ${prefix}sound136
╠ ${prefix}sound137
╠ ${prefix}sound138
╠ ${prefix}sound139
╠ ${prefix}sound140
╠ ${prefix}sound141
╠ ${prefix}sound142
╠ ${prefix}sound143
╠ ${prefix}sound144
╠ ${prefix}sound145
╠ ${prefix}sound146
╠ ${prefix}sound147
╠ ${prefix}sound148
╠ ${prefix}sound149
╠ ${prefix}sound150
╠ ${prefix}sound151
╠ ${prefix}sound152
╠ ${prefix}sound153
╠ ${prefix}sound154
╠ ${prefix}sound155
╠ ${prefix}sound156
╠ ${prefix}sound157
╠ ${prefix}sound158
╠ ${prefix}sound159
╠ ${prefix}sound160
╠ ${prefix}sound161
╠══════✪「 GAME 」
╠ ${prefix}truth
╠ ${prefix}dare
╠ ${prefix}tictactoe
╠ ${prefix}delttt
╠ ${prefix}guess [option]
╠ ${prefix}math [mode]
╠ ${prefix}suitpvp [tag]
╠══✪「 ANONYMOUS CHAT 」
╠${prefix}anonymous
╠${prefix}start
╠${prefix}next
╠${prefix}leave
╠══════✪「 TOOL 」
╠ ${prefix}translate [text]
╠ ${prefix}fliptext [text]
╠ ${prefix}toletter [number]
╠══════✪「 DATABASE 」
╠ ${prefix}setcmd
╠ ${prefix}listcmd
╠ ${prefix}delcmd
╠ ${prefix}lockcmd
╠ ${prefix}addmsg
╠ ${prefix}listmsg
╠ ${prefix}getmsg
╠ ${prefix}delmsg
╠══════✪「 lNDO 」
╠ ${prefix}darkjoke
╠ ${prefix}quotes
╠ ${prefix}animequotes
╠${prefix}jalantikus-meme
╠ ${prefix}merdeka-news 
╠ ${prefix}kontan-news 
╠ ${prefix}cnbc-news 
╠ ${prefix}tribun-news 
╠ ${prefix}indozone-news 
╠ ${prefix}kompas-news 
╠ ${prefix}detik-news 
╠ ${prefix}daily-news 
╠ ${prefix}inews-news 
╠ ${prefix}okezone-news 
╠ ${prefix}sindo-news 
╠ ${prefix}tempo-news 
╠ ${prefix}antara-news 
╠ ${prefix}cnn-news 
╠ ${prefix}fajar-news 
╠${prefix}cinemaschedule
╠${prefix}wiki
╠${prefix}covidindo
╠${prefix}earthquake
╠${prefix}tvschedule
╠══════✪「 INDO HSCOPE 」
╠${prefix}nomorhoki
╠${prefix}artimimpi 
╠${prefix}artinama 
╠${prefix}ramaljodoh 
╠${prefix}ramaljodohbali 
╠${prefix}suamiistri 
╠${prefix}ramalcinta 
╠${prefix}cocoknama 
╠${prefix}pasangan 
╠${prefix}jadiannikah 
╠${prefix}sifatusaha 
╠${prefix}rezeki 
╠${prefix}pekerjaan 
╠${prefix}nasib 
╠${prefix}penyakit 
╠${prefix}tarot 
╠${prefix}fengshui 
╠${prefix}haribaik 
╠${prefix}harisangar 
╠${prefix}harisial
╠${prefix}nagahari
╠${prefix}arahrezeki
╠${prefix}peruntungan 
╠${prefix}weton 
╠${prefix}karakter
╠${prefix}keberuntungan
╠${prefix}memancing
╠${prefix}masasubur
╠${prefix}zodiak
╠${prefix}shio
╠══════✪「 OTHER 」
╠ ${prefix}afk
╠ ${prefix}jadibot
╠ ${prefix}readmore [text]
╠ ${prefix}toviewonce
╠ ${prefix}chatinfo
╠ ${prefix}alive
╠ ${prefix}script
╠ ${prefix}speedtest
╠ ${prefix}ping
╠ ${prefix}owner
╠ ${prefix}menu
╠ ${prefix}delete
╠ ${prefix}chatinfo
╠ ${prefix}quoted
╠ ${prefix}listpc
╠ ${prefix}listgc
╠ ${prefix}donate
╠ ${prefix}request
╠ ${prefix}report [bug]
╚═════════════✪
`}

global.pubg = (prefix) => {
return `🅞 = Khusus Owner
🅖 = Khusus Group
🅕 = Free User
🅟 = Premium

┏━ꕥ〔 𝚃𝙾𝙿𝚄𝙿  𝙿𝚄𝙱𝙶 𝙼𝙾𝙱𝙸𝙻𝙴ıll 〕ꕥ━⬣
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
