'use client'

import {
	FormField as FormFieldContainer,
	FormItem,
	FormLabel,
	FormControl,
	FormDescription,
	FormMessage,
	Input
} from '@/components/ui'
import { InputHTMLAttributes } from 'react'
import { useFormContext } from 'react-hook-form'

type Props<S> = {
	name: keyof S & string
	placeholder?: string
	label: string
	description?: string
	type: string
} & InputHTMLAttributes<HTMLInputElement>
export function FormField<S>({
	name,
	placeholder,
	label,
	description,
	type
}: Props<S>) {
	const { control } = useFormContext()

	return (
		<FormFieldContainer
			control={control}
			name={name}
			render={({ field }) => (
				<FormItem className='mt-4'>
					<FormLabel htmlFor={name}>{label}</FormLabel>
					<FormControl>
						<Input
							placeholder={placeholder}
							type={type}
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
				</FormItem>
			)}
		/>
	)
}
