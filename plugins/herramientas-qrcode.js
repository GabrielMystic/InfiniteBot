import { toDataURL } from 'qrcode'
let handler = async (m, { text, conn }) => {
if (!text) throw `${mg}πππΎπππ½πΌ ππ πππππ ππΌππΌ πΎππππππππ ππ πΎππΏπππ ππ\n\nπππππ πΌ ππππ ππ πΎππππππ ππππ ππ πΎππΏπ`
conn.sendFile(m.chat, await toDataURL(text.slice(0, 2048), { scale: 8 }), 'qrcode.png', wm, m)
}
handler.help = ['', 'code'].map(v => 'qr' + v + ' <teks>')
handler.tags = ['tools']
handler.command = /^qr(code)?$/i
handler.money = 20
export default handler
