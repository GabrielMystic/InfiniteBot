import fs from 'fs'
import { mediafiredl } from '@bochilteam/scraper'
let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) throw `${lenguajeGB['smsAvisoMG']()}ððððððð ðð ððððžðūð ððžðððŋð ðŋð ðððŋððžðððð.\n\nððððð ðž ððžðððŋ ðððŋððžðððð ðððð.`
try {
let res = await mediafiredl(args[0])
let { url, url2, filename, ext, aploud, filesize, filesizeH } = res
let caption = `
${eg}
â  *${if} ${vs}*
ââââââââââââââââââ
â ðŦ ðððð―ðð | ððžðð
â ${filename}
ââââââââââââââââââ
â ðŠ ðððð |  ðððð
â ${filesizeH}
ââââââââââââââââââ
â ð ðððð | ðððð
â ${ext}`.trim()
conn.reply(m.chat, caption, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: 'ððŧðģðķðŧðķððē-ððžð | ððŪðŊðŋðķðēðđ',
body: 'Super Bot WhatsApp',         
previewType: 0, thumbnail: fs.readFileSync("./media/menus/Menu3.jpg"),
sourceUrl: `https://github.com/GabrielMystic/InfiniteBot`}}})
  
let info = `ððžððð ðž 150 ðð― ðð ððððð―ðð ððð ðð ðð ððððð.

ððððžððð ðððžð 150 ðð― ððžð ððð ð―ð ðððð.`.trim()  
await conn.sendHydrated(m.chat, info, wm, null, ig, 'ððĢðĻðĐððð§ððĒ', null, null, [
['ðððĢðŠ ðŋððĻððð§ðððĻ ð', '#descargasmenu'],
['ðððĢðŠ ðūðĪðĒðĨðĄððĐðĪ | ððŠðĄðĄ ðððĢðŠ âĻ', '.allmenu'],
['ððĪðĄðŦðð§ ððĄ ðððĢðŠĖ | ð―ððð  ðĐðĪ ðððĢðŠ âïļ', '/menu']
], m,)  
  
conn.sendFile(m.chat, url, filename, '', m, null, { mimetype: ext, asDocument: true })
} catch (e) { 
m.reply(`${lenguajeGB['smsAvisoFG']()}ððððððž ðž ðððððððžð. ðŋðð―ð ðŋð ððð ðð ððððžðūð ððžðððŋð ðŋð ðððŋððžðððð.
ððððžðð ððð ðžððžðð. ðððð ð―ð ðž ððžðððŋ ðððŋððžðððð ðððð.`)
console.log(e)
}}
handler.help = ['mediafire'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(mediafire|mediafiredl|dlmediafire)$/i
handler.limit = 3
handler.exp = 100
export default handler
