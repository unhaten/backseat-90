import {
	Button,
	AlertDialogHeader,
	AlertDialogFooter,
	AlertDialog,
	AlertDialogTrigger,
	AlertDialogContent,
	AlertDialogTitle,
	AlertDialogDescription,
	AlertDialogCancel,
	AlertDialogAction
} from '@/components/ui'
import { SongImage, SongInfo } from '@/entities/song/components'
import { Trash2 } from 'lucide-react'
import { toast } from 'sonner'

type Props = {
	thumbnail: string
	author: string
	title: string
	id?: number
}

export const DeleteButton = ({ thumbnail, author, title }: Props) => {
	const handleDelete = (author: string, title: string) => {
		toast.error('Deleted', {
			description: `Track "${author} - ${title}" is removed from favorites`
		})
	}

	return (
		<AlertDialog>
			<AlertDialogTrigger asChild>
				<Button
					size='icon'
					variant='destructive'
					className='absolute top-1 right-1 w-6 h-6 rounded-full'
				>
					<Trash2 className='p-1' />
				</Button>
			</AlertDialogTrigger>
			<AlertDialogContent className='max-w-96'>
				<AlertDialogHeader>
					<AlertDialogTitle className='text-2xl font-bebasNeue text-center text-rose-500'>
						Delete track?
					</AlertDialogTitle>
					<AlertDialogDescription>
						This action cannot be undone. This will permanently
						delete this track from your favorites.
					</AlertDialogDescription>
				</AlertDialogHeader>
				<div className='flex gap-3 items-center justify-center w-fit mx-auto'>
					<SongImage thumbnail={thumbnail} forLikedSongs />
					<SongInfo title={title} author={author} />
				</div>
				<AlertDialogFooter className='grid grid-cols-2 gap-3'>
					<AlertDialogCancel className=''>Cancel</AlertDialogCancel>
					<AlertDialogAction
						className='bg-destructive hover:bg-destructive/80 text-white'
						style={{ margin: 0 }}
						onClick={() => handleDelete(author, title)}
					>
						Delete
					</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	)
}
