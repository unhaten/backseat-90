import { Button } from '@/components/ui'
import { Bug } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { toast } from 'sonner'

export const BugReportFake = () => {
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
			<Bug />
		</Button>
	)
}
