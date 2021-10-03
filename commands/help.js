const Discord = require('discord.js');
const PREFIX = "cnbt!";

module.exports = {
    name: 'help',
    description: 'lists all the commands',
    async execute (message){
    let msg = message.content.toLowerCase();
    let args = message.content.substring(PREFIX.length).split(/ +/g);

    if (msg.startsWith(PREFIX + 'help')){
        let embed = new Discord.MessageEmbed()
        .setTitle('Commands')
        .setDescription('This bot has 14 random commands. Try to find them all. Prefix is cnbt!')
        .setImage('https://i.pinimg.com/originals/0b/46/d7/0b46d78da89bcd6c56b139477d1a5ece.gif')
        .setColor('#55edd0')
        .addField('fun commands','joke, 8ball, rps, rate, gayrate, simprate, ppsize, coin, topbottom, sue, frick, rick, stick, stroll, hug',true)
        .addField('weird commands','keeloveranddie, ringring, dialweed, noice, lemon, cri, quack, obama, speakgerman, countspanish',true)
        .addField('food commands','watermelon, choccymilk, iwantchoccymilk, bread, donut, bananuh, chicken, dogbread, catbaguette, potato, bubbletea',true)
        .addField('helpful commands','define, calc, poll, multichoice, rank, holywater, eyebleach, therapy, yesorno, choose',true)
        .addField('jojo references','jjba, dojyaa~n, callambulance, kill, chicken, part1au, part1, part2, part3, part4, part5 part6, part7, part8, volarevia',true)
        .addField('song commands','play <song name or link>, leave, banana, bananas, bananabone, catbanana, catbananaf, enormouspp',true)
        .addField('moderation commands','kingcrimson, kick, warn, mute, say, delete (must have permissions to use commands)',true)
        .addField('picture commands','doge, kitteh, goos, snek, seal, cursed, meme, pic <whatever you want>',true)
        .addField('reaction commands','watermelon, choccymilk, iwantchoccymilk, bread, donut, bananuh, whatspopping, gregg',true)
        message.channel.send(embed)
    } 
    }
}