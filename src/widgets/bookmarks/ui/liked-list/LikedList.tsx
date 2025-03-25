// import { likedData } from '@/lib/dummies/liked-data'
import { Skeleton } from '@/components/ui'
import { ISong } from '@/entities/song'
import { useTranslations } from 'next-intl'
import { useBookmarks } from '@/lib/hooks/react-query'
import { LikedTrack } from '../liked-track/LikedTrack'

export const LikedList = () => {
	const t = useTranslations('HomePage')

	const { data, isError, isLoading, isRefetching, isSuccess } = useBookmarks()
	return (
		<>
			<ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 py-2'>
				{isLoading || isRefetching
					? [1, 2, 3, 4].map(item => (
							<Skeleton
								className='w-full h-24 bg-gray-300/50 border-primary/50 border-2 col-span-1 rounded-lg'
								key={item}
							/>
					  ))
					: isSuccess &&
					  data.length > 0 &&
					  data.map((item: ISong) => (
							<LikedTrack
								key={item.id}
								thumbnail={item.thumbnail}
								title={item.title}
								author={item.author}
								likes={item.likes}
								id={item.id}
							/>
					  ))}
			</ul>
			{isSuccess && data.length === 0 && (
				<div className='flex items-center justify-center font-rockSalt text-xl'>
					<p>{t('no-tracks')}</p>
				</div>
			)}
			{isError && (
				<div className='flex items-center justify-center font-rockSalt text-xl'>
					<p>{t('something-wrong')}</p>
				</div>
			)}
		</>
	)
}
