module.exports = {
    name: 'charlotte-soccer',
    Description: 'The kick command, my version',
    execute(message, args1) {
    let args = message.content.substring(prefix.length).split(" ")
    switch (args[0]) {
        case 'charlotte-soccer':
            if(!message.member.hasPermission("KICK_MEMBERS"))
            return message.channel.send(`Nope, not gonna let you. You need to be able to kick members`)
            const user = message.mentions.users.first()  || message.guild.members.cache.find((p) =>
                p.user.username.includes(args1[0]))  || message.guild.members.cache.find((p) =>
                p.user.username.toUpperCase().includes(args1[0])) || message.guild.members.cache.find((p) =>
                p.user.username.toLowerCase().includes(args1[0])) || message.guild.members.cache.find((p) =>
                p.user.username === args1[0]) || message.guild.members.cache.find((p) =>
                p.user.username.toUpperCase() === args1[0]) || message.guild.members.cache.find((p) =>
                p.user.username.toLowerCase() === args1[0])
            if (user) {
                const member = message.guild.member(user);

                if (member) {
                    if(member.id == '663616911992422400')
                    return message.reply('How would I play soccer by myself?')
                    member.kick('Great game!').then(() => {
                        number = 1;
                        switch(Math.floor (Math.random() * (number - 1 + 1)) + 1){
                        case 1:
                            cKickImage = 'https://i.ibb.co/HzTGjhp/1-3.gif'
                        }

                        const Discord = require('discord.js');
                        const kickEmbed = new Discord.MessageEmbed()
                        .setColor('#FF2D2D')
                        .setAuthor( `And they're out of the park! ${user.tag} is out cold` )
                        .setImage(cKickImage)
                        .setFooter(message.author.username + ` used ${user.username} as a soccorball`, message.author.displayAvatarURL())

                message.channel.send(kickEmbed);
                        message.channel.send(`And they're out of the park! ${user.tag} is out cold`, ( {files: ["./charlotte-soccer/" + imageNumber + ".gif"]} ));
                    }).catch(err => {
                        message.channel.send('Looks like this person is important for soccer')
                        console.log(err);
                    });
                } else {
                    message.channel.send("Can't find them, maybe they're not here anymore")
                }
            } else {
                message.channel.send(`${message.author} Who shall we use as the soccer ball?`);
            }
    break;}
    }
}

module.exports.config = {
    name: "charlotte-soccer",
    description: "My version of the kick command, this one actually kicks them out along with a gif",
    usage: "Fs!charlotte-soccer @USER",
    accessableby: "Admins",
    aliases: []
}