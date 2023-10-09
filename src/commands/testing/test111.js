module.exports = {
    name: 'test111',
    Description: 'a custom made code by me that is still being developed',
    execute(message) {
        const filterr = m => m.author.id === message.author.id;
        const mention = message.mentions.users.first();
        message.reply("waiting password...")
        message.channel.awaitMessages(filterr, {max: 4, time: 5000}).then(collected => {
            if(!message.member.hasPermission("ADMINISTRATOR"))
            return channel.send("Oops an error occurred... Only administrators can use this, I'm not letting random people use this command. ask <@345261532982280194> for more details")
                if(collected.first().content === "1111")
                    if (mention) {
                        const member = message.guild.member(mention);
        
                        if (member) {
                            member.kick('Great game!').then(() => {
                                number = 1;
                                imageNumber = Math.floor (Math.random() * (number - 1 + 1)) + 1;
                                message.channel.send(`And they're out of the park! ${mention.tag} is out cold`, ( {files: ["./charlotte-soccer/" + imageNumber + ".gif"]} ));
                            }).catch(err => {
                                message.channel.send('***Bump*** did I... MISS?!')
                                console.log(err);
                            });
                        } else {
                            message.channel.send("Can't find them, maybe they're not here anymore")
                        }
                    } else {
                        message.channel.send(`${message.author} Who is gonna be my ball this time? `);
                    }
            else
                if(!collected.first().content === "1111")
                message.reply("incorrect, are you dumb?")
        }).catch(err => {
            console.log(err)
        })
    }
}