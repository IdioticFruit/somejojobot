const Discord = require('discord.js');
const PREFIX = "cnbt!";
const fetch = require("node-fetch");
const querystring = require("querystring");

module.exports = {
    name: "define",
    description: "define a word from the urban dictionary",
    async execute (message){
        const args = message.content.substring(PREFIX.length).split(/ +/g)

    if (message.content.startsWith(`${PREFIX}define`)) {
        const searchString = querystring.stringify({ term: args.splice(1).join(' ') })

        if (!searchString) return message.channel.send("You need to specify something to search")

        const { list } = await fetch(`https://api.urbandictionary.com/v0/define?${searchString}`).then(r => r.json())

        if (!list.length) return message.channel.send('No results found.')

        const [fetched] = list

        const trim = (str, max) => ((str.length > max) ? `${str.slice(0, max - 3)}...` : str)

        const embed = new Discord.MessageEmbed()
            .setColor(`#00a2ff`)
            .setTitle(fetched.word)
            .setURL(fetched.permalink)
            .addFields(
                { name: 'Definition', value: trim(fetched.definition, 1024) },
                { name: 'Example', value: trim(fetched.example, 1024) },
                { name: 'Rating', value: `${fetched.thumbs_up} 👍. ${fetched.thumbs_down} 👎.`},
            )

            return message.channel.send(embed)
    }
    }
}