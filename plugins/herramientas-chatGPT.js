import fetch from 'node-fetch'
let handler = async (m, { text, usedPrefix, command }) => {
if (!text) throw `[β] πππππππ πππΌ πππππΎπππ π πππΌ πππΏππ ππΌππΌ πππΌπ ππΌ ππππΎπππ πΏππ πΎππΌππππ\n\nβ πππππππ πΏπ πππππΎπππππ π πππΏππππ\nβ ${usedPrefix + command} Reflexion sobre la serie Merlina 2022 de netflix\nβ ${usedPrefix + command} Codigo en JS para un juego de cartas`
try {
await conn.sendPresenceUpdate('composing', m.chat)
let tiores = await fetch(`https://api.lolhuman.xyz/api/openai?apikey=${lolkeysapi}&text=${text}&user=user-unique-id`)
let hasil = await tiores.json()
m.reply(`${hasil.result}`.trim())
} catch {
throw `*[β] πππππ, ππππππΌ πΌ πππππππΌπππ*`
}}
handler.command = ['openai', 'chatgpt', 'ia', 'robot']
export default handler
