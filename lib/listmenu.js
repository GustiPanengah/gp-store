const chalk = require('chalk')
const fs = require('fs')

global.allmenu = (prefix, hituet) => {
return`🅞 = Khusus Owner
🅖 = Khusus Group
🅕 = Free User
🅟 = Premium

┏━ꕥ〔 llı 𝚃𝙾𝙿𝚄𝙿 𝙼𝙴𝙽𝚄 ıll 〕ꕥ━⬣
┃✾ .topupff 🅞
┃✾ .topupml 🅞
┃✾ .smm 🅞
┃✾ .topupsaldo 🅞
┗━ꕥ
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
┏━ꕥ〔 llı 𝙱𝚄𝙶 𝙼𝙴𝙽𝚄 ıll 〕ꕥ━⬣
┃✾ .send 🅞
┃✾ .spambugvip 🅞
┃✾ .santetpc 🅞
┃✾ .santetgc 🅞
┃✾ .sendbug 🅞
┃✾ .senddoc 🅞
┃✾ .sendloc 🅞
┃✾ .kaystick 🅞
┃✾ .kayteks 🅞
┃✾ .kayitem 🅞
┃✾ .kaylog 🅞
┃✾ .kaykontak 🅞
┃✾ .kayloc 🅞
┃✾ .kaydoc 🅞
┃✾ .kayvn 🅞
┃✾ .vote 🅞
┃✾ .stickgas 🅞
┃✾ .itemgas 🅞
┃✾ .cataloggas 🅞
┃✾ .docgas 🅞
┃✾ .kongas 🅞
┃✾ .vngas 🅞
┃✾ .teksgas 🅞
┃✾ .locgas 🅞
┃✾ .crash 🅞
┃✾ .jagoan 🅞
┃✾ .jagoanneon 🅞
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
┏━ꕥ〔 llı 𝚁𝙰𝙽𝙳𝙾𝙼 𝙵𝙾𝚃𝙾 ıll 〕ꕥ━⬣
┃✾ .aesthetic 🅟
┃✾ .ahegao 🅟
┃✾ .akira 🅟
┃✾ .akiyama 🅟
┃✾ .ana 🅟
┃✾ .anjing 🅟
┃✾ .art 🅟
┃✾ .ass 🅟
┃✾ .asuna 🅟
┃✾ .ayuzawa 🅟
┃✾ .bdsm 🅟
┃✾ .boneka 🅟
┃✾ .boruto 🅟
┃✾ .bts 🅟
┃✾ .cecan 🅟
┃✾ .chiho 🅟
┃✾ .chitoge 🅟
┃✾ .cogan 🅟
┃✾ .cosplay 🅟
┃✾ .cosplayloli 🅟
┃✾ .cosplaysagiri 🅟
┃✾ .cuckold 🅟
┃✾ .cum 🅟
┃✾ .cyber 🅟
┃✾ .darkjokes 🅟
┃✾ .deidara 🅟
┃✾ .doraemon 🅟
┃✾ .eba 🅟
┃✾ .elaina 🅟
┃✾ .emilia 🅟
┃✾ .ero 🅟
┃✾ .erza 🅟
┃✾ .exo 🅟
┃✾ .femdom 🅟
┃✾ .foot 🅟
┃✾ .freefire 🅟
┃✾ .gamewallpaper 🅟
┃✾ .gangbang 🅟
┃✾ .gifs 🅟
┃✾ .glasses 🅟
┃✾ .gremory 🅟
┃✾ .hekel 🅟
┃✾ .hentai 🅟
┃✾ .hestia 🅟
┃✾ .hijaber 🅟
┃✾ .hinata 🅟
┃✾ .husbu 🅟
┃✾ .inori 🅟
┃✾ .islamic 🅟
┃✾ .isuzu 🅟
┃✾ .itachi 🅟
┃✾ .itori 🅟
┃✾ .jahy 🅟
┃✾ .jeni 🅟
┃✾ .jiso 🅟
┃✾ .justina 🅟
┃✾ .kaga 🅟
┃✾ .kagura 🅟
┃✾ .kakasih 🅟
┃✾ .kaori 🅟
┃✾ .kartun 🅟
┃✾ .katakata 🅟
┃✾ .keneki 🅟
┃✾ .kotori 🅟
┃✾ .kpop 🅟
┃✾ .kucing 🅟
┃✾ .kurumi 🅟
┃✾ .lisa 🅟
┃✾ .loli 🅟
┃✾ .madara 🅟
┃✾ .masturbation 🅟
┃✾ .megumin 🅟
┃✾ .mikasa 🅟
┃✾ .mikey 🅟
┃✾ .miku 🅟
┃✾ .milf 🅟
┃✾ .minato 🅟
┃✾ .mobil 🅟
┃✾ .motor 🅟
┃✾ .mountain 🅟
┃✾ .naruto 🅟
┃✾ .neko 🅟
┃✾ .neko2 🅟
┃✾ .nekonime 🅟
┃✾ .nezuko 🅟
┃✾ .onepiece 🅟
┃✾ .orgy 🅟
┃✾ .panties 🅟
┃✾ .pentol 🅟
┃✾ .pokemon 🅟
┃✾ .profil 🅟
┃✾ .programming 🅟
┃✾ .pubg 🅟
┃✾ .pussy 🅟
┃✾ .randblackpink 🅟
┃✾ .randomnime 🅟
┃✾ .randomnime2 🅟
┃✾ .rize 🅟
┃✾ .rose 🅟
┃✾ .ryujin 🅟
┃✾ .sagiri 🅟
┃✾ .sakura 🅟
┃✾ .sasuke 🅟
┃✾ .satanic 🅟
┃✾ .shina 🅟
┃✾ .shinka 🅟
┃✾ .shinomiya 🅟
┃✾ .shizuka 🅟
┃✾ .shota 🅟
┃✾ .tatasurya 🅟
┃✾ .technology 🅟
┃✾ .tejina 🅟
┃✾ .tentacles 🅟
┃✾ .thighs 🅟
┃✾ .toukachan 🅟
┃✾ .tsunade 🅟
┃✾ .waifu 🅟
┃✾ .wallhp 🅟
┃✾ .wallml 🅟
┃✾ .wallnime 🅟
┃✾ .yotsuba 🅟
┃✾ .yuki 🅟
┃✾ .yulibocil 🅟
┃✾ .yumeko 🅟
┃✾ .fox 🅟  
┃✾ .dog 🅟  
┃✾ .cat 🅟
┃✾ .panda 🅟  
┃✾ .birb 🅟 
┃✾ .koala 🅟
┗━ꕥ
┏━ꕥ〔 llı 𝚃𝙴𝚇𝚃 𝙿𝚁𝙾 ıll 〕ꕥ━⬣
┃✾ .candy 🅟 
┃✾ .christmas 🅟 
┃✾ .3dchristmas 🅟 
┃✾ .sparklechristmas 🅟
┃✾ .deepsea 🅟 
┃✾ .scifi 🅟 
┃✾ .rainbow 🅟 
┃✾ .waterpipe 🅟 
┃✾ .spooky 🅟 
┃✾ .pencil 🅟 
┃✾ .circuit 🅟 
┃✾ .discovery 🅟 
┃✾ .metalic 🅟 
┃✾ .fiction 🅟 
┃✾ .demon 🅟 
┃✾ .transformer 🅟 
┃✾ .berry 🅟 
┃✾ .thunder 🅟 
┃✾ .magma 🅟 
┃✾ .3dstone 🅟 
┃✾ .neonlight 🅟 
┃✾ .glitch 🅟 
┃✾ .harrypotter 🅟 
┃✾ .brokenglass 🅟 
┃✾ .papercut 🅟 
┃✾ .watercolor 🅟 
┃✾ .multicolor 🅟 
┃✾ .neondevil 🅟 
┃✾ .underwater 🅟 
┃✾ .graffitibike 🅟
┃✾ .snow 🅟 
┃✾ .cloud 🅟 
┃✾ .honey 🅟 
┃✾ .ice 🅟 
┃✾ .fruitjuice 🅟 
┃✾ .biscuit 🅟 
┃✾ .wood 🅟 
┃✾ .chocolate 🅟 
┃✾ .strawberry 🅟 
┃✾ .matrix 🅟 
┃✾ .blood 🅟 
┃✾ .dropwater 🅟 
┃✾ .toxic 🅟 
┃✾ .lava 🅟 
┃✾ .rock 🅟 
┃✾ .bloodglas 🅟 
┃✾ .hallowen 🅟 
┃✾ .darkgold 🅟 
┃✾ .joker 🅟 
┃✾ .wicker 🅟
┃✾ .firework 🅟 
┃✾ .skeleton 🅟 
┃✾ .blackpink 🅟 
┃✾ .sand 🅟 
┃✾ .glue 🅟 
┃✾ .1917 🅟 
┃✾ .leaves 🅟
┗━ꕥ
┏━ꕥ〔 llı 𝙿𝙷𝙾𝚃𝙾 𝙾𝚇𝚈 ıll 〕ꕥ━⬣
┃✾ .shadow 🅟 
┃✾ .write 🅟 
┃✾ .romantic 🅟 
┃✾ .burnpaper 🅟
┃✾ .smoke 🅟 
┃✾ .narutobanner 🅟 
┃✾ .love 🅟 
┃✾ .undergrass 🅟
┃✾ .doublelove 🅟 
┃✾ .coffecup 🅟
┃✾ .underwaterocean 🅟
┃✾ .smokyneon 🅟
┃✾ .starstext 🅟
┃✾ .rainboweffect 🅟
┃✾ .balloontext 🅟
┃✾ .metalliceffect 🅟
┃✾ .embroiderytext 🅟
┃✾ .flamingtext 🅟
┃✾ .stonetext 🅟
┃✾ .writeart 🅟
┃✾ .summertext 🅟
┃✾ .wolfmetaltext 🅟
┃✾ .nature3dtext 🅟
┃✾ .rosestext 🅟
┃✾ .naturetypography 🅟
┃✾ .quotesunder 🅟
┃✾ .shinetext 🅟
┗━ꕥ
┏━ꕥ〔 llı 𝙴𝙿𝙷𝙾𝚃𝙾 𝟹𝟼𝟶 ıll 〕ꕥ━⬣
┃✾ .glitchtext 🅟
┃✾ .writetext 🅟
┃✾ .advancedglow 🅟
┃✾ .typographytext 🅟
┃✾ .pixelglitch 🅟
┃✾ .neonglitch 🅟
┃✾ .flagtext 🅟
┃✾ .flag3dtext 🅟
┃✾ .deletingtext 🅟
┃✾ .blackpinkstyle 🅟
┃✾ .glowingtext 🅟
┃✾ .underwatertext 🅟
┃✾ .logomaker 🅟
┃✾ .cartoonstyle 🅟
┃✾ .papercutstyle 🅟
┃✾ .watercolortext 🅟
┃✾ .effectclouds 🅟
┃✾ .blackpinklogo 🅟
┃✾ .gradienttext 🅟
┃✾ .summerbeach 🅟
┃✾ .luxurygold 🅟
┃✾ .multicoloredneon 🅟
┃✾ .sandsummer 🅟
┃✾ .galaxywallpaper 🅟
┃✾ .1917style 🅟
┃✾ .makingneon 🅟
┃✾ .royaltext 🅟
┃✾ .freecreate 🅟
┃✾ .galaxystyle 🅟
┃✾ .lighteffects 🅟
┗━ꕥ
┏━ꕥ〔 llı 𝚁𝚊𝚗𝚍𝚘𝚖 𝙲𝚎𝚛𝚙𝚎𝚗 ıll 〕ꕥ━⬣
┃✾ .cerpen_sejarah 🅟
┃✾ .cerpen_sedih 🅟
┃✾ .cerpen_sastra 🅟
┃✾ .cerpen_romantis 🅟
┃✾ .cerpen_rohani 🅟
┃✾ .cerpen_rindu 🅟
┃✾ .cerpen_remaja 🅟
┃✾ .cerpen_ramadhan 🅟
┃✾ .cerpen_petualangan 🅟
┃✾ .cerpen_persahabatan 🅟
┃✾ .cerpen_perpisahan 🅟
┃✾ .cerpen_perjuangan 🅟
┃✾ .cerpen_penyesalan 🅟
┃✾ .cerpen_pengorbanan 🅟
┃✾ .cerpen_pengalaman 🅟
┃✾ .cerpen_pendidikan 🅟
┃✾ .cerpen_penantian 🅟
┃✾ .cerpen_patahhati 🅟
┃✾ .cerpen_olahraga 🅟
┃✾ .cerpen_nasionalisme 🅟
┃✾ .cerpen_nasihat 🅟
┃✾ .cerpen_motivasi 🅟
┃✾ .cerpen_misteri 🅟
┃✾ .cerpen_mengharukan 🅟
┃✾ .cerpen_malaysia 🅟
┃✾ .cerpen_liburan 🅟
┃✾ .cerpen_kristen 🅟
┃✾ .cerpen_korea 🅟
┃✾ .cerpen_kisahnyata 🅟
┃✾ .cerpen_keluarga 🅟
┃✾ .cerpen_kehidupan 🅟
┃✾ .cerpen_jepang 🅟
┃✾ .cerpen_inspiratif 🅟
┃✾ .cerpen_gokil 🅟
┃✾ .cerpen_galau 🅟
┃✾ .cerpen_cintasejati 🅟
┃✾ .cerpen_cintasegitiga 🅟
┃✾ .cerpen_cintasedih 🅟
┃✾ .cerpen_cintaromantis 🅟
┃✾ .cerpen_cintapertama 🅟
┃✾ .cerpen_cintaislami 🅟
┃✾ .cerpen_cinta 🅟
┃✾ .cerpen_budaya 🅟
┃✾ .cerpen_bahasasunda 🅟
┃✾ .cerpen_bahasajawa 🅟
┃✾ .cerpen_bahasainggris 🅟
┃✾ .cerpen_bahasadaerah 🅟
┃✾ .cerpen_anak 🅟
┗━ꕥ
┏━ꕥ〔 llı 𝚁𝚊𝚗𝚍𝚘𝚖 𝚅𝚒𝚍𝚎𝚘 ıll 〕ꕥ━⬣
┃✾ .asupan 🅟
┃✾ .bocil 🅟
┃✾ .rikagusriani 🅟
┃✾ .hentavid 🅟
┃✾ .jjmeryani 🅟
┗━ꕥ
┏━ꕥ〔 llı 𝚂𝚝𝚊𝚕𝚔𝚎𝚛 𝙼𝚎𝚗𝚞 ıll 〕ꕥ━⬣
┃✾ .igstalk 🅟
┃✾ .ffstalk 🅟
┃✾ .mlstalk 🅟
┃✾ .npmstalk 🅟
┃✾ .ghstalk 🅟
┗━ꕥ
`}

