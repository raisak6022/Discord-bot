// import { Client, GatewayIntentBits } from 'discord.js';

const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.on("messageCreate", (message) => {
  //   console.log(message.content);
  if (message.author.bot) return;
  if (message.content.startsWith("create")){
    const URL = message.content.split('create')[1]
    return message.reply({
        content: "Genrating Short ID for " + URL,
    })
  }
  message.reply({ content: "Hi From BOT! " });
});

client.on("interactionCreate", (interaction) => {
  console.log(interaction);
  interaction.reply("pong");
});

client.login(
  "MTI0MjEzMjY1Mjg1ODAxOTkxMQ.G4pdXA.l73Y5TsCkULRgXwcFxDSOCVHcy_I3oAWSWyKCc"
);
