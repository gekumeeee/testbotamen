const Discord = require('discord.js');
const client = new Discord.Client();



// playing
client.on('ready', () => {                           
});


client.on('message', message => {
              var prefix = "-" ;
  if (message.content.startsWith(prefix + "admin")) {
  let embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setDescription(`
🕴_____ 🖤😎 - ＰＲＥＭＩＵＭ ＮＯＶＡ - 😎🖤  _____🕴

🖤(-nick ⟿ Change nickname all members)🖤
🖤(-banlist ⟿⟿ Number Ban from server)🖤
🖤(-bc ⟿⟿⟿ Brodcast all member)🖤
🖤(-call ⟿⟿ Contact with admin)🖤
🖤(-kv ⟿⟿⟿⟿⟿ Kick from voice)🖤
🖤(-kick ⟿⟿⟿⟿⟿⟿ Kick member)🖤
🖤(-ban ⟿⟿⟿⟿⟿⟿⟿ Ban member)🖤
🖤(-role all ⟿⟿⟿⟿⟿ From All)🖤
🖤(-role humans ⟿ From All Humans)🖤
🖤(-role bots ⟿⟿⟿ From All Bots)🖤
🖤(-clear ⟿⟿⟿⟿ Delete all chat)🖤
🖤(-mvall ⟿ Move all to you voice)🖤
🖤(-hc ⟿⟿⟿⟿⟿⟿⟿ Hide channel)🖤
🖤(-sc ⟿⟿⟿⟿⟿⟿⟿ Show channel)🖤
🖤(-mc ⟿⟿⟿⟿⟿⟿⟿ Mute channel)🖤
🖤(-unmc ⟿⟿⟿⟿⟿ Unmute channel)🖤
🖤(-mute ⟿⟿⟿⟿⟿⟿ Mute member)🖤
🖤(-unmute ⟿⟿⟿⟿ Unmute member)🖤

🕴_____ 🖤😎 - ＰＲＥＭＩＵＭ ＮＯＶＡ - 😎🖤  _____🕴

 `)
   message.channel.sendEmbed(embed)
   
	  
	  
   }
   });



client.on('message', message => {
    if (message.content === "-serooms") {
if(message.author.id !== "351366504068939777") return message.reply('**You aren\'t the bot owner.**');

	    

	    
	    
	message.guild.createChannel('Owner', 'voice')
     message.guild.createChannel('Public ❤', 'voice')
     message.guild.createChannel('Public ✿', 'voice')
     message.guild.createChannel('Public ★', 'voice')
     message.guild.createChannel('✲-bot', 'text')

     message.guild.createChannel('✲-great-chat', 'text')


message.channel.sendMessage('الرجاء الانتظار ريث ما يتم صناعة السيرفر')
}
});

