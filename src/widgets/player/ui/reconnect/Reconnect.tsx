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
		<div className='flex flex-col justify-center rounded-lg p-6 bg-primary/55 h-[142px] gap-2'>
			<div className='flex items-center justify-center gap-1'>
				<CircleAlert className='fill-destructive' />
				<h4 className='text-center text-xl m-0'>{t('went-wrong')}</h4>
			</div>
			<div className='flex items-center gap-1.5'>
				<p className='text-sm'>{t('radio-problem')}</p>
				<Button
					size='icon'
					className='rounded-full shrink-0'
					variant='secondary'
					onClick={onRetry}
				>
					<RotateCcw />
				</Button>
			</div>
		</div>
	)
}
