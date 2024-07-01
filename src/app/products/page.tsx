import Link from "next/link"
import React from "react"

const ProductList = () => {
	return (
		<div>
			<h1>products list</h1>
			<h1>Product one</h1>
			<h1>Product two</h1>
			<h1>Product three</h1>

			<h2>
				<Link href="/">Back to home page</Link>
			</h2>
		</div>
	)
}

export default ProductList
