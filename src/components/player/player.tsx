import { useEffect, useRef, useState } from 'react'

type Props = object
export const Player = ({}: Props) => {
	const ref = useRef<HTMLAudioElement>(null)
    const [player, setPlayer] = useState<HTMLAudioElement | null>(null)

	useEffect(() => {
		if (!ref.current) return
        if (!player) {
            setPlayer(ref.current)
        }
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [ref])

	return (
		<div>
			<audio ref={ref} controls src='/hiphopproject-rare.mp3' />
            <button className='bg-blue-300 p-2' onClick={() => player?.play()}>button</button>
		</div>
	)
}
