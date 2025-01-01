import { Label } from './ui/label'
import { Line } from './ui/line'
import { Needle } from './ui/needle'
import { Record } from './ui/record'
import s from './vinyl.module.css'

type Props = {
	color?: string
}
export const Vinyl = ({}: Props) => {
	const mainColor = '#da5b33'

	return (
		<div className={s.recordContainer}>
			<Record color={mainColor} />
			<Label color={mainColor} />
			<Line color={mainColor} />
			<Needle color={mainColor} />
		</div>
	)
}
