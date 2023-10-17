module.exports = {
    name: 'punch',
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
        case 'punch':
        number = 26
        number1 = 1
        rating1 = Math.floor (Math.random() * (number - 1 + 1)) + 1;

        switch(Math.floor (Math.random() * (number - 1 + 1)) + 1){
        case 1:
            punchImage = 'https://i.ibb.co/Pz7sh65/1.gif'
            break;
        case 2:
            punchImage = 'https://i.ibb.co/6WQL08j/2.gif'
            break;
        case 3:
            punchImage = 'https://i.ibb.co/Yp30C36/3.gif'
            break;
        case 4:
            punchImage = 'https://i.ibb.co/ZVhvdzB/4.gif'
            break;
        case 5:
            punchImage = 'https://i.ibb.co/GnFsBXw/5.gif'
            break;
        case 6:
            punchImage = 'https://i.ibb.co/Ln0cMk2/6.gif'
            break;
        case 7:
            punchImage = 'https://i.ibb.co/2SqqFzF/7.gif'
            break;
        case 8:
            punchImage = 'https://i.ibb.co/JRcwkjR/8.gif'
            break;
        case 9:
            punchImage = 'https://i.ibb.co/gFR3gJd/9.gif'
            break;
        case 10:
            punchImage = 'https://i.ibb.co/ZmhzTx2/10.gif'
            break;
        case 11:
            punchImage = 'https://i.ibb.co/5nWBS06/11.gif'
            break;
        case 12:
            punchImage = 'https://i.ibb.co/ftPCxCB/12.gif'
            break;
        case 13:
            punchImage = 'https://i.ibb.co/Hrw17PQ/13.gif'
            break;
        case 14:
            punchImage = 'https://i.ibb.co/hdS36cp/14.gif'
            break;
        case 15:
            punchImage = 'https://i.ibb.co/BrDN6sf/16.gif'
            break;
        case 16:
            punchImage = 'https://i.ibb.co/M297QKD/17.gif'
            break;
        case 17:
            punchImage = 'https://i.ibb.co/chQgCv7/18.gif'
            break;
        case 18:
            punchImage = 'https://i.ibb.co/qNDccWB/19.gif'
            break;
        case 19:
            punchImage = 'https://i.ibb.co/wYg0gNC/20.gif'
            break;
        case 20:
            punchImage = 'https://i.ibb.co/8gjm02X/21.gif'
            break;
        case 21:
            punchImage = 'https://i.ibb.co/LZdDNYn/22.gif'
            break;
        case 22:
            punchImage = 'https://i.ibb.co/kDKnWmp/23.gif'
            break;
        case 23:
            punchImage = 'https://i.ibb.co/8mbT5BD/24.gif'
            break;
        case 24:
            punchImage = 'https://i.ibb.co/NTGZfNg/25.gif'
            break;
        case 25:
            punchImage = 'https://i.ibb.co/fFTdTzQ/26.gif'
            break;
        case 26:
            punchImage = 'https://i.ibb.co/8YgD9sF/27.gif'
            break;
        case 27:
            punchImage = ''
        case 28:
            punchImage = ''
        case 29:
            punchImage = ''
        case 30:
            punchImage = ''
        }

        switch(Math.floor (Math.random() * (number1 - 1 + 1)) + 1){
        case 1:
            punchImage1 = 'https://i.ibb.co/mJ0ddGM/2-1.gif'
            break;
        }

        if (mention == null || mention == message.author.id){
            const Discord = require('discord.js');
            const punchEmbed = new Discord.MessageEmbed()
                .setColor('#ff2e2e')
                .setAuthor(`Why are you hitting yourself ${message.author.username}? Oh well, I don't make the rules`)
                .setImage(punchImage)
                .setFooter(message.author.username + 'just punched themselves...?', message.author.displayAvatarURL())

            message.channel.send(punchEmbed);
        }else{
            if(mention == sender) return
            if(mention.id == '663616911992422400')
            if(sender.id == '345261532982280194'){
                const Discord = require('discord.js');
                const punchEmbed = new Discord.MessageEmbed()
                    .setColor('#ff2e2e')
                    .setAuthor('That breaks so many child abuse laws... Go die')
                    .setImage(punchImage1)
                    .setFooter(message.author.username + ' was thrown out the window by me!', message.author.displayAvatarURL())

                message.channel.send(punchEmbed);
            }else{
                if(sender.id == '345261532982280194') return
            }else{
            if(mention == sender) return
                const Discord = require('discord.js');
                const punchEmbed = new Discord.MessageEmbed()
                    .setColor('#ff2e2e')
                    .setAuthor(`${message.author.username} just threw a punch at ${mention.username}... Oh boy` )
                    .setImage(punchImage)
                    .setFooter(message.author.username + ' punched ' + mention.username, message.author.displayAvatarURL())

                message.channel.send(punchEmbed);
                return
                }
            }
        }
    }
}

module.exports.config = {
    name: "punch",
    description: "A fun interaction command, try it on your friends!",
    usage: "Fs!punch @USER",
    accessableby: "Members",
    aliases: []
}