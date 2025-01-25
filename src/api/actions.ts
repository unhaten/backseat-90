'use server'

export async function getLikedSongs() {
	try {
		const response = await fetch('http://localhost:3000/api/songs')
		if (!response.ok) throw new Error()
		const data = await response.json()
		// await new Promise(resolve => setTimeout(resolve, 100000))
		return data
	} catch (error) {
		return { error: error }
	}
}
