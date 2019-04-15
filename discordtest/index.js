const Discord = require('discord.js');
const { prefix, token} = require('../../../noal/config.json');
const client = new Discord.Client({disableEveryone:true});
const axios = require('axios');
//FUNCTIONS//
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
//Broken function, doesn't work in time.

// function randImage(){
//     axios.get('https://picsum.photos/200/300/?random')
//         .then(function(response){
//             var image = response.request.path;
//             image= image.split('');
//             image=image.splice(16,image.length)
//             image=image.join('').toString();
//             return`https://picsum.photos/${image}.jpg`
//         }).catch(function(error){
//             console.log(error)
//         })
// }

//onReady//
client.once('ready',() =>{
    console.log("ready");
})
//MESSAGE COMMANDS//
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
        } else if(message.content.startsWith('randomImage')){
            axios.get('https://picsum.photos/400/600/?random')
                .then((response) =>{
                     var image = response.request.path;
                     image= image.split('');
                     image=image.splice(16,image.length)
                     image=image.join('').toString();
                      message.channel.send({files:[`https://picsum.photos/${image}.jpg`]});
                      console.log("image sent to channel "+message.channel.guild.name)
                }).catch(function(error){
            console.log(error)
                    })
        } else if (message.content.startsWith('nord help')){
            message.author.send('Commands: aliun (will say ayy lmao), randomImage(will display random image from online API), mock <insert sentence here> will change text to spongebob mocking text')
        } 
    })

client.login(token);