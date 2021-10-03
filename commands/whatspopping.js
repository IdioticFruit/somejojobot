module.exports = {
    name: 'whatspopping',
    description: 'reacts with a server emoji :o',
    execute(message, args){
        message.react(":Whatspopping:822918358965157939")
        message.channel.send("What's popping bby girl")
    }
}