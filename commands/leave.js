module.exports = {
    name: 'leave',
    description: 'leaves the vc',
    async execute(message, args){
        const voiceChannel = message.member.voice.channel;

        if(!voiceChannel) return message.channel.send("You need to be in the vc to stop the music.");
        await voiceChannel.leave();
        await message.channel.send("Leaving vc.").then(m => m.delete({timeout: 4000}))
    }
}