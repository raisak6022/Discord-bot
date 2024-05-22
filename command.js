const { REST, Routes } = require("discord.js");

const commands = [
  {
    name: "create",
    description: "Creates a new URL!",
  },
];

const rest = new REST({ version: "10" }).setToken(
  "MTI0MjEzMjY1Mjg1ODAxOTkxMQ.G4pdXA.l73Y5TsCkULRgXwcFxDSOCVHcy_I3oAWSWyKCc"
);
(async () => {
  try {
    console.log("Started refreshing application (/) commands.");

    await rest.put(Routes.applicationCommands("1242132652858019911"), {
      body: commands,
    });

    console.log("Successfully reloaded application (/) commands.");
  } catch (error) {
    console.error(error);
  }
})();
