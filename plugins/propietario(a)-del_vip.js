let handler = async (m, { conn, text, command, usedPrefix }) => {
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text
else who = m.chat
if (!who) throw `${mg} β’ππππππππ πΌ ππΌ πππππππΌ πππ ππΌ πππππππΌπ πΏπ πππ ππππΌππππ πππ.\n\nπππππππ\n*${usedPrefix + command} @tag*`
if (!global.prems.includes(who.split`@`[0])) throw `${iig} β ππ π¨π¦π¨ππ₯ππ’ π‘π’ ππ¦ π©ππ£ β`
let index = global.prems.findIndex(v => (v.replace(/[^0-9]/g, '') + '@s.whatsapp.net') === (who.replace(/[^0-9]/g, '') + '@s.whatsapp.net'))
global.prems.splice(index, 1)
conn.reply(m.chat, `${eg} *β @${who.split`@`[0]} πΌππππΌ π‘π’ ππ ππππΌπππ(πΌ) πππ.* \n\n *β πππππππ πΎππ ππ ππ’π§ ${gt}.*`, m, {
contextInfo: {
mentionedJid: [who]
}})}
handler.help = ['delprem <@user>']
handler.tags = ['owner']
handler.command = /^(remove|-|del)prem$/i
handler.group = true
handler.admin = true
handler.botAdmin = true
export default handler
