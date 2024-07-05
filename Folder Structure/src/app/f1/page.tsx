import Link from "next/link"
import React from "react"

const FolderOne = () => {
	return (
		<div>
			<h1>folder one page</h1>
			<Link href="/f1/f2">Navigate to folder two</Link>
		</div>
	)
}

export default FolderOne
