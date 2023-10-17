const Discord = require("discord.js");

module.exports = {
    name: 'addrole',
	description: 'Gives someone a role',
	usage: '[command name]',
	async execute(message, args) {
    
    if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply(`You don't have the ability to use this command`)
    let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if(!rMember) return message.channel.send("Who again? I can't find them")
    let role = args.join(" ").slice(22)
    if(!role) return message.channel.send(`Can you specify what role you are looking for ${message.author}?`);
    let gRole = message.guild.roles.find(`name`, role);
    if(!gRole) return message.reply("Couldn't find it are you sure you spelled it right?")

    if(rMember.roles.has(gRole.id));
    await(rMember.addRole(gRole.id));

    try{
        await rMember.send(`You now have the ${gRole.name}, congrats fellow weeb!`)
    }catch(e){
    message.channel.send(`<@${rMember.id} now has the ${gRole.name}, congrats fellow weeb! Also I tried to DM them but it was locked`)
    }
}
}

module.exports.help = {
    name: "addrole"
}