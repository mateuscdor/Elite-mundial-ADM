import fs from 'fs'
import fetch from 'node-fetch'
let handler = async (m, {command, conn, text, usedPrefix }) => {
if (!text) throw `${mg}ššš¾ššš½š¼ šš šššš½šš š šššššš\nššššššš\n*${usedPrefix + command} Billie Eilish - Bellyache*\n\nššššš ššš šš¼šš šš ššššš\nššš¼šššš\n*${usedPrefix + command} Billie Eilish - Bellyache*`
try {
if (command == 'play.1') {
conn.reply(m.chat, `${eg}šššššš šš ššššššš šš š¼ššæšš ššš šš¼ššš\n\nšš¼šš š¼ šššššš ššš ššš š¼ššæšš šššš¼šš`, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: 'ā¢š¢šŖš”šš„ | ā¦ŅĶ”Ķā³š»š²š„š¬š°š±ā¢āāĶ”ĶŪŪŪ£š¹',
body: 'BOT GESTOR',         
previewType: 0, thumbnail: fs.readFileSync("./media/menus/Menu3.jpg"),
sourceUrl: `http://wa.me/+51996089079`}}})
  
let res = await fetch("https://api.dhamzxploit.my.id/api/ytplaymp3?text="+text)
let json = await res.json()
conn.sendFile(m.chat, json.result.url, 'error.mp3', null, m, false, { mimetype: 'audio/mp4' })}
if (command == 'play.2') {
conn.reply(m.chat, `${eg}šššššš šš ššššššš šš šššæšš ššš šš¼ššš\n\nšš¼šš š¼ šššššš ššš ššš šššæšš šššš¼šš`, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: 'ā¢š¢šŖš”šš„ | ā¦ŅĶ”Ķā³š»š²š„š¬š°š±ā¢āāĶ”ĶŪŪŪ£š¹',
body: 'BOT GESTOR',         
previewType: 0, thumbnail: fs.readFileSync("./media/menus/Menu3.jpg"),
sourceUrl: `http://wa.me/+51996089079`}}})
  
let res = await fetch("https://api.dhamzxploit.my.id/api/ytplaymp4?text="+text) 
let json = await res.json()
conn.sendFile(m.chat, json.result.url, 'error.mp4', `${wm}`, m)}
}catch(e){
m.reply(`${fg}ššššššš šæš ššššš\nššš š¼šš¼šš`)
console.log(e)
}}
handler.help = ['play.1' , 'play.2'].map(v => v + ' <texto>')
handler.tags = ['downloader']
handler.command = ['play.1', 'play.2']
export default handler
