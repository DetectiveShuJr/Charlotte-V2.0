module.exports = {
    name: 'taunt',
    Description: 'fun little gif command',
    execute(message, args1) {
    let mention = message.mentions.users.first()  || message.guild.members.cache.find((p) =>
    p.user.username.includes(args1[0]))  || message.guild.members.cache.find((p) =>
    p.user.username.toUpperCase().includes(args1[0])) || message.guild.members.cache.find((p) =>
    p.user.username.toLowerCase().includes(args1[0])) || message.guild.members.cache.find((p) =>
    p.user.username === args1[0]) || message.guild.members.cache.find((p) =>
    p.user.username.toUpperCase() === args1[0]) || message.guild.members.cache.find((p) =>
    p.user.username.toLowerCase() === args1[0])
    let args = message.content.substring(prefix.length).split(" ")
    switch(args[0]){
        case 'taunt':
            number = 5;
            number1 = 1
            imageNumber = Math.floor (Math.random() * (number - 1 + 1)) + 1;
            imageNumber1 = Math.floor (Math.random() * (number1 - 1 + 1)) + 1;
            if (mention == null){
                message.channel.send(`Hey! ${message.author} is taunting us, let's get them!`, ( {files: ["./taunting/" + imageNumber + ".gif"]} ));
            }else{
                if(mention == sender) return
                if(mention.id == '663616911992422400')
                if(sender.id == '345261532982280194'){
                return message.channel.send('Hey! What did I do wrong?', ( {files: ["./taunting/" + imageNumber + ".gif"]} ))
            }else{
                if(mention.id == '663616911992422400')
                if(!sender.id == '345261532982280194'){
                    message.channel.send('I have no patience for you neither so', ( {files: ["./abuse/" + imageNumber1 + ".gif"]} ))
                }
            }else{
                if(mention.id == sender) return
                if(mention.id == '663616911992422400') return
                    message.channel.send(`I wouldn't suggest taunting ${mention} but go for it`, ( {files: ["./taunting/" + imageNumber + ".gif"]} ));
                    return
                }
            }
        }
    }
}