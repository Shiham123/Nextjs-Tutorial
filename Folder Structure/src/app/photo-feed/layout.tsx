import React from "react"
import "./style.css"

interface PhotoFeedLayoutProps {
	modal: React.ReactNode
	children: React.ReactNode
}

const PhotoFeedLayout: React.FC<PhotoFeedLayoutProps> = ({modal, children}) => {
	return (
		<>
			{modal}
			{children}
		</>
	)
}

export default PhotoFeedLayout
