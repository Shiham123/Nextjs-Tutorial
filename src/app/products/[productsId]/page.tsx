import {Metadata} from "next"

export const generateMetadata = async ({params}: Props): Promise<Metadata> => {
	const title = await new Promise((resolve) => {
		setTimeout(() => {
			resolve(`iPhone ${params.productsId}`)
		}, 1000)
	})
	return {title: `Products ${title}`}
}

type Props = {params: {productsId: string}}

const Page = ({params}: Props) => (
	<div>
		<h1>Products details page {params.productsId}</h1>
	</div>
)

export default Page
