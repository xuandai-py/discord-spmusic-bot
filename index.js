const { Client, Intents, MessageEmbed } = require('discord.js')

require('dotenv').config()


const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] })

client.on("ready", () => {
    console.log(`${client.user.username} is ready to work`);

    client.user.setPresence({
        activity: {
            name: "Playing music",
            type: 'PLAYING'
            
        },
        status: 'online'

    })
})

client.on("message", message => {
    const input = message.content.split(' ')
    const cmd = input.shift().toLocaleLowerCase()
    switch (cmd) {
        case 'ping':
            message.channel.send(`Pong ${client.ws.ping} ms`)
            break;
        case 'say':
            message.channel.send(input.join(' '))
            break;
        case 'avatar': {
            // first @tag / id / user'id
            const member = message.mentions.members.first() || message.guild.members.cache.get(input[0]) || message.member
            const URL = member.user.avatarURL({ format: 'jpg', dynamic: true, size: 1024})
            const avatarEmbed = new MessageEmbed()
                .setImage(URL)
                .setURL(URL)
                .setTitle('View more')
            message.channel.send(avatarEmbed)
        }
        default:
            break;
    }
})

client.login(process.env.TOKEN)
