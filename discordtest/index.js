const Discord = require('discord.js');
const { prefix, token} = require('../../../noal/config.json');
const client = new Discord.Client();
const spongebob = client.emojis.get("565285907566034967");
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }


client.once('ready',() =>{
    console.log("ready");
})

client.on('message', message =>{
        if (message.content == "aliun"){
            message.channel.send('ayy lmao');
        } else if(message.content.startsWith(`mock`)){
         var mock = message.content.split('');
            mock = mock.splice(5,mock.length);
            for (i = 0;i<mock.length;i++){
                let chance = getRandomInt(3);
                if (chance !== 0){
                    mock[i] = mock[i].toUpperCase();
                }
            }
            mock = mock.join("").toString();
            message.channel.send("<:spongebob:565285907566034967>"+mock+"<:spongebob:565285907566034967>")
        } else if(message.content.startsWith('test')){

        }
    })

client.login(token);