module.exports = {
    name: 'bored',
    Description: 'fun little gif command',
    execute(message) {
    let args = message.content.substring(prefix.length).split(" ")
    switch(args[0]){
        case 'bored':
            // random number generator
            number = 14;
            rating = Math.floor (Math.random() * (number - 1 + 1)) + 1;
            //will pick a random number between 1 and 14
    
            // number determining what nom will be shown
            switch(Math.floor (Math.random() * (number - 1 + 1)) + 1){
            case 1:
                boredImage = 'https://i.ibb.co/S5D9t5d/1.gif'
            case 2:
                boredImage = 'https://i.ibb.co/T1vWbTt/2.gif'
            case 3:
                boredImage = 'https://i.ibb.co/yPbxpM4/3-1.gif'
            case 4:
                boredImage = 'https://i.ibb.co/g4TJXSM/4.gif'
            case 5:
                boredImage = 'https://i.ibb.co/yWrNj8f/5.gif'
            case 6:
                boredImage = 'https://i.ibb.co/2WwKQ5Z/6.gif'
            case 7:
                boredImage = 'https://i.ibb.co/z6GWGG8/7.gif'
            case 8:
                boredImage = 'https://i.ibb.co/0DhBnBx/8.gif'
            case 9:
                boredImage = 'https://i.ibb.co/y44WSzj/9-1.gif'
            case 10:
                boredImage = 'https://i.ibb.co/5Gtdq0R/10.gif'
            case 11:
                boredImage = 'https://i.ibb.co/8mbhk4B/11.gif'
            case 12:
                boredImage = 'https://i.ibb.co/27qckvp/12-1.gif'
            case 13:
                boredImage = 'https://i.ibb.co/D1FQpBy/13.gif'
            case 14:
                boredImage = 'https://i.ibb.co/CsFdMNG/14.gif'
        }

            // random number generator
        // var boredRating = Math.floor(Math.random() * 1) + 1;
        // //will pick a random number between 1 and 5

        // // number determining what nom will be shown
        // if(boredRating == 1){ boredMessageEnding = ('a Valkyrie!'); }


            if (sender.id === '345261532982280194'){
                const Discord = require('discord.js');
                const boredEmbed = new Discord.MessageEmbed()
                .setColor('#FFA272')
                .setAuthor(' Oh you\'re bored too? Take a break and relax ')
                .setImage(boredImage)
                .setFooter(message.author.username + ' is bored', message.author.displayAvatarURL())


                message.channel.send(boredEmbed);
        }else; 
            if (sender.id === '345261532982280194') return
                const Discord = require('discord.js');
                const boredEmbed = new Discord.MessageEmbed()
                .setColor('#FFA272')
                .setAuthor(message.author.username +  `  you seem rather bored, thought about having a hobby? `  , message.author.displayAvatarURL())
                .setImage(boredImage)
                .setFooter(message.author.username + ' is bored', message.author.displayAvatarURL())

                message.channel.send(boredEmbed);
        }
    }
}

module.exports.config = {
    name: "bored",
    description: "An action command for bored",
    usage: "Fs!bored",
    accessableby: "Anyone"
}