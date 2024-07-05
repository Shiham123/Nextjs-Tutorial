import Card from "@/components/card"
import Link from "next/link"
import React from "react"

const Archived = () => {
	return (
		<Card>
			This is ar <Link href="/complex-dashboard">archived notifications</Link>
		</Card>
	)
}

export default Archived
