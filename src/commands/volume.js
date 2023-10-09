module.exports = {
	name: 'volume',
	description: 'Volume command.',
	cooldown: 5,
	execute(message, args) {
		const { channel } = message.member.voice;
		if (!channel) return message.channel.send('You need to be in a voice channel to play and control music');
		const serverQueue = message.client.queue.get(message.guild.id);
		if (!serverQueue) return message.channel.send('What are you playing at? there\'s nothing playing');
		if (!args[0]) return message.channel.send(`The current volume is: **${serverQueue.volume}**`);
		serverQueue.volume = args[0]; // eslint-disable-line
		serverQueue.connection.dispatcher.setVolumeLogarithmic(args[0] / 5);
		return message.channel.send(`the volume is now: **${args[0]}**`);
	}
};

module.exports.config = {
    name: "volume",
    description: "This demonic command makes any song louder but be warned, the current volume is at 2. I recommend no more then 5 (Each number is a 10 so 2 is actually 20 volume, going over 5 means over 50 volume!)",
    usage: "Fs!volume [NUMBER]",
    accessableby: "Members",
    aliases: []
}