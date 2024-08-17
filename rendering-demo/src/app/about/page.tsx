import Link from "next/link"
import React, {useState} from "react"

export default function AboutPage() {
	console.log("about server components")
	return (
		<div>
			<h1>about page</h1>
			<Link href="/dashboard">Dashboard</Link>
		</div>
	)
}
