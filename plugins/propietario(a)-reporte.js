let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `${mg}ππ¨ππ§πππ ππ‘ π§ππ₯π€π§π©π*\n\n*πππππππ:*\n*${usedPrefix + command} el comando ${usedPrefix}infobot no funciona.*\n\n*ππ§ππ©π π©ππ π§ππ₯π€π§π©*\n\n*πππΌππππ:*\n*${usedPrefix + command} the command ${usedPrefix}owner it does not work.`
if (text.length < 5) throw `${fg} β¨ *MΓ­nimo 5 caracteres para hacer El Reporte.*\n\nβ¨ *Minimum 5 characters to make the Report.*`
if (text.length > 1000) throw `${fg}  *MΓ‘ximo 1000 caracteres para hacer El Reporte.*\n\n *Maximum 1000 characters to make the Report.*`
let teks = `*β­ββ[ *β REPORTE β* ]ββββ¬£*\n*β*\n*β* *ππππππ | ππππ½ππ*\nβ β¦ Wa.me/${m.sender.split`@`[0]}\n*β*\n*β* *πππππΌππ | πππππΌππ*\n*β* β¦ ${text}\n*β*\n*β°βββββββββββββββββββ¬£*`
conn.reply('51938089515@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, {
contextInfo: {
mentionedJid: [m.sender]
}})
  m.reply(`*|β’ ENTREGADO |π¨βπ»|*\n\n*βReporte enviado satisfactoriamente a mi creadorβ*n\n\ *β οΈFalso reporte amerita un castigo.*`)

}

handler.help = ['reporte', 'request'].map(v => v + ' <teks>')
handler.tags = ['info']
handler.exp = 25 
handler.command = /^(report|request|reporte|bugs|bug|report-owner|reportes|reportar)$/i 
export default handler
