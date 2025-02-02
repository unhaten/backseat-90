'use server'

import { createServerAction, ServerActionError } from '@/lib/utils'

const BASE_URL = 'http://localhost:8000/api'

export const connectToRadio = createServerAction(async () => {
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
})

export const getImages = createServerAction(async (imageID?: number) => {
	try {
		const response = await fetch(
			`${BASE_URL}/users/background${
				imageID ? `?image-id=${imageID}` : ''
			}`
		)
		if (!response.ok)
			throw new ServerActionError(`HTTP Error: ${response.status}`)
		const data = await response.json()
		return { background: data.background, imageId: data.imageId }
	} catch (error) {
		if (error instanceof TypeError) {
			throw new ServerActionError(
				'Unable to connect to the server. Please check your network connection or try again later.'
			)
		}
		throw new ServerActionError((error as Error).message)
	}
})
