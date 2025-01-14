type Props = {
	children: React.ReactNode
}

export const SettingsContainer = ({ children }: Props) => {
	return (
		<div className='grid grid-cols-5 sm:grid-cols-4 gap-2 mb-3 place-items-center'>
			{children}
		</div>
	)
}
