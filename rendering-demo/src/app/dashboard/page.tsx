"use client"

import React, {useState} from "react"

export default function DashboardPage() {
	const [name, setName] = useState("")
	return (
		<div>
			<h1>dashboard page</h1>
			<input type="text" value={name} onChange={(e) => setName(e.target.value)} />
			<p>hello, {name}</p>
		</div>
	)
}
