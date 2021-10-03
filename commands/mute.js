const Discord = require("discord.js");
const ms = require('ms');

module.exports = {
    name: 'mute',
    description: 'mutes you',
    async execute (message, args){
        if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply("You can't use that!");

        const user = message.mentions.users.first();
        if(!user) return message.reply("You didn't mention anyone!");

        let member;

        try{
            member = await message.guild.members.fetch(user);
        } catch(err) {
            member = null;
        }
        if (!member) return message.reply("They aren't in the server!");

        let rawTime = args[1];
        let time = ms(rawTime);
        if(!time) return message.reply("You didn't specify a time!");
        

        let reason = args.splice(2).join(' ');
        if(!reason) message.channel.send(`**${user}** has been muted by **${message.author}** for spam!`)

        let channel = message.guild.channels.cache.find(channel => channel.name === "detention");
        let log = new Discord.MessageEmbed()
        .setTitle('User Muted')
        .addField('User:', user, true)
        .addField('By:', message.author, true)
        .addField('Expires:', rawTime)
        .addField('Reason:', reason)
        channel.send(log)

        const embed = new Discord.MessageEmbed()
        .setTitle('You were muted!')
        .addField('Expires:', rawTime, true)
        .addField('Reason:', reason, true);

        try {
            user.send(embed);
        } catch(err) {
            console.warn(err);
        }

        const role = message.guild.roles.cache.find(role => role.name === "Muted");

        member.roles.add(role);

        setTimeout(async() => {
            member.roles.remove(role);
        }, time)

        message.channel.send(`**${user.username}** has been muted by **${message.author.username}** for **${rawTime}**!`);
    }
}