client.on('message', message => {
  if (message.content.startsWith("-seroles")) {
if(message.author.id !== "351366504068939777") return message.reply('**You aren\'t the bot owner.**');
  
	  
   message.guild.createRole({
name: 'The ONE',
color: 'RANDOM',
position: (1),
permissions: 'ADMINISTRATOR'
})
message.guild.createRole({
  name: 'Prince',
  color: 'RANDOM',
  position: (2),
  permissions: ['CREATE_INSTANT_INVITE', 'MANAGE_CHANNELS', 'ADD_REACTIONS', 'VIEW_AUDIT_LOG', 'VIEW_CHANNEL', 'READ_MESSAGES', 'SEND_MESSAGES',
      'SEND_TTS_MESSAGES', 'MANAGE_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'READ_MESSAGE_HISTORY', 'MENTION_EVERYONE', 'CONNECT', 'SPEAK', 'MUTE_MEMBERS', 'DEAFEN_MEMBERS',
       'MOVE_MEMBERS', 'USE_VAD', 'CHANGE_NICKNAME', 'MANAGE_NICKNAMES'],
})
message.guild.createRole({
  name: 'Commander',
  color: 'RANDOM',
   position: (3),
  permissions: ['CREATE_INSTANT_INVITE', 'KICK_MEMBERS', 'ADD_REACTIONS', 'VIEW_CHANNEL', 'READ_MESSAGES', 'SEND_MESSAGES', 'MANAGE_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'CONNECT', 'SPEAK', 'MUTE_MEMBERS', 'DEAFEN_MEMBERS',
  'READ_MESSAGE_HISTORY', 'MENTION_EVERYONE', 'MOVE_MEMBERS', 'USE_VAD', 'CHANGE_NICKNAME', 'MANAGE_NICKNAMES']
})
message.guild.createRole({
  name: 'Admin',
  color: 'RANDOM',
  postion: (4),
  permissions: ['VIEW_CHANNEL', 'READ_MESSAGES', 'SEND_MESSAGES', 'MANAGE_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'CONNECT', 'SPEAK', 'MUTE_MEMBERS', 'DEAFEN_MEMBERS',
  'READ_MESSAGE_HISTORY', 'MENTION_EVERYONE', 'MOVE_MEMBERS', 'USE_VAD', 'CHANGE_NICKNAME']
})
message.guild.createRole({
  name: 'مهم نيك نيك',
  color: 'RANDOM',
  postion: (5),
  permissions: ['VIEW_CHANNEL', 'READ_MESSAGES', 'SEND_MESSAGES', 'MANAGE_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'CONNECT', 'SPEAK', 'MUTE_MEMBERS',
  'READ_MESSAGE_HISTORY', 'MENTION_EVERYONE', 'MOVE_MEMBERS', 'USE_VAD', 'CHANGE_NICKNAME']
})
message.guild.createRole({
  name: 'Gekyume TOP',
  color: '#030303',
  postion: (6),
  permissions: ['ADMINISTRATOR','MANAGE_ROLES','VIEW_CHANNEL', 'READ_MESSAGES', 'SEND_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'CONNECT', 'SPEAK',
  'READ_MESSAGE_HISTORY', 'MENTION_EVERYONE', 'MOVE_MEMBERS', 'USE_VAD', 'CHANGE_NICKNAME', 'ADD_REACTIONS']
})
message.channel.send('**Roles Was Succsesfluy Created**')
.catch(console.error);
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
     .setFooter("By : Nova  ")
                                                

message.channel.send(embed);


}
    
});


client.on('message', function(message) {
    if(message.content.startsWith("-report")) {
        let messageArgs = message.content.split(" ").slice(1).join(" ");
        let messageReason = message.content.split(" ").slice(2).join(" ");
        if(!messageReason) return message.reply("**@ حدد الشخص الذي تريد البلاغ عنه و بعدها قم بكتابه السبب**");
    let mUser = message.mentions.users.first();
    if(!mUser) return message.channel.send("لا يمكنني وجود الشخص المراد البلاغ عنه.");
    let Rembed = new Discord.RichEmbed()
    .setTitle("`New Report!`")
    .setThumbnail(message.author.avatarURL)
    .addField("**# - Reported User:**",mUser,true)
    .addField("**# - Reported User ID:**",mUser.id,true)
    .addField("**# - Reason:**",messageReason,true)
    .addField("**# - Channel:**",message.channel,true)
    .addField("**# - Time:**",message.createdAt,true)
    .setFooter("لو ان الابلاغ غلط انت اللي هتاخد انذار")
message.channel.send(Rembed)
message.channel.send("__متاكد انك هتقدم بلاغ ف الشخص ده لصاحب السيرفر ؟؟__").then(msg => {
    msg.react("✅")
    msg.react("❌")
.then(() => msg.react('❌'))
.then(() =>msg.react('✅'))
let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;

let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
reaction1.on("collect", r => {
    message.guild.owner.send(Rembed)
    message.reply("**# - Done! 🎇**");
})
reaction2.on("collect", r => {
    message.reply("**# - Canceled!**");
})
})
}
});



client.on("message", message => {
    var prefix = "-";
    const command = message.content.split(" ")[0];

    if(command == prefix+"kv"){

        if (!message.guild.member(message.author).hasPermission('MOVE_MEMBERS') || !message.guild.member(message.author).hasPermission('ADMINISTRATOR')) {
            return message.reply('you do not have permission to perform this action!');
        }

        var member = message.guild.members.get(message.mentions.users.array()[0].id);
        if(!message.mentions.users){
            message.reply("please mention the member")
            return;
        }

    if(!member.voiceChannel){
    message.reply("i can't include voice channel for member!")
    return;
    }
              message.guild.createChannel('voicekick', 'voice').then(c => {
                member.setVoiceChannel(c).then(() => {
                    c.delete(305).catch(console.log)
        


    
      });
     });
    }
});

