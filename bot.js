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
            if (message.content === '-y3m') {
              message.channel.send('```client.on('message',async msg => {//Toxic Codes
  var p = "-";//Toxic Codes
  if(msg.content.startsWith(p + "setuser")) {//Toxic Codes
  if(!msg.guild.member(msg.author).hasPermissions('MANAGE_CHANNELS')) return msg.reply('❌ **ليس لديك صلاحيه**');//Toxic Codes
  if(!msg.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS'])) return msg.reply('❌ **البوت لا يمتلك صلاحية**');//Toxic Codes
  msg.guild.createChannel(`Members : ◤ → ${client.users.size} ← ◢` , 'voice').then(time => {//Toxic Codes
    });//Toxic Codes

  }
 
});```'); //الكلام الي يرسلو
              message.channel.sendFile("./fx.gif"); //لازم تكون الصوره في جيت هوب
               

            }
});

client.login(process.env.BOT_TOKEN);
