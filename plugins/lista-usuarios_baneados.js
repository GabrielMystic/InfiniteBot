let handler = async (m, { conn, isOwner }) => {
let users = Object.entries(global.db.data.users).filter(user => user[1].banned)
let caption = `
*β­β’Β·β| π₯ ππππΌππππ π½πΌπππΌπΏππ : π½πΌππππΏ |βΒ·β’*
β *Total : ${users.length} Usuarios* ${users ? '\n' + users.map(([jid], i) => `
β
β *${i + 1}.* ${conn.getName(jid) == undefined ? 'Sin Usuarios Baneados' : conn.getName(jid)}
β ${isOwner ? '@' + jid.split`@`[0] : jid}\nβ - - - - - - - - -`.trim()).join('\n') : ''}
*β°β’Β·βββββββββββββββββββΒ·β’*`.trim()

await conn.sendButton(m.chat, caption, `*Estos usuarios no puedes Usar a InfiniteBot*\n\n` + wm, null, [ 
['π  π π‘ π¨ βοΈ', '/menu']], m, { mentions: await conn.parseMention(caption) })}

handler.command = /^listabanuser|listausuarios|listbanuser|listabaneados|listban$/i

export default handler
