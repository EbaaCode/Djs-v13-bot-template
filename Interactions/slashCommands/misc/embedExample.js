const { SlashCommandBuilder } = require('@discordjs/builders');
const { lightBlue } = require(`../../../util/config.json`)
const { errorEmbed, customEmbed } = require(`../../../util/embed`)

//? Reusable embeds example.
module.exports = {
    data: new SlashCommandBuilder()
        .setName('embed-example')
        .setDescription('Reusable embeds example.'),
    async execute(interaction) {
        errorEmbed(interaction, 'Error embed example description', 'Error embed example footer')
        interaction.channel.send({
            embeds: [
                customEmbed('Custom embed example description', lightBlue, '', '', 'Custom embed example footer'),
            ],
        })
    },
}
