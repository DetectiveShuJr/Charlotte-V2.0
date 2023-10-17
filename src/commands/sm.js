module.exports = {
    name: 'sm',
    execute (message, args) {

        let args1 = message.content.substring(prefix.length).split(" ")
        switch(args1[0]){
            case ('sm'):
            // random number generator
            number = 15;
            //will pick a random number between 1 and 14

            // number determining what nom will be shown
            switch(Math.floor (Math.random() * (number - 1 + 1)) + 1){
            case 1: 
            sailorMoonImage = 'https://i.ibb.co/VxzFMZZ/SME.png'
            break;
            case 2: 
            sailorMoonImage = 'https://i.ibb.co/JjqkZLM/sailor-screenshot.jpg'
            break;
            case 3: 
            sailorMoonImage = 'https://i.ibb.co/pWgzbQZ/sailor-moon-icegif-4.gif'
            break;
            case 4: 
            sailorMoonImage = 'https://i.ibb.co/VjYr2JW/sailor-moon-eternal-movie.png'
            break;
            case 5: 
            sailorMoonImage = 'https://i.ibb.co/T0XLQQV/sailor-moon.jpg'
            break;
            case 6: 
            sailorMoonImage = 'https://i.ibb.co/G2Kc3V1/sailor-moon-fanart-by-pinkytsu-de4hno1-fullview.jpg'
            break;
            case 7: 
            sailorMoonImage = 'https://i.ibb.co/t3ypGk5/pjdt7qhxoks01.png'
            break;
            case 8: 
            sailorMoonImage = 'https://i.ibb.co/VH676y5/image.jpg'
            break;
            case 9: 
            sailorMoonImage = 'https://i.ibb.co/0Dvk43M/giphy.gif'
            break;
            case 10: 
            sailorMoonImage = 'https://i.ibb.co/mFMzLr8/20210705-115315.gif'
            break;
            case 11: 
            sailorMoonImage = 'https://i.ibb.co/3TDZHcM/e92a42f905df4651cb8455e457140557.jpg'
            break;
            case 12: 
            sailorMoonImage = 'https://i.ibb.co/wS8n95F/e4c7dc9903250a52cb9d1ac7c3299263e466c578r1-640-459-hq.gif'
            break;
            case 13: 
            sailorMoonImage = 'https://i.ibb.co/VgFxw4G/200w.gif'
            break;
            case 14: 
            sailorMoonImage = 'https://i.ibb.co/DW5kVhz/20210705-115222.gif'
            break;
            case 15: 
            sailorMoonImage = 'https://i.ibb.co/dJ4sBqW/image0.gif'
            break;
            }

            // random number generator
        var SailorMoonRating = Math.floor(Math.random() * 1) + 1;
        //will pick a random number between 1 and 5

        // number determining what SailorMoon will be shown

        const Discord = require('discord.js');
        const SailorMoonEmbed = new Discord.MessageEmbed()
        .setColor('#cef1ff')
        .setAuthor(message.author.username + ' called out to Sailor Moon, she is on the hunt now', message.author.displayAvatarURL())
        .setImage(sailorMoonImage)

        message.channel.send(SailorMoonEmbed);}}}