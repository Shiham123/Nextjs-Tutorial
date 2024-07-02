"use client"

import {useRouter} from "next/navigation"

const OrderProduct = () => {
	const router = useRouter()
	return (
		<>
			<h1>Order button</h1>
			<button
				onClick={() => {
					console.log("placing order successfully")
					router.replace("/")
				}}
			>
				place order
			</button>
		</>
	)
}

export default OrderProduct
