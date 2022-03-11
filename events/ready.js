module.exports = {
	name: 'ready',
	once: 'true',
	async execute(client) {
		//Status options: online, idle, dnd, invisible
		//Activity options: PLAYING, STREAMING, WATCHING, LISTENING, COMPETING
		client.user.setPresence({
			activities: [{ name: '/help to get started', type: 'PLAYING' }],
			status: 'online',
		})
		console.log(`\x1b[38;2;87;117;144m[Client] \x1b[32m${client.user.username} \u001b[37mis online!`)
	},
}
