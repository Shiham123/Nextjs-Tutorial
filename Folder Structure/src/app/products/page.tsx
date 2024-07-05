import Link from "next/link"
import React from "react"

const ProductList = () => {
	const productId = 100

	return (
		<div>
			<h1>products list</h1>
			<h1>Product one</h1>
			<h1>Product two</h1>
			<Link href="/products/3" replace>
				<h1>Product three</h1>
			</Link>

			<h2>
				<Link href={`products/${productId}`}>Dynamic route</Link>
			</h2>

			<h2>
				<Link href="/">Back to home page</Link>
			</h2>
		</div>
	)
}

export default ProductList
