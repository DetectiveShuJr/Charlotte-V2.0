module.exports = {
    name: 'quote',
    Description: 'fun little gif command',
    execute(message, args1) {
        let args = message.content.substring(prefix.length).split(" ")
        let content = message.content.slice(9)
        switch(args[0]){
            case 'quote':
                if(content == null){
                    
                }
        }
    }
}