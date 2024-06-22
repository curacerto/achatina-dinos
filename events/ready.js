const { Events } = require('discord.js');
const dotenv = require('dotenv');
dotenv.config();
const guildId = process.env.GUILD_ID;

module.exports = {
	name: Events.ClientReady,
	once: true,
	async execute(client) {
		client.guilds.fetch(guildId).then(guild => {
			console.log('Guild: ' + guild.name);
			guild.members.fetch().then(members => {
				console.log('Members: ' + members.size);
				members.forEach(member => {
					console.log('Member: ' + member.user.id + ' - ' + member.user.username.toUpperCase());
				});
				console.log(`Bot ready. Logged in as ${client.user.tag}!`);
			}).catch(console.error);
		}).catch(console.error);
	},
};