let handler = async (m, { conn, groupMetadata, usedPrefix, command }) => {
const fkontak = {
	"key": {
    "participants":"0@s.whatsapp.net",
		"remoteJid": "status@broadcast",
		"fromMe": false,
		"id": "Halo"
	},
	"message": {
		"contactMessage": {
			"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
		}
	},
	"participant": "0@s.whatsapp.net"
}

let id = m.chat
conn.vote = conn.vote ? conn.vote : {}
  
if (!(id in conn.vote)) {
return await conn.sendButton(m.chat, `${fg}ππ ππ ππΌ πΎπππΌπΏπ ππππΌπΎπππ ππ ππππ πππππ\n\nππ ππππ ππΌπ π½πππ πΎπππΌπππΏ ππ ππππ πππππ`, `*Si quieres crear una nueva votaciΓ³n usa el comando ${usedPrefix}crearvoto*\n\n*If you want to make a new vote use the command ${usedPrefix}startvoto*\n${wm}`, null, [
['ππ€π‘π«ππ§ ππ‘ πππ£πͺΜ | π½πππ  π©π€ πππ£πͺ βοΈ', '/menu']], fkontak, m)}
  
let isVote = conn.vote[id][1].concat(conn.vote[id][2])
const wasVote = isVote.includes(m.sender)

if (wasVote) { 
return await conn.sendButton(m.chat, `${eg}π₯³ ππΌ ππΌπ ππππΌπΏπ!!\n\nπ πππ ππΌππ πΌππππΌπΏπ πππππΏ!!`, `*Su voto no se cambia una vez que hayas votado.*\n*Your vote is not changed twice*\n\n${wm}`, null, [
['π πππ πππππ | πππ πππππ', '/vervotos'],
['π­ ππππππΌπ πΌ ππππΌπ | ππππππ', `${usedPrefix}pedirayuda β΄οΈ @${conn.getName(m.sender)} *ESTA INVITANDO A QUE SE UNAN A LA VOTACIΓN!!*\n*USEN EL COMANDO ${usedPrefix}vervotos PARA VOTAR!!*\n\n*THEY ARE INVITING YOU TO A VOTE!!*\n*USE THE COMMAND ${usedPrefix}vervotos TO VOTE*`]
], fkontak, m)}
  
if (/up|si/i.test(command)) {
conn.vote[id][1].push(m.sender)
  
} else if (/de|no/i.test(command)) {
conn.vote[id][2].push(m.sender)}
    
let [reason, upvote, devote] = conn.vote[id]
let caption = `*${htjava} πππππΌ πΏπ πππππ : ππππ ππππ ${htjava}*

*USUARIO(A)*
πͺ @${conn.getName(m.sender)}

*MOTIVO β«* ${reason}

*${htjava} πππππ πΌ ππΌπππ : ππππΏ πππππ ${htjava}*
*Total: ${upvote.length}*

${dmenut}
${upvote.map((v, i) => `${dmenub} ${i + 1}.  @${v.split`@`[0]}`).join('\n')}
${dmenuf}

*${htjava} πππππ ππ πΎπππππΌ : πππππ πΌππΌππππ ${htjava}*
*Total: ${devote.length}*

${dmenut}
${devote.map((v, i) => `${dmenub} ${i + 1}.  @${v.split`@`[0]}`).join('\n')}
${dmenuf}`.trim()

await conn.sendButton(m.chat, caption, wm, null, [
['β ππππΌπ πΌ ππΌπππ | ππππππ', `${usedPrefix}upvote`],
['β ππππΌπ ππ πΎπππππΌ | πΏπππππ', `${usedPrefix}devote`]], m, { mentions: conn.parseMention(caption) })}

handler.help = ['upvote', 'devote']
handler.tags = ['vote']
handler.command = /^(up|si|de|no)vote|voto|votar$/i  
handler.group = true
handler.botAdmin = true

export default handler
