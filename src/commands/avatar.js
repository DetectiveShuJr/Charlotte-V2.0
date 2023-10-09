module.exports = {
    name: 'avatar',
    Description: 'fun little gif command',
    execute(message, args1) {
        let mention = message.mentions.users.first()  || message.guild.members.cache.find((p) =>
    p.user.username.includes(args1[0]))  || message.guild.members.cache.find((p) =>
    p.user.username.toUpperCase().includes(args1[0])) || message.guild.members.cache.find((p) =>
    p.user.username.toLowerCase().includes(args1[0])) || message.guild.members.cache.find((p) =>
    p.user.username === args1[0]) || message.guild.members.cache.find((p) =>
    p.user.username.toUpperCase() === args1[0]) || message.guild.members.cache.find((p) =>
    p.user.username.toLowerCase() === args1[0])
    if (mention == null || mention == message.author.id){
        const Discord = require('discord.js');
        const nomEmbed = new Discord.MessageEmbed()
        .setColor('#77ADFF')
        .setAuthor(message.author.username + ' avatar ' , message.author.displayAvatarURL())
        .setImage(message.author.avatarURL() + '?size=512')

        message.channel.send(nomEmbed);
        }else{
            if(mention == message.author) return
                const Discord = require('discord.js');
                const nomEmbed = new Discord.MessageEmbed()
                .setColor('#77ADFF')
                .setAuthor(mention.username + ' avatar ' , mention.displayAvatarURL())
                .setImage(mention.avatarURL() + '?size=512')

        message.channel.send(nomEmbed);
        console.log(nomEmbed);
        }
    }
}

module.exports.config = {
    name: "avatar",
    description: "Shows the pfp of guild members",
    usage: "Fs!Avatar",
    accessableby: "Anyone"
}