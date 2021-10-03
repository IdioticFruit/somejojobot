module.exports = {
    name: 'potato',
    description: 'react with potato and send funny message',
    execute (message, args){
        message.react('🥔')
        return message.channel.send("Oooh potato! Be careful though, the irish people might get you if they see you holding it.")
    }
}