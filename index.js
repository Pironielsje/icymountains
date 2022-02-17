const { Client, Intents } = require('discord.js')
const mongoose = require('mongoose')

const client = new Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.DIRECT_MESSAGES]
})

mongoose.connect(process.env.MONGOSRV, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to the database")
}).catch(error, () => {
    console.log(error)
})

client.once('ready', () => {
    console.log("Ready!!")
    client.user.setActivity(`Watching ${client.users.cache.size} users!`)
})

client.login(process.env.TOKEN)