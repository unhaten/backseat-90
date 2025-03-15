'use server'

import { API_BASE_URL } from '@/lib/config'
import { createServerAction, ServerActionError } from '@/lib/utils'
import { StationData, UrlData } from '@/widgets/player/model/player.type'

export const connectToRadio = createServerAction<UrlData>(async () => {
	try {
		const response = await fetch(`${API_BASE_URL}/api/songs/connect`)
		if (!response.ok)
			throw new ServerActionError(`Something went wrong, try again later`)
		const data: UrlData = await response.json()
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

export const getRadioMetadata = createServerAction<StationData>(async () => {
	try {
		const response = await fetch(`${API_BASE_URL}/api/songs/get-metadata`)
		if (!response.ok)
			throw new ServerActionError(`Something went wrong, try again later`)

		const data: StationData = await response.json()
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
			`${API_BASE_URL}/api/users/background${
				imageID ? `?image-id=${imageID}` : ''
			}`
		)
		if (!response.ok) throw new ServerActionError(`Something went wrong...`)
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

// export const getImages = createServerAction(async (imageID?: number) => {
// ! this is goat
// 	console.log('🚀 Server Action Triggered: getImages', { imageID })

// 	try {
// 		const url = `http://host.docker.internal:2000/api/users/background${
// 			imageID ? `?image-id=${imageID}` : ''
// 		}`
// 		console.log('📡 Fetching URL:', url)

// 		const response = await fetch(url)
// 		console.log('✅ Response Received:', response.status)

// 		if (!response.ok)
// 			throw new ServerActionError(`Something went wrong...`)

// 		const data = await response.json()
// 		console.log('📸 Image Data:', data)

// 		return { background: data.background, imageId: data.imageId }
// 	} catch (error) {
// 		console.error('❌ Error in getImages:', error)
// 		throw new ServerActionError(
// 			'Unable to connect to the server. Please check your network connection or try again later.'
// 		)
// 	}
// })
