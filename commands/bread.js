module.exports = {
    name: 'bread',
    description: "Reacts with a bread emoji.",
    execute(message, args){
        message.react('🍞')
        return message.channel.send("This is the joy for me. I. Love. Bread. I don't deny myself bread I have bread everyday.")
    }
}