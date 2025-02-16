import { containsCyrillic } from '@/lib/utils'

export const HeaderText = ({ text }: { text: string }) => {
	const isSettingNameCyrillic = containsCyrillic(text)

	return (
		<span
			className={
				isSettingNameCyrillic
					? 'font-alumni font-black text-3xl uppercase'
					: 'font-bebasNeue'
			}
		>
			{text}
		</span>
	)
}
