import {Metadata} from "next"

export const metadata: Metadata = {title: {absolute: "blog"}}
// export const metadata: Metadata = {title: "blog"} title metadata different way

const page = () => {
	return (
		<div>
			<h1>blog folder</h1>
		</div>
	)
}

export default page
