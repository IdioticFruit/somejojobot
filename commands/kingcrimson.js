module.exports = {
    name: "kingcrimson",
    description: "clears messages",
    
        async execute (client, message, args) {

            if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply('Lack of perms.')

            const amount = args.join(" ");
    
            if(!amount) return message.reply('Please provide an amount of messages for me to delete')
    
            if(amount > 100) return message.reply(`You cannot clear more than 100 messages at once`)
    
            if(amount < 1) return message.reply(`You need to delete at least one message`)
    
            await message.channel.messages.fetch({limit: amount}).then(messages => {
                message.channel.bulkDelete(messages
        )});
    
        message.channel.send('Success!').then(m => m.delete({timeout: 1500}))
    }
}