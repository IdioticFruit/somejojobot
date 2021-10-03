module.exports = {
    name: 'frick',
    description: 'DP and SCB',
    async execute(message, args){
        let filter = m => m.author.id === message.author.id

        message.channel.send("Swiss Cheese.. I-").then(() => {
            message.channel.awaitMessages(filter, {
                max: 1,
                time: 600000,
                errors: ['time']
                
        })
        .then(message => {
            let number = Math.floor(Math.random() * 3);

            if(number == 0){
                message = message.first()
                message.channel.send("response 1.")
                return;
            } else if (number == 1){
                message = message.first()
                message.channel.send("response 2.")
                return;
            } else if (number == 2){
                message = message.first()
                message.channel.send("response 3.")
                return;
            }
        })
        .then(() => {
            message.channel.awaitMessages(filter, {
                max: 1,
                time: 600000,
                errors: ['time']
                
        })
        .then(message => {
            let number = Math.floor(Math.random() * 3);

            if(number == 0){
                message = message.first()
                message.channel.send("response 4.")
                return;
            } else if (number == 1){
                message = message.first()
                message.channel.send("response 5.")
                return;
            } else if (number == 2){
                message = message.first()
                message.channel.send("response 6.")
                return;
            }
        })
        .then(() => {
            message.channel.awaitMessages(filter, {
                max: 1,
                time: 600000,
                errors: ['time']
                
        })
        .then(message => {
            let number = Math.floor(Math.random() * 3);

            if(number == 0){
                message = message.first()
                message.channel.send("third bit.")
                return;
            } else if (number == 1){
                message = message.first()
                message.channel.send("also third bit.")
                return;
            } else if (number == 2){
                message = message.first()
                message.channel.send("still 3rd bit.")
                return;
            }
        })
        .then(() => {
            message.channel.awaitMessages(filter, {
                max: 1,
                time: 600000,
                errors: ['time']
                
        })
        .then(message => {
            let number = Math.floor(Math.random() * 3);

            if(number == 0){
                message = message.first()
                message.channel.send("4th batch.")
                return;
            } else if (number == 1){
                message = message.first()
                message.channel.send("fourth batch too.")
                return;
            } else if (number == 2){
                message = message.first()
                message.channel.send("also fourth batch.")
                return;
            }
        })
        .then(() => {
            message.channel.awaitMessages(filter, {
                max: 1,
                time: 600000,
                errors: ['time']
                
        })
        .then(message => {
            let number = Math.floor(Math.random() * 3);

            if(number == 0){
                message = message.first()
                message.channel.send("5th batch.")
                return;
            } else if (number == 1){
                message = message.first()
                message.channel.send("fifth batch too.")
                return;
            } else if (number == 2){
                message = message.first()
                message.channel.send("also fifth batch.")
                return;
            }
        })
        .then(() => {
            message.channel.awaitMessages(filter, {
                max: 1,
                time: 600000,
                errors: ['time']
                
        })
        .then(message => {
            let number = Math.floor(Math.random() * 3);

            if(number == 0){
                message = message.first()
                message.channel.send("6th batch.")
                return;
            } else if (number == 1){
                message = message.first()
                message.channel.send("sixth batch too.")
                return;
            } else if (number == 2){
                message = message.first()
                message.channel.send("also sixth batch.")
                return;
            }
        })
    })
    })
    })
    })
})
})
    
        
}

    
}