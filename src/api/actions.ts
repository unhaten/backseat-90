import { createServerAction, ServerActionError } from '@/lib/utils'

const BASE_URL = 'http://localhost:8000/api'

export async function getLikedSongs() {
	// FIXME: when error program breaks - needs to figure it out
	try {
		const response = await fetch(`${BASE_URL}/songs`)
		if (!response.ok)
			throw new ServerActionError(`HTTP Error: ${response.status}`)
		const data = await response.json()
		// await new Promise(resolve => setTimeout(resolve, 100000))
		// console.log(data)
		return data
	} catch (error) {
		if (error instanceof TypeError) {
			throw new ServerActionError(
				'Unable to connect to the server. Please check your network connection or try again later.'
			)
		}
		throw new ServerActionError((error as Error).message)
	}
}

export const getProfile = createServerAction(async () => {
	try {
		const response = await fetch(`${BASE_URL}/users/profile`, {
			credentials: 'include'
		})
		if (response.status === 401) {
			throw new ServerActionError(`You are not authorized`)
		}
		if (!response.ok)
			throw new ServerActionError(`HTTP Error: ${response.status}`)
		const data = await response.json()
		return data
	} catch (error) {
		if (error instanceof TypeError) {
			throw new ServerActionError(
				'Unable to connect to the server. Please check your network connection or try again later.'
			)
		}
		throw new ServerActionError((error as Error).message)
	}
})

export const login = createServerAction(
	async (values: { email: string; password: string }) => {
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
				throw new ServerActionError(
					Array.isArray(data.message)
						? data.message.join(', ')
						: data.message
				)
			}
			// Cookies.set('access_token', data.token)
			// return data
			return
		} catch (error) {
			if (error instanceof TypeError) {
				throw new ServerActionError(
					'Unable to connect to the server. Please check your network connection or try again later.'
				)
			}
			throw new ServerActionError((error as Error).message)
		}
	}
)

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
		} catch (error) {
			if (error instanceof TypeError) {
				throw new ServerActionError(
					'Unable to connect to the server. Please check your network connection or try again later.'
				)
			}
			throw new ServerActionError((error as Error).message)
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
	} catch (error) {
		if (error instanceof TypeError) {
			throw new ServerActionError(
				'Unable to connect to the server. Please check your network connection or try again later.'
			)
		}
		throw new ServerActionError((error as Error).message)
	}
})
