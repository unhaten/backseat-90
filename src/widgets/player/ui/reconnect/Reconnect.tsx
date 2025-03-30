// import { Button } from '@/components/ui'

import { useTranslations } from 'next-intl'

export const Reconnect = ({
	isSuccess,
	isLoading
}: {
	isSuccess: boolean | undefined
	isLoading: boolean
}) => {
	const t = useTranslations('HomePage')

	if (!isSuccess && !isLoading)
		return (
			<div className='flex items-center flex-col'>
				<p className='text-center'>{t('radio-problem')}</p>
				{/* <Button>
					<span>reconnect</span>
				</Button> */}
			</div>
		)
}
