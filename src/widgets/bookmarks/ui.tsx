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
import { useTranslations } from 'next-intl'
import { HeaderText } from '@/components'

export const Bookmarks = ({}) => {
	const t = useTranslations('HomePage')
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
					<DrawerTitle className='text-center text-2xl'>
						<HeaderText text={t('liked-tracks')} />
					</DrawerTitle>
					<DrawerDescription className='text-center'>
						{t('liked-tracks-description')}
					</DrawerDescription>
				</DrawerHeader>
				<ScrollArea className=''>
					<LikedList />
					<ScrollBar />
				</ScrollArea>
				<DrawerFooter>
					<DrawerClose asChild>
						<Button variant='outline'>{t('close')}</Button>
					</DrawerClose>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	)
}
