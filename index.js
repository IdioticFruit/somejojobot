const Discord = require ('discord.js');
const bot = new Discord.Client({partials: ["MESSAGE", "USER", "REACTION"]});

const Canvacord = require("canvacord");
const db = require('quick.db');

bot.login('NzI1ODM5NjQyOTQ3MjIzNTY1.XvUrdA.j7-KMmmvSnPa-31pTl4JM0sSAtE');
const token = 'NzI1ODM5NjQyOTQ3MjIzNTY1.XvUrdA.j7-KMmmvSnPa-31pTl4JM0sSAtE';
const PREFIX = 'cnbt!';

const fs = require('fs');
bot.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    bot.commands.set(command.name, command);
}

const { EventEmitter } = require('events');
const { networkInterfaces } = require('os');

require('events').EventEmitter.defaultMaxListeners = 25;

bot.on('ready', () =>{
    console.log('Deep Purple is online!');
    bot.user.setActivity("9 servers | cnbt!", { type: 'WATCHING' }).catch(console.error);
});

//Discord mod vv
bot.on('message', message=>{
    if(message.content === "I'm 13" || message.content === "im 13" || message.content === "i'm 13" || message.content === "Im 13" || message.content === "i'm 14" || message.content === "im 14" || message.content === "I'm 14" || message.content === "Im 14"){
        message.channel.send(`Heyyyy ${message.author.username} :)`);
    let filter = m => m.author.id === message.author.id
    message.author.send ("So I heard you were 13 :)").then(() => {
    message.channel.awaitMessages(filter, {
        max: 1,
        time: 30000,
        errors: ['time']
    })
    .then(message => {
        message = message.first()
        if (message.content.includes ("yep") || message.content.includes ("yes") || message.content.includes ("yeah")) {
            message.channel.send("https://tenor.com/view/fruit-finger-cum-suggestive-gif-15513293 \nThis could be us :)")
        } else if (message.content.includes ("blocking") || message.content.includes ("no") || message.content.includes ("ew") || message.content.includes("alone")) {
            message.channel.send("I am very sorry, please don't block me. I will leave you alone :(")
        } else {
            message.channel.send("Must be a fucking bot account.. was hoping to get some minor pus$y, fuck.")
        }
    })
    .catch(collected => {
        message.channel.send(`Timeout`);
    });
    })
}
})

//Therapy command
bot.on('message', message => {
    if(message.author.bot) return;

    if(message.content === "cnbt!therapy"){
        if(message.author.bot) return;

        let filter = m => m.author.id === message.author.id

        message.channel.send("Hello this is Doctor DP, do you have any problems to tell me?").then(() => {
            message.channel.awaitMessages(filter, {
                max: 1,
                time: 600000,
                errors: ['time']
                
        })
        .then(message => {
            let number = Math.floor(Math.random() * 3);

            if(number == 0){
                message = message.first()
                message.channel.send("I am sorry to hear that.")
                return;
            } else if (number == 1){
                message = message.first()
                message.channel.send("I am here for you.")
                return;
            } else if (number == 2){
                message = message.first()
                message.channel.send("Don't worry, it will all get better.")
                return;
            }
        })
    })
    };
    

})

// Hidden comands (there's 14): -_-, oh my gah, rero, Show good sportsmanship,funny valentine speech, kira yoshikage speech, enrico pucci speech. where are the askers?, rip, popCat, catJAM, kekw, PogChamp, MonkaS, JUST SAY YOU KILLED HIM! JUST SAY IT!

bot.on('message', msg=>{
    if(msg.content.includes("-_-")){
        msg.channel.send("https://tenor.com/view/why-just-why-but-why-monkey-gif-14872882");
    }
})

bot.on('message', msg=>{
    if(msg.content.includes("kkk")){
        msg.channel.send("૮ ´• ﻌ ´• ა")
    }
})

bot.on('message', msg=>{
    if(msg.content.includes ('oh my god') || msg.content.includes ('oh my God') || msg.content.includes ('Oh my god') || msg.content.includes ('OH MY GOD') || msg.content.includes ('oh my gah') || msg.content.includes ('OH MY GAH')){
        msg.channel.send("૮ ⚆ﻌ⚆ა");
    }
})

bot.on('message', msg=>{
    if(msg.content === 'rero' || msg.content === 'Rero' || msg.content === 'RERO'){
        msg.channel.send("૮ ᴖﻌᴖა")
    }
})

