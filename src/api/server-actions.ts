'use server'

import { ServerActionError } from '@/lib/utils'

const BASE_URL = 'http://localhost:8000/api'

export async function connectToRadio() {
	try {
		const response = await fetch(`${BASE_URL}/songs/connect`)
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
}

export async function getImages() {
	try {
		const response = await fetch(`${BASE_URL}/users/background`)
		if (!response.ok)
			throw new ServerActionError(`HTTP Error: ${response.status}`)
		const text = await response.text()
		return { background: text.trim() }
	} catch (error) {
		if (error instanceof TypeError) {
			throw new ServerActionError(
				'Unable to connect to the server. Please check your network connection or try again later.'
			)
		}
		throw new ServerActionError((error as Error).message)
	}
}
