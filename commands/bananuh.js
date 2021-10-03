module.exports = {
    name: 'bananuh',
    description: "Reacts with a banana emoji.",
    execute(message, args){
        message.react('🍌')
        return message.channel.send("Hello there, what banana would you like? We have banana, bananas, bananabone, bananuh, and bananacat.")
    }
}