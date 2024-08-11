import {NextResponse, type NextRequest} from "next/server"

// ! normal middleware set
/*
export function middleware(request: NextRequest) {
	console.log("Request URL:", request.nextUrl.href)
	console.log("Request Pathname:", request.nextUrl.pathname)

	if (request.nextUrl.pathname === "/profile") {
		console.log("Redirecting to /hello")
		return NextResponse.redirect(new URL("/hello", request.url))
	}

	return NextResponse.next()
}
*/

// !set cookies
/*
export function middleware(request: NextRequest) {
	const response = NextResponse.next()
	const themePreference = request.cookies.get("theme")

	if (!themePreference) {  
		response.cookies.set("theme", "dark")
	}

	return response
} 
*/

// ! set headers
/*
export function middleware(request: NextRequest) {
	const response = NextResponse.next()
	response.headers.set("custom-header", "custom-value")

	return response
}
*/
