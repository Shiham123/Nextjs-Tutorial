"use client"

import React from "react"
import {notFound} from "next/navigation"

interface ReviewsDetailsProps {
	params: {productsId: string; reviewId: string}
}

function getRandomInt(count: number) {
	return Math.floor(Math.random() * count)
}

const ReviewsDetails: React.FC<ReviewsDetailsProps> = ({params}) => {
	const random = getRandomInt(2)

	if (random === 1) {
		throw new Error("error from random number generated")
	}


	
	if (parseInt(params.reviewId) > 1000) {
		notFound()
	}

	return (
		<div>
			<h1>
				reviews {params.reviewId} products {params.productsId}
			</h1>
		</div>
	)
}

export default ReviewsDetails
