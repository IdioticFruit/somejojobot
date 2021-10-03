const PREFIX = 'cnbt!';
const Discord = require('discord.js');

module.exports = {
    name: 'hug',
    description: 'give someone a hug',
    async execute (message){

    let msg = message.content.toLowerCase();
    let args = message.content.substring(PREFIX.length).split(/ +/g);

    if(msg.startsWith(PREFIX + 'hug')){

    let user = message.mentions.users.first();

    if(!user){
        let embed = new Discord.MessageEmbed()
        .setTitle("I give you a hug! :D")
        .setColor('#55edd0')
        .setImage("https://c.tenor.com/OXCV_qL-V60AAAAM/mochi-peachcat-mochi.gif")
    message.channel.send(embed)
    } 
    
    if(user){
        let user = message.mentions.users.first();
        let number = Math.floor(Math.random * 5)

        if (number == 0){
            let embed = new Discord.MessageEmbed()
                .setTitle(`${message.author.username} gives ${user.username} a warm hug!`)
                .setImage("https://acegif.com/wp-content/gif/anime-hug-6.gif")
                .setColor('#55edd0')
            message.channel.send(embed)
            }
            if (number == 1){
                let embed = new Discord.MessageEmbed()
                .setTitle(`${message.author.username} gives ${user.username} a warm hug!`)
                .setImage("https://i.pinimg.com/originals/1d/ee/6f/1dee6f355218d364a11b06766b42609d.gif")
                .setCololr('#55edd0')
                message.channel.send(embed)
            }
            if (number == 2){
                let embed = new Discord.MessageEmbed()
                .setTitle(`${message.author.username} gives ${user.username} a warm hug!`)
                .setImage("https://acegif.com/wp-content/gif/anime-hug-59.gif")
                .setColor('#55edd0')
                message.channel.send(embed)
            }
            if (number == 3){
                let embed = new Discord.MessageEmbed()
                .setTitle(`${message.author.username} gives ${user.username} a warm hug!`)
                .setImage("https://i.imgur.com/ntqYLGl.gif")
                .setColor('#55edd0')
                message.channel.send(embed)
            }
            if (number == 4){
                let embed = new Discord.MessageEmbed()
                .setTitle(`${message.author.username} gives ${user.username} a warm hug!`)
                .setImage("https://media.tenor.com/images/c2e5126c39ad5f3a1a2ae31f3e784da8/tenor.gif")
                .setColor('#55edd0')
                message.channel.send(embed)
            }
        }
    }   
    }
}
