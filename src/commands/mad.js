module.exports = {
    name: 'mad',
    execute (message,args1) {
        let mention = message.mentions.users.first()  || message.guild.members.cache.find((p) =>
            p.user.username.includes(args1[0]))  || message.guild.members.cache.find((p) =>
            p.user.username.toUpperCase().includes(args1[0])) || message.guild.members.cache.find((p) =>
            p.user.username.toLowerCase().includes(args1[0])) || message.guild.members.cache.find((p) =>
            p.user.username === args1[0]) || message.guild.members.cache.find((p) =>
            p.user.username.toUpperCase() === args1[0]) || message.guild.members.cache.find((p) =>
            p.user.username.toLowerCase() === args1[0])
        let args = message.content.substring(prefix.length).split(" ")
        switch(args[0]){
            case 'mad':
            number = 13;
            imageNumber = Math.floor (Math.random() * (number - 1 + 1)) + 1;
            if(mention == null || mention == message.author.id) {
                message.channel.send(`${message.author} looks angry, I wonder why`, ( {files: ["./deadly/" + imageNumber + ".gif"]} ))
            }else{
                if(mention == sender) return
                if(mention.id == '663616911992422400')
                if(sender.id == '345261532982280194'){
                    message.channel.send(`What did I do wrong?!`, ( {files: ["./deadly/" + imageNumber + ".gif"]} ))
                }else{
                    if(sender.id == '345261532982280194') return
                    message.channel.send(`${message.author} looks like they're mad at me, did I do something wrong?`, ( {files: ["./deadly/" + imageNumber + ".gif"]} ))
                }else{
                    if(mention == sender) return
                    message.channel.send(`${message.author} seems pissed at ${mention}, I should probably do something but na!`, ( {files: ["./deadly/" + imageNumber + ".gif"]} ))
                }
            }
        }
    }
}

module.exports.config = {
    name: "mad",
    description: "A fun interaction command",
    usage: "Fs!mad || Fs!mad @USER",
    accessableby: "Members",
    aliases: []
}