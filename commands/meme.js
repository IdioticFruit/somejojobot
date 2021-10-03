const Discord = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
    name: 'meme',
    description: 'sends a meme',
    async execute (message, args){
        let msg = await message.channel.send("Fetching a meme, please wait a second!")
        fetch('https://meme-api.herokuapp.com/gimme')
            .then(res => res.json())
            .then(json => {
                let embed = new Discord.MessageEmbed()
                    .setTitle(json.title)
                    .setImage(json.url)
                    .setFooter(`Link: ${json.postLink} | Subreddit: ${json.subreddit}`)
                    .setColor("#D4AF37")
                msg.edit(embed)
            });
    }
}