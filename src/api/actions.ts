import { IUser } from '@/entities/user'
import { API_BASE_URL } from '@/lib/config'
import { assertOk, handleErrors } from '@/lib/utils'

export const getProfile = async (): Promise<IUser | null> => {
	// ? decided to remove try/catch block because i need silent error (because state works well) and i also do nothing but throw an error, as far as I know React Query catches errors by itself
	const response = await fetch(`${API_BASE_URL}/api/users/profile`, {
		credentials: 'include'
	})
	if (response.status === 401) {
		const refreshed = await refreshAccessToken()
		if (!refreshed) return null
		return getProfile()
	}

	await assertOk(response)
	return await response.json()
}

export const refreshAccessToken = async () => {
	try {
		const response = await fetch(`${API_BASE_URL}/api/auth/refresh`, {
			method: 'POST',
			credentials: 'include'
		})
		if (response.ok) return true
	} catch (err) {
		console.error('Error refreshing token:', err)
	}
	logout()
	return false
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

		await assertOk(response)
		return await response.json()
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

		await assertOk(response)
		return await response.json()
	} catch (err) {
		handleErrors(err)
	}
}

export const logout = async () => {
	const response = await fetch(`${API_BASE_URL}/api/auth/logout`, {
		credentials: 'include'
	})

	await assertOk(response)
	return
}

export const changeName = async (values: { username: string }) => {
	const response = await fetch(`${API_BASE_URL}/api/users/change-name`, {
		method: 'POST',
		body: JSON.stringify({ name: values.username }),
		headers: {
			'Content-Type': 'application/json'
		},
		credentials: 'include'
	})

	await assertOk(response)
	return await response.json()
}

export const changePassword = async (values: {
	currentPassword: string
	newPassword: string
}) => {
	const response = await fetch(`${API_BASE_URL}/api/auth/change-password`, {
		method: 'POST',
		body: JSON.stringify(values),
		headers: {
			'Content-Type': 'application/json'
		},
		credentials: 'include'
	})

	await assertOk(response)
	return await response.json()
}

export const getLikedSongs = async () => {
	const response = await fetch(`${API_BASE_URL}/api/songs/bookmarks`, {
		credentials: 'include'
	})

	await assertOk(response)
	return await response.json()
}

export const checkIfSongIsLiked = async (songId: string | null) => {
	if (!songId) return
	const response = await fetch(`${API_BASE_URL}/api/songs/is-liked`, {
		method: 'POST',
		body: JSON.stringify({ id: songId }),
		headers: {
			'Content-Type': 'application/json'
		},
		credentials: 'include'
	})
	return await response.json()
}

export const addToBookmarks = async (songId: string) => {
	const response = await fetch(`${API_BASE_URL}/api/songs/bookmarks`, {
		method: 'POST',
		body: JSON.stringify({ id: songId }),
		headers: {
			'Content-Type': 'application/json'
		},
		credentials: 'include'
	})

	await assertOk(response)
	return await response.json()
}

export const removeFromBookmarks = async (songId: string) => {
	const response = await fetch(`${API_BASE_URL}/api/songs/bookmarks`, {
		method: 'DELETE',
		body: JSON.stringify({ id: songId }),
		headers: {
			'Content-Type': 'application/json'
		},
		credentials: 'include'
	})

	await assertOk(response)
	return await response.json()
}

export const sendBugReport = async (values: { message: string }) => {
	const response = await fetch(`${API_BASE_URL}/api/bug-reports`, {
		method: 'POST',
		body: JSON.stringify(values),
		headers: {
			'Content-Type': 'application/json'
		},
		credentials: 'include'
	})

	await assertOk(response)
	return await response.json()
}

export const getBugReportAmount = async () => {
	const response = await fetch(`${API_BASE_URL}/api/bug-reports`, {
		method: 'GET',
		credentials: 'include'
	})

	await assertOk(response)
	return await response.json()
}
