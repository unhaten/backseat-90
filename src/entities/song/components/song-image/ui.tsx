import { SongPlaceholder } from '@/components'
import { API_PUBLIC_URL } from '@/lib/config'
import Image from 'next/image'

type Props = {
	thumbnail: string
	forLikedSongs?: boolean
}

export const SongImage = ({ thumbnail, forLikedSongs }: Props) => {
	return (
		<>
			<div className='relative min-w-16 min-h-16 rounded-lg'>
				{thumbnail && (
					<Image
						src={API_PUBLIC_URL + thumbnail}
						fill
						sizes='100%'
						alt='track img'
						priority
						className='rounded-lg z-[1]'
					/>
				)}
				{forLikedSongs && <SongPlaceholder />}
			</div>
		</>
	)
}
