const { cooldown, permissions } = require('../util/functions')

module.exports = {
	name: 'interactionCreate',
	once: false,
	async execute(interaction, client) {
		if (interaction.isCommand() || interaction.isContextMenu()) slashInteraction(interaction, client)
		else if (interaction.isButton()) buttonInteraction(interaction, client)
		else if (interaction.isSelectMenu()) selectMenuInteraction(interaction, client)
	},
}

//! Slash Commands / Context Menus.
async function slashInteraction(interaction, client) {
	const slashCommand = client.slashCommands.get(interaction.commandName)
	if (!slashCommand) {
		return interaction.reply({
			content: '`An error has occurred.`',
			ephemeral: true,
		})
	}
	//? Slash Command Permissions.
	if (slashCommand.permissions && slashCommand.permissions.length) {
		if (permissions(interaction, slashCommand)) {
			return
		}
	}
	//? Slash Command Cooldown.
	if (slashCommand.cooldown) {
		if (cooldown(interaction, slashCommand, interaction.user.id, client)) {
			return
		}
	}
	//- Execute Slash Command.
	try {
		await slashCommand.execute(interaction, client)
	} catch (error) {
		console.error(error)
		await interaction.reply({
			content: '`An error has occurred while executing this command.`',
			ephemeral: true,
		})
	}
}

//! Buttons.
async function buttonInteraction(interaction, client) {
	const button =
		client.buttons.get(interaction.customId) ||
		client.buttons.find((button) => button.aliases && button.aliases.includes(interaction.customId))
	if (!button) {
		return interaction.reply({
			content: '`An error has occurred.`',
			ephemeral: true,
		})
	}
	//- Execute Button.
	try {
		await button.execute(interaction, client)
	} catch (error) {
		console.error(error)
		await interaction.reply({
			content: '`An error has occurred while executing this command.`',
			ephemeral: true,
		})
	}
}

//! Select Menus.
async function selectMenuInteraction(interaction, client) {
	const selectMenu = client.selectMenus.get(interaction.customId)
	if (!selectMenu) {
		return interaction.reply({
			content: '`An error has occurred.`',
			ephemeral: true,
		})
	}
	try {
		await selectMenu.execute(interaction, client)
	} catch (error) {
		console.error(error)
		await interaction.reply({
			content: '`An error has occurred while executing this command.`',
			ephemeral: true,
		})
	}
}
