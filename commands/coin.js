const PREFIX = "cnbt!";

module.exports = {
    name: 'coin',
    description: 'flip a coin',
    async execute (message){
        let msg = message.content.toLowerCase();
    let args = message.content.substring(PREFIX.length).split(/ +/g);

    if (msg.startsWith(PREFIX + 'coin')){
        let number = Math.floor(Math.random() * 2);
        if (number == 1){
            message.channel.send('Heads')
        }
        if (number == 0){
            message.channel.send('Tails')
        }
    }
    }
}