let media = './media/menus/Menuvid2.mp4'
let handler = async (m, { conn, command }) => {
let str = `
π π½ππππππππΏπ(πΌ) πΌ ππΌπ πΎπππππΌπ ππππΎππΌπππ
π ππππΎπππ ππ πππ πππππΎππΌπ πΌπΎπΎπππππ
βββββββββββββββββ
β *GITHUB*
*${md}*
βββββββββββββββββ
β *INSTAGRAM - ASISTENCIA*
*${ig}*
βββββββββββββββββ
β *YOUTUBE*
*${yt}*
βββββββββββββββββ
β *FACEBOOK*
*${fb}*
βββββββββββββββββ
*Si tienen dudas, sugerencias, o preguntas solo escriban por Instagram.*\n
*If you have doubts, suggestions or questions just write on Instagram.*
`.trim()
  
conn.sendHydrated(m.chat, str, wm, media, 'https://github.com/GabrielMystic/InfiniteBot', 'ππ»π³πΆπ»πΆππ²-ππΌπ', null, null, [
['πΎπ§ππππ€π§ | πΎπ§πππ©π€π§ β¨', '#owner'],
['ππ€π‘π«ππ§ ππ‘ πππ£πͺΜ | π½πππ  π©π€ πππ£πͺ βοΈ', '/menu']
], m,)}

handler.command = /^cuentasoficiales|infiniteig|cuentasib|cuentaib|accounts|infiniteaccounts|account|iginfinite|cuentasdeinfinite|cuentasdeinfinitebot|cuentainfinitebot|cuentasinfinitebot$/i
handler.exp = 35
export default handler
