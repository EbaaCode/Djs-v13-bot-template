![Logo](https://i.imgur.com/89Lv73l.png)
---

![Version](https://img.shields.io/badge/Version-v1.0-22AFF5?style=flat-square&logo=git&logoColor=white) ![License](https://img.shields.io/badge/License-GPL--3.0-22AFF5?style=flat-square&logo=Open-Source-Initiative&logoColor=white) [![ko-fi](https://img.shields.io/badge/Ko--fi-Buy_Me_A_Coffee-FF5E5B?style=flat-square&logo=ko-fi&logoColor=white)](https://ko-fi.com/B0B73WFJT)

This Discord.js Template was designed to make building a Discord bot as simple as possible. Eliminate the hassle of setting up a new project with all the structures and handlers and get right to work on your bot with reusable embeds, dynamic handlers and a config file to customize everything!

## Features

1. Interaction Handler

    - This is a handler for all of Discord.js v13 new interaction. Slash-commands, Context-menus, Select-menus, and Buttons.
    - Dynamic file loading, organize your various commands in different folders to keep everything organized.
    - Permissions and Cooldown system.

2. Legacy Command Handler

    - This is a handler for the leagacy message prefix commands.
    - Dynamic file loading, organize your various commands in different folders to keep everything organized.
    - Permissions and Cooldown system.

3. Reusable Embeds

   - Embeds with preset configurations, such as an error embed with a customizable description, footer.

```js
errorEmbed(interaction, 'Error embed example description', 'Error embed example footer')
```

## Installation

Clone or Download this repository then get the dependencies by running:

```bash
  npm install
```

After that go to your`.env` and `config.json` files and change these configurations:

```
BOT_TOKEN, prefix, guildID, clientID
```

make sure you're using [node.js](https://nodejs.org/en/) version `v16.6.0` or higher, run `node -v` in your terminal to check.

## Configuration

You can find the `config.json` file in the `./util` folder.

Add custom emojis and extra color values by using this format:

```json
"emoji" : "<:emoji-name:emoji-ID>"
"color" : "hex-color-value"
```

## Examples

#### Events format
```js
module.exports = {
	name: 'eventName',
	once: 'true', //run once true/false
	async execute(<args>) {
    //Code
	},
}
```
---

#### Slash commands format
```js
const { SlashCommandBuilder } = require('@discordjs/builders');
module.exports = {
	data: new SlashCommandBuilder()
		.setName('commandName')
		.setDescription('command description'),
	async execute(<args>) {
    // Code
	}
} 
```
---

#### Context menus format
```js
const { ContextMenuCommandBuilder } = require('@discordjs/builders');
module.exports = {
	data: new ContextMenuCommandBuilder()
		.setName('context-menu-name')
		.setType(2), // (2): USER , (3): MESSAGE
	async execute(<args>) {
		// Code
	},
}
```
---

#### Buttons format

Adding buttons to a message:
```js
const { MessageButton, MessageActionRow } = require('discord.js')
module.exports = {
		let exampleButton = new MessageButton()
			.setLabel('Example')
			.setStyle('PRIMARY') // PRIMARY, SECONDARY, SUCCESS, DANGER, LINK
			.setCustomId('example_button')
  const row = new MessageActionRow().addComponents(exampleButton)

  interaction.reply({
			content: 'Example message',
			components: [row],
		})
}
```
Button event:
```js
module.exports = {
	name: 'example_button',
	aliases: ['aliase1_button', 'aliase2_button'],
	async execute(interaction) {
		if (interaction.customId == 'example_button') {
			interaction.reply({
				content: 'example button pressed.'
			})
		}
```
---

#### Select menu format

Adding select menu to a message:
```js
const { MessageSelectMenu, MessageActionRow } = require('discord.js')
module.exports = {
let selectMenu = new MessageSelectMenu()
            .setCustomId('select_example')
            .setPlaceholder('Nothing selected')
            .setMinValues(1)
            .setMaxValues(2)
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
                }
      ])
const row = new MessageActionRow().addComponents(selectMenu)
  interaction.reply({
			content: 'Example message',
			components: [row],
		})
}
```
Select menu event:
```js
module.exports = {
	name: 'select_example',
	async execute(interaction) {
		interaction.reply({
			content: `${interaction.values[0]} option selected.`,
			ephemeral: true,
		})
	},
}
```
---

#### Permissions/Cooldown format
  
```js
const { SlashCommandBuilder } = require('@discordjs/builders');
module.exports = {
	data: new SlashCommandBuilder()
		.setName('perms-cooldown-example')
		.setDescription('Permissions & Cooldown example'),
	cooldown: 5000, // Time in milliseconds.
  permissions: ['ADMINISTRATOR'],
	async execute(interaction) {
    interaction.reply({
			content: 'You have permission to run this command!',
		})
	}
}
```
---

#### Legacy commands format
```js
module.exports = {
	name: 'commandName',
	aliases: ['aliase1', 'aliase2'],
	description: 'command description',
	async execute(message) {
		// Code
	},
}
```

## Support & Documentation

Join [this Discord server](https://discord.gg/HXQXSeYA3u) if you need any help.

_Documentations coming soon._

## Disclaimer

This project is not affiliated/associated/partnered with Discord or even Discord.js.

![visitor badge](https://visitor-badge.laobi.icu/badge?page_id=Djs-v13-bot-template.visitor-badge&left_color=black&right_color=black&left_text=Visitors)
