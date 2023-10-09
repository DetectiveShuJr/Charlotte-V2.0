const Discord = require('discord.js');

module.exports = {
    name: 'littles-defense',
    Description: 'fun little gif command',
    execute(message, args1) {
        const mention = message.mentions.users.first() || message.guild.members.cache.find((p) =>
        p.user.username.includes(args1[0]))  || message.guild.members.cache.find((p) =>
        p.user.username.toUpperCase().includes(args1[0])) || message.guild.members.cache.find((p) =>
        p.user.username.toLowerCase().includes(args1[0])) || message.guild.members.cache.find((p) =>
        p.user.username === args1[0]) || message.guild.members.cache.find((p) =>
        p.user.username.toUpperCase() === args1[0]) || message.guild.members.cache.find((p) =>
        p.user.username.toLowerCase() === args1[0])
    let args = message.content.substring(prefix.length).split(" ")
    switch(args[0]){
        case 'littles-defense':
            // random number generator
            number = 2;
            number1 = 1;
            number2 = 1;
            number3 = 1;
            //will pick a random number between 1 and 14
    
            // number determining what nom will be shown
            switch(Math.floor (Math.random() * (number - 1 + 1)) + 1){
            case 1:
                lDefenseImage = 'https://i.ibb.co/6gTrZTr/rapunzel-frying-pan.gif'
                break;
            case 2:
                lDefenseImage = 'https://i.ibb.co/4Rr94xT/20220123-142946.gif'
                break;
            }

            switch(Math.floor (Math.random() * (number1 - 1 + 1)) + 1){
            case 1:
                lDefenseImage1 =  'https://i.ibb.co/BcyBNKW/tangled-disney.gif'
                break;
            }

            switch(Math.floor (Math.random() * (number2 - 1 + 1)) + 1){
            case 1:
                lDefenseImage2 =  'https://i.ibb.co/mJ0ddGM/2-1.gif'
                break;
            }

            switch(Math.floor (Math.random() * (number3 - 1 + 1)) + 1){
            case 1:
                lDefenseImage3 =  'https://i.ibb.co/Kb7TLhR/20220524-000644.gif'
                break;
            }

            // random number generator
        // var attackRating = Math.floor(Math.random() * 1) + 1;
        // //will pick a random number between 1 and 5

        // // number determining what nom will be shown
        // if(attackRating == 1:
        
        if(message.author.id !== '303410762213490689'){
            const attackEmbed = new Discord.MessageEmbed()
                .setColor('#C56OFF')
                .setAuthor('Simply no, only mom can!'  , message.author.displayAvatarURL())
                .setImage(lDefenseImage2)
                .setFooter('You aren\'t a Little! Get the heck out of here!', message.author.displayAvatarURL())

                message.channel.send(attackEmbed);
                return
    }else{
        if(mention == null){
            const attackEmbed = new Discord.MessageEmbed()
                .setColor('#C56OFF')
                .setAuthor('Did you just hit yourself...? Maybe Dad isn\'t the only dumb one here'  , message.author.displayAvatarURL())
                .setImage(lDefenseImage1)
                .setFooter(message.author.username + ' forgot how to use a pan', message.author.displayAvatarURL())
                    
                message.channel.send(attackEmbed);
    }else{
        if(mention.id == '663616911992422400'){
            const attackEmbed = new Discord.MessageEmbed()
                .setColor('#C56OFF')
                .setAuthor('Nice try mom but no'  , message.author.displayAvatarURL())
                .setImage(lDefenseImage1)
                .setFooter(message.author.username + ' really did try it!', message.author.displayAvatarURL())
        
                message.channel.send(attackEmbed);
    }else{
        if(mention.id == '663616911992422400') return
        if(mention.id == '345261532982280194'){
            const attackEmbed = new Discord.MessageEmbed()
            .setColor('#C56OFF')
            .setAuthor('nice try Princess but Daddy would\'t allow this!', message.author.displayAvatarURL())
            .setImage(lDefenseImage3)
            .setFooter('Dad took the wheel on this part of the command, good luck Mom', message.author.displayAvatarURL());

            message.channel.send(attackEmbed);

            mention.send('Mom tried punishing you');
            message.channel.send('And... just messaged Dad');
    }else{
        const attackEmbed = new Discord.MessageEmbed()
            .setColor('#C56OFF')
            .setAuthor(`Looks like ${mention.username} triggered mom, oh boy...`  , message.author.displayAvatarURL())
            .setImage(lDefenseImage)
            .setFooter(message.author.username + ' punished ' + mention.username, message.author.displayAvatarURL())
                    
            message.channel.send(attackEmbed);}}}
            }
        }
    }
}