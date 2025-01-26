import { SongPlaceholder } from '@/components'
import Image from 'next/image'

type Props = {
	thumbnail: string
	forLikedSongs?: boolean
}

const BASE_URL = 'http://localhost:8000/public/'

export const SongImage = ({ thumbnail, forLikedSongs }: Props) => {
	return (
		<>
			<div className='relative min-w-16 min-h-16 rounded-lg'>
				{thumbnail && (
					<Image
						src={BASE_URL + thumbnail}
						fill
						alt='track img'
						className='rounded-lg z-[1]'
					/>
				)}
				{forLikedSongs && <SongPlaceholder />}
			</div>
		</>
	)
}
