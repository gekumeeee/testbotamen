const Discord = require('discord.js');
const client = new Discord.Client();



// playing
client.on('ready', () => {                           
client.user.setGame(`ℕova Codes♥`,'https://www.twitch.tv/ℕ o v a Codes♥');
  });
client.on('message', message => {
  let anything = [
    "وعليكم السلام",
    "ياهلا والله",
    "وعليكم السلام ورحمة الله وبركاته",
    "مرحبا بك في السيرفر"
    
    
  ]
  if(message.content === 'السلام عليكم'){
    message.reply(`${anything[Math.floor(Math.random() * anything.length)]}`)
    
    return;
  }
});
client.on('message', message => {
            if (message.content === '-help') {
              message.channel.send('**```-dc ==>delete all channels```**'); //الكلام الي يرسلو               
              message.channel.send('**```-dr ==>delete all roles```**'); //الكلام الي يرسلو
              message.channel.send('**```-serooms ==>create rooms```**'); //الكلام الي يرسلو
              message.channel.send('**```-shutdown ==>shutdown bot```**'); //الكلام الي يرسلو
              message.channel.send('**```-restart ==>restart bot```**'); //الكلام الي يرسلو


              
              
              
            }
});
client.on('message', omar => {
var prefix = "-";
if(omar.content.split(' ')[0] == prefix + 'dc') {  // delete all channels
if (!omar.channel.guild) return;
if(!omar.guild.member(omar.author).hasPermission("MANAGE_CHANNELS")) return omar.reply("**You Don't Have ` MANAGE_CHANNELS ` Permission**");
if(!omar.guild.member(client.user).hasPermission("MANAGE_CHANNELS")) return omar.reply("**I Don't Have ` MANAGE_CHANNELS ` Permission**");
omar.guild.channels.forEach(m => {
m.delete();
});// omar jedol / Codes
}// omar jedol / Codes
if(omar.content.split(' ')[0] == prefix + 'dr') { // delete all roles
if (!omar.channel.guild) return;
if(!omar.guild.member(omar.author).hasPermission("MANAGE_ROLES_OR_PERMISSIONS")) return omar.reply("**You Don't Have ` MANAGE_ROLES_OR_PERMISSIONS ` Permission**");
if(!omar.guild.member(client.user).hasPermission("MANAGE_ROLES_OR_PERMISSIONS")) return omar.reply("**I Don't Have ` MANAGE_ROLES_OR_PERMISSIONS ` Permission**");
omar.guild.roles.forEach(m => {
m.delete();
});// omar jedol / Codes
omar.reply("âœ… `Success Deleted All Roles - Ranks`")
}// omar jedol / Codes
});


client.on('message', message => {
    if (message.content === "-serooms") {
    if(!message.channel.guild) return message.channel.send('This Command Only For Servers !')

     message.guild.createChannel('Owner', 'voice')
     message.guild.createChannel('Public ❤', 'voice')
     message.guild.createChannel('Public ✿', 'voice')
     message.guild.createChannel('Public ★', 'voice')
     message.guild.createChannel('✲-bot', 'text')

     message.guild.createChannel('✲-great-chat', 'text')




message.channel.sendMessage('الرجاء الانتظار ريث ما يتم صناعة السيرفر')
}
});

client.on('message' , message => {
    if (message.content === "-shutdown") {
        if(message.author.id !== "351366504068939777") return message.reply('**You aren\'t the bot owner.**');
        if ((r=>[""].includes(r.name)) ) {
                     message.channel.sendMessage("**Currently Shutting down...** ") // This Code Edit By Mazchy . 
        setTimeout(function() {
            client.destroy();
            process.exit(0);
        }, 2000);
        } else {

            return message.reply(`I cannot do that for you unfortunately`)
                .then(message => {
                    message.delete(10000);
                }).catch(console.log);
        }
       
    }
});
client.on('message',async message => {//Toxic Codes
      if(message.content.startsWith("-restart")){//Toxic Codes
          if(message.author.id !== "351366504068939777") return message.reply('You aren\'t the bot owner.');
        message.channel.send('**Restarting.**').then(msg => {//Toxic Codes
            setTimeout(() => {//Toxic Codes
               msg.edit('**Restarting..**');
          //Toxic Codes  },1000);//Toxic Codes
            setTimeout(() => {
               msg.edit('**✅ **').then(message =>{message.delete(5000)})
            },2000);
    //Toxic Codes    });//Toxic Codes
        console.log(`Restarting..`);//Toxic Codes
        setTimeout(() => {
            client.destroy();
        },3000);


client.login(process.env.BOT_TOKEN);
