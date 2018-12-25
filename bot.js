const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {                           
client.user.setGame(`Nova Codes ♥♥`,'https://www.twitch.tv/Nova Codes ♥♥');
});
client.on('message', message => {
  let anything = [
    "وعليكم السلام",
    "ياهلا والله",
    "وعليكم السلام ورحمة الله وبركاته",
    "مرحبا بك في السيرفر"
    
    
  ]
  if(message.content === '-codenew'){
    message.reply(`${anything[Math.floor(Math.random() * anything.length)]}`)
    
    return;
  }
});
client.on('message', message => {
            if (message.content === '-mashyy') {
              message.channel.send('كسمكلكلام الي يرسلو
              message.channel.sendFile("./fx.gif"); //لازم تكون الصوره في جيت هوب
               

            }
});
client.on('message', message => {
            if (message.content === '-y3m') {
              message.channel.send('hp); //الكلام الي يرسلو
              message.channel.sendFile("./fx.gif"); //لازم تكون الصوره في جيت هوب
               

            }
});

client.login(process.env.BOT_TOKEN);
