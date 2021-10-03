module.exports = {
    name: 'ringring',
    description: "Sends a funny banana phone message.",
    execute(message, args){
        message.channel.send('RING RING RING RING BANANA PHONE');
    }
};