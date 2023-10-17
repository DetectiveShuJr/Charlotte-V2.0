module.exports = {
	name: 'skip',
	description: 'Skip command.',
	execute(message) {
		const { channel } = message.member.voice;
		if (!channel) return message.channel.send('You need to be in a voice channel to play and control music');
		const serverQueue = message.client.queue.get(message.guild.id);
		if (!serverQueue) return message.channel.send('There is nothing playing moron');
		serverQueue.connection.dispatcher.end('Okay all set');
	}
};

module.exports.config = {
    name: "skip",
    description: "Ummm... it skips your song and goes to the next",
    usage: "Fs!skip",
    accessableby: "Members",
    aliases: []
}