client.on('message', message => {
var prefix = "-";
       if(message.content === prefix + "hc") {
                           if(!message.channel.guild) return message.reply('** This command only for servers**');

   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' **__ليس لديك صلاحيات__**');
              message.channel.overwritePermissions(message.guild.id, {
            READ_MESSAGES: false

              }).then(() => {
                  message.reply("**__تم احفاء الشات__ ✅ **")
              });
                }

    if(message.content === prefix + "sc") {
                        if(!message.channel.guild) return message.reply('** This command only for servers**');

   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**__ليس لديك صلاحيات__**');
              message.channel.overwritePermissions(message.guild.id, {
            READ_MESSAGES: true

              }).then(() => {
                  message.reply("**__تم اظهار الشات__✅**")
              });
    }
       
});

client.on('message', message => {
	var prefix = "-"
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "kick") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("**You Don't Have ` KICK_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**I Don't Have ` KICK_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  if (message.mentions.users.size < 1) return message.reply("**Mention SomeOne**");
  if(!reason) return message.reply ("**Write A Reason**");
  if (!message.guild.member(user)
  .kickable) return message.reply("**I Cant Kick SomeOne High Than My Rank**");

  message.guild.member(user).kick();

  const kickembed = new Discord.RichEmbed()
  .setAuthor(`KICKED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : kickembed
  })
}
});



client.on('message', message => {
	var prefix = "-"
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "ban") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**You Don't Have ` BAN_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  if (message.mentions.users.size < 1) return message.reply("**Mention SomeOne**");
  if(!reason) return message.reply ("**Write A Reason**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**I Cant BAN SomeOne High Than My Rank**");

  message.guild.member(user).ban(7, user);

  const banembed = new Discord.RichEmbed()
  .setAuthor(`BANNED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : banembed
  })
}
});



client.on('message', message => {
var prefix = "-";
       if(message.content === prefix + "mc") {
                           if(!message.channel.guild) return message.reply('** This command only for servers**');

   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' **You Dont Have Perms**');
              message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: false

              }).then(() => {
                  message.reply("**:white_check_mark: Success Has Been Locked Channel**")
              });
                }
    if(message.content === prefix + "unmc") {
                        if(!message.channel.guild) return message.reply('** This command only for servers**');

   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**You Dont Have Perms**');
              message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: true

              }).then(() => {
                  message.reply("**:white_check_mark: Success Has Been UnLocked Channel**")
              });
    }
       
});

client.on('message', async message =>{
  if (message.author.boss) return;
	var prefix = "-";

if (!message.content.startsWith(prefix)) return;
	let command = message.content.split(" ")[0];
	 command = command.slice(prefix.length);
	let args = message.content.split(" ").slice(1);
	if (command == "mute") {
		if (!message.channel.guild) return;
		if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.reply(":x: You Dont Have Perms `MANAGE_MESSAGES`").then(msg => msg.delete(5000));
		if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.reply("The Bot Haven't Perms `MANAGE_MESSAGES`").then(msg => msg.delete(5000));;
		let user = message.mentions.users.first();
		let muteRole = message.guild.roles.find("name", "Muted");
		if (!muteRole) return message.reply("**You Should Create A Rank Name `Muted`**").then(msg => {msg.delete(5000)});
		if (message.mentions.users.size < 1) return message.reply('**You Have To Mention SomeOne**').then(msg => {msg.delete(5000)});
		let reason = message.content.split(" ").slice(2).join(" ");
		message.guild.member(user).addRole(muteRole);
		const muteembed = new Discord.RichEmbed()
		.setColor("RANDOM")
		.setAuthor(`Muted!`, user.displayAvatarURL)
		.setThumbnail(user.displayAvatarURL)
		.addField("**:busts_in_silhouette:  User**",  '**[ ' + `${user.tag}` + ' ]**',true)
		.addField("**:hammer:  By**", '**[ ' + `${message.author.tag}` + ' ]**',true)
		.addField("**:book:  Reason**", '**[ ' + `${reason}` + ' ]**',true)
		.addField("User", user, true)
		message.channel.send({embed : muteembed});
		var muteembeddm = new Discord.RichEmbed()
		.setAuthor(`Muted!`, user.displayAvatarURL)
		.setDescription(`      
${user} You Are Muted Because You Broke Rules 
${message.author.tag} By
[ ${reason} ] : Reason
If You Didnt Any Thing GGO To Staff
`)
		.setFooter(`Server : ${message.guild.name}`)
		.setColor("RANDOM")
	user.send( muteembeddm);
  }
if(command === `unmute`) {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.sendMessage(":x: You Dont Have Perms `MANAGE_MESSAGES`").then(m => m.delete(5000));
if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.reply("The Bot Haven't Perms `MANAGE_MESSAGES`").then(msg => msg.delete(6000))

  let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!toMute) return message.channel.sendMessage(":x: You Have To Mention SomeOne ");

  let role = message.guild.roles.find (r => r.name === "Muted");
  
  if(!role || !toMute.roles.has(role.id)) return message.channel.sendMessage(":x: This User In Not Muted")

  await toMute.removeRole(role)
  message.channel.sendMessage(":white_check_mark: Succes Has Been Unmuted The User");

  return;

  }

});

client.on('message', message => {
	var prefix = "-";
   if(!message.channel.guild) return;
if(message.content.startsWith(prefix + 'clear')) {
if(!message.channel.guild) return message.channel.send('**This Command is Just For Servers**').then(m => m.delete(5000));
if(!message.member.hasPermission('MANAGE_MESSAGES')) return      message.channel.send('**You Do not have permission** `MANAGE_MESSAGES`' );
let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
let request = `Requested By ${message.author.username}`;
message.channel.send(`**Are You sure you want to clear the chat?**`).then(msg => {
msg.react('✅')
.then(() => msg.react('❌'))
.then(() =>msg.react('✅'))

let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;

let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
reaction1.on("collect", r => {
message.channel.send(`Chat will delete`).then(m => m.delete(5000));
var msg;
        msg = parseInt();

      message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
      message.channel.sendMessage("", {embed: {
        title: "`` Chat Deleted ``",
        color: 0x06DF00,
        footer: {

        }
      }}).then(msg => {msg.delete(3000)});

})
reaction2.on("collect", r => {
message.channel.send(`**Chat deletion cancelled**`).then(m => m.delete(5000));
msg.delete();
})
})
}
});




client.on("message", message => {
	var prefix = "-";
	var args = message.content.split(' ').slice(1); 
	var msg = message.content.toLowerCase();
	if( !message.guild ) return;
	if( !msg.startsWith( prefix + 'role' ) ) return;
	if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(' **__You Dont Have Permissions__**');
	if( msg.toLowerCase().startsWith( prefix + 'roleremove' ) ){
		if( !args[0] ) return message.reply( '**:x: Mention User**' );
		if( !args[1] ) return message.reply( '**:x: Write Name Of Role To Remove it From The User**' );
		var role = msg.split(' ').slice(2).join(" ").toLowerCase(); 
		var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first(); 
		if( !role1 ) return message.reply( '**:x: Mention Role To Remove it From The User**' );if( message.mentions.members.first() ){
			message.mentions.members.first().removeRole( role1 );
			return message.reply('**:white_check_mark: Success Removed Role [ '+role1.name+' ] From [ '+args[0]+' ]**');
		}
		if( args[0].toLowerCase() == "all" ){
			message.guild.members.forEach(m=>m.removeRole( role1 ))
			return	message.reply('**:white_check_mark: Succes Removed Rank [ '+role1.name+' ]  From All**');
		} else if( args[0].toLowerCase() == "bots" ){
			message.guild.members.filter(m=>m.user.bot).forEach(m=>m.removeRole(role1))
			return	message.reply('**:white_check_mark: Succes Removed Rank [ '+role1.name+' ] From All Bots**');
		} else if( args[0].toLowerCase() == "humans" ){
			message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.removeRole(role1))
			return	message.reply('**:white_check_mark: Succes Removed Rank [ '+role1.name+' ] From All Humans**');
		} 	
	} else {
		if( !args[0] ) return message.reply( '**:x: Mention User**' );
		if( !args[1] ) return message.reply( '**:x: Write Name Of Role To Give It To User**' );
		var role = msg.split(' ').slice(2).join(" ").toLowerCase(); 
		var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first(); 
		if( !role1 ) return message.reply( '**:x: Write Name Of Role To Give It To User**' );if( message.mentions.members.first() ){
			message.mentions.members.first().addRole( role1 );
			return message.reply('**:white_check_mark:Success Gived Rank [ '+role1.name+' ] To [ '+args[0]+' ]**');
		}
		if( args[0].toLowerCase() == "all" ){
			message.guild.members.forEach(m=>m.addRole( role1 ))
			return	message.reply('**:white_check_mark: Success Gived All Rank [ '+role1.name+' ]**');
		} else if( args[0].toLowerCase() == "bots" ){
			message.guild.members.filter(m=>m.user.bot).forEach(m=>m.addRole(role1))
			return	message.reply('**:white_check_mark: Success Gived All Bots Rank [ '+role1.name+' ] **');
		} else if( args[0].toLowerCase() == "humans" ){
			message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.addRole(role1))
			return	message.reply('**:white_check_mark: Success Gived All Humans Rank [ '+role1.name+' ]**');
		} 
	} 
});


client.on('message', message => {
	var prefix = "-";
    if(message.content.startsWith(prefix + 'mvall')) {
     if (!message.member.hasPermission("MOVE_MEMBERS")) return message.channel.send('**:x: You Dont Have Perms `MOVE_MEMBERS`**');
       if(!message.guild.member(client.user).hasPermission("MOVE_MEMBERS")) return message.reply("**:x: I Dont Have Perms `MOVE_MEMBERS`**");
    if (message.member.voiceChannel == null) return message.channel.send(`**You Have To Be In Room Voice**`)
     var author = message.member.voiceChannelID;
     var m = message.guild.members.filter(m=>m.voiceChannel)
     message.guild.members.filter(m=>m.voiceChannel).forEach(m => {
     m.setVoiceChannel(author)
     })
     message.channel.send(`**:white_check_mark: Success Moved All To Your Channel**`)


     }
       });


client.on("message", message => {
    var prefix = "-";
    const command = message.content.split(" ")[0];

    if(command == prefix+"kv"){

        if (!message.guild.member(message.author).hasPermission('MOVE_MEMBERS') || !message.guild.member(message.author).hasPermission('ADMINISTRATOR')) {
            return message.reply('you do not have permission to perform this action!');
        }

        var member = message.guild.members.get(message.mentions.users.array()[0].id);
        if(!message.mentions.users){
            message.reply("please mention the member")
            return;
        }

    if(!member.voiceChannel){
    message.reply("i can't include voice channel for member!")
    return;
    }
              message.guild.createChannel('voicekick', 'voice').then(c => {
                member.setVoiceChannel(c).then(() => {
                    c.delete(305).catch(console.log)
        


    
      });
     });
    }
});


const adminprefix = "-";
const developers = ["351366504068939777"]//Nova Codes
client.on('message', message => {//Nova Codes
    var argresult = message.content.split(` `).slice(1).join(' ');//Nova Codes
      if (!developers.includes(message.author.id)) return;
     
  if (message.content.startsWith(adminprefix + 'setg')) {
    client.user.setGame(argresult);
      message.channel.send(`**✅   ${argresult}**`)
  } else
     if (message.content === (adminprefix + "leave")) {//Nova Codes
    message.guild.leave();   //Nova Codes
  } else  
  if (message.content.startsWith(adminprefix + 'setw')) {
  client.user.setActivity(argresult, {type:'WATCHING'});//Nova Codes
      message.channel.send(`**✅   ${argresult}**`)//Nova Codes
  } else
  if (message.content.startsWith(adminprefix + 'setl')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(`**✅   ${argresult}**`)//Nova Codes
  } else
  if (message.content.startsWith(adminprefix + 'sets')) {
    client.user.setGame(argresult, "https://www.twitch.tv/♥ Premium ℕova ♥");
      message.channel.send(`**✅**`)//Nova Codes
  }
  if (message.content.startsWith(adminprefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.send(`Changing The Name To ..**${argresult}** `)
} else
  if (message.content.startsWith(adminprefix + 'setprefix')) {//Nova Codes
  client.user.setPrefix(argresult).then
      message.channel.send(`Changing Prefix ..**${argresult}** `)//Nova Codes
} else
if (message.content.startsWith(adminprefix + 'setavatar')) {//Nova Codes
  client.user.setAvatar(argresult);
    message.channel.send(`Changing The Avatar To :**${argresult}** `);//Nova Codes
}
    if(message.content === adminprefix + "restart") {
      if (!devs.includes(message.author.id)) return;
          message.channel.send(`:warning:️ **Bot restarting by ${message.author.username}**`);
        console.log("\n\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
        console.log(`⚠️ Bot restarting... ⚠️`);
        console.log("===============================================\n\n");
        client.destroy();
        child_process.fork(__dirname + "/bot.js");
        console.log(`Bot Successfully Restarted`);
    }
});//Toxic Codes


client.on('message', message => {
var prefix = "-";
if(message.content.split(' ')[0] == prefix + 'dc') {  // delete all channels
if(message.author.id !== "351366504068939777") return message.reply('**You aren\'t the bot owner.**');


message.guild.channels.forEach(m => {
m.delete();
});// omar jedol / Codes
}// omar jedol / Codes
if(message.content.split(' ')[0] == prefix + 'dr') { // delete all roles
if(message.author.id !== "351366504068939777") return message.reply('**You aren\'t the bot owner.**');

message.guild.roles.forEach(m => {
m.delete();
});// omar jedol / Codes
message.reply("âœ… `Success Deleted All Roles - Ranks`")
}// omar jedol / Codes
});


var prefix = "-"

client.on('message', message => {
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();
    if (command === "banlist") {
        message.delete(5000)
         if(!message.guild.member(client.user).hasPermission("ADMINISTRATOR")) return message.reply("Error : \` I Dont Have ADMINISTRATOR Permission\`").then(message => message.delete(5000));
        if(!message.member.hasPermission('ADMINISTRATOR')) return;
        if(!message.channel.guild) return;
        message.guild.fetchBans()
        .then(bans => message.channel.send(`\`${bans.size}\` ***: عدد الاشخاص المحظورين من السيرفر ***`)).then(message => message.delete(5000))

  .catch(console.error);
}
});


