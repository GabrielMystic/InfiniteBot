import { googleImage } from '@bochilteam/scraper'
let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `${lenguajeGB['smsAvisoMG']()}πππ πΏπ ππΌ πππππππππ ππΌππππΌ\n*${usedPrefix + command} Messi*\n\nπππ πππ πΎππππΌππΏ ππππ ππππ\n*${usedPrefix + command} Messi*`
const res = await googleImage(text)
let image = res.getRandom()
let link = image
conn.sendHydrated(m.chat, `π πππ¨πͺπ‘π©πππ€ | πππ¨πͺπ‘π©: ${text}`, `ππ€π€ππ‘π | ${wm}`, link, link, 'βοΈ πππ', null, null, [
['π ππππͺπππ£π©π | πππ­π©', `/imagen ${text}`],
['π πππ£π©ππ§ππ¨π© ', `#pinterest ${text}`],
['βΎοΈ πππ£πͺ', `.menu`],  
], m)
}
handler.help = ['gimage <query>', 'imagen <query>']
handler.tags = ['internet', 'tools']
handler.command = /^(gimage|image|imagen)$/i
handler.exp = 20
export default handler
