// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// This function is called on every request
export function middleware(request: NextRequest) {
  // Check if the user is trying to access a protected route
  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    const token = request.cookies.get('next-auth.session-token'); // Example of checking token

    // If no token, redirect to the login page
    if (!token) {
      return NextResponse.redirect(new URL('/api/auth/signin', request.url));
    }
  }

  // Continue with the request if the token exists or the route is not protected
  return NextResponse.next(); // Let the request continue
}

// Specify the routes that should apply middleware
export const config = {
  matcher: ['/dashboard/:path*'], // Apply middleware to the dashboard route and its sub-routes
};
