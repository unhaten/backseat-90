'use server'

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
		throw new ServerActionError(`Error: ${error}`)
	}
}

export async function connectToRadio() {
	try {
		const response = await fetch(`${BASE_URL}/songs/connect`)
		if (!response.ok)
			throw new ServerActionError(`HTTP Error: ${response.status}`)
		const data = await response.json()
		return data
	} catch (error) {
		throw new ServerActionError(`Error: ${error}`)
	}
}

export async function getImages() {
	try {
		const response = await fetch(`${BASE_URL}/users/background`)
		if (!response.ok)
			throw new ServerActionError(`HTTP Error: ${response.status}`)
		const text = await response.text()
		return { background: text.trim() }
	} catch (error) {
		throw new ServerActionError(`Error: ${error}`)
	}
}

export const login = createServerAction(
	async (values: { email: string; password: string }) => {
		try {
			const response = await fetch(`${BASE_URL}/auth/login`, {
				method: 'POST',
				body: JSON.stringify(values),
				headers: {
					'Content-Type': 'application/json'
				}
			})
			const data = await response.json()
			if (response.status === 401) {
				throw new ServerActionError(
					Array.isArray(data.message)
						? data.message.join(', ')
						: data.message
				)
			}
			if (!response.ok) {
				throw new ServerActionError(
					'Something went wrong. Please try again later or contact support.'
				)
			}
			return data
		} catch (error) {
			throw new ServerActionError((error as Error).message)
		}
	}
)
