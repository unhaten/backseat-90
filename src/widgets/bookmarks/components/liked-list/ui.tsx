// import { likedData } from '@/lib/dummies/liked-data'
import { LikedTrack } from '../liked-track/ui'
import { useQuery } from '@tanstack/react-query'
import { getLikedSongs } from '@/api/actions'
import { Skeleton } from '@/components/ui'
import { ISong } from '@/entities/song'

export const LikedList = () => {
	const { data, isError, isLoading, isRefetching, isSuccess } = useQuery({
		queryKey: ['bookmarks'],
		queryFn: getLikedSongs,
		staleTime: 1000 * 60, // Cache for 1 minute
		refetchOnMount: false, // Prevent refetch on mount
		refetchOnWindowFocus: true, // Refresh if user comes back to the tab
		refetchInterval: 1000 * 60 * 2 // Auto-refresh every 2 minutes
	})
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
					<p>You do not have liked songs yet</p>
				</div>
			)}
			{isError && (
				<div className='flex items-center justify-center font-rockSalt text-xl'>
					<p>Something went wrong...</p>
				</div>
			)}
		</>
	)
}
