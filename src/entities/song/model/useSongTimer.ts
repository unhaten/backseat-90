import { useEffect, useState } from 'react'

export const useSongTimer = () => {
	const [now, setNow] = useState(Date.now())

	useEffect(() => {
		const interval = setInterval(() => setNow(Date.now()), 1000)
		return () => clearInterval(interval)
	}, [])

	return now
}
