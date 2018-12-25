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
  let anything = [
    "```amen```",
    "ياهلا والله",
    "وعليكم السلام ورحمة الله وبركاته",
    "مرحبا بك في السيرفر"
    
    
  ]
  if(message.content === '-codeonline'){
    message.reply(`${anything[Math.floor(Math.random() * anything.length)]}`)
    
    return;
  }
});

client.login(process.env.BOT_TOKEN);
