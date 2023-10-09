module.exports = {
	name: 'np',
	description: 'Now playing command.',
	cooldown: 5,
	execute(message) {
		const serverQueue = message.client.queue.get(message.guild.id);
		if (!serverQueue) return message.channel.send('What are you playing at? There\'s nothing playing');
		return message.channel.send(`🎶 Now playing: **${serverQueue.songs[0].title}**`);
	}
};

module.exports.config = {
    name: "np",
    description: "Np stands for Now-Playing",
    usage: "Fs!np",
    accessableby: "Members",
    aliases: []
}