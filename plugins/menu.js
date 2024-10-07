const fs = require("fs")
const { smsg, getGroupAdmins, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, delay, format, logic, generateProfilePicture, parseMention, getRandom} = require('../libs/fuctions.js'); 
const path = require("path") 
const chalk = require("chalk");
const moment = require('moment-timezone') 
const gradient = require('gradient-string') 
const fetch = require('node-fetch') 
const axios = require('axios')
const cheerio = require('cheerio')
const Jimp = require('jimp')
const os = require('os')
let usuario = global.db.data.users[m.sender]

const menu = (m, command, conn, prefix, pushname, sender, pickRandom, fkontak) => {
//if (global.db.data.users[m.sender].registered < true) return m.reply(info.registra)
if (global.db.data.users[m.sender].banned) return 
let user = global.db.data.users[m.sender]
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
const date = moment.tz('America/Managua').format('DD/MM/YYYY')
const time = moment.tz('America/Argentina/Buenos_Aires').format('LT')
let wa = m.key.id.length > 21 ? 'Android' : m.key.id.substring(0, 2) == '3A' ? 'IOS' : 'whatsapp web'

conn.fakeReply(m.chat, `*(●’◡’●)ﾉ𝑷𝒐𝒓 𝒇𝒂𝒗𝒐𝒓 𝒆𝒔𝒑𝒆𝒓𝒂 𝒖𝒏 𝒎𝒐𝒎𝒆𝒏𝒕𝒐 .*\n\n> 𝑵𝒐 𝒂𝒈𝒂𝒔 𝒔𝒑𝒂𝒎 𝒅𝒆 𝒄𝒐𝒎𝒂𝒏𝒅𝒐𝒔`, '0@s.whatsapp.net', '𝔼𝕟𝕧𝕚𝕒𝕟𝕕𝕠 𝕞𝕖𝕟𝕦')

let submenu = `
╭───────────────
│         𝑼𝒔𝒖𝒂𝒓𝒊𝒐
 ╔══ ❀•°❀°•❀ ══╗
 ˏˋ°•*⁀➷·͟͟͟͟͟͞͞͞͞✰ 𝐍𝐨𝐦𝐛𝐫𝐞: ${pushname} ${user.registered ? '✓' : ''}
 ══✿══╡°˖✧✿✧˖°╞══✿══
 ˏˋ°•*⁀➷ CANAL:https://whatsapp.com/channel/0029VaXDEwlC1FuFm82otA0K
 ╚══ ❀•°❀°•❀ ══╝
${pickRandom([`\`𝑩𝒊𝒆𝒏𝒗𝒆𝒏𝒖𝒅𝒐 𝒂𝒍 𝒏𝒖𝒆𝒗𝒐 𝒑𝒓𝒐𝒚𝒆𝒄𝒕𝒐 𝒅𝒆𝒍 𝒕𝒆𝒂𝒎 𝒏𝒂𝒌𝒂𝒏𝒐 𝐔𝐬𝐚 ${prefix}𝑴𝒆𝒏𝒖\``, `\`\`\n${yt}`, `\`\`\n\n${nna}`, `\`\`\n${md}\``])}`;

let descargar = `╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈⪩
┊┏━✿━━━━✿━━━━━━✿━━•
┊┃ *𝑫𝒆𝒔𝒄𝒂𝒓𝒈𝒂𝒔 𝑯𝒂𝒌𝒂𝒓𝒊*
┊┃━✿━━━━✿━━━━━━✿━━•
┊┃ ׁ⿴⃟ٍࣽ❖ ${prefix}𝑷𝒍𝒂𝒚 [𝑫𝒆𝒔𝒄𝒂𝒓𝒈𝒂 𝒖𝒏𝒂 𝒄𝒂𝒏𝒄𝒊𝒐𝒏]
┊┃ ׁ⿴⃟ٍࣽ❖ ${prefix}𝑷𝒍𝒂𝒚2 [𝑫𝒆𝒔𝒄𝒂𝒓𝒈𝒂 𝒖𝒏 𝒗𝒊𝒅𝒆𝒐]
┊┃ ׁ⿴⃟ٍࣽ❖ ${prefix}𝑷𝒍𝒂𝒚.1 [𝑫𝒆𝒔𝒄𝒂𝒓𝒈𝒂 𝒖𝒏𝒂 𝒄𝒂𝒏𝒄𝒊𝒐𝒏]
┊┃ ׁ⿴⃟ٍࣽ❖ ${prefix}𝑷𝒍𝒂𝒚.2 [𝑫𝒆𝒔𝒄𝒂𝒓𝒈𝒂 𝒖𝒏 𝒗𝒊𝒅𝒆𝒐]
┊┃ ׁ⿴⃟ٍࣽ❖ ${prefix}𝑴𝒖𝒔𝒊𝒄𝒂
┊┃ׁ ⿴⃟ٍࣽ❖ ${prefix}𝑽𝒊𝒅𝒆𝒐
┊┃ ׁ⿴⃟ٍࣽ❖ ${prefix}𝑷𝒍𝒂𝒚𝒅𝒐𝒄
┊┃ ׁ⿴⃟ٍࣽ❖ ${prefix}𝑷𝒍𝒂𝒚3 [𝑫𝒆𝒔𝒄𝒂𝒓𝒈𝒂 𝒖𝒏𝒂 𝒄𝒂𝒏𝒄𝒊𝒐𝒏 𝒆𝒏 𝒅𝒐𝒄]
┊┃ ׁ⿴⃟ٍࣽ❖ ${prefix}𝑷𝒍𝒂𝒚4 [𝑫𝒆𝒔𝒄𝒂𝒓𝒈𝒂 𝒖𝒏 𝒗𝒊𝒅𝒆𝒐 𝒆𝒏 𝒅𝒐𝒄]
┊┃ ׁ⿴⃟ٍࣽ❖ ${prefix}𝒀𝑻𝑺 [𝑩𝒖𝒔𝒄𝒂𝒅𝒐𝒓 𝒅𝒆 𝒚𝒐𝒖𝒕𝒖𝒃𝒆]
┊┃ ׁ⿴⃟ٍࣽ❖ ${prefix}𝒀𝑻𝑴𝑷3 [𝑳𝒊𝒏𝒌 𝒑𝒂𝒓𝒂 𝒅𝒆𝒔𝒄𝒂𝒓𝒈𝒂 𝒅𝒆 𝒂𝒖𝒅𝒊𝒐𝒔]
┊┃ ׁ⿴⃟ٍࣽ❖ ${prefix}𝒀𝑻𝑴𝑷4 [𝑳𝒊𝒏𝒌 𝒑𝒂𝒓𝒂 𝒅𝒆𝒔𝒄𝒂𝒓𝒈𝒂 𝒅𝒆 𝒗𝒊𝒅𝒆𝒐]
┊┃ ׁ⿴⃟ٍࣽ❖ ${prefix}𝑺𝒑𝒐𝒕𝒊𝒇𝒚
┊┃ ׁ⿴⃟ٍࣽ❖ ${prefix}𝑴𝒖𝒔𝒊𝒄 [𝑫𝒆𝒔𝒄𝒂𝒓𝒈𝒂 𝒎𝒖𝒔𝒊𝒄 𝒅𝒆 𝒔𝒑𝒐𝒕𝒊𝒇𝒚]
┊┃ ׁ⿴⃟ٍࣽ❖ ${prefix}𝑮𝒊𝒕𝒄𝒍𝒐𝒏𝒆
┊┃ ׁ⿴⃟ٍࣽ❖ ${prefix}𝑻𝒊𝒌𝑻𝒐𝒌
┊┃ ׁ⿴⃟ٍࣽ❖ ${prefix}𝑻𝑻𝒊𝒎𝒈
┊┃ ׁ⿴⃟ٍࣽ❖ ${prefix}𝑭𝒂𝒄𝒆𝒃𝒐𝒐𝒌
┊┃ ׁ⿴⃟ٍࣽ❖ ${prefix}𝑭𝑩 
┊┃ ׁ⿴⃟ٍࣽ❖ ${prefix}𝑰𝒏𝒔𝒕𝒂𝒈𝒓𝒂𝒎
┊┃ ׁ⿴⃟ٍࣽ❖ ${prefix}𝑰𝑮 
┊┃ ׁ⿴⃟ٍࣽ❖ ${prefix}𝑴𝒆𝒅𝒊𝒂𝒇𝒊𝒓𝒆 
┊┃ ׁ⿴⃟ٍࣽ❖ ${prefix}𝑻𝒘𝒊𝒕𝒕𝒆𝒓
┊┃ ׁ⿴⃟ٍࣽ❖ ${prefix}𝑿
┊┃ ׁ⿴⃟ٍࣽ❖ ${prefix}𝑮𝒅𝒓𝒊𝒗𝒆
┊┗━✿━━━━✿━━━━━━✿━━•━✿
╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈⪩`
let grupos = `╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈⪩
┊┏━━━━━━━━━━━━━━•
┊┃ *𝑴𝒆𝒏𝒖 𝒈𝒓𝒖𝒑𝒐𝒔*
┊┃━━━━━━━━━━━━━━•
┊┃𝑷𝒓𝒐𝒕𝒆𝒈𝒆 𝒕𝒖 𝒈𝒓𝒖𝒑𝒐 𝒄𝒐𝒏 𝑯𝒂𝒌𝒂𝒓𝒊
┊┃━━━━━━━━━━━━━━•
┊┃ ׁ⿴⃟ٍࣽ❖ ${prefix}𝑾𝒆𝒍𝒄𝒐𝒎𝒆 
┊┃ ׁ⿴⃟ٍࣽ❖ ${prefix}𝑨𝒏𝒕𝒊𝒍𝒊𝒏𝒌
┊┃ ׁ⿴⃟ٍࣽ❖ ${prefix}𝑨𝒏𝒕𝒊𝒆𝒏𝒍𝒂𝒄𝒆
┊┃ ׁ⿴⃟ٍࣽ❖ ${prefix}𝑨𝒏𝒕𝒊𝒇𝒂𝒌𝒆
┊┃ ׁ⿴⃟ٍࣽ❖ ${prefix}𝑨𝒏𝒕𝒊𝒂𝒓𝒂𝒃𝒆
┊┃ ׁ⿴⃟ٍࣽ❖ ${prefix}𝑨𝒏𝒕𝒊𝒕𝒐𝒙𝒊𝒄
┊┃ ׁ⿴⃟ٍࣽ❖ ${prefix}𝑨𝒏𝒕𝒊𝒍𝒊𝒏𝒌2
┊┃ ׁ⿴⃟ٍࣽ❖ ${prefix}𝑨𝒏𝒕𝒊𝑻𝒘𝒊𝒕𝒆𝒓
┊┃ ׁ⿴⃟ٍࣽ❖ ${prefix}𝑨𝒏𝒕𝒊𝑻𝒊𝒌𝑻𝒐𝒌
┊┃ ׁ⿴⃟ٍࣽ❖ ${prefix}𝑨𝒏𝒕𝒊𝑻𝒆𝒍𝒆𝒈𝒓𝒂𝒎
┊┃ ׁ⿴⃟ٍࣽ❖ ${prefix}𝑨𝒏𝒕𝒊𝒇𝒂𝒄𝒆𝒃𝒐𝒐𝒌
┊┃ ׁ⿴⃟ٍࣽ❖ ${prefix}𝑨𝒏𝒕𝒊𝑭𝑩
┊┃ ׁ⿴⃟ٍࣽ❖ ${prefix}𝑨𝒏𝒕𝒊𝑰𝑮
┊┃ ׁ⿴⃟ٍࣽ❖ ${prefix}𝑨𝒖𝒕𝒐𝒔𝒕𝒊𝒄𝒌𝒆𝒓
┊┃ ׁ⿴⃟ٍࣽ❖ ${prefix}𝑫𝒆𝒕𝒆𝒄𝒕
┊┃ ׁ⿴⃟ٍࣽ❖ ${prefix}𝑨𝒖𝒕𝒐𝒅𝒆𝒕𝒆𝒄𝒕
┊┃ ׁ⿴⃟ٍࣽ❖ ${prefix}𝑨𝒏𝒕𝒊𝑵𝑺𝑭𝑾
┊┃ ׁ⿴⃟ٍࣽ❖ ${prefix}𝑴𝒐𝒅𝒐𝒄𝒂𝒍𝒊𝒆𝒏𝒕𝒆
┊┃ ׁ⿴⃟ٍࣽ❖ ${prefix}𝑴𝒐𝒅𝒐𝒂𝒅𝒎𝒊𝒏
┊┃ ׁ⿴⃟ٍࣽ❖ ${prefix}𝑨𝒖𝒅𝒊𝒐𝒔
┊┃ ׁ⿴⃟ٍࣽ❖ ${prefix}𝑪𝒉𝒂𝒕𝒃𝒐𝒕
┊┃ ׁ⿴⃟ٍࣽ❖ ${prefix}𝑨𝒖𝒕𝒐𝒍𝒆𝒗𝒆𝒍𝒖𝒑
┊┃ ׁ⿴⃟ٍࣽ❖ ${prefix}𝑨𝒖𝒕𝒐𝒏𝒊𝒗𝒆𝒍
┊┃ ׁ⿴⃟ٍࣽ❖ ${prefix}𝑨𝒅𝒅𝒓𝒖𝒍𝒆𝒔
┊┃ ׁ⿴⃟ٍࣽ❖ ${prefix}𝑺𝒆𝒕𝒓𝒖𝒍𝒆𝒔
┊┃ ׁ⿴⃟ٍࣽ❖ ${prefix}𝑹𝒖𝒍𝒆𝒔
┊┃ ׁ⿴⃟ٍࣽ❖ ${prefix}𝑲𝒊𝒄𝒌 [@𝒕𝒂𝒈]
┊┃ ׁ⿴⃟ٍࣽ❖ ${prefix}𝑨𝒅𝒅 [@𝒕𝒂𝒈]
┊┃ ׁ⿴⃟ٍࣽ❖ ${prefix}𝑰𝒏𝒗𝒊𝒕𝒂 [@𝒕𝒂𝒈]
┊┃ ׁ⿴⃟ٍࣽ❖ ${prefix}𝑷𝒓𝒐𝒎𝒐𝒕𝒆
┊┃ ׁ⿴⃟ٍࣽ❖ ${prefix}𝑫𝒆𝒎𝒐𝒕𝒆
┊┃ ׁ⿴⃟ٍࣽ❖ ${prefix}𝑰𝒏𝒇𝒐𝒈𝒓𝒖𝒑𝒐
┊┃ ׁ⿴⃟ٍࣽ❖ ${prefix}𝑨𝒅𝒎𝒊𝒏
┊┃ ׁ⿴⃟ٍࣽ❖ ${prefix}𝑮𝒓𝒖𝒑𝒐 [𝒐𝒑𝒆𝒏/𝒄𝒍𝒐𝒔𝒆]
┊┃ ׁ⿴⃟ٍࣽ❖ ${prefix}𝑨𝒅𝒗𝒆𝒓𝒕𝒆𝒏𝒄𝒊𝒂 [@𝒕𝒂𝒈]
┊┃ ׁ⿴⃟ٍࣽ❖ ${prefix}𝑸𝒖𝒊𝒕𝒂𝒓𝒂𝒅𝒗𝒆𝒓𝒕𝒆𝒏𝒄𝒊𝒂
┊┃ ׁ⿴⃟ٍࣽ❖ ${prefix}𝑺𝒆𝒕𝒅𝒆𝒔𝒄 
┊┃ ׁ⿴⃟ٍࣽ❖ ${prefix}𝑺𝒆𝒕𝒑𝒑𝒈𝒓𝒐𝒖𝒑
┊┃ ׁ⿴⃟ٍࣽ❖ ${prefix}𝑨𝒏𝒖𝒍𝒂𝒓𝒍𝒊𝒏𝒌
┊┃ ׁ⿴⃟ٍࣽ❖ ${prefix}𝑹𝒆𝒔𝒆𝒕𝒍𝒊𝒏𝒌
┊┃ ׁ⿴⃟ٍࣽ❖ ${prefix}𝑯𝒊𝒅𝒆𝒕𝒂𝒈
┊┃ ׁ⿴⃟ٍࣽ❖ ${prefix}𝑻𝒂𝒈𝒂𝒍𝒍
┊┃ ׁ⿴⃟ٍࣽ❖ ${prefix}𝑰𝒏𝒗𝒐𝒄𝒂𝒓
┊┃ ׁ⿴⃟ٍࣽ❖ ${prefix}𝑳𝒊𝒔𝒕𝒐𝒏𝒍𝒊𝒏𝒆
┊┗━━━━━━━━━━━━━━•
╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈⪩`

let buscadores = `╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈⪩
┊┏━━━━━━━━━━━━━━•
┊┃ *𝑴𝒆𝒏𝒖 𝑩𝒖𝒔𝒒𝒖𝒆𝒅𝒂*
┊┃━━━━━━━━━━━━━━•
┊┃ ⋅⊰ꕤ ${prefix}𝑮𝒐𝒐𝒈𝒍𝒆
┊┃ ⋅⊰ꕤ ${prefix}𝑪𝒉𝒂𝒕𝒈𝒑𝒕
┊┃ ⋅⊰ꕤ ${prefix}𝑰𝑨
┊┃ ⋅⊰ꕤ ${prefix}𝑰𝒎𝒂𝒈𝒆𝒏
┊┃ ⋅⊰ꕤ ${prefix}𝑻𝒓𝒂𝒅𝒖𝒄𝒊𝒓
┊┃ ⋅⊰ꕤ ${prefix}𝑾𝒂𝒍𝒍𝒑𝒂𝒑𝒆𝒓
┊┃ ⋅⊰ꕤ ${prefix}𝑺𝑺
┊┃ ⋅⊰ꕤ ${prefix}𝑷𝒊𝒏𝒕𝒆𝒓𝒆𝒔𝒕
┊┃ ⋅⊰ꕤ ${prefix}𝑾𝒊𝒌𝒊𝒑𝒆𝒅𝒊𝒂
┊┃ ⋅⊰ꕤ ${prefix}𝑰𝑨2
┊┃ ⋅⊰ꕤ ${prefix}𝑯𝒐𝒓𝒂𝒓𝒊𝒐
┊┗━━━━━━━━━━━━━━•
╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈⪩`
let juegos = `╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈⪩
┊┏━━━━━━━━━━━━━━•
┊┃ *𝑱𝒖𝒆𝒈𝒂 𝒄𝒐𝒏 𝑯𝒂𝒌𝒂𝒓𝒊*
┊┃━━━━━━━━━━━━━━•
┊┃ ⋅⊰ꕤ ${prefix}𝑺𝒊𝒎𝒊
┊┃ ⋅⊰ꕤ ${prefix}𝑷𝑷𝑻
┊┃ ⋅⊰ꕤ ${prefix}𝑮𝒂𝒚 @𝒕𝒂𝒈
┊┃ ⋅⊰ꕤ ${prefix}𝑷𝒂𝒓𝒆𝒋𝒂 @𝒕𝒂𝒈
┊┃ ⋅⊰ꕤ ${prefix}𝑳𝒐𝒗𝒆 @𝑻𝒂𝒈
┊┃ ⋅⊰ꕤ ${prefix}𝑭𝒐𝒍𝒍𝒂𝒓 @𝒕𝒂𝒈
┊┃ ⋅⊰ꕤ ${prefix}𝑻𝒐𝒑𝒈𝒂𝒚𝒔
┊┃ ⋅⊰ꕤ ${prefix}𝑻𝒐𝒑𝒐𝒕𝒂𝒌𝒖𝒔
┊┃ ⋅⊰ꕤ ${prefix}𝑻𝒐𝒑
┊┃ ⋅⊰ꕤ ${prefix}𝑷𝒓𝒆𝒈𝒖𝒏𝒕𝒂
┊┃ ⋅⊰ꕤ ${prefix}𝑽𝒆𝒓𝒅𝒂𝒅
┊┃ ⋅⊰ꕤ ${prefix}𝑹𝒆𝒕𝒐
┊┃ ⋅⊰ꕤ ${prefix}𝑫𝒐𝒙𝒙𝒆𝒂𝒓
┊┃ ⋅⊰ꕤ ${prefix}𝑷𝒆𝒓𝒔𝒐𝒃𝒂𝒍𝒊𝒅𝒂𝒅
┊┃ ⋅⊰ꕤ ${prefix}𝑹𝒂𝒔𝒊𝒔𝒕𝒂
┊┃ ⋅⊰ꕤ ${prefix}𝑺𝒍𝒐𝒕
┊┃ ⋅⊰ꕤ ${prefix}𝑴𝒂𝒕𝒆𝒎𝒂𝒕𝒊𝒄𝒂𝒔
┊┃ ⋅⊰ꕤ ${prefix}𝑻𝑻𝑻
┊┃ ⋅⊰ꕤ ${prefix}𝑻𝑻𝑪
┊┃ ⋅⊰ꕤ ${prefix}𝑫𝒆𝒍𝒕𝒕𝒕
┊┃ ⋅⊰ꕤ ${prefix}𝑫𝒂𝒅𝒐
┊┃ ⋅⊰ꕤ ${prefix}𝑷𝒊𝒓𝒐𝒑𝒐
┊┃ ⋅⊰ꕤ ${prefix}𝑺𝒉𝒊𝒑
┊┃ ⋅⊰ꕤ ${prefix}𝑭𝒐𝒓𝒎𝒂𝒓𝒕𝒓𝒊𝒐
┊┃ ⋅⊰ꕤ ${prefix}𝑭𝒐𝒓𝒎𝒂𝒓𝒑𝒂𝒓𝒆𝒋𝒂
┊┃ ⋅⊰ꕤ ${prefix}𝑻𝑿𝑻
┊┃ ⋅⊰ꕤ ${prefix}𝑭𝒂𝒌𝒆
┊┗━━━━━━━━━━━━━━•
╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈⪩`
let efecto = `╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈⪩
┊┏━━━━━━━━━━━━━━•
┊┃ *𝑬𝒇𝒆𝒄𝒕𝒐𝒔 𝒅𝒆 𝒂𝒖𝒅𝒊𝒐𝒔*
┊┃━━━━━━━━━━━━━━•
┊┃ *𝑹𝒆𝒂𝒑𝒐𝒏𝒅𝒆 𝒂 𝒖𝒏 𝒂𝒖𝒅𝒊𝒐 𝒐 𝒏𝒐𝒕𝒂 𝒅𝒆 𝒗𝒐𝒛*
┊┃━━━━━━━━━━━━━━•
┊┃ ❏ ${prefix}𝑩𝒂𝒔𝒔
┊┃ ❏ ${prefix}𝑩𝒍𝒐𝒘𝒎
┊┃ ❏ ${prefix}𝑫𝒆𝒆𝒑
┊┃ ❏ ${prefix}𝑬𝒂𝒓𝒓𝒂𝒑𝒆
┊┃ ❏ ${prefix}𝑭𝒂𝒔𝒕
┊┃ ❏ ${prefix}𝑭𝒂𝒕
┊┃ ❏ ${prefix}𝑹𝒆𝒃𝒆𝒓𝒔𝒆
┊┃ ❏ ${prefix}𝑹𝒐𝒃𝒐𝒕
┊┃ ❏ ${prefix}𝑺𝒍𝒐𝒘
┊┃ ❏ ${prefix}𝑺𝒎𝒐𝒐𝒕𝒉
┊┃ ❏ ${prefix}𝑺𝒒𝒖𝒊𝒓𝒓𝒆𝒍
┊┗━━━━━━━━━━━━━━•
╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈⪩`
let convertidores = `╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈⪩
┊┏━━━━━━━━━━━━━━•
┊┃ *𝑪𝒐𝒎𝒃𝒆𝒓𝒕𝒊𝒅𝒐𝒓𝒆𝒔*
┊┃━━━━━━━━━━━━━━•
┊┃ ❏ ${prefix}𝑻𝒐𝒖𝒓𝒍
┊┃ ❏ ${prefix}𝑻𝑻𝑺
┊┃ ❏ ${prefix}𝑻𝒐𝒎𝒑3
┊┃ ❏ ${prefix}𝑻𝒐𝒊𝒎𝒈
┊┃ ❏ ${prefix}𝑻𝒐𝒂𝒖𝒅𝒊𝒐𝒔
┊┃ ❏ ${prefix}𝑻𝒐𝒂𝒏𝒊𝒎𝒆
┊┃ ❏ ${prefix}𝑯𝑫
┊┃ ❏ ${prefix}𝑳𝒐𝒈𝒐𝒔
┊┗━━━━━━━━━━━━━━•
╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈⪩`
let menu18 = `╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈⪩
┊┏━━━━━━━━━━━━━━•
┊┃ *𝑴𝒆𝒏𝒖 𝑵𝑺𝑭𝑾*
┊┃━━━━━━━━━━━━━━•
┊┃ 𝑴𝒆𝒏𝒖 𝒅𝒆 𝒉𝒂𝒌𝒂𝒓𝒊
┊┃━━━━━━━━━━━━━━•
┊┃ ❏ ${prefix}𝑷𝒖𝒔𝒔𝒚
┊┃ ❏ ${prefix}𝑵𝑺𝑭𝑾𝒍𝒐𝒍𝒊
┊┃ ❏ ${prefix}𝑯𝒆𝒏𝒕𝒂𝒊
┊┃ ❏ ${prefix}𝑯𝒆𝒏𝒕𝒂𝒊2
┊┃ ❏ ${prefix}𝑷𝒂𝒄𝒌
┊┃ ❏ ${prefix}𝑷𝒂𝒄𝒌2
┊┃ ❏ ${prefix}𝑷𝒂𝒄𝒌3
┊┃ ❏ ${prefix}𝑪𝒉𝒊𝒏𝒂
┊┃ ❏ ${prefix}𝑽𝒊𝒅𝒆𝒐𝒙𝒙𝒙
┊┃ ❏ ${prefix}𝑽𝒊𝒅𝒆𝒐𝒙𝒙𝒙𝒍𝒆𝒔𝒃𝒊
┊┃ ❏ ${prefix}𝑷𝒐𝒓𝒏𝒐
┊┃ ❏ ${prefix}𝑳𝒆𝒘𝒅
┊┃ ❏ ${prefix}𝑭𝒆𝒆𝒅
┊┃ ❏ ${prefix}𝑮𝒂𝒔𝒎
┊┃ ❏ ${prefix}𝑨𝒏𝒂𝒍
┊┃ ❏ ${prefix}𝑯𝒐𝒍𝒐
┊┃ ❏ ${prefix}𝑻𝒊𝒕𝒔
┊┃ ❏ ${prefix}𝑲𝒖𝒏𝒊
┊┃ ❏ ${prefix}𝑲𝒊𝒔𝒔
┊┃ ❏ ${prefix}𝑬𝒓𝒐𝒌
┊┃ ❏ ${prefix}𝑺𝒎𝒖𝒈
┊┃ ❏ ${prefix}𝑺𝒐𝒍𝒐𝒈
┊┃ ❏ ${prefix}𝑭𝒆𝒆𝒕𝒈
┊┃ ❏ ${prefix}𝑳𝒆𝒘𝒅𝒌
┊┃ ❏ ${prefix}𝑭𝒆𝒎𝒅𝒐𝒏
┊┃ ❏ ${prefix}𝑪𝒖𝒅𝒅𝒍𝒆
┊┃ ❏ ${prefix}𝑬𝒓𝒐𝒚𝒖𝒓𝒊
┊┃ ❏ ${prefix}𝑪𝒖𝒎
┊┃ ❏ ${prefix}𝑩𝒍𝒐𝒘𝒋𝒐𝒃
┊┃ ❏ ${prefix}𝑯𝒐𝒍𝒐𝒆𝒓𝒐
┊┃ ❏ ${prefix}𝑬𝒓𝒐𝒌𝒆𝒎𝒐
┊┃ ❏ ${prefix}𝑭𝒐𝒙_𝒈𝒊𝒓𝒍
┊┗━━━━━━━━━━━━━━•
╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈⪩`
let menurandow = `╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈⪩
┊┏━━━━━━━━━━━━━━•
┊┃ *𝑴𝒆𝒏𝒖 𝒗𝒂𝒓𝒊𝒂𝒅*
┊┃━━━━━━━━━━━━━━•
┊┃ ❏ ${prefix}𝑴𝒆𝒎𝒆𝒔
┊┃ ❏ ${prefix}𝑯𝒐𝒓𝒏𝒚
┊┃ ❏ ${prefix}𝑺𝒊𝒎𝒑
┊┃ ❏ ${prefix}𝑳𝒐𝒍𝒊𝒄𝒆
┊┃ ❏ ${prefix}𝑪𝒐𝒎𝒆𝒏𝒕𝒂𝒓
┊┃ ❏ ${prefix}𝑳𝒐𝒍𝒊
┊┃ ❏ ${prefix}𝑳𝒐𝒍𝒊𝒗𝒊𝒅
┊┃ ❏ ${prefix}𝑵𝒆𝒌𝒐
┊┃ ❏ ${prefix}𝑾𝒂𝒊𝒇𝒖
┊┃ ❏ ${prefix}𝑵𝒂𝒗𝒊𝒅𝒂𝒅
┊┃ ❏ ${prefix}𝑨𝒌𝒊𝒓𝒂
┊┃ ❏ ${prefix}𝑨𝒌𝒊𝒚𝒂𝒎𝒂
┊┃ ❏ ${prefix}𝑪𝒉𝒊𝒏𝒂
┊┃ ❏ ${prefix}𝑨𝒏𝒏𝒂
┊┃ ❏ ${prefix}𝑨𝒔𝒖𝒏𝒂
┊┃ ❏ ${prefix}𝑨𝒚𝒖𝒛𝒂𝒘𝒂
┊┃ ❏ ${prefix}𝑩𝒐𝒓𝒖𝒕𝒐
┊┃ ❏ ${prefix}𝑪𝒉𝒊𝒉𝒐
┊┃ ❏ ${prefix}𝑪𝒉𝒊𝒕𝒐𝒈𝒆
┊┃ ❏ ${prefix}𝑫𝒆𝒊𝒅𝒂𝒓𝒂
┊┃ ❏ ${prefix}𝑬𝒓𝒛𝒂
┊┃ ❏ ${prefix}𝑬𝒍𝒂𝒊𝒏𝒂
┊┃ ❏ ${prefix}𝑬𝒃𝒂
┊┃ ❏ ${prefix}𝑬𝒎𝒊𝒍𝒊𝒂
┊┃ ❏ ${prefix}𝑯𝒆𝒔𝒕𝒊𝒂
┊┃ ❏ ${prefix}𝑯𝒊𝒏𝒂𝒕𝒂
┊┃ ❏ ${prefix}𝑰𝒏𝒐𝒓𝒊
┊┃ ❏ ${prefix}𝑰𝒛𝒖𝒛𝒖
┊┃ ❏ ${prefix}𝑰𝒕𝒂𝒄𝒉𝒊
┊┃ ❏ ${prefix}𝑰𝒕𝒐𝒓𝒊
┊┃ ❏ ${prefix}𝑲𝒂𝒈𝒂
┊┃ ❏ ${prefix}𝑲𝒂𝒈𝒖𝒓𝒂
┊┃ ❏ ${prefix}𝑲𝒂𝒐𝒓𝒊
┊┃ ❏ ${prefix}𝑲𝒂𝒏𝒆𝒌𝒊
┊┃ ❏ ${prefix}𝑲𝒐𝒕𝒐𝒓𝒊
┊┃ ❏ ${prefix}𝑲𝒖𝒓𝒖𝒎𝒊
┊┃ ❏ ${prefix}𝑴𝒂𝒅𝒂𝒓𝒂
┊┃ ❏ ${prefix}𝑴𝒊𝒌𝒂𝒔𝒂
┊┃ ❏ ${prefix}𝑴𝒊𝒌𝒖
┊┃ ❏ ${prefix}𝑴𝒊𝒏𝒂𝒕𝒐
┊┃ ❏ ${prefix}𝑵𝒂𝒓𝒖𝒕𝒐
┊┃ ❏ ${prefix}𝑵𝒆𝒛𝒖𝒌𝒐
┊┃ ❏ ${prefix}𝑺𝒂𝒈𝒊𝒓𝒊
┊┃ ❏ ${prefix}𝑺𝒂𝒔𝒖𝒌𝒆
┊┃ ❏ ${prefix}𝑺𝒂𝒌𝒖𝒓𝒂
┊┃ ❏ ${prefix}𝑪𝒐𝒔𝒑𝒍𝒂𝒚
┊┃ ❏ ${prefix}𝑨𝒍𝒈𝒖𝒊𝒆𝒏
┊┃ ❏ ${prefix}𝑵𝒂𝒕𝒖𝒓𝒍𝒆𝒛𝒂
┊┃ ❏ ${prefix}𝑪𝒐𝒄𝒐
┊┃ ❏ ${prefix}𝑹𝒊𝒆
┊┗━━━━━━━━━━━━━━•
╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈⪩`

let menu0 = `𝐇𝐨𝐥𝐚 ${pushname}
𝑪𝒐𝒎𝒐 𝒆𝒔𝒕𝒂𝒔 𝒆𝒍 𝒅𝒊𝒂 𝒅𝒆 𝒉𝒐𝒚, 𝒚𝒐 𝒔𝒐𝒚 *𝑯𝒂𝒌𝒂𝒓𝒊-𝑩𝒐𝒕*
> 𝑷𝒐𝒓 𝒇𝒂𝒗𝒐𝒓 𝒔𝒆𝒍𝒆𝒄𝒄𝒊𝒐𝒏𝒂 𝒖𝒏 𝒃𝒐𝒕𝒐𝒕𝒏\n\n\n${pushname}.${nunber}`;


let menuRPG = `╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈⪩
┊┏━━━━━━━━━━━━━━•
┊┃ *𝑬𝒄𝒐𝒏𝒐𝒎𝒊𝒂*
┊┃━━━━━━━━━━━━━━•
┊┃ ❏ ${prefix}𝑴𝒊𝒏𝒂𝒓
┊┃ ❏ ${prefix}𝑹𝒐𝒃𝒂𝒓
┊┃ ❏ ${prefix}𝑹𝒐𝒃
┊┃ ❏ ${prefix}𝑪𝒓𝒊𝒎𝒆
┊┃ ❏ ${prefix}𝑻𝒓𝒂𝒃𝒂𝒋𝒂𝒓
┊┃ ❏ ${prefix}𝑾𝒐𝒓𝒌
┊┃ ❏ ${prefix}𝑩𝒖𝒚
┊┃ ❏ ${prefix}𝑩𝒂𝒍
┊┃ ❏ ${prefix}𝑩𝒂𝒍𝒂𝒏𝒄𝒆
┊┃ ❏ ${prefix}𝑪𝒍𝒂𝒊𝒎
┊┃ ❏ ${prefix}𝑳𝑩
┊┃ ❏ ${prefix}𝑪𝒐𝒇𝒓𝒆
┊┃ ❏ ${prefix}𝑷𝒆𝒓𝒇𝒊𝒍
┊┃ ❏ ${prefix}𝑵𝒊𝒗𝒆𝒍
┊┃ ❏ ${prefix}𝑫𝒆𝒑
┊┃ ❏ ${prefix}𝑫𝒆𝒑𝒐𝒔𝒊𝒕𝒂𝒓
┊┃ ❏ ${prefix}𝑹𝒆𝒕𝒊𝒓𝒂𝒓
┊┃ ❏ ${prefix}𝑻𝒐𝒓𝒆𝒎𝒐𝒗𝒆
┊┃ ❏ ${prefix}𝑳𝒆𝒗𝒆𝒍𝒖𝒑
┊┃ ❏ ${prefix}𝒕𝒓𝒂𝒏𝒔𝒇𝒆𝒓𝒊𝒓
┊┃ ❏ ${prefix}𝑻𝒓𝒂𝒏𝒔𝒇𝒆𝒓
┊┃ ❏ ${prefix}𝑨𝑭𝑲
┊┗━━━━━━━━━━━━━━•
╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈⪩`
let menuSticker= `╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈⪩
┊┏━━━━━━━━━━━━━━•
┊┃ *𝑺𝒕𝒊𝒄𝒌𝒆𝒓𝒔*
┊┃━━━━━━━━━━━━━━•
┊┃ ❏ ${prefix}𝑺
┊┃ ❏ ${prefix}𝑾𝑴
┊┃ ❏ ${prefix}𝑨𝒕𝒕𝒑
┊┃ ❏ ${prefix}𝑸𝑪
┊┃ ❏ ${prefix}𝑬𝒎𝒐𝒈𝒊𝒎𝒊𝒙
┊┗━━━━━━━━━━━━━━•
╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈⪩`
let menuOwner = `╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈⪩
┊┏━━━━━━━━━━━━━━•
┊┃ *𝑶𝒘𝒏𝒆𝒓*
┊┃━━━━━━━━━━━━
┊┃ ❏ ${prefix}𝙰𝚗𝚝𝚒𝚌𝚊𝚕𝚕
┊┃ ❏ ${prefix}𝙰𝚗𝚝𝚒𝚕𝚕𝚊𝚖𝚊𝚍𝚊
┊┃ ❏ ${prefix}𝙰𝚗𝚝𝚒𝚙𝚛𝚒𝚟
┊┃ ❏ ${prefix}𝙰𝚞𝚝𝚘𝚛𝚎𝚊𝚍
┊┃ ❏ ${prefix}𝙼𝚘𝚍𝚘𝚓𝚊𝚍𝚒𝚋𝚘𝚝
┊┃ ❏ ${prefix}𝙰𝚗̃𝚊𝚍𝚒𝚛𝚍𝚒𝚊𝚖𝚊𝚗𝚝𝚎𝚜
┊┃ ❏ ${prefix}𝙰𝚍𝚍𝚕𝚒𝚖𝚒𝚝
┊┃ ❏ ${prefix}𝙳𝚊𝚛𝚍𝚒𝚊𝚖𝚊𝚗𝚝𝚎𝚜
┊┃ ❏ ${prefix}𝙰𝚍𝚍𝚎𝚡𝚙
┊┃ ❏ ${prefix}𝙱𝚊𝚗𝚞𝚜𝚎𝚛
┊┃ ❏ ${prefix}𝚄𝚗𝚋𝚊𝚗𝚞𝚎𝚛
┊┃ ❏ ${prefix}𝙰𝚞𝚝𝚘𝚊𝚍𝚖𝚒𝚗
┊┃ ❏ ${prefix}𝙽𝚞𝚎𝚟𝚘𝚗𝚘𝚖𝚋𝚛𝚎
┊┃ ❏ ${prefix}𝙱𝚘𝚝𝚗𝚊𝚖𝚎 
┊┃ ❏ ${prefix}𝙽𝚞𝚎𝚟𝚊𝚏𝚘𝚝𝚘
┊┃ ❏ ${prefix}𝙵𝚘𝚝𝚘𝚋𝚘𝚝
┊┃ ❏ ${prefix}𝙱𝙲
┊┃ ❏ ${prefix}𝙱𝚌𝚐𝚌
┊┃ ❏ ${prefix}𝚙𝚞𝚋𝚕𝚒𝚌𝚘
┊┃ ❏ ${prefix}𝙿𝚛𝚒𝚟𝚊𝚍𝚘
┊┃ ❏ ${prefix}𝙶𝚎𝚝𝚌𝚊𝚜𝚎
┊┃ ❏ ${prefix}𝙵𝚎𝚝𝚌𝚑
┊┃ ❏ ${prefix}𝚄𝚙𝚍𝚊𝚝𝚎
┊┃ ❏ ${prefix}𝚁𝚎𝚜𝚝𝚊𝚛𝚝
┊┃ ❏ ${prefix}𝚁𝚛𝚒𝚗𝚒𝚌𝚒𝚊𝚛
┊┃ ❏ $ 
┊┃ ❏ >
┊┃ ❏ => 
┊┗━━━━━━━━━━━━━━•
╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈⪩`
let me = 'https://qu.ax/kVmlJ.mp4'

if (command == 'help') {
m.react('🗒️') 
let saludos = `~ Hola ${pushname} ${user.registered === true ? '✓' : ''}`
let menu = `
╭━━━━━━━✦✗✦━━━━━━━━╮
┃ ${lenguaje['smsWel']()} @${sender.split("@")[0]} ${user.registered === true ? 'ͧͧͧͦꙶͣͤ✓' : ''} 👋🏻┃
╰━━━━━━━✦✗✦━━━━━━━━╯
╭══━━━━✥◈✥━━━━══╮
┃       𝑰𝒏𝒇𝒐 𝒅𝒆 𝑯𝒂𝒌𝒂𝒓𝒊    ┃
╰══━━━━✥◈✥━━━━══╯
╭━━━━━━━༺༻━━━━━━━╮
┃ ❐ ❐ ${name}  ${creador}
┃ ❐ ${lenguaje.menu.text} [ ${prefix} ]
┃ ❐ ${lenguaje.menu.text2} ${date}
┃ ❐ ${lenguaje.menu.text3} ${time}
┃ ❐ ${lenguaje.menu.text4} ${vs}
┃ ❐ ${lenguaje.menu.text5} ${Object.keys(global.db.data.users).length}
┃ ❐ ${lenguaje.menu.text6} ${runtime(process.uptime())}
┃ ❐ ${lenguaje.menu.text7} ${conn.public ? 'publico' : 'privado'}
┃ ❐ ${conn.user.id == global.numBot2 ? `${lenguaje.menu.textt}` : `${lenguaje.menu.texttt} @${global.numBot.split`@`[0]}`}
╰━━━━━━━༺༻━━━━━━━╯
﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏✎
        𝑼𝒔𝒖𝒂𝒓𝒊𝒐𝒔
﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏✎
╭━━━•━•━━•━━•━━━•━━╮
┃ ❐ ${lenguaje.menu.text8} ${user.limit}
┃ ❐ ${lenguaje.menu.text9} ${user.level}
┃ ❐ ${lenguaje.menu.text10} ${user.role}
┃ ❐ 🌟 𝑒𝑥𝑝 : ${user.exp}
┃ ❐ 💰 𝑐𝑜𝑖𝑛𝑠 : ${user.money}
┃ ❐ ${lenguaje.menu.text11} ${rtotalreg} de ${totalreg}
╰━━━•━•━━•━━•━━━•━━╯`
let xd = `${pickRandom([`\`¿𝐐𝐮𝐢𝐞𝐫𝐞𝐬 𝐯𝐞𝐫 𝐥𝐨𝐬 𝐩𝐫𝐨𝐲𝐞𝐜𝐭𝐨𝐬 𝐝𝐞 𝐦𝐢 𝐜𝐫𝐞𝐚𝐝𝐨𝐫? 𝐔𝐬𝐚 ${prefix}𝐩𝐫𝐨𝐲𝐞𝐜𝐭𝐨𝐬\``, `\`□ CÓMO INSTALAR EL BOT\`\n${yt}`, `\`¿Qué hay de nuevo?\`\n• Pon : ${prefix}nuevo`, `\`🐉 INFÓRMATE SOBRE LAS NUEVAS ACTUALIZACIONES, NOVEDADES DEL BOT AQUÍ\`\n${nna}`, `\`🌟¿Te agrada el bot? califica nuestro repositorio con una estrellita ✳️\`\n${md}\``])}`;
let listSections = []    
listSections.push({
title: '𝑳𝒊𝒔𝒕𝒂 𝒅𝒆 𝒄𝒐𝒎𝒂𝒏𝒅𝒐𝒔 𝒅𝒊𝒔𝒑𝒐𝒏𝒊𝒃𝒍𝒆 𝒅𝒆 𝑯𝒂𝒌𝒂𝒓𝒊',
rows: [{ header: "𝐌𝐄𝐍𝐔 𝐂𝐎𝐌𝐏𝐋𝐄𝐓𝐎", title: "", id: `.allmenu`, description: `Muestra el menu completo\n` }, 
{ header: "𝐌𝐄𝐍𝐔 𝐃𝐄𝐒𝐂𝐀𝐑𝐆𝐀𝐑", title: "", id: `.menu1`, description: `Muestra el menu de descargas\n`},
{ header: "𝐀𝐔𝐃𝐈𝐎𝐒", title: "", id: `.menu2`, description: `Muestra el menu de audios palabra clave para interactuar con el bot\n` },
{ header: "𝐌𝐄𝐍𝐔 𝐆𝐑𝐔𝐏𝐎", title: "", id: `.menu3`, description: `Muestra el menu de gestión del Grupo\n` },
{ header: "𝐁𝐔𝐒𝐂𝐀𝐃𝐎𝐑𝐄𝐒", title: "", id: `.menu4`, description: `Muestra el menu para buscar información\n` },
{ header: "𝐉𝐔𝐄𝐆𝐎𝐒", title: "", id: `.menu5`, description: `Muestra el menu de juegos para divertir tu grupo con multi juegos\n` }, 
{ header: "𝐄𝐅𝐄𝐂𝐓𝐎", title: "", id: `.menu6`, description: `Muestra el menu de efecto\n` }, 
{ header: "𝐂𝐎𝐍𝐕𝐄𝐑𝐓𝐈𝐃𝐎𝐑𝐄𝐒", title: "", id: `.menu7`, description: `Muestra el menu de convertidores\n` }, 
{ header: "𝐑𝐀𝐍𝐃𝐎𝐖", title: "", id: `.menu8`, description: `Muestra el menu randow\n` }, 
{ header: "𝐑𝐏𝐆", title: "", id: `.menu9`, description: `Muestra el menu RPG\n` }, 
{ header: "𝐌𝐄𝐍𝐔 𝐒𝐓𝐈𝐂𝐊𝐄𝐑", title: "", id: `.menu10`, description: `Muestra el menu de creación de sticker\n` }, 
{ header: "𝐌𝐄𝐍𝐔 𝐏𝐀𝐑𝐀 𝐏𝐑𝐎𝐏𝐈𝐄𝐓𝐀𝐑𝐈𝐎", title: "", id: `.menu11`, description: `Muestra el menu solo para propietario del bot\n` },
{ header: "𝐂𝐎𝐍𝐅𝐈𝐆𝐔𝐑𝐀𝐂𝐈𝐎𝐍𝐄𝐒", title: "", id: `.enable`, description: `configuraciones para mi grupo\n` },
{ header: "𝐌𝐄𝐍𝐔 +𝟏𝟖", title: "", id: `.menu18`, description: `Muestra el menu +18 (usarlo bajo tu responsabilidad)\n` }, 
{ header: "𝐋𝐈𝐒𝐓𝐀 𝐃𝐄 𝐋𝐎𝐆𝐎𝐒", title: "", id: `.logos`, description: `Muestra la lista para crear logos\n` }
]})

conn.sendList(m.chat, menu, botname, `𝑻𝒐𝒄𝒂 𝑨𝒒𝒖𝒊`, listSections, {quoted: fkontak})
}

if (command === 'menu' || command === 'Menu') {
    m.react('✨');
    
    // Selecciona una imagen aleatoriamente
    let randomImage = pickRandom([img1, img2, img, img3, img4, img5, img6, img7, img8, img9]);
    
    
    conn.sendButton(m.chat, submenu, menu0, randomImage, 
        [['𝑳𝒊𝒔𝒕 𝒅𝒆 𝒎𝒆𝒏𝒖', `#help`], 
         ['𝑴𝒆𝒏𝒖 𝑪𝒐𝒎𝒑𝒍𝒆𝒕𝒐', `#allmenu`], 
         ['𝑽𝒆𝒍𝒐𝒄𝒊𝒅𝒂𝒅', `#ping`],
         ['𝑨𝒖𝒕𝒐 𝒓𝒆𝒈', `#reg ${pushname}.${nunber}`]], 
        null, null, m);
}


