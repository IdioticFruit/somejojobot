const Discord = require("discord.js");

module.exports = {
    name: 'warn',
    description: 'warns you',
    async execute (message, args){
        if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply("You can't use that!");

        var user = message.mentions.users.first();
        if(!user) return message.reply("You didn't mention anyone!");

        var member;

        try{
            member = await message.guild.members.fetch(user);
        } catch(err) {
            member = null;
        }
        if (!member) return message.reply("They aren't in the server!");
        
        var reason = args.splice(1).join(' ');
        if(!reason) message.channel.send(`**${user}** has been warned by **${message.author}**!`)

        var channel = message.guild.channels.cache.find(c => c.name === 'detention');

        var log = new Discord.MessageEmbed()
        .setTitle('User Warned')
        .addField('User:', user, true)
        .addField('By:', message.author, true)
        .addField('Reason:', reason)
        channel.send(log);

        var embed = new Discord.MessageEmbed()
        .setTitle('You were warned!')
        .setDescription(reason);

        try {
            user.send(embed);
        } catch(err) {
            console.warn(err);
        }

        channel.send(`**${user.username}** has been warned by **${message.author.username}**!`);
    }
}