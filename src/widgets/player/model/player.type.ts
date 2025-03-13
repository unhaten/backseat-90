import { ISong } from '@/entities/song'

export interface IPlayer {
	isPlaying: boolean
	mainColor: string
	secondaryColor: string
	volume: number
	listeningUsers: number
	// duration: number
	url: string | undefined
}

export interface StationData {
	currentListeners: number
	song: ISong
}

export interface ConnectToRadioResponse {
	success: boolean
	value: StationData
}
