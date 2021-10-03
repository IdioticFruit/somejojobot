module.exports = {
    name: 'ping',
    description: "Lets you have a ping pong match.",
    execute(message, args){
        message.channel.send("f!pong");
    }
};