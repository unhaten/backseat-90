import { Button } from '@/components/ui'
import { ScanEye } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { toast } from 'sonner'

export const FocusFake = () => {
	const t = useTranslations('HomePage')

	const handleClick = () => {
		toast.info(t('authorize-to-get'))
	}

	return (
		<Button
			asChild
			className='rounded-full p-1.5 cursor-pointer bg-muted'
			variant={'link'}
			size='icon'
			onClick={handleClick}
		>
			<ScanEye className='stroke-foreground' />
		</Button>
	)
}
