/* hecho por https://github.com/GataNina-Li/DIEGO-OFC*/

import MessageType from '@adiwajshing/baileys'

let pajak = 0
let handler = async (m, { conn, text, usedPrefix, command, groupMetadata }) => {
let _user = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender;

let who
if (m.isGroup) who = m.mentionedJid[0]
else who = m.chat
let user = global.db.data.users
if (global.db.data.users[user] == undefined)
if (m.quoted?.sender) m.mentionedJid.push(m.quoted.sender);
if (!m.mentionedJid.length) m.mentionedJid.push(m.sender);
if (!who) throw `${ag}πΏππ½π πΏπ ππππππππΌπ πΌπ ππππΌπππ *@tag*\n\nπππ ππππ ππΌπ πππ ππππ *@tag*`
let txt = text.replace('@' + who.split`@`[0], '').trim()
if (!txt) throw `${ag}πππππππ ππΌ πΎπΌππππΏπΌπΏ πΏπ πππ\n\nπππππ πππ ππππ½ππ ππ πππ`
if (isNaN(txt)) throw `${mg}πππ ππππ½ππππ, ππππ πππππππ πππππππ\n\nππ ππππ½πππ, ππππ πππππ ππππ½πππ`
let xp = parseInt(txt)
let exp = xp
let pjk = Math.ceil(xp * pajak)
exp += pjk 
   
  let gata = `β­β[ πππππππππΎππΌ | πππ β‘]ββ¬£\nβ\nβα¦ *PARA | FOR:*\nβα¦ @${_user.split("@s.whatsapp.net")[0]}\nββββββββββββββββββ\nβα¦ *SE LE AΓADIΓ | NOW YOU HAVE*\nβα¦ *${xp} EXP* β‘\nβ\nβ°βββββββββββββββ¬£`

user[who].exp += xp

await conn.sendMessage(
    m.chat,
    { text: gata, mentions: [_user, m.sender] },
    { quoted: m }
  );
  conn.sendMessage(
    _user,
    {
      text: `*β@${m.sender.split("@")[0]} TE DIO ${xp} DE  EXP*`,
      mentions: [m.sender],
    },
    { quoted: m }
  );
  }

handler.help = ["ddxp [@user]"];
handler.tags = ["xp"];
handler.command = ['aΓ±adirxp', 'aΓ±adirexp', 'aΓ±adirexperiencia', 'darexperiencia', 'darxp', 'darexp'] 
handler.group = true;
handler.rowner = true;
export default handler;



/*import MessageType from '@adiwajshing/baileys'

let pajak = 0
let handler = async (m, { conn, text, usedPrefix, command, groupMetadata }) => {
let who
if (m.isGroup) who = m.mentionedJid[0]
else who = m.chat
  if (global.db.data.users[user] == undefined)

  if (m.quoted?.sender) m.mentionedJid.push(m.quoted.sender)
if (!m.mentionedJid.length) m.mentionedJid.push(m.sender);
   

if (!who) throw `${ag}πΏππ½π πΏπ ππππππππΌπ πΌπ ππππΌπππ *@tag*\n\nπππ ππππ ππΌπ πππ ππππ *@tag*`
let txt = text.replace('@' + who.split`@`[0], '').trim()
if (!txt) throw `${ag}πππππππ ππΌ πΎπΌππππΏπΌπΏ πΏπ πππ\n\nπππππ πππ ππππ½ππ ππ πππ`
if (isNaN(txt)) throw `${mg}πππ ππππ½ππππ, ππππ πππππππ πππππππ\n\nππ ππππ½πππ, ππππ πππππ ππππ½πππ`
let xp = parseInt(txt)
let exp = xp
let pjk = Math.ceil(xp * pajak)
exp += pjk
if (exp < 1) throw `${mg}ππ ππππππ ππππππ πΏπ πππππππππΎππΌ (πππ) ππ *1*\n\nπππ πππππππ ππππ½ππ ππππ πππππππππΎπ (πππ) ππ *1*`
let taguser = await conn.getName(m.sender)
let user = global.db.data.users
user[who].exp += xp
let gata = `β­β[ πππππππππΎππΌ | πππ β‘]ββ¬£\nβ\nβα¦ *PARA | FOR:*\nβα¦ ${taguser}\nββββββββββββββββββ\nβα¦ *SE LE AΓADIΓ | NOW YOU HAVE*\nβα¦ *${xp} EXP* β‘\nβ\nβ°βββββββββββββββ¬£`
m.reply(gata)}
handler.help = ["ddxp  [@user]"]
handler.tags = ['xp']
handler.command = ['aΓ±adirxp', 'aΓ±adirexp', 'aΓ±adirexperiencia', 'darexperiencia', 'darxp', 'darexp'] 
handler.group = true
handler.rowner = true
export default handler*/
