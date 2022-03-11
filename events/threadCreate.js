module.exports = {
	name: 'threadCreate',
	once: false,
	execute(thread) {
		try {
			thread.join()
		} catch (error) {
			console.error(error)
		}
	}
}
