"use client"

const ErrorBoundary = ({error, reset}: {error: Error; reset: () => void}) => {
	return (
		<div>
			<h1>{error.message}</h1>
			<button onClick={reset}>Try again to load product</button>
		</div>
	)
}

export default ErrorBoundary
