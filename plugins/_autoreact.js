let handler = async (m, { conn }) => {
let emot = pickRandom([ "🥵", "😎", "😘", "😻", "😼", "🤩", "🥰", "😘", "😊", "🥳", "😏", "😳", "🤫", "🥴", "🤧", "🤑", "🫢", "🤫", "🤖", "🥶", "😚", "⚡️", "🌝", "🌚", "🌛", "🌜", "🤝🏻", "👊🏻", "💪🏻", "🖕🏻", "👑", "❤️", "🧡", "💛", "💚", "💙", "💜", "🖤", "🤍", "🤎", "💔", "❣️", "💕", "💞", "💓", "💗", "💖", "💘", "💝", "💟", "🛐", "✅", "👻", "🔥"])
conn.sendMessage(m.chat, {
react: {
text: emot,
key: m.key
    	}
    })	
}
handler.customPrefix = /^(a|ghost|pogo|pokemon|pokémon|jhonnier|aya|f|genial|y|ok|sip|nop|ya|bro|va|que|cfm|xd|cc|shiny|i|o|u)$/i
handler.command = new RegExp

export default handler
function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]} 
