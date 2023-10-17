module.exports = {
    name: 'nuke',
    Description: 'fun little gif command',
    execute(message, args1) {
    let mention = message.mentions.users.first()  || message.guild.members.cache.find((p) =>
        p.user.username.includes(args1[0]))  || message.guild.members.cache.find((p) =>
        p.user.username.toUpperCase().includes(args1[0])) || message.guild.members.cache.find((p) =>
        p.user.username.toLowerCase().includes(args1[0])) || message.guild.members.cache.find((p) =>
        p.user.username === args1[0]) || message.guild.members.cache.find((p) =>
        p.user.username.toUpperCase() === args1[0]) || message.guild.members.cache.find((p) =>
        p.user.username.toLowerCase() === args1[0])
    let args = message.content.substring(prefix.length).split(" ")
    switch(args[0]){
        case 'nuke':
        number = 13;
        switch(Math.floor (Math.random() * (number - 1 + 1)) + 1){
            case 1:
                nukeImage = 'https://i.ibb.co/gSfkdPR/1.gif'
                break;
            case 2:
                nukeImage = 'https://i.ibb.co/DWbfpRR/2.gif'
                break;
            case 3:
                nukeImage = 'https://i.ibb.co/PmNDLB6/3.gif'
                break;
            case 4:
                nukeImage = 'https://i.ibb.co/CVh231k/4.gif'
                break;
            case 5:
                nukeImage = 'https://i.ibb.co/7g3vc4p/5.gif'
                break;
            case 6:
                nukeImage = 'https://i.ibb.co/S317bbG/6.gif'
                break;
            case 7:
                nukeImage = 'https://i.ibb.co/RDwwdCw/7.gif'
                break;
            case 8:
                nukeImage = 'https://i.ibb.co/5x3Cjf8/8.gif'
                break;
            case 9:
                nukeImage = 'https://i.ibb.co/yhBprLL/9.gif'
                break;
            case 10:
                nukeImage = 'https://i.ibb.co/Z2S8BP1/10.gif'
                break;
            case 11:
                nukeImage = 'https://i.ibb.co/Tr18nYt/11.gif'
                break;
            case 12:
                nukeImage = 'https://i.ibb.co/DtgrnWd/12.gif'
                break;
            case 13:
                nukeImage = 'https://i.ibb.co/19DDpky/13.gif'
                break;
        }

            if (mention == null){
                const Discord = require('discord.js');
                const nukeEmbed = new Discord.MessageEmbed()
                .setColor('#CACC36')
                .setAuthor(message.author.username + ` sent us all a gif- Oh it's a nuke, good luck! `  , message.author.displayAvatarURL())
                .setImage(nukeImage)
                .setFooter(message.author.username + ' launchd a nuke towards us', message.author.displayAvatarURL())

                message.channel.send(nukeEmbed);
            }else{
                if(mention == sender) return
                if(mention.id == '663616911992422400')
                if(sender.id == '345261532982280194'){
                    message.channel.send('Fs!kick <@345261532982280194> Seriously? You really are dumb')
                    return
            }else{
                if(sender.id == '345261532982280194') return
                    const Discord = require('discord.js');
                    const nukeEmbed = new Discord.MessageEmbed()
                    .setColor('#CACC36')
                    .setAuthor('Huh?! No, not happening'  , message.author.displayAvatarURL())
                    .setFooter(message.author.username + ' tried to launch a nuke at me but was rejected', message.author.displayAvatarURL())

                    message.channel.send(nukeEmbed);
            }else{
                if(mention == sender) return
                    const Discord = require('discord.js');
                    const nukeEmbed = new Discord.MessageEmbed()
                    .setColor('#CACC36')
                    .setAuthor(message.author.username + ` just launched a nuke from "HQ" towards ${mention.username}! R.I.P ${mention.username}, you will be missed`  , message.author.displayAvatarURL())
                    .setImage(nukeImage)
                    .setFooter(message.author.username + ' just launched a nuke towards ' + mention.username, message.author.displayAvatarURL())

                    message.channel.send(nukeEmbed);
                    return
                }
            }
        }
    }
}

module.exports.config = {
    name: "nuke",
    description: "Everyone loves a nuke, this here is a fun nuke command. no harm done, this isn't a kick/ban command",
    usage: "Fs!nuke || Fs!nuke @USER",
    accessableby: "Members",
    aliases: []
}