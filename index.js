const Discord = require('discord.js');

const bot = new Discord.Client();

const prefix  = process.env.BOT_PREFIX;

bot.on("ready", () => {
    console.log(`I am ready! I am in ${bot.guilds.size} guilds`);

bot.user.setActivity(process.env.BOT_STATUS);
});

bot.on("message", function(message){
	 console.log("Message:" + message.content)
	 console.log("Author Id:" + message.author.id)
	 console.log("Channel Id:" + message.channel.id)
	});

bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.content.indexOf(prefix) !== 0) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

if(command === 'curse') {
	number = process.env.BOT_IMAGE;
	imageNumber = Math.floor (Math.random() * (number - 1 + 1)) +1;
	message.channel.send ( {files: ["./images/" + imageNumber + ".png"]} )
};

bot.login(process.env.BOT_TOKEN);
	
