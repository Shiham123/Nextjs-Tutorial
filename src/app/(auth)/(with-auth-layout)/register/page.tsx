"use client"

import Link from "next/link"
import {usePathname} from "next/navigation"

const navLinks = [
	{name: "Register", href: "/register"},
	{name: "Login", href: "/login"},
	{name: "forgot", href: "/forgot"},
]

const Register = () => {
	const pathname = usePathname()

	return (
		<>
			<h1>This is register</h1>

			{navLinks.map((link) => {
				const isActive = pathname.startsWith(link.href)

				return (
					<Link
						href={link.href}
						key={link.name}
						className={isActive ? "text-yellow-500" : "text-red-700"}
					>
						<h1>{link.name}</h1>
					</Link>
				)
			})}
		</>
	)
}

export default Register
