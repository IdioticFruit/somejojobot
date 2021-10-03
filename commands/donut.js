module.exports = {
    name: 'donut',
    description: "Reacts with a donut emoji.",
    execute(message, args){
        message.react('🍩')
        return message.channel.send("KAKYOIN OH MY GOOOOOD")
    }
}