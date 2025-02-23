'use client'

import { Home } from 'lucide-react'
import Link from 'next/link'
import { Button } from './ui'
import { useEffect, useState } from 'react'

export const HomeButton = () => {
	const [currentLanguage, setCurrentLanguage] = useState('')

	useEffect(() => {
		const currentPath = window.location.pathname
		const pathParts = currentPath.split('/')
		const currentLanguage = pathParts[1] || 'en'
		setCurrentLanguage(currentLanguage)
	}, [])

	return (
		<Button
			className='absolute top-2 left-2 rounded-full'
			variant='ghost'
			size='icon'
			asChild
		>
			<Link href={`/${currentLanguage}`}>
				<Home />
			</Link>
		</Button>
	)
}