client.on('message',message => {
         if (!message.content.startsWith(prefix)) return;
var cont = message.content.slice(prefix.length).split(" ");

  var args = cont.slice(1);
       if (message.content.startsWith("-nick")) {
   let nickmention = message.mentions.users.first()
    if (message.mentions.users.size === 0) {
        if (message.member.permissions.has("CHANGE_NICKNAME")) {
            let nickchange = args.slice(0).join(" ");
            if (args[0] === undefined) {
                message.channel.send("**ضع الاسم الذي تريده**")
                return;
            }
            message.guild.members.get(message.author.id).setNickname(nickchange).catch(err => {
                message.channel.send("Error: " + err)
                return;
            });
            message.channel.send("✅ **Changed your nickname to:** `" + nickchange + "`")
            return;
        } else {
            message.channel.send("You don't have permission to change your username. 😕")
            return;
        }
        return; 
    }
    if (message.member.permissions.has("MANAGE_NICKNAMES", "ADMINISTRATOR")) {
        let nickchange = args.slice(1).join(" ");
        if (args[0] === undefined) {
            message.channel.send("**ضع اسم**")
            return;
        }
        message.guild.members.get(nickmention.id).setNickname(nickchange).catch(err => {
            message.channel.send("Error: " + err);
            return;
        });
        message.channel.send("Nick of " + nickmention + " (" + nickmention.username + "#" + nickmention.discriminator + ") changed to: `" + nickchange + "`")
  
     }
    } 
});



