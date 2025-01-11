import { Slider } from "@/components"

export const SongDuration = () => {
	return (
		<div className='mt-2'>
			<Slider defaultValue={[33]} max={100} step={1} />
			<div className='flex justify-between text-sm mt-1'>
				<span>0:00</span>
				<span>4:01</span>
			</div>
		</div>
	)
}
