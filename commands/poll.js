const Discord = require('discord.js');
const PREFIX = "cnbt!";

module.exports = {
    name: 'poll',
    description: 'make a yes or no poll',
    async execute (message){
    let msg = message.content.toLowerCase();
    let args = message.content.substring(PREFIX.length).split(/ +/g);

    if(msg.startsWith(PREFIX + 'poll')){
        if (!args[1]){
            return message.channel.send('Please include what you are polling.')
        }
        const poll = new Discord.MessageEmbed()
        .setTitle('Poll:')
        .setDescription(`\`${args.slice(1).join(" ")}\``)
        .setColor('#ff7b00');
        message.channel.send(poll).then(async function (embedMessage) {
            await embedMessage.react('👍')
            await embedMessage.react('👎');
        })
    }
    }
}