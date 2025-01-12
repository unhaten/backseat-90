'use client'

import { HeartOff, Heart } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Toaster as Sonner } from 'sonner'

type ToasterProps = React.ComponentProps<typeof Sonner>

const Toaster = ({ ...props }: ToasterProps) => {
	const { theme = 'system' } = useTheme()

	return (
		<Sonner
			theme={theme as ToasterProps['theme']}
			className='toaster group'
			toastOptions={{
				classNames: {
					toast: 'group toast group-[.toaster]:bg-background group-[.toaster]:shadow-lg',
					description: 'group-[.toast]:text-muted-foreground',
					actionButton:
						'group-[.toast]:bg-primary group-[.toast]:text-primary-foreground',
					cancelButton:
						'group-[.toast]:bg-muted group-[.toast]:text-muted-foreground',
					error: 'bg-red-100 text-red-800 border border-red-400',
					success:
						'bg-green-100 text-green-800 border border-green-400',
					warning:
						'bg-yellow-100 text-yellow-800 border border-yellow-400'
				}
			}}
			icons={{
				success: <Heart className='h-4 w-4 text-green-500' />,
				// info: <Info className='h-4 w-4 text-blue-500' />,
				// warning: <HeartOff className='h-4 w-4 text-red-500' />
				error: <HeartOff className='h-4 w-4 text-red-500' />,
				// loading: (
				// 	<Loader className='h-4 w-4 text-gray-500 animate-spin' />
				// )
			}}
			{...props}
		/>
	)
}

export { Toaster }
