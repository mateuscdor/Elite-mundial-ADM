let handler = async (m, { command, text }) => { 
//if (!text) throw `Lo uso mal, vuelva a intentar.` 

if (command == 'hello') {
 m.reply(`Resultado a`) 
}
  
  if (command == 'vs') {
 m.reply(`Resultado b`) 
}  
    
    if (command == 'welcome') {
 m.reply(`Resultado c`) 
}}
 
handler.help = ['hello', 'vs', 'welcome']
handler.tags = ['ejemplo']
handler.command = ['hello', 'vs', 'welcome'] 

export default  handler
  
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
