import Link from "next/link"
import React from "react"

const FolderFourPage = () => {
	return (
		<div>
			<h1>folder four page</h1>
			<Link href="/f1/f3">Navigate to folder three page</Link>
			<Link href="/about">About</Link>
		</div>
	)
}

export default FolderFourPage
