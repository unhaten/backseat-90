import { getImages } from '@/api/server-actions'
import { BackgroundImage } from '@/widgets/background-image'
import { ChangeImage } from '@/widgets/background-image/ui/change-image/ChangeImage'
import { Player } from '@/widgets/player'
import { Profile } from '@/widgets/profile'
import { Turntable } from '@/widgets/turntable'
import {
	dehydrate,
	HydrationBoundary,
	QueryClient
} from '@tanstack/react-query'

export default async function Home() {
	const queryClient = new QueryClient()
	await queryClient.prefetchQuery({
		queryKey: ['image-generator'],
		queryFn: () => getImages(0)
	})

	return (
		<>
			{/* //? main color hex = 93c5fd */}
			{/* //* this div that covers entire app is for setting height of image and pattern to full in horizontal and vertical direction either */}
			<div className='relative min-h-svh'>
				{/* <Pattern /> */}
				<HydrationBoundary state={dehydrate(queryClient)}>
					<BackgroundImage />
				</HydrationBoundary>
				<div className='relative flex items-center bg-background/30 justify-center min-h-svh w-screen sm:p-8'>
					<div className='relative bg-rose-500/35 rounded-lg px-4 pb-4 md:px-8 w-80 md:w-96'>
						<h1 className='font-rockSalt text-center text-2xl font-bold m-0 my-4'>
							Backseat 90
						</h1>
						<Turntable />
						<Player />
						<Profile />
						<ChangeImage />
					</div>
				</div>
			</div>
		</>
	)
}
