import MainFooter from "@/layout/mainLayout/MainFooter"
import MainHeader from "@/layout/mainLayout/MainHeader"
import React from "react"

export const metadata = {
	title: "Next js tutorial",
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
