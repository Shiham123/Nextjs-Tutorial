const DocsSlug = ({params: {slug}}: {params: {slug: string[]}}) => {
	return (
		<div>
			<h1>docs {slug}</h1>
		</div>
	)
}

export default DocsSlug
