const PREFIX = "cnbt!";

module.exports = {
    name: 'kill',
    description: 'kill someone',
    async execute (message){
    let msg = message.content.toLowerCase();
    let args = message.content.substring(PREFIX.length).split(/ +/g);

    if (msg.startsWith(PREFIX + 'kill')){
        let user = message.mentions.users.first();
        let number = Math.floor(Math.random() * 3);
        if (user === message.author){
            message.channel.send("Don't do it, you have so much to live for! ૮ ◞ ﻌ ◟ ა")
        }
        if(message.author.id === '595038661939298318'){
            message.channel.send(message.author.username + 's stand turned ' + user.username + ' into a donut.')
        }
        if (!user){
            return message.channel.send('Please include who you are killing.')
        }
        if (number == 1){
            if(message.author.id === '595038661939298318') return;
            if (user === message.author){
                return;
            }
            message.channel.send(message.author.username + 's stand yeeted ' + user.username + ' into the sun.')
        }
        if (number == 2){
            if(message.author.id === '595038661939298318') return;
            if (user === message.author){
                return;
            }
            message.channel.send(message.author.username + ' tried to kill ' + user.username + ' but ' + user.username + ' defended using their stand.')
        }
        if (number == 0){
            if(message.author.id === '595038661939298318') return;
            if (user === message.author){
                return;
            }
            message.channel.send(message.author.username + 's stand tried to stab ' + user.username + ' with a donut, but failed and was donutted by ' + user.username + 's stand')
        }
    }
    }
}