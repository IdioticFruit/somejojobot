module.exports = {
    name: 'banana',
    description: "Gives the link for a banana song.",
    execute(message, args){
        message.channel.send('<https://www.youtube.com/watch?v=eEYviw35to0>');
    }
};