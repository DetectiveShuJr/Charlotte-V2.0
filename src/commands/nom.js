module.exports = {
    name: 'nom',
    execute (message, args) {

        let args1 = message.content.substring(prefix.length).split(" ")
        switch(args1[0]){
            case 'nom':
            // random number generator
            //will pick a random number between 1 and 14

            // number determining what nom will be shown
            switch(Math.floor(Math.random() * 14) + 1){
            case 1:
                nomImage = 'https://cdn.discordapp.com/attachments/835480340364656652/835480385659076618/nom1.gif'
                break;
            case 2:
                nomImage = 'https://cdn.discordapp.com/attachments/835480340364656652/835480411529805834/nom2.gif'
                break;
            case 3:
                nomImage = 'https://cdn.discordapp.com/attachments/835480340364656652/835480428470468608/nom3.gif'
                break;
            case 4:
                nomImage = 'https://cdn.discordapp.com/attachments/835480340364656652/836536404485079090/nom4.gif'
                break;
            case 5:
                nomImage = 'https://cdn.discordapp.com/attachments/835480340364656652/836537541338333224/nom5.gif'
                break;
            case 6:
                nomImage = 'https://cdn.discordapp.com/attachments/835480340364656652/836537833970991174/nom6.gif'
                break;
            case 7:
                nomImage = 'https://cdn.discordapp.com/attachments/835480340364656652/836538381658882068/nom7.gif'
                break;
            case 8:
                nomImage = 'https://cdn.discordapp.com/attachments/835480340364656652/836538654490230784/nom8.gif'
                break;
            case 9:
                nomImage = 'https://cdn.discordapp.com/attachments/835480340364656652/836538934577201212/nom9.gif'
                break;
            case 10:
                nomImage = 'https://cdn.discordapp.com/attachments/835480340364656652/836545280231866368/nom10.gif'
                break;
            case 11:
                nomImage = 'https://cdn.discordapp.com/attachments/835480340364656652/836545682814271518/nom11.gif'
                break;
            case 12:
                nomImage = 'https://cdn.discordapp.com/attachments/835480340364656652/836546528269172756/nom12.gif'
                break;
            case 13:
                nomImage = 'https://cdn.discordapp.com/attachments/835480340364656652/836559986888015952/nom13.gif'
                break;
            case 14:
                nomImage = 'https://cdn.discordapp.com/attachments/835480340364656652/836577264610705424/senkoNom.gif'
                break; //senkoNom
            }
        // random number generator


        // determines if user was pinged or not
        let mention = message.mentions.users.first()



        // embed for nom
        if(mention == null){
        const Discord = require('discord.js');
        const nomEmbed = new Discord.MessageEmbed()
        .setColor('#0F52A3')
        .setAuthor(message.author.username + ' decided to eat a light snack', message.author.displayAvatarURL())
        .setImage(nomImage)

        message.channel.send(nomEmbed);
    }else{
        if(mention == '345261532982280194')
            if(message.author.id == '303410762213490689'){
            const Discord = require('discord.js');
            const nomEmbed = new Discord.MessageEmbed()
            .setColor('#0F52A3')
            .setAuthor(message.author.username + ` decided to eat a light snack with ${mention.username}, they really are cute`, message.author.displayAvatarURL())
            .setImage(nomImage)

            message.channel.send(nomEmbed);
    }else{
        if(mention == '303410762213490689')
            if(message.author.id == '345261532982280194'){
            const Discord = require('discord.js');
            const nomEmbed = new Discord.MessageEmbed()
            .setColor('#0F52A3')
            .setAuthor(message.author.username + ` decided to eat a light snack with ${mention.username}, they really are cute`, message.author.displayAvatarURL())
            .setImage(nomImage)

            message.channel.send(nomEmbed);
    }else{
        if(message.author.id == '345261532982280194')
            if(mention == '663616911992422400'){
                const Discord = require('discord.js');
                const nomEmbed = new Discord.MessageEmbed()
                .setColor('#0F52A3')
                .setAuthor(`Huh? You want to eat together, that's alright with me but only this once, I'm very busy`, message.author.displayAvatarURL())
                .setImage(nomImage)

                message.channel.send(nomEmbed);
    }else{
        if(message.author.id == '303410762213490689')
            if(mention == '663616911992422400'){
                const Discord = require('discord.js');
                const nomEmbed = new Discord.MessageEmbed()
                .setColor('#0F52A3')
                .setAuthor(`Huh? You want to eat together, as long as it's not dad`,  message.author.displayAvatarURL())
                .setImage(nomImage)

                message.channel.send(nomEmbed);
            }
    }else{
        if(message.author.id == '663616911992422400'){
            const Discord = require('discord.js');
                const nomEmbed = new Discord.MessageEmbed()
                .setColor('#0F52A3')
                .setAuthor(mention.username + ', want to eat together?',  message.author.displayAvatarURL())
                .setImage(nomImage)

                message.channel.send(nomEmbed);
        }else{
        if(message.author.id == '663616911992422400') return
            if(mention == '663616911992422400'){
                const Discord = require('discord.js');
                const nomEmbed = new Discord.MessageEmbed()
                .setColor('#0F52A3')
                .setAuthor('Wait, for me? Thank you' + message.author.displayAvatarURL())
                .setImage(nomImage)
                .setFooter(message.author.username + ' gave me a light snack, be more like ', message.author.username)

                message.channel.send(nomEmbed);
        }else{
        if(message.author.id == '663616911992422400') return
        if(message.author.id !== '663616911992422400'){
            const Discord = require('discord.js');
                const nomEmbed = new Discord.MessageEmbed()
                .setColor('#0F52A3')
                .setAuthor(`${message.author.username} is having a light snack with ${mention.username}, that's nice`, message.author.displayAvatarURL())
                .setImage(nomImage)

                message.channel.send(nomEmbed);
            }
        }
    }
    
}}}}}}}
