import yts from 'yt-search'
let handler = async (m, { conn, command, text, usedPrefix }) => {
	
	if (!text) throw `${lenguajeGB['smsAvisoMG']()}πππΎπππ½πΌ ππ ππππ½ππ π ππππππ\nπππππππ\n*${usedPrefix + command} Billie Eilish - Bellyache*\n\nπππππ πππ ππΌππ ππ πππππ\nπππΌππππ\n*${usedPrefix + command} Billie Eilish - Bellyache*`
	let vid = (await yts(text)).all[0]
	if (!vid) throw `Error, intente del nuevo`
	let { title, description, thumbnail, videoId, durationH, publishedTime, viewH, ago, url } = vid
	//const url = 'https://www.youtube.com/watch?v=' + videoId<
	let play = `*π© π  πͺ β§βββ ${vs} ββββ§ π© π  πͺ*
ΰ¦ *TΓTULO | TITLE:* 
Β» ${title}
οΉοΉοΉοΉοΉοΉοΉοΉοΉοΉοΉοΉ
ΰ¦ *DESCRIPCIΓN | DESCRIPTION:*
Β» ${description}
οΉοΉοΉοΉοΉοΉοΉοΉοΉοΉοΉοΉ
ΰ¦ *DURACION | DURATION:*
Β» ${durationH}
οΉοΉοΉοΉοΉοΉοΉοΉοΉοΉοΉοΉ
ΰ¦ *VISTAS| VIEWS*:
Β» ${viewH}
οΉοΉοΉοΉοΉοΉοΉοΉοΉοΉοΉοΉ
ΰ¦ *PUBLICADO | PUBLISHED:* 
Β» ${publishedTime}

*π© π  πͺ β§βββ ${vs} ββββ§ π© π  πͺ*`
 await conn.sendButton(m.chat, play, gt, thumbnail, [
    ['π  π π¨ π π π’', `${usedPrefix}fgmp3 ${url}`],
    ['π  π© π π π π’', `${usedPrefix}fgmp4 ${url}`],
    ['π  π  π π¦   π₯ π π¦ π¨ π π§ π π π’ π¦', `${usedPrefix}ytsearch ${text}`]
  ], m, nn)
}
handler.help = ['play4']
handler.tags = ['downloader']
handler.command = ['play4', 'playvid']
handler.limit = 1
handler.level = 3
export default handler