if (command === 'menu1' || command === 'descarga') {
    m.react('💞');
    
    // Selecciona una imagen aleatoriamente
    let randomImage = pickRandom([img1, img2, img, img3, img4, img5, img6, img7, img8, img9]);
    
    
    conn.sendButton(m.chat, submenu, descargar, randomImage, 
        [['𝑴𝒆𝒏𝒖 2', `.menu2`], 
         ['𝑺𝒑𝒆𝒆𝒅', `.ping`]],
        null, null, m);
}


if (command == 'menu2' || command == 'audio') {

let menu2 = `${lenguaje.menu.text13}\n\na\nfeliz navidad\nMerry Christmas\nFeliz cumpleaños\nPasa pack\nUwu\nSiuuu\nhola\nhello\nVete a la verga\nPasen porno\nHora del sexito\nPongan cuties\nFiesta del admin\nAdmin party\nViernes\nGOOOOD\nAlto temazo\nTodo bien\nBuenos dias\nBot gay\nGracias\nFua\nFino señores\n🧐🍷\nCorte\nGaspi buenos dias\nGaspi me saludas\nGaspi y las minitas\nGaspi todo bien\nGaspi ya no aguanto\nContate algo bot\nSexo\nMomento epico\nEl bot del orto no funciona\nEpicardo\nInsta de la minita\nUna mierda de bot\nUltimo momento\nNefasto\nParaguayo\nBot de mierda\nVenezolano\na nadie le importa\nGaspi corte\nYa me voy a dormir\nCalefon\nApurate bot\nUn chino\nNo funciona\nBoliviano\nEnano\nQuien es tu sempai botsito\nMe gimes 7u7\nTe amo botsito uwu\nOnichan\nLa toca 7w7\nautodestruction\n\n${lenguaje.menu.text14}`
conn.sendMessage(m.chat, { text: menu2}, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})}

