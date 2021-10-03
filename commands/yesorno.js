module.exports = {
    name: 'yesorno',
    description: 'DP chooses yes or no for if youre having trouble choosing something.',
    execute (message, args){
        let number = Math.floor(Math.random() * 2);
        if (number == 0){
            return message.channel.send("Yes.")
        } 
        if (number == 1){
            return message.channel.send("No.")
        }
    }
}