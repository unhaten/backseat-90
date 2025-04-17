'use client'

import { Button, Dialog, DialogContent, Form } from '@/components/ui'
import { useTranslations } from 'next-intl'
import { toast } from 'sonner'
import { z } from 'zod'
import { BugReportTrigger } from './ui/BugReportTrigger'
import { BugReportHeader } from './ui/BugReportHeader'
import { useBugReportForm } from './lib/useBugReportForm'
import { FormField } from '@/components'
import { useBugReportSchema } from './lib/useBugReportSchema'
import { useMutation } from '@tanstack/react-query'
import { sendBugReport } from '@/api/actions'

export const BugReport = () => {
	const t = useTranslations('HomePage')
	const errorT = useTranslations('errors')

	const schema = useBugReportSchema()
	const form = useBugReportForm(schema)

	const onSubmit = async (values: z.infer<typeof schema>) => {
		await mutation.mutateAsync(values)
	}

	const mutation = useMutation({
		mutationFn: (values: z.infer<typeof schema>) => {
			return sendBugReport(values)
		},
		onSuccess: () => {
			toast.info(t('success'), { description: t('bug-report-sent') })
			form.resetField('message')
		},
		onError: (error: Error) => {
			const key = error instanceof Error ? error.message : 'unknown-error'
			toast.warning(errorT('error'), {
				description: errorT(key)
			})
		}
	})

	return (
		<Dialog>
			<BugReportTrigger />
			<DialogContent>
				<BugReportHeader />
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)}>
						<FormField<z.infer<typeof schema>>
							name='message'
							placeholder={t('enter-message')}
							label={t('message')}
							description={t('tell-us-message')}
							type='text'
							disableSuggestions='off'
						/>
						<Button
							type='submit'
							disabled={mutation.isPending}
							className='mt-5 min-w-full'
						>
							{t('send')}
						</Button>
					</form>
				</Form>
			</DialogContent>
		</Dialog>
	)
}