bot.on('message', msg=>{
    if(msg.content ===  "Show good sportsmanship"){
        msg.channel.send("That was a great ping pong match Swiss Cheese Bot. I hope we can have another one soon ｡:ﾟ૮ ˶ˆ ﻌ ˆ˶ ა ﾟ:｡");
    }
})

bot.on('message', msg=>{
    if(msg.content === "Funny Valentine speech"){
        msg.channel.send("Suppose that you were sitting down at this table. The napkins are in front of you, which napkin would you take? The one on your ‘left’? Or the one on your ‘right’? The one on your left side? Or the one on your right side? Usually you would take the one on your left side. That is ‘correct’ too. But in a larger sense on society, that is wrong. Perhaps I could even substitute ‘society’ with the ‘Universe’. \nThe correct answer is that ‘It is determined by the one who takes his or her own napkin first.’ …Yes? If the first one takes the napkin to their right, then there’s no choice but for others to also take the ‘right’ napkin. The same goes for the left. Everyone else will take the napkin to their left, because they have no other option. This is ‘society’… Who are the ones that determine the price of land first? There must have been someone who determined the value of money, first. The size of the rails on a train track? The magnitude of electricity? Laws and Regulations? Who was the first to determine these things? Did we all do it, because this is a Republic? Or was it Arbitrary? \nNO! The one who took the napkin first determined all of these things! The rules of this world are determined by that same principle of ‘right or left?’! In a Society like this table, a state of equilibrium, once one makes the first move, everyone must follow! In every era, this World has been operating by this napkin principle. And the one who ‘takes the napkin first’ must be someone who is respected by all. It’s not that anyone can fulfill this role… Those that are despotic or unworthy will be scorned. And those are the ‘losers’. In the case of this table, the ‘eldest’ or the ‘Master of the party’ will take the napkin first… Because everyone ‘respects’ those individuals.");
    }
})

bot.on('message', msg=>{
    if(msg.content === "Kira Yoshikage speech"){
        msg.channel.send("My name is Yoshikage Kira. I'm 33 years old. My house is in the northeast section of Morioh, where all the villas are, and I am not married. I work as an employee for the Kame Yu department stores, and I get home every day by 8 PM at the latest. I don't smoke, but I occasionally drink. I'm in bed by 11 PM, and make sure I get eight hours of sleep, no matter what. After having a glass of warm milk and doing about twenty minutes of stretches before going to bed, I usually have no problems sleeping until morning. Just like a baby, I wake up without any fatigue or stress in the morning. I was told there were no issues at my last check-up. I'm trying to explain that I'm a person who wishes to live a very quiet life. I take care not to trouble myself with any enemies, like winning and losing, that would cause me to lose sleep at night. That is how I deal with society, and I know that is what brings me happiness. Although, if I were to fight I wouldn't lose to anyone.");
    }
})

bot.on('message', msg=>{
    if(msg.content === "Enrico Pucci speech"){
        msg.channel.send('Even if small details might go astray, there is no way one can defeat fate… Its inevitable. It will happen no matter what. I am the only exception. If i let you escape here, and I lose track of where you are… Then you will most likely grow, and try to defeat me… that is the destined future! I cant let you live! Even without Jolyne youre still fated to leave this prison and disappear at Cape Canaveral here, in this prison, before I sped up time, I would know exactly where you are… The only way to defeat my past destiny is to dispose of you is here! Thats why I stopped the passing of time here, right now! You have no choice but to hide inside that space in the wall! Make your resolution! Your resolution will lead to happiness, Emporio! THIS IS FOR THE GOOD OF HUMANITY! DIE, EMPORIO!!!');
    }
})

bot.on('message', message=>{
    if(message.content === "Where are the askers?"){
        message.channel.send("<https://www.youtube.com/watch?v=OTYmsqMKbOw> \nWheeere are the askers, my friend? We seee, there's no askers, anywhere. Where are the askers, WHERE ARE THE ASKERS? WE SEE NOBODY, NOBODY THAT ASKED YOU, in the world.")
    }
})

bot.on('message', message => {
    if(message.content === "rip" || message.content === "f" || message.content === "F" || message.content === "Rip" || message.content === "RIP"){
        message.channel.send('https://cdn.betterttv.net/emote/5c857788f779543bcdf37124/3x')
    }
})

bot.on('message', message => {
    if(message.content.includes("catJAM") || message.content.includes("CatJAM") || message.content.includes("catjam") || message.content.includes("Catjam")){
        message.channel.send("https://media.tenor.com/images/fbe87eaae3021042c02739d0634306f2/tenor.gif")
    }
})

