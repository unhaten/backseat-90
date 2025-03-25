import { Button } from '@/components/ui'

export const Reconnect = ({ isError }: { isError: boolean }) => {
	if (isError)
		return (
			<div className='flex items-center flex-col'>
				<p>Something went wrong</p>
				<Button>
					<span>reconnect</span>
				</Button>
			</div>
		)
}
