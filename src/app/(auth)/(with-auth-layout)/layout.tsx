"use client"

import React from "react"
import Link from "next/link"
import {usePathname} from "next/navigation"
// import "./style.css"

const navLinks = [
	{name: "register", href: "/register"},
	{name: "login", href: "/login"},
	{name: "forgot", href: "/forgot"},
]

const AuthLayout = ({children}: {children: React.ReactNode}) => {
	const pathname = usePathname()
	return (
		<div>
			{navLinks.map((link) => {
				const isActive = pathname.startsWith(link.href) // that is how next active link define
				return (
					<Link
						key={link.name}
						href={link.href}
						className={isActive ? "text-yellow-300" : "text-red-300"}
					>
						{link.name}
					</Link>
				)
			})}
			<div>{children}</div>
		</div>
	)
}

export default AuthLayout