client.on("ready", () => { // كود رينبو
  function lol() {
    client.guilds.get('434062859715084289').roles.find("name", "Rainbow").setColor("RANDOM");
  };
  setInterval(lol, 4000);
});











////////////////////////////////////////////////////Nova/////////////////////////////////////////////////
/////////////////////////////////////////////////public help////////////////////////////////////////////////////////


client.on('message', message => {
              var prefix = "-" ;
  if (message.content.startsWith(prefix + "help")) {
  let embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setDescription(`
💜_____ 🖤😎 - ＰＲＥＭＩＵＭ ＮＯＶＡ - 😎🖤  _____💜

🖤(-server ⟿⟿⟿⟿⟿ About the server)🖤

🖤(-allbots ⟿⟿ Nubmers bots in server)🖤

🖤(-botin ⟿⟿⟿⟿⟿⟿ Bot Information)🖤

🖤(-report ⟿⟿⟿⟿⟿ Report a member)🖤

🖤(-support ⟿⟿ Contact with the bot owner)🖤

🖤(-avatar ⟿⟿⟿⟿⟿ View your avatar)🖤

🖤(-members ⟿⟿⟿⟿ Status of member)🖤

🖤(-say ⟿⟿⟿⟿⟿⟿ Status of member)🖤

🖤(-emojis ⟿⟿⟿⟿⟿ Emoji Of Server)🖤


💜_____ 🖤😎 - ＰＲＥＭＩＵＭ ＮＯＶＡ - 😎🖤  _____💜

 `)
   message.channel.sendEmbed(embed)
   
	  
	  
   }
   });
   




