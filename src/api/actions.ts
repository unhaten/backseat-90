import { handleErrors, handleResponseErrorArray } from '@/lib/utils'

const BASE_URL = 'http://localhost:8000/api'

interface UserProfile {
	// id: string
	name: string
	// email: string
}

export const getProfile = async (): Promise<UserProfile> => {
	try {
		const response = await fetch(`${BASE_URL}/users/profile`, {
			credentials: 'include'
		})
		if (response.status === 401) {
			const refreshed = await refreshAccessToken()
			if (!refreshed) {
				throw new Error(`You are not authorized`)
			}
			return getProfile()
		}
		if (!response.ok) throw new Error(`HTTP Error: ${response.status}`)
		const data = await response.json()
		return data
	} catch (err) {
		handleErrors(err)
	}
}

export const refreshAccessToken = async () => {
	try {
		const response = await fetch(`${BASE_URL}/auth/refresh`, {
			method: 'POST',
			credentials: 'include'
		})
		if (!response.ok) {
			//* console.error('Failed to refresh token, logging out...')
			logout()
			return false
		}
		return true
	} catch (err) {
		console.error('Error refreshing token:', err)
		logout()
		return false
	}
}

export const login = async (values: { email: string; password: string }) => {
	try {
		const response = await fetch(`${BASE_URL}/auth/login`, {
			method: 'POST',
			body: JSON.stringify(values),
			headers: {
				'Content-Type': 'application/json'
			},
			credentials: 'include'
		})
		const data = await response.json()
		handleResponseErrorArray(response, data)

		return data
	} catch (err) {
		handleErrors(err)
	}
}

export const register = async (values: {
	email: string
	password: string
	confirmPassword: string
}) => {
	try {
		const response = await fetch(`${BASE_URL}/auth/register`, {
			method: 'POST',
			body: JSON.stringify(values),
			headers: {
				'Content-Type': 'application/json'
			}
		})
		const data = await response.json()
		handleResponseErrorArray(response, data)
		return data
	} catch (err) {
		// if (err instanceof TypeError) {
		// 	return {
		// 		error: 'Unable to connect to the server. Please check your network connection or try again later.'
		// 	}
		// }
		// if (err instanceof Error) {
		// 	return {
		// 		error: err.message
		// 	}
		// }
		// return { error: (err as Error).message }
		handleErrors(err)
	}
}

export const logout = async () => {
	try {
		const response = await fetch(`${BASE_URL}/auth/logout`, {
			credentials: 'include'
		})
		if (!response.ok) {
			throw new Error(`HTTP Error: ${response.status}`)
		}
		return
	} catch (err) {
		handleErrors(err)
	}
}

export const changeName = async (values: { username: string }) => {
	try {
		const response = await fetch(`${BASE_URL}/users/change-name`, {
			method: 'POST',
			body: JSON.stringify({ name: values.username }),
			headers: {
				'Content-Type': 'application/json'
			},
			credentials: 'include'
		})
		const data = await response.json()
		handleResponseErrorArray(response, data)
		return data
	} catch (error) {
		handleErrors(error)
	}
}

export const changePassword = async (values: {
	currentPassword: string
	newPassword: string
}) => {
	try {
		const response = await fetch(`${BASE_URL}/auth/change-password`, {
			method: 'POST',
			body: JSON.stringify(values),
			headers: {
				'Content-Type': 'application/json'
			},
			credentials: 'include'
		})
		const data = await response.json()
		handleResponseErrorArray(response, data)
		return data
	} catch (error) {
		handleErrors(error)
	}
}

export const getLikedSongs = async () => {
	try {
		const response = await fetch(`${BASE_URL}/songs/bookmarks`, {
			credentials: 'include'
		})
		if (!response.ok) throw new Error(`HTTP Error: ${response.status}`)
		const data = await response.json()
		return data
	} catch (err) {
		handleErrors(err)
	}
}

export const checkIfSongIsLiked = async (songId: number) => {
	try {
		const response = await fetch(`${BASE_URL}/songs/is-liked`, {
			method: 'POST',
			body: JSON.stringify({ id: songId }),
			headers: {
				'Content-Type': 'application/json'
			},
			credentials: 'include'
		})
		const data = await response.json()
		handleResponseErrorArray(response, data)
		return data
	} catch (err) {
		handleErrors(err)
	}
}

export const toggleLike = async (songId: number) => {
	try {
		const response = await fetch(`${BASE_URL}/songs/bookmarks`, {
			method: 'POST',
			body: JSON.stringify({ id: songId }),
			headers: {
				'Content-Type': 'application/json'
			},
			credentials: 'include'
		})
		const data = await response.json()
		handleResponseErrorArray(response, data)
		return data
	} catch (error) {
		handleErrors(error)
	}
}
