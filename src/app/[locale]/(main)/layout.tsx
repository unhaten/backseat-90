import StoreProvider from '@/providers/store'
import { Toaster } from '@/components/ui'
import { ThemeProvider } from '@/providers/theme'
import { QueryProvider } from '@/providers/query/ui'

export default async function MainLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<QueryProvider>
			<ThemeProvider
				attribute='class'
				defaultTheme='system'
				enableSystem
				disableTransitionOnChange
			>
				<StoreProvider>
					<main>{children}</main>
					<Toaster />
				</StoreProvider>
			</ThemeProvider>
		</QueryProvider>
	)
}
