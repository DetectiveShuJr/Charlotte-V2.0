module.exports = {
    name: 'tell',
    Description: 'fun little gif command',
    execute(message, args) {
    let curse = message.content === 'FUCK' || 'Fuck' || 'fuck' || 'F*ck' || 'f*ck' || 'FU' || 'F U' || 'F u' || 'Fu' || 'fu' || 'f u' || 'BITCH' || 'Bitch' || 'bitch' || 'B*TCH' || 'B*tch' || 'b*tch' || 'MOTHERFUCKER' || 'Motherfucker' || 'motherfucker' || 'MOTHERF*CKER' || 'Motherf*cker' || 'motherf*cker' 
        if(message.content.includes(curse)) return message.reply('NO CURSE WORKD! I\'m not your servant!')
            let mention = message.mentions.users.first()  || message.guild.members.cache.find((p) =>
                p.user.username.includes(args1[0]))  || message.guild.members.cache.find((p) =>
                p.user.username.toUpperCase().includes(args1[0])) || message.guild.members.cache.find((p) =>
                p.user.username.toLowerCase().includes(args1[0])) || message.guild.members.cache.find((p) =>
                p.user.username === args1[0]) || message.guild.members.cache.find((p) =>
                p.user.username.toUpperCase() === args1[0]) || message.guild.members.cache.find((p) =>
                p.user.username.toLowerCase() === args1[0])
    if (mention == null || mention == message.author.id) { return; }
        message.delete();
        mentionMessage = message.content.slice (8);
        mention.send(mentionMessage);
        message.channel.send("All done!");
    }
}

module.exports.config = {
    name: "tell",
    description: "Tell will send any user you mentioned (only one mention at a time) your message through DM",
    usage: "Fs!tell @USER",
    accessableby: "Members",
    aliases: []
}