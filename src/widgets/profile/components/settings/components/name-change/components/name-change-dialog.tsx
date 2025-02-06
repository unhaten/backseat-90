import { Avatar, AvatarFallback } from '@/components/ui'
import { Button } from '@/components/ui/button'
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

type Props = {
	name: string
}

export const NameChangeDialog = ({ name }: Props) => {
	const formatName = (name: string) => {
		const words = name.trim().split(/\s+/)
		if (words.length > 1) {
			return words[0][0].toUpperCase() + words[1][0].toUpperCase()
		}

		if (name.length <= 4) return name.toUpperCase()

		return name.slice(0, 2).toUpperCase() + name.slice(-2).toUpperCase()
	}

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Avatar className='cursor-pointer'>
					<AvatarFallback className='text-sm bg-secondary font-medium hover:bg-secondary/80 transition-colors'>
						{formatName(name)}
					</AvatarFallback>
				</Avatar>
			</DialogTrigger>
			<DialogContent className='sm:max-w-[425px]'>
				<DialogHeader>
					<DialogTitle>Edit name</DialogTitle>
					<DialogDescription>Change your name here</DialogDescription>
				</DialogHeader>
				<div className='grid gap-4 py-4'>
					<div className='grid grid-cols-4 items-center gap-4'>
						<Label htmlFor='name' className='text-right'>
							Name
						</Label>
						<Input
							id='name'
							defaultValue={name}
							className='col-span-3'
						/>
					</div>
				</div>
				<DialogFooter>
					<Button type='submit'>Save changes</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	)
}
