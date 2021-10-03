const PREFIX = "cnbt!";

module.exports = {
    name: 'ppsize',
    description: 'Deep Purple says how long your pp is',
    async execute (message){
    let msg = message.content.toLowerCase();
    let args = message.content.substring(PREFIX.length).split(/ +/g);

    if (msg.startsWith(PREFIX + 'ppsize')){
      let number = Math.floor(Math.random() * 11);
      if (!args[1]){
      return message.channel.send('Your pp is '+number+' inches long')
      } else {
          let user = message.mentions.users.first();
          if (!user){
              return message.channel.send('Please include who you are rating.')
          }
          return message.channel.send(''+user.username+'s pp is '+number+' inches long')
      }
    }
    }
}