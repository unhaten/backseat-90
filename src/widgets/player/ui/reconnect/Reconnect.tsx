// import { Button } from '@/components/ui'

import { Button } from '@/components/ui'
import { CircleAlert, RotateCcw } from 'lucide-react'
import { useTranslations } from 'next-intl'

type Props = {
	onRetry: () => void
}

export const Reconnect = ({ onRetry }: Props) => {
	const t = useTranslations('HomePage')

	return (
		<div className='flex flex-col justify-center gap-2 p-4 h-[142px] rounded-lg bg-primary/55 dark:bg-primary/40'>
			<div className='flex items-center justify-center gap-1'>
				<CircleAlert className='fill-destructive dark:stroke-black' />
				<h4 className='text-center text-xl m-0'>{t('went-wrong')}</h4>
			</div>
			<div className='flex justify-between items-center'>
				<p className='text-sm'>{t('radio-problem')}</p>
				<Button
					size='icon'
					className='rounded-full shrink-0 size-12'
					variant='secondary'
					onClick={onRetry}
				>
					<RotateCcw />
				</Button>
			</div>
		</div>
	)
}
