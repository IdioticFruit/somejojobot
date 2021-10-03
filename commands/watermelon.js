module.exports = {
    name: 'watermelon',
    description: "Reacts with a watermelon emoji.",
    execute(message, args){
        message.react('🍉')
        return message.channel.send("Watermelon for you")
    }
}