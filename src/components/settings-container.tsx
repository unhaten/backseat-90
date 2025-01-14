type Props = {
	children: React.ReactNode
}

export const SettingsContainer = ({ children }: Props) => {
	return (
		<div className='grid grid-cols-4 gap-2 mb-3 place-items-center'>
			{children}
		</div>
	)
}
