import { SongPlaceholder } from '@/components'
import { Skeleton } from '@/components/ui'
import Image from 'next/image'
// import { useEffect, useRef, useState } from 'react'

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
						src={thumbnail}
						fill
						alt='track img'
						className='rounded-lg z-[1]'
					/>
				)}
				{!forLikedSongs ? (
					<Skeleton className='z-0'>
						<SongPlaceholder />
					</Skeleton>
				) : (
					<SongPlaceholder />
				)}
			</div>
		</>
	)
}
