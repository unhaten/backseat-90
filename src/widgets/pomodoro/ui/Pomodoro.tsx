import { Dialog, DialogContent, Separator } from '@/components/ui'
import { PomodoroTrigger } from './layout/PomodoroTrigger'
import { PomodoroHeader } from './layout/PomodoroHeader'

export const Pomodoro = () => {
	return (
		<Dialog>
			<PomodoroTrigger />
			<DialogContent className='sm:max-w-[425px]'>
				<PomodoroHeader />
				<Separator />
				<div className=''>00:00:00</div>
				{/* <DialogFooter>
					<Button type='submit'>Save changes</Button>
				</DialogFooter> */}
			</DialogContent>
		</Dialog>
	)
}
