const PREFIX = "cnbt!";

module.exports = {
    name: "gayrate",
    description: "Deep Purple rates how gay you are",
    async execute (message){
    let msg = message.content.toLowerCase();
    let args = message.content.substring(PREFIX.length).split(/ +/g);

    if (msg.startsWith(PREFIX + 'gayrate')){
        let number = Math.floor(Math.random() * 101);
        if (!args[1]){
        return message.channel.send('I would rate you '+number+'% gay')
        } else {
            let user =message.mentions.users.first();
            if (!user){
                return message.channel.send('Please include who you are rating')
            }
            return message.channel.send('I would rate '+user.username+' '+number+'% gay')
        }
    }
    }
}