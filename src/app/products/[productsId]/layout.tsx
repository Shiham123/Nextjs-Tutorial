import ProductsFooter from "@/layout/productsLayout/ProductsFooter"
import ProductsHeader from "@/layout/productsLayout/ProductsHeader"
import React from "react"

export default function ProductsDetailsLayout({children}: {children: React.ReactNode}) {
	return (
		<>
			<ProductsHeader />
			{children}
			<ProductsFooter />
		</>
	)
}
