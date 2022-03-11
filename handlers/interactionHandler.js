require('dotenv').config()
const { getFiles } = require('../util/functions')
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { clientID, guildID } = require('../util/config.json');

module.exports = (client) => {
	const commandArray = []
	//! Slash Command Files.
	const slashCommandFiles = getFiles('./Interactions/slashCommands')
	for (const slashCommand of slashCommandFiles) {
		const slashCommandFile = require(slashCommand)
		client.slashCommands.set(slashCommandFile.data.name, slashCommandFile)
		commandArray.push(slashCommandFile.data.toJSON())
		console.log(`\x1b[38;2;243;114;44m[Slash] \x1b[32m${slashCommandFile.data.name}\x1b[0m has been loaded.`)
	}
	//! Context Menu Files.
	const contextMenuFiles = getFiles('./Interactions/contextMenus')
	for (const contextMenu of contextMenuFiles) {
		const contextMenuFile = require(contextMenu)
		client.slashCommands.set(contextMenuFile.data.name, contextMenuFile)
		commandArray.push(contextMenuFile.data.toJSON())
		console.log(`\x1b[38;2;248;150;30m[ContextMenu] \x1b[32m${contextMenuFile.data.name}\x1b[0m has been loaded.`)
	}
	//! Button Files.
	const buttonFiles = getFiles('./Interactions/buttons')
	for (const button of buttonFiles) {
		let buttonFile = require(button)
		client.buttons.set(buttonFile.name, buttonFile)
		console.log(`\x1b[38;2;249;199;79m[Buttons] \x1b[32m${buttonFile.name}\x1b[0m has been loaded.`)
	}
	//! Select Menus Files.
	const selectMenuFiles = getFiles('./Interactions/selectMenus')
	for (const selectMenu of selectMenuFiles) {
		let selectMenuFile = require(selectMenu)
		client.selectMenus.set(selectMenuFile.name, selectMenuFile)
		console.log(`\x1b[38;2;144;190;109m[SelectMenus] \x1b[32m${selectMenuFile.name}\x1b[0m has been loaded.`)
	}
	const rest = new REST({ version: '9' }).setToken(process.env.BOT_TOKEN);
	(async () => {
		try {
			await rest.put(
				Routes.applicationGuildCommands(clientID, guildID),
				{ body: commandArray },
			);
			//? Global slash commands.
			// await rest.put(
			// 	Routes.applicationCommands(clientID),
			// 	{ body: commandArray },
			// );
		} catch (error) {
			console.error(error);
		}
	})();
}
