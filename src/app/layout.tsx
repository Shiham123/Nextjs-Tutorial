import MainFooter from "@/layout/mainLayout/MainFooter"
import MainHeader from "@/layout/mainLayout/MainHeader"
import {Metadata} from "next"
import React from "react"

export const metadata: Metadata = {
	title: {absolute: "", default: "nextjs Tutorial", template: "%s | codevolution"},
	description: "generated by me",
}

export default function RootLayout({children}: {children: React.ReactNode}) {
	return (
		<html lang="en">
			<body>
				<MainHeader />
				{children}
				<MainFooter /> 
			</body>
		</html>
	)
}
