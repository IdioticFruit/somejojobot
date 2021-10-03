const PREFIX = "cnbt!";

module.exports = {
    name: '8ball',
    description: 'ask 8ball a question',
    async execute (message){
    let msg = message.content.toLowerCase();
    let args = message.content.substring(PREFIX.length).split(/ +/g);

    if (msg.startsWith(PREFIX + '8ball')){
        if (!args[2]){
            return message.channel.send('Please ask a full question.')
        }
        let number = Math.floor(Math.random() * 6);
        if (number == 0){
            return message.channel.send('Yes, definitely!')
        }
        if (number == 1){
            return message.channel.send('No, absolutely not!')
        }
        if (number == 2){
            return message.channel.send('It is uncertain.')
        }
        if (number == 3){
            return message.channel.send('Dont count on it.')
        }
        if (number == 4){
            return message.channel.send('Signs point to yes.')
        }
        if (number == 5){
            return message.channel.send('Cannot predict now, ask later.')
        }
    }
    }
}