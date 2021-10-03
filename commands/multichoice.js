const Discord = require('discord.js');
const PREFIX = 'cnbt!';

module.exports = {
    name: 'multichoice',
    description: 'make a multiple choice poll',
    async execute (message){
        let msg = message.content.toLowerCase();
    let args = message.content.substring(PREFIX.length).split(/ +/g);

    if(msg.startsWith(PREFIX + 'multichoice')){
        if (!args[1]){
            return message.channel.send('Please include how many options your poll will have. (2 - 6)')
        }
        if (!args[2]){
            return message.channel.send('Please include what you are polling.')
        }
        const poll = new Discord.MessageEmbed()
        .setTitle('Poll:')
        .setDescription(`\`${args.slice(2).join(" ")}\``)
        .setColor('#ff7b00');
        let amount = args[1];
        if (isNaN(amount) || amount > 6 || amount < 2){
            return message.channel.send('Please include a number between two and six as your first word.')
        }
        let actualAmount = Math.floor(amount);
        if (actualAmount == 2){
            await message.channel.send(poll).then(async function (embedMessage){
                await embedMessage.react('1️⃣')
                await embedMessage.react('2️⃣')
            })
        }
        if (actualAmount == 3){
            await message.channel.send(poll).then(async function (embedMessage){
                await embedMessage.react('1️⃣')
                await embedMessage.react('2️⃣')
                await embedMessage.react('3️⃣')
            })
        }
        if (actualAmount == 4){
            await message.channel.send(poll).then(async function (embedMessage){
                await embedMessage.react('1️⃣')
                await embedMessage.react('2️⃣')
                await embedMessage.react('3️⃣')
                await embedMessage.react('4️⃣')
            })
        }
        if (actualAmount == 5){
            await message.channel.send(poll).then(async function (embedMessage){
                await embedMessage.react('1️⃣')
                await embedMessage.react('2️⃣')
                await embedMessage.react('3️⃣')
                await embedMessage.react('4️⃣')
                await embedMessage.react('5️⃣')
            })
        }
        if (actualAmount == 6){
            await message.channel.send(poll).then(async function (embedMessage){
                await embedMessage.react('1️⃣')
                await embedMessage.react('2️⃣')
                await embedMessage.react('3️⃣')
                await embedMessage.react('4️⃣')
                await embedMessage.react('5️⃣')
                await embedMessage.react('6️⃣')
            })
        }
    }
    }
}