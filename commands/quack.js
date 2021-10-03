module.exports = {
    name: 'quack',
    description: "Reacts with a duck emoji.",
    execute(message, args){
        message.react('🐥')
        return message.channel.send("Quack <https://www.youtube.com/watch?v=aqCxlxclyzo&ab_channel=Schurikenz>")
    }
}