module.exports = {
    name: 'kick',
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
        case 'kick':
        number = 10;
        number1 = 1;
        rating = Math.floor (Math.random() * (number - 1 + 1)) + 1;
        rating1 = Math.floor (Math.random() * (number1 - 1 + 1)) + 1;
        switch(Math.floor (Math.random() * (number - 1 + 1)) + 1){
        case 1:
            kickImage = 'https://i.ibb.co/hKF4fRS/1-1.gif'
            break;
        case 2:
            kickImage = 'https://i.ibb.co/mJ0ddGM/2-1.gif'
            break;
        case 3:
            kickImage = 'https://i.ibb.co/PNx2qP9/3-3.gif'
            break;
        case 4:
            kickImage = 'https://i.ibb.co/F7T7yfx/4-1.gif'
            break;
        case 5:
            kickImage = 'https://i.ibb.co/jz9m3C5/5-1.gif'
            break;
        case 6:
            kickImage = 'https://i.ibb.co/H24q4V3/6-1.gif'
            break;
        case 7:
            kickImage = 'https://i.ibb.co/6B31FB4/7-1.gif'
            break;
        case 8:
            kickImage = 'https://i.ibb.co/5cmtpvt/8-1.gif'
            break;
        case 9:
            kickImage = 'https://i.ibb.co/Vgwps7d/10-1.gif'
            break;
        case 10:
            kickImage = 'https://i.ibb.co/s1sjXWp/11-1.gif'
            break;
        }

        switch(Math.floor (Math.random() * (number1 - 1 + 1)) + 1){
        case 1:
            kickImage1 = 'https://i.ibb.co/mJ0ddGM/2-1.gif'
        break;
        }
        // if(sender.id == '663616911992422400'){
        //     if(mention == sender) return
        //     if(mention.id == '345261532982280194')
        //         const Discord = require('discord.js');
        //         const kickEmbed = new Discord.MessageEmbed()
        //         .setColor('#E0FBFF')
        //         .setAuthor( 'You know what? Go die!' )
        //         .setImages(Kick1)
        //         .setFooter('This is payback!' + message.author.username + ' kicked her father out of the window, don\'t worry he is fine... sadly', message.author.displayAvatarURL())

        //         message.channel.send(kickEmbed);
        //     }
            if (mention == null){
                const Discord = require('discord.js');
                const kickEmbed = new Discord.MessageEmbed()
                .setColor('#E0FBFF')
                .setAuthor( `Umm.. ${message.author.username} somehow kicked themself... Is that even possible?` )
                .setImage(kickImage)
                .setFooter(message.author.username + ' just kicked themselves', message.author.displayAvatarURL())
                message.channel.send(kickEmbed);
            }else{
                if(mention.id == '663616911992422400')
                if(sender.id == '345261532982280194'){
                    const Discord = require('discord.js');
                    const kickEmbed = new Discord.MessageEmbed()
                    .setColor('#E0FBFF')
                    .setAuthor( 'That breaks so many child abuse laws... Go die, you\'re disappoint to "our" family' )
                    .setImage(kickImage1)
                    .setFooter(message.author.username + ' was thrown out the window by me!', message.author.displayAvatarURL())

                    message.channel.send(kickEmbed);
            }else{
                if(sender.id == '345261532982280194') return
                if(mention.id == '663616911992422400'){
                    const Discord = require('discord.js');
                    const kickEmbed = new Discord.MessageEmbed()
                    .setColor('#E0FBFF')
                    .setAuthor( 'Huh?! You can\'t kick me, get out!' )
                    .setImage(kickImage1)
                    .setFooter(message.author.username + ' was thrown out the window by me!', message.author.displayAvatarURL())

                    message.channel.send(kickEmbed);}
            }else{
                if(mention == sender) return
                if(sender.id !== '663616911992422400'){
                    const Discord = require('discord.js');
                    const kickEmbed = new Discord.MessageEmbed()
                    .setColor('#E0FBFF')
                    .setAuthor( `"some people just need a good kick" ${message.author.username} took that meaning to heart and kicked ${mention.username}! I'm sure they are fine` )
                    .setImage(kickImage)
                    .setFooter(message.author.username + ' just kicked ' + mention.username, message.author.displayAvatarURL())
                    message.channel.send(kickEmbed);
                    }
                }
            }
        }
    }
}


module.exports.config = {
    name: "kick",
    description: "This here is just a fun gif command, charlotte-soccer is where the fun begins (it actually kicks people out of the server)",
    usage: "Fs!kick || Fs!kick @USER",
    accessableby: "Members",
    aliases: []
}