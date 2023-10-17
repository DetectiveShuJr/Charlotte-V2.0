module.exports = {
    name: 'fight',
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
        case 'fight':
        number = 11
        number1 = 1
        rating = Math.floor (Math.random() * (number - 1 + 1)) + 1;
        rating1 = Math.floor (Math.random() * (number1 - 1 + 1)) + 1;
        
        switch(Math.floor (Math.random() * (number - 1 + 1)) + 1){
        case 1:
            fightImage = 'https://i.ibb.co/rm6m2gV/1-4.gif'
            break;
        case 2:
            fightImage = 'https://i.ibb.co/rcrXc21/2-3.gif'
            break;
        case 3:
            fightImage = 'https://i.ibb.co/9p5z2Wp/3-4.gif'
            break;
        case 4:
            fightImage = 'https://i.ibb.co/Rh5vHPf/4-2.gif'
            break;
        case 5:
            fightImage = 'https://i.ibb.co/cT3Fwck/5-2.gif'
            break;
        case 6:
            fightImage = 'https://i.ibb.co/TTr9jM3/6-2.gif'
            break;
        case 7:
            fightImage = 'https://i.ibb.co/N150vJr/7-2.gif'
            break;
        case 8:
            fightImage = 'https://i.ibb.co/2Syq7wd/8-2.gif'
            break;
        case 9:
            fightImage = 'https://i.ibb.co/gRY3WxF/9-2.gif'
            break;
        case 10:
            fightImage = 'https://i.ibb.co/cXf1yxy/10-2.gif'
            break;
        case 11:
            fightImage = 'https://i.ibb.co/XVnfb9d/11-2.gif'
            break;
        }

        switch(Math.floor (Math.random() * (number1 - 1 + 1)) + 1){
        case 1:
            fightImage1 = 'https://i.ibb.co/HdqsG2g/1-5.gif'
            break;
        }
        
        if (mention == null || mention == message.author.id){
            const Discord = require('discord.js');
            const fightEmbed = new Discord.MessageEmbed()
            .setColor('#C56OFF')
            .setAuthor(message.author.username +  ` is fighting his inner self! Umm... not as interesting as I hoped`  , message.author.displayAvatarURL())
            .setImage(fightImage)
            .setFooter(message.author.username + ' is fighting themselves', message.author.displayAvatarURL())

                message.channel.send(fightEmbed);
        }else{
            if(mention == sender) return
            if(mention.id == '663616911992422400')
            if(sender.id == '345261532982280194'){
                const Discord = require('discord.js');
                const fightEmbed = new Discord.MessageEmbed()
                .setColor('#C56OFF')
                .setAuthor('You want to play fight? Na I\'m busy'  , message.author.displayAvatarURL())
                .setImage(fightImage1)
                .setFooter(message.author.username + ' got rejected!', message.author.displayAvatarURL())

                message.channel.send(fightEmbed);
            }else{
                if(sender.id == '345261532982280194') return
            }else{
            if(mention == sender) return
                const Discord = require('discord.js');
                const fightEmbed = new Discord.MessageEmbed()
                .setColor('#C56OFF')
                .setAuthor(`Oh jeez, ${message.author.username} and ${mention.username} started fighting` )
                .setImage(fightImage)
                .setFooter(message.author.username + ' started fighting with ' + mention.username, message.author.displayAvatarURL())
                message.channel.send(fightEmbed);
            return}
            }
        }
    }
}

module.exports.config = {
    name: "fight",
    description: "Fun interaction command",
    usage: "Fs!fight || Fs!fight @USER",
    accessableby: "Members",
    aliases: []
}