module.exports = {
    name: 'iwantchoccymilk',
    description: "Reacts with a chocolate emoji.",
    execute(message, args){
        message.react('🍫')
        return message.channel.send("There now you have chocolate and milk. I tried.")
    }
}