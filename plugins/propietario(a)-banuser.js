let handler = async (m, { conn, text, command, usedPrefix }) => {
if (!text) throw `${mg}  βπππππππ§πΌπ₯ π πΌππππππ ππΌππΌ π½πΌπππΌπ.\n|nπππππππ\n*${usedPrefix + command} @tag*`
let who
if (m.isGroup) who = m.mentionedJid[0]
else who = m.chat
if (!who) throw `${mg} βππ§ππ€π¨ππ§ππ₯ π ππππ¨πππ‘ π£ππ₯π πππ‘πππ₯.\n\nπππππππ\n*${usedPrefix + command} @tag*`
let users = global.db.data.users

let username = conn.getName(who)
conn.reply(m.chat, `${eg}    β π¨π¦π¨ππ₯ππ’ πππ‘ππππ’ β\n\nβRegistrado en blocklist .\nβNo accede a comandos .\nβBOT ignora a :\n      ${username}. \n\n*π°πππ΄: ππ’π§ ${gt}*`, m)
}
handler.help = ['ban']
handler.tags = ['owner']
handler.command = /^ban$/i
handler.group = true
handler.admin = true 
export default handler
