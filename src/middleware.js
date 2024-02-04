import { NextResponse } from 'next/server';
import { verifyJwtToken } from './libs/auth'; 
import { useParams } from 'next/router';

const AUTH_PAGES = ["/login","/confirmbooking",'/register'];

const isAuthPages = (url) => AUTH_PAGES.some((page) => page.startsWith(url));

export async function middleware(request) {

  const { url, nextUrl, cookies } = request;
  const { value: token } = cookies.get("userToken") ?? { value: null };
  const hasVerifiedToken = token && (await verifyJwtToken(token));
  const isAuthPageRequested = isAuthPages(nextUrl.pathname);

  if (isAuthPageRequested) {
    if (!hasVerifiedToken) {
      const response = NextResponse.next();
      response.cookies.delete("userToken");
      return response;
    }
    const response = NextResponse.redirect(new URL(`/`, url));
    return response;
  }

  if (!hasVerifiedToken) {
    const searchParams = new URLSearchParams(nextUrl.searchParams);
    searchParams.set("next", nextUrl.pathname);
    const response = NextResponse.redirect(
      new URL(`/login?${searchParams}`, url)
    );
    response.cookies.delete("userToken");
    return response;
  }
  // Accessing params:
  const pathParts = nextUrl.pathname.split('/');
  const bookingId = pathParts[pathParts.length - 1]; // Assuming booking ID is the last segment

  // Use params as needed:
  console.log('Confirming booking with ID:', bookingId);

  return NextResponse.next();

}
export const config = { matcher: [ "/clientdetails" ,'/cart' ,'/paymentsuccess' , ] };

// '/confirmbooking/:bookingId*'