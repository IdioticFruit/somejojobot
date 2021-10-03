const PREFIX = "cnbt!";

module.exports = {
    name: 'kick',
    description: 'kick someone from the server',
    async execute (message){
        let msg = message.content.toLowerCase();
    let args = message.content.substring(PREFIX.length).split(/ +/g);

    if(msg.startsWith(PREFIX + 'kick')){
        if(!message.member.hasPermission("KICK_MEMBERS")) return message.reply("You don't have permission.")

        const user = message.mentions.users.first()
        if(!user) {
            message.reply('Who do I kick you potato?')
            return
        }
        const member = message.guild.member(user)
        if(member){
            member.kick('One guy got kicked').then(() => {
                let reason = args[2];
                if(!reason) return;
                message.channel.send(`**${message.author.username}** kicked **${user.username}** for *${reason}*.`)
            })
        }
    }
    }
}