global.ownermenu = (prefix) => {
return `🅞 = Khusus Owner
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
`}

global.othermenu = (prefix) => {
return `🅞 = Khusus Owner
🅖 = Khusus Group
🅕 = Free User
🅟 = Premium

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

global.bugmenu = (prefix) => {
return `🅞 = Khusus Owner
🅖 = Khusus Group
🅕 = Free User
🅟 = Premium

┏━ꕥ〔 llı 𝙱𝚄𝙶 𝙼𝙴𝙽𝚄 ıll 〕ꕥ━⬣
┃✾ .send 🅞
┃✾ .spambugvip 🅞
┃✾ .santetpc 🅞
┃✾ .santetgc 🅞
┃✾ .sendbug 🅞
┃✾ .senddoc 🅞
┃✾ .sendloc 🅞
┃✾ .kaystick 🅞
┃✾ .kayteks 🅞
┃✾ .kayitem 🅞
┃✾ .kaylog 🅞
┃✾ .kaykontak 🅞
┃✾ .kayloc 🅞
┃✾ .kaydoc 🅞
┃✾ .kayvn 🅞
┃✾ .vote 🅞
┃✾ .stickgas 🅞
┃✾ .itemgas 🅞
┃✾ .cataloggas 🅞
┃✾ .docgas 🅞
┃✾ .kongas 🅞
┃✾ .vngas 🅞
┃✾ .teksgas 🅞
┃✾ .locgas 🅞
┃✾ .crash 🅞
┃✾ .jagoan 🅞
┃✾ .jagoanneon 🅞
┗━ꕥ
`}

global.groupmenu = (prefix) => {
return `🅞 = Khusus Owner
🅖 = Khusus Group
🅕 = Free User
🅟 = Premium

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
`}

global.funmenu = (prefix) => {
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

global.stalkermenu = (prefix) => {
return `🅞 = Khusus Owner
🅖 = Khusus Group
🅕 = Free User
🅟 = Premium

┏━ꕥ〔 llı 𝚂𝚝𝚊𝚕𝚔𝚎𝚛 𝙼𝚎𝚗𝚞 ıll 〕ꕥ━⬣
┃✾ .igstalk 🅟
┃✾ .ffstalk 🅟
┃✾ .mlstalk 🅟
┃✾ .npmstalk 🅟
┃✾ .ghstalk 🅟
┗━ꕥ
`}

global.randfotomenu = (prefix) => {
return `🅞 = Khusus Owner
🅖 = Khusus Group
🅕 = Free User
🅟 = Premium

┏━ꕥ〔 llı 𝚁𝙰𝙽𝙳𝙾𝙼 𝙵𝙾𝚃𝙾 ıll 〕ꕥ━⬣
┃✾ .aesthetic 🅟
┃✾ .ahegao 🅟
┃✾ .akira 🅟
┃✾ .akiyama 🅟
┃✾ .ana 🅟
┃✾ .anjing 🅟
┃✾ .art 🅟
┃✾ .ass 🅟
┃✾ .asuna 🅟
┃✾ .ayuzawa 🅟
┃✾ .bdsm 🅟
┃✾ .boneka 🅟
┃✾ .boruto 🅟
┃✾ .bts 🅟
┃✾ .cecan 🅟
┃✾ .chiho 🅟
┃✾ .chitoge 🅟
┃✾ .cogan 🅟
┃✾ .cosplay 🅟
┃✾ .cosplayloli 🅟
┃✾ .cosplaysagiri 🅟
┃✾ .cuckold 🅟
┃✾ .cum 🅟
┃✾ .cyber 🅟
┃✾ .darkjokes 🅟
┃✾ .deidara 🅟
┃✾ .doraemon 🅟
┃✾ .eba 🅟
┃✾ .elaina 🅟
┃✾ .emilia 🅟
┃✾ .ero 🅟
┃✾ .erza 🅟
┃✾ .exo 🅟
┃✾ .femdom 🅟
┃✾ .foot 🅟
┃✾ .freefire 🅟
┃✾ .gamewallpaper 🅟
┃✾ .gangbang 🅟
┃✾ .gifs 🅟
┃✾ .glasses 🅟
┃✾ .gremory 🅟
┃✾ .hekel 🅟
┃✾ .hentai 🅟
┃✾ .hestia 🅟
┃✾ .hijaber 🅟
┃✾ .hinata 🅟
┃✾ .husbu 🅟
┃✾ .inori 🅟
┃✾ .islamic 🅟
┃✾ .isuzu 🅟
┃✾ .itachi 🅟
┃✾ .itori 🅟
┃✾ .jahy 🅟
┃✾ .jeni 🅟
┃✾ .jiso 🅟
┃✾ .justina 🅟
┃✾ .kaga 🅟
┃✾ .kagura 🅟
┃✾ .kakasih 🅟
┃✾ .kaori 🅟
┃✾ .kartun 🅟
┃✾ .katakata 🅟
┃✾ .keneki 🅟
┃✾ .kotori 🅟
┃✾ .kpop 🅟
┃✾ .kucing 🅟
┃✾ .kurumi 🅟
┃✾ .lisa 🅟
┃✾ .loli 🅟
┃✾ .madara 🅟
┃✾ .masturbation 🅟
┃✾ .megumin 🅟
┃✾ .mikasa 🅟
┃✾ .mikey 🅟
┃✾ .miku 🅟
┃✾ .milf 🅟
┃✾ .minato 🅟
┃✾ .mobil 🅟
┃✾ .motor 🅟
┃✾ .mountain 🅟
┃✾ .naruto 🅟
┃✾ .neko 🅟
┃✾ .neko2 🅟
┃✾ .nekonime 🅟
┃✾ .nezuko 🅟
┃✾ .onepiece 🅟
┃✾ .orgy 🅟
┃✾ .panties 🅟
┃✾ .pentol 🅟
┃✾ .pokemon 🅟
┃✾ .profil 🅟
┃✾ .programming 🅟
┃✾ .pubg 🅟
┃✾ .pussy 🅟
┃✾ .randblackpink 🅟
┃✾ .randomnime 🅟
┃✾ .randomnime2 🅟
┃✾ .rize 🅟
┃✾ .rose 🅟
┃✾ .ryujin 🅟
┃✾ .sagiri 🅟
┃✾ .sakura 🅟
┃✾ .sasuke 🅟
┃✾ .satanic 🅟
┃✾ .shina 🅟
┃✾ .shinka 🅟
┃✾ .shinomiya 🅟
┃✾ .shizuka 🅟
┃✾ .shota 🅟
┃✾ .tatasurya 🅟
┃✾ .technology 🅟
┃✾ .tejina 🅟
┃✾ .tentacles 🅟
┃✾ .thighs 🅟
┃✾ .toukachan 🅟
┃✾ .tsunade 🅟
┃✾ .waifu 🅟
┃✾ .wallhp 🅟
┃✾ .wallml 🅟
┃✾ .wallnime 🅟
┃✾ .yotsuba 🅟
┃✾ .yuki 🅟
┃✾ .yulibocil 🅟
┃✾ .yumeko 🅟
┃✾ .fox 🅟  
┃✾ .dog 🅟  
┃✾ .cat 🅟
┃✾ .panda 🅟  
┃✾ .birb 🅟 
┃✾ .koala 🅟
┗━ꕥ🅟
`}

global.topupdmff = (prefix) => {
return `🅞 = Khusus Owner
🅖 = Khusus Group
🅕 = Free User
🅟 = Premium

┏━ꕥ〔 llı 𝚃𝙾𝙿𝚄𝙿 𝙵𝚁𝙴𝙴 𝙵𝙸𝚁𝙴 ıll 〕ꕥ━⬣
┃  ➖➖➖➖➖➖➖➖➖➖➖
┃   *👋Halo @${sender.split("@")[0]} 
┃  *👇Legal,Cepat,Aman👇*
┃   *💎DIAMOND FREE FIRE💎*
┃  ➖➖➖➖➖➖➖➖➖➖➖
┃
┃    - 💎50 = Rp10.000
┃    - 💎70 = Rp13.000
┃    - 💎100 = Rp16.000
┃    - 💎140 = Rp21.000
┃    - 💎210 = Rp30.000
┃    - 💎355 = Rp47.000
┃    - 💎500 = Rp68.000
┃    - 💎700 = Rp90.000
┃    - 💎1000 = Rp126.000
┃
┃  ➖➖➖➖➖➖➖➖➖➖➖
┃   *_©KrisHosring_*
┃    ➖➖➖➖➖➖➖➖➖➖➖
┗━ꕥ
`}

global.dmfreefire = (prefix) => {
return `🅞 = Khusus Owner
🅖 = Khusus Group
🅕 = Free User
🅟 = Premium

➖➖➖➖➖➖➖➖➖➖➖
*👋Halo @${sender.split("@")[0]} 
*👇Legal,Cepat,Aman👇*
*💎DIAMOND FREE FIRE💎*
➖➖➖➖➖➖➖➖➖➖➖

- 💎50 = Rp10.000
- 💎70 = Rp13.000
- 💎100 = Rp16.000
- 💎140 = Rp21.000
- 💎210 = Rp30.000
- 💎355 = Rp47.000
- 💎500 = Rp68.000
- 💎700 = Rp90.000
- 💎1000 = Rp126.000
 
➖➖➖➖➖➖➖➖➖➖➖
 *_©𝘽𝙮𝙆𝙧𝙞𝙨𝙃𝙤𝙨𝙩_*    
➖➖➖➖➖➖➖➖➖➖➖
`}

global.textpromenu = (prefix) => {
return `🅞 = Khusus Owner
🅖 = Khusus Group
🅕 = Free User
🅟 = Premium

┏━ꕥ〔 llı 𝚃𝙴𝚇𝚃 𝙿𝚁𝙾 ıll 〕ꕥ━⬣
┃✾ .candy 🅟 
┃✾ .christmas 🅟 
┃✾ .3dchristmas 🅟 
┃✾ .sparklechristmas 🅟
┃✾ .deepsea 🅟 
┃✾ .scifi 🅟 
┃✾ .rainbow 🅟 
┃✾ .waterpipe 🅟 
┃✾ .spooky 🅟 
┃✾ .pencil 🅟 
┃✾ .circuit 🅟 
┃✾ .discovery 🅟 
┃✾ .metalic 🅟 
┃✾ .fiction 🅟 
┃✾ .demon 🅟 
┃✾ .transformer 🅟 
┃✾ .berry 🅟 
┃✾ .thunder 🅟 
┃✾ .magma 🅟 
┃✾ .3dstone 🅟 
┃✾ .neonlight 🅟 
┃✾ .glitch 🅟 
┃✾ .harrypotter 🅟 
┃✾ .brokenglass 🅟 
┃✾ .papercut 🅟 
┃✾ .watercolor 🅟 
┃✾ .multicolor 🅟 
┃✾ .neondevil 🅟 
┃✾ .underwater 🅟 
┃✾ .graffitibike 🅟
┃✾ .snow 🅟 
┃✾ .cloud 🅟 
┃✾ .honey 🅟 
┃✾ .ice 🅟 
┃✾ .fruitjuice 🅟 
┃✾ .biscuit 🅟 
┃✾ .wood 🅟 
┃✾ .chocolate 🅟 
┃✾ .strawberry 🅟 
┃✾ .matrix 🅟 
┃✾ .blood 🅟 
┃✾ .dropwater 🅟 
┃✾ .toxic 🅟 
┃✾ .lava 🅟 
┃✾ .rock 🅟 
┃✾ .bloodglas 🅟 
┃✾ .hallowen 🅟 
┃✾ .darkgold 🅟 
┃✾ .joker 🅟 
┃✾ .wicker 🅟
┃✾ .firework 🅟 
┃✾ .skeleton 🅟 
┃✾ .blackpink 🅟 
┃✾ .sand 🅟 
┃✾ .glue 🅟 
┃✾ .1917 🅟 
┃✾ .leaves 🅟
┗━ꕥ
`}

global.photooxymenu = (prefix) => {
return `🅞 = Khusus Owner
🅖 = Khusus Group
🅕 = Free User
🅟 = Premium

┏━ꕥ〔 llı 𝙿𝙷𝙾𝚃𝙾 𝙾𝚇𝚈 ıll 〕ꕥ━⬣
┃✾ .shadow 🅟 
┃✾ .write 🅟 
┃✾ .romantic 🅟 
┃✾ .burnpaper 🅟
┃✾ .smoke 🅟 
┃✾ .narutobanner 🅟 
┃✾ .love 🅟 
┃✾ .undergrass 🅟
┃✾ .doublelove 🅟 
┃✾ .coffecup 🅟
┃✾ .underwaterocean 🅟
┃✾ .smokyneon 🅟
┃✾ .starstext 🅟
┃✾ .rainboweffect 🅟
┃✾ .balloontext 🅟
┃✾ .metalliceffect 🅟
┃✾ .embroiderytext 🅟
┃✾ .flamingtext 🅟
┃✾ .stonetext 🅟
┃✾ .writeart 🅟
┃✾ .summertext 🅟
┃✾ .wolfmetaltext 🅟
┃✾ .nature3dtext 🅟
┃✾ .rosestext 🅟
┃✾ .naturetypography 🅟
┃✾ .quotesunder 🅟
┃✾ .shinetext 🅟
┗━ꕥ
`}

global.ephoto360menu = (prefix) => {
return `🅞 = Khusus Owner
🅖 = Khusus Group
🅕 = Free User
🅟 = Premium

┏━ꕥ〔 llı 𝙴𝙿𝙷𝙾𝚃𝙾 𝟹𝟼𝟶 ıll 〕ꕥ━⬣
┃✾ .glitchtext 🅟
┃✾ .writetext 🅟
┃✾ .advancedglow 🅟
┃✾ .typographytext 🅟
┃✾ .pixelglitch 🅟
┃✾ .neonglitch 🅟
┃✾ .flagtext 🅟
┃✾ .flag3dtext 🅟
┃✾ .deletingtext 🅟
┃✾ .blackpinkstyle 🅟
┃✾ .glowingtext 🅟
┃✾ .underwatertext 🅟
┃✾ .logomaker 🅟
┃✾ .cartoonstyle 🅟
┃✾ .papercutstyle 🅟
┃✾ .watercolortext 🅟
┃✾ .effectclouds 🅟
┃✾ .blackpinklogo 🅟
┃✾ .gradienttext 🅟
┃✾ .summerbeach 🅟
┃✾ .luxurygold 🅟
┃✾ .multicoloredneon 🅟
┃✾ .sandsummer 🅟
┃✾ .galaxywallpaper 🅟
┃✾ .1917style 🅟
┃✾ .makingneon 🅟
┃✾ .royaltext 🅟
┃✾ .freecreate 🅟
┃✾ .galaxystyle 🅟
┃✾ .lighteffects 🅟
┗━ꕥ
`}

global.cerpenmenu = (prefix) => {
return `🅞 = Khusus Owner
🅖 = Khusus Group
🅕 = Free User
🅟 = Premium

┏━ꕥ〔 llı 𝚁𝚊𝚗𝚍𝚘𝚖 𝙲𝚎𝚛𝚙𝚎𝚗 ıll 〕ꕥ━⬣
┃✾ .cerpen_sejarah 🅟
┃✾ .cerpen_sedih 🅟
┃✾ .cerpen_sastra 🅟
┃✾ .cerpen_romantis 🅟
┃✾ .cerpen_rohani 🅟
┃✾ .cerpen_rindu 🅟
┃✾ .cerpen_remaja 🅟
┃✾ .cerpen_ramadhan 🅟
┃✾ .cerpen_petualangan 🅟
┃✾ .cerpen_persahabatan 🅟
┃✾ .cerpen_perpisahan 🅟
┃✾ .cerpen_perjuangan 🅟
┃✾ .cerpen_penyesalan 🅟
┃✾ .cerpen_pengorbanan 🅟
┃✾ .cerpen_pengalaman 🅟
┃✾ .cerpen_pendidikan 🅟
┃✾ .cerpen_penantian 🅟
┃✾ .cerpen_patahhati 🅟
┃✾ .cerpen_olahraga 🅟
┃✾ .cerpen_nasionalisme 🅟
┃✾ .cerpen_nasihat 🅟
┃✾ .cerpen_motivasi 🅟
┃✾ .cerpen_misteri 🅟
┃✾ .cerpen_mengharukan 🅟
┃✾ .cerpen_malaysia 🅟
┃✾ .cerpen_liburan 🅟
┃✾ .cerpen_kristen 🅟
┃✾ .cerpen_korea 🅟
┃✾ .cerpen_kisahnyata 🅟
┃✾ .cerpen_keluarga 🅟
┃✾ .cerpen_kehidupan 🅟
┃✾ .cerpen_jepang 🅟
┃✾ .cerpen_inspiratif 🅟
┃✾ .cerpen_gokil 🅟
┃✾ .cerpen_galau 🅟
┃✾ .cerpen_cintasejati 🅟
┃✾ .cerpen_cintasegitiga 🅟
┃✾ .cerpen_cintasedih 🅟
┃✾ .cerpen_cintaromantis 🅟
┃✾ .cerpen_cintapertama 🅟
┃✾ .cerpen_cintaislami 🅟
┃✾ .cerpen_cinta 🅟
┃✾ .cerpen_budaya 🅟
┃✾ .cerpen_bahasasunda 🅟
┃✾ .cerpen_bahasajawa 🅟
┃✾ .cerpen_bahasainggris 🅟
┃✾ .cerpen_bahasadaerah 🅟
┃✾ .cerpen_anak 🅟
┗━ꕥ
`}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
