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
	ScrollBar
	// DrawerDescription
} from '@/components/ui'
import { Bookmark as BookmarkIcon } from 'lucide-react'
import { LikedList } from './components'

export const Bookmarks = ({ isDataLoading }: { isDataLoading: boolean }) => {
	return (
		<Drawer>
			<DrawerTrigger asChild>
				<Button size='icon' className='shrink-0 ml-auto'>
					<BookmarkIcon />
				</Button>
			</DrawerTrigger>
			<DrawerContent className='h-full max-h-80 md:max-h-96'>
				<DrawerHeader>
					<DrawerTitle className='text-center text-2xl'>
						Liked tracks
					</DrawerTitle>
				</DrawerHeader>
				<ScrollArea className=''>
					<LikedList />
					<ScrollBar />
				</ScrollArea>
				<DrawerFooter>
					<DrawerClose asChild>
						<Button variant='outline' disabled={isDataLoading}>
							Close
						</Button>
					</DrawerClose>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	)
}
