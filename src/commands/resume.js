module.exports = {
	name: 'resume',
	description: 'Resume command.',
	execute(message) {
		const serverQueue = message.client.queue.get(message.guild.id);
		if (serverQueue && !serverQueue.playing) {
			serverQueue.playing = true;
			serverQueue.connection.dispatcher.resume();
			return message.channel.send('▶ Resumed the song for you');
		}
		return message.channel.send('What are you playing at? there\'s nothing playing');
	}
};

module.exports.config = {
    name: "resume",
    description: "Only usable after pausing your song",
    usage: "Fs!resume",
    accessableby: "Members",
    aliases: []
}