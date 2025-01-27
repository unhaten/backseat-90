'use client'

import {
	FormField as FormFieldContainer,
	FormItem,
	FormLabel,
	FormControl,
	FormDescription,
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
	description?: string
} & InputHTMLAttributes<HTMLInputElement>
export function PasswordFormField<S>({
	name,
	placeholder,
	label,
	description
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
					<FormLabel htmlFor={name}>{label}</FormLabel>
					<FormControl className='relative'>
						<Input
							className={'pr-11'}
							placeholder={placeholder}
							type={showPassword ? 'text' : 'password'}
							id={name}
							{...field}
						/>
					</FormControl>
					<FormDescription style={{ marginBottom: 2 }}>
						{description}
					</FormDescription>
					<div className='h-1' style={{ marginTop: 0 }}>
						<FormMessage />
					</div>
					<Button
						className='absolute w-7 h-7 top-[22px] right-2 rounded-full'
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
				</FormItem>
			)}
		/>
	)
}
