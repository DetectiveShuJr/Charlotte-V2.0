module.exports = {
    name: 'nuke-me',
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
        case 'nuke-me':
        number = 1;
        switch(Math.floor (Math.random() * (number - 1 + 1)) + 1){
        case 1:
            selfNukeImage = 'https://i.ibb.co/YP2CFxs/1-6.gif'
        }

            const Discord = require('discord.js');
            const sNukeEmbed = new Discord.MessageEmbed()
            .setColor('#CACC36')
            .setAuthor(`***NUKE PHASE ACTIVATED, ALL SYSTEMS GO***
Welp due to loss of intelligence, ${message.author.username} sent a nuke towards themselves. Good job everyone!`  , message.author.displayAvatarURL())
            .setImage(selfNukeImage)
            .setFooter(message.author.username + ' just killed themselves', message.author.displayAvatarURL())

            message.channel.send(sNukeEmbed);
            }
        }
    }