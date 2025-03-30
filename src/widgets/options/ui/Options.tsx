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
				<DropdownMenuItem asChild>
					<ChangeImage />
				</DropdownMenuItem>
				<DropdownMenuSeparator />
				<DropdownMenuItem asChild>
					<NewsFeed />
				</DropdownMenuItem>
				<DropdownMenuSeparator />
				<DropdownMenuItem asChild>
					<Pomodoro />
				</DropdownMenuItem>
				<DropdownMenuSeparator />
				<DropdownMenuItem asChild>
					<BugReport />
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
