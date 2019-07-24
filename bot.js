const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("603540704861356042")
setInterval(function() {
channel.send(`Khaled Fuck`);
}, 30)
})

client.login(process.env.BOT_TOKEN);