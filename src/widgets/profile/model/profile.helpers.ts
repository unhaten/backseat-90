export const formatName = (name: string) => {
	const words = name.trim().split(/\s+/)
	if (words.length > 1) {
		return words[0][0].toUpperCase() + words[1][0].toUpperCase()
	}
	if (name.length <= 4) return name.toUpperCase()
	return name.slice(0, 2).toUpperCase() + name.slice(-2).toUpperCase()
}
