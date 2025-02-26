export const API_BASE_URL =
	process.env.NEXT_PUBLIC_API_URL || 'http://localhost:2000' // Otherwise, use localhost for browser fetches

export const API_PUBLIC_URL = `${API_BASE_URL}/public/`
