'use client'

import {
	FormField as FormFieldContainer,
	FormItem,
	FormLabel,
	FormControl,
	FormMessage,
	Input,
	Button
} from '@/components/ui'
import { InputHTMLAttributes, useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { Eye, EyeOff } from 'lucide-react'

type Props<S> = {
	name: keyof S & string
	placeholder?: string
	label: string
} & InputHTMLAttributes<HTMLInputElement>
export function PasswordFormFieldWithSideInput<S>({
	name,
	placeholder,
	label
}: Props<S>) {
	const { control } = useFormContext()

	const [showPassword, setShowPassword] = useState(false)

	const togglePassword = () => {
		setShowPassword(!showPassword)
	}

	return (
		<FormFieldContainer
			control={control}
			name={name}
			render={({ field }) => (
				<FormItem className='mt-4 relative'>
					<div className='flex items-center gap-2'>
						<FormLabel className='text-center w-28' htmlFor={name}>
							{label}
						</FormLabel>
						<FormControl className='relative'>
							<Input
								placeholder={placeholder}
								type={showPassword ? 'text' : 'password'}
								id={name}
								{...field}
							/>
						</FormControl>
						<Button
							className='absolute w-7 h-7 top-1 right-2 rounded-full'
							onClick={togglePassword}
							size='icon'
							type='button'
							variant='ghost'
							aria-label='Toggle password visibility'
						>
							{!showPassword ? (
								<Eye className='p-0.5' />
							) : (
								<EyeOff className='p-0.5' />
							)}
						</Button>
					</div>
					<div className='h-2 text-center'>
						<FormMessage />
					</div>
				</FormItem>
			)}
		/>
	)
}
