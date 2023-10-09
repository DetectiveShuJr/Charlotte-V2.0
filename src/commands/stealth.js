module.exports = {
    name: 'stealth',
    Description: 'fun little gif command',
    execute(message) {
    // let curse = message.content.includes('FUCK') ||message.content.includes('Fuck') ||message.content.includes('fuck') ||message.content.includes('F*ck') ||message.content.includes('f*ck') ||message.content.includes('FU') ||message.content.includes('F U') ||message.content.includes('F u') ||message.content.includes('Fu') ||message.content.includes('fu') ||message.content.includes(('f u')) ||message.content.includes('BITCH') ||message.content.includes('Bitch') ||message.content.includes('bitch') ||message.content.includes('B*TCH') ||message.content.includes('B*tch') ||message.content.includes('b*tch') ||message.content.includes('MOTHERFUCKER') ||message.content.includes('Motherfucker') ||message.content.includes('motherfucker') ||message.content.includes('MOTHERF*CKER') ||message.content.includes('Motherf*cker') ||message.content.includes('motherf*cker') 
    // if(message.content.includes(curse)) return message.reply('NO CURSE WORKD! I\'m not your servant!')
    message.delete();
    copyMessage = message.content.slice (11);
    message.channel.send (copyMessage)
    }
}

module.exports.config = {
    name: "stealth",
    description: "This here is basically a messager command, Charlotte will delete and repeat your message (without the tag like Ayana used to)",
    usage: "Fs!stealth [MESSAGE]",
    accessableby: "Members",
    aliases: []
}