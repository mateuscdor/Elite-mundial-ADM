let handler = async (m, { conn, text, command, usedPrefix }) => {
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text
else who = m.chat
if (!who) throw `${mg} β’ππππππππ πΌ ππΌ πππππππΌ πππ ππΌ πππ ππππΌπππ(πΌ) πππ.\n\n ππ·π²πΊπ½πΉπΌ:\n*${usedPrefix + command} @tag*`
if (global.prems.includes(who.split`@`[0])) throw `${iig} β¨ ππ ππππΌπππ ππΌ ππ πππ β¨`
global.prems.push(`${who.split`@`[0]}`)
conn.reply(m.chat, `${eg} *β @${who.split`@`[0]} πΌππππΌ ππ ππππΌπππ(πΌ) πππ.* \n\n *βππ ππΌ πππππ πππππππ πΎππ ππ ππ’π§ ${gt}.*`, m, {
contextInfo: {
mentionedJid: [who]
}})}
handler.help = ['addprem <@user>']
handler.tags = ['owner']
handler.command = /^(add|\+)prem$/i
handler.group = true
handler.admin = true
handler.botAdmin = true
export default handler
