type Props = {
	settingName: string
	settingDescription: string
	colSpan?: number
}

export const SettingsDescription = ({
	settingName,
	settingDescription,
	colSpan = 3
}: Props) => {
	return (
		<div className={`col-span-${colSpan}`}>
			<h3 className='text-md sm:text-lg font-rockSalt text-rose-500 mb-1'>
				{settingName}
			</h3>
			<p className='text-xs text-muted-foreground'>
				{settingDescription}
			</p>
		</div>
	)
}
