const { Client, Intents } = require('discord.js')

const { token } = require("./config.json")

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] })

client.on("ready", () => {
    console.log(`${client.user.username} is ready to work`);

    client.user.setPresence({
        activity: {
            name: "Music playing",
            type: 'PLAYING'
            
        },
        status: 'online'

    })
})

client.on("message", message => {
    console.log(message.content);
})

client.login(token)
