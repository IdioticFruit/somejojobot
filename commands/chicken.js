module.exports = {
    name: 'chicken',
    description: "Reacts with a chickenemoji.",
    execute(message, args){
        message.react('🍗')
        return message.channel.send("Shhhh don't tell Avdol...")
    }
}