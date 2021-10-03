const Discord = require('discord.js');
const cheerio = require('cheerio-select');
const request = require('request');
const PREFIX = "cnbt!";

module.exports = {
    name: 'seal',
    description: 'send cute seal pics',
    async execute (message){
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
                .setTitle('Seal :D')
                .setImage(urls[Math.floor(Math.random() * urls.length)])
                .setFooter('Searched by ' + message.author.username)
                .setColor('#D4AF37')
                message.channel.send(embed)
            })
        }
        let args = message.content.substring(PREFIX.length).split(/ +/g);
            let search = 'seal';
        
            if (message.content === PREFIX + `${search}`){
                let results = 'cute seal';
                image(message, results);
            }
        
    }
}