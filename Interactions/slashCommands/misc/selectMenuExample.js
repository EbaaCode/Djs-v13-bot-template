const { MessageSelectMenu, MessageActionRow } = require('discord.js')
const { SlashCommandBuilder } = require('@discordjs/builders')
const { lightBlue } = require(`../../../util/config.json`)
const { customEmbed } = require(`../../../util/embed`)

//? Using Select Menus Example.
module.exports = {
    data: new SlashCommandBuilder()
        .setName('select-example')
        .setDescription('An example command to show how to create select menus.'),
    cooldown: 5000,
    async execute(interaction) {
        let selectMenu = new MessageSelectMenu()
            .setCustomId('select_example')
            .setPlaceholder('Nothing selected')
            .setMinValues(1)
            .setMaxValues(3)
			.addOptions([
                {
                    label: 'Option #1',
                    description: 'This is a description for option #1',
                    value: 'first_option',
                    emoji: '1️⃣',
                },
                {
                    label: 'Option #2',
                    description: 'This is a description for option #2',
                    value: 'second_option',
                    emoji: '2️⃣',
                }, {
                    label: 'Option #3',
                    description: 'This is a description for option #3',
                    value: 'third_option',
                    emoji: '3️⃣',
                }, {
                    label: 'Option #4',
                    description: 'This is a description for option #4',
                    value: 'fourth_option',
                    emoji: '4️⃣',
                },
            ])
        const row = new MessageActionRow().addComponents(selectMenu)
        interaction.reply({
            embeds: [customEmbed('This is an example of a select menu.', lightBlue)],
            components: [row],
        })
    },
}
