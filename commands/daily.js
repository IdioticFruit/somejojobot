const Discord = require('discord.js');
const PREFIX = "cnbt!";
const enmap = require('enmap');
const ms = require('ms');

const eco = new enmap({
    name: 'economy',
    cloneLevel: 'deep',
    fetchAll: false,
    autoFetch: true
});

const cooldowns = new enmap({
    name: 'cooldowns',
    cloneLevel: 'deep',
    fetchAll: false,
    autoFetch: true
});

module.exports = {
    name: 'daily',
    description: 'gives you your daily amount of money',
    async execute (message){
        if(!message.content.startsWith(PREFIX)) return;
        if(message.author.bot) return;
        if(!message.guild) return;

        const args = message.content.slice(PREFIX.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();

        if(command == 'daily'){
            const cooldowndata = await cooldowns.get(`${message.author.id}-${message.guild.id}-daily`);

            if(parseInt(cooldowndata) > Date.now()) return message.reply(`Please wait ${ms(parseInt(cooldowndata) - Date.now(), {long: true})}`)

            await eco.ensure(`${message.author.id}-${message.guild.id}`, 0);
            const currentBalance = await eco.get(`${message.author.id}-${message.guild.id}`);
            eco.set(`${message.author.id}-${message.guild.id}`, currentBalance + 100);

            message.channel.send(new Discord.MessageEmbed()
                .setTitle("💸 Daily Reward! 💸")
                .setDescription(`You have claimed your daily reward! Your new balance is now ${currentBalance + 100}!`).setColor("#00ff44")
            )

            cooldowns.set(`${message.author.id}-${message.guild.id}-daily`, Date.now() + ms("24h"))
        }
    }
}