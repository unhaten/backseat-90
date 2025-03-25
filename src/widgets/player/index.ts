export { Player } from './ui/Player'
export { default as playerReducer } from './model/player.slice'
export { togglePlayer, setVolume, setStreamUrl } from './model/player.slice'
export type {
	IPlayer,
	ConnectToRadioResponse,
	UrlData,
	StationData
} from './model/player.type'
