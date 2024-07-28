import {NextResponse, type NextRequest} from "next/server"

export function middleware(request: NextRequest) {
	console.log("Request URL:", request.nextUrl.href)
	console.log("Request Pathname:", request.nextUrl.pathname)

	if (request.nextUrl.pathname === "/profile") {
		console.log("Redirecting to /hello")
		return NextResponse.redirect(new URL("/hello", request.url))
	}

	// Fallback to next response
	return NextResponse.next()
}
