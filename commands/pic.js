const Discord = require('discord.js');
const PREFIX = "cnbt!";
const request = require('request');
const cheerio = require('cheerio-select');

module.exports = {
    name: 'pic',
    description: 'search for any picture',
    execute(message){
        let args = message.content.substring(PREFIX.length).split(/ +/g);
            let search = args.splice(1).join(' ');
        
            if (message.content === PREFIX + `pic ${search}`){
                let results = search;
                image(message, results);
            }

        function image (message, results){

            var options = {
                url: "http://results.dogpile.com/serp?qc=images&q=" + results,
                method: "GET",
                headers: {
                    "Accept": "text/html",
                    "User-Agent":"Chrome"
                }
            };
            request(options, function (error, response, responseBody){
                if (error){
                    return console.log('An error has occurred.')
                }//if there is an error.
                $ = cheerio.load(responseBody);
                var links = $(".image a.link");
                var urls = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr('href'));
                if (!urls.length){
                    return message.channel.send("No results found")
                }//See if there are any results
                const embed = new Discord.MessageEmbed()
                .setTitle(results)
                .setImage(urls[Math.floor(Math.random() * urls.length)])
                .setFooter('Searched by ' + message.author.username)
                .setColor('#D4AF37')
                message.channel.send(embed)
            })
        }
    }
}