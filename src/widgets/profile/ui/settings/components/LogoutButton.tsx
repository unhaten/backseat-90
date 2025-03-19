import { logout } from '@/api/actions'
import { Button } from '@/components/ui'
import { useQueryClient } from '@tanstack/react-query'
import { LogOutIcon } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { toast } from 'sonner'

type Props = {
	setIsOpen: (value: boolean) => void
}

export const LogoutButton = ({ setIsOpen }: Props) => {
	const t = useTranslations('HomePage')

	const queryClient = useQueryClient()

	const handleClick = async () => {
		setIsOpen(false)
		await logout()
		// queryClient.setQueryData(['profile'], false)

		queryClient.invalidateQueries({
			queryKey: ['profile']
		})
		queryClient.invalidateQueries({
			queryKey: ['bookmarks']
		})

		// queryClient.clear()

		toast(t('logout'))
	}

	return (
		<Button
			className=''
			variant={'destructive'}
			size='icon'
			onClick={handleClick}
		>
			<LogOutIcon />
		</Button>
	)
}
