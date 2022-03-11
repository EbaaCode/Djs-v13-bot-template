const { getFiles } = require('../util/functions')
module.exports = (client) => {
	const eventFiles = getFiles('./events')
	for (const event of eventFiles) {
		let eventFiles = require(event)
		if (eventFiles.once) {
			client.once(eventFiles.name, (...args) => eventFiles.execute(...args, client))
		} else {
			client.on(eventFiles.name, (...args) => eventFiles.execute(...args, client))
		}
		console.log(`\x1b[38;2;67;170;139m[Events] \x1b[32m${eventFiles.name}\x1b[0m has been loaded.`)
	}
}
