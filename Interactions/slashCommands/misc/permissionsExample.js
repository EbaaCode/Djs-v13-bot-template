const { SlashCommandBuilder } = require('@discordjs/builders');
const { successEmbed } = require(`../../../util/embed`)

//? Permissions System Example.
module.exports = {
	data: new SlashCommandBuilder()
		.setName('permissions-example')
		.setDescription('Permissions system example'),
	cooldown: 5000,
    permissions: ['ADMINISTRATOR'],
	async execute(interaction) {
        successEmbed(interaction, 'You have permission to run this command!')
	}
}
