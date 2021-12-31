const Discord = require("discord.js");
const config = require("./config.json");
const { keep_alive } = require("./keep_alive");
const client = new Discord.Client();

client.on("ready", () => {
const channel = client.channels.cache.get("Voice Channel Id"); //Voice Channel Id

    if (!channel) return console.error("The channel does not exist!");
    channel.join().then(connection => {
        console.log("Successfully connected.");
    }).catch(e => {
        console.error(e);
    });
});

client.login(config.BOT_TOKEN);
