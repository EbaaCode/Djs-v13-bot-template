//? Message Buttons Example.
// This is the code that will run when a user interacts with the buttons from buttonExample.js
module.exports = {
	name: 'blurple_button',
	aliases: ['grey_button', 'green_button', 'red_button'],
	async execute(interaction) {
		if (interaction.customId == 'blurple_button') {
			interaction.reply({
				content: 'Primary button pressed.',
				ephemeral: true,
			})
		}
		else if (interaction.customId == 'grey_button' || 'green_button' || 'red_button') {
			interaction.reply({
				content: `${interaction.component.label} button pressed.`,
				ephemeral: true,
			})
		}
	},
}
