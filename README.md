![Logo](https://i.imgur.com/89Lv73l.png)
---
<p align="center">
	<img src="https://img.shields.io/badge/Version-v1.0.0-22AFF5?style=flat-square&logo=git&logoColor=white" alt="Version" />
	<img src="https://img.shields.io/badge/License-GPL--3.0-22AFF5?style=flat-square&logo=Open-Source-Initiative&logoColor=white" alt="License" />
	<a href="https://ko-fi.com/B0B73WFJT"><img src="https://img.shields.io/badge/Ko--fi-Buy_Me_A_Coffee-FF5E5B?style=flat-square&logo=ko-fi&logoColor=white" alt="Ko-fi" /><a>
</p>

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

```sh-session
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

<details>
  <summary>Events format</summary>

```js
module.exports = {
    name: 'eventName',
    once: 'true', //run once true/false
    async execute( < args > ) {
        //Code
    },
}
```
---
</details>

<details>
  <summary>Slash commands format</summary>

```js
const { SlashCommandBuilder } = require('@discordjs/builders') 

module.exports = {
    data: new SlashCommandBuilder()
        .setName('commandName')
        .setDescription('command description'),
    async execute( < args > ) {
        // Code
    }
}
```
---
</details>

<details>
  <summary>Context menus format</summary>
  
```js
const { ContextMenuCommandBuilder } = require('@discordjs/builders')

module.exports = {
    data: new ContextMenuCommandBuilder()
        .setName('context-menu-name')
        .setType(2), // (2): USER , (3): MESSAGE
    async execute( < args > ) {
        // Code
    },
}
```
---
</details>

<details>
  <summary>Buttons format</summary>

Adding buttons to a message:
```js
const { MessageButton, MessageActionRow } = require('discord.js') // At the top of the file.

let exampleButton = new MessageButton()
    .setLabel('Example')
    .setStyle('PRIMARY') // PRIMARY, SECONDARY, SUCCESS, DANGER, LINK
    .setCustomId('example_button')
const row = new MessageActionRow().addComponents(exampleButton)
interaction.reply({
    content: 'Example message',
    components: [row],
})
```

Button event format:
```js
module.exports = {
    name: 'example_button',
    aliases: ['aliase1_button', 'aliase2_button'],
    async execute(interaction) {
        if (interaction.customId == 'example_button') {
            // Code
        } else if (interaction.customId == 'aliase1_button') {
            // Code
        }
    }
}
```
---
</details>

<details>
  <summary>Select menu format</summary>
	
Adding select menu to a message:
```js
const { MessageSelectMenu, MessageActionRow} = require('discord.js') // At the top of the file.

let selectMenu = new MessageSelectMenu()
    .setCustomId('select_example')
    .setPlaceholder('Nothing selected')
    .setMinValues(1)
    .setMaxValues(2)
    .addOptions([{
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
        },
    ])
const row = new MessageActionRow().addComponents(selectMenu)
interaction.reply({
    content: 'Example message',
    components: [row],
})
```

Select menu event format:
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
</details>

<details>
  <summary>Permissions/Cooldown format</summary>
  
```js
const { SlashCommandBuilder } = require('@discordjs/builders')

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
</details>

<details>
  <summary>Legacy commands format</summary>
  
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
</details>

## Support & Documentation

Join [this Discord server](https://discord.gg/HXQXSeYA3u) if you need any help.

_Documentations coming soon._
	
## Contributing

Before creating an [issue](https://github.com/EbaaCode/Djs-v13-bot-template/issues), please ensure that it hasn't already been reported/suggested You can also take a look at [the contributing guide](https://github.com/EbaaCode/Djs-v13-bot-template/blob/main/.github/CONTRIBUTING.md) if you'd like to submit a PR.

## Disclaimer

This project is not affiliated/associated/partnered with Discord or even Discord.js.

![visitor badge](https://visitor-badge.laobi.icu/badge?page_id=Djs-v13-bot-template.visitor-badge&left_color=black&right_color=black&left_text=Visitors)
