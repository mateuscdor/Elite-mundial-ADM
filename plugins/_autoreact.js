let handler = async (m, { conn }) => {
let emot = pickRandom([ "π₯΅", "π", "π", "π»", "πΌ", "π€©", "π₯°", "π", "π", "π₯³", "π", "π³", "π€«", "π₯΄", "π€§", "π€", "π«’", "π€«", "π€", "π₯Ά", "π", "β‘οΈ", "π", "π", "π", "π", "π€π»", "ππ»", "πͺπ»", "ππ»", "π", "β€οΈ", "π§‘", "π", "π", "π", "π", "π€", "π€", "π€", "π", "β£οΈ", "π", "π", "π", "π", "π", "π", "π", "π", "π", "β", "π»", "π₯"])
conn.sendMessage(m.chat, {
react: {
text: emot,
key: m.key
    	}
    })	
}
handler.customPrefix = /^(a|ghost|pogo|pokemon|pokΓ©mon|jhonnier|aya|f|genial|y|ok|sip|nop|ya|bro|va|que|cfm|xd|cc|shiny|i|o|u)$/i
handler.command = new RegExp

export default handler
function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]} 
