module.exports = {
    name: 'ambulance',
    description: "Call an ambulance",
    execute(message, args){
        message.channel.send('An ambulance has arrived but theres something fishy about it... its driving in reverse? OH MY GOD IT RAN THE PATIENT OVER!');
    }
}