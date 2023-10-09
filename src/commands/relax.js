module.exports = {
    name: 'relax',
    Description: 'fun little gif command',
    execute(message,args1) {
    let mention = message.mentions.users.first()  || message.guild.members.cache.find((p) =>
        p.user.username.includes(args1[0]))  || message.guild.members.cache.find((p) =>
        p.user.username.toUpperCase().includes(args1[0])) || message.guild.members.cache.find((p) =>
        p.user.username.toLowerCase().includes(args1[0])) || message.guild.members.cache.find((p) =>
        p.user.username === args1[0]) || message.guild.members.cache.find((p) =>
        p.user.username.toUpperCase() === args1[0]) || message.guild.members.cache.find((p) =>
        p.user.username.toLowerCase() === args1[0])
    let args = message.content.substring(prefix.length).split(" ")
    switch(args[0]){
        case 'relax':
        number = 9;
        imageNumber = Math.floor (Math.random() * (number - 1 + 1)) + 1;
        if(mention == null || mention == message.author.id){
            message.channel.send(`${message.author} is relaxing... Ah I may as well do it!`, ( {files: ["./relax/" + imageNumber + ".gif"]} ));
        }else{
            if(mention == sender) return
            if(mention.id == '663616911992422400')
            if(sender.id == '345261532982280194'){
                return message.channel.send('Finally you spend time with me, this is great', ( {files: ["./relax/" + imageNumber + ".gif"]} ))
            }else{
                if(sender.id == '345261532982280194') return
                message.channel.send('Huh?! No, not happening')
            }else{
            if(mention == sender) return
            message.channel.send(`Aww ${message.author} and ${mention} are relaxing together, they look so cute together`, ( {files: ["./relax/" + imageNumber + ".gif"]} ))
            return}
            }
        }
    }
}

module.exports.config = {
    name: "relax",
    description: "An amazing relax command if I do say so myself",
    usage: "Fs!relax || Fs!relax @USER",
    accessableby: "Members",
    aliases: []
}