let handler = async (m, { conn, participants, usedPrefix, command }) => {
let BANtext = `${mg}ππππππππ πΌ πΌππππππ ππΌππΌ π½πΌπππΌπ\nπππππππ:\n*${usedPrefix + command} @${global.suittag}*\nππΌπ πππππππ ππ π½πΌπ\nπππΌππππ\n*${usedPrefix + command} @${global.suittag}*`
if (!m.mentionedJid[0] && !m.quoted) return m.reply(BANtext, m.chat, { mentions: conn.parseMention(BANtext)})
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
else who = m.chat
let users = global.db.data.users
users[who].banned = true
conn.reply(m.chat, `${eg}ππ/ππΌ ππππΌπππ(πΌ) πππ π½πΌπππΌπΏπ(πΌ) π\nππ πππΏππΌ πππΌπ πΌ ${gt}\n\nπππ ππππ ππΌπ π½πΌππππΏ π±\nπΎπΌππππ πππ πππ©ππ½π€π©-ππΏ`, m)
}
handler.command = /^banuser$/i
handler.rowner = true
export default handler