client.on('message', function(msg) {
    const prefix = '-'
    if(msg.content.startsWith (prefix  + 'server')) {
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(msg.guild.iconURL)
      .setTitle(`Showing Details Of  **${msg.guild.name}*`)
      .addField('🌐** نوع السيرفر**',`[** __${msg.guild.region}__ **]`,true)
      .addField('🏅** __الرتب__**',`[** __${msg.guild.roles.size}__ **]`,true)
      .addField('👩‍👩‍👧‍👧 👨‍👨‍👦**__ عدد الاعضاء__**',`[** __${msg.guild.memberCount}__ **]`,true)
      .addField('👁**__ عدد الاعضاء الاونلاين__**',`[** __${msg.guild.members.filter(m=>m.presence.status == 'online').size}__ **]`,true)
      .addField('📝**__ الرومات الكتابية__**',`[** __${msg.guild.channels.filter(m => m.type === 'text').size}__** ]`,true)
      .addField('🎤**__ رومات الصوت__**',`[** __${msg.guild.channels.filter(m => m.type === 'voice').size}__ **]`,true)
      .addField('👑**__ الأونـر__**',`**${msg.guild.owner}**`,true)
      .addField('🆔**__ ايدي السيرفر__**',`**${msg.guild.id}**`,true)
      .addField('📅**__ تم عمل السيرفر في__**',msg.guild.createdAt.toLocaleString())
      msg.channel.send({embed:embed});
    }
  });


