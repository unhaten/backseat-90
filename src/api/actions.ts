import { IUser } from '@/entities/user'
import { API_BASE_URL } from '@/lib/config'
import { handleErrors, handleResponseErrorArray } from '@/lib/utils'

export const getProfile = async (): Promise<IUser> => {
	try {
		const response = await fetch(`${API_BASE_URL}/api/users/profile`, {
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
		const response = await fetch(`${API_BASE_URL}/api/auth/refresh`, {
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
		const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
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
		const response = await fetch(`${API_BASE_URL}/api/auth/register`, {
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
		const response = await fetch(`${API_BASE_URL}/api/auth/logout`, {
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
		const response = await fetch(`${API_BASE_URL}/api/users/change-name`, {
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
		const response = await fetch(
			`${API_BASE_URL}/api/auth/change-password`,
			{
				method: 'POST',
				body: JSON.stringify(values),
				headers: {
					'Content-Type': 'application/json'
				},
				credentials: 'include'
			}
		)
		const data = await response.json()
		handleResponseErrorArray(response, data)
		return data
	} catch (error) {
		handleErrors(error)
	}
}

export const getLikedSongs = async () => {
	try {
		const response = await fetch(`${API_BASE_URL}/api/songs/bookmarks`, {
			credentials: 'include'
		})
		if (!response.ok) throw new Error(`HTTP Error: ${response.status}`)
		const data = await response.json()
		return data
	} catch (err) {
		handleErrors(err)
	}
}

export const checkIfSongIsLiked = async (songId: string | null) => {
	try {
		if (!songId) return
		const response = await fetch(`${API_BASE_URL}/api/songs/is-liked`, {
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

export const addToBookmarks = async (songId: string) => {
	try {
		const response = await fetch(`${API_BASE_URL}/api/songs/bookmarks`, {
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

export const removeFromBookmarks = async (songId: string) => {
	try {
		const response = await fetch(`${API_BASE_URL}/api/songs/bookmarks`, {
			method: 'DELETE',
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

export const sendBugReport = async (message: string) => {
	try {
		const response = await fetch(
			`${API_BASE_URL}/api/users/send-bug-report`,
			{
				method: 'POST',
				body: JSON.stringify(message),
				headers: {
					'Content-Type': 'application/json'
				},
				credentials: 'include'
			}
		)
		const data = await response.json()
		handleResponseErrorArray(response, data)
		return data
	} catch (error) {
		handleErrors(error)
	}
}
