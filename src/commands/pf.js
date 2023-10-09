const Discord = require('discord.js')
const Angel = require('../index')
const Charlotte = require('../index')
module.exports = {
	name: 'pf',
	description: 'powers Char and Angel command.',
	async execute(message) {

        if(sender == '345261532982280194' || sender == '303410762213490689' || sender == '915711098685124619' || sender == '519206163498270740'){
        }else{
            return message.channel.send('Only Mom and Dad can use this command')}

       let mention = message.mentions.users.first()
       args = message.content.substring(prefix.length).split(" ")

        switch(args[0]){
            case 'pf':
                await message.channel.send('shutting down now...')
                message.delete()
                process.exit(Charlotte)
                break;
        }
    }
}