let handler = async (m, { conn, text, command, usedPrefix }) => {
if (!text) throw `${mg}❗ 𝗘𝘁𝗶𝗾𝘂𝗲𝘁𝗮 𝗮 𝘂𝗻 𝘂𝘀𝘂𝗮𝗿𝗶𝗼 𝗽𝗮𝗿𝗮 𝗱𝗲𝘀𝗯𝗮𝗻𝗲𝗮𝗿.\n 𝗘𝗷𝗲𝗺𝗽𝗹𝗼:\n *${usedPrefix + command} @tag*`
let who
if (m.isGroup) who = m.mentionedJid[0]
else who = m.chat
if (!who) throw `${mg}❗𝗘𝘁𝗶𝗾𝘂𝗲𝘁𝗮 𝗮 𝘂𝗻 𝘂𝘀𝘂𝗮𝗿𝗶𝗼 𝗽𝗮𝗿𝗮 𝗱𝗲𝘀𝗯𝗮𝗻𝗲𝗮𝗿.\n𝙀𝗷𝗲𝗺𝗽𝗹𝗼:\n *${usedPrefix + command} @tag*`
let users = global.db.data.users

let username = conn.getName(who)
conn.reply(m.chat, `${eg}❗ 𝗨𝗦𝗨𝗔𝗥𝗜𝗢 𝗗𝗘𝗦𝗕𝗔𝗡𝗘𝗔𝗗𝗢 ❗\n\n *✓ Acceso al BOT .*\n *✓ Grupos y chat pv.*\n *✓ Disfrute del BOT:*\n      ${username}. \n\n*𝙰𝚃𝚃𝙴: 𝗕𝗢𝗧 ${gt}*`, m)
}

handler.help = ['unban']
handler.tags = ['owner']
handler.command = /^unban$/i
handler.group = true
handler.admin = true
export default handler
