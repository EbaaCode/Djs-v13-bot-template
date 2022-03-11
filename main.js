const { Client, Intents, Collection } = require('discord.js')
const client = new Client({
	partials: ['CHANNEL', 'USER', 'GUILD_MEMBER', 'MESSAGE'],
	intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.DIRECT_MESSAGES],
})
require('dotenv').config()
client.commands = new Collection()
client.buttons = new Collection()
client.selectMenus = new Collection()
client.slashCommands = new Collection()
client.cooldowns = new Collection();
['commandHandler.js', 'interactionHandler.js', 'eventHandler.js'].forEach((handler) => {
	require(`./handlers/${handler}`)(client)
})
process.on('unhandledRejection', error => {
	console.error('Unhandled promise rejection:', error);
});
client.login(process.env.BOT_TOKEN)

