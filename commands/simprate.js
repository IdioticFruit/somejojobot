const PREFIX = "cnbt!";

module.exports = {
    name: "simprate",
    description: "Deep Purple rates you out of 100",
    async execute (message){
    let msg = message.content.toLowerCase();
    let args = message.content.substring(PREFIX.length).split(/ +/g);

    if (msg.startsWith(PREFIX + 'simprate')){
        let number = Math.floor(Math.random() * 101);
        if (!args[1]){
        return message.channel.send('You are '+number+'% simp')
        } else {
            let user =message.mentions.users.first();
            if (!user){
                return message.channel.send('Please include who you are rating')
            }
            return message.channel.send(''+user.username+' is '+number+'% simp')
        }
    }
    }
}