export { Player } from './ui'
export { default as playerReducer } from './model/player.slice'
export { togglePlayer, setVolume, setStreamUrl } from './model/player.slice'
export type {
	IPlayer,
	ConnectToRadioResponse,
	UrlData,
	StationData
} from './model/player.type'
