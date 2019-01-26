const Discord = require('discord.js');
const request = require('request')
const client = new Discord.Client();

client.on('ready', () => {

console.log(client.user.username+ ' is ready!')
client.user.setActivity(`${client.users.size} участников!`,{type: 'STREAMING', url: 'https://www.twitch.tv/mr_revolier'})
  console.log(`https://discordapp.com/oauth2/authorize?&client_id=${client.user.id}&scope=bot&permissions=8 `)
})
let owners = new Set()
owners.add('514403823184248833', '361951318929309707')

client.on('message', message => {

  let prefix = false;
  let prefixes = ['.'];
  prefixes.forEach(prefix_ => {
        if (message.content.startsWith(prefix_)) {
            prefix = prefix_;
        }
    })

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();	
    const Discord = require('discord.js')

	
if(command === 'help') {
    message.channel.send({embed: {
  color: 3447003,
  description: "me to die"
}});
    if(command === 'embed') {
      if (!message.author.id === '514403823184248833' || !message.author.id === '361951318929309707') return message.channel.send('nuu')
      try {
                 let text = args.join(" ").replace(/\n/g, "\\n");
                 let embed = new Discord.RichEmbed();
                 let footer = text.match(/{footer:(.*?)( \| icon: ?(.*?))?}/i);
                 if (footer !== null) {
                     embed.setFooter(footer[1], footer[3])
                 }
                 let image = text.match(/{image: ?(.*?)}/i);
                 if (image !== null) {
                     embed.attachFile({
                         attachment: image[1],
                         file: image[1].substring(image[1].lastIndexOf('/') + 1)
                     }).setImage('attachment://'+image[1].substring(image[1].lastIndexOf('/') + 1));
                 }
                 let thumb = text.match(/{thumbnail: ?(.*?)}/i);
                 if (thumb !== null) {
                     embed.attachFile({
                         attachment: thumb[1],
                         file: thumb[1].substring(thumb[1].lastIndexOf('/') + 1)
                     }).setThumbnail('attachment://'+thumb[1].substring(thumb[1].lastIndexOf('/') + 1));
                 }
                 let author = text.match(/{author:(.*?)( \| icon: ?(.*?))?( \| url: ?(.*?))?}/i);
                 if (author !== null) {
                     embed.setAuthor(author[1], author[3], author[5])
                 }
                 let title = text.match(/{title:(.*?)}/i);
                 if (title !== null) {
                     embed.setTitle(title[1])
                 }
                 let url = text.match(/{url: ?(.*?)}/i);
                 if (url !== null) {
                     embed.setURL(url[1])
                 }
                 let description = text.match(/{description:(.*?)}/i);
                 if (description !== null) {
                     embed.setDescription(description[1].replace(/\\n/g, '\n'))
                 }
                 let color = text.match(/{colou?r: ?(.*?)}/i);
                 if (color !== null) {
                     embed.setColor(color[1])
                 }
                 let timestamp = text.match(/{timestamp(: ?(.*?))?}/i);
                 if (timestamp !== null) {
                     if (timestamp[2] === undefined || timestamp[2] === null)
                     embed.setTimestamp(new Date());
                     else
                     embed.setTimestamp(new Date(timestamp[2]));
                 }
                 let fields = text.match(/{field: ?(.*?) \| value: ?(.*?)( \| inline)?}/gi)
                 if (fields !== null) {
                     fields.forEach((item) => {
                     if (item[1] == null || item[2] == null || typeof item[1] === "undefined" || typeof item[2] === "undefined") return;
                     let matches = item.match(/{field: ?(.*?) \| value: ?(.*?)( \| inline)?}/i);
                     embed.addField(matches[1], matches[2], (matches[3] != null));
                 });}
                 message.channel.send({embed});
                 message.delete();
             } catch(e) {
                 message.channel.send({embed: (new Discord.RichEmbed).setTitle('Ошибка').setDescription('Ошибка отправки эмбэда').setColor('#C34E4E')}).then(msg => msg.delete(10000));
                 console.error(e);
             }
    }
    if(['tickle'].includes(command)) {
    message.delete();
        let user = message.author;
        let user1 = message.mentions.users.first();
        if (!user1 || user1.id === user.id) {
            user = client.user;
            user1 = message.author;
        }
        message.channel.send('Загрузка...').then(msg => {
            request('https://nekos.life/api/v2/img/tickle', function (error, response, body) {
                try {
                    let arr = JSON.parse(body);
                    let embed = new Discord.RichEmbed()
                        .setDescription(`${user} пощекотал(а) ${user1}`)
                        .setImage(arr['url'])
                        .setColor('RANDOM')
// 			.setFooter("powered by nekos.life");
                    msg.edit({embed});
                } catch (e) {console.log(e)}
            });
        });
    } else if(['cuddle'].includes(command)) {
        message.delete();
        let user = message.author;
        let user1 = message.mentions.users.first();
        if (!user1 || user1.id === user.id) {
            user = client.user;
            user1 = message.author;
        }
        message.channel.send('Загрузка...').then(msg => {
            request('https://nekos.life/api/v2/img/cuddle', function (error, response, body) {
                try {
                    let arr = JSON.parse(body);
                    let embed = new Discord.RichEmbed()
//                         .setTitle(':3')
                        .setDescription(`${user} прижался(ась) к ${user1}`)
                        .setImage(arr['url'])
                        .setColor('RANDOM')
// 			.setFooter("powered by nekos.life");
                    msg.edit({embed});
                } catch (e) {console.log(e)}
            });
        });
    } else if(['pat'].includes(command)) {
        message.delete();
        let user = message.author;
        let user1 = message.mentions.users.first();
        if (!user1 || user1.id === user.id) {
            user = client.user;
            user1 = message.author;
        }
        message.channel.send('Загрузка...').then(msg => {
            request('https://nekos.life/api/v2/img/pat', function (error, response, body) {
                try {
                    let arr = JSON.parse(body);
                    let embed = new Discord.RichEmbed()
//                         .setTitle(':3')
                        .setDescription(`${user} погладил(а) по голове ${user1}`)
                        .setImage(arr['url'])
                        .setColor('RANDOM')
// 			.setFooter("powered by nekos.life");
                    msg.edit({embed});
                } catch (e) {console.log(e)}
            });
        });
    } else if(['hug'].includes(command)) {
        message.delete();
        let user = message.author;
        let user1 = message.mentions.users.first();
        if (!user1 || user1.id === user.id) {
            user = client.user;
            user1 = message.author;
        }
        message.channel.send('Загрузка...').then(msg => {
            request('https://nekos.life/api/v2/img/hug', function (error, response, body) {
                try {
                    let arr = JSON.parse(body);
                    let embed = new Discord.RichEmbed()
//                         .setTitle(':3')
                        .setDescription(`${user} обнял(а) ${user1}`)
                        .setImage(arr['url'])
                        .setColor('RANDOM')
// 		    .setFooter("powered by nekos.life");
                    msg.edit({embed});
                } catch (e) {console.log(e)}
            });
        });
    } else if(['poke'].includes(command)) {
        message.delete();
        let user = message.author;
        let user1 = message.mentions.users.first();
        if (!user1 || user1.id === user.id) {
            user = client.user;
            user1 = message.author;
        }
        message.channel.send('Загрузка...').then(msg => {
            request('https://nekos.life/api/v2/img/poke', function (error, response, body) {
                try {
                    let arr = JSON.parse(body);
                    let embed = new Discord.RichEmbed()
//                         .setTitle(':3')
                        .setDescription(`${user} тыкнул(а) в ${user1}`)
                        .setImage(arr['url'])
                        .setColor('RANDOM')
// 		        .setFooter("powered by nekos.life")
                    msg.edit({embed});
                } catch (e) {console.log(e)}
            });
        });
    } else if(['kiss'].includes(command)) {
	    actRCT = actRCT + 1;actALL = actALL +1;
    message.delete();
        let user = message.author;
        let user1 = message.mentions.users.first();
        if (!user1 || user1.id === user.id) {
            user = client.user;
            user1 = message.author;
        }
        message.channel.send('Загрузка...').then(msg => {
            request('https://nekos.life/api/v2/img/kiss', function (error, response, body) {
                try {
                    let arr = JSON.parse(body);
                    let embed = new Discord.RichEmbed()
                        .setTitle(':3')
                        .setDescription(`${user} поцеловал(а) ${user1}`)
                        .setImage(arr['url'])
                        .setColor('#ffff00')
			.setFooter("powered by nekos.life");
                    msg.edit(`${user1}`, {embed});
                } catch (e) {console.log(e)}
            });
        });
    }
})

       client.login(process.env.TOKEN);
