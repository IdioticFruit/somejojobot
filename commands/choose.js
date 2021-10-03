const PREFIX = 'cnbt!';

module.exports = {
    name: 'choose',
    description: 'DP chooses between two options for you',
    execute (message){
        const args = message.content.slice(PREFIX.length).trim().split(/ +/);
        let number = Math.floor(Math.random() * 2)
        let firstChoice = args[1]
        let secondChoice = args.slice(3).join(" ")

        if (number == 0){
            message.channel.send(`I choose ${firstChoice}`)
        } 
        if (number == 1){
            message.channel.send(`I choose ${secondChoice}`)
        }
    }
}