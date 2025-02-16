import {
	Button,
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
	ScrollArea,
	ScrollBar,
	DrawerDescription
} from '@/components/ui'
import { Bookmark as BookmarkIcon } from 'lucide-react'
import { LikedList } from './components'
import { useProfileNoRetry } from '@/lib/hooks/react-query'

export const Bookmarks = ({}) => {
	const { isSuccess: isAuthorized } = useProfileNoRetry()

	return (
		<Drawer>
			<DrawerTrigger asChild>
				<Button
					size='icon'
					className='shrink-0 ml-auto'
					disabled={!isAuthorized}
				>
					<BookmarkIcon />
				</Button>
			</DrawerTrigger>
			<DrawerContent className='h-full max-h-80 md:max-h-96'>
				<DrawerHeader>
					<DrawerTitle className='text-center text-2xl font-bebasNeue'>
						Liked tracks
					</DrawerTitle>
					<DrawerDescription className='text-center'>
						Here are all tracks that you liked
					</DrawerDescription>
				</DrawerHeader>
				<ScrollArea className=''>
					<LikedList />
					<ScrollBar />
				</ScrollArea>
				<DrawerFooter>
					<DrawerClose asChild>
						<Button variant='outline'>Close</Button>
					</DrawerClose>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	)
}
