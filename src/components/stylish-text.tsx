import { containsCyrillic } from '@/lib/utils'

export const StylishText = ({ text }: { text: string }) => {
	const isSettingNameCyrillic = containsCyrillic(text)

	return (
		<span
			className={
				isSettingNameCyrillic
					? 'font-badScript text-2xl'
					: 'font-rockSalt'
			}
		>
			{text}
		</span>
	)
}
