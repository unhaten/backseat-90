import { Skeleton } from '@/components/ui'

type Props = {
	title: string
	author: string
}

export const SongInfo = ({ title, author }: Props) => {
	// const title = null
	// const author = null
	return (
		<div className='w-full'>
			{title && author ? (
				<>
					<h3 className='font-semibold text-xl md:text-2xl'>
						{author}
					</h3>
					<h4 className='text-sm md:text-base'>{title}</h4>
				</>
			) : (
				<>
					<Skeleton className='h-6 md:h-7 bg-gray-300/60' />
					<Skeleton className='h-4 md:h-5 mt-2 bg-gray-300/60' />
				</>
			)}
		</div>
	)
}
