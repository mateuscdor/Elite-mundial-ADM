let handler = async (m, { conn, text, command, usedPrefix }) => {
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text
else who = m.chat
if (!who) throw `${mg} •𝙀𝙏𝙄𝙌𝙐𝙀𝙏𝙀 𝘼 𝙇𝘼 𝙋𝙀𝙍𝙎𝙊𝙉𝘼 𝙌𝙐𝙀 𝙑𝘼 𝙀𝙇𝙄𝙈𝙄𝙉𝘼𝙍 𝘿𝙀 𝙇𝙊𝙎 𝙐𝙎𝙐𝘼𝙍𝙄𝙊𝙎 𝙑𝙄𝙋.\n\n𝙀𝙅𝙀𝙈𝙋𝙇𝙊\n*${usedPrefix + command} @tag*`
if (!global.prems.includes(who.split`@`[0])) throw `${iig} ❗ 𝗘𝗟 𝗨𝗦𝗨𝗔𝗥𝗜𝗢 𝗡𝗢 𝗘𝗦 𝗩𝗜𝗣 ❗`
let index = global.prems.findIndex(v => (v.replace(/[^0-9]/g, '') + '@s.whatsapp.net') === (who.replace(/[^0-9]/g, '') + '@s.whatsapp.net'))
global.prems.splice(index, 1)
conn.reply(m.chat, `${eg} *❌ @${who.split`@`[0]} 𝘼𝙃𝙊𝙍𝘼 𝗡𝗢 𝙀𝙎 𝙐𝙎𝙐𝘼𝙍𝙄𝙊(𝘼) 𝙑𝙄𝙋.* \n\n *➖ 𝙇𝙄𝙈𝙄𝙏𝙀𝙎 𝘾𝙊𝙉 𝗘𝗟 𝗕𝗢𝗧 ${gt}.*`, m, {
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