bot.on('message', message => {
    if(message.content.includes("popCat") || message.content.includes("popcat") || message.content.includes("PopCat")){
        message.channel.send("https://media.tenor.com/images/dae19cf6b07682c4acf67dfc880f11f5/tenor.gif")
    }
})

bot.on('message', message =>{
    if(message.content.includes("KEKW") || message.content.includes("kekw")){
        message.channel.send("https://cdn.frankerfacez.com/emoticon/459046/4")
    }
})

bot.on('message', message => {
    if (message.content.includes("PogChamp") || message.content.includes("Pogchamp") || message.content.includes("pogchamp") || message.content.includes("Pagchomp") || message.content.includes("Pogchamp") || message.content.includes("pagchomp")){
    if(message.author.bot) return;
        message.channel.send("https://emoji.gg/assets/emoji/PogChamp.png")
    }
})

bot.on('message', message => {
    if (message.content.includes("MonkaS") || (message.content.includes("monkas"))){
        if(message.author.bot) return;
        message.channel.send("https://www.pngitem.com/pimgs/m/116-1167350_transparent-twitch-emote-monkas-monkas-png-png-download.png")
    }
})

bot.on('message', message => {
    if(message.content === "JUST SAY YOU KILLED HIM! JUST SAY IT!"){
        message.channel.send("Sir. Connor, was it? I'm afraid I'm going to have to stop you there. If this android self destructs we won't get anything out of it, and I'll have to sue you along with Michael and Michael's Dad.")
    }
})

