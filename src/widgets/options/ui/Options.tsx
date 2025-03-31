'use client'

import {
	DropdownMenu,
	DropdownMenuTrigger,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	Button
} from '@/components/ui'
import { ChangeImage } from '@/widgets/background-image/ui/change-image/ChangeImage'
import { List } from 'lucide-react'
import { NewsFeed } from './news-feed/NewsFeed'
import { Pomodoro } from '@/widgets/pomodoro'
import { BugReport } from './bug-report/BugReport'

const COMPONENTS = [ChangeImage, NewsFeed, Pomodoro, BugReport]

export const Options = () => {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					className='absolute top-2 left-2 rounded-full p-1.5 cursor-pointer'
					variant={'outline'}
					size='icon'
				>
					<List />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className='min-w-9 flex flex-col'>
				{COMPONENTS.map((Component, index) => [
					<DropdownMenuItem key={`item-${index}`} asChild>
						<Component />
					</DropdownMenuItem>,
					index < COMPONENTS.length - 1 && (
						<DropdownMenuSeparator key={`sep-${index}`} />
					)
				])}
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