if (command === 'menu3' || command === 'menugrupos') {
    m.react('♥️');
    
    // Selecciona una imagen aleatoriamente
    let randomImage = pickRandom([img1, img2, img, img3, img4, img5, img6, img7, img8, img9]);
    
    
    conn.sendButton(m.chat, submenu, grupos, randomImage, 
        [['MENU COMPLETO', `.menu`], 
         ['ESTADO', `.status`], 
         ['VELOCIDAD', `.ping`]],
        null, null, m);
}


if (command === 'menu4' || command === 'menubuscadores') {
    m.react('💓');
    
    // Selecciona una imagen aleatoriamente
    let randomImage = pickRandom([img1, img2, img, img3, img4, img5, img6, img7, img8, img9]);
    
    
    conn.sendButton(m.chat, submenu, buscadores, randomImage, 
        [['𝗜𝗥 𝗔𝗟 𝗠𝗘𝗡𝗨 📜', `.menu`], 
         ['𝗘𝗦𝗧𝗔𝗗𝗢 📊', `.status`], 
         ['𝗩𝗘𝗟𝗢𝗖𝗜𝗗𝗔𝗗 ⚡', `.ping`]],
        null, null, m);
}


if (command === 'menu5' || command === 'menujuegos') {
    m.react('💌');
    
    // Selecciona una imagen aleatoriamente
    let randomImage = pickRandom([img1, img2, img, img3, img4, img5, img6, img7, img8, img9]);
    
    
    conn.sendButton(m.chat, submenu, juegos, randomImage, 
        [['𝗜𝗥 𝗔𝗟 𝗠𝗘𝗡𝗨 📜', `.menu`], 
         ['𝗘𝗦𝗧𝗔𝗗𝗢 📊', `.status`], 
         ['𝗩𝗘𝗟𝗢𝗖𝗜𝗗𝗔𝗗 ⚡', `.ping`]],
        null, null, m);
}


if (command === 'menu6' || command === 'menuefecto') {
    m.react('😲');
    
    // Selecciona una imagen aleatoriamente
    let randomImage = pickRandom([img1, img2, img, img3, img4, img5, img6, img7, img8, img9]);
    
    
    conn.sendButton(m.chat, submenu, efecto, randomImage, 
        [['𝗜𝗥 𝗔𝗟 𝗠𝗘𝗡𝗨 📜', `.menu`], 
         ['𝗘𝗦𝗧𝗔𝗗𝗢 📊', `.status`], 
         ['𝗩𝗘𝗟𝗢𝗖𝗜𝗗𝗔𝗗 ⚡', `.ping`]],
        null, null, m);
}


if (command === 'menu7' || command === 'menuconvertidores') {
    m.react('💖');
    
    // Selecciona una imagen aleatoriamente
    let randomImage = pickRandom([img1, img2, img, img3, img4, img5, img6, img7, img8, img9]);
    
    
    conn.sendButton(m.chat, submenu, convertidores, randomImage, 
        [['𝗜𝗥 𝗔𝗟 𝗠𝗘𝗡𝗨 📜', `.menu`], 
         ['𝗘𝗦𝗧𝗔𝗗𝗢 📊', `.status`], 
         ['𝗩𝗘𝗟𝗢𝗖𝗜𝗗𝗔𝗗 ⚡', `.ping`]],
        null, null, m);
}


if (command === 'menu18' || command === 'Menuhony') {
    m.react('🤭');
    
    // Selecciona una imagen aleatoriamente
    let randomImage = pickRandom([img1, img2, img, img3, img4, img5, img6, img7, img8, img9]);
    
    
    conn.sendButton(m.chat, submenu, menu18, randomImage, 
        [['𝗜𝗥 𝗔𝗟 𝗠𝗘𝗡𝗨 📜', `.menu`], 
         ['𝗘𝗦𝗧𝗔𝗗𝗢 📊', `.status`], 
         ['𝗩𝗘𝗟𝗢𝗖𝗜𝗗𝗔𝗗 ⚡', `.ping`]],
        null, null, m);
}


if (command === 'menurandow' || command === 'menu8') {
    m.react('💐');
    
    // Selecciona una imagen aleatoriamente
    let randomImage = pickRandom([img1, img2, img, img3, img4, img5, img6, img7, img8, img9]);
    
    
    conn.sendButton(m.chat, submenu, menurandow, randomImage, 
        [['𝗜𝗥 𝗔𝗟 𝗠𝗘𝗡𝗨 📜', `.menu`], 
         ['𝗘𝗦𝗧𝗔𝗗𝗢 📊', `.status`], 
         ['𝗩𝗘𝗟𝗢𝗖𝗜𝗗𝗔𝗗 ⚡', `.ping`]],
        null, null, m);
}


if (command === 'menuRPG' || command === 'menu9') {
    m.react('😝');
    
    // Selecciona una imagen aleatoriamente
    let randomImage = pickRandom([img1, img2, img, img3, img4, img5, img6, img7, img8, img9]);
    
    
    conn.sendButton(m.chat, submenu, menuRPG, randomImage, 
        [
            ['𝗜𝗥 𝗔𝗟 𝗠𝗘𝗡𝗨 📜', `.menu`], 
            ['𝗘𝗦𝗧𝗔𝗗𝗢 📊', `.status`], 
            ['𝗩𝗘𝗟𝗢𝗖𝗜𝗗𝗔𝗗 ⚡', `.ping`]
        ], 
        null, null, m
    );
}


if (command === 'menuSticker' || command === 'menu10') {
    m.react('🎈');
    
    // Selecciona una imagen aleatoriamente
    let randomImage = pickRandom([img1, img2, img, img3, img4, img5, img6, img7, img8, img9]);
    
    
    conn.sendButton(m.chat, submenu, menuSticker, randomImage, 
        [['𝗜𝗥 𝗔𝗟 𝗠𝗘𝗡𝗨 📜', `.menu`], 
         ['𝗘𝗦𝗧𝗔𝗗𝗢 📊', `.status`], 
         ['𝗩𝗘𝗟𝗢𝗖𝗜𝗗𝗔𝗗 ⚡', `.ping`]],
        null, null, m);
}

if (command === 'menuOwner' || command === 'menu11') {
    m.react('👑');
    
    // Selecciona una imagen aleatoriamente
    let randomImage = pickRandom([img1, img2, img, img3, img4, img5, img6, img7, img8, img9]);
    
    
    conn.sendButton(m.chat, submenu, menuOwner, randomImage, 
        [['𝗜𝗥 𝗔𝗟 𝗠𝗘𝗡𝗨 📜', `.menu`], 
         ['𝗘𝗦𝗧𝗔𝗗𝗢 📊', `.status`], 
         ['𝗩𝗘𝗟𝗢𝗖𝗜𝗗𝗔𝗗 ⚡', `.ping`]],
        null, null, m);
}