//command handler
bot.on('message', message =>{
    if(!message.content.startsWith(PREFIX)) return;

    const args = message.content.slice(PREFIX.length).split(/ +/g);
    const command = args.shift().toLowerCase();

    if (command === '8ball'){
        bot.commands.get('8ball').execute(message, args);
    } else if (command == 'banana'){
        bot.commands.get('banana').execute(message, args);
    } else if (command == 'bananas'){
        bot.commands.get('bananas').execute(message, args);
    } else if (command === 'bananabone'){
        bot.commands.get('bananabone').execute(message, args);
    } else if (command === 'bananuh'){
        bot.commands.get('bananuh').execute(message, args);
    } else if (command === 'coin'){
        bot.commands.get('coin').execute(message, args);
    } else if (command == 'enormouspp'){
        bot.commands.get('enormouspp').execute(message, args);
    } else if (command === 'gayrate'){
        bot.commands.get('gayrate').execute(message, args);
    } else if (command === 'joke'){
        bot.commands.get('joke').execute(message, args);
    } else if (command === 'kill'){
        bot.commands.get('kill').execute(message, args);
    } else if (command === 'ping'){
        bot.commands.get('ping').execute(message, args);
    } else if (command === 'ppsize'){
        bot.commands.get('ppsize').execute(message, args);
    } else if (command === 'rate'){
        bot.commands.get('rate').execute(message, args);
    } else if (command === 'rps'){
        bot.commands.get('rps').execute(message, args);
    } else if (command == 'keeloveranddie'){
        bot.commands.get('keeloveranddie').execute(message, args);
    } else if (command == 'ringring'){
        bot.commands.get('ringring').execute(message, args);
    } else if (command == 'jjba'){
        bot.commands.get('jjba').execute(message, args);
    } else if (command == 'dojyaa~n'){
        bot.commands.get('dojyaa~n').execute(message, args);
    } else if (command == 'watermelon'){g
        bot.commands.get('watermelon').execute(message, args);
    } else if (command == 'choccymilk'){
        bot.commands.get('milk').execute(message,args);
    } else if (command == 'iwantchoccymilk'){
        bot.commands.get('iwantchoccymilk').execute(message, args);
    } else if (command == 'bread'){
        bot.commands.get('bread').execute(message, args);
    } else if (command == 'dialweed'){
        bot.commands.get('dialweed').execute(message, args);
    } else if (command === 'callambulance'){
        bot.commands.get('ambulance').execute(message, args);
    } else if (command === 'noice'){
        bot.commands.get('noice').execute(message, args);
    } else if (command === 'lemon'){
        bot.commands.get('lemon').execute(message, args);
    } else if (command === 'kingcrimson'){
        bot.commands.get('kingcrimson').execute(bot, message, args);
    } else if (command === 'calc'){
        bot.commands.get('calculator').execute(bot, message, args);
    } else if (command === 'cri'){
        bot.commands.get('cri').execute(message, args);
    } else if (command === 'kick'){
        bot.commands.get('kick').execute(message, args);
    } else if (command === 'poll'){
        bot.commands.get('poll').execute(message, args);
    } else if (command === 'multichoice'){
        bot.commands.get('multichoice').execute(message, args);
    } else if (command === 'help'){
        bot.commands.get('help').execute(message, args);
    } else if (command === 'define'){
        bot.commands.get('define').execute(message, args);
    } else if (command === 'warn'){
        bot.commands.get('warn').execute(message, args);
    } else if (command === 'mute'){
        bot.commands.get('mute').execute(message, args);
    } else if (command === 'kitteh'){
        bot.commands.get('kitteh').execute(message, args);
    } else if (command === 'doge'){
        bot.commands.get('doge').execute(message, args);
    } else if (command === 'cursed'){
        bot.commands.get('cursedimage').execute(message, args);
    } else if (command === 'pic'){
        bot.commands.get('pic').execute(message, args);
    } else if (command === 'meme'){
        bot.commands.get('meme').execute(message, args)
    } else if (command === 'goos'){
        bot.commands.get('goose').execute(message, args);
    } else if (command === 'donut'){
        bot.commands.get('donut').execute(message, args);
    } else if (command === 'simprate'){
        bot.commands.get('simprate').execute(message, args);
    } else if (command === 'obama'){
        bot.commands.get('obama').execute(message, args);
    } else if (command === 'say'){
        bot.commands.get('say').execute(message, args);
    } else if (command === 'chicken'){
        bot.commands.get('chicken').execute(message, args);
    } else if (command === 'quack'){
        bot.commands.get('quack').execute(message, args);
    } else if (command === 'holywater'){
        bot.commands.get('holywater').execute(message, args);
    } else if (command === 'eyebleach'){
        bot.commands.get('eyebleach').execute(message, args);
    } else if (command === 'speakgerman'){
        bot.commands.get('speakgerman').execute(message, args);
    } else if (command === 'urgay'){
        bot.commands.get('urgay').execute(message, args);
    } else if (command === 'bananacat'){
        bot.commands.get('bananacat').execute(message, args);
    } else if (command === 'countspanish'){
        bot.commands.get('countspanish').execute(message, args);
    } else if (command === 'play'){
        bot.commands.get('play').execute(message, args);
    } else if (command === 'leave'){
        bot.commands.get('leave').execute(message, args);
    } else if (command === 'topbottom'){
        bot.commands.get('topbottom').execute(message, args);
    } else if (command === 'delete'){
        bot.commands.get('delete').execute(message, args);
    } else if (command === 'frick'){
        bot.commands.get('frick').execute(message, args);
    } else if (command === 'sue'){
        bot.commands.get('sue').execute(message, args);
    } else if (command === 'yesorno'){
        bot.commands.get('yesorno').execute(message, args);
    } else if (command === 'snek'){
        bot.commands.get('snek').execute(message, args);
    } else if (command === 'seal'){
        bot.commands.get('seal').execute(message, args);
    } else if (command === 'rick'){
        bot.commands.get('rick').execute(message, args);
    } else if (command === 'stick'){
        bot.commands.get('stick').execute(message, args);
    } else if (command === 'stroll'){
        bot.commands.get('stroll').execute(message, args);
    } else if (command === 'dogbread'){
        bot.commands.get('dogbread').execute(message, args);
    } else if (command === 'catbanana'){
        bot.commands.get('catbanana').execute(message, args);
    } else if (command === 'catbananaf'){
        bot.commands.get('catbananaf').execute(message, args);
    } else if (command === 'part1'){
        bot.commands.get('part1').execute(message, args);
    } else if (command === 'part2'){
        bot.commands.get('part2').execute(message, args);
    } else if (command === 'part3'){
        bot.commands.get('part3').execute(message, args);
    } else if (command === 'part4'){
        bot.commands.get('part4').execute(message, args);
    } else if (command === 'part5'){
        bot.commands.get('part5').execute(message, args);
    } else if (command === 'part6'){
        bot.commands.get('part6').execute(message, args);
    } else if (command === 'part7'){
        bot.commands.get('part7').execute(message, args);
    } else if (command ==='part8'){
        bot.commands.get('part8').execute(message, args);
    } else if (command === 'part1au'){
        bot.commands.get('part1au').execute(message, args);
    } else if (command === 'choose'){
        bot.commands.get('choose').execute(message, args);
    } else if (command === 'volarevia'){
        bot.commands.get('volarevia').execute(message, args);
    } else if (command === 'potato'){
        bot.commands.get('potato').execute(message, args);
    } else if (command === 'catbaguette'){
        bot.commands.get('catbaguette').execute(message, args);
    } else if (command === 'bubbletea'){
        bot.commands.get('bubbletea').execute(message, args);
    } else if (command === 'hug'){
        bot.commands.get('hug').execute(message, args);
    } else if (command === 'whatspopping'){
        bot.commands.get('whatspopping').execute(message, args);
    } else if (command === 'gregg'){
        bot.commands.get('gregg').execute(message, args);
    } else if (command === 'a'){
        bot.commands.get('a').execute(message, args);
    }
})

