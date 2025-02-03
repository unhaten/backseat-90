import { createServerAction, ServerActionError } from '@/lib/utils'

const BASE_URL = 'http://localhost:8000/api'

export const getLikedSongs = async () => {
	try {
		const response = await fetch(`${BASE_URL}/songs`)
		if (!response.ok)
			throw new ServerActionError(`HTTP Error: ${response.status}`)
		const data = await response.json()
		return data
	} catch (err) {
		if (err instanceof TypeError) {
			throw new Error(
				'Unable to connect to the server. Please check your network connection or try again later.'
			)
		}
		if (err instanceof Error) {
			throw err
		}
		throw new Error('Something went wrong')
	}
}

export const getProfile = async () => {
	try {
		const response = await fetch(`${BASE_URL}/users/profile`, {
			credentials: 'include'
		})
		if (response.status === 401) {
			throw new Error(`You are not authorized`)
		}
		if (!response.ok) throw new Error(`HTTP Error: ${response.status}`)
		const data = await response.json()
		return data
	} catch (err) {
		if (err instanceof TypeError) {
			throw new Error(
				'Unable to connect to the server. Please check your network connection or try again later.'
			)
		}
		if (err instanceof Error) {
			throw err
		}
		throw new Error('Something went wrong')
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
		if (!response.ok) {
			throw new Error(
				Array.isArray(data.message)
					? data.message.join(', ')
					: data.message
			)
		}
		return data
	} catch (err) {
		if (err instanceof TypeError) {
			throw new Error(
				'Unable to connect to the server. Please check your network connection or try again later.'
			)
		}
		if (err instanceof Error) {
			throw err
		}
		throw new Error('Something went wrong')
	}
}

export const register = createServerAction(
	async (values: {
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
			if (!response.ok) {
				throw new ServerActionError(
					Array.isArray(data.message)
						? data.message.join('... ')
						: data.message
				)
			}
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
			if (err instanceof TypeError) {
				throw new Error(
					'Unable to connect to the server. Please check your network connection or try again later.'
				)
			}
			if (err instanceof Error) {
				throw err
			}
			throw new Error('Something went wrong')
		}
	}
)

export const logout = createServerAction(async () => {
	try {
		const response = await fetch(`${BASE_URL}/auth/logout`, {
			credentials: 'include'
		})
		if (!response.ok) {
			throw new ServerActionError(`HTTP Error: ${response.status}`)
		}
		return
	} catch (err) {
		if (err instanceof TypeError) {
			throw new Error(
				'Unable to connect to the server. Please check your network connection or try again later.'
			)
		}
		if (err instanceof Error) {
			throw err
		}
		throw new Error('Something went wrong')
	}
})
