module.exports = {
    name: 'git-helper',
    Description: 'Little reminder for myself of how to import commands to Herku',
    execute(message, channel) {
        const filterr = m => m.author.id === message.author.id;
        if(!sender.id === '345261532982280194'){
            return message.reply(`sorry ${message.author}, you don't have permission to use this command. It's a GitHub command helper for <@345261532982280194>.`)
        } else{
            if(sender.id === '345261532982280194'){
            message.channel.send("What do you need help with dad?").then(r => r.delete(15000));
            channel.awaitMessages(filterr, {max: 2, time: 15000}).then(collected => {
            if(collected.first().content === 'Saving all new changes to GitHub'){
                message.channel.send(`git add . will save all your changes. To import them directly to GitHub, you need to use git commit -m "updating repository". Once all is done, just use git push --set-upstream origin master to add it to my 24/7 program`)
            } else{
                if(collected.first().content === 'How do I hide files from GitHub?'){
                    message.channel.send('Just put the file name in .gitignore and GitHub will make sure not to mention it')}
            }
        }).catch(err => {
            console.log(err)
        })
        }
        }
    }
}