import { Button, Pattern } from '@/components/ui'
import { Player } from '@/widgets/player'
import { Turntable } from '@/widgets/turntable'
import { Settings, User } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default async function Home() {
	const isLoggedIn = true

	return (
		<>
			{/* //? Background GIF hex = 93c5fd */}
			{/* //* this div that covers entire app is for setting height of image and patter to full in horizontal and vertical direction either */}
			<div className='relative min-h-svh'>
				<Pattern />
				<Image
					className='absolute top-0 left-0 z-0 w-full h-full object-cover md:object-fill object-center'
					src={'/gifwebp2.webp'}
					alt='the gif'
					unoptimized
					fill
				/>
				<div className='relative flex items-center bg-background/30 justify-center min-h-svh w-screen sm:p-8'>
					<div className='relative bg-rose-500/35 rounded-lg px-4 pb-4 md:px-8 w-80 md:w-96'>
						<h1 className='font-rockSalt text-center text-2xl font-bold m-0 my-4'>
							Backseat 90
						</h1>
						<Turntable />
						<Player />
						{isLoggedIn ? (
							<Button
								className='absolute top-2 right-2 rounded-full'
								variant={'outline'}
								size='icon'
								asChild
							>
								<Link href='/auth/signin'>
									<User />
								</Link>
							</Button>
						) : (
							<Button
								className='absolute top-2 right-2 rounded-full'
								variant={'outline'}
								size='icon'
							>
								<Settings />
							</Button>
						)}
					</div>
				</div>
			</div>
		</>
	)
}