const usersMap = new Map();
const LIMIT = 5;
const TIME = 5000;
const DIFF = 2000;

//antispam ^^ vv
bot.on('message', message => {
    if(message.author.bot) return;

    if(usersMap.has(message.author.id)) {
        const userData = usersMap.get(message.author.id);
        const { lastMessage, timer } = userData;
        const difference = message.createdTimestamp - lastMessage.createdTimestamp;
        let msgCount = userData.msgCount;
        console.log(difference);
        if(difference > DIFF) {
            clearTimeout(timer);
            userData.msgCount = 1;
            userData.lastmessage = message;
            userData.timer = setTimeout(() => {
                usersMap.delete(message.author.id);
            }, TIME);
            usersMap.set(message.author.id, userData);
        }
        else {
            ++msgCount;
            if(parseInt(msgCount) === LIMIT) {
            const role = message.guild.roles.cache.find(role => role.name === "Muted");
            message.member.roles.add(role);
            message.channel.send('You have been muted.');
            setTimeout(() => {
                message.member.roles.remove(role);
                message.channel.send('You have been unmuted.');
            }, 90000);
        } else {
            userData.msgCount = msgCount;
            usersMap.set(message.author.id, userData);
        }
        } 
    } else {
        let fn = setTimeout(() => {
            usersMap.delete(message.author.id);
        }, TIME);
        usersMap.set(message.author.id, {
            msgCount: 1,
            lastMessage: message,
            timer: fn
        });
    }
    
});

//logs dms to my bot
bot.on('message', message => {
    if(message.guild === null){
        if(message.author.id === '733769690765328394'){
            let msg = message.content
            console.log('Alexis: ' + msg)
            message.author.send("Hello. How are you? I am under da woter and am doing scb/dp lore rn! :)")
        } else {
            if(message.author.bot) return;
            let msg = message.content
            console.log(message.author.username + ': ' + msg);
            message.author.send("Some commands only work in a server! Please go to a server and test there if you don't want to break my code, thanks.")
        }
    }
})

