const { Client, GatewayIntentBits, Partials, Collection } = require('discord.js')
const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMembers,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.DirectMessages,
		GatewayIntentBits.MessageContent
	],
	Partials: [Partials.Message, Partials.User, Partials.GuildMember, Partials.ThreadMember, Partials.Channel],
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

