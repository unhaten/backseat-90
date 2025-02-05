import { logout } from '@/api/actions'
import { Button } from '@/components/ui'
import { useQueryClient } from '@tanstack/react-query'
import { LogOutIcon } from 'lucide-react'
import { toast } from 'sonner'

type Props = {
	setIsOpen: (value: boolean) => void
}

export const LogOut = ({ setIsOpen }: Props) => {
	const queryClient = useQueryClient()

	const handleClick = async () => {
		setIsOpen(false)
		await logout()
		queryClient.setQueryData(['profile'], false)

		queryClient.invalidateQueries({
			queryKey: ['profile']
		})

		toast('Logged out, see you soon!')
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
