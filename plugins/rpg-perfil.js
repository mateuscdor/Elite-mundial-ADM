import { createHash } from 'crypto'
import PhoneNumber from 'awesome-phonenumber'
import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix }) => {
let pp = 'https://www.playerone.vg/wp-content/uploads/2021/06/pokemon-go-fest-2021-incursiones-legendarios3-1.jpg'
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
try {
pp = await conn.getProfilePicture(who)
} catch (e) {

} finally {
let { name, limit, lastclaim, registered, regTime, age } = global.db.data.users[who]
let username = conn.getName(who)
let prem = global.prems.includes(who.split`@`[0])
let sn = createHash('md5').update(who).digest('hex')
let str = `*π½πΎπΌπ±ππ΄:* ${username} ${registered ? '(' + name + ') ': ''}
*π½ππΌπ΄ππΎ:* ${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}
*π»πΈπ½πΊ:* wa.me/${who.split`@`[0]}${registered ? '\n*π΄π³π°π³:* ' + age + ' aΓ±os' : ''}
*π»πΈπΌπΈππ΄:* ${limit} πππΎπ
*ππ΄πΆπΈππππ°π³πΎ:* ${registered ? 'Si': 'No'}
*πΏππ΄πΌπΈππΌ:* ${prem ? 'Si' : 'No'}
*π½ππΌπ΄ππΎ π³π΄ ππ΄ππΈπ΄:* 
${sn}`
conn.sendButton(m.chat, str, author, await(await fetch(pp)).buffer(), [['π', '/xpgr']], m)
}}
handler.help = ['profile [@user]']
handler.tags = ['xp']
handler.command = /^perfil|profile?$/i
export default handler
