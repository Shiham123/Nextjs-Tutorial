import Link from "next/link"

const page = () => {
	return (
		<div>
			<Link href="/blog">
				<h1>navigate to blog</h1>
			</Link>

			<Link href="/products">Navigate to the products</Link>
		</div>
	)
}

export default page
