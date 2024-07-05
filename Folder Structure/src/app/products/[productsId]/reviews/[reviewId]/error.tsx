"use client"

const ErrorBoundary = ({error, reset}: {error: Error; reset: () => void}) => {
	return (
		<div>
			<h1>{error.message} in reviews id</h1>
			<button onClick={reset}>Try again</button>
		</div>
	)
}

export default ErrorBoundary
