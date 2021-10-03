const fetch = require("node-fetch");
const PREFIX = "cnbt!";

module.exports = {
    name: 'joke',
    description: 'Deep Purple tells a joke',
    async execute (message){
    let msg = message.content.toLowerCase();
    let args = message.content.substring(PREFIX.length).split(/ +/g);

    if(msg.startsWith(PREFIX + 'joke')){
        let getJoke = async () => {
            let result = await fetch('https://official-joke-api.appspot.com/random_joke')
            let json = await result.json()
            return json
        }
        let joke = await getJoke()

        message.reply(`
        Here's your joke
        
        ${joke.setup}
        
        ${joke.punchline}`)
    }
    }
}