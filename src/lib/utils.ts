import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { ERROR_MESSAGES } from './types/errors'

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

// Function to detect if the text contains Cyrillic characters
export const containsCyrillic = (text: string) => {
	return /[\u0400-\u04FF\u0500-\u052F]/.test(text) // Matches Cyrillic Unicode range
}

interface ErrorResponse {
	error: string
	message: string | string[]
	statusCode: number
}

export type ServerActionResult<T> =
	| { success: true; value: T }
	| { success: false; error: string }

export class ServerActionError extends Error {
	constructor(message: string) {
		super(message)
		this.name = 'ServerActionError'
	}
}

export function createServerAction<Return, Args extends unknown[] = []>(
	callback: (...args: Args) => Promise<Return>
): (...args: Args) => Promise<ServerActionResult<Return>> {
	return async (...args: Args) => {
		try {
			const value = await callback(...args)
			return { success: true, value }
		} catch (error) {
			if (error instanceof ServerActionError)
				return { success: false, error: error.message }
			throw error
		}
	}
}

export function serverActionToQueryFn<T>(
	action: () => Promise<ServerActionResult<T>>
): () => Promise<T> {
	return async () => {
		const result = await action()

		if (!result.success) {
			throw new Error(result.error) // или ServerActionError(result.error)
		}

		return result.value
	}
}

export function handleErrors(error: unknown): never {
	console.error(error)
	if (error instanceof TypeError) {
		throw new Error(
			'Unable to connect to the server. Please check your network connection or try again later.'
		)
	}
	if (error instanceof Error) {
		throw error
	}
	throw new Error('Something went wrong')
}

export function handleResponseErrorArray(
	response: Response,
	data: ErrorResponse
): void {
	if (!response.ok) {
		throw new Error(
			Array.isArray(data.message) ? data.message.join(', ') : data.message
		)
	}
}

export function getErrorMessageKey(error: unknown): string {
	if (error instanceof TypeError) return ERROR_MESSAGES.network
	if (error instanceof Error) return error.message
	return ERROR_MESSAGES.generic
}
