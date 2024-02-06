<div align="center">
    <br />
    <p>
        <a href="https://amtixdev.xyz"><img src="https://cdn.discordapp.com/attachments/1141443355532873879/1173692642551402608/mybanner-o-x_1.png?ex=6564e174&is=65526c74&hm=4939339c5671e01c6cdd068fb581b1fe88bd9b1c8fe56142caa4f51953cc7237&" width="546" alt="timestamp-generator" /></a>
    </p>
    <p>
    <a href="https://discord.gg/Ym5V2DB6sk"><img src="https://img.shields.io/discord/1125840988007579732?color=5865F2&logo=discord&logoColor=white" alt="Discord server" /></a>
    <a href="https://www.npmjs.com/package/timestamp-generator"><img src="https://img.shields.io/npm/v/timestamp-generator?maxAge=3600" alt="NPM version" /></a>
    <a href="https://www.npmjs.com/package/timestamp-generator"><img src="https://img.shields.io/npm/dt/timestamp-generator?maxAge=3600" alt="NPM downloads" /></a>
    </p>
  <p>
        <a href="https://amtixdev.xyz"><img src="https://cdn.discordapp.com/attachments/1148318536062742648/1180978797193990275/Powered_By_AmtiXDev_With_Color.png?ex=657f6336&is=656cee36&hm=0828041d09f451ead489b244b10099ba1bd97fa6becffdca1d8e2315ccb2df35&" alt="AmtiXDev" /></a>
    </p>

</div>

# Timestamp-Generator
A simple npm package to generate Discord timestamps based on user-specified durations.
## Installation
Install the package using npm:
```bash
npm install timestamp-generator
```
## Usage
```javascript
const generateTimestamp = require('timestamp-generator');

// Example: Generate timestamp for 1 day
const timestamp = generateTimestamp('1d');
console.log(`Generated timestamp: ${timestamp}`);
```

Replace the duration string in the `generateTimestamp` function with your desired time value (e.g., '1d' for 1 day, '2h' for 2 hours).

## API

### `generateTimestamp(duration: string): string`

Generates a Discord timestamp based on the specified duration.

- `duration`: A string representing the duration in the format 'XdXhXmXs' where X is a number and d/h/m/s denote days/hours/minutes/seconds.

Returns a string containing the Discord timestamp.

## Discord Bot Integration

You can also use this package in your Discord bot. Here's an example using discord.js:

```javascript
const { Client, Intents } = require('discord.js');
const generateTimestamp = require('discord-timestamp-generator');

// Replace with your bot token
const token = 'YOUR_BOT_TOKEN';

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.on('messageCreate', async (message) => {
    if (message.author.bot) return; // Ignore messages from bots

    if (message.content.startsWith('!create_time')) {
        const args = message.content.split(' ').slice(1);

        if (args.length !== 1) {
            message.reply('Please provide a valid time value. Example: `!create_time 1d`');
            return;
        }

        const duration = args[0];
        const timestamp = generateTimestamp(duration);
        message.reply(`Time: ${timestamp}`);
    }
});

client.login(token);
```

## Preview

![Preview Image](https://cdn.discordapp.com/attachments/1194604315206242315/1204246380168876052/image.png?ex=65d408d6&is=65c193d6&hm=fdfb1b17328cc0d89f8ea2956f4d84de36d6d67a3fbcce5c61e46da96ce9bbf9)
