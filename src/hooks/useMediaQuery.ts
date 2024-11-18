import { useEffect, useState } from 'react'

export function useMediaQuery(query: string): boolean {
	const [matches, setMatches] = useState(false)

	useEffect(() => {
		const matchQueryList = window.matchMedia(query)

		function handleChange(e: MediaQueryListEvent) {
			setMatches(e.matches)
		}

		setMatches(matchQueryList.matches)

		matchQueryList.addEventListener('change', handleChange)
		return () => {
			matchQueryList.removeEventListener('change', handleChange)
		}
	}, [query])

	return matches
}
