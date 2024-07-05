import ProductsFooter from "@/layout/productsLayout/ProductsFooter"
import ProductsHeader from "@/layout/productsLayout/ProductsHeader"
import React from "react"

function getRandomInt(count: number) {
	return Math.floor(Math.random() * count)
}

export default function ProductsDetailsLayout({children}: {children: React.ReactNode}) {
	const random = getRandomInt(2)

	if (random === 1) {
		throw new Error("error handle from product details layout")
	}
	return (
		<>
			<ProductsHeader />
			{children}
			<ProductsFooter />
		</>
	)
}
