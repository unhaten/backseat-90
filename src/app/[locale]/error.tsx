'use client'
import { useEffect } from 'react'
export default function Error({
	error,
	reset
}: {
	error: unknown
	reset(): void
}) {
	useEffect(() => {
		console.error(error)
	}, [error])
	return (
		<div className='flex flex-col items-center justify-center mt-52'>
			<h2 className='mb-8 text-xl-2'>Something went wrong!</h2>
			<div className='mt-4'>
				<button
					className='p-4 bg-red-500 rounded-md'
					onClick={() => reset()}
				>
					Try again
				</button>
			</div>
		</div>
	)
}
