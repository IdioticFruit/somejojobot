const PREFIX = 'cnbt!';

module.exports = {
    name: 'topbottom',
    description: 'are you a top or a bottom',
    execute(message, args){
    let msg = message.content.toLowerCase();

    if (msg.startsWith(PREFIX + 'topbottom')){
        let user = message.mentions.users.first();
        let number = Math.floor(Math.random() * 2);
        
        if (number == 1){
            if (!user){
                message.channel.send('You are a top!')
            } else {
                message.channel.send(user.username + ' is a top!')
            }
        }

        if (number == 0){
            if (!user){
                message.channel.send('You are a sub!')
            } else {
            message.channel.send(user.username + ' is a sub!')
            }
        }
      }
    }
}