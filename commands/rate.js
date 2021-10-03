const PREFIX = "cnbt!";

module.exports = {
    name: "rate",
    description: "Deep Purple rates you out of 10",
    async execute (message){
    let msg = message.content.toLowerCase();
    let args = message.content.substring(PREFIX.length).split(/ +/g);

    if (msg.startsWith(PREFIX + 'rate')){
        let number = Math.floor(Math.random() * 11);
        if (!args[1]){
        return message.channel.send('I would rate you a '+number+'/10')
        } else {
            let user =message.mentions.users.first();
            if (!user){
                return message.channel.send('Please include who you are rating')
            }
            return message.channel.send('I would rate '+user.username+' a '+number+'/10')
        }
    }
    }
}