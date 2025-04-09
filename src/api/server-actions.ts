'use server'

import { API_BASE_URL } from '@/lib/config'
import {
	assertServerOk,
	createServerAction,
	handleServerErrors
} from '@/lib/utils'
import { StationData, UrlData } from '@/widgets/player/model/player.type'

// ! TO BE NOTED: HOT RELOAD IS NOT ABLE TO UPDATE SERVER FUNCTIONS AND IN ORDER TO SEE SOME CHANGES APP NEEDS TO BE FULLY REBOOTED! btw im not sure now

export const connectToRadio = createServerAction<UrlData>(async () => {
	try {
		const response = await fetch(`${API_BASE_URL}/api/songs/connect`)
		await assertServerOk(response)
		return await response.json()
	} catch (error) {
		handleServerErrors(error)
	}
})

export const getNowPlayingSong = createServerAction<StationData>(async () => {
	try {
		const response = await fetch(`${API_BASE_URL}/api/songs/now-playing`)
		await assertServerOk(response)

		return await response.json()
	} catch (error) {
		handleServerErrors(error)
	}
})

export const getImages = createServerAction(async (imageID?: number) => {
	try {
		const response = await fetch(
			`${API_BASE_URL}/api/users/background${
				imageID ? `?image-id=${imageID}` : ''
			}`
		)
		await assertServerOk(response)

		const data = await response.json()
		return { background: data.background, imageId: data.imageId }
	} catch (error) {
		handleServerErrors(error)
	}
})