let set = new Set(['sex','FUCKED','FUCK','clit','Clit','CLIT','COCK','caca','CACA','Caca','cācā','Cācā','ÇÀĆÃ','ĆÁÇÀ','kaka','Kaka','KAKA','jesus','Jesus','JESUS','christ','Christ','CHRIST','buttsex','yeah~','yeahh~','Yeah~','Yeahh~','YEAH~','YEAHH~','ah~','Ah~','AH~','AHH~','AHHH~','yes~','Yes~','YES~','YESS~','yess~','Yess~','ahh~','Ahh~','','blowjob','asss','dunce','aass','asshandler','merda','nigga','nigger','mineta','tits','titties','pussy','arseface','beech','beetch','beeetch','BITCH','HOE','hoes','fuckhat','shitass','DIDDLYDICKHEAD','dickbutt','diddlydick','damn','doodleass','noodlydick','dipshit','a$$','beetch','fuck','fucking','asscrack','asspul','asspul','shitbucket','FuCkInG','fuckin','Fuck','fUCK','FUCK','Shit','SHIT','ASSHOLE','FUCKER','FUCKING','ASS','ASSWIPE','SHITTING','a$$','$ex','Sex','fucker','fuckers','shit','shitbag','shitting','fucktrumpet','asstrumpet','ass','asswipe','assfucker','assmuncher','asshat','asshole','arse','arsehole','bullshit','sanavabeach','gay','hentai','hoe','retard','bitch','bitches','motherfucker','cunt','cock','cocksucker','cockslut','cum','semen','cumslut','dick','dickhead','dickface','penis','twat','rape','rapey','dildo','whore','shagging','peepee','porno','pornography','porn'])
//anti swear ^ v
bot.on('message', message => {
    if(message.author.bot) return
    if(message.author.id === '595038661939298318') return; //Me
    if(message.author.id === '791451408070213642') return; //Kyneshia
    if(message.author.id === '625876885963800597') return; //sonny
    if(message.author.id === '733769690765328394') return; //Alexis
    if(message.author.id === '455020133992103946') return; //Dustin
    if(message.author.id === '529526387850215446') return; //Lena

    let wordArray = message.content.split(/ +/g)
    for(var i = 0; i < wordArray.length; i++){
        if(set.has(wordArray[i])){
            message.delete()
            message.channel.send(`${message.author.username}, волк would not approve. Watch your language.`).then(m => m.delete({timeout: 4000}))
            console.log('message filtered')
            break
        }
    }
})
//rank command
bot.on('message', async message => {
    if (message.author.bot) return
    xp(message)
    if (message.content.startsWith(`${PREFIX}rank`)) {
        var user = message.mentions.users.first() || message.author
        var level = db.get(`guild_${message.guild.id}_level_${user.id}`) || 0
        level = level.toString()
        let xp = db.get(`guild_${message.guild.id}_xp_${user.id}`) || 0
        var xpNeeded = level * 500 + 500
        let every = db
            .all()
            .filter(i => i.ID.startsWith(`guild_${message.guild.id}_xptotal_`))
            .sort((a, b) => b.data - a.data)
        var rank = every.map(x => x.ID).indexOf(`guild_${message.guild.id}_xptotal_${user.id}`) + 1
        rank = rank.toString()
        var image = await Canvacord.rank({
            username: user.username,
            discrim: user.discriminator,
            status: user.presence.status,
            currentXP: xp.toString(),
            neededXP: xpNeeded.toString(),
            rank,
            level,
            avatarURL: user.displayAvatarURL({ format: "png" }),
            color: "white"
        })
        return message.channel.send(new Discord.MessageAttachment(image, "rank.png"))
    }
})
//xp system
function xp(message) {
    if (message.content.startsWith(PREFIX)) return
    let guild = message.guild;
    if (!guild) return
    const randomNumber = Math.floor(Math.random() * 10) + 15
    db.add(`guild_${message.guild.id}_xp_${message.author.id}`, randomNumber)
    db.add(`guild_${message.guild.id}_xptotal_${message.author.id}`, randomNumber)
    var level = db.get(`guild_${message.guild.id}_level_${message.author.id}`) || 1
    var xp = db.get(`guild_${message.guild.id}_xp_${message.author.id}`)
    var xpNeeded = level * 500
    if (xpNeeded < xp) {
        var newLevel = db.add(`guild_${message.guild.id}_level_${message.author.id}`, 1)
        db.subtract(`guild_${message.guild.id}_xp_${message.author.id}`, xpNeeded)
        message.channel.send(`${message.author}, you have leveled up to level ${newLevel}`)
    }
}
//logs deleted messages, doesn't work on pictures and videos
bot.on('messageDelete', async message => {
    const logchannel = message.guild.channels.cache.find(ch => ch.name === "logchannel")
    if(!logchannel) return;
    if(message.author.id === '733769690765328394') return;
    if(message.author.bot) return;
    if(message.content.startsWith("https://")) return;
    if(message.content.startsWith("cnbt!say")) return;
    if(message.content.startsWith("Success!")) return;
    if(message.content.includes("волк")) return;
    if(message.guild === null) return;

    const embed = new Discord.MessageEmbed()
    .setTitle("Message Deleted | " + message.author.username)
    .addField("Deleted" , message)
    .addField("Deleted in" , message.channel)

    logchannel.send(embed)
})
//logs edited messages
bot.on('messageUpdate' , async message => {
    let logchannel = message.guild.channels.cache.find(ch => ch.name === "logchannel")
    if(!logchannel) return;
    if(message.author.bot) return;
    if(message.content.startsWith('https')) return;
    if(message.content.startsWith('https://')) return;
    if(message.content.startsWith('cnbt!')) return;
    if(message.guild === null) return; 

    const embed = new Discord.MessageEmbed()
    .setTitle("Edited Message | " + message.author.username)
    .addField("Message Before Edited" , message)
    .addField("In channel" , message.channel)

    logchannel.send(embed)
})