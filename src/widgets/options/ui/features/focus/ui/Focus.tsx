import { Dialog, DialogContent, Separator, Slider } from '@/components/ui'
import { FocusHeader } from './layout/FocusHeader'
import { FocusTrigger } from './layout/FocusTrigger'

export const Focus = () => {
	return (
		<Dialog>
			<FocusTrigger />
			<DialogContent className='sm:max-w-[425px]'>
				<FocusHeader />
				<Separator />
				<Slider defaultValue={[0]} max={100} step={1} className={''} />
			</DialogContent>
		</Dialog>
	)
}
