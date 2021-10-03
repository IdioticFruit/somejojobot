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

const ecooldowns = new enmap({
    name: 'cooldowns',
    cloneLevel: 'deep',
    fetchAll: false,
    autoFetch: true
});

module.exports = {
    name: 'bal',
    description: 'shows your balance',
    async execute (message){
        if(!message.content.startsWith(PREFIX)) return;
        if(message.author.bot) return;
        if(!message.guild) return;

        const args = message.content.slice(PREFIX.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();

        if(command == "bal"){
            await eco.ensure(`${message.author.id}-${message.guild.id}`, 0);
            const currentBalance = await eco.get(`${message.author.id}-${message.guild.id}`);

            message.channel.send(new Discord.MessageEmbed()
            .setTitle("💸 Your Balance! 💸")
            .setDescription(`Your current balance is \`${currentBalance}\``).setColor("#00ff44")
            )
        }
    }
}