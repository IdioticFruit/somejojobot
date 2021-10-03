const { execute } = require("./ambulance");

module.exports = {
    name: 'noice',
    description: "*click* noice",
    execute(message, args){
        message.channel.send('https://tenor.com/view/noice-nice-click-gif-8843762')
    }
}