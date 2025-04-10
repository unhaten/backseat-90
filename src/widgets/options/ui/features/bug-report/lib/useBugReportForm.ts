import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

export const useBugReportForm = (
	schema: z.ZodObject<{
		message: z.ZodString
	}>
) => {
	const form = useForm<z.infer<typeof schema>>({
		resolver: zodResolver(schema),
		defaultValues: { message: '' }
	})
	return form
}