var prefix = "-";

client.on('message', message => {
     if(!message.channel.guild) return;
                if(message.content.startsWith(prefix + 'allbots')) {

    
    if (message.author.bot) return;
    let i = 1;
        const botssize = message.guild.members.filter(m=>m.user.bot).map(m=>`${i++} - <@${m.id}>`);
          const embed = new Discord.RichEmbed()
          .setAuthor(message.author.tag, message.author.avatarURL)
          .setDescription(`**Found ${message.guild.members.filter(m=>m.user.bot).size} bots in this Server**
${botssize.join('\n')}`)
.setFooter(client.user.username, client.user.avatarURL)
.setTimestamp();
message.channel.send(embed)

}


});


client.on('message',async message => {
    var p = "-"
  function timeCon(time) {
  let days = Math.floor(time % 31536000 / 86400)
  let hours = Math.floor(time % 31536000 % 86400 / 3600)
  let minutes = Math.floor(time % 31536000 % 86400 % 3600 / 60)
  let seconds = Math.round(time % 31536000 % 86400 % 3600 % 60)
  days = days > 9 ? days : '0' + days
  hours = hours > 9 ? hours : '0' + hours
  minutes = minutes > 9 ? minutes : '0' + minutes
  seconds = seconds > 9 ? seconds : '0' + seconds
  return `${days > 0 ? `${days}:` : ''}${(hours || days) > 0 ? `${hours}:` : ''}${minutes}:${seconds}`
  };
  if(message.content.startsWith( p + "botin")) {
    const millis = new Date().getTime() - client.user.createdAt.getTime();
    const noww = new Date();
    dateFormat(noww, 'dddd, mmmm dS, yyyy, h:MM:ss TT');
    const createdAT = millis / 1000 / 60 / 60 / 24;
    var star = new Discord.RichEmbed() 
    .setTitle(`${client.user.username} معلومات عن بوت`)
    .setColor('#36393e')
    .addField('💓 امر البوت', prefix, true)
    .addField('🖥️ الرامات المستخدمة', `${(process.memoryUsage().rss / 1048576).toFixed()} ميجا بايت`,true)
    .addField('🏍️ سرعة البوت', `${Math.round(client.ping)} ملي سكند`,true)
    .addField('⏲️ تم تشغيل البوت منذ', `${timeCon(process.uptime())}`, true)
    .addField('💚 السيرفرات', client.guilds.size,true)
    .addField('💙 المستخدمين', client.users.size,true)
    message.channel.send(star);
  }
});


client.on("message", message => {
 if (message.content === "-support") {
  const embed = new Discord.RichEmbed()
      .setTitle('Click here')
      .setURL(' https://discord.gg/3HNhuuf ')
      .setColor("RANDOM")
      .setFooter('Premium ℕova♥ جميع الحقوق محفوظة 2019 لبوت')  
      .addField('سيرفر الدعم الفني', ` https://discord.gg/3HNhuuf  `)
  message.author.send({embed});

 }
});


