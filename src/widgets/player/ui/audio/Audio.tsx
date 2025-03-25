import { Ref } from 'react'

type Props = {
	url: string | undefined
	audioRef: Ref<HTMLAudioElement>
}

export const Audio = ({ audioRef, url }: Props) => {
	return (
		<audio
			ref={audioRef}
			// src={
			// 	API_PUBLIC_URL +
			// 	(data?.success && data.value.file)
			// }
			preload='auto'
			// onLoadedMetadata={handleLoad}
			// src='http://localhost/listen/main_station/radio.mp3'
			src={url}
		/>
	)
}
