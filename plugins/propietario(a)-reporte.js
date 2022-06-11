let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `${mg}𝙀𝙨𝙘𝙧𝙞𝙗𝙖 𝙚𝙡 𝙧𝙚𝙥𝙤𝙧𝙩𝙚*\n\n*𝙀𝙅𝙀𝙈𝙋𝙇𝙊:*\n*${usedPrefix + command} el comando ${usedPrefix}infobot no funciona.*\n\n*𝙒𝙧𝙞𝙩𝙚 𝙩𝙝𝙚 𝙧𝙚𝙥𝙤𝙧𝙩*\n\n*𝙀𝙓𝘼𝙈𝙋𝙇𝙀:*\n*${usedPrefix + command} the command ${usedPrefix}owner it does not work.`
if (text.length < 5) throw `${fg} ✨ *Mínimo 5 caracteres para hacer El Reporte.*\n\n✨ *Minimum 5 characters to make the Report.*`
if (text.length > 1000) throw `${fg}  *Máximo 1000 caracteres para hacer El Reporte.*\n\n *Maximum 1000 characters to make the Report.*`
let teks = `*╭━━[ *❗ REPORTE ❗* ]━━━⬣*\n*┃*\n*┃* *𝙉𝙐𝙈𝙀𝙍𝙊 | 𝙉𝙐𝙈𝘽𝙀𝙍*\n┃ ✦ Wa.me/${m.sender.split`@`[0]}\n*┃*\n*┃* *𝙈𝙀𝙉𝙎𝘼𝙅𝙀 | 𝙈𝙀𝙎𝙎𝘼𝙂𝙀*\n*┃* ✦ ${text}\n*┃*\n*╰━━━━━━━━━━━━━━━━━━⬣*`
conn.reply('51938089515@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, {
contextInfo: {
mentionedJid: [m.sender]
}})
  m.reply(`*|• ENTREGADO |👨‍💻|*\n\n*❗Reporte enviado satisfactoriamente a mi creador❗*n\n\ *⚠️Falso reporte amerita un castigo.*`)

}

handler.help = ['reporte', 'request'].map(v => v + ' <teks>')
handler.tags = ['info']
handler.exp = 25 
handler.command = /^(report|request|reporte|bugs|bug|report-owner|reportes|reportar)$/i 
export default handler
