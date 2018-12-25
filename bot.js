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
client.on('ready', () => {
  console.log('I am ready!');
});
client.on('message',async message => {//Toxic Code
  if(message.author.bot || message.channel.type === '-bc') return;
  let args = message.content.split(' ');
  if(args[0] === `-bc`) {//Toxic Code
    if(!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send('- **أنت لا تملك الصلاحيات اللازمة لأستخدام هذا الأمر**');
    if(!args[1]) return message.channel.send('- **يجب عليك كتابة الرسالة بعد الأمر**');
 
    let msgCount = 0;
    let errorCount = 0;
    let successCount = 0;
    message.channel.send(`**- [ :bookmark: :: ${msgCount} ] ・عدد الرسائل المرسلة**\n**- [ :inbox_tray: :: ${successCount} ] ・عدد الرسائل المستلمة**\n**- [ :outbox_tray: :: ${errorCount} ]・عدد الرسائل الغير مستلمة**`).then(msg => {//Toxic Code
      message.guild.members.forEach(g => {//Toxic Code
        g.send(args.slice(1).join(' ')).then(() => {//Toxic Code
          successCount++;
          msgCount++;
          msg.edit(`**- [ :bookmark: :: ${msgCount} ] ・عدد الرسائل المرسلة**\n**- [ :inbox_tray: :: ${successCount} ] ・عدد الرسائل المستلمة**\n**- [ :outbox_tray: :: ${errorCount} ]・عدد الرسائل الغير مستلمة**`);
        }).catch(e => {
          errorCount++;
          msgCount++;
          msg.edit(`**- [ :bookmark: :: ${msgCount} ] ・عدد الرسائل المرسلة**\n**- [ :inbox_tray: :: ${successCount} ] ・عدد الرسائل المستلمة**\n**- [ :outbox_tray: :: ${errorCount} ]・عدد الرسائل الغير مستلمة**`);//Toxic Code
        });
      });
    });
  }
});




client.on('message' , message => {
var prefix = "-"

if (message.author.bot) return;
if (message.content.startsWith(prefix + "call")) {
if (!message.channel.guild) return;



let args = message.content.split(" ").slice(1).join(" ");



client.users.get("351366504068939777").send(
    "\n" + "**" + "● السيرفر :" + "**" +
    "\n" + "**" + "» " + message.guild.name + "**" +
    "\n" + "**" + " ● المرسل : " + "**" +
    "\n" + "**" + "» " + message.author.tag + "**" +
    "\n" + "**" + " ● الرسالة : " + "**" +
    "\n" + "**" + args + "**")

let embed = new Discord.RichEmbed()
     .setAuthor(message.author.username, message.author.avatarURL)
     .setDescription('📬 تم ارسال الرسالة الى صاحب البوت بنجاح')
     .setThumbnail(message.author.avatarURL)
     .setFooter("By : n3k4a 😃 ")
                                                

message.channel.send(embed);


}
    
});


client.on('message', function(message) {
    if (message.content === "-report") {
        let messageArgs = message.content.split(" ").slice(1).join(" ");
        let messageReason = message.content.split(" ").slice(2).join(" ");
        if(!messageReason) return message.reply("**# Specify a reason!**");
    let mUser = message.mentions.users.first();
    if(!mUser) return message.channel.send("Couldn't find user.");
    let Rembed = new Discord.RichEmbed()
    .setTitle("`New Report!`")
    .setThumbnail(message.author.avatarURL)
    .addField("**# - Reported User:**",mUser,true)
    .addField("**# - Reported User ID:**",mUser.id,true)
    .addField("**# - Reason:**",messageReason,true)
    .addField("**# - Channel:**",message.channel,true)
    .addField("**# - Time:**",message.createdAt,true)
    .setFooter("لو ان الابلاغ فيه مزح راح يتعرض صاحب الابلاغ لقوبات")
message.channel.send(Rembed)
message.channel.send("__Are you sure you want to send this to the Server owner??__").then(msg => {
    msg.react("?")
    msg.react("?")
.then(() => msg.react('?'))
.then(() =>msg.react('?'))
let reaction1Filter = (reaction, user) => reaction.emoji.name === '?' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '?' && user.id === message.author.id;

let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
reaction1.on("collect", r => {
    message.guild.owner.send(Rembed)
    message.reply("**# - Done! ??**");
})
reaction2.on("collect", r => {
    message.reply("**# - Canceled!**");
})
})
}
});

client.on("ready", async  => {
setInterval(function(){
client.channels.find('id', '527077510161104917').setName("♥");
client.channels.find('id', '527077510161104917').setName("♥W");
client.channels.find('id', '527077510161104917').setName("♥We");
client.channels.find('id', '527077510161104917').setName("♥Wel");
client.channels.find('id', '527077510161104917').setName("♥Welc");
client.channels.find('id', '527077510161104917').setName("♥Welco");
client.channels.find('id', '527077510161104917').setName("♥Welcom");
client.channels.find('id', '527077510161104917').setName("♥Welcome ");
client.channels.find('id', '527077510161104917').setName("♥Welcome T");
client.channels.find('id', '527077510161104917').setName("♥Welcome To");
client.channels.find('id', '527077510161104917').setName("♥Welcome To C");
client.channels.find('id', '527077510161104917').setName("♥Welcome To Co");
client.channels.find('id', '527077510161104917').setName("♥Welcome To Cod");
client.channels.find('id', '527077510161104917').setName("♥Welcome To Code");
client.channels.find('id', '527077510161104917').setName("♥Welcome To Codes");
client.channels.find('id', '527077510161104917').setName("♥Welcome To Codes♥");
}, 3000);
});

client.on("message", message => {
   let men = message.mentions.users.first();
    if (message.content === "-vk") {
     try {
     if(!men) {
       message.channel.send("**Mention A Person**");
       return;
     }
     if(!message.guild.member(men).voiceChannel) return message.channel.send("The Person Not In A VoiceChannel");
     if(!message.member.hasPermission("MOVE_MEMBERS")) return message.channel.send("You Dont Have Permissions To Kick This Person")
     if(!message.guild.me.hasPermission("MOVE_MEMBERS")) return message.channel.send("The Bot Not Have Permissions To Kick This Person");
        if(!message.guild.me.hasPermission("MANAGE_CHANNELS")) return message.channel.send("I Dont Have Permissions To Create VoiceChannel")
 
     message.guild.createChannel("vKick", "voice").then(c => {
       message.guild.member(men).setVoiceChannel(c.id)
     setTimeout(() => {
       c.delete()
     }, 100)
     });
     message.channel.send(`**Has Been Kicked From The VoiceChannel \`\`${men.username}\`\`**`)
 } catch (e) {
   message.channel.send("I Cant Do This For Permissions Or Something :/");
 }
   }
 });



client.login(process.env.BOT_TOKEN);
