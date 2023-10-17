require('dotenv').config()
const Discord = require('discord.js')
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { token } = (process.env.Charlotte_Token);
const fs = require('node:fs');
// const fs = require("fs").promises;
const { readdirSync } = require('fs');
const { join } = require('path');
const MusicCharlotte = require('./struct/Charlotte');

const charlotte = new MusicCharlotte({ token: process.env.Charlotte_Token });
const Angel = new Discord.Client();


// charlotte.commands = new Map();
function emoji (id) {
    return charlotte.emojis.cache.get(id).toString()
}

//testing new command handler
const commandFiles = readdirSync(join(__dirname, 'commands')).filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
	const command = require(join(__dirname, 'commands', `${file}`));
    charlotte.commands.set(command.name, command);
}

Angel.on('ready', () =>{
    console.log(`Angel Mode: on... I'm all set now`);
    Angel.user.setActivity('Test test')
})

charlotte.on('warn', console.warn);
charlotte.on('error', console.error);
charlotte.on('ready', () =>{
    console.log('Im ready to go!');
    charlotte.user.setActivity()
})
charlotte.on('disconnect', ()=> console.log(`Sorry my wifi went down, I'm reconneting now`))
charlotte.on('reconnecting', ()=> console.log(`I'm reconnecting on, give me a sec`))

charlotte.on('message', message => {
    sender = message.author
    prefix = 'fs!'

    if(sender == '663616911992422400' || sender == '735991551259574314'){
    }else{
        if(sender.bot)return //|| sender.id == '525539627852103700'
    }


    if (!message.content.toLowerCase().startsWith(prefix)) return;
    const args = message.content.slice(prefix.length).split(/ +/);
    const commandName = args.shift().toLowerCase();

	const command = charlotte.commands.get(commandName) || charlotte.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
    if (!command) return
	if (command.guildOnly && message.channel.type !== 'text') return message.reply('I can\'t do that command inside DMs!');
	if (command.args && !args.length) {
        return }
        
        try {
            command.execute(message, args);
        } catch (error) {
            console.error(error);
            message.reply(`There was an unexpected error, ${error}`);
        }
});

    Angel.on('message', message=>{  

        mention = message.mentions.users.first()    

    switch(message.content){
        case `Hello ${mention}`:
        if(mention.id !== '735991551259574314') return
            angelEmbed = new Discord.MessageEmbed()
                .setImage('https://i.ibb.co/LkJWNB4/1.gif');

        message.channel.send(`***Lightly smiles***
Hello ${message.author.username}`, angelEmbed)
        break;
        case `Hi ${mention}`:
        if(mention.id !== '735991551259574314') return
            angelEmbed = new Discord.MessageEmbed()
                .setImage('https://i.ibb.co/LkJWNB4/1.gif');
            
        message.channel.send(`***Lightly smiles***
Hello ${message.author.username}`, angelEmbed)
        break;           
        case 'Hello Angel':
            angelEmbed = new Discord.MessageEmbed()
                .setImage('https://i.ibb.co/LkJWNB4/1.gif');

        message.channel.send(`***Lightly smiles***
Hello ${message.author.username}`, angelEmbed)
        break;
        case 'Hi Angel':
            angelEmbed = new Discord.MessageEmbed()
                .setImage('https://i.ibb.co/LkJWNB4/1.gif');   

        message.channel.send(`***Lightly smiles***
Hello ${message.author.username}`, angelEmbed)
        break;
    }

//     if(message.content.includes("")){
//         if(mention == null) return
//         if(message.content === mention) return
//         if(mention.id === '345261532982280194'){
//         if(!mention.id === '345261532982280194') return
//         if(message.author.id === '735991551259574314') return
//         mention.send(`${message.author.tag} sent you a mession mother, here's the message
// ${message.content}
// I hope this was helpful, have a good day!`)
//         }else{
//             return
//             if(mention.id === '345261532982280194') return
//             if(mention.id === '663616911992422400') return
//             if(mention.id === '187204279981834242') return
//             if(mention.id === '345261532982280194') return
//             if(mention.id === '735991551259574314') return
//             if(mention.id === '347905467638611971') return
//             if(mention.id === '471872338858868737') return
//             if(mention.id === '392620908868796426') return
//             if(message.author.id === '735991551259574314') return
//             mention.send(`${message.author.tag} sent a ping message, here's the message
// ${message.content}`)
        // }
    // }
})

// const guildId = '460252794989838347'
//     const guild = charlotte.guilds.cache.get (guildId)
//     let commands

//     if (guild) {
//         commands = guild.commands
//     } else {
//         commands = charlotte.application?.commands
//     }

//     commands?.create({
//         name: 'test',
//         description: 'just to see if it pops up',
//     })

// charlotte.on('interactionCreate', async (interaction) => {
//     if(!interaction.isCommand()) {
//         return
//     }

//     const { commandName, options } = interaction

//     if (commandName === 'hello') {
//         interaction.reply({
//             content: 'test successful',
//         })
//     }
// })

charlotte.login(process.env.Charlotte_Token);
Angel.login(process.env.Angel_Token);