client.on('message', message => {
    if (message.content.startsWith("-avatar")) {
        var mentionned = message.mentions.users.first();
    var x5bzm;
      if(mentionned){
          var x5bzm = mentionned;
      } else {
          var x5bzm = message.author;
          
      }
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setImage(`${x5bzm.avatarURL}`)
      message.channel.sendEmbed(embed);
    }
});

client.on('message', message => {
              if (!message.channel.guild) return;
      if(message.content =='-members')
      var kayan = new Discord.RichEmbed()
      .setThumbnail(message.author.avatarURL)
      .setFooter(message.author.username, message.author.avatarURL) 
      .setTitle('🙆| معلومات الأعضاء')
      .addBlankField(true)
      .addField('🐸| متصل بالانترنت',
      `${message.guild.members.filter(m=>m.presence.status == 'online').size}`)
      .addField('😡| مشغول',`${message.guild.members.filter(m=>m.presence.status == 'dnd').size}`)
      .addField('🐨| وضع الخمول',`${message.guild.members.filter(m=>m.presence.status == 'idle').size}`)
      .addField('😴|غير متصل على الانترنت',`${message.guild.members.filter(m=>m.presence.status == 'offline').size}`)
      .addField('👨‍👨‍👧‍👧| اعضاء السيرفر',`${message.guild.memberCount}`)
      message.channel.send(kayan);
    
    });



client.on('message', message => { 
let prefix = '-'
    if (message.content.startsWith(prefix + 'emojis')) {

        const List = message.guild.emojis.map(e => e.toString()).join(" ");

        const EmojiList = new Discord.RichEmbed()
            .setTitle('➡ Emojis') 
            .setAuthor(message.guild.name, message.guild.iconURL) 
            .setColor('RANDOM') 
            .setDescription(List) 
            .setFooter(message.guild.name) 
        message.channel.send(EmojiList) 
    }
});

client.on('message',function(message) {
	let prefix = "-";
let args = message.content.split(" ").slice(1).join(" ");
if(message.content.startsWith(prefix + "say")) {
if(!args) return;
message.channel.send(`** ${args}**`); 
}
});



client.on("message", (message) => {
    /// DREAM
   if (message.content.startsWith("-new")) {     /// DREAM
        const reason = message.content.split(" ").slice(1).join(" ");     /// DREAM
        if (!message.guild.roles.exists("name", "Support Team")) return message.channel.send(`لازم تسوي رتبة اسمها \`Support Team\` وتنطي البوت ادمنيتر حتا يقدر يسوي الرومات ويعدل برمشنات`);
        if (message.guild.channels.exists("name", "ticket-{message.author.id}" + message.author.id)) return message.channel.send(`You already have a ticket open.`);    /// NOVA CODES
        message.guild.createChannel(`ticket-${message.author.username}`, "text").then(c => {
            let role = message.guild.roles.find("name", "Support Team");
            let role2 = message.guild.roles.find("name", "@everyone");
            c.overwritePermissions(role, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
            });    /// ALPHA CODES
            c.overwritePermissions(role2, {
                SEND_MESSAGES: false,
                READ_MESSAGES: false
            });
            c.overwritePermissions(message.author, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
            });
            message.channel.send(`:white_check_mark: تم انشاء تذكرتك, #${c.name}.`);
            const embed = new Discord.RichEmbed()
                .setColor(0xCF40FA)
                .addField(`Hey ${message.author.username}!`, `تم فتح تذكرة الرجاء انتظار الى حين يأتي مشرف ويقوم بلرد عليك`)
                .setTimestamp();
            c.send({
                embed: embed
            });
        }).catch(console.error);
    }
 
 
  if (message.content.startsWith("-close")) {
        if (!message.channel.name.startsWith(`ticket-`)) return message.channel.send(`You can't use the close command outside of a ticket channel.`);
 
if(message.author.id !== "351366504068939777") return message.reply('**You aren\'t the bot owner.**');
           .then((m) => {
               message.channel.awaitMessages(response => response.content === '-confirm', {
                       max: 1,
                       time: 10000000,
                       errors: ['time'],
                   })    /// DREAM
                   .then((collected) => {
                       message.channel.delete();
                   })    /// DREAM
                   .catch(() => {
                       m.edit('Ticket close timed out, the ticket was not closed.').then(m2 => {
                           m2.delete();
                       }, 3000000);
                   });
           });
   }
 

});




client.login(process.env.BOT_TOKEN);
