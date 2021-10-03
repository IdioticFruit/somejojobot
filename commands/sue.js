module.exports = {
    name: 'sue',
    description: 'Deep Purple sues someone you want',
    execute(message, args){
        const user = message.mentions.users.first();

        if(!user) {
            return message.reply("I'm recording you, why don't you say it again? This video evidence will be used in court and I'm going to talk to your manager and sue you.")
        } else {
            message.channel.send(`${user.username}, ${message.author.username} wanted me to sue you. My asian parents wanted me to become a lawyer so I did and now you're going to get sued. I hope you feel good about yourself.`)
        }
    }
}