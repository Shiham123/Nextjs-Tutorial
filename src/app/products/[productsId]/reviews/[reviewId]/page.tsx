const ReviewsDetails = ({params}: {productsId: string; reviewId: string}) => {
	return (
		<div>
			<h1>
				reviews {params.reviewId} products {params.productsId}
			</h1>
		</div>
	)
}

export default ReviewsDetails
