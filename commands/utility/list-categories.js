const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('list-categories')
        .setDescription('Lists all the categories of dinosaurs.'),
    async execute(interaction) {
        await interaction.reply('FLYERS');
    },
};