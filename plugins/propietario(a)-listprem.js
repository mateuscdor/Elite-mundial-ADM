import fs from 'fs'
let handler = async (m, { conn }) => {
let prem = global.prems.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)

await conn.reply(m.chat, `*β­β[ πππ¦π§π | ππππΌππππ πππ ]ββ¬£*\n*β*\n` + prem.map(v => '*β* β₯ π @' + v.replace(/@.+/, ' π')).join`\n`, m, { contextInfo: { mentionedJid: prem } }) 

}
handler.help = ['premlist']
handler.tags = ['owner']
handler.command = /^(listprem|premlist)$/i

export default handler
