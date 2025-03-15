import { removeFromBookmarks } from '@/api/actions'
import { HeaderText } from '@/components'
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
import { setLike } from '@/entities/song'
import { SongImage, SongInfo } from '@/entities/song/components'
import { useAppDispatch } from '@/lib/hooks/redux'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { Trash2 } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { toast } from 'sonner'

type Props = {
	thumbnail: string
	author: string
	title: string
	id: string
}

export const DeleteButton = ({ thumbnail, author, title, id }: Props) => {
	const t = useTranslations('HomePage')

	const queryClient = useQueryClient()
	const dispatch = useAppDispatch()

	const mutation = useMutation({
		mutationKey: ['is-liked', 'bookmarks'],
		mutationFn: (songId: string) => removeFromBookmarks(songId),
		onSuccess: () => {
			dispatch(setLike(false))
			queryClient.invalidateQueries({
				queryKey: ['is-liked']
			})
			// TODO: instead of refetch just remove this song in order not to make another request to server + better ux
			queryClient.refetchQueries({
				queryKey: ['bookmarks']
			})
		}
	})

	const handleDelete = async (songId: string) => {
		await mutation.mutateAsync(songId)
		toast.error(t('deleted'), {
			description: `${t('track-word')} "${author} - ${title}"${t(
				'track-word-ext'
			)}`
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
						<HeaderText text={t('delete-track')} />
					</AlertDialogTitle>
					<AlertDialogDescription>
						{t('delete-track-description')}
					</AlertDialogDescription>
				</AlertDialogHeader>
				<div className='flex gap-3 items-center justify-center w-fit mx-auto'>
					<SongImage thumbnail={thumbnail} forLikedSongs />
					<SongInfo title={title} author={author} />
				</div>
				<AlertDialogFooter className='grid grid-cols-2 gap-3 items-center'>
					<AlertDialogCancel className='' style={{ margin: 0 }}>
						{t('cancel')}
					</AlertDialogCancel>
					<AlertDialogAction
						className='bg-destructive hover:bg-destructive/80 text-white'
						style={{ margin: 0 }}
						onClick={() => handleDelete(id)}
					>
						{t('delete')}
					</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	)
}
