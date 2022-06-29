// users hardcoded for simplicity, store in a db for production applications
const visits = []

module.exports = {
	visit,
	getAll,
}

async function visit({ address, ip }) {
	if (address && ip) {
		const id = generateRandomInteger(1000)
		visits.push({ id, address, ip })
		return { id, address, ip }
	}
}

async function getAll() {
	return visits
}

function generateRandomInteger(max) {
	return Math.floor(Math.random() * max) + 1
}