if (command == 'allmenu' || command == 'menucompleto') {
m.react('⏱️') 
let menu = `╔━━━▣━━◤ HAKARI-BOT-MD ◢━━▣━━━╗
║▀▄▀▄▀▄ Team Nakano ▄▀▄▀▄▀
║${lenguaje['smsWel']()} @${sender.split("@")[0]} ${user.registered === true ? 'ͧͧͧͦꙶͣͤ✓' : ''} 👋🏻
┏━✦❘༻༺❘✦━━┓
║${lenguaje.menu.text} [ ${prefix} ]
║${lenguaje.menu.text2} ${date}
║${lenguaje.menu.text3} ${time}
║${lenguaje.menu.text4} ${vs}
║${lenguaje.menu.text5} ${Object.keys(global.db.data.users).length}
║${lenguaje.menu.text6} ${runtime(process.uptime())}
║${lenguaje.menu.text7} ${conn.public ? 'publico' : 'privado'}
║${conn.user.id == global.numBot2 ? `${lenguaje.menu.textt} ` : `${lenguaje.menu.texttt} @${global.numBot.split`@`[0]}`}
║ 
║${lenguaje.menu.text8} ${user.limit}
║${lenguaje.menu.text9} ${user.level}
║${lenguaje.menu.text10} ${user.role}
║❐ ᴇxᴘ : ${user.exp}
║❐ ᴄᴏɪɴs : ${user.money}
║ 
║${lenguaje.menu.text11} ${rtotalreg} de ${totalreg}
║ ━━━✥◈✥━━━
┗━✦❘༻༺❘✦━━┛

┏━✦❘༻༺❘✦━━┓
${lenguaje.menu.text12}
┗━✦❘༻༺❘✦━━┛

*╭─╮─᤻─᳒─᤻᳒᯽⃟ᰳᰬᰶ┈*⃐ℹ️ ＩＮＦＯＢＯＴ*️⃟ᬽ፝֟━*
╔═══════☆♡☆═══════╗
├༒ᰰຼ ✎ ${prefix}𝑟𝑒𝑔 _(𝑅𝑒𝑔𝑖𝑠𝑡𝑟𝑎𝑟𝑡𝑒 𝑒𝑛 𝑒𝑙 𝑏𝑜𝑡)_
├༒ᰰຼ ✎ ${prefix}𝑢𝑛𝑟𝑒𝑔 _(𝑏𝑜𝑟𝑟𝑎𝑟 𝑠𝑢 𝑟𝑒𝑔𝑖𝑠𝑡𝑟𝑜)_
├༒ᰰຼ ✎ ${prefix}𝑚𝑦𝑛𝑠 _(𝑛𝑢𝑚𝑒𝑟𝑜 𝑑𝑒 𝑠𝑒𝑟𝑖𝑒)_
├༒ᰰຼ ✎ ${prefix}𝑒𝑠𝑡𝑎𝑑𝑜 _(𝑒𝑠𝑡𝑎𝑑𝑜 𝑑𝑒𝑙 𝑏𝑜𝑡)_
├༒ᰰຼ ✎ ${prefix}𝑚𝑒𝑛𝑢2
├༒ᰰຼ ✎ ${prefix}𝑎𝑢𝑑𝑖𝑜𝑠 
├༒ᰰຼ ✎ ${prefix}𝑛𝑢𝑒𝑣𝑜 _(𝑛𝑢𝑒𝑣𝑜 𝑐𝑜𝑚𝑎𝑛𝑑𝑜)_
├༒ᰰຼ ✎ ${prefix}𝑟𝑒𝑔𝑙𝑎𝑠 _(𝑟𝑒𝑔𝑙𝑎𝑠)_
├༒ᰰຼ ✎ ${prefix}𝑝𝑖𝑛𝑔
├༒ᰰຼ ✎ ${prefix}𝑣𝑒𝑙𝑜𝑐𝑖𝑑𝑎𝑑
├༒ᰰຼ ✎ ${prefix}𝑔𝑟𝑢𝑝𝑜𝑠 _(𝑔𝑟𝑢𝑝𝑜𝑠 𝑜𝑓𝑖𝑐𝑖𝑎𝑙𝑒𝑠)_
├༒ᰰຼ ✎ ${prefix}𝑗𝑜𝑖𝑛 _(𝑠𝑜𝑙𝑖𝑐𝑖𝑡𝑎 𝑢𝑛 𝑏𝑜𝑡 𝑝𝑎𝑟𝑎 𝑡𝑢 𝑔𝑟𝑢𝑝𝑜)_
├༒ᰰຼ ✎ ${prefix}𝑜𝑤𝑛𝑒𝑟
├༒ᰰຼ ✎ ${prefix}𝑐𝑟𝑒𝑎𝑑𝑜𝑟 _(𝑐𝑜𝑛𝑡𝑎𝑐𝑡𝑜𝑠 𝑑𝑒 𝑚𝑖 𝑐𝑟𝑒𝑎𝑑𝑜𝑟)_
├༒ᰰຼ ✎ ${prefix}𝑖𝑛𝑠𝑡𝑎𝑙𝑎𝑟𝑏𝑜𝑡 (𝑇𝑢𝑡𝑜𝑟𝑖𝑎𝑙 𝑑𝑒𝑙 𝑖𝑛𝑠𝑡𝑎𝑙𝑎𝑐𝑖𝑜𝑛)_
├༒ᰰຼ ✎ ${prefix}𝑠𝑜𝑙𝑖𝑐𝑖𝑡𝑢𝑑
├༒ᰰຼ ✎ ${prefix}𝑐𝑢𝑒𝑛𝑡𝑎 
├༒ᰰຼ ✎ ${prefix}𝑐𝑢𝑒𝑛𝑡𝑎𝑜𝑓𝑖𝑐𝑖𝑎𝑙𝑒𝑠
├༒ᰰຼ ✎ ${prefix}𝑠𝑡𝑎𝑡𝑢𝑠 
├༒ᰰຼ ✎ ${prefix}𝑖𝑛𝑓𝑜ℎ𝑜𝑠𝑡
├༒ᰰຼ ✎ ${prefix}ℎ𝑜𝑠𝑡
├༒ᰰຼ ✎ ${prefix}𝑐𝑎𝑓𝑖𝑟𝑒𝑥𝑜𝑠
├༒ᰰຼ ✎ ${prefix}𝑟𝑒𝑝𝑜𝑟𝑡 
╚═══════☆♡☆═══════╝

*╭─╮─᤻─᳒─᤻᳒᯽⃟ᰳᰬᰶ┈*⃐🤖ＪＡＤＩＢＯＴ*️⃟ᬽ፝֟━*
╔═══════☆♡☆═══════╗
├• *(𝑇𝑖𝑒𝑛𝑒 2 𝑜𝑝𝑐𝑖𝑜𝑛𝑒𝑠 𝑝𝑎𝑟𝑎 ℎ𝑎𝑐𝑒𝑟𝑡𝑒 𝑆𝑢𝑏𝐵𝑜𝑡)*
├┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄
├• *𝐸𝑠𝑐𝑎𝑛𝑒𝑎𝑑𝑜 𝑒𝑙 𝑄𝑅*
├༒ᰰຼ ✎ ${prefix}𝑠𝑒𝑟𝑏𝑜𝑡
├༒ᰰຼ ✎ ${prefix}𝑞𝑟
├┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄
├• *𝐶𝑜𝑛 𝑐𝑜𝑑𝑖𝑔𝑜 𝑑𝑒 8 𝑑𝑖𝑔𝑖𝑡𝑜𝑠*
├༒ᰰ ✎ ${prefix}𝑠𝑒𝑟𝑏𝑜𝑡 --𝑐𝑜𝑑𝑒
├༒ᰰຼ ✎ ${prefix}𝑗𝑎𝑑𝑖𝑏𝑜𝑡 --𝑐𝑜𝑑𝑒
├┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄
├• *(𝐶𝑜𝑚𝑝𝑟𝑢𝑒𝑏𝑎 𝑠𝑖 ℎ𝑎𝑦 𝑠𝑢𝑏 𝑏𝑜𝑡 𝑐𝑜𝑛𝑒𝑐𝑡𝑎𝑑𝑜)*
├༒ᰰຼ ✎ ${prefix}𝑏𝑜𝑡𝑠 
├┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄
├• *(𝐶𝑜𝑚𝑎𝑛𝑑𝑜 𝑠𝑜𝑙𝑜 𝑝𝑎𝑟𝑎 𝑙𝑜𝑠 𝑠𝑢𝑏 𝑏𝑜𝑡)*
├༒ᰰຼ ✎ ${prefix}𝑠𝑡𝑜𝑝
├༒ᰰຼ ✎ ${prefix}𝑑𝑒𝑙𝑗𝑎𝑑𝑖𝑏𝑜𝑡
╚═══════☆♡☆═══════╝

*╭─╮─᤻─᳒─᤻᳒᯽⃟ᰳᰬᰶ┈*⃐🔄ＤＥＳＣＡＲＧＡ*️⃟ᬽ፝֟━*
╔═══════☆♡☆═══════╗
├༒ᰰຼ ✎ ${prefix}𝑝𝑙𝑎𝑦 _(𝑑𝑒𝑠𝑐𝑎𝑟𝑔𝑎𝑟 𝑚𝑢𝑠𝑖𝑐𝑎)_
├༒ᰰຼ ✎ ${prefix}𝑝𝑙𝑎𝑦2 _(𝐷𝑒𝑠𝑐𝑎𝑟𝑔𝑎𝑟 𝑣𝑖𝑑𝑒𝑜)_
├༒ᰰຼ ✎ ${prefix}𝑝𝑙𝑎𝑦.1 _(𝑑𝑒𝑠𝑐𝑎𝑟𝑔𝑎𝑟 𝑚𝑢𝑠𝑖𝑐𝑎)_
├༒ᰰຼ ✎ ${prefix}𝑝𝑙𝑎𝑦.2 _(𝑑𝑒𝑠𝑐𝑎𝑟𝑔𝑎𝑟 𝑣𝑖𝑑𝑒𝑜)_
├༒ᰰຼ ✎ ${prefix}𝑚𝑢𝑠𝑖𝑐𝑎
├༒ᰰຼ ✎ ${prefix}𝑣𝑖𝑑𝑒𝑜
├༒ᰰຼ ✎ ${prefix}𝑝𝑙𝑎𝑦𝑑𝑜𝑐
├༒ᰰຼ ✎ ${prefix}𝑝𝑙𝑎𝑦3 _(𝐷𝑒𝑠𝑐𝑎𝑟𝑔𝑎 𝑎𝑢𝑑𝑖𝑜 𝑒𝑛 𝑑𝑜𝑐𝑢𝑚𝑒𝑛𝑡𝑜)_
├༒ᰰຼ ✎ ${prefix}𝑝𝑙𝑎𝑦4 _(𝐷𝑒𝑠𝑐𝑎𝑟𝑔𝑎 𝑣𝑖𝑑𝑒𝑜 𝑒𝑛 𝑑𝑜𝑐𝑢𝑚𝑒𝑛𝑡𝑜)_
├༒ᰰຼ ✎ ${prefix}𝑦𝑡𝑠 _(𝐵𝑢𝑠𝑐𝑎𝑑𝑜𝑟 𝑑𝑒 𝑦𝑜𝑢𝑡𝑢𝑏𝑒)_
├༒ᰰຼ ✎ ${prefix}𝑦𝑡𝑚𝑝3 _(𝑙𝑖𝑛𝑘 𝑝𝑎𝑟𝑎 𝑑𝑒𝑠𝑐𝑎𝑟𝑔𝑎𝑟 𝑒𝑙 𝑎𝑢𝑑𝑖𝑜)_
├༒ᰰຼ ✎ ${prefix}𝑦𝑡𝑚𝑝4 _(𝑙𝑖𝑛𝑘 𝑝𝑎𝑟𝑎 𝑑𝑒𝑠𝑐𝑎𝑟𝑔𝑎𝑟 𝑒𝑙 𝑣𝑖𝑑𝑒𝑜)_
├༒ᰰຼ ✎ ${prefix}𝑠𝑝𝑜𝑡𝑖𝑓𝑦
├༒ᰰຼ ✎ ${prefix}𝑚𝑢𝑠𝑖𝑐 _(𝐷𝑒𝑠𝑐𝑎𝑟𝑔𝑎 𝑚𝑢𝑠𝑖𝑐𝑎 𝑑𝑒 𝑆𝑝𝑜𝑡𝑖𝑓𝑦)_
├༒ᰰຼ ✎ ${prefix}𝑔𝑖𝑡𝑐𝑙𝑜𝑛𝑒 _(𝑑𝑒𝑠𝑐𝑎𝑟𝑔𝑎 𝑟𝑒𝑝𝑜𝑠𝑖𝑡𝑜𝑟𝑖𝑜 𝑑𝑒 𝐺𝑖𝑡𝐻𝑢𝑏)_
├༒ᰰຼ ✎ ${prefix}𝑡𝑖𝑘𝑡𝑜𝑘 _(𝑑𝑒𝑠𝑐𝑎𝑟𝑔𝑎𝑟 𝑣𝑖𝑑𝑒𝑜 𝑑𝑒 𝑡𝑖𝑘𝑡𝑜𝑘)_
├༒ᰰຼ ✎ ${prefix}𝑡𝑖𝑘𝑡𝑜𝑘𝑖𝑚𝑔
├༒ᰰຼ ✎ ${prefix}𝑡𝑡𝑖𝑚𝑔 _(𝑑𝑒𝑠𝑐𝑎𝑟𝑔𝑎 𝑖𝑚𝑎𝑔𝑒𝑛 𝑑𝑒 𝑡𝑖𝑘𝑡𝑜𝑘)_
├༒ᰰຼ ✎ ${prefix}𝑖𝑔𝑠𝑡𝑎𝑙𝑘 _(𝑛𝑜𝑚𝑏𝑟𝑒 𝑑𝑒 𝑢𝑛 𝑢𝑠𝑢𝑎𝑟𝑖𝑜 𝑑𝑒 𝑖𝑔)_
├༒ᰰຼ ✎ ${prefix}𝑓𝑎𝑐𝑒𝑏𝑜𝑜𝑘
├༒ᰰຼ ✎ ${prefix}𝑓𝑏 _(𝐷𝑒𝑠𝑐𝑎𝑟𝑔𝑎 𝑣𝑖𝑑𝑒𝑜𝑠 𝑑𝑒 𝐹𝑎𝑐𝑒𝑏𝑜𝑜𝑘)_
├༒ᰰຼ ✎ ${prefix}𝑖𝑛𝑠𝑡𝑎𝑔𝑟𝑎𝑚
├༒ᰰຼ ✎ ${prefix}𝑖𝑔 _(𝐷𝑒𝑠𝑐𝑎𝑟𝑔𝑎 𝑣𝑖𝑑𝑒𝑜𝑠 𝑑𝑒 𝐼𝑛𝑠𝑡𝑎𝑔𝑟𝑎𝑚)_
├༒ᰰຼ ✎ ${prefix}𝑚𝑒𝑑𝑖𝑎𝑓𝑖𝑟𝑒 _(𝑑𝑒𝑠𝑐𝑎𝑟𝑔𝑎 𝑎𝑟𝑐ℎ𝑖𝑣𝑜 𝑑𝑒 𝑚𝑒𝑑𝑖𝑎𝑓𝑖𝑟𝑒)_
├༒ᰰຼ ✎ ${prefix}𝑔𝑑𝑟𝑖𝑣𝑒 _(𝐷𝑒𝑠𝑐𝑎𝑟𝑔𝑎 𝑎𝑟𝑐ℎ𝑖𝑣𝑜𝑠 𝑑𝑒 𝑔𝑑𝑟𝑖𝑣𝑒)_
╚═══════☆♡☆═══════╝

*╭─╮─᤻─᳒─᤻᳒᯽⃟ᰳᰬᰶ┈*🔰⃐ＧＲＵＰＯＳ*️⃟ᬽ፝֟━*
╔═══════☆♡☆═══════╗
├༒ᰰຼ ✎ ${prefix}𝑤𝑒𝑙𝑐𝑜𝑚𝑒 _(𝑜𝑛/𝑜𝑓𝑓)_
├༒ᰰຼ ✎ ${prefix}𝑎𝑛𝑡𝑖𝑙𝑖𝑛𝑘 _(𝑜𝑛/𝑜𝑓𝑓)_
├༒ᰰຼ ✎ ${prefix}𝑎𝑛𝑡𝑖𝑒𝑛𝑙𝑎𝑐𝑒 _(𝑜𝑛/𝑜𝑓𝑓)_
├༒ᰰຼ ✎ ${prefix}𝑎𝑛𝑡𝑖𝑓𝑎𝑘𝑒 _(𝑜𝑛/𝑜𝑓𝑓)_
├༒ᰰຼ ✎ ${prefix}𝑎𝑛𝑡𝑖𝑎𝑟𝑎𝑏𝑒 _(𝑜𝑛/𝑜𝑓𝑓)_
├༒ᰰຼ ✎ ${prefix}𝑎𝑛𝑡𝑖𝑡𝑜𝑥𝑖𝑐 _(𝑜𝑛/𝑜𝑓𝑓)_
├༒ᰰຼ ✎ ${prefix}𝑎𝑛𝑡𝑖𝑙𝑖𝑛𝑘2 _(𝑜𝑛/𝑜𝑓𝑓)_
├༒ᰰຼ ✎ ${prefix}𝐴𝑛𝑡𝑖𝑇𝑤𝑖𝑡𝑒𝑟 _(𝑜𝑛/𝑜𝑓𝑓)_
├༒ᰰຼ ✎ ${prefix}𝑎𝑛𝑡𝑖𝑡𝑖𝑘𝑡𝑜𝑘 _(𝑜𝑛/𝑜𝑓𝑓)_
├༒ᰰຼ ✎ ${prefix}𝐴𝑛𝑡𝑖𝑇𝑖𝑘𝑇𝑜𝑘 _(𝑜𝑛/𝑜𝑓𝑓)_
├༒ᰰຼ ✎ ${prefix}𝑎𝑛𝑡𝑖𝑡𝑒𝑙𝑒𝑔𝑟𝑎𝑚 _(𝑜𝑛/𝑜𝑓𝑓)_
├༒ᰰຼ ✎ ${prefix}𝐴𝑛𝑡𝑖𝑇𝑒𝑙𝑒𝑔𝑟𝑎𝑚 _(𝑜𝑛/𝑜𝑓𝑓)_
├༒ᰰຼ ✎ ${prefix}𝑎𝑛𝑡𝑖𝑓𝑎𝑐𝑒𝑏𝑜𝑜𝑘 _(𝑜𝑛/𝑜𝑓𝑓)_
├༒ᰰຼ ✎ ${prefix}𝐴𝑛𝑡𝑖𝐹𝑏 _(𝑜𝑛/𝑜𝑓𝑓)_
├༒ᰰຼ ✎ ${prefix}𝐴𝑛𝑡𝑖𝐹𝑎𝑐𝑒𝐵𝑜𝑜𝑘 _(𝑜𝑛/𝑜𝑓𝑓)_
├༒ᰰຼ ✎ ${prefix}𝐴𝑛𝑡𝐼𝑛𝑠𝑡𝑎𝑔𝑟𝑎𝑚 _(𝑜𝑛/𝑜𝑓𝑓)_
├༒ᰰຼ ✎ ${prefix}𝐴𝑛𝑡𝑖𝐼𝑔 _(𝑜𝑛/𝑜𝑓𝑓)_
├༒ᰰຼ ✎ ${prefix}𝑎𝑛𝑡𝑖𝑦𝑜𝑢𝑡𝑢𝑏𝑒 _(𝑜𝑛/𝑜𝑓𝑓)_
├༒ᰰຼ ✎ ${prefix}𝐴𝑛𝑡𝑖𝑌𝑜𝑢𝑡𝑢𝑏𝑒 _(𝑜𝑛/𝑜𝑓𝑓)_
├༒ᰰຼ ✎ ${prefix}𝑎𝑢𝑡𝑜𝑠𝑡𝑖𝑐𝑘𝑒𝑟 _(𝑜𝑛/𝑜𝑓𝑓)_
├༒ᰰຼ ✎ ${prefix}𝑑𝑒𝑡𝑒𝑐𝑡 _(𝑜𝑛/𝑜𝑓𝑓)_
├༒ᰰຼ ✎ ${prefix}𝑎𝑢𝑡𝑜𝑑𝑒𝑡𝑒𝑐𝑡 _(𝑜𝑛/𝑜𝑓𝑓)_
├༒ᰰຼ ✎ ${prefix}𝑎𝑛𝑡𝑖𝑛𝑠𝑓𝑤 _(𝑜𝑛/𝑜𝑓𝑓)_
├༒ᰰຼ ✎ ${prefix}𝑚𝑜𝑑𝑜𝑐𝑎𝑙𝑖𝑒𝑛𝑡𝑒 _(𝑜𝑛/𝑜𝑓𝑓)_
├༒ᰰຼ ✎ ${prefix}𝑎𝑢𝑡𝑜𝑠𝑡𝑖𝑐𝑘𝑒𝑟 _(𝑜𝑛/𝑜𝑓𝑓)_
├༒ᰰຼ ✎ ${prefix}𝑚𝑜𝑑𝑜𝑎𝑑𝑚𝑖𝑛 _(𝑜𝑛/𝑜𝑓𝑓)_
├༒ᰰຼ ✎ ${prefix}𝑎𝑢𝑑𝑖𝑜𝑠 _(𝑜𝑛/𝑜𝑓𝑓)_
├༒ᰰຼ ✎ ${prefix}𝑐ℎ𝑎𝑡𝑏𝑜𝑡 _(𝑜𝑛/𝑜𝑓𝑓)_
├༒ᰰຼ ✎ ${prefix}𝑎𝑢𝑡𝑜𝑙𝑒𝑣𝑒𝑙𝑢𝑝 _(𝑜𝑛/𝑜𝑓𝑓)_
├༒ᰰຼ ✎ ${prefix}𝑎𝑢𝑡𝑜𝑛𝑖𝑣𝑒𝑙 _(𝑜𝑛/𝑜𝑓𝑓)_
├༒ᰰຼ ✎ ${prefix}𝑘𝑖𝑐𝑘 _(@𝑡𝑎𝑔)_
├༒ᰰຼ ✎ ${prefix}𝑎𝑑𝑑 _(@𝑡𝑎𝑔)_
├༒ᰰຼ ✎ ${prefix}𝑖𝑛𝑣𝑖𝑡𝑎 _(@𝑡𝑎𝑔)_
├༒ᰰຼ ✎ ${prefix}𝑝𝑟𝑜𝑚𝑜𝑡𝑒 _(@𝑡𝑎𝑔)_
├༒ᰰຼ ✎ ${prefix}𝑑𝑒𝑚𝑜𝑡𝑒 _(@𝑡𝑎𝑔)_
├༒ᰰຼ ✎ ${prefix}𝑖𝑛𝑓𝑜𝑔𝑟𝑢𝑝𝑜
├༒ᰰຼ ✎ ${prefix}𝑔𝑟𝑜𝑢𝑝𝑖𝑛𝑓𝑜
├༒ᰰຼ ✎ ${prefix}𝑎𝑑𝑚𝑖𝑛𝑠 _(𝑙𝑙𝑎𝑚𝑎 𝑎 𝑙𝑜𝑠 𝑎𝑑𝑚𝑖𝑛𝑠)_
├༒ᰰຼ ✎ ${prefix}𝑔𝑟𝑢𝑝𝑜 𝑐𝑙𝑜𝑠𝑒/𝑜𝑝𝑒𝑛 
├༒ᰰຼ ✎ ${prefix}𝑤𝑎𝑟𝑛 _(@𝑡𝑎𝑔)_
├༒ᰰຼ ✎ ${prefix}𝑎𝑑𝑣𝑒𝑟𝑡𝑒𝑛𝑐𝑖𝑎 _(@𝑡𝑎𝑔)_
├༒ᰰຼ ✎ ${prefix}𝑢𝑛𝑤𝑎𝑟𝑛 _(@𝑡𝑎𝑔)_
├༒ᰰຼ ✎ ${prefix}𝑞𝑢𝑖𝑡𝑎𝑟𝑑𝑣𝑒𝑟𝑡𝑒𝑛𝑐𝑖𝑎 _(@𝑡𝑎𝑔)_
├༒ᰰຼ ✎ ${prefix}𝑠𝑒𝑡𝑝𝑝𝑛𝑎𝑚𝑒 _(𝑐𝑎𝑚𝑏𝑖𝑎 𝑒𝑙 𝑛𝑜𝑚𝑏𝑟𝑒 𝑑𝑒𝑙 𝑔𝑟𝑢𝑝𝑜)_
├༒ᰰຼ ✎ ${prefix}𝑠𝑒𝑡𝑑𝑒𝑠𝑐 _(𝑐𝑎𝑚𝑏𝑖𝑎 𝑙𝑎 𝑑𝑒𝑠𝑐 𝑑𝑒𝑙 𝐺𝑟𝑢𝑝𝑜)_
├༒ᰰຼ ✎ ${prefix}𝑠𝑒𝑡𝑝𝑝𝑔𝑟𝑜𝑢𝑝 _(𝑐𝑎𝑚𝑏𝑖𝑎 𝑙𝑎 𝑓𝑜𝑡𝑜 𝑑𝑒𝑙 𝐺𝑟𝑢𝑝𝑜)_
├༒ᰰຼ ✎ ${prefix}𝑎𝑛𝑢𝑙𝑎𝑟𝑙𝑖𝑛𝑘 
├༒ᰰຼ ✎ ${prefix}𝑟𝑒𝑠𝑒𝑡𝑙𝑖𝑛𝑘 _(𝑟𝑒𝑠𝑡𝑎𝑏𝑙𝑒𝑐𝑒 𝑒𝑙 𝑙𝑖𝑛𝑘 𝑑𝑒𝑙 𝑔𝑟𝑢𝑝𝑜)_
├༒ᰰຼ ✎ ${prefix}ℎ𝑖𝑑𝑒𝑡𝑎𝑔 _(𝑒𝑡𝑖𝑞𝑢𝑒𝑡𝑎 𝑎 𝑡𝑜𝑑𝑜𝑠 𝑒𝑙 𝑢𝑛 𝑚𝑒𝑛𝑠𝑎𝑗𝑒)_
├༒ᰰຼ ✎ ${prefix}𝑡𝑎𝑔𝑎𝑙𝑙 
├༒ᰰຼ ✎ ${prefix}𝑖𝑛𝑣𝑜𝑐𝑎𝑟 _(𝑒𝑡𝑖𝑞𝑢𝑒𝑡𝑎 𝑎 𝑡𝑜𝑑𝑜𝑠 𝑒𝑙 𝑢𝑛𝑎 𝑙𝑖𝑠𝑡𝑎𝑠)_
├༒ᰰຼ ✎ ${prefix}𝑙𝑖𝑠𝑡𝑜𝑛𝑙𝑖𝑛𝑒 _(𝑢𝑠𝑢𝑎𝑟𝑖𝑜𝑠 𝑞𝑢𝑒 𝑒𝑠𝑡𝑎 𝑜𝑛𝑙𝑖𝑛𝑒)_
╚═══════☆♡☆═══════╝

*╭─╮─᤻─᳒─᤻᳒᯽⃟ᰳᰬᰶ┈*🔎⃐ＢＵＳＣＡＤＯＲＥＳ*️⃟ᬽ፝֟━*
╔═══════☆♡☆═══════╗
├༒ᰰຼ ✎ ${prefix}𝑔𝑜𝑜𝑔𝑙𝑒 _(𝑏𝑢𝑠𝑐𝑎𝑟 𝑖𝑛𝑓𝑜𝑟𝑚𝑎𝑐𝑖𝑜𝑛 𝑐𝑜𝑛 𝑔𝑜𝑜𝑔𝑙𝑒)_
├༒ᰰຼ ✎ ${prefix}𝑐ℎ𝑎𝑡𝑔𝑝𝑡
├༒ᰰຼ ✎ ${prefix}𝑖𝑎 _(𝑏𝑢𝑠𝑐𝑎𝑟 𝑖𝑛𝑓𝑜𝑟𝑚𝑎𝑐𝑖𝑜𝑛 𝑐𝑜𝑛 𝑙𝑎 𝐼𝐴)_
├༒ᰰຼ ✎ ${prefix}𝑏𝑎𝑟𝑑 _(𝑏𝑢𝑠𝑐𝑎𝑟 𝑖𝑛𝑓𝑜𝑟𝑚𝑎𝑐𝑖𝑜𝑛)_
├༒ᰰຼ ✎ ${prefix}𝑖𝑚𝑎𝑔𝑒𝑛 _(𝐼𝑚𝑎𝑔𝑒𝑛 𝑒𝑛 𝑔𝑜𝑜𝑔𝑙𝑒)_
├༒ᰰຼ ✎ ${prefix}𝑡𝑟𝑎𝑑𝑢𝑐𝑖𝑟 _(𝑇𝑟𝑎𝑑𝑢𝑐𝑖𝑟 𝑎𝑙𝑔𝑢𝑛 𝑡𝑒𝑥𝑡𝑜)_
├༒ᰰຼ ✎ ${prefix}𝑤𝑎𝑙𝑙𝑝𝑎𝑝𝑒𝑟 _(𝑖𝑚𝑎𝑔𝑒𝑛 𝑑𝑒𝑙 𝑤𝑎𝑙𝑙𝑝𝑎𝑝𝑒𝑟)_
├༒ᰰຼ ✎ ${prefix}𝑠𝑠 _(𝑙𝑖𝑛𝑘)_
├༒ᰰຼ ✎ ${prefix}𝑑𝑎𝑙𝑙-𝑒
├༒ᰰຼ ✎ ${prefix}𝑖𝑎2 _(𝐶𝑟𝑒𝑎𝑟 𝑖𝑚𝑎𝑔𝑒𝑛 𝑐𝑜𝑛 𝑙𝑎 (𝐼𝐴)_
├༒ᰰຼ ✎ ${prefix}ℎ𝑜𝑟𝑎𝑟𝑖𝑜
╚═══════☆♡☆═══════╝

*╭─╮─᤻─᳒─᤻᳒᯽⃟ᰳᰬᰶ┈*⃐👾ＪＵＥＧＯＳ*️⃟ᬽ፝֟━*
╔═══════☆♡☆═══════╗
├༒ᰰຼ ✎ ${prefix}𝑠𝑖𝑚𝑖 _(ℎ𝑎𝑏𝑙𝑎𝑟 𝑐𝑜𝑛 𝑒𝑙 𝑏𝑜𝑡)_
├༒ᰰຼ ✎ ${prefix}𝑝𝑝𝑡 _(𝑝𝑖𝑒𝑑𝑟𝑎, 𝑝𝑎𝑝𝑒𝑙, 𝑜 𝑡𝑖𝑗𝑒𝑟𝑎)_
├༒ᰰຼ ✎ ${prefix}𝑔𝑎𝑦 @𝑡𝑎𝑔
├༒ᰰຼ ✎ ${prefix}𝑝𝑎𝑟𝑒𝑗𝑎 @𝑡𝑎𝑔
├༒ᰰຼ ✎ ${prefix}𝑙𝑜𝑣𝑒 @𝑡𝑎𝑔
├༒ᰰຼ ✎ ${prefix}𝑓𝑜𝑙𝑙𝑎𝑟 @𝑡𝑎𝑔
├༒ᰰຼ ✎ ${prefix}𝑡𝑜𝑝𝑔𝑎𝑦𝑠
├༒ᰰຼ ✎ ${prefix}𝑡𝑜𝑝𝑜𝑡𝑎𝑘𝑢𝑠
├༒ᰰຼ ✎ ${prefix}𝑡𝑜𝑝
├༒ᰰຼ ✎ ${prefix}𝑝𝑟𝑒𝑔𝑢𝑛𝑡𝑎
├༒ᰰຼ ✎ ${prefix}𝑣𝑒𝑟𝑑𝑎𝑑
├༒ᰰຼ ✎ ${prefix}𝑟𝑒𝑡𝑜
├༒ᰰຼ ✎ ${prefix}𝑑𝑜𝑥𝑒𝑎𝑟
├༒ᰰຼ ✎ ${prefix}𝑚𝑎𝑡ℎ
├༒ᰰຼ ✎ ${prefix}𝑚𝑎𝑡𝑒𝑚𝑎𝑡𝑖𝑐𝑎𝑠
├༒ᰰຼ ✎ ${prefix}𝑡𝑡𝑡
├༒ᰰຼ ✎ ${prefix}𝑡𝑖𝑐𝑡𝑎𝑐𝑡𝑜𝑒
├༒ᰰຼ ✎ ${prefix}𝑡𝑡𝑐
├༒ᰰຼ ✎ ${prefix}𝑑𝑒𝑙𝑡𝑡𝑡
├༒ᰰຼ ✎ ${prefix}𝑝𝑒𝑟𝑠𝑜𝑛𝑎𝑙𝑖𝑑𝑎𝑑
├༒ᰰຼ ✎ ${prefix}𝑟𝑎𝑐𝑖𝑠𝑡𝑎
├༒ᰰຼ ✎ ${prefix}𝑠𝑙𝑜𝑡
├༒ᰰຼ ✎ ${prefix}𝑑𝑎𝑑𝑜
├༒ᰰຼ ✎ ${prefix}𝑝𝑖𝑟𝑜𝑝𝑜
├༒ᰰຼ ✎ ${prefix}𝑠ℎ𝑖𝑝
├༒ᰰຼ ✎ ${prefix}𝑓𝑜𝑟𝑚𝑎𝑟𝑡𝑟𝑖𝑜
├༒ᰰຼ ✎ ${prefix}𝑓𝑜𝑟𝑚𝑎𝑝𝑎𝑟𝑒𝑗𝑎5
┊┃ ✎ ${prefix}𝑡𝑥𝑡 _(𝑡𝑒𝑥𝑡𝑜)_
├༒ᰰຼ ✎ ${prefix}𝑓𝑎𝑘𝑒 _(𝑡𝑒𝑥𝑡𝑜 + 𝑡𝑎𝑔)_
╚═══════☆♡☆═══════╝

*╭─╮─᤻─᳒─᤻᳒᯽⃟ᰳᰬᰶ┈*🎤 𝐸𝐹𝐸𝐶𝑇𝑂𝑆 𝐷𝐸 𝐴𝑈𝐷𝐼𝑂𝑆*️⃟ᬽ፝֟━*
╔═══════☆♡☆═══════╗
├༒ᰰຼ ✎ ${prefix}𝑏𝑎𝑠𝑠
├༒ᰰຼ ✎ ${prefix}𝑏𝑙𝑜𝑤𝑛
├༒ᰰຼ ✎ ${prefix}𝑑𝑒𝑒𝑝
├༒ᰰຼ ✎ ${prefix}𝑒𝑎𝑟𝑟𝑎𝑝𝑒
├༒ᰰຼ ✎ ${prefix}𝑓𝑎𝑠𝑡
├༒ᰰຼ ✎ ${prefix}𝑓𝑎𝑡
├༒ᰰຼ ✎ ${prefix}𝑛𝑖𝑔ℎ𝑡𝑐𝑜𝑟𝑒
├༒ᰰຼ ✎ ${prefix}𝑟𝑒𝑣𝑒𝑟𝑠𝑒
├༒ᰰຼ ✎ ${prefix}𝑟𝑜𝑏𝑜𝑡
├༒ᰰຼ ✎ ${prefix}𝑠𝑙𝑜𝑤
├༒ᰰຼ ✎ ${prefix}𝑠𝑚𝑜𝑜𝑡ℎ
├༒ᰰຼ ✎ ${prefix}𝑠𝑞𝑢𝑖𝑟𝑟𝑒𝑙
╚═══════☆♡☆═══════╝

*╭─╮─᤻─᳒─᤻᳒᯽⃟ᰳᰬᰶ┈*⃐🧧𝐶𝑂𝑁𝑉𝐸𝑅𝑇𝐼𝐷𝑂𝑅𝐸𝑆*️⃟ᬽ፝֟━*
╔═══════☆♡☆═══════╗
├༒ᰰຼ ✎ ${prefix}𝑡𝑜𝑢𝑟𝑙
├༒ᰰຼ ✎ ${prefix}𝑡𝑡𝑠
├༒ᰰຼ ✎ ${prefix}𝑡𝑜𝑚𝑝3
├༒ᰰຼ ✎ ${prefix}𝑡𝑜𝑖𝑚𝑔
├༒ᰰຼ ✎ ${prefix}𝑡𝑜𝑎𝑢𝑑𝑖𝑜
├༒ᰰຼ ✎ ${prefix}𝑡𝑜𝑎𝑛𝑖𝑚𝑒
├༒ᰰຼ ✎ ${prefix}ℎ𝑑
╚═══════☆♡☆═══════╝	

*╭─╮─᤻─᳒─᤻᳒᯽⃟ᰳᰬᰶ┈*⃐🥵𝐶𝑂𝑀𝐴𝑁𝐷𝑂 +18*️⃟ᬽ፝֟━*
├༒ᰰຼ  *𝐴𝑐𝑡𝑖𝑣𝑎 𝑐𝑜𝑛 (𝑎𝑛𝑡𝑖𝑁𝑠𝑓𝑤 𝑜𝑛)*
╔═══════☆♡☆═══════╗
├༒ᰰຼ ✎ ${prefix}𝑝𝑢𝑠𝑠𝑦
├༒ᰰຼ ✎ ${prefix}𝑛𝑠𝑓𝑤𝑙𝑜𝑙𝑖
├༒ᰰຼ ✎ ${prefix}ℎ𝑒𝑛𝑡𝑎𝑖
├༒ᰰຼ ✎ ${prefix}ℎ𝑒𝑛𝑡𝑎𝑖2
├༒ᰰຼ ✎ ${prefix}𝑝𝑎𝑐𝑘
├༒ᰰຼ ✎ ${prefix}𝑝𝑎𝑐𝑘2
├༒ᰰຼ ✎ ${prefix}𝑝𝑎𝑐𝑘3
├༒ᰰຼ ✎ ${prefix}𝑣𝑖𝑑𝑒𝑜𝑥𝑥𝑥
├༒ᰰຼ ✎ ${prefix}𝑣𝑖𝑑𝑒𝑜𝑥𝑥𝑥𝑙𝑒𝑠𝑏𝑖
├༒ᰰຼ ✎ ${prefix}𝑝𝑜𝑟𝑛𝑜𝑙𝑒𝑠𝑏𝑖𝑎𝑛𝑎𝑣𝑖𝑑
├༒ᰰຼ ✎ ${prefix}𝑣𝑖𝑑𝑒𝑜𝑙𝑒𝑠𝑏𝑖𝑥𝑥𝑥
├༒ᰰຼ ✎ ${prefix}𝑝𝑜𝑟𝑛𝑜
├༒ᰰຼ ✎ ${prefix}𝑙𝑒𝑤𝑑
├༒ᰰຼ ✎ ${prefix}𝑓𝑒𝑒𝑑
├༒ᰰຼ ✎ ${prefix}𝑔𝑎𝑠𝑚
├༒ᰰຼ ✎ ${prefix}𝑎𝑛𝑎𝑙	    	
├༒ᰰຼ ✎ ${prefix}ℎ𝑜𝑙𝑜	    	
├༒ᰰຼ ✎ ${prefix}𝑡𝑖𝑡𝑠	    	
├༒ᰰຼ ✎ ${prefix}𝑘𝑢𝑛𝑖
├༒ᰰຼ ✎ ${prefix}𝑘𝑖𝑠𝑠
├༒ᰰຼ ✎ ${prefix}𝑒𝑟𝑜𝑘
├༒ᰰຼ ✎ ${prefix}𝑠𝑚𝑢𝑔
├༒ᰰຼ ✎ ${prefix}𝑠𝑜𝑙𝑜𝑔
├༒ᰰຼ ✎ ${prefix}𝑓𝑒𝑒𝑡𝑔
├༒ᰰຼ ✎ ${prefix}𝑙𝑒𝑤𝑑𝑘    
├༒ᰰຼ ✎ ${prefix}𝑓𝑒𝑚𝑑𝑜𝑚
├༒ᰰຼ ✎ ${prefix}𝑐𝑢𝑑𝑑𝑙𝑒
├༒ᰰຼ ✎ ${prefix}𝑒𝑟𝑜𝑦𝑢𝑟𝑖
├༒ᰰຼ ✎ ${prefix}𝑐𝑢𝑚	    
├༒ᰰຼ ✎ ${prefix}𝑏𝑙𝑜𝑤𝑗𝑜𝑏
├༒ᰰຼ ✎ ${prefix}ℎ𝑜𝑙𝑜𝑒𝑟𝑜
├༒ᰰຼ ✎ ${prefix}𝑒𝑟𝑜𝑘𝑒𝑚𝑜
├༒ᰰຼ ✎ ${prefix}𝑓𝑜𝑥_𝑔𝑖𝑟𝑙
├༒ᰰຼ ✎ ${prefix}𝑓𝑢𝑡𝑎𝑛𝑎𝑟𝑖
├༒ᰰຼ ✎ ${prefix}𝑤𝑎𝑙𝑙𝑝𝑎𝑝𝑒𝑟	   
╚═══════☆♡☆═══════╝

	
╭─╮─᤻─᳒─᤻᳒᯽⃟ᰳᰬᰶ┈*⛩️ ⃐𝑅𝐴𝑁𝐷𝑂𝑊*️⃟ᬽ፝֟━*
╔═══════☆♡☆═══════╗
├༒ᰰຼ ✎ ${prefix}𝑚𝑒𝑚𝑒𝑠
├༒ᰰຼ ✎ ${prefix}ℎ𝑜𝑟𝑛𝑦
├༒ᰰຼ ✎ ${prefix}𝑠𝑖𝑚𝑝
├༒ᰰຼ ✎ ${prefix}𝑙𝑜𝑙𝑖𝑐𝑒
├༒ᰰຼ ✎ ${prefix}𝑐𝑜𝑚𝑒𝑛𝑡𝑎𝑟
├༒ᰰຼ ✎ ${prefix}𝑐𝑜𝑚𝑚𝑒𝑛𝑡
├༒ᰰຼ ✎ ${prefix}𝑙𝑜𝑙𝑖
├༒ᰰຼ ✎ ${prefix}𝑙𝑜𝑙𝑖𝑣𝑖𝑑
├༒ᰰຼ ✎ ${prefix}𝑛𝑒𝑘𝑜
├༒ᰰຼ ✎ ${prefix}𝑤𝑎𝑖𝑓𝑢	
├༒ᰰຼ ✎ ${prefix}𝑏𝑙𝑎𝑐𝑘𝑝𝑖𝑛𝑘
├༒ᰰຼ ✎ ${prefix}𝑛𝑎𝑣𝑖𝑑𝑎𝑑
├༒ᰰຼ ✎ ${prefix}𝑎𝑘𝑖𝑟𝑎
├༒ᰰຼ ✎ ${prefix}𝑎𝑘𝑖𝑦𝑎𝑚𝑎
├༒ᰰຼ ✎ ${prefix}𝑎𝑛𝑛𝑎
├༒ᰰຼ ✎ ${prefix}𝑎𝑠𝑢𝑛𝑎
├༒ᰰຼ ✎ ${prefix}𝑎𝑦𝑢𝑧𝑎𝑤𝑎
├༒ᰰຼ ✎ ${prefix}𝑏𝑜𝑟𝑢𝑡𝑜
├༒ᰰຼ ✎ ${prefix}𝑐ℎ𝑖ℎ𝑜
├༒ᰰຼ ✎ ${prefix}𝑐ℎ𝑖𝑡𝑜𝑔𝑒
├༒ᰰຼ ✎ ${prefix}𝑑𝑒𝑖𝑑𝑎𝑟𝑎
├༒ᰰຼ ✎ ${prefix}𝑒𝑟𝑧𝑎
├༒ᰰຼ ✎ ${prefix}𝑒𝑙𝑎𝑖𝑛𝑎
├༒ᰰຼ ✎ ${prefix}𝑒𝑏𝑎
├༒ᰰຼ ✎ ${prefix}𝑒𝑚𝑖𝑙𝑖𝑎
├༒ᰰຼ ✎ ${prefix}ℎ𝑒𝑠𝑡𝑖𝑎
├༒ᰰຼ ✎ ${prefix}ℎ𝑖𝑛𝑎𝑡𝑎
├༒ᰰຼ ✎ ${prefix}𝑖𝑛𝑜𝑟𝑖
├༒ᰰຼ ✎ ${prefix}𝑖𝑠𝑢𝑧𝑢
├༒ᰰຼ ✎ ${prefix}𝑖𝑡𝑎𝑐ℎ𝑖
├༒ᰰຼ ✎ ${prefix}𝑖𝑡𝑜𝑟𝑖
├༒ᰰຼ ✎ ${prefix}𝑘𝑎𝑔𝑎
├༒ᰰຼ ✎ ${prefix}𝑘𝑎𝑔𝑢𝑟𝑎
├༒ᰰຼ ✎ ${prefix}𝑘𝑎𝑜𝑟𝑖':
├༒ᰰຼ ✎ ${prefix}𝑘𝑒𝑛𝑒𝑘𝑖
├༒ᰰຼ ✎ ${prefix}𝑘𝑜𝑡𝑜𝑟𝑖
├༒ᰰຼ ✎ ${prefix}𝑘𝑢𝑟𝑢𝑚𝑖
├༒ᰰຼ ✎ ${prefix}𝑚𝑎𝑑𝑎𝑟𝑎
├༒ᰰຼ ✎ ${prefix}𝑚𝑖𝑘𝑎𝑠𝑎
├༒ᰰຼ ✎ ${prefix}𝑚𝑖𝑘𝑢
├༒ᰰຼ ✎ ${prefix}𝑚𝑖𝑛𝑎𝑡𝑜
├༒ᰰຼ ✎ ${prefix}𝑛𝑎𝑟𝑢𝑡𝑜
├༒ᰰຼ ✎ ${prefix}𝑛𝑒𝑧𝑢𝑘𝑜
├༒ᰰຼ ✎ ${prefix}𝑠𝑎𝑔𝑖𝑟𝑖
├༒ᰰຼ ✎ ${prefix}𝑠𝑎𝑠𝑢𝑘𝑒
├༒ᰰຼ ✎ ${prefix}𝑠𝑎𝑘𝑢𝑟𝑎
├༒ᰰຼ ✎ ${prefix}'𝑐𝑜𝑠𝑝𝑙𝑎𝑦
╚═══════☆♡☆═══════╝
             
*╭─╮─᤻─᳒─᤻᳒᯽⃟ᰳᰬᰶ┈*⃐🪙 ＥＣＯＮＯＭＩＡ*️⃟ᬽ፝֟━*
╔═══════☆♡☆═══════╗
├༒ᰰຼ ✎ ${prefix}𝑚𝑖𝑛𝑎𝑟 _(𝑃𝑎𝑟𝑎 𝑚𝑖𝑛𝑎𝑟 𝑒𝑥𝑝)_
├༒ᰰຼ ✎ ${prefix}𝑟𝑜𝑏𝑎𝑟
├༒ᰰຼ ✎ ${prefix}𝑟𝑜𝑏 _(𝑅𝑜𝑏𝑎 𝑒𝑥𝑝 𝑎𝑙𝑔𝑢𝑛 𝑢𝑠𝑢𝑎𝑟𝑖𝑜𝑠)_
├༒ᰰຼ ✎ ${prefix}𝑐𝑟𝑖𝑚𝑒
├༒ᰰຼ ✎ ${prefix}𝑡𝑟𝑎𝑏𝑎𝑗𝑎𝑟
├༒ᰰຼ ✎ ${prefix}𝑤𝑜𝑟𝑘 _(𝑇𝑟𝑎𝑏𝑎𝑗𝑎 𝑦 𝑔𝑎𝑛𝑎𝑠 𝑒𝑥𝑝)_
├༒ᰰຼ ✎ ${prefix}𝑏𝑢𝑦 _(𝐶𝑜𝑚𝑝𝑟𝑎𝑟 𝑚𝑎𝑠 𝑑𝑖𝑎𝑚𝑎𝑛𝑡𝑒𝑠 (𝑙𝑖𝑚𝑖𝑡)_
├༒ᰰຼ ✎ ${prefix}𝑏𝑎𝑙
├༒ᰰຼ ✎ ${prefix}𝑏𝑎𝑙𝑎𝑐𝑒 _(𝑑𝑖𝑎𝑚𝑎𝑛𝑡𝑒/𝑒𝑥𝑝 𝑡𝑒𝑛𝑒𝑠)_
├༒ᰰຼ ✎ ${prefix}𝑐𝑙𝑎𝑖𝑚
├༒ᰰຼ _(𝑅𝑒𝑐𝑜𝑔𝑒𝑟 𝑡𝑢 𝑟𝑒𝑐𝑜𝑚𝑝𝑒𝑛𝑠𝑎)_
├༒ᰰຼ ✎ ${prefix}𝑙𝑏
├༒ᰰຼ ✎ ${prefix}𝑙𝑒𝑎𝑑𝑒𝑟𝑏𝑜𝑎𝑟𝑑
├༒ᰰຼ ✎ ${prefix}𝑐𝑜𝑓𝑟𝑒
├༒ᰰຼ ✎ ${prefix}𝑝𝑒𝑟𝑓𝑖𝑙
├༒ᰰຼ ✎ ${prefix}𝑛𝑖𝑣𝑒𝑙
├༒ᰰຼ ✎ ${prefix}𝑙𝑒𝑣𝑒𝑙𝑢𝑝
├༒ᰰຼ ✎ ${prefix}𝑡𝑟𝑎𝑛𝑠𝑓𝑒𝑟𝑖𝑟
├༒ᰰຼ ✎ ${prefix}𝑡𝑟𝑎𝑛𝑠𝑓𝑒𝑟
├༒ᰰຼ ✎ ${prefix}𝑎𝑓𝑘 
╚═══════☆♡☆═══════╝

*╭─╮─᤻─᳒─᤻᳒᯽⃟ᰳᰬᰶ┈*⃐👽ＳＴＩＣＫＥＲ*️⃟ᬽ፝֟━*
╔═══════☆♡☆═══════╗
├ *✧･ﾟ: *✧･ﾟ:*✧･ﾟ: *✧･ﾟ:*✧･ﾟ: *✧･ﾟ:
├༒ᰰຼ ✎ ${prefix}𝑠
├༒ᰰຼ ✎ ${prefix}𝑠𝑡𝑖𝑐𝑘𝑒𝑟 
├༒ᰰຼ ✎ ${prefix}𝑤𝑚
├༒ᰰຼ ✎ ${prefix}𝑎𝑡𝑡𝑝
├༒ᰰຼ ✎ ${prefix}𝑞𝑐
├༒ᰰຼ ✎ ${prefix}𝑒𝑚𝑜𝑗𝑖𝑚𝑖𝑥
╚═══════☆♡☆═══════╝

*╭─╮─᤻─᳒─᤻᳒᯽⃟ᰳᰬᰶ┈*⃐👑ＯＷＮＥＲ*️⃟ᬽ፝֟━*
╔═══════☆♡☆═══════╗
├༒ᰰຼ ✎ ${prefix}𝑎𝑛𝑡𝑖𝑐𝑎𝑙𝑙 _(𝑜𝑛/𝑜𝑓𝑓)_
├༒ᰰຼ ✎ ${prefix}𝑎𝑛𝑡𝑖𝑙𝑙𝑎𝑚𝑎𝑑𝑎 _(𝑜𝑛/𝑜𝑓𝑓)_
├༒ᰰຼ ✎ ${prefix}𝑎𝑛𝑡𝑖𝑝𝑣 _(𝑜𝑛/𝑜𝑓𝑓)_
├༒ᰰຼ ✎ ${prefix}𝑎𝑛𝑡𝑖𝑝𝑟𝑖𝑣𝑎𝑑𝑜 _(𝑜𝑛/𝑜𝑓𝑓)_
├༒ᰰຼ ✎ ${prefix}𝑎𝑢𝑡𝑜𝑟𝑒𝑎𝑑 _(𝑜𝑛/𝑜𝑓𝑓)_
├༒ᰰຼ ✎ ${prefix}𝑚𝑜𝑑𝑜𝑗𝑎𝑑𝑖𝑏𝑜𝑡 _(𝑜𝑛/𝑜𝑓𝑓)_
├༒ᰰຼ ✎ ${prefix}𝑎ñ𝑎𝑑𝑖𝑟𝑑𝑖𝑎𝑚𝑎𝑛𝑡𝑒𝑠 _(@𝑡𝑎𝑔)_
├༒ᰰຼ ✎ ${prefix}𝑎𝑑𝑑𝑙𝑖𝑚𝑖𝑡 _(@𝑡𝑎𝑔)_
├༒ᰰຼ ✎ ${prefix}𝑑𝑎𝑟𝑑𝑖𝑎𝑚𝑎𝑛𝑡𝑒𝑠 _(@𝑡𝑎𝑔)_
├༒ᰰຼ ✎ ${prefix}𝑎ñ𝑎𝑑𝑖𝑟𝑥𝑝 _(@𝑡𝑎𝑔)_
├༒ᰰຼ ✎ ${prefix}𝑎𝑑𝑑𝑥𝑝 _(@𝑡𝑎𝑔)_
├༒ᰰຼ ✎ ${prefix}𝑏𝑎𝑛𝑢𝑠𝑒𝑟 _(@𝑡𝑎𝑔)_
├༒ᰰຼ ✎ ${prefix}𝑢𝑛𝑏𝑎𝑛𝑢𝑠𝑒𝑟 _(@𝑡𝑎𝑔)_
├༒ᰰຼ ✎ ${prefix}𝑎𝑢𝑡𝑜𝑎𝑑𝑚𝑖𝑛 
├༒ᰰຼ ✎ ${prefix}𝑛𝑢𝑒𝑣𝑜𝑛𝑜𝑚𝑏𝑟𝑒
├༒ᰰຼ ✎ ${prefix}𝑏𝑜𝑡𝑛𝑎𝑚𝑒 _(𝑐𝑎𝑚𝑏𝑖𝑎𝑟 𝑒𝑙 𝑛𝑎𝑚𝑒 𝑑𝑒𝑙 𝑏𝑜𝑡)_
├༒ᰰຼ ✎ ${prefix}𝑛𝑢𝑒𝑣𝑎𝑓𝑜𝑡𝑜
├༒ᰰຼ ✎ ${prefix}𝑠𝑒𝑝𝑝𝑏𝑜𝑡
├༒ᰰຼ ✎ ${prefix}𝑓𝑜𝑡𝑜𝑏𝑜𝑡 _(𝑐𝑎𝑚𝑏𝑖𝑎𝑟 𝑙𝑎 𝑓𝑜𝑡𝑜 𝑑𝑒𝑙 𝑏𝑜𝑡)_
├༒ᰰຼ ✎ ${prefix}𝑏𝑐 (𝐷𝑖𝑓𝑢𝑠𝑖𝑜𝑛 𝑎 𝑡𝑜𝑑𝑜𝑠 𝑙𝑜𝑠 𝑐ℎ𝑎𝑡)
├༒ᰰຼ ✎ ${prefix}𝑏𝑐𝑔𝑐 (𝐷𝑖𝑓𝑢𝑠𝑖𝑜𝑛 𝑠𝑜𝑙𝑜 𝑎 𝑔𝑟𝑢𝑝𝑜𝑠)
├༒ᰰຼ ✎ ${prefix}𝑠𝑒𝑡𝑝𝑝 (𝐶𝑎𝑚𝑏𝑖𝑎 𝑙𝑎 𝑓𝑜𝑡𝑜 𝑑𝑒𝑙 𝑏𝑜𝑡) 
├༒ᰰຼ ✎ ${prefix}𝑝𝑢𝑏𝑙𝑖𝑐 (𝑀𝑜𝑑𝑜 𝑝𝑢𝑏𝑙𝑖𝑐𝑜) 
├༒ᰰຼ ✎ ${prefix}𝑝𝑟𝑖𝑣𝑎𝑑𝑜 (𝑀𝑜𝑑𝑜 𝑝𝑟𝑖𝑣𝑎𝑑𝑜) 
├༒ᰰຼ ✎ ${prefix}𝑔𝑒𝑡𝑐𝑎𝑠𝑒
├༒ᰰຼ ✎ ${prefix}𝑓𝑒𝑡𝑐ℎ
├༒ᰰຼ ✎ ${prefix}𝑢𝑝𝑑𝑎𝑡𝑒
├༒ᰰຼ ✎ ${prefix}𝑟𝑒𝑠𝑡𝑎𝑟𝑡 
├༒ᰰຼ ✎ ${prefix}𝑟𝑒𝑖𝑛𝑖𝑐𝑖𝑎𝑟
├༒ᰰຼ ✎ $ 
├༒ᰰຼ ✎ >
├༒ᰰຼ ✎ => 
╚═══════☆♡☆═══════╝`
conn.sendMessage(m.chat, { text: menu,  
contextInfo:{  
forwardedNewsletterMessageInfo: { 
newsletterJid: '120363283921434745@newsletter', 
serverMessageId: '', 
newsletterName: 'Team Nakano' },
forwardingScore: 9999999,  
isForwarded: true,   
mentionedJid:[sender, numBot],  
"externalAdReply": {  
"showAdAttribution": true,  
"renderLargerThumbnail": true,  
"title": wm,   
"containsAutoReply": true,  
"mediaType": 1,   
"thumbnail": imagen2, 
sourceUrl: `${pickRandom([nna, nn, md, yt])}`
}}}, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100}) 
}

if (command == 'nuevo' || command == 'extreno') {
conn.sendMessage(m.chat, { text: lenguaje.menu.text15(vs), contextInfo:{forwardedNewsletterMessageInfo: { newsletterJid: '120363283921434745@newsletter', serverMessageId: '', newsletterName: 'Team Nakano💞' }, mentions: [sender], forwardingScore: 9999999, isForwarded: true, "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "title": ` ${wm}`, "body": ` ${vs}`, "previewType": "PHOTO", thumbnail: imagen1, sourceUrl: `${pickRandom([nna, nn, md, yt])}`}}}, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})}

if (command == 'reglas') {
conn.sendMessage(m.chat, { text: lenguaje.menu.text16, contextInfo:{forwardedNewsletterMessageInfo: { newsletterJid: '120363283921434745@newsletter', serverMessageId: '', newsletterName: 'Team Nakano💞' }, mentions: [sender], forwardingScore: 9999999, isForwarded: true, "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "title": ` ${wm}`, "body": ` ${vs}`, "previewType": "PHOTO", thumbnail: imagen1, sourceUrl: `${pickRandom([nna, nn, md, yt])}`}}}, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})}}

module.exports = { menu }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
