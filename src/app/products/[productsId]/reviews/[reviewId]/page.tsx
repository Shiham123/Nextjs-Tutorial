import {notFound} from "next/navigation"

const ReviewsDetails = ({params}: {productsId: string; reviewId: string}) => {
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
