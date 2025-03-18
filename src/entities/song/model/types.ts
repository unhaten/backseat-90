export interface ISong {
	id: string | null
	playedAt: number
	duration: number
	elapsed: number
	thumbnail: string
	title: string
	author: string
	playlist: string | null
	likes: number
}
