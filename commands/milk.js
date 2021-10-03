module.exports = {
    name: 'milk',
    description: "Gives you white choccy milk",
    execute(message, args){
        message.react('🥛')
        return message.channel.send("Heres some milk, we ran out of the choccy ones")
    }
}