'use server'

export async function getLikedSongs() {
	// FIXME: when error program breaks - needs to figure it out
	try {
		const response = await fetch('http://localhost:8000/api/songs')
		if (!response.ok) throw new Error(`HTTP Error: ${response.status}`)
		const data = await response.json()
		// await new Promise(resolve => setTimeout(resolve, 100000))
		// console.log(data)
		return data
	} catch (error) {
		return { error: error || 'Something went wrong' }
	}
}

export async function connectToRadio() {
	try {
		const response = await fetch('http://localhost:8000/api/songs/connect')
		if (!response.ok) throw new Error(`HTTP Error: ${response.status}`)
		const data = await response.json()
		return data
	} catch (error) {
		return { error: error || 'Something went wrong' }
	}
}

export async function getImages() {
	try {
		const response = await fetch(
			'http://localhost:8000/api/users/background'
		)
		if (!response.ok) throw new Error(`HTTP Error: ${response.status}`)
		const text = await response.text()
		return { background: text.trim() }
	} catch (error) {
		return { error: error || 'Something went wrong' }
	}
}
