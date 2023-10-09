module.exports = {
    name: 'facepalm',
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
            case 'facepalm':
            number = 15
            imageNumber = Math.floor (Math.random() * (number - 1 + 1)) + 1;
                if (mention == null){
                    message.channel.send(`${message.author} is tired of everything, just get off your device at this point`, ( {files: ["./facepalm/" + imageNumber + ".gif"]} ));
                }else{
                    if(mention == sender || mention == message.author.id) return
                    if(mention.id == '663616911992422400')
                    if(sender.id == '345261532982280194'){
                        return message.channel.send('What? Did I do something wrong?', ( {files: ["./facepalm/" + imageNumber + ".gif"]} ))
                    }else{
                        if(sender.id == '345261532982280194')
                        return message.channel.send('I\'m not saying a thing since I have no idea what the issue is', ( {files: ["./facepalm/" + imageNumber + ".gif"]} ))
                    }else{
                    if(mention == sender) return
                    message.channel.send(`${message.author} is tired of ${mention}'s dumb logic, try punching them`, ( {files: ["./facepalm/" + imageNumber + ".gif"]} ))
                    return}
                    } //tes
        }
    }
}

module.exports.config = {
    name: "facepalm",
    description: "A fun facepalm command, use this when you are tired of someone's logic",
    usage: "Fs!facepalm || Fs!facepalm @USER",
    accessableby: "Members",
    aliases: []
}