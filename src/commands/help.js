const Discord = require("discord.js");

module.exports = {
    name: 'help',
    Description: 'help',
    usage: 'Fs!help',
    async execute(message, args){
    //We have to set a argument for the help command beacuse its going to have a seperate argument.
    let helpArray = message.content.split(" ");
    let helpArgs = helpArray.slice(1);

    //Custom Help command by using the second argument.
    if(helpArgs[0] === 'Fun') {
        console.log(helpArgs[0])
        return message.reply("This is a Gaming information Command.")
    }

    //Reads the moudle.exports.config (This line of code is on commands folder, each command will read automaticly) by the second argument (the command name) and shows the information of it.
    if(helpArgs[0]) {
        let command = helpArgs[0];
        console.log(helpArgs[0])
    if(message.client.commands.has(command)) {
            
            command = message.client.commands.get(command);
            var embed = new Discord.MessageEmbed()
            .setAuthor(`${command.config.name} Command`)
            .setDescription(`
            - **Command's Description** ${command.config.description || "There is no Description for this command."}
            - **Command's Usage:** ${command.config.usage || "No Usage"}
            - **Command's Permissions:** ${command.config.accessableby || "Members"}
            - **Command's Aliases:** ${command.config.aliases || "No Aliases"}
            `)
            .setColor('#2EFF00')

        message.channel.send(embed);}
    }

    // Normal usage of (prefix)help without any args. (Shows all of the commands and you should set the commands yourself)
    if(!helpArgs[0]) {
        console.log(helpArray)
        console.log(helpArgs[0])
        var embed = new Discord.MessageEmbed()
            .setAuthor(`My name's Charlotte, you can call me Char for short`)
            .setDescription('Below are all my commands, organized by category')
            .setAuthor('Action commands')
            .setDescription('Bored, facepalm, fight, kick, mad, nom, nuke-me, nuke, punch, relax, taunt')
            .addFields({ name: 'Prefix', value: '```Fs!```', inline: true})
            .setColor('#00FFF3')
            
        message.channel.send(embed);
    }}
}

module.exports.config = {
    name: "help",
    description: "",
    usage: "Fs!help",
    accessableby: "Members",
    aliases: []
}