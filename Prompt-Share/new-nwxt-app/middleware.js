import { NextResponse } from "next/server";



export async function middleware(req) {
    console.log("Middleware Running...");




    // Example: Blocking access to "/dashboard" if not logged in
    const theToken = "Bearer 14567";
    const authToken = req.cookies.get("token"); // Get token from cookies
    if (authToken !== theToken && req.nextUrl.pathname.startsWith("/api/comments")) {
        return NextResponse.redirect(new URL("/", req.url)); // Redirect to login
    }

    console.log("we can now continue Token is AKtifffff")
    return NextResponse.next(); // Allow request to continue
}

// Apply middleware to specific routes
export const config = {
    matcher: ["/api/comments"], // Protects /dashboard and all subroutes
};