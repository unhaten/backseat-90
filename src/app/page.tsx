import { Vinyl } from "@/components/vinyl/vinyl";

export default function Home() {
	return (
		<div className='flex items-center justify-center min-h-screen w-screen p-4 sm:p-8'>
			<div className='flex flex-col items-center justify-center'>
				<h1 className="font-rockSalt text-3xl sm:text-6xl">Backseat 90</h1>
				<Vinyl />
			</div>
		</div>
	)
}
