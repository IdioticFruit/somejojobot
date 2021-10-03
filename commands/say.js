module.exports = {
    name: 'say',
    description: 'simon says type command',
    execute(message, args){
        if(message.author.id !== '595038661939298318') return;
        let msg;
        let textchannel = message.mentions.channels.first()
        message.delete()

        if(textchannel){
            msg = args.slice(1).join(" ");
            textchannel.send(msg)
        } else {
            msg = args.join(" ");
            message.channel.send(msg)
        }
    }
}